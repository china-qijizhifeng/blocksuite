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
import './chat-panel-input.js';
import './chat-panel-messages.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { debounce } from '@blocksuite/global/utils';
import { css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { AIHelpIcon, SmallHintIcon } from '../_common/icons.js';
import { AIProvider } from '../provider.js';
import { getSelectedImagesAsBlobs, getSelectedTextContent, } from '../utils/selection-utils.js';
let ChatPanel = (() => {
    let _classDecorators = [customElement('chat-panel')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _isLoading_decorators;
    let _isLoading_initializers = [];
    let _isLoading_extraInitializers = [];
    let _chatContextValue_decorators;
    let _chatContextValue_initializers = [];
    let _chatContextValue_extraInitializers = [];
    var ChatPanel = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._chatMessages = createRef();
            this._chatSessionId = '';
            this._resettingCounter = 0;
            this._resetItems = debounce(() => {
                const counter = ++this._resettingCounter;
                this.isLoading = true;
                (async () => {
                    const { doc } = this;
                    const [histories, actions] = await Promise.all([
                        AIProvider.histories?.chats(doc.collection.id, doc.id),
                        AIProvider.histories?.actions(doc.collection.id, doc.id),
                    ]);
                    if (counter !== this._resettingCounter)
                        return;
                    const items = actions ? [...actions] : [];
                    if (histories?.[0]) {
                        this._chatSessionId = histories[0].sessionId;
                        items.push(...histories[0].messages);
                    }
                    this.chatContextValue = {
                        ...this.chatContextValue,
                        items: items.sort((a, b) => {
                            return (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
                        }),
                    };
                    this.isLoading = false;
                    this.scrollToDown();
                })().catch(console.error);
            }, 200);
            this.#host_accessor_storage = __runInitializers(this, _host_initializers, void 0);
            this.#doc_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _doc_initializers, void 0));
            this.#isLoading_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _isLoading_initializers, false));
            this.#chatContextValue_accessor_storage = (__runInitializers(this, _isLoading_extraInitializers), __runInitializers(this, _chatContextValue_initializers, {
                quote: '',
                images: [],
                abortController: null,
                items: [],
                status: 'idle',
                error: null,
                markdown: '',
            }));
            this._cleanupHistories = (__runInitializers(this, _chatContextValue_extraInitializers), async () => {
                const notification = this.host.std.spec.getService('affine:page').notificationService;
                if (!notification)
                    return;
                if (await notification.confirm({
                    title: 'Clear History',
                    message: 'Are you sure you want to clear all history? This action will permanently delete all content, including all chat logs and data, and cannot be undone.',
                    confirmText: 'Confirm',
                    cancelText: 'Cancel',
                })) {
                    await AIProvider.histories?.cleanup(this.doc.collection.id, this.doc.id, [
                        this._chatSessionId,
                        ...this.chatContextValue.items.filter(item => 'sessionId' in item).map(item => item.sessionId),
                    ]);
                    notification.toast('History cleared');
                    this._resetItems();
                }
            });
            this.updateContext = (context) => {
                this.chatContextValue = { ...this.chatContextValue, ...context };
            };
            this.continueInChat = async () => {
                const text = await getSelectedTextContent(this.host, 'plain-text');
                const markdown = await getSelectedTextContent(this.host, 'markdown');
                const images = await getSelectedImagesAsBlobs(this.host);
                this.updateContext({
                    quote: text,
                    markdown,
                    images,
                });
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _host_decorators = [property({ attribute: false })];
            _doc_decorators = [property({ attribute: false })];
            _isLoading_decorators = [state()];
            _chatContextValue_decorators = [state()];
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _isLoading_decorators, { kind: "accessor", name: "isLoading", static: false, private: false, access: { has: obj => "isLoading" in obj, get: obj => obj.isLoading, set: (obj, value) => { obj.isLoading = value; } }, metadata: _metadata }, _isLoading_initializers, _isLoading_extraInitializers);
            __esDecorate(this, null, _chatContextValue_decorators, { kind: "accessor", name: "chatContextValue", static: false, private: false, access: { has: obj => "chatContextValue" in obj, get: obj => obj.chatContextValue, set: (obj, value) => { obj.chatContextValue = value; } }, metadata: _metadata }, _chatContextValue_initializers, _chatContextValue_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ChatPanel = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    chat-panel {
      width: 100%;
    }

    .chat-panel-container {
      display: flex;
      flex-direction: column;
      padding: 0 12px;
      height: 100%;
    }

    .chat-panel-title {
      padding: 8px 0px;
      width: 100%;
      height: 36px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      div:first-child {
        font-size: 14px;
        font-weight: 500;
        color: var(--affine-text-secondary-color);
      }

      div:last-child {
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }

    chat-panel-messages {
      flex: 1;
      overflow-y: hidden;
    }

    .chat-panel-hints {
      margin: 0 4px;
      padding: 8px 12px;
      border-radius: 8px;
      border: 1px solid var(--affine-border-color);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
    }

    .chat-panel-hints :first-child {
      color: var(--affine-text-primary-color);
    }

    .chat-panel-hints :nth-child(2) {
      color: var(--affine-text-secondary-color);
    }

    .chat-panel-footer {
      margin: 8px 0px;
      height: 20px;
      display: flex;
      gap: 4px;
      align-items: center;
      color: var(--affine-text-secondary-color);
      font-size: 12px;
    }
  `; }
        #host_accessor_storage;
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #isLoading_accessor_storage;
        get isLoading() { return this.#isLoading_accessor_storage; }
        set isLoading(value) { this.#isLoading_accessor_storage = value; }
        #chatContextValue_accessor_storage;
        get chatContextValue() { return this.#chatContextValue_accessor_storage; }
        set chatContextValue(value) { this.#chatContextValue_accessor_storage = value; }
        updated(_changedProperties) {
            if (_changedProperties.has('doc')) {
                this._resetItems();
            }
        }
        connectedCallback() {
            super.connectedCallback();
            if (!this.doc)
                throw new Error('doc is required');
            AIProvider.slots.actions.on(({ action, event }) => {
                const { status } = this.chatContextValue;
                if (action !== 'chat' &&
                    event === 'finished' &&
                    (status === 'idle' || status === 'success')) {
                    this._resetItems();
                }
            });
            AIProvider.slots.userInfo.on(userInfo => {
                if (userInfo) {
                    this._resetItems();
                }
            });
            AIProvider.slots.requestContinueInChat.on(async ({ show }) => {
                if (show) {
                    const text = await getSelectedTextContent(this.host, 'plain-text');
                    const markdown = await getSelectedTextContent(this.host, 'markdown');
                    const images = await getSelectedImagesAsBlobs(this.host);
                    this.updateContext({
                        quote: text,
                        markdown: markdown,
                        images: images,
                    });
                }
            });
        }
        scrollToDown() {
            requestAnimationFrame(() => this._chatMessages.value?.scrollToDown());
        }
        render() {
            return html ` <div class="chat-panel-container">
      <div class="chat-panel-title">
        <div>AFFINE AI</div>
        <div
          @click=${() => {
                AIProvider.toggleGeneralAIOnboarding?.(true);
            }}
        >
          ${AIHelpIcon}
        </div>
      </div>
      <chat-panel-messages
        ${ref(this._chatMessages)}
        .chatContextValue=${this.chatContextValue}
        .updateContext=${this.updateContext}
        .host=${this.host}
        .isLoading=${this.isLoading}
      ></chat-panel-messages>
      <chat-panel-input
        .chatContextValue=${this.chatContextValue}
        .updateContext=${this.updateContext}
        .host=${this.host}
        .cleanupHistories=${this._cleanupHistories}
      ></chat-panel-input>
      <div class="chat-panel-footer">
        ${SmallHintIcon}
        <div>AI outputs can be misleading or wrong</div>
      </div>
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ChatPanel = _classThis;
})();
export { ChatPanel };
//# sourceMappingURL=index.js.map