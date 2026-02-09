import { assertExists } from '@blocksuite/global/utils';
import { Slot } from '@blocksuite/store';
import { last } from '../../_common/utils/iterable.js';
import { clamp } from '../../_common/utils/math.js';
import { SurfaceGroupLikeModel, } from '../../surface-block/element-model/base.js';
import { getCommonBound, MindmapElementModel, } from '../../surface-block/index.js';
import { LayerManager } from '../../surface-block/managers/layer-manager.js';
import { compare } from '../../surface-block/managers/layer-utils.js';
import { Bound } from '../../surface-block/utils/bound.js';
import { RootService } from '../root-service.js';
import { EdgelessBlockModel } from './edgeless-block-model.js';
import { EdgelessFrameManager } from './frame-manager.js';
import { EdgelessSelectionManager } from './services/selection-manager.js';
import { TemplateJob } from './services/template.js';
import { createInsertPlaceMiddleware, createRegenerateIndexMiddleware, createStickerMiddleware, replaceIdMiddleware, } from './services/template-middlewares.js';
import { EdgelessToolsManager } from './services/tools-manager.js';
import { FIT_TO_SCREEN_PADDING } from './utils/consts.js';
import { getCursorMode } from './utils/query.js';
import { EdgelessSnapManager } from './utils/snap-manager.js';
import { Viewport, ZOOM_INITIAL, ZOOM_MAX, ZOOM_MIN, ZOOM_STEP, } from './utils/viewport.js';
export class EdgelessRootService extends RootService {
    constructor() {
        super(...arguments);
        this.TemplateJob = TemplateJob;
        this.slots = {
            edgelessToolUpdated: new Slot(),
            pressShiftKeyUpdated: new Slot(),
            cursorUpdated: new Slot(),
            copyAsPng: new Slot(),
            readonlyUpdated: new Slot(),
            draggingAreaUpdated: new Slot(),
            navigatorSettingUpdated: new Slot(),
            navigatorFrameChanged: new Slot(),
            fullScreenToggled: new Slot(),
            elementResizeStart: new Slot(),
            elementResizeEnd: new Slot(),
            toggleNoteSlicer: new Slot(),
            docLinkClicked: new Slot(),
            tagClicked: new Slot(),
            toolbarLocked: new Slot(),
        };
    }
    get tool() {
        return this._tool;
    }
    get surface() {
        return this._surface;
    }
    get layer() {
        return this._layer;
    }
    get selection() {
        return this._selection;
    }
    get viewport() {
        return this._viewport;
    }
    get frame() {
        return this._frame;
    }
    get snap() {
        return this._snap;
    }
    /**
     * sorted canvas elements
     */
    get elements() {
        return this._layer.canvasElements;
    }
    /**
     * sorted edgeless elements
     */
    get edgelessElements() {
        return [
            ...this._layer.canvasElements,
            ...this._layer.blocks,
            ...this._layer.frames,
        ].sort(compare);
    }
    get frames() {
        return this._layer.frames;
    }
    get blocks() {
        return this.frames.concat(this._layer.blocks);
    }
    get zoom() {
        return this.viewport.zoom;
    }
    get locked() {
        return this.viewport.locked;
    }
    set locked(locked) {
        this.viewport.locked = locked;
    }
    get host() {
        return this.std.host;
    }
    _initSlotEffects() {
        const { disposables, slots } = this;
        disposables.add(slots.edgelessToolUpdated.on(edgelessTool => {
            slots.cursorUpdated.emit(getCursorMode(edgelessTool));
        }));
        disposables.add(slots.pressShiftKeyUpdated.on(pressed => {
            this.tool.shiftKey = pressed;
        }));
    }
    _initReadonlyListener() {
        const doc = this.doc;
        let readonly = doc.readonly;
        this.disposables.add(doc.awarenessStore.slots.update.on(() => {
            if (readonly !== doc.readonly) {
                readonly = doc.readonly;
                this.slots.readonlyUpdated.emit(readonly);
            }
        }));
    }
    mounted() {
        super.mounted();
        this._surface = this.doc.getBlockByFlavour('affine:surface')[0];
        if (!this._surface) {
            throw new Error('surface block not found');
        }
        this._layer = LayerManager.create(this.doc, this._surface);
        this._frame = new EdgelessFrameManager(this);
        this._snap = new EdgelessSnapManager(this);
        this._viewport = new Viewport();
        this._selection = new EdgelessSelectionManager(this);
        this._tool = EdgelessToolsManager.create(this, []);
        this._initSlotEffects();
        this._initReadonlyListener();
    }
    unmounted() {
        super.unmounted();
        this._layer.dispose();
        this._selection.dispose();
        this.selectionManager.set([]);
        this.viewport.dispose();
        this.tool.dispose();
        this.disposables.dispose();
        this._frame.dispose();
    }
    generateIndex(type) {
        // @ts-ignore
        return this._layer.generateIndex(type);
    }
    addElement(type, props) {
        // @ts-ignore
        if (props['index'] === undefined) {
            // @ts-ignore
            props['index'] = this.generateIndex(type);
        }
        // @ts-ignore
        props['type'] = type;
        this.editPropsStore.apply(type, props);
        return this._surface.addElement(props);
    }
    addBlock(flavour, props, parent, parentIndex) {
        props['index'] = this.generateIndex(flavour);
        this.editPropsStore.apply(flavour, props);
        return this.doc.addBlock(flavour, props, parent, parentIndex);
    }
    getElementsByType(type) {
        return this.surface.getElementsByType(type);
    }
    updateElement(id, props) {
        const element = this._surface.getElementById(id);
        if (element) {
            this.editPropsStore.record(element.type, props);
            this._surface.updateElement(id, props);
            return;
        }
        const block = this.doc.getBlockById(id);
        if (block) {
            this.editPropsStore.record(block.flavour, props);
            this.doc.updateBlock(block, props);
        }
    }
    removeElement(id) {
        id = typeof id === 'string' ? id : id.id;
        const el = this.getElementById(id);
        if (el instanceof EdgelessBlockModel) {
            this.doc.deleteBlock(el);
            return;
        }
        if (this._surface.hasElementById(id)) {
            this._surface.removeElement(id);
            return;
        }
    }
    getElementById(id) {
        const el = this._surface.getElementById(id) ??
            this.doc.getBlockById(id);
        return el;
    }
    pickElement(x, y, options = { all: false, expand: 10 }) {
        options.expand ??= 10;
        options.zoom = this._viewport.zoom;
        const hitTestBound = {
            x: x - options.expand / 2,
            y: y - options.expand / 2,
            w: options.expand,
            h: options.expand,
        };
        const pickCanvasElement = () => {
            const candidates = this._layer.canvasGrid.search(hitTestBound);
            const picked = candidates.filter(element => element.hitTest(x, y, options, this.host) ||
                element.externalBound?.isPointInBound([x, y]));
            return picked;
        };
        const pickBlock = () => {
            const candidates = this._layer.blocksGrid.search(hitTestBound);
            const picked = candidates.filter(element => element.hitTest(x, y, options, this.host) ||
                element.externalBound?.isPointInBound([x, y]));
            return picked;
        };
        const pickFrames = () => {
            return this._layer.frames.filter(frame => frame.hitTest(x, y, options) ||
                frame.externalBound?.isPointInBound([x, y]));
        };
        const frames = pickFrames();
        if (frames.length === 0 || options.all) {
            let results = pickCanvasElement().concat(pickBlock());
            // FIXME: optimazation on ordered element
            results.sort(this._layer.compare);
            results = results.concat(frames);
            return options.all ? results : last(results) ?? null;
        }
        else {
            return last(frames) ?? null;
        }
    }
    pickElementsByBound(bound, type = 'all') {
        bound = new Bound(bound.x, bound.y, bound.w, bound.h);
        const pickCanvasElement = () => {
            const candidates = this._layer.canvasGrid.search(bound);
            const picked = candidates.filter(element => element.boxSelect(bound));
            return picked;
        };
        const pickBlock = () => {
            const candidates = this._layer.blocksGrid.search(bound);
            const picked = candidates.filter(element => element.boxSelect(bound));
            return picked;
        };
        const pickFrames = () => {
            const candidates = this._layer.framesGrid.search(bound);
            return candidates.filter(frame => frame.boxSelect(bound));
        };
        switch (type) {
            case 'canvas':
                return pickCanvasElement();
            case 'blocks':
                return pickBlock().concat(pickFrames());
            case 'frame':
                return pickFrames();
            case 'all': {
                const results = pickCanvasElement().concat(pickBlock());
                results.sort(this._layer.compare);
                return results.concat(pickFrames());
            }
        }
    }
    /**
     * This method is used to pick element in group, if the picked element is in a
     * group, we will pick the group instead. If that picked group is currently selected, then
     * we will pick the element itself.
     */
    pickElementInGroup(x, y, options) {
        const selectionManager = this._selection;
        const results = this.pickElement(x, y, {
            ...options,
            all: true,
        });
        let picked = last(results) ?? null;
        const { activeGroup } = selectionManager;
        const first = picked;
        if (activeGroup && picked && activeGroup.hasDescendant(picked.id)) {
            let index = results.length - 1;
            while (picked === activeGroup ||
                (picked instanceof SurfaceGroupLikeModel &&
                    picked.hasDescendant(activeGroup))) {
                picked = results[--index];
            }
        }
        else if (picked) {
            let index = results.length - 1;
            while (picked.group !== null) {
                if (--index < 0) {
                    picked = null;
                    break;
                }
                picked = results[index];
            }
        }
        return (picked ?? first);
    }
    reorderElement(element, direction) {
        const index = this._layer.getReorderedIndex(element, direction);
        // block should be updated in transaction
        if (element instanceof EdgelessBlockModel) {
            this.doc.transact(() => {
                element.index = index;
            });
        }
        else {
            element.index = index;
        }
    }
    createGroup(elements) {
        const groups = this.elements.filter(el => el.type === 'group');
        const groupId = this._surface.addElement({
            type: 'group',
            children: elements.reduce((pre, el) => {
                const id = typeof el === 'string' ? el : el.id;
                pre[id] = true;
                return pre;
            }, {}),
            title: `Group ${groups.length + 1}`,
        });
        return groupId;
    }
    createGroupFromSelected() {
        const { selection } = this;
        if (selection.selectedElements.length === 0 ||
            !selection.selectedElements.every(element => element.group === selection.firstElement.group &&
                !(element.group instanceof MindmapElementModel))) {
            return;
        }
        const parent = selection.firstElement.group;
        if (parent !== null) {
            selection.selectedElements.forEach(element => {
                // eslint-disable-next-line unicorn/prefer-dom-node-remove
                parent.removeChild(element.id);
            });
        }
        const groupId = this.createGroup(selection.selectedElements);
        if (parent !== null) {
            parent.addChild(groupId);
        }
        selection.set({
            editing: false,
            elements: [groupId],
        });
        return groupId;
    }
    ungroup(group) {
        const { selection } = this;
        const elements = group.childElements;
        const parent = group.group;
        if (group instanceof MindmapElementModel) {
            return;
        }
        if (parent !== null) {
            // eslint-disable-next-line unicorn/prefer-dom-node-remove
            parent.removeChild(group.id);
        }
        elements.forEach(element => {
            // eslint-disable-next-line unicorn/prefer-dom-node-remove
            group.removeChild(element.id);
        });
        elements.forEach(element => {
            // @ts-ignore
            const elementType = element.type || element.flavour;
            element.index = this.generateIndex(elementType);
        });
        if (parent !== null) {
            elements.forEach(element => {
                parent.addChild(element.id);
            });
        }
        selection.set({
            editing: false,
            elements: elements.map(ele => ele.id),
        });
    }
    registerTool(Tool) {
        return this.tool.register(Tool);
    }
    getConnectors(element) {
        const id = typeof element === 'string' ? element : element.id;
        return this.surface.getConnectors(id);
    }
    createTemplateJob(type) {
        const middlewares = [];
        if (type === 'template') {
            const currentContentBound = getCommonBound(this.blocks.map(block => Bound.deserialize(block.xywh)).concat(this.elements));
            if (currentContentBound) {
                currentContentBound.x +=
                    currentContentBound.w + 20 / this.viewport.zoom;
                middlewares.push(createInsertPlaceMiddleware(currentContentBound));
            }
            const idxGenerator = this.layer.createIndexGenerator(true);
            middlewares.push(createRegenerateIndexMiddleware((type) => idxGenerator(type)));
        }
        if (type === 'sticker') {
            middlewares.push(createStickerMiddleware(this.viewport.center, () => this.layer.generateIndex('affine:image')));
        }
        middlewares.push(replaceIdMiddleware);
        return TemplateJob.create({
            model: this.surface,
            type,
            middlewares,
        });
    }
    setZoomByStep(step) {
        this.viewport.smoothZoom(clamp(this.zoom + step, ZOOM_MIN, ZOOM_MAX));
    }
    zoomToFit() {
        const { centerX, centerY, zoom } = this.getFitToScreenData();
        this.viewport.setViewport(zoom, [centerX, centerY], true);
    }
    getFitToScreenData(padding = [0, 0, 0, 0], inputBounds) {
        let bounds = [];
        if (inputBounds && inputBounds.length) {
            bounds = inputBounds;
        }
        else {
            this.blocks.forEach(block => {
                bounds.push(Bound.deserialize(block.xywh));
            });
            const surfaceElementsBound = getCommonBound(this.elements);
            if (surfaceElementsBound) {
                bounds.push(surfaceElementsBound);
            }
        }
        const [pt, pr, pb, pl] = padding;
        const { viewport } = this;
        let { centerX, centerY, zoom } = viewport;
        if (bounds.length) {
            const { width, height } = viewport;
            const bound = getCommonBound(bounds);
            assertExists(bound);
            zoom = Math.min((width - FIT_TO_SCREEN_PADDING - (pr + pl)) / bound.w, (height - FIT_TO_SCREEN_PADDING - (pt + pb)) / bound.h);
            zoom = clamp(zoom, ZOOM_MIN, ZOOM_INITIAL);
            centerX = bound.x + (bound.w + pr / zoom) / 2 - pl / zoom / 2;
            centerY = bound.y + (bound.h + pb / zoom) / 2 - pt / zoom / 2;
        }
        else {
            zoom = ZOOM_INITIAL;
        }
        return { zoom, centerX, centerY };
    }
    setZoomByAction(action) {
        if (this.locked)
            return;
        switch (action) {
            case 'fit':
                this.zoomToFit();
                break;
            case 'reset':
                this.viewport.smoothZoom(1.0);
                break;
            case 'in':
            case 'out':
                this.setZoomByStep(ZOOM_STEP * (action === 'in' ? 1 : -1));
        }
    }
}
//# sourceMappingURL=edgeless-root-service.js.map