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
import { createButtonPopper, Tooltip } from '@blocksuite/blocks';
import { noop } from '@blocksuite/global/utils';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { CopyIcon, MoreIcon, RetryIcon } from '../../_common/icons.js';
import { AIProvider } from '../../provider.js';
import { copyText } from '../../utils/editor-actions.js';
import { PageEditorActions } from './actions-handle.js';
noop(Tooltip);
let ChatCopyMore = (() => {
    let _classDecorators = [customElement('chat-copy-more')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __showMoreMenu_decorators;
    let __showMoreMenu_initializers = [];
    let __showMoreMenu_extraInitializers = [];
    let __moreButton_decorators;
    let __moreButton_initializers = [];
    let __moreButton_extraInitializers = [];
    let __moreMenu_decorators;
    let __moreMenu_initializers = [];
    let __moreMenu_extraInitializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _content_decorators;
    let _content_initializers = [];
    let _content_extraInitializers = [];
    let _isLast_decorators;
    let _isLast_initializers = [];
    let _isLast_extraInitializers = [];
    let _curTextSelection_decorators;
    let _curTextSelection_initializers = [];
    let _curTextSelection_extraInitializers = [];
    let _curBlockSelections_decorators;
    let _curBlockSelections_initializers = [];
    let _curBlockSelections_extraInitializers = [];
    let _chatContextValue_decorators;
    let _chatContextValue_initializers = [];
    let _chatContextValue_extraInitializers = [];
    let _updateContext_decorators;
    let _updateContext_initializers = [];
    let _updateContext_extraInitializers = [];
    var ChatCopyMore = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __showMoreMenu_decorators = [state()];
            __moreButton_decorators = [query('.more-button')];
            __moreMenu_decorators = [query('.more-menu')];
            _host_decorators = [property({ attribute: false })];
            _content_decorators = [property({ attribute: false })];
            _isLast_decorators = [property({ attribute: false })];
            _curTextSelection_decorators = [property({ attribute: false })];
            _curBlockSelections_decorators = [property({ attribute: false })];
            _chatContextValue_decorators = [property({ attribute: false })];
            _updateContext_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __showMoreMenu_decorators, { kind: "accessor", name: "_showMoreMenu", static: false, private: false, access: { has: obj => "_showMoreMenu" in obj, get: obj => obj._showMoreMenu, set: (obj, value) => { obj._showMoreMenu = value; } }, metadata: _metadata }, __showMoreMenu_initializers, __showMoreMenu_extraInitializers);
            __esDecorate(this, null, __moreButton_decorators, { kind: "accessor", name: "_moreButton", static: false, private: false, access: { has: obj => "_moreButton" in obj, get: obj => obj._moreButton, set: (obj, value) => { obj._moreButton = value; } }, metadata: _metadata }, __moreButton_initializers, __moreButton_extraInitializers);
            __esDecorate(this, null, __moreMenu_decorators, { kind: "accessor", name: "_moreMenu", static: false, private: false, access: { has: obj => "_moreMenu" in obj, get: obj => obj._moreMenu, set: (obj, value) => { obj._moreMenu = value; } }, metadata: _metadata }, __moreMenu_initializers, __moreMenu_extraInitializers);
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _content_decorators, { kind: "accessor", name: "content", static: false, private: false, access: { has: obj => "content" in obj, get: obj => obj.content, set: (obj, value) => { obj.content = value; } }, metadata: _metadata }, _content_initializers, _content_extraInitializers);
            __esDecorate(this, null, _isLast_decorators, { kind: "accessor", name: "isLast", static: false, private: false, access: { has: obj => "isLast" in obj, get: obj => obj.isLast, set: (obj, value) => { obj.isLast = value; } }, metadata: _metadata }, _isLast_initializers, _isLast_extraInitializers);
            __esDecorate(this, null, _curTextSelection_decorators, { kind: "accessor", name: "curTextSelection", static: false, private: false, access: { has: obj => "curTextSelection" in obj, get: obj => obj.curTextSelection, set: (obj, value) => { obj.curTextSelection = value; } }, metadata: _metadata }, _curTextSelection_initializers, _curTextSelection_extraInitializers);
            __esDecorate(this, null, _curBlockSelections_decorators, { kind: "accessor", name: "curBlockSelections", static: false, private: false, access: { has: obj => "curBlockSelections" in obj, get: obj => obj.curBlockSelections, set: (obj, value) => { obj.curBlockSelections = value; } }, metadata: _metadata }, _curBlockSelections_initializers, _curBlockSelections_extraInitializers);
            __esDecorate(this, null, _chatContextValue_decorators, { kind: "accessor", name: "chatContextValue", static: false, private: false, access: { has: obj => "chatContextValue" in obj, get: obj => obj.chatContextValue, set: (obj, value) => { obj.chatContextValue = value; } }, metadata: _metadata }, _chatContextValue_initializers, _chatContextValue_extraInitializers);
            __esDecorate(this, null, _updateContext_decorators, { kind: "accessor", name: "updateContext", static: false, private: false, access: { has: obj => "updateContext" in obj, get: obj => obj.updateContext, set: (obj, value) => { obj.updateContext = value; } }, metadata: _metadata }, _updateContext_initializers, _updateContext_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ChatCopyMore = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .copy-more {
      display: flex;
      gap: 8px;
      height: 36px;
      justify-content: flex-end;
      align-items: center;
      margin-top: 8px;
      margin-bottom: 12px;

      div {
        cursor: pointer;
        border-radius: 4px;
      }

      div:hover {
        background-color: var(--affine-hover-color);
      }

      svg {
        color: var(--affine-icon-color);
      }
    }

    .more-menu {
      width: 226px;
      border-radius: 8px;
      background-color: var(--affine-background-overlay-panel-color);
      box-shadow: var(--affine-menu-shadow);
      display: flex;
      flex-direction: column;
      gap: 4px;
      position: absolute;
      z-index: 1;
      user-select: none;

      > div {
        height: 30px;
        display: flex;
        gap: 8px;
        align-items: center;
        cursor: pointer;

        svg {
          margin-left: 12px;
        }
      }

      > div:hover {
        background-color: var(--affine-hover-color);
      }
    }
  `; }
        #_showMoreMenu_accessor_storage;
        get _showMoreMenu() { return this.#_showMoreMenu_accessor_storage; }
        set _showMoreMenu(value) { this.#_showMoreMenu_accessor_storage = value; }
        #_moreButton_accessor_storage;
        get _moreButton() { return this.#_moreButton_accessor_storage; }
        set _moreButton(value) { this.#_moreButton_accessor_storage = value; }
        #_moreMenu_accessor_storage;
        get _moreMenu() { return this.#_moreMenu_accessor_storage; }
        set _moreMenu(value) { this.#_moreMenu_accessor_storage = value; }
        #host_accessor_storage;
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #content_accessor_storage;
        get content() { return this.#content_accessor_storage; }
        set content(value) { this.#content_accessor_storage = value; }
        #isLast_accessor_storage;
        get isLast() { return this.#isLast_accessor_storage; }
        set isLast(value) { this.#isLast_accessor_storage = value; }
        #curTextSelection_accessor_storage;
        get curTextSelection() { return this.#curTextSelection_accessor_storage; }
        set curTextSelection(value) { this.#curTextSelection_accessor_storage = value; }
        #curBlockSelections_accessor_storage;
        get curBlockSelections() { return this.#curBlockSelections_accessor_storage; }
        set curBlockSelections(value) { this.#curBlockSelections_accessor_storage = value; }
        #chatContextValue_accessor_storage;
        get chatContextValue() { return this.#chatContextValue_accessor_storage; }
        set chatContextValue(value) { this.#chatContextValue_accessor_storage = value; }
        #updateContext_accessor_storage;
        get updateContext() { return this.#updateContext_accessor_storage; }
        set updateContext(value) { this.#updateContext_accessor_storage = value; }
        _toggle() {
            this._morePopper?.toggle();
        }
        async _retry() {
            const { doc } = this.host;
            try {
                const abortController = new AbortController();
                const items = [...this.chatContextValue.items];
                const last = items[items.length - 1];
                if ('content' in last) {
                    last.content = '';
                    last.createdAt = new Date().toISOString();
                }
                this.updateContext({ items, status: 'loading', error: null });
                const stream = AIProvider.actions.chat?.({
                    retry: true,
                    docId: doc.id,
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
        }
        updated(changed) {
            if (changed.has('isLast')) {
                if (this.isLast) {
                    this._morePopper?.dispose();
                    this._morePopper = null;
                }
                else if (!this._morePopper) {
                    this._morePopper = createButtonPopper(this._moreButton, this._moreMenu, ({ display }) => (this._showMoreMenu = display === 'show'));
                }
            }
        }
        render() {
            const { host, content, isLast } = this;
            return html `<style>
        .more-menu {
          padding: ${this._showMoreMenu ? '8px' : '0px'};
        }
      </style>
      <div class="copy-more">
        ${content
                ? html `<div @click=${() => copyText(host, content)}>
              ${CopyIcon}
              <affine-tooltip>Copy</affine-tooltip>
            </div>`
                : nothing}
        ${isLast
                ? html `<div @click=${() => this._retry()}>
              ${RetryIcon}
              <affine-tooltip>Retry</affine-tooltip>
            </div>`
                : nothing}
        ${isLast
                ? nothing
                : html `<div class="more-button" @click=${this._toggle}>
              ${MoreIcon}
            </div> `}
      </div>

      <div class="more-menu">
        ${this._showMoreMenu
                ? repeat(PageEditorActions, action => action.title, action => {
                    return html `<div
                  @click=${() => action.handler(host, content, this.curTextSelection, this.curBlockSelections)}
                >
                  ${action.icon}
                  <div>${action.title}</div>
                </div>`;
                })
                : nothing}
      </div>`;
        }
        constructor() {
            super(...arguments);
            this.#_showMoreMenu_accessor_storage = __runInitializers(this, __showMoreMenu_initializers, false);
            this.#_moreButton_accessor_storage = (__runInitializers(this, __showMoreMenu_extraInitializers), __runInitializers(this, __moreButton_initializers, void 0));
            this.#_moreMenu_accessor_storage = (__runInitializers(this, __moreButton_extraInitializers), __runInitializers(this, __moreMenu_initializers, void 0));
            this._morePopper = (__runInitializers(this, __moreMenu_extraInitializers), null);
            this.#host_accessor_storage = __runInitializers(this, _host_initializers, void 0);
            this.#content_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _content_initializers, void 0));
            this.#isLast_accessor_storage = (__runInitializers(this, _content_extraInitializers), __runInitializers(this, _isLast_initializers, void 0));
            this.#curTextSelection_accessor_storage = (__runInitializers(this, _isLast_extraInitializers), __runInitializers(this, _curTextSelection_initializers, undefined));
            this.#curBlockSelections_accessor_storage = (__runInitializers(this, _curTextSelection_extraInitializers), __runInitializers(this, _curBlockSelections_initializers, undefined));
            this.#chatContextValue_accessor_storage = (__runInitializers(this, _curBlockSelections_extraInitializers), __runInitializers(this, _chatContextValue_initializers, void 0));
            this.#updateContext_accessor_storage = (__runInitializers(this, _chatContextValue_extraInitializers), __runInitializers(this, _updateContext_initializers, void 0));
            __runInitializers(this, _updateContext_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ChatCopyMore = _classThis;
})();
export { ChatCopyMore };
//# sourceMappingURL=copy-more.js.map