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
import { baseTheme } from '@toeverything/theme';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { stopPropagation } from '../../utils/event.js';
let MorePopupMenu = (() => {
    let _classDecorators = [customElement('more-popup-menu')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _items_decorators;
    let _items_initializers = [];
    let _items_extraInitializers = [];
    var MorePopupMenu = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _items_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _items_decorators, { kind: "accessor", name: "items", static: false, private: false, access: { has: obj => "items" in obj, get: obj => obj.items, set: (obj, value) => { obj.items = value; } }, metadata: _metadata }, _items_initializers, _items_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            MorePopupMenu = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .more-popup-menu {
      box-sizing: border-box;
    }

    .more-popup-menu-container {
      border-radius: 8px;
      padding: 8px;
      background: var(--affine-background-overlay-panel-color);
      box-shadow: var(--affine-shadow-1);
      font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
    }

    .more-popup-menu-container > .menu-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      font-size: var(--affine-font-sm);
      font-weight: 400;
      line-height: 22px;
      color: var(--affine-text-primary-color);
      border-radius: 4px;
    }

    .more-popup-menu-container > .menu-item.delete:hover icon-button {
      background: var(--affine-background-error-color);
      color: var(--affine-error-color);
    }
    .more-popup-menu-container > .menu-item.delete:hover icon-button > svg {
      color: var(--affine-error-color);
    }

    .more-popup-menu-container > .menu-item svg {
      margin: 0 8px;
      scale: 0.88;
    }

    .more-popup-menu-container > .divider {
      width: 100%;
      height: 0.5px;
      margin: 8px 0;
      background-color: var(--affine-border-color);
    }
  `; }
        #items_accessor_storage = __runInitializers(this, _items_initializers, void 0);
        get items() { return this.#items_accessor_storage; }
        set items(value) { this.#items_accessor_storage = value; }
        render() {
            return html `
      <div class="more-popup-menu">
        <div class="more-popup-menu-container" @pointerdown=${stopPropagation}>
          ${this.items}
        </div>
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _items_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return MorePopupMenu = _classThis;
})();
export { MorePopupMenu };
//# sourceMappingURL=more-popup-menu.js.map