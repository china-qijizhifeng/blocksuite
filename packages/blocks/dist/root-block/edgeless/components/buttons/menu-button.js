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
import './tool-icon-button.js';
import { WithDisposable } from '@blocksuite/block-std';
import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { createButtonPopper } from '../../../../_common/utils/button-popper.js';
let EdgelessMenuButton = (() => {
    let _classDecorators = [customElement('edgeless-menu-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __trigger_decorators;
    let __trigger_initializers = [];
    let __trigger_extraInitializers = [];
    let __content_decorators;
    let __content_initializers = [];
    let __content_extraInitializers = [];
    let _button_decorators;
    let _button_initializers = [];
    let _button_extraInitializers = [];
    let _contentPadding_decorators;
    let _contentPadding_initializers = [];
    let _contentPadding_extraInitializers = [];
    var EdgelessMenuButton = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __trigger_decorators = [query('edgeless-tool-icon-button')];
            __content_decorators = [query('edgeless-menu-content')];
            _button_decorators = [property({ attribute: false })];
            _contentPadding_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __trigger_decorators, { kind: "accessor", name: "_trigger", static: false, private: false, access: { has: obj => "_trigger" in obj, get: obj => obj._trigger, set: (obj, value) => { obj._trigger = value; } }, metadata: _metadata }, __trigger_initializers, __trigger_extraInitializers);
            __esDecorate(this, null, __content_decorators, { kind: "accessor", name: "_content", static: false, private: false, access: { has: obj => "_content" in obj, get: obj => obj._content, set: (obj, value) => { obj._content = value; } }, metadata: _metadata }, __content_initializers, __content_extraInitializers);
            __esDecorate(this, null, _button_decorators, { kind: "accessor", name: "button", static: false, private: false, access: { has: obj => "button" in obj, get: obj => obj.button, set: (obj, value) => { obj.button = value; } }, metadata: _metadata }, _button_initializers, _button_extraInitializers);
            __esDecorate(this, null, _contentPadding_decorators, { kind: "accessor", name: "contentPadding", static: false, private: false, access: { has: obj => "contentPadding" in obj, get: obj => obj.contentPadding, set: (obj, value) => { obj.contentPadding = value; } }, metadata: _metadata }, _contentPadding_initializers, _contentPadding_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessMenuButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }

    ::slotted([slot]) {
      display: flex;
    }

    ::slotted([slot][data-orientation='horizontal']) {
      align-items: center;
      align-self: stretch;
      gap: 8px;
    }
  `; }
        #_trigger_accessor_storage;
        get _trigger() { return this.#_trigger_accessor_storage; }
        set _trigger(value) { this.#_trigger_accessor_storage = value; }
        #_content_accessor_storage;
        get _content() { return this.#_content_accessor_storage; }
        set _content(value) { this.#_content_accessor_storage = value; }
        #button_accessor_storage;
        get button() { return this.#button_accessor_storage; }
        set button(value) { this.#button_accessor_storage = value; }
        #contentPadding_accessor_storage;
        get contentPadding() { return this.#contentPadding_accessor_storage; }
        set contentPadding(value) { this.#contentPadding_accessor_storage = value; }
        close() {
            this._popper?.hide();
        }
        firstUpdated() {
            this._popper = createButtonPopper(this._trigger, this._content, ({ display }) => {
                this._trigger.showTooltip = display === 'hidden';
            }, 12);
            this._disposables.addFromEvent(this, 'keydown', (e) => {
                e.stopPropagation();
                if (e.key === 'Escape') {
                    this._popper.hide();
                }
            });
            this._disposables.addFromEvent(this._trigger, 'click', (_) => {
                this._popper.toggle();
                if (this._popper.state === 'show') {
                    this._content.focus({ preventScroll: true });
                }
            });
            this._disposables.add(this._popper);
        }
        connectedCallback() {
            super.connectedCallback();
            this.tabIndex = 0;
            if (this.contentPadding) {
                this.style.setProperty('--content-padding', this.contentPadding);
            }
        }
        render() {
            return html `${this.button}
      <edgeless-menu-content role="menu" tabindex="-1">
        <slot></slot>
      </edgeless-menu-content>`;
        }
        constructor() {
            super(...arguments);
            this.#_trigger_accessor_storage = __runInitializers(this, __trigger_initializers, void 0);
            this.#_content_accessor_storage = (__runInitializers(this, __trigger_extraInitializers), __runInitializers(this, __content_initializers, void 0));
            this._popper = __runInitializers(this, __content_extraInitializers);
            this.#button_accessor_storage = __runInitializers(this, _button_initializers, void 0);
            this.#contentPadding_accessor_storage = (__runInitializers(this, _button_extraInitializers), __runInitializers(this, _contentPadding_initializers, undefined));
            __runInitializers(this, _contentPadding_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessMenuButton = _classThis;
})();
export { EdgelessMenuButton };
let EdgelessMenuContent = (() => {
    let _classDecorators = [customElement('edgeless-menu-content')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    var EdgelessMenuContent = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessMenuContent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: none;
      align-items: center;
      justify-content: center;
      gap: 8px;
      padding: var(--content-padding, 0 6px);

      border: 0.5px solid var(--affine-border-color);
      background: var(--affine-background-overlay-panel-color);
      box-shadow: var(--affine-shadow-4);
      border-radius: 4px;
      min-height: 36px;
      outline: none;
    }

    :host([data-show]) {
      display: flex;
    }
  `; }
        render() {
            return html `<slot></slot>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessMenuContent = _classThis;
})();
export { EdgelessMenuContent };
let EdgelessMenuDivider = (() => {
    let _classDecorators = [customElement('edgeless-menu-divider')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    var EdgelessMenuDivider = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessMenuDivider = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      align-self: stretch;

      width: 4px;
    }

    :host::after {
      content: '';
      display: flex;
      width: 0.5px;
      height: 100%;
      background-color: var(--affine-border-color);
    }

    :host([data-orientation='horizontal']) {
      height: var(--height, 4px);
      width: unset;
    }

    :host([data-orientation='horizontal'])::after {
      height: 0.5px;
      width: 100%;
    }
  `; }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessMenuDivider = _classThis;
})();
export { EdgelessMenuDivider };
export function renderMenuDivider() {
    return html `<edgeless-menu-divider></edgeless-menu-divider>`;
}
//# sourceMappingURL=menu-button.js.map