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
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { css, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ChatServiceKind, EmbeddingServiceKind, } from '../copilot-service/service-base.js';
import { ChatFeatureKey } from '../doc/api.js';
let CopilotChatPanel = (() => {
    let _classDecorators = [customElement('copilot-chat-panel')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _logic_decorators;
    let _logic_initializers = [];
    let _logic_extraInitializers = [];
    let _chatMessagesContainer_decorators;
    let _chatMessagesContainer_initializers = [];
    let _chatMessagesContainer_extraInitializers = [];
    let _tempMessage_decorators;
    let _tempMessage_initializers = [];
    let _tempMessage_extraInitializers = [];
    let _history_decorators;
    let _history_initializers = [];
    let _history_extraInitializers = [];
    let _currentRequest_decorators;
    let _currentRequest_initializers = [];
    let _currentRequest_extraInitializers = [];
    let _value_decorators;
    let _value_initializers = [];
    let _value_extraInitializers = [];
    let _syncedDocs_decorators;
    let _syncedDocs_initializers = [];
    let _syncedDocs_extraInitializers = [];
    let _surfaceSelection_decorators;
    let _surfaceSelection_initializers = [];
    let _surfaceSelection_extraInitializers = [];
    let _docSelection_decorators;
    let _docSelection_initializers = [];
    let _docSelection_extraInitializers = [];
    let _input_decorators;
    let _input_initializers = [];
    let _input_extraInitializers = [];
    var CopilotChatPanel = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#logic_accessor_storage = __runInitializers(this, _logic_initializers, void 0);
            this.#chatMessagesContainer_accessor_storage = (__runInitializers(this, _logic_extraInitializers), __runInitializers(this, _chatMessagesContainer_initializers, void 0));
            this.#tempMessage_accessor_storage = (__runInitializers(this, _chatMessagesContainer_extraInitializers), __runInitializers(this, _tempMessage_initializers, undefined));
            this.#history_accessor_storage = (__runInitializers(this, _tempMessage_extraInitializers), __runInitializers(this, _history_initializers, []));
            this.#currentRequest_accessor_storage = (__runInitializers(this, _history_extraInitializers), __runInitializers(this, _currentRequest_initializers, undefined));
            this.#value_accessor_storage = (__runInitializers(this, _currentRequest_extraInitializers), __runInitializers(this, _value_initializers, ''));
            this.#syncedDocs_accessor_storage = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _syncedDocs_initializers, []));
            this.#surfaceSelection_accessor_storage = (__runInitializers(this, _syncedDocs_extraInitializers), __runInitializers(this, _surfaceSelection_initializers, false));
            this.#docSelection_accessor_storage = (__runInitializers(this, _surfaceSelection_extraInitializers), __runInitializers(this, _docSelection_initializers, false));
            this.#input_accessor_storage = (__runInitializers(this, _docSelection_extraInitializers), __runInitializers(this, _input_initializers, void 0));
            this.addSelectionBackground = (__runInitializers(this, _input_extraInitializers), async () => {
                if (this.surfaceSelection) {
                    await this.chat.selectShapesForBackground();
                }
                if (this.docSelection) {
                    await this.chat.selectTextForBackground();
                }
                this.requestUpdate();
            });
            this.renderMessage = (message) => {
                if (message.role === 'system') {
                    return null;
                }
                if (message.role === 'user') {
                    const style = styleMap({
                        alignSelf: 'flex-end',
                    });
                    return html ` <div class="history-item" style="${style}">
        ${repeat(message.content, item => {
                        if (item.type === 'text') {
                            return html `<div style="width: fit-content">${item.text}</div>`;
                        }
                        if (item.type === 'image_url') {
                            return html `<div style="width: fit-content">
              <img .src="${item.image_url.url}" style="max-width: 100px" />
            </div>`;
                        }
                        return null;
                    })}
      </div>`;
                }
                if (message.role === 'assistant') {
                    const style = styleMap({
                        alignItems: 'flex-start',
                        backgroundColor: 'var(--affine-blue-100)',
                    });
                    return html `
        <div class="history-item" style="${style}">
          <div style="width: fit-content">${message.content}</div>
          ${message.sources?.length
                        ? html ` <div class="history-refs">
                <div style="margin-top: 8px;">sources:</div>
                <div
                  style="display: flex;flex-direction: column;gap: 4px;padding: 4px;"
                >
                  ${repeat(message.sources, ref => {
                            const doc = this.host.doc.collection.getDoc(ref.id);
                            if (!doc) {
                                return;
                            }
                            const title = doc.meta?.title || 'Untitled';
                            const jumpTo = () => {
                                this.host.doc = doc;
                            };
                            return html ` <a @click="${jumpTo}" style="cursor: pointer"
                      >${title}</a
                    >`;
                        })}
                </div>
              </div>`
                        : null}

          <div
            style="
                  position:absolute;
                  bottom:-35px;
                  left: 0;
                  display:flex;
                  align-items:center;
                  gap: 8px;
                  user-select: none;
                  height: 28px;
                  white-space: nowrap;
                  width: 100%;
                  justify-content: flex-end;
"
          >
            <div
              @click="${() => this.chat.replaceSelectedContent(message.content)}"
              style="border-radius: 4px;border: 1px solid rgba(0,0,0,0.1);padding: 2px 6px;cursor: pointer"
            >
              replace
            </div>
            <div
              @click="${() => this.chat.insertBelowSelectedContent(message.content)}"
              style="border-radius: 4px;border: 1px solid rgba(0,0,0,0.1);padding: 2px 6px;cursor: pointer"
            >
              insert below
            </div>
          </div>
        </div>
      `;
                }
                return null;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _logic_decorators = [property({ attribute: false })];
            _chatMessagesContainer_decorators = [query('.chat-messages-container')];
            _tempMessage_decorators = [state()];
            _history_decorators = [state()];
            _currentRequest_decorators = [state()];
            _value_decorators = [state()];
            _syncedDocs_decorators = [state()];
            _surfaceSelection_decorators = [state()];
            _docSelection_decorators = [state()];
            _input_decorators = [query('.copilot-chat-panel-chat-input')];
            __esDecorate(this, null, _logic_decorators, { kind: "accessor", name: "logic", static: false, private: false, access: { has: obj => "logic" in obj, get: obj => obj.logic, set: (obj, value) => { obj.logic = value; } }, metadata: _metadata }, _logic_initializers, _logic_extraInitializers);
            __esDecorate(this, null, _chatMessagesContainer_decorators, { kind: "accessor", name: "chatMessagesContainer", static: false, private: false, access: { has: obj => "chatMessagesContainer" in obj, get: obj => obj.chatMessagesContainer, set: (obj, value) => { obj.chatMessagesContainer = value; } }, metadata: _metadata }, _chatMessagesContainer_initializers, _chatMessagesContainer_extraInitializers);
            __esDecorate(this, null, _tempMessage_decorators, { kind: "accessor", name: "tempMessage", static: false, private: false, access: { has: obj => "tempMessage" in obj, get: obj => obj.tempMessage, set: (obj, value) => { obj.tempMessage = value; } }, metadata: _metadata }, _tempMessage_initializers, _tempMessage_extraInitializers);
            __esDecorate(this, null, _history_decorators, { kind: "accessor", name: "history", static: false, private: false, access: { has: obj => "history" in obj, get: obj => obj.history, set: (obj, value) => { obj.history = value; } }, metadata: _metadata }, _history_initializers, _history_extraInitializers);
            __esDecorate(this, null, _currentRequest_decorators, { kind: "accessor", name: "currentRequest", static: false, private: false, access: { has: obj => "currentRequest" in obj, get: obj => obj.currentRequest, set: (obj, value) => { obj.currentRequest = value; } }, metadata: _metadata }, _currentRequest_initializers, _currentRequest_extraInitializers);
            __esDecorate(this, null, _value_decorators, { kind: "accessor", name: "value", static: false, private: false, access: { has: obj => "value" in obj, get: obj => obj.value, set: (obj, value) => { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
            __esDecorate(this, null, _syncedDocs_decorators, { kind: "accessor", name: "syncedDocs", static: false, private: false, access: { has: obj => "syncedDocs" in obj, get: obj => obj.syncedDocs, set: (obj, value) => { obj.syncedDocs = value; } }, metadata: _metadata }, _syncedDocs_initializers, _syncedDocs_extraInitializers);
            __esDecorate(this, null, _surfaceSelection_decorators, { kind: "accessor", name: "surfaceSelection", static: false, private: false, access: { has: obj => "surfaceSelection" in obj, get: obj => obj.surfaceSelection, set: (obj, value) => { obj.surfaceSelection = value; } }, metadata: _metadata }, _surfaceSelection_initializers, _surfaceSelection_extraInitializers);
            __esDecorate(this, null, _docSelection_decorators, { kind: "accessor", name: "docSelection", static: false, private: false, access: { has: obj => "docSelection" in obj, get: obj => obj.docSelection, set: (obj, value) => { obj.docSelection = value; } }, metadata: _metadata }, _docSelection_initializers, _docSelection_extraInitializers);
            __esDecorate(this, null, _input_decorators, { kind: "accessor", name: "input", static: false, private: false, access: { has: obj => "input" in obj, get: obj => obj.input, set: (obj, value) => { obj.input = value; } }, metadata: _metadata }, _input_initializers, _input_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            CopilotChatPanel = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get chat() {
            return this.logic.chat;
        }
        get host() {
            return this.logic.getHost();
        }
        get loading() {
            return this.currentRequest != null;
        }
        static { this.styles = css `
    copilot-chat-panel {
      margin-top: 12px;
      display: flex;
      flex-direction: column;
      width: 100%;
      font-family: var(--affine-font-family);
      height: 100%;
      gap: 4px;
      overflow: auto;
    }

    .copilot-chat-prompt-container {
      border-top: 0.5px solid var(--affine-border-color);
      height: 189px;
      padding: 8px;
      display: flex;
      gap: 10px;
    }

    .copilot-chat-prompt {
      flex: 1;
      border: none;
      border-radius: 4px;
      padding: 4px 8px;
      outline: none;
      background-color: transparent;
    }

    .send-button {
      height: 32px;
      border-radius: 50%;
      width: 32px;
      background-color: var(--affine-primary-color);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .sync-workspace-button {
      border: 1px solid var(--affine-border-color);
      height: 32px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .synced-doc-list {
      margin-bottom: 14px;
      color: var(--affine-text-secondary-color);
      font-size: 12px;
    }

    .history-item {
      position: relative;
      max-width: calc(100% - 78px);
      display: flex;
      flex-direction: column;
      padding: 10px;
      border-radius: 8px;
      font-size: 14px;
      border: 0.5px solid var(--affine-border-color);
      background-color: var(--affine-background-primary-color);
      white-space: pre-wrap;
      line-height: 22px;
      color: var(--affine-text-primary-color);
    }

    .history-refs {
      font-size: 12px;
      color: var(--affine-text-secondary-color);
    }
  `; }
        #logic_accessor_storage;
        get logic() { return this.#logic_accessor_storage; }
        set logic(value) { this.#logic_accessor_storage = value; }
        #chatMessagesContainer_accessor_storage;
        get chatMessagesContainer() { return this.#chatMessagesContainer_accessor_storage; }
        set chatMessagesContainer(value) { this.#chatMessagesContainer_accessor_storage = value; }
        #tempMessage_accessor_storage;
        get tempMessage() { return this.#tempMessage_accessor_storage; }
        set tempMessage(value) { this.#tempMessage_accessor_storage = value; }
        #history_accessor_storage;
        get history() { return this.#history_accessor_storage; }
        set history(value) { this.#history_accessor_storage = value; }
        #currentRequest_accessor_storage;
        get currentRequest() { return this.#currentRequest_accessor_storage; }
        set currentRequest(value) { this.#currentRequest_accessor_storage = value; }
        #value_accessor_storage;
        get value() { return this.#value_accessor_storage; }
        set value(value) { this.#value_accessor_storage = value; }
        #syncedDocs_accessor_storage;
        get syncedDocs() { return this.#syncedDocs_accessor_storage; }
        set syncedDocs(value) { this.#syncedDocs_accessor_storage = value; }
        #surfaceSelection_accessor_storage;
        get surfaceSelection() { return this.#surfaceSelection_accessor_storage; }
        set surfaceSelection(value) { this.#surfaceSelection_accessor_storage = value; }
        #docSelection_accessor_storage;
        get docSelection() { return this.#docSelection_accessor_storage; }
        set docSelection(value) { this.#docSelection_accessor_storage = value; }
        #input_accessor_storage;
        get input() { return this.#input_accessor_storage; }
        set input(value) { this.#input_accessor_storage = value; }
        updated(_changedProperties) {
            super.updated(_changedProperties);
            if (_changedProperties.has('history') ||
                _changedProperties.has('tempMessage')) {
                this.chatMessagesContainer.scrollTop =
                    this.chatMessagesContainer.scrollHeight;
            }
        }
        render() {
            const getAnswer = async () => {
                this.input.focus();
                const text = this.input.value;
                this.input.value = '';
                await this.chat.genAnswer(text);
            };
            const keydown = async (e) => {
                e.stopPropagation();
                if (e.key === 'Enter' && !e.ctrlKey && !e.metaKey && !e.isComposing) {
                    e.preventDefault();
                    await getAnswer();
                }
            };
            const sendButtonStyle = styleMap({
                opacity: !this.loading ? '1' : '0.5',
            });
            return html `
      <div style="display:flex;flex-direction: column;height: 100%">
        <div
          style="display:flex;flex-direction: column;gap: 12px;margin-bottom: 12px;padding: 0 17px"
        >
          <div class="service-provider-container">
            <div class="service-type">Embedding Service</div>
            <vendor-service-select
              .featureKey="${ChatFeatureKey}"
              .service="${EmbeddingServiceKind}"
            ></vendor-service-select>
          </div>
          <div class="service-provider-container">
            <div class="service-type">Chat Service</div>
            <vendor-service-select
              .featureKey="${ChatFeatureKey}"
              .service="${ChatServiceKind}"
            ></vendor-service-select>
          </div>
        </div>
        <div
          class="chat-messages-container"
          style="display:flex;flex-direction: column;flex: 1;overflow: auto"
        >
          <div
            style="flex:1;gap:42px;flex-direction: column;display:flex;padding: 0 7px 42px"
          >
            ${repeat(this.history, this.renderMessage)}
            ${this.tempMessage
                ? this.renderMessage({
                    role: 'assistant',
                    content: this.tempMessage,
                    sources: [],
                })
                : nothing}
          </div>
        </div>
        <div>
          ${this.toolbar()}
          <div class="copilot-chat-prompt-container">
            <textarea
              @keydown="${keydown}"
              autocomplete="off"
              data-1p-ignore
              placeholder="Type here ask Copilot some thing..."
              class="copilot-chat-panel-chat-input copilot-chat-prompt"
              style="resize: none;"
            ></textarea>
            <div>
              <div
                @click="${getAnswer}"
                style="${sendButtonStyle}"
                class="send-button"
              >
                <sl-icon name="stars"></sl-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
        }
        connectedCallback() {
            super.connectedCallback();
            this.logic.chat.reactiveData = this;
            this.disposables.add(this.host.doc.collection.slots.docUpdated.on(() => {
                this.requestUpdate();
            }));
            this.checkSelection();
            this.disposables.add(this.host.selection.slots.changed.on(() => {
                this.checkSelection();
            }));
        }
        checkSelection() {
            this.surfaceSelection = this.host.selection.value.some(v => v.type === 'surface');
            this.docSelection = this.host.selection.value.some(v => v.type === 'block');
        }
        toolbar() {
            // const lastMessage = this.history[this.history.length - 1];
            // return html`<div
            //   style="display:flex;gap:12px;padding: 4px;font-size: 12px;line-height: 20px;color:var(--affine-text-secondary-color)"
            // >
            //   ${this.loading
            //     ? html`<div
            //         style="border-radius: 4px;border: 1px solid rgba(0,0,0,0.1);padding: 2px 8px 2px 4px;cursor: pointer;display:flex;align-items:center;gap: 4px;"
            //         @click="${() => (this.currentRequest = undefined)}"
            //       >
            //         ${StopIcon} Stop
            //       </div>`
            //     : nothing}
            //   ${!this.loading && lastMessage.role === 'assistant'
            //     ? html`<div
            //           style="border-radius: 4px;border: 1px solid rgba(0,0,0,0.1);padding: 2px 10px;cursor: pointer"
            //         >
            //           Longer
            //         </div>
            //         <div
            //           style="border-radius: 4px;border: 1px solid rgba(0,0,0,0.1);padding: 2px 10px;cursor: pointer"
            //         >
            //           Shorter
            //         </div>`
            //     : nothing}
            // </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return CopilotChatPanel = _classThis;
})();
export { CopilotChatPanel };
//# sourceMappingURL=chat.js.map