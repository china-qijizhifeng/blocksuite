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
import './zoom-toolbar.js';
import './zoom-bar-toggle-button.js';
import { WidgetElement } from '@blocksuite/block-std';
import { css, html, nothing } from 'lit';
import { customElement, state } from 'lit/decorators.js';
export const AFFINE_EDGELESS_ZOOM_TOOLBAR_WIDGET = 'affine-edgeless-zoom-toolbar-widget';
let AffineEdgelessZoomToolbarWidget = (() => {
    let _classDecorators = [customElement(AFFINE_EDGELESS_ZOOM_TOOLBAR_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetElement;
    let __hide_decorators;
    let __hide_initializers = [];
    let __hide_extraInitializers = [];
    var AffineEdgelessZoomToolbarWidget = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __hide_decorators = [state()];
            __esDecorate(this, null, __hide_decorators, { kind: "accessor", name: "_hide", static: false, private: false, access: { has: obj => "_hide" in obj, get: obj => obj._hide, set: (obj, value) => { obj._hide = value; } }, metadata: _metadata }, __hide_initializers, __hide_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineEdgelessZoomToolbarWidget = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      position: absolute;
      bottom: 20px;
      left: 12px;
      z-index: var(--affine-z-index-popover);
      display: flex;
      justify-content: center;
      -webkit-user-select: none;
      user-select: none;
    }

    @container viewport (width <= 1200px) {
      edgeless-zoom-toolbar {
        display: none;
      }
    }

    @container viewport (width > 1200px) {
      zoom-bar-toggle-button {
        display: none;
      }
    }
  `; }
        #_hide_accessor_storage = __runInitializers(this, __hide_initializers, false);
        get _hide() { return this.#_hide_accessor_storage; }
        set _hide(value) { this.#_hide_accessor_storage = value; }
        get edgeless() {
            return this.blockElement;
        }
        firstUpdated() {
            const { disposables, edgeless: { slots }, } = this;
            disposables.add(slots.edgelessToolUpdated.on(tool => {
                if (tool.type !== 'frameNavigator') {
                    this._hide = false;
                }
                this.requestUpdate();
            }));
            disposables.add(slots.navigatorSettingUpdated.on(({ hideToolbar }) => {
                if (hideToolbar !== undefined) {
                    this._hide = hideToolbar;
                }
            }));
        }
        render() {
            if (this._hide || !this.edgeless) {
                return nothing;
            }
            return html `
      <edgeless-zoom-toolbar .edgeless=${this.edgeless}></edgeless-zoom-toolbar>
      <zoom-bar-toggle-button
        .edgeless=${this.edgeless}
      ></zoom-bar-toggle-button>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, __hide_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineEdgelessZoomToolbarWidget = _classThis;
})();
export { AffineEdgelessZoomToolbarWidget };
//# sourceMappingURL=index.js.map