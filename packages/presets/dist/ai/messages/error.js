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
import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ErrorTipIcon } from '../_common/icons.js';
import { AIProvider } from '../provider.js';
let AIErrorWrapper = (() => {
    let _classDecorators = [customElement('ai-error-wrapper')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _text_decorators;
    let _text_initializers = [];
    let _text_extraInitializers = [];
    var AIErrorWrapper = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _text_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _text_decorators, { kind: "accessor", name: "text", static: false, private: false, access: { has: obj => "text" in obj, get: obj => obj.text, set: (obj, value) => { obj.text = value; } }, metadata: _metadata }, _text_initializers, _text_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AIErrorWrapper = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        #text_accessor_storage = __runInitializers(this, _text_initializers, void 0);
        get text() { return this.#text_accessor_storage; }
        set text(value) { this.#text_accessor_storage = value; }
        render() {
            return html ` <style>
        .answer-tip {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          gap: 4px;
          align-self: stretch;
          border-radius: 4px;
          padding: 8px;
          background-color: var(--affine-background-error-color);

          .bottom {
            align-items: flex-start;
            display: flex;
            gap: 8px;
            align-self: stretch;
            color: var(--affine-error-color, #eb4335);
            font-feature-settings:
              'clig' off,
              'liga' off;
            /* light/sm */
            font-size: var(--affine-font-sm);
            font-style: normal;
            font-weight: 400;
            line-height: 22px; /* 157.143% */
            margin-bottom: 4px;

            a {
              color: inherit;
            }

            div svg {
              position: relative;
              top: 3px;
            }
          }
        }
      </style>
      <div class="answer-tip">
        <div class="bottom">
          <div>${ErrorTipIcon}</div>
          <div>${this.text}</div>
        </div>
        <slot></slot>
      </div>`;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _text_extraInitializers);
        }
    };
    return AIErrorWrapper = _classThis;
})();
export const PaymentRequiredErrorRenderer = (host) => html `
  <style>
    .upgrade {
      cursor: pointer;
      display: flex;
      padding: 4px 12px;
      justify-content: center;
      align-items: center;
      gap: 4px;
      border-radius: 8px;
      margin-left: auto;
      border: 1px solid var(--affine-border-color, #e3e2e4);
      background: var(--affine-primary-color);
      .content {
        display: flex;
        padding: 0px 4px;
        justify-content: center;
        align-items: center;
        color: var(--affine-pure-white);
        /* light/xsMedium */
        font-size: var(--affine-font-xs);
        font-style: normal;
        font-weight: 500;
        line-height: 20px; /* 166.667% */
      }
    }
  </style>
  <ai-error-wrapper
    .text=${html `You've reached the current usage cap for AFFiNE AI. You can
    subscribe to AFFiNE AI to continue the AI experience!`}
  >
    <div
      @click=${() => AIProvider.slots.requestUpgradePlan.emit({ host: host })}
      class="upgrade"
    >
      <div class="content">Upgrade</div>
    </div></ai-error-wrapper
  >
`;
export const GeneralErrorRenderer = (text = html `An error occurred, If this issue persists
    please let us know.
    <a href="mailto:support@toeverything.info"> support@toeverything.info </a>`, template = html `${nothing}`) => html ` <ai-error-wrapper .text=${text}>${template}</ai-error-wrapper>`;
//# sourceMappingURL=error.js.map