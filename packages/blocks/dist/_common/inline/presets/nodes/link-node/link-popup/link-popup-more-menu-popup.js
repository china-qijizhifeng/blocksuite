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
import { assertExists } from '@blocksuite/global/utils';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { toast } from '../../../../../components/toast.js';
import { CopyIcon, DeleteIcon, OpenIcon, UnlinkIcon, } from '../../../../../icons/index.js';
let LinkPopupMoreMenu = (() => {
    let _classDecorators = [customElement('link-popup-more-menu')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _inlineEditor_decorators;
    let _inlineEditor_initializers = [];
    let _inlineEditor_extraInitializers = [];
    let _targetInlineRange_decorators;
    let _targetInlineRange_initializers = [];
    let _targetInlineRange_extraInitializers = [];
    let _abortController_decorators;
    let _abortController_initializers = [];
    let _abortController_extraInitializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    var LinkPopupMoreMenu = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _inlineEditor_decorators = [property({ attribute: false })];
            _targetInlineRange_decorators = [property({ attribute: false })];
            _abortController_decorators = [property({ attribute: false })];
            _host_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _inlineEditor_decorators, { kind: "accessor", name: "inlineEditor", static: false, private: false, access: { has: obj => "inlineEditor" in obj, get: obj => obj.inlineEditor, set: (obj, value) => { obj.inlineEditor = value; } }, metadata: _metadata }, _inlineEditor_initializers, _inlineEditor_extraInitializers);
            __esDecorate(this, null, _targetInlineRange_decorators, { kind: "accessor", name: "targetInlineRange", static: false, private: false, access: { has: obj => "targetInlineRange" in obj, get: obj => obj.targetInlineRange, set: (obj, value) => { obj.targetInlineRange = value; } }, metadata: _metadata }, _targetInlineRange_initializers, _targetInlineRange_extraInitializers);
            __esDecorate(this, null, _abortController_decorators, { kind: "accessor", name: "abortController", static: false, private: false, access: { has: obj => "abortController" in obj, get: obj => obj.abortController, set: (obj, value) => { obj.abortController = value; } }, metadata: _metadata }, _abortController_initializers, _abortController_extraInitializers);
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            LinkPopupMoreMenu = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .link-popup-more-menu {
      box-sizing: border-box;
      padding-bottom: 4px;
    }

    .link-popup-more-menu-container {
      border-radius: 8px;
      padding: 8px;
      background: var(--affine-background-overlay-panel-color);
      box-shadow: var(--affine-shadow-2);
    }

    .link-popup-more-menu-container > .menu-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
    }

    .link-popup-more-menu-container > .menu-item:hover {
      background: var(--affine-hover-color);
    }

    .link-popup-more-menu-container > .menu-item:hover.delete {
      background: var(--affine-background-error-color);
      color: var(--affine-error-color);
    }
    .link-popup-more-menu > .menu-item:hover.delete > svg {
      color: var(--affine-error-color);
    }

    .link-popup-more-menu-container > .menu-item svg {
      margin: 0 8px;
    }

    .link-popup-more-menu-container > .divider {
      width: 148px;
      height: 1px;
      margin: 8px;
      background-color: var(--affine-border-color);
    }
  `; }
        #inlineEditor_accessor_storage = __runInitializers(this, _inlineEditor_initializers, void 0);
        get inlineEditor() { return this.#inlineEditor_accessor_storage; }
        set inlineEditor(value) { this.#inlineEditor_accessor_storage = value; }
        #targetInlineRange_accessor_storage = (__runInitializers(this, _inlineEditor_extraInitializers), __runInitializers(this, _targetInlineRange_initializers, void 0));
        get targetInlineRange() { return this.#targetInlineRange_accessor_storage; }
        set targetInlineRange(value) { this.#targetInlineRange_accessor_storage = value; }
        #abortController_accessor_storage = (__runInitializers(this, _targetInlineRange_extraInitializers), __runInitializers(this, _abortController_initializers, void 0));
        get abortController() { return this.#abortController_accessor_storage; }
        set abortController(value) { this.#abortController_accessor_storage = value; }
        #host_accessor_storage = (__runInitializers(this, _abortController_extraInitializers), __runInitializers(this, _host_initializers, void 0));
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        get currentLink() {
            const link = this.inlineEditor.getFormat(this.targetInlineRange).link;
            assertExists(link);
            return link;
        }
        _openLink() {
            let link = this.currentLink;
            if (!link.match(/^[a-zA-Z]+:\/\//)) {
                link = 'https://' + link;
            }
            window.open(link, '_blank');
            this.abortController.abort();
        }
        _copyUrl() {
            navigator.clipboard.writeText(this.currentLink).catch(console.error);
            toast(this.host, 'Copied link to clipboard');
            this.abortController.abort();
        }
        _removeLink() {
            if (this.inlineEditor.isValidInlineRange(this.targetInlineRange)) {
                this.inlineEditor.formatText(this.targetInlineRange, {
                    link: null,
                });
            }
            this.abortController.abort();
        }
        _delete() {
            if (this.inlineEditor.isValidInlineRange(this.targetInlineRange)) {
                this.inlineEditor.deleteText(this.targetInlineRange);
            }
            this.abortController.abort();
        }
        render() {
            return html `
      <div class="link-popup-more-menu">
        <div class="link-popup-more-menu-container">
          <icon-button
            width="126px"
            height="32px"
            class="menu-item open"
            text="Open"
            @click=${() => this._openLink()}
          >
            ${OpenIcon}
          </icon-button>

          <icon-button
            width="126px"
            height="32px"
            class="menu-item copy"
            text="Copy"
            @click=${() => this._copyUrl()}
          >
            ${CopyIcon}
          </icon-button>

          <icon-button
            width="126px"
            height="32px"
            class="menu-item unlink"
            text="Remove link"
            @click=${() => this._removeLink()}
          >
            ${UnlinkIcon}
          </icon-button>

          <div class="divider"></div>

          <icon-button
            width="126px"
            height="32px"
            class="menu-item delete"
            text="Delete"
            @click=${() => this._delete()}
          >
            ${DeleteIcon}
          </icon-button>
        </div>
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _host_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return LinkPopupMoreMenu = _classThis;
})();
export { LinkPopupMoreMenu };
//# sourceMappingURL=link-popup-more-menu-popup.js.map