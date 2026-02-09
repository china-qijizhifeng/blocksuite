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
import { WithDisposable } from '@blocksuite/block-std';
import { DisposableGroup } from '@blocksuite/global/utils';
import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { Vec, } from '../../../../surface-block/index.js';
const SIZE = 12;
const HALF_SIZE = SIZE / 2;
let EdgelessConnectorHandle = (() => {
    let _classDecorators = [customElement('edgeless-connector-handle')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __startHandler_decorators;
    let __startHandler_initializers = [];
    let __startHandler_extraInitializers = [];
    let __endHandler_decorators;
    let __endHandler_initializers = [];
    let __endHandler_extraInitializers = [];
    let _connector_decorators;
    let _connector_initializers = [];
    let _connector_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    var EdgelessConnectorHandle = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __startHandler_decorators = [query('.line-start')];
            __endHandler_decorators = [query('.line-end')];
            _connector_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __startHandler_decorators, { kind: "accessor", name: "_startHandler", static: false, private: false, access: { has: obj => "_startHandler" in obj, get: obj => obj._startHandler, set: (obj, value) => { obj._startHandler = value; } }, metadata: _metadata }, __startHandler_initializers, __startHandler_extraInitializers);
            __esDecorate(this, null, __endHandler_decorators, { kind: "accessor", name: "_endHandler", static: false, private: false, access: { has: obj => "_endHandler" in obj, get: obj => obj._endHandler, set: (obj, value) => { obj._endHandler = value; } }, metadata: _metadata }, __endHandler_initializers, __endHandler_extraInitializers);
            __esDecorate(this, null, _connector_decorators, { kind: "accessor", name: "connector", static: false, private: false, access: { has: obj => "connector" in obj, get: obj => obj.connector, set: (obj, value) => { obj.connector = value; } }, metadata: _metadata }, _connector_initializers, _connector_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessConnectorHandle = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .line-controller {
      position: absolute;
      width: ${SIZE}px;
      height: ${SIZE}px;
      box-sizing: border-box;
      border-radius: 50%;
      border: 2px solid var(--affine-text-emphasis-color);
      background-color: var(--affine-background-primary-color);
      cursor: pointer;
      z-index: 10;
      pointer-events: all;
      /**
       * Fix: pointerEvent stops firing after a short time.
       * When a gesture is started, the browser intersects the touch-action values of the touched element and its ancestors,
       * up to the one that implements the gesture (in other words, the first containing scrolling element)
       * https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action
       */
      touch-action: none;
    }
    .line-controller-hidden {
      display: none;
    }
  `; }
        #_startHandler_accessor_storage;
        get _startHandler() { return this.#_startHandler_accessor_storage; }
        set _startHandler(value) { this.#_startHandler_accessor_storage = value; }
        #_endHandler_accessor_storage;
        get _endHandler() { return this.#_endHandler_accessor_storage; }
        set _endHandler(value) { this.#_endHandler_accessor_storage = value; }
        #connector_accessor_storage;
        get connector() { return this.#connector_accessor_storage; }
        set connector(value) { this.#connector_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        _capPointerDown(e, connection) {
            const { edgeless, connector, _disposables } = this;
            const { service, surface } = edgeless;
            e.stopPropagation();
            _disposables.addFromEvent(document, 'pointermove', e => {
                const point = service.viewport.toModelCoordFromClientCoord([e.x, e.y]);
                const isStartPointer = connection === 'source';
                const otherSideId = connector[isStartPointer ? 'target' : 'source'].id;
                connector[connection] = surface.overlays.connector.renderConnector(point, otherSideId ? [otherSideId] : []);
                this.requestUpdate();
            });
            _disposables.addFromEvent(document, 'pointerup', () => {
                surface.overlays.connector.clear();
                edgeless.doc.captureSync();
                _disposables.dispose();
                this._disposables = new DisposableGroup();
                this._bindEvent();
                edgeless.slots.elementResizeEnd.emit();
            });
        }
        _bindEvent() {
            const edgeless = this.edgeless;
            this._disposables.addFromEvent(this._startHandler, 'pointerdown', e => {
                edgeless.slots.elementResizeStart.emit();
                this._capPointerDown(e, 'source');
            });
            this._disposables.addFromEvent(this._endHandler, 'pointerdown', e => {
                edgeless.slots.elementResizeStart.emit();
                this._capPointerDown(e, 'target');
            });
            this._disposables.add(() => {
                edgeless.surface.overlays.connector.clear();
            });
        }
        firstUpdated() {
            const { edgeless } = this;
            const { viewport } = edgeless.service;
            this._lastZoom = viewport.zoom;
            edgeless.service.viewport.viewportUpdated.on(() => {
                if (viewport.zoom !== this._lastZoom) {
                    this._lastZoom = viewport.zoom;
                    this.requestUpdate();
                }
            });
            this._bindEvent();
        }
        render() {
            const { service } = this.edgeless;
            // path is relative to the element's xywh
            const { path } = this.connector;
            const zoom = service.viewport.zoom;
            const startPoint = Vec.subScalar(Vec.mul(path[0], zoom), HALF_SIZE);
            const endPoint = Vec.subScalar(Vec.mul(path[path.length - 1], zoom), HALF_SIZE);
            const startStyle = {
                transform: `translate3d(${startPoint[0]}px,${startPoint[1]}px,0)`,
            };
            const endStyle = {
                transform: `translate3d(${endPoint[0]}px,${endPoint[1]}px,0)`,
            };
            return html `
      <div
        class="line-controller line-start"
        style=${styleMap(startStyle)}
      ></div>
      <div class="line-controller line-end" style=${styleMap(endStyle)}></div>
    `;
        }
        constructor() {
            super(...arguments);
            this.#_startHandler_accessor_storage = __runInitializers(this, __startHandler_initializers, void 0);
            this.#_endHandler_accessor_storage = (__runInitializers(this, __startHandler_extraInitializers), __runInitializers(this, __endHandler_initializers, void 0));
            this._lastZoom = (__runInitializers(this, __endHandler_extraInitializers), 1);
            this.#connector_accessor_storage = __runInitializers(this, _connector_initializers, void 0);
            this.#edgeless_accessor_storage = (__runInitializers(this, _connector_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
            __runInitializers(this, _edgeless_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessConnectorHandle = _classThis;
})();
export { EdgelessConnectorHandle };
//# sourceMappingURL=connector-handle.js.map