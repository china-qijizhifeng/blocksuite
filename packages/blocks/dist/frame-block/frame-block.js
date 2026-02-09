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
/// <reference types="vite/client" />
import { BlockElement } from '@blocksuite/block-std';
import { html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { isCssVariable } from '../_common/theme/css-variables.js';
import { Bound } from '../surface-block/index.js';
let FrameBlockComponent = (() => {
    let _classDecorators = [customElement('affine-frame')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BlockElement;
    let __isNavigator_decorators;
    let __isNavigator_initializers = [];
    let __isNavigator_extraInitializers = [];
    var FrameBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __isNavigator_decorators = [state()];
            __esDecorate(this, null, __isNavigator_decorators, { kind: "accessor", name: "_isNavigator", static: false, private: false, access: { has: obj => "_isNavigator" in obj, get: obj => obj._isNavigator, set: (obj, value) => { obj._isNavigator = value; } }, metadata: _metadata }, __isNavigator_initializers, __isNavigator_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            FrameBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        #_isNavigator_accessor_storage = __runInitializers(this, __isNavigator_initializers, false);
        get _isNavigator() { return this.#_isNavigator_accessor_storage; }
        set _isNavigator(value) { this.#_isNavigator_accessor_storage = value; }
        get titleElement() {
            return (this.closest('affine-edgeless-root')?.querySelector?.(`[data-frame-title-id="${this.model.id}"]`) ?? null);
        }
        get _surface() {
            return this.closest('affine-edgeless-root').surface;
        }
        get _edgeless() {
            return this.closest('affine-edgeless-root');
        }
        connectedCallback() {
            super.connectedCallback();
            let lastZoom = 0;
            this._disposables.add(this._edgeless.service.viewport.viewportUpdated.on(({ zoom }) => {
                if (zoom !== lastZoom) {
                    lastZoom = zoom;
                    this.requestUpdate();
                }
            }));
            this._disposables.add(this.doc.slots.blockUpdated.on(({ type, id }) => {
                if (id === this.model.id && type === 'update') {
                    this.requestUpdate();
                }
            }));
        }
        createRenderRoot() {
            return this;
        }
        firstUpdated() {
            this._surface.edgeless.slots.edgelessToolUpdated.on(tool => {
                this._isNavigator = tool.type === 'frameNavigator';
            });
        }
        renderBlock() {
            const { model, _isNavigator } = this;
            const bound = Bound.deserialize(model.xywh);
            return html `
      <div
        class="affine-frame-container"
        style=${styleMap({
                width: bound.w + 'px',
                height: bound.h + 'px',
                backgroundColor: isCssVariable(model.background)
                    ? `var(${model.background})`
                    : '',
                borderRadius: '8px',
                border: _isNavigator ? 'none' : `2px solid var(--affine-black-30)`,
            })}
      ></div>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, __isNavigator_extraInitializers);
        }
    };
    return FrameBlockComponent = _classThis;
})();
export { FrameBlockComponent };
//# sourceMappingURL=frame-block.js.map