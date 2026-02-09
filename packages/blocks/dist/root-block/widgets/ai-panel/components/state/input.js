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
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { AIStarIcon } from '../../../../../_common/icons/ai.js';
import { ArrowUpBigIcon } from '../../../../../_common/icons/text.js';
import { stopPropagation } from '../../../../../_common/utils/event.js';
let AIPanelInput = (() => {
    let _classDecorators = [customElement('ai-panel-input')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __arrow_decorators;
    let __arrow_initializers = [];
    let __arrow_extraInitializers = [];
    let __textarea_decorators;
    let __textarea_initializers = [];
    let __textarea_extraInitializers = [];
    let __hasContent_decorators;
    let __hasContent_initializers = [];
    let __hasContent_extraInitializers = [];
    let _onFinish_decorators;
    let _onFinish_initializers = [];
    let _onFinish_extraInitializers = [];
    let _onInput_decorators;
    let _onInput_initializers = [];
    let _onInput_extraInitializers = [];
    var AIPanelInput = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_arrow_accessor_storage = __runInitializers(this, __arrow_initializers, void 0);
            this.#_textarea_accessor_storage = (__runInitializers(this, __arrow_extraInitializers), __runInitializers(this, __textarea_initializers, void 0));
            this.#_hasContent_accessor_storage = (__runInitializers(this, __textarea_extraInitializers), __runInitializers(this, __hasContent_initializers, false));
            this.#onFinish_accessor_storage = (__runInitializers(this, __hasContent_extraInitializers), __runInitializers(this, _onFinish_initializers, undefined));
            this.#onInput_accessor_storage = (__runInitializers(this, _onFinish_extraInitializers), __runInitializers(this, _onInput_initializers, undefined));
            this._sendToAI = (__runInitializers(this, _onInput_extraInitializers), () => {
                const value = this._textarea.value.trim();
                if (value.length === 0)
                    return;
                this.onFinish?.(value);
                this.remove();
            });
            this._onKeyDown = (e) => {
                if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
                    e.preventDefault();
                    this._sendToAI();
                }
            };
            this._onInput = () => {
                this._textarea.style.height = 'auto';
                this._textarea.style.height = this._textarea.scrollHeight + 'px';
                this.onInput?.(this._textarea.value);
                const value = this._textarea.value.trim();
                if (value.length > 0) {
                    this._arrow.dataset.active = '';
                    this._hasContent = true;
                }
                else {
                    delete this._arrow.dataset.active;
                    this._hasContent = false;
                }
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __arrow_decorators = [query('.arrow')];
            __textarea_decorators = [query('textarea')];
            __hasContent_decorators = [state()];
            _onFinish_decorators = [property({ attribute: false })];
            _onInput_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __arrow_decorators, { kind: "accessor", name: "_arrow", static: false, private: false, access: { has: obj => "_arrow" in obj, get: obj => obj._arrow, set: (obj, value) => { obj._arrow = value; } }, metadata: _metadata }, __arrow_initializers, __arrow_extraInitializers);
            __esDecorate(this, null, __textarea_decorators, { kind: "accessor", name: "_textarea", static: false, private: false, access: { has: obj => "_textarea" in obj, get: obj => obj._textarea, set: (obj, value) => { obj._textarea = value; } }, metadata: _metadata }, __textarea_initializers, __textarea_extraInitializers);
            __esDecorate(this, null, __hasContent_decorators, { kind: "accessor", name: "_hasContent", static: false, private: false, access: { has: obj => "_hasContent" in obj, get: obj => obj._hasContent, set: (obj, value) => { obj._hasContent = value; } }, metadata: _metadata }, __hasContent_initializers, __hasContent_extraInitializers);
            __esDecorate(this, null, _onFinish_decorators, { kind: "accessor", name: "onFinish", static: false, private: false, access: { has: obj => "onFinish" in obj, get: obj => obj.onFinish, set: (obj, value) => { obj.onFinish = value; } }, metadata: _metadata }, _onFinish_initializers, _onFinish_extraInitializers);
            __esDecorate(this, null, _onInput_decorators, { kind: "accessor", name: "onInput", static: false, private: false, access: { has: obj => "onInput" in obj, get: obj => obj.onInput, set: (obj, value) => { obj.onInput = value; } }, metadata: _metadata }, _onInput_initializers, _onInput_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AIPanelInput = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      width: 100%;
      padding: 0 12px;
      box-sizing: border-box;
    }

    .root {
      display: flex;
      align-items: flex-start;
      gap: 8px;
      background: var(--affine-background-overlay-panel-color);
    }

    .icon {
      display: flex;
      align-items: center;
    }

    .textarea-container {
      display: flex;
      align-items: flex-end;
      gap: 8px;
      flex: 1 0 0;

      textarea {
        flex: 1 0 0;
        border: none;
        outline: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
        box-shadow: none;
        background-color: transparent;
        resize: none;
        overflow: hidden;
        padding: 0px;

        color: var(--affine-text-primary-color);

        /* light/sm */
        font-family: var(--affine-font-family);
        font-size: var(--affine-font-sm);
        font-style: normal;
        font-weight: 400;
        line-height: 22px; /* 157.143% */
      }

      textarea::placeholder {
        color: var(--affine-placeholder-color);
      }

      textarea::-moz-placeholder {
        color: var(--affine-placeholder-color);
      }
    }

    .arrow {
      display: flex;
      align-items: center;
      padding: 2px;
      gap: 10px;
      border-radius: 4px;
      background: var(--affine-black-10, rgba(0, 0, 0, 0.1));

      svg {
        width: 16px;
        height: 16px;
        color: var(--affine-pure-white, #fff);
      }
    }
    .arrow[data-active] {
      background: var(--affine-brand-color, #1e96eb);
    }
    .arrow[data-active]:hover {
      cursor: pointer;
    }
  `; }
        #_arrow_accessor_storage;
        get _arrow() { return this.#_arrow_accessor_storage; }
        set _arrow(value) { this.#_arrow_accessor_storage = value; }
        #_textarea_accessor_storage;
        get _textarea() { return this.#_textarea_accessor_storage; }
        set _textarea(value) { this.#_textarea_accessor_storage = value; }
        #_hasContent_accessor_storage;
        get _hasContent() { return this.#_hasContent_accessor_storage; }
        set _hasContent(value) { this.#_hasContent_accessor_storage = value; }
        #onFinish_accessor_storage;
        get onFinish() { return this.#onFinish_accessor_storage; }
        set onFinish(value) { this.#onFinish_accessor_storage = value; }
        #onInput_accessor_storage;
        get onInput() { return this.#onInput_accessor_storage; }
        set onInput(value) { this.#onInput_accessor_storage = value; }
        updated(_changedProperties) {
            const result = super.updated(_changedProperties);
            this._textarea.style.height = this._textarea.scrollHeight + 'px';
            return result;
        }
        render() {
            this.updateComplete
                .then(() => {
                requestAnimationFrame(() => {
                    this._textarea.focus();
                });
            })
                .catch(console.error);
            return html `<div class="root">
      <div class="icon">${AIStarIcon}</div>
      <div class="textarea-container">
        <textarea
          placeholder="Ask AI to edit or generate..."
          rows="1"
          @keydown=${this._onKeyDown}
          @input=${this._onInput}
          @pointerdown=${stopPropagation}
          @click=${stopPropagation}
          @dblclick=${stopPropagation}
          @cut=${stopPropagation}
          @copy=${stopPropagation}
          @paste=${stopPropagation}
          @keyup=${stopPropagation}
        ></textarea>
        <div
          class="arrow"
          @click=${this._sendToAI}
          @pointerdown=${stopPropagation}
        >
          ${ArrowUpBigIcon}
          ${this._hasContent
                ? html `<affine-tooltip .offset=${12}>Send to AI</affine-tooltip>`
                : nothing}
        </div>
      </div>
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AIPanelInput = _classThis;
})();
export { AIPanelInput };
//# sourceMappingURL=input.js.map