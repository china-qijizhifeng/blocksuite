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
import '../messages/slides-renderer.js';
import './ai-loading.js';
import '../messages/text.js';
import './actions/text.js';
import './actions/action-wrapper.js';
import './actions/make-real.js';
import './actions/slides.js';
import './actions/mindmap.js';
import './actions/chat-text.js';
import './actions/copy-more.js';
import './actions/image-to-text.js';
import './actions/image.js';
import './chat-cards.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { isInsidePageEditor, PaymentRequiredError, UnauthorizedError, } from '@blocksuite/blocks';
import { css, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { AffineAvatarIcon, AffineIcon, DownArrowIcon, } from '../_common/icons.js';
import { GeneralErrorRenderer, PaymentRequiredErrorRenderer, } from '../messages/error.js';
import { AIProvider } from '../provider.js';
import { insertBelow } from '../utils/editor-actions.js';
import { EdgelessEditorActions, PageEditorActions, } from './actions/actions-handle.js';
import { HISTORY_IMAGE_ACTIONS } from './const.js';
let ChatPanelMessages = (() => {
    let _classDecorators = [customElement('chat-panel-messages')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _showDownIndicator_decorators;
    let _showDownIndicator_initializers = [];
    let _showDownIndicator_extraInitializers = [];
    let _avatarUrl_decorators;
    let _avatarUrl_initializers = [];
    let _avatarUrl_extraInitializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _isLoading_decorators;
    let _isLoading_initializers = [];
    let _isLoading_extraInitializers = [];
    let _chatContextValue_decorators;
    let _chatContextValue_initializers = [];
    let _chatContextValue_extraInitializers = [];
    let _updateContext_decorators;
    let _updateContext_initializers = [];
    let _updateContext_extraInitializers = [];
    let _messagesContainer_decorators;
    let _messagesContainer_initializers = [];
    let _messagesContainer_extraInitializers = [];
    var ChatPanelMessages = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _showDownIndicator_decorators = [state()];
            _avatarUrl_decorators = [state()];
            _host_decorators = [property({ attribute: false })];
            _isLoading_decorators = [property({ attribute: false })];
            _chatContextValue_decorators = [property({ attribute: false })];
            _updateContext_decorators = [property({ attribute: false })];
            _messagesContainer_decorators = [query('.chat-panel-messages')];
            __esDecorate(this, null, _showDownIndicator_decorators, { kind: "accessor", name: "showDownIndicator", static: false, private: false, access: { has: obj => "showDownIndicator" in obj, get: obj => obj.showDownIndicator, set: (obj, value) => { obj.showDownIndicator = value; } }, metadata: _metadata }, _showDownIndicator_initializers, _showDownIndicator_extraInitializers);
            __esDecorate(this, null, _avatarUrl_decorators, { kind: "accessor", name: "avatarUrl", static: false, private: false, access: { has: obj => "avatarUrl" in obj, get: obj => obj.avatarUrl, set: (obj, value) => { obj.avatarUrl = value; } }, metadata: _metadata }, _avatarUrl_initializers, _avatarUrl_extraInitializers);
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _isLoading_decorators, { kind: "accessor", name: "isLoading", static: false, private: false, access: { has: obj => "isLoading" in obj, get: obj => obj.isLoading, set: (obj, value) => { obj.isLoading = value; } }, metadata: _metadata }, _isLoading_initializers, _isLoading_extraInitializers);
            __esDecorate(this, null, _chatContextValue_decorators, { kind: "accessor", name: "chatContextValue", static: false, private: false, access: { has: obj => "chatContextValue" in obj, get: obj => obj.chatContextValue, set: (obj, value) => { obj.chatContextValue = value; } }, metadata: _metadata }, _chatContextValue_initializers, _chatContextValue_extraInitializers);
            __esDecorate(this, null, _updateContext_decorators, { kind: "accessor", name: "updateContext", static: false, private: false, access: { has: obj => "updateContext" in obj, get: obj => obj.updateContext, set: (obj, value) => { obj.updateContext = value; } }, metadata: _metadata }, _updateContext_initializers, _updateContext_extraInitializers);
            __esDecorate(this, null, _messagesContainer_decorators, { kind: "accessor", name: "messagesContainer", static: false, private: false, access: { has: obj => "messagesContainer" in obj, get: obj => obj.messagesContainer, set: (obj, value) => { obj.messagesContainer = value; } }, metadata: _metadata }, _messagesContainer_initializers, _messagesContainer_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ChatPanelMessages = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get _currentTextSelection() {
            return this._selectionValue.find(v => v.type === 'text');
        }
        get _currentBlockSelections() {
            return this._selectionValue.filter(v => v.type === 'block');
        }
        get _currentImageSelections() {
            return this._selectionValue.filter(v => v.type === 'image');
        }
        static { this.styles = css `
    chat-panel-messages {
      position: relative;
    }

    .chat-panel-messages {
      display: flex;
      flex-direction: column;
      gap: 24px;
      height: 100%;
      position: relative;
      overflow-y: auto;

      chat-cards {
        position: absolute;
        bottom: 0;
        width: 100%;
      }
    }

    .chat-panel-messages-placeholder {
      width: 100%;
      position: absolute;
      z-index: 1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .item-wrapper {
      margin-left: 32px;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 4px;
      color: var(--affine-text-primary-color);
      font-size: 14px;
      font-weight: 500;
      user-select: none;
    }

    .avatar-container {
      width: 24px;
      height: 24px;
    }

    .avatar {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: var(--affine-primary-color);
    }

    .avatar-container img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }

    .down-indicator {
      position: absolute;
      left: 50%;
      transform: translate(-50%, 0);
      bottom: 24px;
      z-index: 1;
      border-radius: 50%;
      width: 32px;
      height: 32px;
      border: 0.5px solid var(--affine-border-color);
      background-color: var(--affine-background-primary-color);
      box-shadow: var(--affine-shadow-2);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  `; }
        #showDownIndicator_accessor_storage;
        get showDownIndicator() { return this.#showDownIndicator_accessor_storage; }
        set showDownIndicator(value) { this.#showDownIndicator_accessor_storage = value; }
        #avatarUrl_accessor_storage;
        get avatarUrl() { return this.#avatarUrl_accessor_storage; }
        set avatarUrl(value) { this.#avatarUrl_accessor_storage = value; }
        #host_accessor_storage;
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #isLoading_accessor_storage;
        get isLoading() { return this.#isLoading_accessor_storage; }
        set isLoading(value) { this.#isLoading_accessor_storage = value; }
        #chatContextValue_accessor_storage;
        get chatContextValue() { return this.#chatContextValue_accessor_storage; }
        set chatContextValue(value) { this.#chatContextValue_accessor_storage = value; }
        #updateContext_accessor_storage;
        get updateContext() { return this.#updateContext_accessor_storage; }
        set updateContext(value) { this.#updateContext_accessor_storage = value; }
        #messagesContainer_accessor_storage;
        get messagesContainer() { return this.#messagesContainer_accessor_storage; }
        set messagesContainer(value) { this.#messagesContainer_accessor_storage = value; }
        updated(_changedProperties) {
            if (_changedProperties.has('host')) {
                const { disposables } = this;
                disposables.add(this.host.selection.slots.changed.on(() => {
                    this._selectionValue = this.host.selection.value;
                    this.requestUpdate();
                }));
                const { docModeService } = this.host.spec.getService('affine:page');
                disposables.add(docModeService.onModeChange(() => this.requestUpdate()));
            }
        }
        render() {
            const { items } = this.chatContextValue;
            const { isLoading } = this;
            const filteredItems = items.filter(item => {
                return ('role' in item ||
                    item.messages?.length === 3 ||
                    (HISTORY_IMAGE_ACTIONS.includes(item.action) &&
                        item.messages?.length === 2));
            });
            return html `<style>
        .chat-panel-messages-placeholder div {
          color: ${isLoading
                ? 'var(--affine-text-secondary-color)'
                : 'var(--affine-text-primary-color)'};
          font-size: ${isLoading ? 'var(--affine-font-sm)' : '18px'};
          font-weight: 600;
        }
      </style>

      <div
        class="chat-panel-messages"
        @scroll=${(evt) => {
                const element = evt.target;
                this.showDownIndicator =
                    element.scrollHeight - element.scrollTop - element.clientHeight >
                        200;
            }}
      >
        ${items.length === 0
                ? html `<div class="chat-panel-messages-placeholder">
                ${AffineIcon(isLoading
                    ? 'var(--affine-icon-secondary)'
                    : 'var(--affine-primary-color)')}
                <div>
                  ${this.isLoading
                    ? 'AFFiNE AI is loading history...'
                    : 'What can I help you with?'}
                </div>
              </div>
              <chat-cards
                .chatContextValue=${this.chatContextValue}
                .updateContext=${this.updateContext}
                .host=${this.host}
                .selectionValue=${this._selectionValue}
              ></chat-cards> `
                : repeat(filteredItems, (item, index) => {
                    const isLast = index === filteredItems.length - 1;
                    return html `<div class="message">
                ${this.renderAvatar(item)}
                <div class="item-wrapper">${this.renderItem(item, isLast)}</div>
              </div>`;
                })}
      </div>
      ${this.showDownIndicator
                ? html `<div class="down-indicator" @click=${() => this.scrollToDown()}>
            ${DownArrowIcon}
          </div>`
                : nothing} `;
        }
        async connectedCallback() {
            super.connectedCallback();
            const res = await AIProvider.userInfo;
            this.avatarUrl = res?.avatarUrl ?? '';
            this.disposables.add(AIProvider.slots.userInfo.on(userInfo => {
                const { status, error } = this.chatContextValue;
                this.avatarUrl = userInfo?.avatarUrl ?? '';
                if (status === 'error' &&
                    error instanceof UnauthorizedError &&
                    userInfo) {
                    this.updateContext({ status: 'idle', error: null });
                }
            }));
        }
        renderError() {
            const { error } = this.chatContextValue;
            if (error instanceof PaymentRequiredError) {
                return PaymentRequiredErrorRenderer(this.host);
            }
            else if (error instanceof UnauthorizedError) {
                return GeneralErrorRenderer(html `You need to login to AFFiNE Cloud to continue using AFFiNE AI.`, html `<div
          style=${styleMap({
                    padding: '4px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--affine-border-color)',
                    cursor: 'pointer',
                    backgroundColor: 'var(--affine-hover-color)',
                })}
          @click=${() => AIProvider.slots.requestLogin.emit({ host: this.host })}
        >
          Login
        </div>`);
            }
            else {
                return GeneralErrorRenderer();
            }
        }
        renderItem(item, isLast) {
            const { status, error } = this.chatContextValue;
            if (isLast && status === 'loading') {
                return this.renderLoading();
            }
            if (isLast &&
                status === 'error' &&
                (error instanceof PaymentRequiredError ||
                    error instanceof UnauthorizedError)) {
                return this.renderError();
            }
            if ('role' in item) {
                const state = isLast
                    ? status !== 'loading' && status !== 'transmitting'
                        ? 'finished'
                        : 'generating'
                    : 'finished';
                return html `<chat-text
          .host=${this.host}
          .attachments=${item.attachments}
          .text=${item.content}
          .state=${state}
        ></chat-text>
        ${isLast && status === 'error' ? this.renderError() : nothing}
        ${this.renderEditorActions(item, isLast)}`;
            }
            else {
                switch (item.action) {
                    case 'Create a presentation':
                        return html `<action-slides
            .host=${this.host}
            .item=${item}
          ></action-slides>`;
                    case 'Make it real':
                        return html `<action-make-real
            .host=${this.host}
            .item=${item}
          ></action-make-real>`;
                    case 'Brainstorm mindmap':
                        return html `<action-mindmap
            .host=${this.host}
            .item=${item}
          ></action-mindmap>`;
                    case 'Explain this image':
                    case 'Generate a caption':
                        return html `<action-image-to-text
            .host=${this.host}
            .item=${item}
          ></action-image-to-text>`;
                    default:
                        if (HISTORY_IMAGE_ACTIONS.includes(item.action)) {
                            return html `<action-image
              .host=${this.host}
              .item=${item}
            ></action-image>`;
                        }
                        return html `<action-text
            .item=${item}
            .host=${this.host}
            .isCode=${item.action === 'Explain this code' ||
                            item.action === 'Check code error'}
          ></action-text>`;
                }
            }
        }
        renderAvatar(item) {
            const isUser = 'role' in item && item.role === 'user';
            return html `<div class="user-info">
      ${isUser
                ? html `<div class="avatar-container">
            ${this.avatarUrl
                    ? html `<img .src=${this.avatarUrl} />`
                    : html `<div class="avatar"></div>`}
          </div>`
                : AffineAvatarIcon}
      ${isUser ? 'You' : 'AFFINE AI'}
    </div>`;
        }
        renderLoading() {
            return html ` <ai-loading></ai-loading>`;
        }
        scrollToDown() {
            this.messagesContainer.scrollTo(0, this.messagesContainer.scrollHeight);
        }
        renderEditorActions(item, isLast) {
            const { status } = this.chatContextValue;
            if (item.role !== 'assistant')
                return nothing;
            if (isLast &&
                status !== 'success' &&
                status !== 'idle' &&
                status !== 'error')
                return nothing;
            const { host } = this;
            const { content } = item;
            const actions = isInsidePageEditor(host)
                ? PageEditorActions
                : EdgelessEditorActions;
            return html `
      <style>
        .actions-container {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 8px;
          margin-top: 8px;
        }

        .actions-container > div {
          display: flex;
          gap: 8px;
        }

        .action {
          width: fit-content;
          height: 32px;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid var(--affine-border-color);
          background-color: var(--affine-white-10);
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 4px;
          font-size: 15px;
          font-weight: 500;
          color: var(--affine-text-primary-color);
          cursor: pointer;
          user-select: none;
        }

        .action svg {
          color: var(--affine-icon-color);
        }
      </style>
      <chat-copy-more
        .host=${host}
        .content=${content}
        .isLast=${isLast}
        .curTextSelection=${this._currentTextSelection}
        .curBlockSelections=${this._currentBlockSelections}
        .chatContextValue=${this.chatContextValue}
        .updateContext=${this.updateContext}
      ></chat-copy-more>
      ${isLast
                ? html `<div class="actions-container">
            ${repeat(actions.filter(action => {
                    if (!content)
                        return false;
                    if (action.title === 'Replace selection') {
                        if ((!this._currentTextSelection ||
                            this._currentTextSelection.from.length === 0) &&
                            this._currentBlockSelections?.length === 0) {
                            return false;
                        }
                    }
                    return true;
                }), action => action.title, action => {
                    return html `<div class="action">
                  ${action.icon}
                  <div
                    @click=${async () => {
                        if (action.title === 'Insert below') {
                            if (this._selectionValue.length === 1 &&
                                this._selectionValue[0].type === 'database') {
                                const element = this.host.view.getBlock(this._selectionValue[0].blockId);
                                if (!element)
                                    return;
                                await insertBelow(host, content, element);
                                return;
                            }
                        }
                        await action.handler(host, content, this._currentTextSelection, this._currentBlockSelections, this._currentImageSelections);
                    }}
                  >
                    ${action.title}
                  </div>
                </div>`;
                })}
          </div>`
                : nothing}
    `;
        }
        constructor() {
            super(...arguments);
            this._selectionValue = [];
            this.#showDownIndicator_accessor_storage = __runInitializers(this, _showDownIndicator_initializers, false);
            this.#avatarUrl_accessor_storage = (__runInitializers(this, _showDownIndicator_extraInitializers), __runInitializers(this, _avatarUrl_initializers, ''));
            this.#host_accessor_storage = (__runInitializers(this, _avatarUrl_extraInitializers), __runInitializers(this, _host_initializers, void 0));
            this.#isLoading_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _isLoading_initializers, void 0));
            this.#chatContextValue_accessor_storage = (__runInitializers(this, _isLoading_extraInitializers), __runInitializers(this, _chatContextValue_initializers, void 0));
            this.#updateContext_accessor_storage = (__runInitializers(this, _chatContextValue_extraInitializers), __runInitializers(this, _updateContext_initializers, void 0));
            this.#messagesContainer_accessor_storage = (__runInitializers(this, _updateContext_extraInitializers), __runInitializers(this, _messagesContainer_initializers, void 0));
            __runInitializers(this, _messagesContainer_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ChatPanelMessages = _classThis;
})();
export { ChatPanelMessages };
//# sourceMappingURL=chat-panel-messages.js.map