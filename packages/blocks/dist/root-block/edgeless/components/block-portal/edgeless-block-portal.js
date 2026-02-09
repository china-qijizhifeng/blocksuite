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
/* eslint-disable lit/binding-positions, lit/no-invalid-html */
import './note/edgeless-note.js';
import './image/edgeless-image.js';
import './bookmark/edgeless-bookmark.js';
import './attachment/edgeless-attachment.js';
import './frame/edgeless-frame.js';
import './embed/edgeless-embed.js';
import './edgeless-text/edgeless-edgeless-text.js';
import '../rects/edgeless-selected-rect.js';
import '../rects/edgeless-dragging-area-rect.js';
import '../presentation/edgeless-navigator-black-background.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { css, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { html, literal, unsafeStatic } from 'lit/static-html.js';
import { requestThrottledConnectFrame } from '../../../../_common/utils/event.js';
import { last } from '../../../../_common/utils/iterable.js';
import { EdgelessBlockModel } from '../../edgeless-block-model.js';
import { getBackgroundGrid, isNoteBlock } from '../../utils/query.js';
const portalMap = new Map([
    ['affine:frame', 'edgeless-block-portal-frame'],
    ['affine:note', 'edgeless-block-portal-note'],
    ['affine:image', 'edgeless-block-portal-image'],
    ['affine:bookmark', 'edgeless-block-portal-bookmark'],
    ['affine:attachment', 'edgeless-block-portal-attachment'],
    ['affine:edgeless-text', 'edgeless-block-portal-edgeless-text'],
    [/affine:embed-*/, 'edgeless-block-portal-embed'],
]);
let EdgelessBlockPortalContainer = (() => {
    let _classDecorators = [customElement('edgeless-block-portal-container')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let __isResizing_decorators;
    let __isResizing_initializers = [];
    let __isResizing_extraInitializers = [];
    let __enableNoteSlicer_decorators;
    let __enableNoteSlicer_initializers = [];
    let __enableNoteSlicer_extraInitializers = [];
    let __slicerAnchorNote_decorators;
    let __slicerAnchorNote_initializers = [];
    let __slicerAnchorNote_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _container_decorators;
    let _container_initializers = [];
    let _container_extraInitializers = [];
    let _selectedRect_decorators;
    let _selectedRect_initializers = [];
    let _selectedRect_extraInitializers = [];
    let _layer_decorators;
    let _layer_initializers = [];
    let _layer_extraInitializers = [];
    let _canvasSlot_decorators;
    let _canvasSlot_initializers = [];
    let _canvasSlot_extraInitializers = [];
    var EdgelessBlockPortalContainer = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_isResizing_accessor_storage = __runInitializers(this, __isResizing_initializers, false);
            this.#_enableNoteSlicer_accessor_storage = (__runInitializers(this, __isResizing_extraInitializers), __runInitializers(this, __enableNoteSlicer_initializers, false));
            this.#_slicerAnchorNote_accessor_storage = (__runInitializers(this, __enableNoteSlicer_extraInitializers), __runInitializers(this, __slicerAnchorNote_initializers, null));
            this._visibleElements = (__runInitializers(this, __slicerAnchorNote_extraInitializers), new Set());
            this._updateOnVisibleBlocksChange = requestThrottledConnectFrame(() => {
                if (this._updateVisibleBlocks()) {
                    this.requestUpdate();
                }
            }, this);
            this.#edgeless_accessor_storage = __runInitializers(this, _edgeless_initializers, void 0);
            this.#container_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _container_initializers, void 0));
            this.#selectedRect_accessor_storage = (__runInitializers(this, _container_extraInitializers), __runInitializers(this, _selectedRect_initializers, void 0));
            this.#layer_accessor_storage = (__runInitializers(this, _selectedRect_extraInitializers), __runInitializers(this, _layer_initializers, void 0));
            this.#canvasSlot_accessor_storage = (__runInitializers(this, _layer_extraInitializers), __runInitializers(this, _canvasSlot_initializers, void 0));
            this.concurrentRendering = (__runInitializers(this, _canvasSlot_extraInitializers), 2);
            this.renderingSet = new Set();
            this.refreshLayerViewport = requestThrottledConnectFrame(() => {
                if (!this.edgeless || !this.edgeless.surface)
                    return;
                const { service } = this.edgeless;
                const { zoom, translateX, translateY } = service.viewport;
                const { gap } = getBackgroundGrid(zoom, true);
                this.container.style.setProperty('background-position', `${translateX}px ${translateY}px`);
                this.container.style.setProperty('background-size', `${gap}px ${gap}px`);
                this.layer.style.setProperty('transform', this._getLayerViewport());
                this.layer.dataset.scale = zoom.toString();
                this.canvasSlot.style.setProperty('--canvas-transform-offset', this._getLayerViewport(true));
            }, this);
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __isResizing_decorators = [state()];
            __enableNoteSlicer_decorators = [state()];
            __slicerAnchorNote_decorators = [state()];
            _edgeless_decorators = [property({ attribute: false })];
            _container_decorators = [query('.affine-block-children-container.edgeless')];
            _selectedRect_decorators = [query('edgeless-selected-rect')];
            _layer_decorators = [query('.affine-edgeless-layer')];
            _canvasSlot_decorators = [query('.canvas-slot')];
            __esDecorate(this, null, __isResizing_decorators, { kind: "accessor", name: "_isResizing", static: false, private: false, access: { has: obj => "_isResizing" in obj, get: obj => obj._isResizing, set: (obj, value) => { obj._isResizing = value; } }, metadata: _metadata }, __isResizing_initializers, __isResizing_extraInitializers);
            __esDecorate(this, null, __enableNoteSlicer_decorators, { kind: "accessor", name: "_enableNoteSlicer", static: false, private: false, access: { has: obj => "_enableNoteSlicer" in obj, get: obj => obj._enableNoteSlicer, set: (obj, value) => { obj._enableNoteSlicer = value; } }, metadata: _metadata }, __enableNoteSlicer_initializers, __enableNoteSlicer_extraInitializers);
            __esDecorate(this, null, __slicerAnchorNote_decorators, { kind: "accessor", name: "_slicerAnchorNote", static: false, private: false, access: { has: obj => "_slicerAnchorNote" in obj, get: obj => obj._slicerAnchorNote, set: (obj, value) => { obj._slicerAnchorNote = value; } }, metadata: _metadata }, __slicerAnchorNote_initializers, __slicerAnchorNote_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _container_decorators, { kind: "accessor", name: "container", static: false, private: false, access: { has: obj => "container" in obj, get: obj => obj.container, set: (obj, value) => { obj.container = value; } }, metadata: _metadata }, _container_initializers, _container_extraInitializers);
            __esDecorate(this, null, _selectedRect_decorators, { kind: "accessor", name: "selectedRect", static: false, private: false, access: { has: obj => "selectedRect" in obj, get: obj => obj.selectedRect, set: (obj, value) => { obj.selectedRect = value; } }, metadata: _metadata }, _selectedRect_initializers, _selectedRect_extraInitializers);
            __esDecorate(this, null, _layer_decorators, { kind: "accessor", name: "layer", static: false, private: false, access: { has: obj => "layer" in obj, get: obj => obj.layer, set: (obj, value) => { obj.layer = value; } }, metadata: _metadata }, _layer_initializers, _layer_extraInitializers);
            __esDecorate(this, null, _canvasSlot_decorators, { kind: "accessor", name: "canvasSlot", static: false, private: false, access: { has: obj => "canvasSlot" in obj, get: obj => obj.canvasSlot, set: (obj, value) => { obj.canvasSlot = value; } }, metadata: _metadata }, _canvasSlot_initializers, _canvasSlot_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessBlockPortalContainer = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get isDragging() {
            return this.selectedRect.dragging;
        }
        static { this.styles = css `
    .affine-block-children-container.edgeless {
      user-select: none;
    }

    .surface-layer {
      position: absolute;
    }

    .affine-edgeless-layer > [data-portal-block-id] {
      display: none;
      position: relative;
    }
  `; }
        #_isResizing_accessor_storage;
        get _isResizing() { return this.#_isResizing_accessor_storage; }
        set _isResizing(value) { this.#_isResizing_accessor_storage = value; }
        #_enableNoteSlicer_accessor_storage;
        get _enableNoteSlicer() { return this.#_enableNoteSlicer_accessor_storage; }
        set _enableNoteSlicer(value) { this.#_enableNoteSlicer_accessor_storage = value; }
        #_slicerAnchorNote_accessor_storage;
        get _slicerAnchorNote() { return this.#_slicerAnchorNote_accessor_storage; }
        set _slicerAnchorNote(value) { this.#_slicerAnchorNote_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #container_accessor_storage;
        get container() { return this.#container_accessor_storage; }
        set container(value) { this.#container_accessor_storage = value; }
        #selectedRect_accessor_storage;
        get selectedRect() { return this.#selectedRect_accessor_storage; }
        set selectedRect(value) { this.#selectedRect_accessor_storage = value; }
        #layer_accessor_storage;
        get layer() { return this.#layer_accessor_storage; }
        set layer(value) { this.#layer_accessor_storage = value; }
        #canvasSlot_accessor_storage;
        get canvasSlot() { return this.#canvasSlot_accessor_storage; }
        set canvasSlot(value) { this.#canvasSlot_accessor_storage = value; }
        /**
         * @returns true if the visible elements have changed
         */
        _updateVisibleBlocks() {
            const { service } = this.edgeless;
            const blockSet = service.layer.blocksGrid.search(service.viewport.viewportBounds, false, true);
            const frameSet = service.layer.framesGrid.search(service.viewport.viewportBounds, false, true);
            if (this._visibleElements.size !== blockSet.size + frameSet.size) {
                this._visibleElements = new Set([...blockSet, ...frameSet]);
                return true;
            }
            else {
                for (const element of this._visibleElements) {
                    if (!blockSet.has(element) &&
                        !frameSet.has(element)) {
                        this._visibleElements = new Set([...blockSet, ...frameSet]);
                        return true;
                    }
                }
            }
            return false;
        }
        _updateNoteSlicer() {
            const { edgeless } = this;
            const { selectedElements } = edgeless.service.selection;
            if (!edgeless.service.selection.editing &&
                selectedElements.length === 1 &&
                isNoteBlock(selectedElements[0])) {
                this._slicerAnchorNote = selectedElements[0];
            }
            else {
                this._slicerAnchorNote = null;
            }
        }
        _getLayerViewport(negative = false) {
            const { service } = this.edgeless;
            const { translateX, translateY, zoom } = service.viewport;
            if (negative) {
                return `scale(${1 / zoom}) translate(${-translateX}px, ${-translateY}px)`;
            }
            return `translate(${translateX}px, ${translateY}px) scale(${zoom})`;
        }
        setSlotContent(children) {
            if (this.canvasSlot.children.length !== children.length) {
                children.forEach(child => {
                    child.style.setProperty('transform', 'var(--canvas-transform-offset)');
                });
                this.canvasSlot.replaceChildren(...children);
            }
        }
        getPortalElement(id) {
            return this.querySelector(`[data-portal-block-id="${id}"]`);
        }
        connectedCallback() {
            super.connectedCallback();
            this._updateVisibleBlocks();
        }
        firstUpdated() {
            const { _disposables, edgeless } = this;
            _disposables.add(edgeless.service.viewport.viewportUpdated.on(() => {
                this.refreshLayerViewport();
                this._updateOnVisibleBlocksChange();
            }));
            _disposables.add(edgeless.service.layer.slots.layerUpdated.on(() => {
                this.requestUpdate();
            }));
            _disposables.add(edgeless.doc.slots.blockUpdated.on(payload => {
                if ((payload.type === 'update' && payload.props.key === 'xywh') ||
                    payload.type === 'add') {
                    const block = edgeless.doc.getBlock(payload.id);
                    if (block?.model instanceof EdgelessBlockModel) {
                        this._updateOnVisibleBlocksChange();
                    }
                }
                else {
                    if ('model' in payload &&
                        payload.model instanceof EdgelessBlockModel) {
                        this._updateOnVisibleBlocksChange();
                    }
                }
            }));
            _disposables.add(edgeless.slots.readonlyUpdated.on(() => {
                this.requestUpdate();
            }));
            _disposables.add(edgeless.service.selection.slots.updated.on(() => {
                this._enableNoteSlicer = false;
                this._updateNoteSlicer();
            }));
            _disposables.add(edgeless.slots.elementResizeStart.on(() => {
                this._isResizing = true;
            }));
            _disposables.add(edgeless.slots.elementResizeEnd.on(() => {
                this._isResizing = false;
            }));
            _disposables.add(edgeless.slots.toggleNoteSlicer.on(() => {
                this._enableNoteSlicer = !this._enableNoteSlicer;
            }));
        }
        render() {
            const { edgeless, _visibleElements } = this;
            const { surface, doc, service } = edgeless;
            const { readonly } = doc;
            const { zoom } = service.viewport;
            if (!surface)
                return nothing;
            const layers = service.layer.layers;
            const lastLayer = last(layers);
            const frameStartIndex = lastLayer?.zIndex ?? 1 + (lastLayer?.elements.length ?? 0) + 1;
            const blocks = layers.reduce((pre, layer) => {
                if (layer.type === 'block') {
                    pre = pre.concat(layer.elements.map((block, index) => [block, layer, index]));
                }
                return pre;
            }, []);
            return html `
      <div class="affine-block-children-container edgeless">
        <div
          class="affine-edgeless-layer"
          data-scale="${zoom}"
          data-translate="true"
        >
          <div class="canvas-slot"></div>
          ${repeat(blocks, block => block[0].id, ([block, layer, index]) => {
                const target = Array.from(portalMap.entries()).find(([key]) => {
                    if (typeof key === 'string') {
                        return key === block.flavour;
                    }
                    return key.test(block.flavour);
                });
                assertExists(target, `Unknown block flavour for edgeless portal: ${block.flavour}`);
                const [_, tagName] = target;
                const tag = unsafeStatic(tagName);
                return html `<${tag}
                      data-index=${block.index}
                      data-portal-block-id=${block.id}
                      .index=${layer.zIndex + index}
                      .model=${block}
                      .surface=${surface}
                      .edgeless=${edgeless}
                      .updatingSet=${this.renderingSet}
                      .concurrentUpdatingCount=${this.concurrentRendering}
                      .portalContainer=${this}
                      style=${`z-index: ${layer.zIndex + index};${_visibleElements.has(block) ? 'display:block' : ''}`}
                    ></${tag}>`;
            })}
          <edgeless-frames-container
            .edgeless=${edgeless}
            .frames=${service.layer.frames}
            .startIndex=${frameStartIndex}
            .visibleFrames=${this._visibleElements}
          >
          </edgeless-frames-container>
        </div>
      </div>
      <edgeless-dragging-area-rect
        .edgeless=${edgeless}
      ></edgeless-dragging-area-rect>

      ${readonly || this._isResizing || !this._enableNoteSlicer
                ? nothing
                : html `<note-slicer
            .edgeless=${edgeless}
            .anchorNote=${this._slicerAnchorNote}
          ></note-slicer>`}

      <edgeless-selected-rect
        .edgeless=${edgeless}
        .autoCompleteOff=${this._enableNoteSlicer}
      ></edgeless-selected-rect>

      <edgeless-navigator-black-background
        .edgeless=${edgeless}
      ></edgeless-navigator-black-background>
    `;
        }
        static renderPortal(block, zIndex, surface, edgeless) {
            const target = Array.from(portalMap.entries()).find(([key]) => {
                if (typeof key === 'string') {
                    return key === block.flavour;
                }
                return key.test(block.flavour);
            });
            assertExists(target, `Unknown block flavour for edgeless portal: ${block.flavour}`);
            const [_, tagName] = target;
            const tag = literal `${unsafeStatic(tagName)}`;
            return html `<${tag}
          slot="blocks"
          data-index=${block.index}
          .index=${zIndex}
          .model=${block}
          .surface=${surface}
          .edgeless=${edgeless}
          style=${styleMap({
                zIndex,
                display: 'block',
                position: 'relative',
            })}
        ></${tag}>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessBlockPortalContainer = _classThis;
})();
export { EdgelessBlockPortalContainer };
//# sourceMappingURL=edgeless-block-portal.js.map