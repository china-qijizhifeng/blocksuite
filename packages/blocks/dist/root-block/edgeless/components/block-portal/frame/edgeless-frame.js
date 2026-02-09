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
import { css, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { FrameBlockModel } from '../../../../../frame-block/index.js';
import { Bound, } from '../../../../../surface-block/index.js';
import { EdgelessPortalBase } from '../edgeless-portal-base.js';
const NESTED_FRAME_OFFSET = 4;
let EdgelessFrameTitle = (() => {
    let _classDecorators = [customElement('edgeless-frame-title')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let __editing_decorators;
    let __editing_initializers = [];
    let __editing_extraInitializers = [];
    let __isNavigator_decorators;
    let __isNavigator_initializers = [];
    let __isNavigator_extraInitializers = [];
    let __frameTitleEl_decorators;
    let __frameTitleEl_initializers = [];
    let __frameTitleEl_extraInitializers = [];
    let __nestedFrame_decorators;
    let __nestedFrame_initializers = [];
    let __nestedFrame_extraInitializers = [];
    let __frameTitle_decorators;
    let __frameTitle_initializers = [];
    let __frameTitle_extraInitializers = [];
    let __xywh_decorators;
    let __xywh_initializers = [];
    let __xywh_extraInitializers = [];
    let _frame_decorators;
    let _frame_initializers = [];
    let _frame_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _zoom_decorators;
    let _zoom_initializers = [];
    let _zoom_extraInitializers = [];
    var EdgelessFrameTitle = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __editing_decorators = [state()];
            __isNavigator_decorators = [state()];
            __frameTitleEl_decorators = [query('.affine-frame-title')];
            __nestedFrame_decorators = [state()];
            __frameTitle_decorators = [state()];
            __xywh_decorators = [state()];
            _frame_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            _zoom_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __editing_decorators, { kind: "accessor", name: "_editing", static: false, private: false, access: { has: obj => "_editing" in obj, get: obj => obj._editing, set: (obj, value) => { obj._editing = value; } }, metadata: _metadata }, __editing_initializers, __editing_extraInitializers);
            __esDecorate(this, null, __isNavigator_decorators, { kind: "accessor", name: "_isNavigator", static: false, private: false, access: { has: obj => "_isNavigator" in obj, get: obj => obj._isNavigator, set: (obj, value) => { obj._isNavigator = value; } }, metadata: _metadata }, __isNavigator_initializers, __isNavigator_extraInitializers);
            __esDecorate(this, null, __frameTitleEl_decorators, { kind: "accessor", name: "_frameTitleEl", static: false, private: false, access: { has: obj => "_frameTitleEl" in obj, get: obj => obj._frameTitleEl, set: (obj, value) => { obj._frameTitleEl = value; } }, metadata: _metadata }, __frameTitleEl_initializers, __frameTitleEl_extraInitializers);
            __esDecorate(this, null, __nestedFrame_decorators, { kind: "accessor", name: "_nestedFrame", static: false, private: false, access: { has: obj => "_nestedFrame" in obj, get: obj => obj._nestedFrame, set: (obj, value) => { obj._nestedFrame = value; } }, metadata: _metadata }, __nestedFrame_initializers, __nestedFrame_extraInitializers);
            __esDecorate(this, null, __frameTitle_decorators, { kind: "accessor", name: "_frameTitle", static: false, private: false, access: { has: obj => "_frameTitle" in obj, get: obj => obj._frameTitle, set: (obj, value) => { obj._frameTitle = value; } }, metadata: _metadata }, __frameTitle_initializers, __frameTitle_extraInitializers);
            __esDecorate(this, null, __xywh_decorators, { kind: "accessor", name: "_xywh", static: false, private: false, access: { has: obj => "_xywh" in obj, get: obj => obj._xywh, set: (obj, value) => { obj._xywh = value; } }, metadata: _metadata }, __xywh_initializers, __xywh_extraInitializers);
            __esDecorate(this, null, _frame_decorators, { kind: "accessor", name: "frame", static: false, private: false, access: { has: obj => "frame" in obj, get: obj => obj.frame, set: (obj, value) => { obj.frame = value; } }, metadata: _metadata }, _frame_initializers, _frame_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _zoom_decorators, { kind: "accessor", name: "zoom", static: false, private: false, access: { has: obj => "zoom" in obj, get: obj => obj.zoom, set: (obj, value) => { obj.zoom = value; } }, metadata: _metadata }, _zoom_initializers, _zoom_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessFrameTitle = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .affine-frame-title {
      position: absolute;
      z-index: 1;
      left: 0px;
      top: 0px;
      border-radius: 4px;
      width: fit-content;
      padding: 8px 10px;
      font-size: 14px;
      cursor: default;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transform-origin: left bottom;
      line-height: normal;
    }
  `; }
        #_editing_accessor_storage;
        get _editing() { return this.#_editing_accessor_storage; }
        set _editing(value) { this.#_editing_accessor_storage = value; }
        #_isNavigator_accessor_storage;
        get _isNavigator() { return this.#_isNavigator_accessor_storage; }
        set _isNavigator(value) { this.#_isNavigator_accessor_storage = value; }
        #_frameTitleEl_accessor_storage;
        get _frameTitleEl() { return this.#_frameTitleEl_accessor_storage; }
        set _frameTitleEl(value) { this.#_frameTitleEl_accessor_storage = value; }
        #_nestedFrame_accessor_storage;
        get _nestedFrame() { return this.#_nestedFrame_accessor_storage; }
        set _nestedFrame(value) { this.#_nestedFrame_accessor_storage = value; }
        #_frameTitle_accessor_storage;
        get _frameTitle() { return this.#_frameTitle_accessor_storage; }
        set _frameTitle(value) { this.#_frameTitle_accessor_storage = value; }
        #_xywh_accessor_storage;
        get _xywh() { return this.#_xywh_accessor_storage; }
        set _xywh(value) { this.#_xywh_accessor_storage = value; }
        #frame_accessor_storage;
        get frame() { return this.#frame_accessor_storage; }
        set frame(value) { this.#frame_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #zoom_accessor_storage;
        get zoom() { return this.#zoom_accessor_storage; }
        set zoom(value) { this.#zoom_accessor_storage = value; }
        _updateFrameTitleSize() {
            const { _nestedFrame, zoom } = this;
            const { elementBound } = this.frame;
            const width = this._cachedWidth / zoom;
            const height = this._cachedHeight / zoom;
            if (width && height) {
                this.frame.externalXYWH = `[${elementBound.x + (_nestedFrame ? NESTED_FRAME_OFFSET / zoom : 0)},${elementBound.y +
                    (_nestedFrame
                        ? NESTED_FRAME_OFFSET / zoom
                        : -(height + NESTED_FRAME_OFFSET / zoom))},${width},${height}]`;
            }
        }
        _isInsideFrame() {
            return this.edgeless.service.layer.framesGrid.has(this.frame.elementBound, true, true, new Set([this.frame]));
        }
        connectedCallback() {
            super.connectedCallback();
            const { _disposables, edgeless } = this;
            const { surface } = edgeless;
            this._nestedFrame = this._isInsideFrame();
            _disposables.add(edgeless.doc.slots.blockUpdated.on(payload => {
                if ((payload.type === 'update' &&
                    payload.props.key === 'xywh' &&
                    edgeless.doc.getBlock(payload.id)?.model instanceof
                        FrameBlockModel) ||
                    (payload.type === 'add' && payload.flavour === 'affine:frame')) {
                    this._nestedFrame = this._isInsideFrame();
                }
            }));
            _disposables.add(this.frame.propsUpdated.on(() => {
                this._xywh = this.frame.xywh;
                this.requestUpdate();
            }));
            _disposables.add(edgeless.service.selection.slots.updated.on(() => {
                this._editing =
                    edgeless.service.selection.selectedIds[0] === this.frame.id &&
                        edgeless.service.selection.editing;
            }));
            _disposables.add(() => {
                surface.edgeless.slots.edgelessToolUpdated.on(tool => {
                    this._isNavigator = tool.type === 'frameNavigator';
                });
            });
            const updateTitle = () => {
                this._frameTitle = this.frame.title.toString();
            };
            _disposables.add(() => {
                this.frame.title.yText.unobserve(updateTitle);
            });
            this.frame.title.yText.observe(updateTitle);
            this._frameTitle = this.frame.title.toString();
            this._xywh = this.frame.xywh;
        }
        updated(_changedProperties) {
            if (this.style.display !== 'block' || !this._frameTitleEl) {
                return;
            }
            let sizeChanged = false;
            if (this._cachedWidth === 0 ||
                this._cachedHeight === 0 ||
                _changedProperties.has('_frameTitle') ||
                _changedProperties.has('_nestedFrame') ||
                _changedProperties.has('_xywh')) {
                this._cachedWidth = this._frameTitleEl.clientWidth;
                this._cachedHeight = this._frameTitleEl.clientHeight;
                sizeChanged = true;
            }
            if (sizeChanged || _changedProperties.has('zoom')) {
                this._updateFrameTitleSize();
            }
        }
        render() {
            const model = this.frame;
            const bound = Bound.deserialize(model.xywh);
            const { _isNavigator, _editing, zoom } = this;
            const nestedFrame = this._nestedFrame;
            const maxWidth = nestedFrame
                ? bound.w * zoom - NESTED_FRAME_OFFSET / zoom
                : bound.w * zoom;
            // 32 is the estimated height of title element
            const hidden = 32 / zoom >= bound.h && nestedFrame;
            const transformOperation = [
                `translate(${bound.x}px, ${bound.y}px)`,
                `translate(0%, ${nestedFrame ? 0 : -100}%)`,
                `scale(${1 / zoom})`,
                `translate(${nestedFrame ? NESTED_FRAME_OFFSET : 0}px, ${nestedFrame ? NESTED_FRAME_OFFSET : -NESTED_FRAME_OFFSET}px)`,
            ];
            return html `
      ${this._frameTitle && !_isNavigator && !_editing
                ? html `
            <div
              style=${styleMap({
                    display: hidden ? 'none' : 'initial',
                    transform: transformOperation.join(' '),
                    maxWidth: maxWidth + 'px',
                    transformOrigin: nestedFrame ? 'top left' : 'bottom left',
                    background: nestedFrame
                        ? 'var(--affine-white)'
                        : 'var(--affine-text-primary-color)',
                    color: nestedFrame
                        ? 'var(--affine-text-secondary-color)'
                        : 'var(--affine-white)',
                    border: nestedFrame
                        ? '1px solid var(--affine-border-color)'
                        : 'none',
                })}
              class="affine-frame-title"
            >
              ${this._frameTitle}
            </div>
          `
                : nothing}
    `;
        }
        constructor() {
            super(...arguments);
            this.#_editing_accessor_storage = __runInitializers(this, __editing_initializers, false);
            this.#_isNavigator_accessor_storage = (__runInitializers(this, __editing_extraInitializers), __runInitializers(this, __isNavigator_initializers, false));
            this.#_frameTitleEl_accessor_storage = (__runInitializers(this, __isNavigator_extraInitializers), __runInitializers(this, __frameTitleEl_initializers, void 0));
            this.#_nestedFrame_accessor_storage = (__runInitializers(this, __frameTitleEl_extraInitializers), __runInitializers(this, __nestedFrame_initializers, false));
            this.#_frameTitle_accessor_storage = (__runInitializers(this, __nestedFrame_extraInitializers), __runInitializers(this, __frameTitle_initializers, ''));
            this.#_xywh_accessor_storage = (__runInitializers(this, __frameTitle_extraInitializers), __runInitializers(this, __xywh_initializers, null));
            this._cachedWidth = (__runInitializers(this, __xywh_extraInitializers), 0);
            this._cachedHeight = 0;
            this.#frame_accessor_storage = __runInitializers(this, _frame_initializers, void 0);
            this.#edgeless_accessor_storage = (__runInitializers(this, _frame_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
            this.#zoom_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _zoom_initializers, void 0));
            __runInitializers(this, _zoom_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessFrameTitle = _classThis;
})();
export { EdgelessFrameTitle };
let EdgelessBlockPortalFrame = (() => {
    let _classDecorators = [customElement('edgeless-block-portal-frame')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EdgelessPortalBase;
    var EdgelessBlockPortalFrame = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessBlockPortalFrame = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        render() {
            const { model, index } = this;
            const bound = Bound.deserialize(model.xywh);
            const style = styleMap({
                position: 'absolute',
                zIndex: `${index}`,
                left: `${bound.x}px`,
                top: `${bound.y}px`,
                transformOrigin: '0px 0px',
            });
            return html `
      <div class="edgeless-block-portal-frame" style=${style}>
        ${this.renderModel(model)}
      </div>
    `;
        }
    };
    return EdgelessBlockPortalFrame = _classThis;
})();
let EdgelessFramesContainer = (() => {
    let _classDecorators = [customElement('edgeless-frames-container')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _frames_decorators;
    let _frames_initializers = [];
    let _frames_extraInitializers = [];
    let _startIndex_decorators;
    let _startIndex_initializers = [];
    let _startIndex_extraInitializers = [];
    let _visibleFrames_decorators;
    let _visibleFrames_initializers = [];
    let _visibleFrames_extraInitializers = [];
    var EdgelessFramesContainer = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _edgeless_decorators = [property({ attribute: false })];
            _frames_decorators = [property({ attribute: false })];
            _startIndex_decorators = [property({ attribute: false })];
            _visibleFrames_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _frames_decorators, { kind: "accessor", name: "frames", static: false, private: false, access: { has: obj => "frames" in obj, get: obj => obj.frames, set: (obj, value) => { obj.frames = value; } }, metadata: _metadata }, _frames_initializers, _frames_extraInitializers);
            __esDecorate(this, null, _startIndex_decorators, { kind: "accessor", name: "startIndex", static: false, private: false, access: { has: obj => "startIndex" in obj, get: obj => obj.startIndex, set: (obj, value) => { obj.startIndex = value; } }, metadata: _metadata }, _startIndex_initializers, _startIndex_extraInitializers);
            __esDecorate(this, null, _visibleFrames_decorators, { kind: "accessor", name: "visibleFrames", static: false, private: false, access: { has: obj => "visibleFrames" in obj, get: obj => obj.visibleFrames, set: (obj, value) => { obj.visibleFrames = value; } }, metadata: _metadata }, _visibleFrames_initializers, _visibleFrames_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessFramesContainer = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    edgeless-frames-container {
      display: block;
    }

    edgeless-frames-container > [data-portal-block-id],
    edgeless-frames-container > [data-frame-title-id] {
      position: relative;
    }
  `; }
        #edgeless_accessor_storage = __runInitializers(this, _edgeless_initializers, void 0);
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #frames_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _frames_initializers, void 0));
        get frames() { return this.#frames_accessor_storage; }
        set frames(value) { this.#frames_accessor_storage = value; }
        #startIndex_accessor_storage = (__runInitializers(this, _frames_extraInitializers), __runInitializers(this, _startIndex_initializers, void 0));
        get startIndex() { return this.#startIndex_accessor_storage; }
        set startIndex(value) { this.#startIndex_accessor_storage = value; }
        #visibleFrames_accessor_storage = (__runInitializers(this, _startIndex_extraInitializers), __runInitializers(this, _visibleFrames_initializers, void 0));
        get visibleFrames() { return this.#visibleFrames_accessor_storage; }
        set visibleFrames(value) { this.#visibleFrames_accessor_storage = value; }
        render() {
            const { visibleFrames, edgeless, startIndex } = this;
            const zoom = edgeless.service.viewport.zoom;
            return repeat(this.frames, frame => frame.id, (frame, index) => html `
        <edgeless-frame-title
          data-frame-title-id=${frame.id}
          style=${`z-index: ${startIndex + index};${visibleFrames.has(frame) ? 'display:block' : ''}`}
          .frame=${frame}
          .edgeless=${this.edgeless}
          .zoom=${zoom}
        >
        </edgeless-frame-title>
        <edgeless-block-portal-frame
          data-portal-block-id=${frame.id}
          .index=${1}
          .model=${frame}
          .surface=${this.edgeless.surface}
          .edgeless=${this.edgeless}
          .updatingSet=${this.edgeless.rootElementContainer.renderingSet}
          .concurrentUpdatingCount=${this.edgeless.rootElementContainer
                .concurrentRendering}
          style=${`pointer-events: none; z-index: ${startIndex + index};${visibleFrames.has(frame) ? 'display:block' : ''}`}
        >
        </edgeless-block-portal-frame>
      `);
        }
        connectedCallback() {
            super.connectedCallback();
            this._disposables.add(this.edgeless.service.viewport.viewportUpdated.on(() => {
                // if zoom changed we need to re-render the frame titles
                this.requestUpdate();
            }));
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _visibleFrames_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessFramesContainer = _classThis;
})();
export { EdgelessFramesContainer };
//# sourceMappingURL=edgeless-frame.js.map