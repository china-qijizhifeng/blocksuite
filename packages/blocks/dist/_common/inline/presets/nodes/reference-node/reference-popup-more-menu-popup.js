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
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { isPeekable, peek } from '../../../../components/peekable.js';
import { BLOCK_ID_ATTR } from '../../../../consts.js';
import { CenterPeekIcon, DeleteIcon, OpenIcon, } from '../../../../icons/index.js';
let ReferencePopupMoreMenu = (() => {
    let _classDecorators = [customElement('reference-popup-more-menu')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _target_decorators;
    let _target_initializers = [];
    let _target_extraInitializers = [];
    let _inlineEditor_decorators;
    let _inlineEditor_initializers = [];
    let _inlineEditor_extraInitializers = [];
    let _targetInlineRange_decorators;
    let _targetInlineRange_initializers = [];
    let _targetInlineRange_extraInitializers = [];
    let _abortController_decorators;
    let _abortController_initializers = [];
    let _abortController_extraInitializers = [];
    var ReferencePopupMoreMenu = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _target_decorators = [property({ attribute: false })];
            _inlineEditor_decorators = [property({ attribute: false })];
            _targetInlineRange_decorators = [property({ attribute: false })];
            _abortController_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _target_decorators, { kind: "accessor", name: "target", static: false, private: false, access: { has: obj => "target" in obj, get: obj => obj.target, set: (obj, value) => { obj.target = value; } }, metadata: _metadata }, _target_initializers, _target_extraInitializers);
            __esDecorate(this, null, _inlineEditor_decorators, { kind: "accessor", name: "inlineEditor", static: false, private: false, access: { has: obj => "inlineEditor" in obj, get: obj => obj.inlineEditor, set: (obj, value) => { obj.inlineEditor = value; } }, metadata: _metadata }, _inlineEditor_initializers, _inlineEditor_extraInitializers);
            __esDecorate(this, null, _targetInlineRange_decorators, { kind: "accessor", name: "targetInlineRange", static: false, private: false, access: { has: obj => "targetInlineRange" in obj, get: obj => obj.targetInlineRange, set: (obj, value) => { obj.targetInlineRange = value; } }, metadata: _metadata }, _targetInlineRange_initializers, _targetInlineRange_extraInitializers);
            __esDecorate(this, null, _abortController_decorators, { kind: "accessor", name: "abortController", static: false, private: false, access: { has: obj => "abortController" in obj, get: obj => obj.abortController, set: (obj, value) => { obj.abortController = value; } }, metadata: _metadata }, _abortController_initializers, _abortController_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ReferencePopupMoreMenu = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .reference-popup-more-menu {
      box-sizing: border-box;
      padding-bottom: 4px;
    }

    .reference-popup-more-menu-container {
      border-radius: 8px;
      padding: 8px;
      background: var(--affine-background-overlay-panel-color);
      box-shadow: var(--affine-shadow-2);
    }

    .reference-popup-more-menu-container > .menu-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0px 8px;
      gap: 8px;
      width: 100%;
    }

    .reference-popup-more-menu-container > .menu-item:hover {
      background: var(--affine-hover-color);
    }

    .reference-popup-more-menu-container > .menu-item:hover.delete {
      background: var(--affine-background-error-color);
      color: var(--affine-error-color);
    }
    .reference-popup-more-menu-container > .menu-item:hover.delete > svg {
      color: var(--affine-error-color);
    }

    .reference-popup-more-menu-container > .divider {
      height: 1px;
      margin: 8px;
      background-color: var(--affine-border-color);
    }
  `; }
        #target_accessor_storage = __runInitializers(this, _target_initializers, void 0);
        get target() { return this.#target_accessor_storage; }
        set target(value) { this.#target_accessor_storage = value; }
        #inlineEditor_accessor_storage = (__runInitializers(this, _target_extraInitializers), __runInitializers(this, _inlineEditor_initializers, void 0));
        get inlineEditor() { return this.#inlineEditor_accessor_storage; }
        set inlineEditor(value) { this.#inlineEditor_accessor_storage = value; }
        #targetInlineRange_accessor_storage = (__runInitializers(this, _inlineEditor_extraInitializers), __runInitializers(this, _targetInlineRange_initializers, void 0));
        get targetInlineRange() { return this.#targetInlineRange_accessor_storage; }
        set targetInlineRange(value) { this.#targetInlineRange_accessor_storage = value; }
        #abortController_accessor_storage = (__runInitializers(this, _targetInlineRange_extraInitializers), __runInitializers(this, _abortController_initializers, void 0));
        get abortController() { return this.#abortController_accessor_storage; }
        set abortController(value) { this.#abortController_accessor_storage = value; }
        get referenceDocId() {
            const docId = this.inlineEditor.getFormat(this.targetInlineRange).reference
                ?.pageId;
            assertExists(docId);
            return docId;
        }
        get blockElement() {
            const blockElement = this.inlineEditor.rootElement.closest(`[${BLOCK_ID_ATTR}]`);
            assertExists(blockElement);
            return blockElement;
        }
        get std() {
            const std = this.blockElement.std;
            assertExists(std);
            return std;
        }
        get _openButtonDisabled() {
            return this.referenceDocId === this.blockElement.doc.id;
        }
        _openDoc() {
            const refDocId = this.referenceDocId;
            const blockElement = this.blockElement;
            if (refDocId === blockElement.doc.id)
                return;
            const rootElement = this.std.view.viewFromPath('block', [
                blockElement.model.doc.root?.id ?? '',
            ]);
            assertExists(rootElement);
            rootElement.slots.docLinkClicked.emit({ docId: refDocId });
        }
        _delete() {
            if (this.inlineEditor.isValidInlineRange(this.targetInlineRange)) {
                this.inlineEditor.deleteText(this.targetInlineRange);
            }
            this.abortController.abort();
        }
        render() {
            return html `
      <div class="reference-popup-more-menu">
        <div class="reference-popup-more-menu-container">
          <icon-button
            width="126px"
            height="32px"
            class="menu-item open"
            text="Open this doc"
            @click=${() => this._openDoc()}
            ?disabled=${this._openButtonDisabled}
          >
            ${OpenIcon}
          </icon-button>

          ${isPeekable(this.target)
                ? html `<icon-button
                width="126px"
                height="32px"
                class="menu-item center-peek"
                text="Open in center peek"
                @click=${() => peek(this.target)}
              >
                ${CenterPeekIcon}
              </icon-button>`
                : nothing}

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
            __runInitializers(this, _abortController_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ReferencePopupMoreMenu = _classThis;
})();
export { ReferencePopupMoreMenu };
//# sourceMappingURL=reference-popup-more-menu-popup.js.map