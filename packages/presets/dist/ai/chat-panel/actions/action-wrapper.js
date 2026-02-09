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
import { customElement, property, state } from 'lit/decorators.js';
import { ActionIcon, AIChangeToneIcon, AIDoneIcon, AIExpandMindMapIcon, AIExplainIcon, AIExplainSelectionIcon, AIFindActionsIcon, AIImageIcon, AIImproveWritingIcon, AIMakeLongerIcon, AIMakeRealIcon, AIMakeShorterIcon, AIMindMapIcon, AIPenIcon, AIPresentationIcon, ArrowDownIcon, ArrowUpIcon, } from '../../_common/icons.js';
import { createTextRenderer } from '../../messages/text.js';
import { renderImages } from '../components/images.js';
import { HISTORY_IMAGE_ACTIONS } from '../const.js';
const icons = {
    'Fix spelling for it': AIDoneIcon,
    'Improve grammar for it': AIDoneIcon,
    'Explain this code': AIExplainIcon,
    'Check code error': AIExplainIcon,
    'Explain this': AIExplainSelectionIcon,
    Translate: ActionIcon,
    'Change tone': AIChangeToneIcon,
    'Improve writing for it': AIImproveWritingIcon,
    'Make it longer': AIMakeLongerIcon,
    'Make it shorter': AIMakeShorterIcon,
    'Continue writing': AIPenIcon,
    'Make it real': AIMakeRealIcon,
    'Find action items from it': AIFindActionsIcon,
    Summary: AIPenIcon,
    'Create headings': AIPenIcon,
    'Write outline': AIPenIcon,
    image: AIImageIcon,
    'Brainstorm mindmap': AIMindMapIcon,
    'Expand mind map': AIExpandMindMapIcon,
    'Create a presentation': AIPresentationIcon,
    'Write a poem about this': AIPenIcon,
    'Write a blog post about this': AIPenIcon,
    'AI image filter clay style': AIImageIcon,
    'AI image filter sketch style': AIImageIcon,
    'AI image filter anime style': AIImageIcon,
    'AI image filter pixel style': AIImageIcon,
    Clearer: AIImageIcon,
    'Remove background': AIImageIcon,
    'Convert to sticker': AIImageIcon,
};
let ActionWrapper = (() => {
    let _classDecorators = [customElement('action-wrapper')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _promptShow_decorators;
    let _promptShow_initializers = [];
    let _promptShow_extraInitializers = [];
    let _item_decorators;
    let _item_initializers = [];
    let _item_extraInitializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    var ActionWrapper = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _promptShow_decorators = [state()];
            _item_decorators = [property({ attribute: false })];
            _host_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _promptShow_decorators, { kind: "accessor", name: "promptShow", static: false, private: false, access: { has: obj => "promptShow" in obj, get: obj => obj.promptShow, set: (obj, value) => { obj.promptShow = value; } }, metadata: _metadata }, _promptShow_initializers, _promptShow_extraInitializers);
            __esDecorate(this, null, _item_decorators, { kind: "accessor", name: "item", static: false, private: false, access: { has: obj => "item" in obj, get: obj => obj.item, set: (obj, value) => { obj.item = value; } }, metadata: _metadata }, _item_initializers, _item_extraInitializers);
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ActionWrapper = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .action-name {
      display: flex;
      align-items: center;
      gap: 8px;
      height: 22px;
      margin-bottom: 12px;

      svg {
        color: var(--affine-primary-color);
      }

      div:last-child {
        cursor: pointer;
        display: flex;
        align-items: center;
        flex: 1;

        div:last-child svg {
          margin-left: auto;
        }
      }
    }

    .answer-prompt {
      padding: 8px;
      background-color: var(--affine-background-secondary-color);
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 14px;
      font-weight: 400;
      color: var(--affine-text-primary-color);

      .subtitle {
        font-size: 12px;
        font-weight: 500;
        color: var(--affine-text-secondary-color);
        height: 20px;
        line-height: 20px;
      }

      .prompt {
        margin-top: 12px;
      }
    }
  `; }
        #promptShow_accessor_storage = __runInitializers(this, _promptShow_initializers, false);
        get promptShow() { return this.#promptShow_accessor_storage; }
        set promptShow(value) { this.#promptShow_accessor_storage = value; }
        #item_accessor_storage = (__runInitializers(this, _promptShow_extraInitializers), __runInitializers(this, _item_initializers, void 0));
        get item() { return this.#item_accessor_storage; }
        set item(value) { this.#item_accessor_storage = value; }
        #host_accessor_storage = (__runInitializers(this, _item_extraInitializers), __runInitializers(this, _host_initializers, void 0));
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        render() {
            const { item } = this;
            const originalText = item.messages[1].content;
            const answer = item.messages[2]?.content;
            const images = item.messages[1].attachments;
            return html `<style></style>
      <slot></slot>
      <div
        class="action-name"
        @click=${() => (this.promptShow = !this.promptShow)}
      >
        ${icons[item.action] ? icons[item.action] : ActionIcon}
        <div>
          <div>${item.action}</div>
          <div>${this.promptShow ? ArrowDownIcon : ArrowUpIcon}</div>
        </div>
      </div>
      ${this.promptShow
                ? html `
            <div class="answer-prompt">
              <div class="subtitle">Answer</div>
              ${HISTORY_IMAGE_ACTIONS.includes(item.action)
                    ? images && renderImages(images)
                    : nothing}
              ${answer
                    ? createTextRenderer(this.host, { customHeading: true })(answer)
                    : nothing}
              ${originalText
                    ? html `<div class="subtitle prompt">Prompt</div>
                    ${createTextRenderer(this.host, { customHeading: true })(item.messages[0].content + originalText)}`
                    : nothing}
            </div>
          `
                : nothing} `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _host_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ActionWrapper = _classThis;
})();
export { ActionWrapper };
//# sourceMappingURL=action-wrapper.js.map