var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import '../../surface-block/surface-block.js';
import './components/block-portal/frame/edgeless-frame.js';
import './components/toolbar/edgeless-toolbar.js';
import { BlockElement } from '@blocksuite/block-std';
import { IS_WINDOWS } from '@blocksuite/global/env';
import { assertExists, throttle } from '@blocksuite/global/utils';
import { css, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { toast } from '../../_common/components/toast.js';
import { BLOCK_ID_ATTR, EMBED_CARD_HEIGHT, EMBED_CARD_WIDTH, } from '../../_common/consts.js';
import { ThemeObserver } from '../../_common/theme/theme-observer.js';
import { asyncFocusRichText, handleNativeRangeAtPoint, isPinchEvent, NoteDisplayMode, on, Point, requestConnectedFrame, } from '../../_common/utils/index.js';
import { humanFileSize } from '../../_common/utils/math.js';
import { setAttachmentUploaded, setAttachmentUploading, } from '../../attachment-block/utils.js';
import { Bound, normalizeWheelDeltaY, serializeXYWH, Vec, } from '../../surface-block/index.js';
import { EdgelessToolbar } from './components/toolbar/edgeless-toolbar.js';
import { calcBoundByOrigin, readImageSize } from './components/utils.js';
import { EdgelessClipboardController } from './controllers/clipboard.js';
import { BrushToolController, ConnectorToolController, CopilotSelectionController, DefaultToolController, EraserToolController, FrameToolController, LassoToolController, MindmapToolController, NoteToolController, PanToolController, PresentToolController, ShapeToolController, TemplateToolController, TextToolController, } from './controllers/tools/index.js';
import { EdgelessPageKeyboardManager } from './edgeless-keyboard.js';
import { edgelessElementsBound } from './utils/bound-utils.js';
import { DEFAULT_NOTE_HEIGHT, DEFAULT_NOTE_OFFSET_X, DEFAULT_NOTE_OFFSET_Y, DEFAULT_NOTE_WIDTH, } from './utils/consts.js';
import { isCanvasElement } from './utils/query.js';
let EdgelessRootBlockComponent = (() => {
    let _classDecorators = [customElement('affine-edgeless-root')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BlockElement;
    let _edgelessTool_decorators;
    let _edgelessTool_initializers = [];
    let _edgelessTool_extraInitializers = [];
    let _rootElementContainer_decorators;
    let _rootElementContainer_initializers = [];
    let _rootElementContainer_extraInitializers = [];
    let _edgelessLayer_decorators;
    let _edgelessLayer_initializers = [];
    let _edgelessLayer_extraInitializers = [];
    let _surface_decorators;
    let _surface_initializers = [];
    let _surface_extraInitializers = [];
    var EdgelessRootBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._viewportElement = null;
            this._themeObserver = new ThemeObserver();
            this._resizeObserver = null;
            /**
             * Disable components
             *
             * Toolbar is not allowed to display in `syncd doc block`.
             */
            this.disableComponents = false;
            /**
             * Shared components
             */
            this.components = {
                toolbar: null,
            };
            this.keyboardManager = null;
            this.#edgelessTool_accessor_storage = __runInitializers(this, _edgelessTool_initializers, {
                type: localStorage.defaultTool ?? 'default',
            });
            this.#rootElementContainer_accessor_storage = (__runInitializers(this, _edgelessTool_extraInitializers), __runInitializers(this, _rootElementContainer_initializers, void 0));
            this.#edgelessLayer_accessor_storage = (__runInitializers(this, _rootElementContainer_extraInitializers), __runInitializers(this, _edgelessLayer_initializers, void 0));
            this.clipboardController = (__runInitializers(this, _edgelessLayer_extraInitializers), new EdgelessClipboardController(this));
            this.#surface_accessor_storage = __runInitializers(this, _surface_initializers, void 0);
            this.fontLoader = __runInitializers(this, _surface_extraInitializers);
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _edgelessTool_decorators = [state()];
            _rootElementContainer_decorators = [query('edgeless-block-portal-container')];
            _edgelessLayer_decorators = [query('.affine-edgeless-layer')];
            _surface_decorators = [query('affine-surface')];
            __esDecorate(this, null, _edgelessTool_decorators, { kind: "accessor", name: "edgelessTool", static: false, private: false, access: { has: obj => "edgelessTool" in obj, get: obj => obj.edgelessTool, set: (obj, value) => { obj.edgelessTool = value; } }, metadata: _metadata }, _edgelessTool_initializers, _edgelessTool_extraInitializers);
            __esDecorate(this, null, _rootElementContainer_decorators, { kind: "accessor", name: "rootElementContainer", static: false, private: false, access: { has: obj => "rootElementContainer" in obj, get: obj => obj.rootElementContainer, set: (obj, value) => { obj.rootElementContainer = value; } }, metadata: _metadata }, _rootElementContainer_initializers, _rootElementContainer_extraInitializers);
            __esDecorate(this, null, _edgelessLayer_decorators, { kind: "accessor", name: "edgelessLayer", static: false, private: false, access: { has: obj => "edgelessLayer" in obj, get: obj => obj.edgelessLayer, set: (obj, value) => { obj.edgelessLayer = value; } }, metadata: _metadata }, _edgelessLayer_initializers, _edgelessLayer_extraInitializers);
            __esDecorate(this, null, _surface_decorators, { kind: "accessor", name: "surface", static: false, private: false, access: { has: obj => "surface" in obj, get: obj => obj.surface, set: (obj, value) => { obj.surface = value; } }, metadata: _metadata }, _surface_initializers, _surface_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessRootBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get tools() {
            return this.service.tool;
        }
        get dispatcher() {
            return this.service?.uiEventDispatcher;
        }
        get slots() {
            return this.service.slots;
        }
        get viewportElement() {
            if (this._viewportElement)
                return this._viewportElement;
            this._viewportElement = this.host.closest('.affine-edgeless-viewport');
            assertExists(this._viewportElement);
            return this._viewportElement;
        }
        get viewport() {
            const { scrollLeft, scrollTop, scrollWidth, scrollHeight, clientWidth, clientHeight, } = this.viewportElement;
            const { top, left } = this.viewportElement.getBoundingClientRect();
            return {
                top,
                left,
                scrollLeft,
                scrollTop,
                scrollWidth,
                scrollHeight,
                clientWidth,
                clientHeight,
            };
        }
        get surfaceBlockModel() {
            return this.model.children.find(child => child.flavour === 'affine:surface');
        }
        static { this.styles = css `
    affine-edgeless-root {
      -webkit-user-select: none;
      user-select: none;
    }

    .widgets-container {
      position: absolute;
      left: 0;
      top: 0;
      contain: size layout;
      z-index: 1;
      height: 100%;
    }

    .affine-edgeless-layer {
      position: absolute;
      top: 0;
      left: 0;
      contain: size layout style;
    }

    @media print {
      .selected {
        background-color: transparent !important;
      }
    }
  `; }
        #edgelessTool_accessor_storage;
        get edgelessTool() { return this.#edgelessTool_accessor_storage; }
        set edgelessTool(value) { this.#edgelessTool_accessor_storage = value; }
        #rootElementContainer_accessor_storage;
        get rootElementContainer() { return this.#rootElementContainer_accessor_storage; }
        set rootElementContainer(value) { this.#rootElementContainer_accessor_storage = value; }
        #edgelessLayer_accessor_storage;
        get edgelessLayer() { return this.#edgelessLayer_accessor_storage; }
        set edgelessLayer(value) { this.#edgelessLayer_accessor_storage = value; }
        #surface_accessor_storage;
        get surface() { return this.#surface_accessor_storage; }
        set surface(value) { this.#surface_accessor_storage = value; }
        _handleToolbarFlag() {
            const createToolbar = () => {
                const toolbar = new EdgelessToolbar(this);
                this.append(toolbar);
                this.components.toolbar = toolbar;
            };
            if (!this.components.toolbar) {
                createToolbar();
            }
        }
        _initSlotEffects() {
            const { disposables, slots } = this;
            this._themeObserver.observe(document.documentElement);
            this._themeObserver.on(() => this.surface.refresh());
            this.disposables.add(() => this._themeObserver.dispose());
            disposables.add(this.service.selection);
            disposables.add(slots.edgelessToolUpdated.on(tool => {
                this.edgelessTool = tool;
            }));
            disposables.add(slots.cursorUpdated.on(throttle((cursor) => {
                this.style.cursor = cursor;
            }, 144)));
            let canCopyAsPng = true;
            disposables.add(slots.copyAsPng.on(({ blocks, shapes }) => {
                if (!canCopyAsPng)
                    return;
                canCopyAsPng = false;
                this.clipboardController
                    .copyAsPng(blocks, shapes)
                    .then(() => toast(this.host, 'Copied to clipboard'))
                    .catch(() => toast(this.host, 'Failed to copy as PNG'))
                    .finally(() => {
                    canCopyAsPng = true;
                });
            }));
        }
        _initResizeEffect() {
            const resizeObserver = new ResizeObserver((_) => {
                this.service.selection.set(this.service.selection.surfaceSelections);
                this.service.viewport.onResize();
            });
            resizeObserver.observe(this.viewportElement);
            this._resizeObserver = resizeObserver;
        }
        _initPixelRatioChangeEffect() {
            let media;
            const onPixelRatioChange = () => {
                if (media) {
                    this.service.viewport.onResize();
                    media.removeEventListener('change', onPixelRatioChange);
                }
                media = matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
                media.addEventListener('change', onPixelRatioChange);
            };
            onPixelRatioChange();
            this._disposables.add(() => {
                media?.removeEventListener('change', onPixelRatioChange);
            });
        }
        _initFontLoader() {
            const fontLoader = this.service?.fontLoader;
            assertExists(fontLoader);
            fontLoader.ready
                .then(() => {
                this.surface.refresh();
            })
                .catch(console.error);
        }
        _initRemoteCursor() {
            let rafId = null;
            const setRemoteCursor = (pos) => {
                if (rafId)
                    cancelAnimationFrame(rafId);
                rafId = requestConnectedFrame(() => {
                    const cursorPosition = this.service.viewport.toModelCoord(pos.x, pos.y);
                    this.service.selection.setCursor({
                        x: cursorPosition[0],
                        y: cursorPosition[1],
                    });
                    rafId = null;
                }, this);
            };
            this.handleEvent('pointerMove', e => {
                const pointerEvent = e.get('pointerState');
                setRemoteCursor(pointerEvent);
            });
        }
        _initSurface() {
            const appendIndexedCanvasToPortal = (canvases = this.surface.renderer.stackingCanvas) => {
                this.rootElementContainer.setSlotContent(canvases);
            };
            this._disposables.add(on(this.surface, 'indexedcanvasupdate', e => {
                appendIndexedCanvasToPortal(e.detail.content);
            }));
            this._disposables.add(this.std.event.slots.editorHostPanned.on(() => {
                this.service.viewport.onResize();
            }));
            if (this.rootElementContainer.isUpdatePending) {
                this.rootElementContainer.updateComplete
                    .then(() => appendIndexedCanvasToPortal())
                    .catch(console.error);
            }
            else {
                appendIndexedCanvasToPortal();
            }
        }
        _initViewport() {
            const { service } = this;
            service.viewport.setContainer(this);
            const run = () => {
                const viewport = service.editPropsStore.getItem('viewport') ??
                    service.getFitToScreenData();
                if ('xywh' in viewport) {
                    const bound = Bound.deserialize(viewport.xywh);
                    service.viewport.setViewportByBound(bound, viewport.padding);
                }
                else {
                    const { zoom, centerX, centerY } = viewport;
                    service.viewport.setViewport(zoom, [centerX, centerY]);
                }
            };
            if (this.surface.isUpdatePending) {
                this.surface.updateComplete.then(run).catch(console.error);
            }
            else {
                run();
            }
            this._disposables.add(() => {
                service.editPropsStore.setItem('viewport', {
                    centerX: service.viewport.centerX,
                    centerY: service.viewport.centerY,
                    zoom: service.viewport.zoom,
                });
            });
        }
        _initTools() {
            const tools = [
                DefaultToolController,
                BrushToolController,
                EraserToolController,
                TextToolController,
                ShapeToolController,
                ConnectorToolController,
                NoteToolController,
                FrameToolController,
                PanToolController,
                PresentToolController,
                CopilotSelectionController,
                LassoToolController,
                TemplateToolController,
                MindmapToolController,
            ];
            tools.forEach(tool => {
                this.service.registerTool(tool);
            });
            this.service.tool.mount(this);
        }
        _initWheelEvent() {
            this._disposables.add(this.dispatcher.add('wheel', ctx => {
                const state = ctx.get('defaultState');
                const e = state.event;
                e.preventDefault();
                const { viewport, locked } = this.service;
                if (locked)
                    return;
                // zoom
                if (isPinchEvent(e)) {
                    const rect = this.getBoundingClientRect();
                    // Perform zooming relative to the mouse position
                    const [baseX, baseY] = this.service.viewport.toModelCoord(e.clientX - rect.x, e.clientY - rect.y);
                    const zoom = normalizeWheelDeltaY(e.deltaY, viewport.zoom);
                    viewport.setZoom(zoom, new Point(baseX, baseY));
                    e.stopPropagation();
                }
                // pan
                else {
                    const simulateHorizontalScroll = IS_WINDOWS && e.shiftKey;
                    const dx = simulateHorizontalScroll
                        ? e.deltaY / viewport.zoom
                        : e.deltaX / viewport.zoom;
                    const dy = simulateHorizontalScroll ? 0 : e.deltaY / viewport.zoom;
                    viewport.applyDeltaCenter(dx, dy);
                    viewport.viewportMoved.emit([dx, dy]);
                    e.stopPropagation();
                }
            }));
        }
        /**
         * Adds a new note with the given point on the affine-editor-container.
         *
         * @param: point Point
         * @returns: The id of new note
         */
        addNoteWithPoint(point, options = {}) {
            const { width = DEFAULT_NOTE_WIDTH, height = DEFAULT_NOTE_HEIGHT, offsetX = DEFAULT_NOTE_OFFSET_X, offsetY = DEFAULT_NOTE_OFFSET_Y, parentId = this.doc.root?.id, noteIndex: noteIndex, scale = 1, } = options;
            const [x, y] = this.service.viewport.toModelCoord(point.x, point.y);
            const blockId = this.service.addBlock('affine:note', {
                xywh: serializeXYWH(x - offsetX * scale, y - offsetY * scale, width, height),
                displayMode: NoteDisplayMode.EdgelessOnly,
            }, parentId, noteIndex);
            this.service.telemetryService?.track('CanvasElementAdded', {
                control: 'canvas:draw',
                page: 'whiteboard editor',
                module: 'toolbar',
                segment: 'toolbar',
                type: 'note',
            });
            return blockId;
        }
        /**
         * Adds a new note with the given blocks and point.
         * @param blocks Array\<Partial\<BlockModel\>\>
         * @param point Point
         */
        addNewNote(blocks, point, options) {
            this.doc.captureSync();
            const { left, top } = this.service.viewport;
            point.x -= left;
            point.y -= top;
            const noteId = this.addNoteWithPoint(point, options);
            const ids = this.doc.addBlocks(blocks.map(({ flavour, ...blockProps }) => {
                assertExists(flavour);
                return {
                    flavour,
                    blockProps,
                };
            }), noteId);
            return {
                noteId,
                ids,
            };
        }
        addImage(model, point) {
            const options = {
                width: model.width ?? 0,
                height: model.height ?? 0,
            };
            {
                delete model.width;
                delete model.height;
            }
            const [x, y] = this.service.viewport.toModelCoord(point.x, point.y);
            const bound = new Bound(x, y, options.width, options.height);
            return this.service.addBlock('affine:image', { ...model, xywh: bound.serialize() }, this.surface.model);
        }
        async addImages(files, point, inTopLeft) {
            const imageFiles = [...files].filter(file => file.type.startsWith('image/'));
            if (!imageFiles.length)
                return [];
            const imageService = this.host.spec.getService('affine:image');
            const maxFileSize = imageService.maxFileSize;
            const isSizeExceeded = imageFiles.some(file => file.size > maxFileSize);
            if (isSizeExceeded) {
                toast(this.host, `You can only upload files less than ${humanFileSize(maxFileSize, true, 0)}`);
                return [];
            }
            let { x, y } = this.service.viewport.center;
            if (point)
                [x, y] = this.service.viewport.toModelCoord(...point);
            const dropInfos = [];
            const IMAGE_STACK_GAP = 32;
            // create image cards without image data
            imageFiles.map((file, index) => {
                const point = new Point(x + index * IMAGE_STACK_GAP, y + index * IMAGE_STACK_GAP);
                const center = Vec.toVec(point);
                const bound = calcBoundByOrigin(center, inTopLeft);
                const blockId = this.service.addBlock('affine:image', {
                    size: file.size,
                    xywh: bound.serialize(),
                }, this.surface.model);
                dropInfos.push({ point, blockId });
            });
            // upload image data and update the image model
            const uploadPromises = imageFiles.map(async (file, index) => {
                const { point, blockId } = dropInfos[index];
                const sourceId = await this.doc.blobSync.set(file);
                const imageSize = await readImageSize(file);
                const center = Vec.toVec(point);
                const bound = calcBoundByOrigin(center, inTopLeft, imageSize.width, imageSize.height);
                this.doc.withoutTransact(() => {
                    this.service.updateElement(blockId, {
                        sourceId,
                        ...imageSize,
                        xywh: bound.serialize(),
                    });
                });
            });
            await Promise.all(uploadPromises);
            const blockIds = dropInfos.map(info => info.blockId);
            this.service.selection.set({
                elements: blockIds,
                editing: false,
            });
            return blockIds;
        }
        async addAttachments(files, point) {
            if (!files.length)
                return [];
            const attachmentService = this.host.spec.getService('affine:attachment');
            const maxFileSize = attachmentService.maxFileSize;
            const isSizeExceeded = files.some(file => file.size > maxFileSize);
            if (isSizeExceeded) {
                toast(this.host, `You can only upload files less than ${humanFileSize(maxFileSize, true, 0)}`);
                return [];
            }
            let { x, y } = this.service.viewport.center;
            if (point)
                [x, y] = this.service.viewport.toModelCoord(...point);
            const CARD_STACK_GAP = 32;
            const dropInfos = files.map((file, index) => {
                const point = new Point(x + index * CARD_STACK_GAP, y + index * CARD_STACK_GAP);
                const center = Vec.toVec(point);
                const bound = Bound.fromCenter(center, EMBED_CARD_WIDTH.cubeThick, EMBED_CARD_HEIGHT.cubeThick);
                const blockId = this.service.addBlock('affine:attachment', {
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    style: 'cubeThick',
                    xywh: bound.serialize(),
                }, this.surface.model);
                return { blockId, file };
            });
            // upload file and update the attachment model
            const uploadPromises = dropInfos.map(async ({ blockId, file }) => {
                let sourceId;
                try {
                    setAttachmentUploading(blockId);
                    sourceId = await this.doc.blobSync.set(file);
                }
                catch (error) {
                    console.error(error);
                    if (error instanceof Error) {
                        toast(this.host, `Failed to upload attachment! ${error.message || error.toString()}`);
                    }
                }
                finally {
                    setAttachmentUploaded(blockId);
                    this.doc.withoutTransact(() => {
                        this.service.updateElement(blockId, {
                            sourceId,
                        });
                    });
                }
                return blockId;
            });
            const blockIds = await Promise.all(uploadPromises);
            this.service.selection.set({
                elements: blockIds,
                editing: false,
            });
            return blockIds;
        }
        /*
         * Set selection state by giving noteId & blockId.
         * Not supports surface elements.
         */
        setSelection(noteId, _active = true, blockId, point) {
            const noteBlock = this.service.blocks
                .filter(block => block.flavour === 'affine:note')
                .find(b => b.id === noteId);
            assertExists(noteBlock);
            requestAnimationFrame(() => {
                this.service.selection.set({
                    elements: [noteBlock.id],
                    editing: false,
                });
                // Waiting dom updated, `note mask` is removed
                this.updateComplete
                    .then(() => {
                    if (blockId) {
                        asyncFocusRichText(this.host, blockId)?.catch(console.error);
                    }
                    else if (point) {
                        // Cannot reuse `handleNativeRangeClick` directly here,
                        // since `retargetClick` will re-target to pervious editor
                        handleNativeRangeAtPoint(point.x, point.y);
                    }
                })
                    .catch(console.error);
            });
        }
        getElementsBound() {
            const { service } = this;
            return edgelessElementsBound([...service.elements, ...service.blocks]);
        }
        firstUpdated() {
            this._initSlotEffects();
            this._initResizeEffect();
            this._initPixelRatioChangeEffect();
            this._initFontLoader();
            this._initRemoteCursor();
            this._initSurface();
            this._initViewport();
            this._initWheelEvent();
            if (this.doc.readonly) {
                this.tools.setEdgelessTool({ type: 'pan', panning: true });
            }
            if (this.disableComponents)
                return;
            requestConnectedFrame(() => {
                this._handleToolbarFlag();
                this.requestUpdate();
            }, this);
        }
        connectedCallback() {
            super.connectedCallback();
            this.clipboardController.hostConnected();
            this.keyboardManager = new EdgelessPageKeyboardManager(this);
            this.handleEvent('selectionChange', () => {
                const surface = this.host.selection.value.find((sel) => sel.is('surface'));
                if (!surface)
                    return;
                const el = this.service.getElementById(surface.elements[0]);
                if (isCanvasElement(el)) {
                    return true;
                }
                return;
            });
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            this.mouseRoot = this.parentElement;
            this._initTools();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.clipboardController.hostDisconnected();
            if (this._resizeObserver) {
                this._resizeObserver.disconnect();
                this._resizeObserver = null;
            }
            this.keyboardManager = null;
            this.components.toolbar?.remove();
            this.components.toolbar = null;
        }
        renderBlock() {
            this.setAttribute(BLOCK_ID_ATTR, this.model.id);
            const widgets = repeat(Object.entries(this.widgets), ([id]) => id, ([_, widget]) => widget);
            return html `${this.host.renderModel(this.surfaceBlockModel)}
      <edgeless-block-portal-container .edgeless=${this}>
      </edgeless-block-portal-container>
      <div class="widgets-container">${widgets}</div> `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessRootBlockComponent = _classThis;
})();
export { EdgelessRootBlockComponent };
//# sourceMappingURL=edgeless-root-block.js.map