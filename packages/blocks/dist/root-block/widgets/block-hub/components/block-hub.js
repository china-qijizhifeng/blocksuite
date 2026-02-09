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
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { IS_FIREFOX } from '@blocksuite/global/env';
import { assertExists } from '@blocksuite/global/utils';
import { html } from 'lit';
import { customElement, query, queryAll, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { toggleEmbedCardCreateModal } from '../../../../_common/components/embed-card/modal/index.js';
import { BlockHubIcon, CrossIcon } from '../../../../_common/icons/index.js';
import { asyncFocusRichText, buildPath, calcDropTarget, getClosestBlockElementByPoint, getEdgelessRootByEditorHost, getHoveringNote, getImageFilesFromLocal, getModelByBlockComponent, getPageRootByEditorHost, isInsidePageEditor, Point, Rect, stopPropagation, } from '../../../../_common/utils/index.js';
import { viewPresets } from '../../../../database-block/data-view/index.js';
import { addImageBlocks, addSiblingImageBlock, } from '../../../../image-block/utils.js';
import { PageRootBlockComponent } from '../../../../root-block/page/page-root-block.js';
import { autoScroll } from '../../../../root-block/text-selection/utils.js';
import { getClosestNoteBlock } from '../../drag-handle/utils.js';
import { BlockHubMenu, } from './../components/block-hub-menu.js';
import { BOTTOM_OFFSET, RIGHT_OFFSET, TOP_DISTANCE, TRANSITION_DELAY, } from './../config.js';
import { styles } from './../styles.js';
let BlockHub = (() => {
    let _classDecorators = [customElement('affine-block-hub')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let __expanded_decorators;
    let __expanded_initializers = [];
    let __expanded_extraInitializers = [];
    let __isGrabbing_decorators;
    let __isGrabbing_initializers = [];
    let __isGrabbing_extraInitializers = [];
    let __visibleCardType_decorators;
    let __visibleCardType_initializers = [];
    let __visibleCardType_extraInitializers = [];
    let __showTooltip_decorators;
    let __showTooltip_initializers = [];
    let __showTooltip_extraInitializers = [];
    let __maxHeight_decorators;
    let __maxHeight_initializers = [];
    let __maxHeight_extraInitializers = [];
    let __blockHubCards_decorators;
    let __blockHubCards_initializers = [];
    let __blockHubCards_extraInitializers = [];
    let __blockHubMenus_decorators;
    let __blockHubMenus_initializers = [];
    let __blockHubMenus_extraInitializers = [];
    let __blockHubButton_decorators;
    let __blockHubButton_initializers = [];
    let __blockHubButton_extraInitializers = [];
    let __blockHubIconsContainer_decorators;
    let __blockHubIconsContainer_initializers = [];
    let __blockHubIconsContainer_extraInitializers = [];
    let __blockHubMenuContainer_decorators;
    let __blockHubMenuContainer_initializers = [];
    let __blockHubMenuContainer_extraInitializers = [];
    let __blockHubMenuEntry_decorators;
    let __blockHubMenuEntry_initializers = [];
    let __blockHubMenuEntry_extraInitializers = [];
    var BlockHub = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __expanded_decorators = [state()];
            __isGrabbing_decorators = [state()];
            __visibleCardType_decorators = [state()];
            __showTooltip_decorators = [state()];
            __maxHeight_decorators = [state()];
            __blockHubCards_decorators = [queryAll('.card-container')];
            __blockHubMenus_decorators = [queryAll('.block-hub-icon-container[type]')];
            __blockHubButton_decorators = [query('.new-icon')];
            __blockHubIconsContainer_decorators = [query('.block-hub-icons-container')];
            __blockHubMenuContainer_decorators = [query('.block-hub-menu-container')];
            __blockHubMenuEntry_decorators = [query('[role="menuitem"]')];
            __esDecorate(this, null, __expanded_decorators, { kind: "accessor", name: "_expanded", static: false, private: false, access: { has: obj => "_expanded" in obj, get: obj => obj._expanded, set: (obj, value) => { obj._expanded = value; } }, metadata: _metadata }, __expanded_initializers, __expanded_extraInitializers);
            __esDecorate(this, null, __isGrabbing_decorators, { kind: "accessor", name: "_isGrabbing", static: false, private: false, access: { has: obj => "_isGrabbing" in obj, get: obj => obj._isGrabbing, set: (obj, value) => { obj._isGrabbing = value; } }, metadata: _metadata }, __isGrabbing_initializers, __isGrabbing_extraInitializers);
            __esDecorate(this, null, __visibleCardType_decorators, { kind: "accessor", name: "_visibleCardType", static: false, private: false, access: { has: obj => "_visibleCardType" in obj, get: obj => obj._visibleCardType, set: (obj, value) => { obj._visibleCardType = value; } }, metadata: _metadata }, __visibleCardType_initializers, __visibleCardType_extraInitializers);
            __esDecorate(this, null, __showTooltip_decorators, { kind: "accessor", name: "_showTooltip", static: false, private: false, access: { has: obj => "_showTooltip" in obj, get: obj => obj._showTooltip, set: (obj, value) => { obj._showTooltip = value; } }, metadata: _metadata }, __showTooltip_initializers, __showTooltip_extraInitializers);
            __esDecorate(this, null, __maxHeight_decorators, { kind: "accessor", name: "_maxHeight", static: false, private: false, access: { has: obj => "_maxHeight" in obj, get: obj => obj._maxHeight, set: (obj, value) => { obj._maxHeight = value; } }, metadata: _metadata }, __maxHeight_initializers, __maxHeight_extraInitializers);
            __esDecorate(this, null, __blockHubCards_decorators, { kind: "accessor", name: "_blockHubCards", static: false, private: false, access: { has: obj => "_blockHubCards" in obj, get: obj => obj._blockHubCards, set: (obj, value) => { obj._blockHubCards = value; } }, metadata: _metadata }, __blockHubCards_initializers, __blockHubCards_extraInitializers);
            __esDecorate(this, null, __blockHubMenus_decorators, { kind: "accessor", name: "_blockHubMenus", static: false, private: false, access: { has: obj => "_blockHubMenus" in obj, get: obj => obj._blockHubMenus, set: (obj, value) => { obj._blockHubMenus = value; } }, metadata: _metadata }, __blockHubMenus_initializers, __blockHubMenus_extraInitializers);
            __esDecorate(this, null, __blockHubButton_decorators, { kind: "accessor", name: "_blockHubButton", static: false, private: false, access: { has: obj => "_blockHubButton" in obj, get: obj => obj._blockHubButton, set: (obj, value) => { obj._blockHubButton = value; } }, metadata: _metadata }, __blockHubButton_initializers, __blockHubButton_extraInitializers);
            __esDecorate(this, null, __blockHubIconsContainer_decorators, { kind: "accessor", name: "_blockHubIconsContainer", static: false, private: false, access: { has: obj => "_blockHubIconsContainer" in obj, get: obj => obj._blockHubIconsContainer, set: (obj, value) => { obj._blockHubIconsContainer = value; } }, metadata: _metadata }, __blockHubIconsContainer_initializers, __blockHubIconsContainer_extraInitializers);
            __esDecorate(this, null, __blockHubMenuContainer_decorators, { kind: "accessor", name: "_blockHubMenuContainer", static: false, private: false, access: { has: obj => "_blockHubMenuContainer" in obj, get: obj => obj._blockHubMenuContainer, set: (obj, value) => { obj._blockHubMenuContainer = value; } }, metadata: _metadata }, __blockHubMenuContainer_initializers, __blockHubMenuContainer_extraInitializers);
            __esDecorate(this, null, __blockHubMenuEntry_decorators, { kind: "accessor", name: "_blockHubMenuEntry", static: false, private: false, access: { has: obj => "_blockHubMenuEntry" in obj, get: obj => obj._blockHubMenuEntry, set: (obj, value) => { obj._blockHubMenuEntry = value; } }, metadata: _metadata }, __blockHubMenuEntry_initializers, __blockHubMenuEntry_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            BlockHub = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get _rootElement() {
            const rootElement = isInsidePageEditor(this._editorHost)
                ? getPageRootByEditorHost(this._editorHost)
                : getEdgelessRootByEditorHost(this._editorHost);
            return rootElement;
        }
        static { this.styles = styles; }
        #_expanded_accessor_storage;
        /**
         * A function that returns all blocks that are allowed to be moved to
         */
        get _expanded() { return this.#_expanded_accessor_storage; }
        set _expanded(value) { this.#_expanded_accessor_storage = value; }
        #_isGrabbing_accessor_storage;
        get _isGrabbing() { return this.#_isGrabbing_accessor_storage; }
        set _isGrabbing(value) { this.#_isGrabbing_accessor_storage = value; }
        #_visibleCardType_accessor_storage;
        get _visibleCardType() { return this.#_visibleCardType_accessor_storage; }
        set _visibleCardType(value) { this.#_visibleCardType_accessor_storage = value; }
        #_showTooltip_accessor_storage;
        get _showTooltip() { return this.#_showTooltip_accessor_storage; }
        set _showTooltip(value) { this.#_showTooltip_accessor_storage = value; }
        #_maxHeight_accessor_storage;
        get _maxHeight() { return this.#_maxHeight_accessor_storage; }
        set _maxHeight(value) { this.#_maxHeight_accessor_storage = value; }
        #_blockHubCards_accessor_storage;
        get _blockHubCards() { return this.#_blockHubCards_accessor_storage; }
        set _blockHubCards(value) { this.#_blockHubCards_accessor_storage = value; }
        #_blockHubMenus_accessor_storage;
        get _blockHubMenus() { return this.#_blockHubMenus_accessor_storage; }
        set _blockHubMenus(value) { this.#_blockHubMenus_accessor_storage = value; }
        #_blockHubButton_accessor_storage;
        get _blockHubButton() { return this.#_blockHubButton_accessor_storage; }
        set _blockHubButton(value) { this.#_blockHubButton_accessor_storage = value; }
        #_blockHubIconsContainer_accessor_storage;
        get _blockHubIconsContainer() { return this.#_blockHubIconsContainer_accessor_storage; }
        set _blockHubIconsContainer(value) { this.#_blockHubIconsContainer_accessor_storage = value; }
        #_blockHubMenuContainer_accessor_storage;
        get _blockHubMenuContainer() { return this.#_blockHubMenuContainer_accessor_storage; }
        set _blockHubMenuContainer(value) { this.#_blockHubMenuContainer_accessor_storage = value; }
        #_blockHubMenuEntry_accessor_storage;
        get _blockHubMenuEntry() { return this.#_blockHubMenuEntry_accessor_storage; }
        set _blockHubMenuEntry(value) { this.#_blockHubMenuEntry_accessor_storage = value; }
        constructor(host) {
            super();
            this.#_expanded_accessor_storage = __runInitializers(this, __expanded_initializers, false);
            this.#_isGrabbing_accessor_storage = (__runInitializers(this, __expanded_extraInitializers), __runInitializers(this, __isGrabbing_initializers, false));
            this.#_visibleCardType_accessor_storage = (__runInitializers(this, __isGrabbing_extraInitializers), __runInitializers(this, __visibleCardType_initializers, null));
            this.#_showTooltip_accessor_storage = (__runInitializers(this, __visibleCardType_extraInitializers), __runInitializers(this, __showTooltip_initializers, true));
            this.#_maxHeight_accessor_storage = (__runInitializers(this, __showTooltip_extraInitializers), __runInitializers(this, __maxHeight_initializers, 2000));
            this.#_blockHubCards_accessor_storage = (__runInitializers(this, __maxHeight_extraInitializers), __runInitializers(this, __blockHubCards_initializers, void 0));
            this.#_blockHubMenus_accessor_storage = (__runInitializers(this, __blockHubCards_extraInitializers), __runInitializers(this, __blockHubMenus_initializers, void 0));
            this.#_blockHubButton_accessor_storage = (__runInitializers(this, __blockHubMenus_extraInitializers), __runInitializers(this, __blockHubButton_initializers, void 0));
            this.#_blockHubIconsContainer_accessor_storage = (__runInitializers(this, __blockHubButton_extraInitializers), __runInitializers(this, __blockHubIconsContainer_initializers, void 0));
            this.#_blockHubMenuContainer_accessor_storage = (__runInitializers(this, __blockHubIconsContainer_extraInitializers), __runInitializers(this, __blockHubMenuContainer_initializers, void 0));
            this.#_blockHubMenuEntry_accessor_storage = (__runInitializers(this, __blockHubMenuContainer_extraInitializers), __runInitializers(this, __blockHubMenuEntry_initializers, void 0));
            this._currentClientX = (__runInitializers(this, __blockHubMenuEntry_extraInitializers), 0);
            this._currentClientY = 0;
            this._isCardListVisible = false;
            this._lastDroppingTarget = null;
            this._lastDroppingType = 'none';
            this._lastDraggingFlavour = null;
            this._timer = null;
            this._rafID = 0;
            this._getHoveringNoteState = (point) => {
                const state = {
                    scale: 1,
                };
                if (isInsidePageEditor(this._editorHost)) {
                    const closestNoteBlock = getClosestNoteBlock(this._editorHost, this._rootElement, point);
                    if (closestNoteBlock) {
                        state.rect = Rect.fromDOMRect(closestNoteBlock.getBoundingClientRect());
                    }
                }
                else {
                    state.scale = this._rootElement.service.viewport.zoom;
                    const container = getHoveringNote(point);
                    if (container) {
                        state.rect = Rect.fromDOM(container);
                        state.container = container;
                    }
                }
                return state;
            };
            /**
             * This is currently a workaround, as the height of the _blockHubIconsContainer is determined by the height of its
             * content, and if its child's opacity is set to 0 during a transition, its height won't change, causing the background
             * to exceeds its actual visual height. So currently we manually set the height of those whose opacity is 0 to 0px.
             */
            this._onTransitionStart = (_) => {
                if (this._timer) {
                    clearTimeout(this._timer);
                }
                if (!this._expanded) {
                    // when the _blockHubMenuContainer is unexpanded, should cancel the vertical padding making it a square
                    this._blockHubMenuContainer.style.padding = '0 4px';
                    this._timer = window.setTimeout(() => {
                        this._blockHubIconsContainer.style.overflow = 'hidden';
                    }, TRANSITION_DELAY);
                }
                else {
                    this._blockHubMenuContainer.style.padding = '4px';
                    this._timer = window.setTimeout(() => {
                        this._blockHubIconsContainer.style.overflow = 'unset';
                    }, TRANSITION_DELAY);
                }
            };
            this._onBlockHubButtonClick = (_) => {
                this._expanded = !this._expanded;
                if (!this._expanded) {
                    this._hideCardList();
                }
            };
            this._onMouseDown = (e) => {
                if (IS_FIREFOX) {
                    this._currentClientX = e.clientX;
                    this._currentClientY = e.clientY;
                }
            };
            this._onDragStart = (event) => {
                this._showTooltip = false;
                // DragEvent that doesn't dispatch manually, is expected to have dataTransfer property
                assertExists(event.dataTransfer);
                event.dataTransfer.effectAllowed = 'move';
                const blockHubElement = event.target;
                const data = {
                    flavour: blockHubElement.getAttribute('affine-flavour'),
                    type: blockHubElement.getAttribute('affine-type') ?? undefined,
                };
                event.dataTransfer.setData('affine/block-hub', JSON.stringify(data));
                this._lastDraggingFlavour = data.flavour;
                this._rootElement.selection.clear();
            };
            this._onDrag = (e) => {
                this._hideCardList();
                let x = e.clientX;
                let y = e.clientY;
                if (IS_FIREFOX) {
                    // In Firefox, `pageX` and `pageY` are always set to 0.
                    // Refs: https://stackoverflow.com/questions/13110349/pagex-and-pagey-are-always-set-to-0-in-firefox-during-the-ondrag-event.
                    x = this._currentClientX;
                    y = this._currentClientY;
                }
                if (!this._indicator ||
                    (this._indicator.rect &&
                        this._indicator.rect.left === x &&
                        this._indicator.rect.top === y)) {
                    return;
                }
                const point = new Point(x, y);
                const { container, rect: noteRect, scale, } = this._getHoveringNoteState(point.clone());
                if (!noteRect) {
                    this._resetDropState();
                    return;
                }
                let element = null;
                element = getClosestBlockElementByPoint(point, { container, rect: noteRect, snapToEdge: { x: false, y: true } }, scale);
                if (!element) {
                    const { min, max } = noteRect;
                    if (x >= min.x && x <= max.x && y >= min.y) {
                        const lastBlock = this._rootElement.model.lastChild();
                        if (lastBlock) {
                            const lastElement = this._editorHost.view.viewFromPath('block', [
                                lastBlock.id,
                            ]);
                            element = lastElement;
                        }
                    }
                }
                if (!element) {
                    // if (this._mouseRoot.mode === 'page') {
                    //   return;
                    // }
                    this._resetDropState();
                    return;
                }
                let type = 'none';
                let rect = null;
                let lastModelState = null;
                const model = getModelByBlockComponent(element);
                const result = calcDropTarget(point, model, element, [], scale, this._lastDraggingFlavour);
                if (result) {
                    type = result.type;
                    rect = result.rect;
                    lastModelState = result.modelState;
                }
                const runner = () => {
                    // only support auto scroll in page mode now
                    if (this._rootElement instanceof PageRootBlockComponent) {
                        const result = autoScroll(this._rootElement.rootScrollContainer, point.y);
                        if (!result) {
                            this._clearRaf();
                            return;
                        }
                        this._rafID = requestAnimationFrame(runner);
                    }
                    else {
                        this._clearRaf();
                    }
                };
                this._rafID = requestAnimationFrame(runner);
                this._lastDroppingType = type;
                this._indicator.rect = rect;
                this._lastDroppingTarget = lastModelState;
            };
            this._onDragOver = (e) => {
                e.preventDefault();
                return false;
            };
            this._onDragOverDocument = (e) => {
                if (!IS_FIREFOX) {
                    throw new Error('FireFox only');
                }
                this._currentClientX = e.clientX;
                this._currentClientY = e.clientY;
            };
            this._onDragEnd = (_) => {
                this._showTooltip = true;
                this._isGrabbing = false;
                this._lastDraggingFlavour = null;
                this._resetDropState();
            };
            this._resetDropState = () => {
                this._lastDroppingType = 'none';
                this._indicator.rect = null;
                this._lastDroppingTarget = null;
            };
            this._onDrop = async (e) => {
                assertExists(e.dataTransfer);
                if (!e.dataTransfer.getData('affine/block-hub'))
                    return;
                const doc = this._editorHost.doc;
                const point = this._indicator?.rect?.min ?? new Point(e.clientX, e.clientY);
                const lastModelState = this._lastDroppingTarget;
                const lastType = this._lastDroppingType;
                const dataTransfer = e.dataTransfer;
                assertExists(dataTransfer);
                const data = dataTransfer.getData('affine/block-hub');
                const models = [];
                const props = JSON.parse(data);
                const isDatabase = props.flavour === 'affine:database';
                // TO DO: fix image loading state for block hub
                if (props.flavour === 'affine:image' &&
                    props.type === 'image' &&
                    lastModelState &&
                    lastType !== 'none' &&
                    lastType !== 'database') {
                    const imageFiles = await getImageFilesFromLocal();
                    const imageService = this._editorHost.spec.getService('affine:image');
                    const maxFileSize = imageService.maxFileSize;
                    addSiblingImageBlock(this._editorHost, imageFiles, maxFileSize, lastModelState.model);
                }
                else if (props.flavour === 'affine:bookmark') {
                    if (lastModelState && lastType !== 'none' && lastType !== 'database') {
                        const model = lastModelState.model;
                        const parentModel = doc.getParent(model);
                        assertExists(parentModel);
                        const index = parentModel.children.indexOf(model) + (lastType === 'after' ? 1 : 0);
                        await toggleEmbedCardCreateModal(this._editorHost, 'Links', 'The added link will be displayed as a card view.', {
                            mode: 'page',
                            parentModel,
                            index,
                        });
                    }
                }
                else {
                    models.push(props);
                }
                // In some cases, like cancel bookmark initial modal, there will be no models.
                if (!models.length)
                    return;
                let parentModel;
                let focusId;
                if (lastModelState && lastType !== 'none') {
                    const { model } = lastModelState;
                    doc.captureSync();
                    if (lastType === 'database') {
                        const ids = doc.addBlocks(models, model);
                        focusId = ids[0];
                        parentModel = model;
                    }
                    else {
                        const parent = doc.getParent(model);
                        assertExists(parent);
                        const ids = doc.addSiblingBlocks(model, models, lastType);
                        focusId = ids[0];
                        parentModel = parent;
                    }
                    // database init basic structure
                    if (isDatabase) {
                        const service = this._rootElement.std.spec?.getService('affine:database');
                        service.initDatabaseBlock(doc, model, model.id, viewPresets.tableViewConfig);
                    }
                }
                if (isInsidePageEditor(this._editorHost)) {
                    if (focusId) {
                        asyncFocusRichText(this._editorHost, focusId)?.catch(console.error);
                    }
                    return;
                }
                // In edgeless mode.
                const rootElement = this._rootElement;
                let noteId;
                if (focusId && parentModel) {
                    const targetNoteBlock = this._editorHost.view.viewFromPath('block', buildPath(parentModel));
                    assertExists(targetNoteBlock);
                    noteId = targetNoteBlock.model.id;
                }
                else {
                    // Creates new note block on blank area.
                    const result = rootElement.addNewNote(models, point, isDatabase ? { width: 752 } : undefined);
                    noteId = result.noteId;
                    focusId = result.ids[0];
                    const model = doc.getBlockById(focusId);
                    assertExists(model);
                    if (isDatabase) {
                        const service = rootElement.std.spec?.getService('affine:database');
                        service.initDatabaseBlock(doc, model, model.id, viewPresets.kanbanViewConfig);
                    }
                }
                rootElement.setSelection(noteId, true, focusId, point);
            };
            this._onClickCard = async (_, blockHubElement) => {
                const affineType = blockHubElement.getAttribute('affine-type');
                assertExists(affineType);
                const data = {
                    flavour: blockHubElement.getAttribute('affine-flavour') ?? '',
                    type: affineType ?? undefined,
                };
                const doc = this._editorHost.doc;
                const models = [];
                const defaultNoteBlock = doc.root?.children.findLast(block => block.flavour === 'affine:note') ??
                    doc.addBlock('affine:note', {}, doc.root?.id);
                // add to end
                let lastId;
                // TO DO: fix image loading state for blockhub
                if (data.flavour === 'affine:image' && data.type === 'image') {
                    const imageFiles = await getImageFilesFromLocal();
                    const imageService = this._editorHost.spec.getService('affine:image');
                    const maxFileSize = imageService.maxFileSize;
                    const blockIds = addImageBlocks(this._editorHost, imageFiles, maxFileSize, defaultNoteBlock);
                    lastId = blockIds?.[blockIds.length - 1];
                }
                else if (data.flavour === 'affine:bookmark') {
                    await toggleEmbedCardCreateModal(this._editorHost, 'Links', 'The added link will be displayed as a card view.', {
                        mode: 'page',
                        parentModel: defaultNoteBlock,
                    });
                }
                else {
                    models.push(data);
                }
                models.forEach(model => {
                    lastId = doc.addBlock((model.flavour ?? 'affine:paragraph'), model, defaultNoteBlock);
                });
                lastId && (await asyncFocusRichText(this._editorHost, lastId));
            };
            this._onClickOutside = (e) => {
                const target = e.target;
                if (target instanceof HTMLElement && !target.closest('affine-block-hub')) {
                    this._hideCardList();
                }
            };
            this._onCardMouseDown = (_) => {
                this._isGrabbing = true;
            };
            this._onCardMouseUp = (_) => {
                this._isGrabbing = false;
            };
            this._onBlankMenuMouseDown = () => {
                this._isGrabbing = true;
            };
            this._onBlankMenuMouseUp = () => {
                this._isGrabbing = false;
            };
            this._onBlockHubMenuMouseOver = (e) => {
                const menu = e.currentTarget;
                const cardType = menu.getAttribute('type');
                assertExists(cardType);
                this._isCardListVisible = true;
                this._visibleCardType = cardType;
            };
            this._onBlockHubEntryMouseOver = () => {
                this._isCardListVisible = false;
            };
            this._onResize = () => {
                const boundingClientRect = document.body.getBoundingClientRect();
                this._maxHeight = boundingClientRect.height - TOP_DISTANCE - BOTTOM_OFFSET;
            };
            this._editorHost = host;
        }
        _hideCardList() {
            if (this._visibleCardType) {
                this._visibleCardType = null;
                this._isCardListVisible = false;
            }
        }
        _clearRaf() {
            if (this._rafID) {
                cancelAnimationFrame(this._rafID);
                this._rafID = 0;
            }
        }
        connectedCallback() {
            super.connectedCallback();
            const disposables = this._disposables;
            disposables.addFromEvent(this, 'dragstart', this._onDragStart);
            disposables.addFromEvent(this, 'drag', this._onDrag);
            disposables.addFromEvent(this, 'dragend', this._onDragEnd);
            disposables.addFromEvent(this._editorHost, 'dragover', this._onDragOver);
            disposables.addFromEvent(this._editorHost, 'drop', (e) => {
                this._onDrop(e).catch(console.error);
            });
            disposables.addFromEvent(this, 'mousedown', this._onMouseDown);
            if (IS_FIREFOX) {
                disposables.addFromEvent(this._editorHost, 'dragover', this._onDragOverDocument);
            }
            this._onResize();
        }
        firstUpdated() {
            const disposables = this._disposables;
            this._blockHubCards.forEach((card) => {
                disposables.addFromEvent(card, 'mousedown', this._onCardMouseDown);
                disposables.addFromEvent(card, 'mouseup', this._onCardMouseUp);
                disposables.addFromEvent(card, 'click', e => {
                    this._onClickCard(e, card).catch(console.error);
                });
            });
            for (const blockHubMenu of this._blockHubMenus) {
                disposables.addFromEvent(blockHubMenu, 'mouseover', this._onBlockHubMenuMouseOver);
                if (blockHubMenu.getAttribute('type') === 'blank') {
                    disposables.addFromEvent(blockHubMenu, 'mousedown', this._onBlankMenuMouseDown);
                    disposables.addFromEvent(blockHubMenu, 'mouseup', this._onBlankMenuMouseUp);
                }
            }
            disposables.addFromEvent(this._blockHubMenuEntry, 'mouseover', this._onBlockHubEntryMouseOver);
            disposables.addFromEvent(document, 'click', this._onClickOutside);
            disposables.addFromEvent(this._blockHubButton, 'click', this._onBlockHubButtonClick);
            disposables.addFromEvent(this._blockHubButton, 'mousedown', e => {
                // Prevent input from losing focus
                e.preventDefault();
            });
            disposables.addFromEvent(this._blockHubIconsContainer, 'transitionstart', this._onTransitionStart);
            disposables.addFromEvent(window, 'resize', this._onResize);
            this._indicator = document.querySelector('affine-drag-indicator');
            if (!this._indicator) {
                this._indicator = document.createElement('affine-drag-indicator');
                document.body.append(this._indicator);
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._disposables.dispose();
        }
        toggleMenu() {
            this._expanded = !this._expanded;
            if (!this._expanded)
                this._hideCardList();
        }
        render() {
            const blockHubMenu = BlockHubMenu(this._expanded, this._isGrabbing, this._visibleCardType, this._isCardListVisible, this._showTooltip, this._maxHeight);
            const classes = classMap({
                'icon-expanded': this._expanded,
                'new-icon-in-edgeless': !isInsidePageEditor(this._editorHost) && !this._expanded,
                'new-icon': true,
            });
            return html `
      <div
        class="block-hub-menu-container"
        @pointerdown=${stopPropagation}
        ?expanded=${this._expanded}
        style="bottom: ${BOTTOM_OFFSET}px; right: ${RIGHT_OFFSET}px;"
      >
        ${blockHubMenu}
        <div class=${classes} role="menuitem" style="cursor:pointer;">
          ${this._expanded
                ? CrossIcon
                : [
                    BlockHubIcon,
                    html `<affine-tooltip tip-position="left"
                  >Insert blocks</affine-tooltip
                >`,
                ]}
        </div>
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return BlockHub = _classThis;
})();
export { BlockHub };
//# sourceMappingURL=block-hub.js.map