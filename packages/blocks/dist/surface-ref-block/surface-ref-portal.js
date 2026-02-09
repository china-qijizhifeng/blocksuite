/* eslint-disable lit/binding-positions, lit/no-invalid-html */
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
import './portal/note.js';
import './portal/generic-block.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { html as staticHtml, literal, unsafeStatic } from 'lit/static-html.js';
const portalMap = {
    'affine:note': 'surface-ref-note-portal',
};
const getPortalTag = (model) => {
    const tag = portalMap[model.flavour];
    return tag ?? 'surface-ref-generic-block-portal';
};
let SurfaceRefPortal = (() => {
    let _classDecorators = [customElement('surface-ref-portal')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _refModel_decorators;
    let _refModel_initializers = [];
    let _refModel_extraInitializers = [];
    let _renderModel_decorators;
    let _renderModel_initializers = [];
    let _renderModel_extraInitializers = [];
    let _portal_decorators;
    let _portal_initializers = [];
    let _portal_extraInitializers = [];
    let _canvasSlot_decorators;
    let _canvasSlot_initializers = [];
    let _canvasSlot_extraInitializers = [];
    var SurfaceRefPortal = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#host_accessor_storage = __runInitializers(this, _host_initializers, void 0);
            this.#doc_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _doc_initializers, void 0));
            this.#refModel_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _refModel_initializers, void 0));
            this.#renderModel_accessor_storage = (__runInitializers(this, _refModel_extraInitializers), __runInitializers(this, _renderModel_initializers, void 0));
            this.#portal_accessor_storage = (__runInitializers(this, _renderModel_extraInitializers), __runInitializers(this, _portal_initializers, void 0));
            this.#canvasSlot_accessor_storage = (__runInitializers(this, _portal_extraInitializers), __runInitializers(this, _canvasSlot_initializers, void 0));
            this.setViewport = (__runInitializers(this, _canvasSlot_extraInitializers), (viewport) => {
                this.requestUpdate();
                this.updateComplete
                    .then(() => {
                    this.portal?.style.setProperty('transform', `translate(${viewport.translateX}px, ${viewport.translateY}px) scale(${viewport.zoom})`);
                    this.portal?.style.setProperty('transform-origin', '0 0');
                    this.canvasSlot?.style.setProperty('--stacking-canvas-transform', `scale(${1 / viewport.zoom}) translate(${-viewport.translateX}px, ${-viewport.translateY}px)`);
                })
                    .catch(console.error);
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _host_decorators = [property({ attribute: false })];
            _doc_decorators = [property({ attribute: false })];
            _refModel_decorators = [property({ attribute: false })];
            _renderModel_decorators = [property({ attribute: false })];
            _portal_decorators = [query('.surface-blocks-portal')];
            _canvasSlot_decorators = [query('.stacking-canvas')];
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _refModel_decorators, { kind: "accessor", name: "refModel", static: false, private: false, access: { has: obj => "refModel" in obj, get: obj => obj.refModel, set: (obj, value) => { obj.refModel = value; } }, metadata: _metadata }, _refModel_initializers, _refModel_extraInitializers);
            __esDecorate(this, null, _renderModel_decorators, { kind: "accessor", name: "renderModel", static: false, private: false, access: { has: obj => "renderModel" in obj, get: obj => obj.renderModel, set: (obj, value) => { obj.renderModel = value; } }, metadata: _metadata }, _renderModel_initializers, _renderModel_extraInitializers);
            __esDecorate(this, null, _portal_decorators, { kind: "accessor", name: "portal", static: false, private: false, access: { has: obj => "portal" in obj, get: obj => obj.portal, set: (obj, value) => { obj.portal = value; } }, metadata: _metadata }, _portal_initializers, _portal_extraInitializers);
            __esDecorate(this, null, _canvasSlot_decorators, { kind: "accessor", name: "canvasSlot", static: false, private: false, access: { has: obj => "canvasSlot" in obj, get: obj => obj.canvasSlot, set: (obj, value) => { obj.canvasSlot = value; } }, metadata: _metadata }, _canvasSlot_initializers, _canvasSlot_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            SurfaceRefPortal = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get surfaceService() {
            return this.host.std.spec.getService('affine:surface');
        }
        static { this.styles = css `
    .surface-blocks-portal {
      pointer-events: none;
      position: absolute;
      left: 0;
      top: 0;
      transform-origin: 0 0;
    }
    .stacking-canvas {
      position: absolute;
      left: 0;
      top: 0;
    }

    .stacking-canvas > canvas {
      transform: var(--stacking-canvas-transform);
      transform-origin: 0 0;
      position: absolute;
      left: 0;
      top: 0;
    }
  `; }
        #host_accessor_storage;
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #refModel_accessor_storage;
        get refModel() { return this.#refModel_accessor_storage; }
        set refModel(value) { this.#refModel_accessor_storage = value; }
        #renderModel_accessor_storage;
        get renderModel() { return this.#renderModel_accessor_storage; }
        set renderModel(value) { this.#renderModel_accessor_storage = value; }
        #portal_accessor_storage;
        get portal() { return this.#portal_accessor_storage; }
        set portal(value) { this.#portal_accessor_storage = value; }
        #canvasSlot_accessor_storage;
        get canvasSlot() { return this.#canvasSlot_accessor_storage; }
        set canvasSlot(value) { this.#canvasSlot_accessor_storage = value; }
        _getBlocksInFrame(model) {
            const bound = model.elementBound;
            const candidates = this.surfaceService.layer.blocksGrid.search(bound);
            return candidates;
        }
        _getBlocksInGroup(model) {
            return Array.from(model.childIds)
                .map(id => this.doc.getBlockById(id))
                .filter(el => el);
        }
        _renderEdgelessBlocks() {
            const refModel = this.refModel;
            const blocks = 'flavour' in refModel
                ? this._getBlocksInFrame(refModel)
                : this._getBlocksInGroup(refModel);
            const blockLayers = this.surfaceService.layer.layers.filter(layer => layer.type === 'block');
            let currentLayerIdx = 0;
            let currentIdxOffset = 0;
            return repeat(blocks, model => model.id, (model, index) => {
                const tag = literal `${unsafeStatic(getPortalTag(model))}`;
                let currentLayer = blockLayers[currentLayerIdx];
                if (!blockLayers[currentLayerIdx].set.has(model)) {
                    while (!currentLayer.set.has(model)) {
                        currentLayer = blockLayers[++currentLayerIdx];
                    }
                    currentIdxOffset = 0;
                }
                const zIndex = currentLayer.zIndex + currentIdxOffset++;
                return staticHtml `<${tag}
          .index=${index}
          .model=${model}
          .doc=${this.doc}
          .host=${this.host}
          .renderModel=${this.renderModel}
          style=${styleMap({
                    'z-index': zIndex,
                })}
        ></${tag}>`;
            });
        }
        setStackingCanvas(canvases) {
            if (this.canvasSlot) {
                this.canvasSlot.replaceChildren(...canvases);
            }
        }
        render() {
            return html `<div class="surface-blocks-portal">
      <div class="stacking-canvas"></div>
      ${this._renderEdgelessBlocks()}
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return SurfaceRefPortal = _classThis;
})();
export { SurfaceRefPortal };
//# sourceMappingURL=surface-ref-portal.js.map