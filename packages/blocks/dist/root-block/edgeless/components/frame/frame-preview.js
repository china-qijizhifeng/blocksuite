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
import '../../../../surface-ref-block/surface-ref-portal.js';
import { ShadowlessElement, WithDisposable, } from '@blocksuite/block-std';
import { debounce, DisposableGroup } from '@blocksuite/global/utils';
import { BlockViewType, nanoid } from '@blocksuite/store';
import { css, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { SpecProvider } from '../../../../specs/index.js';
import { Bound } from '../../../../surface-block/utils/bound.js';
import { deserializeXYWH } from '../../../../surface-block/utils/xywh.js';
import { isTopLevelBlock } from '../../utils/query.js';
const DEFAULT_PREVIEW_CONTAINER_WIDTH = 280;
const DEFAULT_PREVIEW_CONTAINER_HEIGHT = 166;
const styles = css `
  .frame-preview-container {
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    position: relative;
  }

  .frame-preview-surface-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    overflow: hidden;
  }

  .frame-preview-surface-viewport {
    max-width: 100%;
    box-sizing: border-box;
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    pointer-events: none;
    user-select: none;
  }

  .frame-preview-surface-canvas-container {
    height: 100%;
    width: 100%;
    position: relative;
  }
`;
let FramePreview = (() => {
    let _classDecorators = [customElement('frame-preview')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let __surfaceModel_decorators;
    let __surfaceModel_initializers = [];
    let __surfaceModel_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _frame_decorators;
    let _frame_initializers = [];
    let _frame_extraInitializers = [];
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _surfaceWidth_decorators;
    let _surfaceWidth_initializers = [];
    let _surfaceWidth_extraInitializers = [];
    let _surfaceHeight_decorators;
    let _surfaceHeight_initializers = [];
    let _surfaceHeight_extraInitializers = [];
    let _fillScreen_decorators;
    let _fillScreen_initializers = [];
    let _fillScreen_extraInitializers = [];
    let _container_decorators;
    let _container_initializers = [];
    let _container_extraInitializers = [];
    let _blocksPortal_decorators;
    let _blocksPortal_initializers = [];
    let _blocksPortal_extraInitializers = [];
    var FramePreview = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_surfaceModel_accessor_storage = __runInitializers(this, __surfaceModel_initializers, null);
            this._surfaceRefRendererId = (__runInitializers(this, __surfaceModel_extraInitializers), nanoid());
            this._edgelessDisposables = null;
            this._docDisposables = null;
            this._frameDisposables = null;
            this._debounceHandleElementUpdated = debounce((data) => {
                const { id, oldValues, props } = data;
                if (!props.xywh)
                    return;
                // if element is moved in frame, refresh viewport
                if (this._overlapWithFrame(id)) {
                    this._refreshViewport();
                }
                else if (oldValues.xywh) {
                    // if element is moved out of frame, refresh viewport
                    const oldBound = Bound.deserialize(oldValues.xywh);
                    const frameBound = Bound.deserialize(this.frame.xywh);
                    if (oldBound.isOverlapWithBound(frameBound)) {
                        this._refreshViewport();
                    }
                }
            }, 1000 / 30);
            this.#edgeless_accessor_storage = __runInitializers(this, _edgeless_initializers, null);
            this.#frame_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _frame_initializers, void 0));
            this.#doc_accessor_storage = (__runInitializers(this, _frame_extraInitializers), __runInitializers(this, _doc_initializers, void 0));
            this.#host_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _host_initializers, void 0));
            this.#surfaceWidth_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _surfaceWidth_initializers, DEFAULT_PREVIEW_CONTAINER_WIDTH));
            this.#surfaceHeight_accessor_storage = (__runInitializers(this, _surfaceWidth_extraInitializers), __runInitializers(this, _surfaceHeight_initializers, DEFAULT_PREVIEW_CONTAINER_HEIGHT));
            this.#fillScreen_accessor_storage = (__runInitializers(this, _surfaceHeight_extraInitializers), __runInitializers(this, _fillScreen_initializers, false));
            this.#container_accessor_storage = (__runInitializers(this, _fillScreen_extraInitializers), __runInitializers(this, _container_initializers, void 0));
            this.#blocksPortal_accessor_storage = (__runInitializers(this, _container_extraInitializers), __runInitializers(this, _blocksPortal_initializers, void 0));
            this._getViewportWH = (__runInitializers(this, _blocksPortal_extraInitializers), (referencedModel) => {
                const [, , w, h] = deserializeXYWH(referencedModel.xywh);
                let scale = 1;
                if (this.fillScreen) {
                    scale = Math.max(this.surfaceWidth / w, this.surfaceHeight / h);
                }
                else {
                    scale = Math.min(this.surfaceWidth / w, this.surfaceHeight / h);
                }
                return {
                    width: w * scale,
                    height: h * scale,
                };
            });
            this._overlapWithFrame = (id) => {
                const ele = this.edgeless?.service.getElementById(id);
                if (!ele || !ele.xywh)
                    return false;
                const frameBound = Bound.deserialize(this.frame.xywh);
                const eleBound = Bound.deserialize(ele.xywh);
                return frameBound.isOverlapWithBound(eleBound);
            };
            this._clearEdgelessDisposables = () => {
                this._edgelessDisposables?.dispose();
                this._edgelessDisposables = null;
            };
            this._clearDocDisposables = () => {
                this._docDisposables?.dispose();
                this._docDisposables = null;
            };
            this._clearFrameDisposables = () => {
                this._frameDisposables?.dispose();
                this._frameDisposables = null;
            };
            this._getSelector = (model) => {
                return (block, doc) => {
                    let parent = block;
                    while (parent) {
                        if (parent.id === model.id) {
                            return BlockViewType.Display;
                        }
                        parent = doc.getParent(parent.id);
                    }
                    return BlockViewType.Hidden;
                };
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __surfaceModel_decorators = [state()];
            _edgeless_decorators = [property({ attribute: false })];
            _frame_decorators = [property({ attribute: false })];
            _doc_decorators = [property({ attribute: false })];
            _host_decorators = [property({ attribute: false })];
            _surfaceWidth_decorators = [property({ attribute: false })];
            _surfaceHeight_decorators = [property({ attribute: false })];
            _fillScreen_decorators = [state()];
            _container_decorators = [query('.frame-preview-surface-canvas-container')];
            _blocksPortal_decorators = [query('.frame-preview-surface-container surface-ref-portal')];
            __esDecorate(this, null, __surfaceModel_decorators, { kind: "accessor", name: "_surfaceModel", static: false, private: false, access: { has: obj => "_surfaceModel" in obj, get: obj => obj._surfaceModel, set: (obj, value) => { obj._surfaceModel = value; } }, metadata: _metadata }, __surfaceModel_initializers, __surfaceModel_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _frame_decorators, { kind: "accessor", name: "frame", static: false, private: false, access: { has: obj => "frame" in obj, get: obj => obj.frame, set: (obj, value) => { obj.frame = value; } }, metadata: _metadata }, _frame_initializers, _frame_extraInitializers);
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _surfaceWidth_decorators, { kind: "accessor", name: "surfaceWidth", static: false, private: false, access: { has: obj => "surfaceWidth" in obj, get: obj => obj.surfaceWidth, set: (obj, value) => { obj.surfaceWidth = value; } }, metadata: _metadata }, _surfaceWidth_initializers, _surfaceWidth_extraInitializers);
            __esDecorate(this, null, _surfaceHeight_decorators, { kind: "accessor", name: "surfaceHeight", static: false, private: false, access: { has: obj => "surfaceHeight" in obj, get: obj => obj.surfaceHeight, set: (obj, value) => { obj.surfaceHeight = value; } }, metadata: _metadata }, _surfaceHeight_initializers, _surfaceHeight_extraInitializers);
            __esDecorate(this, null, _fillScreen_decorators, { kind: "accessor", name: "fillScreen", static: false, private: false, access: { has: obj => "fillScreen" in obj, get: obj => obj.fillScreen, set: (obj, value) => { obj.fillScreen = value; } }, metadata: _metadata }, _fillScreen_initializers, _fillScreen_extraInitializers);
            __esDecorate(this, null, _container_decorators, { kind: "accessor", name: "container", static: false, private: false, access: { has: obj => "container" in obj, get: obj => obj.container, set: (obj, value) => { obj.container = value; } }, metadata: _metadata }, _container_initializers, _container_extraInitializers);
            __esDecorate(this, null, _blocksPortal_decorators, { kind: "accessor", name: "blocksPortal", static: false, private: false, access: { has: obj => "blocksPortal" in obj, get: obj => obj.blocksPortal, set: (obj, value) => { obj.blocksPortal = value; } }, metadata: _metadata }, _blocksPortal_initializers, _blocksPortal_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            FramePreview = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get surfaceRenderer() {
            return this._surfaceRefRenderer.surfaceRenderer;
        }
        get _surfaceService() {
            return this.host?.std.spec.getService('affine:surface');
        }
        get _surfaceRefService() {
            return this.host.spec.getService('affine:surface-ref');
        }
        static { this.styles = styles; }
        #_surfaceModel_accessor_storage;
        get _surfaceModel() { return this.#_surfaceModel_accessor_storage; }
        set _surfaceModel(value) { this.#_surfaceModel_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #frame_accessor_storage;
        get frame() { return this.#frame_accessor_storage; }
        set frame(value) { this.#frame_accessor_storage = value; }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #host_accessor_storage;
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #surfaceWidth_accessor_storage;
        get surfaceWidth() { return this.#surfaceWidth_accessor_storage; }
        set surfaceWidth(value) { this.#surfaceWidth_accessor_storage = value; }
        #surfaceHeight_accessor_storage;
        get surfaceHeight() { return this.#surfaceHeight_accessor_storage; }
        set surfaceHeight(value) { this.#surfaceHeight_accessor_storage = value; }
        #fillScreen_accessor_storage;
        get fillScreen() { return this.#fillScreen_accessor_storage; }
        set fillScreen(value) { this.#fillScreen_accessor_storage = value; }
        #container_accessor_storage;
        get container() { return this.#container_accessor_storage; }
        set container(value) { this.#container_accessor_storage = value; }
        #blocksPortal_accessor_storage;
        get blocksPortal() { return this.#blocksPortal_accessor_storage; }
        set blocksPortal(value) { this.#blocksPortal_accessor_storage = value; }
        _attachRenderer() {
            if (this._surfaceRefRenderer?.surfaceRenderer.canvas.isConnected ||
                !this.container ||
                !this.blocksPortal)
                return;
            this.surfaceRenderer.attach(this.container);
            if (this.blocksPortal.isUpdatePending) {
                this.blocksPortal.updateComplete
                    .then(() => {
                    this.blocksPortal.setStackingCanvas(this._surfaceRefRenderer.surfaceRenderer.stackingCanvas);
                })
                    .catch(console.error);
            }
            else {
                this.blocksPortal.setStackingCanvas(this._surfaceRefRenderer.surfaceRenderer.stackingCanvas);
            }
        }
        _setupSurfaceRefRenderer() {
            const surfaceRefService = this._surfaceRefService;
            if (!surfaceRefService)
                return;
            const renderer = surfaceRefService.getRenderer(this._surfaceRefRendererId, this.doc, true);
            this._surfaceRefRenderer = renderer;
            this._disposables.add(renderer.slots.surfaceModelChanged.on(model => {
                this._surfaceModel = model;
            }));
            this._disposables.add(renderer.slots.surfaceRendererRefresh.on(() => {
                this.requestUpdate();
            }));
            this._disposables.add(this._surfaceRefRenderer.surfaceService.layer.slots.layerUpdated.on(() => {
                this.blocksPortal.setStackingCanvas(this._surfaceRefRenderer.surfaceRenderer.stackingCanvas);
            }));
            renderer.mount();
        }
        _cleanupSurfaceRefRenderer() {
            const surfaceRefService = this._surfaceRefService;
            if (!surfaceRefService)
                return;
            surfaceRefService.removeRenderer(this._surfaceRefRendererId);
        }
        _refreshViewport() {
            if (!this.frame || !this._surfaceService) {
                return;
            }
            const referencedModel = this.frame;
            // trigger a rerender to update element's size
            // and set viewport after element's size has been updated
            this.updateComplete
                .then(() => {
                this.surfaceRenderer.onResize();
                this.surfaceRenderer.setViewportByBound(Bound.fromXYWH(deserializeXYWH(referencedModel.xywh)));
                this.blocksPortal?.setViewport(this.surfaceRenderer);
            })
                .catch(console.error);
        }
        _tryLoadFillScreen() {
            if (!this.edgeless)
                return;
            this.fillScreen =
                this.edgeless.service.editPropsStore.getItem('presentFillScreen') ??
                    false;
        }
        _setEdgelessDisposables(edgeless) {
            this._clearEdgelessDisposables();
            if (!edgeless)
                return;
            this._edgelessDisposables = new DisposableGroup();
            this._edgelessDisposables.add(edgeless.slots.navigatorSettingUpdated.on(({ fillScreen }) => {
                if (fillScreen !== undefined) {
                    this.fillScreen = fillScreen;
                    this._refreshViewport();
                }
            }));
            this._edgelessDisposables.add(edgeless.service.surface.elementAdded.on(({ id }) => {
                if (this._overlapWithFrame(id)) {
                    this._refreshViewport();
                }
            }));
            this._edgelessDisposables.add(edgeless.service.surface.elementUpdated.on(this._debounceHandleElementUpdated));
            this._edgelessDisposables.add(edgeless.service.surface.elementRemoved.on(() => this._refreshViewport()));
        }
        _setDocDisposables(doc) {
            this._clearDocDisposables();
            this._docDisposables = new DisposableGroup();
            this._docDisposables.add(doc.slots.blockUpdated.on(event => {
                const { type } = event;
                // Should only check for add and delete events, the update event will be handled by the surface renderer
                if (type === 'update')
                    return;
                const model = doc.getBlockById(event.id);
                if (!model || !isTopLevelBlock(model) || !model.xywh)
                    return;
                const frameBound = Bound.deserialize(this.frame.xywh);
                const modelBound = Bound.deserialize(model.xywh);
                if (frameBound.containsPoint([modelBound.x, modelBound.y])) {
                    this._refreshViewport();
                }
            }));
        }
        _setFrameDisposables(frame) {
            this._clearFrameDisposables();
            this._frameDisposables = new DisposableGroup();
            this._frameDisposables.add(frame.propsUpdated.on(() => {
                this.requestUpdate();
                this._refreshViewport();
            }));
        }
        _renderModel(model) {
            const selector = this._getSelector(model);
            this._disposables.add(() => {
                doc.blockCollection.clearSelector(selector);
            });
            const doc = model.doc.blockCollection.getDoc({ selector });
            const previewSpec = SpecProvider.getInstance().getSpec('page:preview');
            return this.host.renderSpecPortal(doc, previewSpec.value);
        }
        _renderSurfaceContent(referencedModel) {
            const { width, height } = this._getViewportWH(referencedModel);
            return html `<div
      class="frame-preview-surface-container"
      style=${styleMap({
                width: `${this.surfaceWidth}px`,
                height: `${this.surfaceHeight}px`,
            })}
    >
      <div
        style=${styleMap({
                backgroundColor: referencedModel.background
                    ? `var(${referencedModel.background})`
                    : 'var(--affine-platte-transparent)',
                borderRadius: '4px',
            })}
      >
        <div
          class="frame-preview-surface-viewport"
          style=${styleMap({
                width: `${width}px`,
                height: `${height}px`,
                aspectRatio: `${width} / ${height}`,
            })}
        >
          <surface-ref-portal
            .doc=${this.doc}
            .host=${this.host}
            .refModel=${referencedModel}
            .renderModel=${this._renderModel}
          ></surface-ref-portal>
          <div class="frame-preview-surface-canvas-container">
            <!-- attach canvas here -->
          </div>
        </div>
      </div>
    </div>`;
        }
        connectedCallback() {
            super.connectedCallback();
            this._tryLoadFillScreen();
            this._setupSurfaceRefRenderer();
            this._setDocDisposables(this.doc);
            this._setEdgelessDisposables(this.edgeless);
        }
        firstUpdated() {
            this._refreshViewport();
            this._setFrameDisposables(this.frame);
        }
        updated(_changedProperties) {
            if (_changedProperties.has('edgeless')) {
                if (this.edgeless) {
                    this._setEdgelessDisposables(this.edgeless);
                }
                else {
                    this._clearEdgelessDisposables();
                }
                setTimeout(() => {
                    this._refreshViewport();
                });
            }
            if (_changedProperties.has('doc')) {
                if (this.doc) {
                    this._setDocDisposables(this.doc);
                }
            }
            this._attachRenderer();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._cleanupSurfaceRefRenderer();
            this._clearEdgelessDisposables();
            this._clearDocDisposables();
            this._clearFrameDisposables();
        }
        render() {
            const { _surfaceModel, frame, host, _surfaceService } = this;
            const noContent = !_surfaceModel || !frame || !frame.xywh || !host || !_surfaceService;
            return html `<div class="frame-preview-container">
      ${noContent ? nothing : this._renderSurfaceContent(frame)}
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return FramePreview = _classThis;
})();
export { FramePreview };
//# sourceMappingURL=frame-preview.js.map