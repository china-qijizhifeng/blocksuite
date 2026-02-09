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
import { openFileOrFiles } from '@blocksuite/blocks';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { ChatAbortIcon, ChatClearIcon, ChatSendIcon, CloseIcon, ImageIcon, } from '../_common/icons.js';
import { AIProvider } from '../provider.js';
import { reportResponse } from '../utils/action-reporter.js';
import { readBlobAsURL } from '../utils/image.js';
const MaximumImageCount = 8;
function getFirstTwoLines(text) {
    const lines = text.split('\n');
    return lines.slice(0, 2);
}
let ChatPanelInput = (() => {
    let _classDecorators = [customElement('chat-panel-input')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _imagesWrapper_decorators;
    let _imagesWrapper_initializers = [];
    let _imagesWrapper_extraInitializers = [];
    let _textarea_decorators;
    let _textarea_initializers = [];
    let _textarea_extraInitializers = [];
    let _closeWrapper_decorators;
    let _closeWrapper_initializers = [];
    let _closeWrapper_extraInitializers = [];
    let _curIndex_decorators;
    let _curIndex_initializers = [];
    let _curIndex_extraInitializers = [];
    let _isInputEmpty_decorators;
    let _isInputEmpty_initializers = [];
    let _isInputEmpty_extraInitializers = [];
    let _focused_decorators;
    let _focused_initializers = [];
    let _focused_extraInitializers = [];
    let _chatContextValue_decorators;
    let _chatContextValue_initializers = [];
    let _chatContextValue_extraInitializers = [];
    let _updateContext_decorators;
    let _updateContext_initializers = [];
    let _updateContext_extraInitializers = [];
    let _cleanupHistories_decorators;
    let _cleanupHistories_initializers = [];
    let _cleanupHistories_extraInitializers = [];
    var ChatPanelInput = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#host_accessor_storage = __runInitializers(this, _host_initializers, void 0);
            this.#imagesWrapper_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _imagesWrapper_initializers, void 0));
            this.#textarea_accessor_storage = (__runInitializers(this, _imagesWrapper_extraInitializers), __runInitializers(this, _textarea_initializers, void 0));
            this.#closeWrapper_accessor_storage = (__runInitializers(this, _textarea_extraInitializers), __runInitializers(this, _closeWrapper_initializers, void 0));
            this.#curIndex_accessor_storage = (__runInitializers(this, _closeWrapper_extraInitializers), __runInitializers(this, _curIndex_initializers, -1));
            this.#isInputEmpty_accessor_storage = (__runInitializers(this, _curIndex_extraInitializers), __runInitializers(this, _isInputEmpty_initializers, true));
            this.#focused_accessor_storage = (__runInitializers(this, _isInputEmpty_extraInitializers), __runInitializers(this, _focused_initializers, false));
            this.#chatContextValue_accessor_storage = (__runInitializers(this, _focused_extraInitializers), __runInitializers(this, _chatContextValue_initializers, void 0));
            this.#updateContext_accessor_storage = (__runInitializers(this, _chatContextValue_extraInitializers), __runInitializers(this, _updateContext_initializers, void 0));
            this.#cleanupHistories_accessor_storage = (__runInitializers(this, _updateContext_extraInitializers), __runInitializers(this, _cleanupHistories_initializers, void 0));
            this.send = (__runInitializers(this, _cleanupHistories_extraInitializers), async () => {
                const { status, markdown } = this.chatContextValue;
                if (status === 'loading' || status === 'transmitting')
                    return;
                const text = this.textarea.value;
                const { images } = this.chatContextValue;
                if (!text && images.length === 0) {
                    return;
                }
                const { doc } = this.host;
                this.textarea.value = '';
                this.isInputEmpty = true;
                this.updateContext({
                    images: [],
                    status: 'loading',
                    error: null,
                    quote: '',
                    markdown: '',
                });
                const attachments = await Promise.all(images?.map(image => readBlobAsURL(image)));
                const content = (markdown ? `${markdown}\n` : '') + text;
                this.updateContext({
                    items: [
                        ...this.chatContextValue.items,
                        {
                            role: 'user',
                            content: content,
                            createdAt: new Date().toISOString(),
                            attachments,
                        },
                        { role: 'assistant', content: '', createdAt: new Date().toISOString() },
                    ],
                });
                try {
                    const abortController = new AbortController();
                    const stream = AIProvider.actions.chat?.({
                        input: content,
                        docId: doc.id,
                        attachments: images,
                        workspaceId: doc.collection.id,
                        host: this.host,
                        stream: true,
                        signal: abortController.signal,
                        where: 'chat-panel',
                        control: 'chat-send',
                    });
                    if (stream) {
                        this.updateContext({ abortController });
                        for await (const text of stream) {
                            const items = [...this.chatContextValue.items];
                            const last = items[items.length - 1];
                            last.content += text;
                            this.updateContext({ items, status: 'transmitting' });
                        }
                        this.updateContext({ status: 'success' });
                    }
                }
                catch (error) {
                    this.updateContext({ status: 'error', error: error });
                }
                finally {
                    this.updateContext({ abortController: null });
                }
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _host_decorators = [property({ attribute: false })];
            _imagesWrapper_decorators = [query('.chat-panel-images')];
            _textarea_decorators = [query('textarea')];
            _closeWrapper_decorators = [query('.close-wrapper')];
            _curIndex_decorators = [state()];
            _isInputEmpty_decorators = [state()];
            _focused_decorators = [state()];
            _chatContextValue_decorators = [property({ attribute: false })];
            _updateContext_decorators = [property({ attribute: false })];
            _cleanupHistories_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _imagesWrapper_decorators, { kind: "accessor", name: "imagesWrapper", static: false, private: false, access: { has: obj => "imagesWrapper" in obj, get: obj => obj.imagesWrapper, set: (obj, value) => { obj.imagesWrapper = value; } }, metadata: _metadata }, _imagesWrapper_initializers, _imagesWrapper_extraInitializers);
            __esDecorate(this, null, _textarea_decorators, { kind: "accessor", name: "textarea", static: false, private: false, access: { has: obj => "textarea" in obj, get: obj => obj.textarea, set: (obj, value) => { obj.textarea = value; } }, metadata: _metadata }, _textarea_initializers, _textarea_extraInitializers);
            __esDecorate(this, null, _closeWrapper_decorators, { kind: "accessor", name: "closeWrapper", static: false, private: false, access: { has: obj => "closeWrapper" in obj, get: obj => obj.closeWrapper, set: (obj, value) => { obj.closeWrapper = value; } }, metadata: _metadata }, _closeWrapper_initializers, _closeWrapper_extraInitializers);
            __esDecorate(this, null, _curIndex_decorators, { kind: "accessor", name: "curIndex", static: false, private: false, access: { has: obj => "curIndex" in obj, get: obj => obj.curIndex, set: (obj, value) => { obj.curIndex = value; } }, metadata: _metadata }, _curIndex_initializers, _curIndex_extraInitializers);
            __esDecorate(this, null, _isInputEmpty_decorators, { kind: "accessor", name: "isInputEmpty", static: false, private: false, access: { has: obj => "isInputEmpty" in obj, get: obj => obj.isInputEmpty, set: (obj, value) => { obj.isInputEmpty = value; } }, metadata: _metadata }, _isInputEmpty_initializers, _isInputEmpty_extraInitializers);
            __esDecorate(this, null, _focused_decorators, { kind: "accessor", name: "focused", static: false, private: false, access: { has: obj => "focused" in obj, get: obj => obj.focused, set: (obj, value) => { obj.focused = value; } }, metadata: _metadata }, _focused_initializers, _focused_extraInitializers);
            __esDecorate(this, null, _chatContextValue_decorators, { kind: "accessor", name: "chatContextValue", static: false, private: false, access: { has: obj => "chatContextValue" in obj, get: obj => obj.chatContextValue, set: (obj, value) => { obj.chatContextValue = value; } }, metadata: _metadata }, _chatContextValue_initializers, _chatContextValue_extraInitializers);
            __esDecorate(this, null, _updateContext_decorators, { kind: "accessor", name: "updateContext", static: false, private: false, access: { has: obj => "updateContext" in obj, get: obj => obj.updateContext, set: (obj, value) => { obj.updateContext = value; } }, metadata: _metadata }, _updateContext_initializers, _updateContext_extraInitializers);
            __esDecorate(this, null, _cleanupHistories_decorators, { kind: "accessor", name: "cleanupHistories", static: false, private: false, access: { has: obj => "cleanupHistories" in obj, get: obj => obj.cleanupHistories, set: (obj, value) => { obj.cleanupHistories = value; } }, metadata: _metadata }, _cleanupHistories_initializers, _cleanupHistories_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ChatPanelInput = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .chat-panel-input {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 12px;
      position: relative;
      margin-top: 12px;
      border-radius: 4px;
      padding: 8px;
      min-height: 94px;
      box-sizing: border-box;
      border-width: 1px;
      border-style: solid;

      .chat-selection-quote {
        padding: 4px 0px 8px 0px;
        padding-left: 15px;
        max-height: 56px;
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;
        color: var(--affine-text-secondary-color);
        position: relative;

        div {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .chat-quote-close {
          position: absolute;
          right: 0;
          top: 0;
          cursor: pointer;
          display: none;
          width: 16px;
          height: 16px;
          border-radius: 4px;
          border: 1px solid var(--affine-border-color);
          background-color: var(--affine-white);
        }
      }

      .chat-selection-quote:hover .chat-quote-close {
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .chat-selection-quote::after {
        content: '';
        width: 2px;
        height: calc(100% - 10px);
        margin-top: 5px;
        position: absolute;
        left: 0;
        top: 0;
        background: var(--affine-quote-color);
        border-radius: 18px;
      }
    }

    .chat-panel-input-actions {
      display: flex;
      gap: 8px;
      align-items: center;

      div {
        width: 24px;
        height: 24px;
        cursor: pointer;
      }

      div:nth-child(2) {
        margin-left: auto;
      }

      .chat-history-clear {
        background-color: var(--affine-white);
      }

      .image-upload {
        background-color: var(--affine-white);
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .chat-panel-input {
      textarea {
        width: 100%;
        padding: 0;
        margin: 0;
        border: none;
        line-height: 22px;
        font-size: var(--affine-font-sm);
        font-weight: 400;
        font-family: var(--affine-font-family);
        color: var(--affine-text-primary-color);
        box-sizing: border-box;
        resize: none;
        overflow-y: hidden;
      }

      textarea::placeholder {
        font-size: 14px;
        font-weight: 400;
        font-family: var(--affine-font-family);
        color: var(--affine-placeholder-color);
      }

      textarea:focus {
        outline: none;
      }
    }

    .chat-panel-images {
      display: flex;
      gap: 4px;
      flex-wrap: wrap;
      position: relative;

      .image-container {
        width: 58px;
        height: 58px;
        border-radius: 4px;
        border: 1px solid var(--affine-border-color);
        cursor: pointer;
        overflow: hidden;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          max-width: 100%;
          max-height: 100%;
          width: auto;
          height: auto;
        }
      }
    }

    .close-wrapper {
      width: 16px;
      height: 16px;
      border-radius: 4px;
      border: 1px solid var(--affine-border-color);
      justify-content: center;
      align-items: center;
      display: none;
      position: absolute;
      background-color: var(--affine-white);
      z-index: 1;
      cursor: pointer;
    }

    .close-wrapper:hover {
      background-color: var(--affine-background-error-color);
      border: 1px solid var(--affine-error-color);
    }

    .close-wrapper:hover svg path {
      fill: var(--affine-error-color);
    }
  `; }
        #host_accessor_storage;
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #imagesWrapper_accessor_storage;
        get imagesWrapper() { return this.#imagesWrapper_accessor_storage; }
        set imagesWrapper(value) { this.#imagesWrapper_accessor_storage = value; }
        #textarea_accessor_storage;
        get textarea() { return this.#textarea_accessor_storage; }
        set textarea(value) { this.#textarea_accessor_storage = value; }
        #closeWrapper_accessor_storage;
        get closeWrapper() { return this.#closeWrapper_accessor_storage; }
        set closeWrapper(value) { this.#closeWrapper_accessor_storage = value; }
        #curIndex_accessor_storage;
        get curIndex() { return this.#curIndex_accessor_storage; }
        set curIndex(value) { this.#curIndex_accessor_storage = value; }
        #isInputEmpty_accessor_storage;
        get isInputEmpty() { return this.#isInputEmpty_accessor_storage; }
        set isInputEmpty(value) { this.#isInputEmpty_accessor_storage = value; }
        #focused_accessor_storage;
        get focused() { return this.#focused_accessor_storage; }
        set focused(value) { this.#focused_accessor_storage = value; }
        #chatContextValue_accessor_storage;
        get chatContextValue() { return this.#chatContextValue_accessor_storage; }
        set chatContextValue(value) { this.#chatContextValue_accessor_storage = value; }
        #updateContext_accessor_storage;
        get updateContext() { return this.#updateContext_accessor_storage; }
        set updateContext(value) { this.#updateContext_accessor_storage = value; }
        #cleanupHistories_accessor_storage;
        get cleanupHistories() { return this.#cleanupHistories_accessor_storage; }
        set cleanupHistories(value) { this.#cleanupHistories_accessor_storage = value; }
        _addImages(images) {
            const oldImages = this.chatContextValue.images;
            this.updateContext({
                images: [...oldImages, ...images].slice(0, MaximumImageCount),
            });
        }
        _renderImages(images) {
            return html `
      <div
        class="chat-panel-images"
        @mouseleave=${() => {
                this.closeWrapper.style.display = 'none';
                this.curIndex = -1;
            }}
      >
        ${repeat(images, image => image.name, (image, index) => html `<div
              class="image-container"
              @mouseenter=${(evt) => {
                const ele = evt.target;
                const rect = ele.getBoundingClientRect();
                const parentRect = ele.parentElement.getBoundingClientRect();
                const left = Math.abs(rect.right - parentRect.left) - 8;
                const top = Math.abs(parentRect.top - rect.top) - 8;
                this.curIndex = index;
                this.closeWrapper.style.display = 'flex';
                this.closeWrapper.style.left = left + 'px';
                this.closeWrapper.style.top = top + 'px';
            }}
            >
              <img src="${URL.createObjectURL(image)}" alt="${image.name}" />
            </div>`)}
        <div
          class="close-wrapper"
          @click=${() => {
                if (this.curIndex >= 0 && this.curIndex < images.length) {
                    const newImages = [...images];
                    newImages.splice(this.curIndex, 1);
                    this.updateContext({ images: newImages });
                    this.curIndex = -1;
                    this.closeWrapper.style.display = 'none';
                }
            }}
        >
          ${CloseIcon}
        </div>
      </div>
    `;
        }
        render() {
            const { images, status } = this.chatContextValue;
            const hasImages = images.length > 0;
            const maxHeight = hasImages ? 272 + 2 : 200 + 2;
            return html `<style>
        .chat-panel-send svg rect {
          fill: ${this.isInputEmpty && hasImages
                ? 'var(--affine-text-disable-color)'
                : 'var(--affine-primary-color)'};
        }

        .chat-panel-input {
          border-color: ${this.focused
                ? 'var(--affine-primary-color)'
                : 'var(--affine-border-color)'};
          box-shadow: ${this.focused ? 'var(--affine-active-shadow)' : 'none'};
          max-height: ${maxHeight}px !important;
        }
      </style>
      <div class="chat-panel-input">
        ${hasImages ? this._renderImages(images) : nothing}
        ${this.chatContextValue.quote
                ? html `<div class="chat-selection-quote">
              ${repeat(getFirstTwoLines(this.chatContextValue.quote), line => line, line => html `<div>${line}</div>`)}
              <div
                class="chat-quote-close"
                @click=${() => {
                    this.updateContext({ quote: '', markdown: '' });
                }}
              >
                ${CloseIcon}
              </div>
            </div>`
                : nothing}
        <textarea
          rows="1"
          placeholder="What are your thoughts?"
          @input=${() => {
                const { textarea } = this;
                this.isInputEmpty = !textarea.value.trim();
                textarea.style.height = 'auto';
                textarea.style.height = textarea.scrollHeight + 'px';
                let imagesHeight = this.imagesWrapper?.scrollHeight ?? 0;
                if (imagesHeight)
                    imagesHeight += 12;
                if (this.scrollHeight >= 200 + imagesHeight) {
                    textarea.style.height = '148px';
                    textarea.style.overflowY = 'scroll';
                }
            }}
          @keydown=${async (evt) => {
                if (evt.key === 'Enter' && !evt.shiftKey && !evt.isComposing) {
                    evt.preventDefault();
                    await this.send();
                }
            }}
          @focus=${() => {
                this.focused = true;
            }}
          @blur=${() => {
                this.focused = false;
            }}
          @paste=${(event) => {
                const items = event.clipboardData?.items;
                if (!items)
                    return;
                for (const index in items) {
                    const item = items[index];
                    if (item.kind === 'file' && item.type.indexOf('image') >= 0) {
                        const blob = item.getAsFile();
                        if (!blob)
                            continue;
                        this._addImages([blob]);
                    }
                }
            }}
        ></textarea>
        <div class="chat-panel-input-actions">
          <div
            class="chat-history-clear"
            @click=${async () => {
                await this.cleanupHistories();
            }}
          >
            ${ChatClearIcon}
          </div>
          ${images.length < MaximumImageCount
                ? html `<div
                class="image-upload"
                @click=${async () => {
                    const images = await openFileOrFiles({
                        acceptType: 'Images',
                        multiple: true,
                    });
                    if (!images)
                        return;
                    this._addImages(images);
                }}
              >
                ${ImageIcon}
              </div>`
                : nothing}
          ${status === 'transmitting'
                ? html `<div
                @click=${() => {
                    this.chatContextValue.abortController?.abort();
                    this.updateContext({ status: 'success' });
                    reportResponse('aborted:stop');
                }}
              >
                ${ChatAbortIcon}
              </div>`
                : html `<div @click="${this.send}" class="chat-panel-send">
                ${ChatSendIcon}
              </div>`}
        </div>
      </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ChatPanelInput = _classThis;
})();
export { ChatPanelInput };
//# sourceMappingURL=chat-panel-input.js.map