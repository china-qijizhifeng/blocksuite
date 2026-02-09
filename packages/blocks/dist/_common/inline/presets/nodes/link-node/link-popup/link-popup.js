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
import '../../../../../components/button.js';
import '../../../../../components/tooltip/tooltip.js';
import { WithDisposable } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { computePosition, flip, inline, offset, shift } from '@floating-ui/dom';
import { html, LitElement, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { createLitPortal } from '../../../../../components/portal.js';
import { toast } from '../../../../../components/toast.js';
import { BLOCK_ID_ATTR } from '../../../../../consts.js';
import { BookmarkIcon, MoreVerticalIcon } from '../../../../../icons/index.js';
import { ConfirmIcon, CopyIcon, EditIcon, EmbedWebIcon, LinkIcon, UnlinkIcon, } from '../../../../../icons/text.js';
import { isValidUrl, normalizeUrl } from '../../../../../utils/url.js';
import { LinkPopupMoreMenu } from './link-popup-more-menu-popup.js';
import { linkPopupStyle } from './styles.js';
let LinkPopup = (() => {
    let _classDecorators = [customElement('link-popup')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _inlineEditor_decorators;
    let _inlineEditor_initializers = [];
    let _inlineEditor_extraInitializers = [];
    let _targetInlineRange_decorators;
    let _targetInlineRange_initializers = [];
    let _targetInlineRange_extraInitializers = [];
    let _abortController_decorators;
    let _abortController_initializers = [];
    let _abortController_extraInitializers = [];
    let _textInput_decorators;
    let _textInput_initializers = [];
    let _textInput_extraInitializers = [];
    let _linkInput_decorators;
    let _linkInput_initializers = [];
    let _linkInput_extraInitializers = [];
    let _popupContainer_decorators;
    let _popupContainer_initializers = [];
    let _popupContainer_extraInitializers = [];
    let _mockSelectionContainer_decorators;
    let _mockSelectionContainer_initializers = [];
    let _mockSelectionContainer_extraInitializers = [];
    let _confirmButton_decorators;
    let _confirmButton_initializers = [];
    let _confirmButton_extraInitializers = [];
    var LinkPopup = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _type_decorators = [property()];
            _inlineEditor_decorators = [property({ attribute: false })];
            _targetInlineRange_decorators = [property({ attribute: false })];
            _abortController_decorators = [property({ attribute: false })];
            _textInput_decorators = [query('#text-input')];
            _linkInput_decorators = [query('#link-input')];
            _popupContainer_decorators = [query('.affine-link-popover-container')];
            _mockSelectionContainer_decorators = [query('.mock-selection-container')];
            _confirmButton_decorators = [query('.affine-confirm-button')];
            __esDecorate(this, null, _type_decorators, { kind: "accessor", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(this, null, _inlineEditor_decorators, { kind: "accessor", name: "inlineEditor", static: false, private: false, access: { has: obj => "inlineEditor" in obj, get: obj => obj.inlineEditor, set: (obj, value) => { obj.inlineEditor = value; } }, metadata: _metadata }, _inlineEditor_initializers, _inlineEditor_extraInitializers);
            __esDecorate(this, null, _targetInlineRange_decorators, { kind: "accessor", name: "targetInlineRange", static: false, private: false, access: { has: obj => "targetInlineRange" in obj, get: obj => obj.targetInlineRange, set: (obj, value) => { obj.targetInlineRange = value; } }, metadata: _metadata }, _targetInlineRange_initializers, _targetInlineRange_extraInitializers);
            __esDecorate(this, null, _abortController_decorators, { kind: "accessor", name: "abortController", static: false, private: false, access: { has: obj => "abortController" in obj, get: obj => obj.abortController, set: (obj, value) => { obj.abortController = value; } }, metadata: _metadata }, _abortController_initializers, _abortController_extraInitializers);
            __esDecorate(this, null, _textInput_decorators, { kind: "accessor", name: "textInput", static: false, private: false, access: { has: obj => "textInput" in obj, get: obj => obj.textInput, set: (obj, value) => { obj.textInput = value; } }, metadata: _metadata }, _textInput_initializers, _textInput_extraInitializers);
            __esDecorate(this, null, _linkInput_decorators, { kind: "accessor", name: "linkInput", static: false, private: false, access: { has: obj => "linkInput" in obj, get: obj => obj.linkInput, set: (obj, value) => { obj.linkInput = value; } }, metadata: _metadata }, _linkInput_initializers, _linkInput_extraInitializers);
            __esDecorate(this, null, _popupContainer_decorators, { kind: "accessor", name: "popupContainer", static: false, private: false, access: { has: obj => "popupContainer" in obj, get: obj => obj.popupContainer, set: (obj, value) => { obj.popupContainer = value; } }, metadata: _metadata }, _popupContainer_initializers, _popupContainer_extraInitializers);
            __esDecorate(this, null, _mockSelectionContainer_decorators, { kind: "accessor", name: "mockSelectionContainer", static: false, private: false, access: { has: obj => "mockSelectionContainer" in obj, get: obj => obj.mockSelectionContainer, set: (obj, value) => { obj.mockSelectionContainer = value; } }, metadata: _metadata }, _mockSelectionContainer_initializers, _mockSelectionContainer_extraInitializers);
            __esDecorate(this, null, _confirmButton_decorators, { kind: "accessor", name: "confirmButton", static: false, private: false, access: { has: obj => "confirmButton" in obj, get: obj => obj.confirmButton, set: (obj, value) => { obj.confirmButton = value; } }, metadata: _metadata }, _confirmButton_initializers, _confirmButton_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            LinkPopup = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get _rootService() {
            return this.std.spec.getService('affine:page');
        }
        get host() {
            return this.blockElement.host;
        }
        get std() {
            return this.blockElement.std;
        }
        get blockElement() {
            const blockElement = this.inlineEditor.rootElement.closest(`[${BLOCK_ID_ATTR}]`);
            assertExists(blockElement);
            return blockElement;
        }
        get currentText() {
            return this.inlineEditor.yTextString.slice(this.targetInlineRange.index, this.targetInlineRange.index + this.targetInlineRange.length);
        }
        get currentLink() {
            const link = this.inlineEditor.getFormat(this.targetInlineRange).link;
            assertExists(link);
            return link;
        }
        get _isBookmarkAllowed() {
            const blockElement = this.blockElement;
            const schema = blockElement.doc.schema;
            const parent = blockElement.doc.getParent(blockElement.model);
            assertExists(parent);
            const bookmarkSchema = schema.flavourSchemaMap.get('affine:bookmark');
            assertExists(bookmarkSchema);
            const parentSchema = schema.flavourSchemaMap.get(parent.flavour);
            assertExists(parentSchema);
            try {
                schema.validateSchema(bookmarkSchema, parentSchema);
            }
            catch {
                return false;
            }
            return true;
        }
        get _canConvertToEmbedView() {
            return this._embedOptions?.viewType === 'embed';
        }
        static { this.styles = linkPopupStyle; }
        #type_accessor_storage;
        get type() { return this.#type_accessor_storage; }
        set type(value) { this.#type_accessor_storage = value; }
        #inlineEditor_accessor_storage;
        get inlineEditor() { return this.#inlineEditor_accessor_storage; }
        set inlineEditor(value) { this.#inlineEditor_accessor_storage = value; }
        #targetInlineRange_accessor_storage;
        get targetInlineRange() { return this.#targetInlineRange_accessor_storage; }
        set targetInlineRange(value) { this.#targetInlineRange_accessor_storage = value; }
        #abortController_accessor_storage;
        get abortController() { return this.#abortController_accessor_storage; }
        set abortController(value) { this.#abortController_accessor_storage = value; }
        #textInput_accessor_storage;
        get textInput() { return this.#textInput_accessor_storage; }
        set textInput(value) { this.#textInput_accessor_storage = value; }
        #linkInput_accessor_storage;
        get linkInput() { return this.#linkInput_accessor_storage; }
        set linkInput(value) { this.#linkInput_accessor_storage = value; }
        #popupContainer_accessor_storage;
        get popupContainer() { return this.#popupContainer_accessor_storage; }
        set popupContainer(value) { this.#popupContainer_accessor_storage = value; }
        #mockSelectionContainer_accessor_storage;
        get mockSelectionContainer() { return this.#mockSelectionContainer_accessor_storage; }
        set mockSelectionContainer(value) { this.#mockSelectionContainer_accessor_storage = value; }
        #confirmButton_accessor_storage;
        get confirmButton() { return this.#confirmButton_accessor_storage; }
        set confirmButton(value) { this.#confirmButton_accessor_storage = value; }
        _onConfirm() {
            if (!this.inlineEditor.isValidInlineRange(this.targetInlineRange))
                return;
            assertExists(this.linkInput);
            const linkInputValue = this.linkInput.value;
            if (!linkInputValue || !isValidUrl(linkInputValue))
                return;
            const link = normalizeUrl(linkInputValue);
            if (this.type === 'create') {
                this.inlineEditor.formatText(this.targetInlineRange, {
                    link: link,
                    reference: null,
                });
                this.inlineEditor.setInlineRange(this.targetInlineRange);
                const textSelection = this.host.selection.find('text');
                assertExists(textSelection);
                this.host.rangeManager?.syncTextSelectionToRange(textSelection);
            }
            else if (this.type === 'edit') {
                const text = this.textInput?.value ?? link;
                this.inlineEditor.insertText(this.targetInlineRange, text, {
                    link: link,
                    reference: null,
                });
                this.inlineEditor.setInlineRange({
                    index: this.targetInlineRange.index,
                    length: text.length,
                });
                const textSelection = this.host.selection.find('text');
                assertExists(textSelection);
                this.host.rangeManager?.syncTextSelectionToRange(textSelection);
            }
            this.abortController.abort();
        }
        _copyUrl() {
            navigator.clipboard.writeText(this.currentLink).catch(console.error);
            toast(this.host, 'Copied link to clipboard');
            this.abortController.abort();
        }
        _convertToCardView() {
            if (!this.inlineEditor.isValidInlineRange(this.targetInlineRange)) {
                return;
            }
            let targetFlavour = 'affine:bookmark';
            if (this._embedOptions && this._embedOptions.viewType === 'card') {
                targetFlavour = this._embedOptions.flavour;
            }
            const blockElement = this.blockElement;
            const url = this.currentLink;
            const title = this.currentText;
            const props = {
                url,
                title: title === url ? '' : title,
            };
            const doc = blockElement.doc;
            const parent = doc.getParent(blockElement.model);
            assertExists(parent);
            const index = parent.children.indexOf(blockElement.model);
            doc.addBlock(targetFlavour, props, parent, index + 1);
            const totalTextLength = this.inlineEditor.yTextLength;
            const inlineTextLength = this.targetInlineRange.length;
            if (totalTextLength === inlineTextLength) {
                doc.deleteBlock(blockElement.model);
            }
            else {
                this.inlineEditor.formatText(this.targetInlineRange, { link: null });
            }
            this.abortController.abort();
        }
        _convertToEmbedView() {
            if (!this._embedOptions || this._embedOptions.viewType !== 'embed') {
                return;
            }
            const { flavour } = this._embedOptions;
            const url = this.currentLink;
            const blockElement = this.blockElement;
            const doc = blockElement.doc;
            const parent = doc.getParent(blockElement.model);
            assertExists(parent);
            const index = parent.children.indexOf(blockElement.model);
            doc.addBlock(flavour, { url }, parent, index + 1);
            const totalTextLength = this.inlineEditor.yTextLength;
            const inlineTextLength = this.targetInlineRange.length;
            if (totalTextLength === inlineTextLength) {
                doc.deleteBlock(blockElement.model);
            }
            else {
                this.inlineEditor.formatText(this.targetInlineRange, { link: null });
            }
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
        _onKeydown(e) {
            e.stopPropagation();
            if (e.key === 'Enter' && !e.isComposing) {
                e.preventDefault();
                this._onConfirm();
            }
        }
        _updateConfirmBtn() {
            assertExists(this.confirmButton);
            const link = this.linkInput?.value;
            this.confirmButton.disabled = !(link && isValidUrl(link));
            this.confirmButton.requestUpdate();
        }
        _confirmBtnTemplate() {
            return html `<icon-button
      class="affine-confirm-button"
      @click=${this._onConfirm}
      >${ConfirmIcon}</icon-button
    >`;
        }
        _createTemplate() {
            this.updateComplete
                .then(() => {
                this.linkInput?.focus();
                this._updateConfirmBtn();
            })
                .catch(console.error);
            return html `
      <div class="affine-link-popover create">
        <input
          id="link-input"
          class="affine-link-popover-input"
          type="text"
          spellcheck="false"
          placeholder="Paste or type a link"
          @input=${this._updateConfirmBtn}
        />
        <span class="affine-link-popover-dividing-line"></span>
        ${this._confirmBtnTemplate()}
      </div>
    `;
        }
        _toggleMoreMenu() {
            if (this._moreMenuAbortController) {
                this._moreMenuAbortController.abort();
                this._moreMenuAbortController = null;
                return;
            }
            this._moreMenuAbortController = new AbortController();
            const linkPopupMoreMenu = new LinkPopupMoreMenu();
            linkPopupMoreMenu.abortController = this.abortController;
            linkPopupMoreMenu.inlineEditor = this.inlineEditor;
            linkPopupMoreMenu.targetInlineRange = this.targetInlineRange;
            linkPopupMoreMenu.host = this.blockElement.host;
            createLitPortal({
                template: linkPopupMoreMenu,
                container: this.popupContainer,
                computePosition: {
                    referenceElement: this.popupContainer,
                    placement: 'top-end',
                    middleware: [flip()],
                    autoUpdate: true,
                },
                abortController: this._moreMenuAbortController,
            });
        }
        _viewTemplate() {
            this._embedOptions = this._rootService.getEmbedBlockOptions(this.currentLink);
            return html `
      <div class="affine-link-popover view">
        <div class="affine-link-preview" @click=${() => this._copyUrl()}>
          <span>${this.currentLink}</span>
        </div>

        <icon-button size="32px" @click=${() => this._copyUrl()}>
          ${CopyIcon}
          <affine-tooltip .offset=${12}>${'Click to copy link'}</affine-tooltip>
        </icon-button>

        <icon-button
          size="32px"
          data-testid="edit"
          @click=${() => {
                this.type = 'edit';
            }}
        >
          ${EditIcon}
          <affine-tooltip .offset=${12}>Edit</affine-tooltip>
        </icon-button>

        <span class="affine-link-popover-dividing-line"></span>

        ${this._isBookmarkAllowed
                ? html `
              <div class="affine-link-popover-view-selector">
                <icon-button
                  size="24px"
                  class="affine-link-popover-view-selector-button link current-view"
                  hover="false"
                >
                  ${LinkIcon}
                  <affine-tooltip .offset=${12}
                    >${'Inline view'}</affine-tooltip
                  >
                </icon-button>

                <icon-button
                  size="24px"
                  data-testid="link-to-card"
                  class="affine-link-popover-view-selector-button card"
                  hover="false"
                  @click=${() => this._convertToCardView()}
                >
                  ${BookmarkIcon}
                  <affine-tooltip .offset=${12}>${'Card view'}</affine-tooltip>
                </icon-button>

                ${this._canConvertToEmbedView
                    ? html ` <icon-button
                      size="24px"
                      class="affine-link-popover-view-selector-button embed"
                      hover="false"
                      @click=${() => this._convertToEmbedView()}
                    >
                      ${EmbedWebIcon}
                      <affine-tooltip .offset=${12}
                        >${'Embed view'}</affine-tooltip
                      >
                    </icon-button>`
                    : nothing}
              </div>

              <span class="affine-link-popover-dividing-line"></span>
            `
                : nothing}

        <icon-button data-testid="unlink" @click=${() => this._removeLink()}>
          ${UnlinkIcon}
          <affine-tooltip .offset=${12}>Remove</affine-tooltip>
        </icon-button>

        <span class="affine-link-popover-dividing-line"></span>

        <icon-button size="24px" @click=${() => this._toggleMoreMenu()}>
          ${MoreVerticalIcon}
          <affine-tooltip .offset=${12}>More</affine-tooltip>
        </icon-button>
      </div>
    `;
        }
        _editTemplate() {
            this.updateComplete
                .then(() => {
                assertExists(this.textInput);
                this.textInput.value = this.currentText;
                assertExists(this.linkInput);
                this.linkInput.value = this.currentLink;
                this.textInput.select();
                this._updateConfirmBtn();
            })
                .catch(console.error);
            return html `
      <div class="affine-link-edit-popover">
        <div class="affine-edit-text-area">
          <input
            class="affine-edit-text-input"
            id="text-input"
            type="text"
            placeholder="Enter text"
            @input=${this._updateConfirmBtn}
          />
          <span class="affine-link-popover-dividing-line"></span>
          <label class="affine-edit-text-text" for="text-input">Text</label>
        </div>
        <div class="affine-edit-link-area">
          <input
            id="link-input"
            class="affine-edit-link-input"
            type="text"
            spellcheck="false"
            placeholder="Paste or type a link"
            @input=${this._updateConfirmBtn}
          />
          <span class="affine-link-popover-dividing-line"></span>
          <label class="affine-edit-link-text" for="link-input">Link</label>
        </div>
        ${this._confirmBtnTemplate()}
      </div>
    `;
        }
        firstUpdated() {
            if (!this.linkInput)
                return;
            this._disposables.addFromEvent(this.linkInput, 'copy', e => {
                e.stopPropagation();
            });
            this._disposables.addFromEvent(this.linkInput, 'cut', e => {
                e.stopPropagation();
            });
            this._disposables.addFromEvent(this.linkInput, 'paste', e => {
                e.stopPropagation();
            });
        }
        connectedCallback() {
            super.connectedCallback();
            if (this.targetInlineRange.length === 0) {
                throw new Error('Cannot toggle link popup on empty range');
            }
            if (this.type === 'edit' || this.type === 'create') {
                // disable body scroll
                this._bodyOverflowStyle = document.body.style.overflow;
                document.body.style.overflow = 'hidden';
                this.disposables.add({
                    dispose: () => {
                        document.body.style.overflow = this._bodyOverflowStyle;
                    },
                });
            }
            const parent = this.blockElement.doc.getParent(this.blockElement.model);
            assertExists(parent);
            this.disposables.add(parent.childrenUpdated.on(() => {
                const children = parent.children;
                if (children.includes(this.blockElement.model))
                    return;
                this.abortController.abort();
            }));
        }
        updated() {
            assertExists(this.popupContainer);
            const range = this.inlineEditor.toDomRange(this.targetInlineRange);
            assertExists(range);
            if (this.type !== 'view') {
                const domRects = range.getClientRects();
                Object.values(domRects).forEach(domRect => {
                    const mockSelection = document.createElement('div');
                    mockSelection.classList.add('mock-selection');
                    mockSelection.style.left = `${domRect.left}px`;
                    mockSelection.style.top = `${domRect.top}px`;
                    mockSelection.style.width = `${domRect.width}px`;
                    mockSelection.style.height = `${domRect.height}px`;
                    assertExists(this.mockSelectionContainer);
                    this.mockSelectionContainer.append(mockSelection);
                });
            }
            const visualElement = {
                getBoundingClientRect: () => range.getBoundingClientRect(),
                getClientRects: () => range.getClientRects(),
            };
            computePosition(visualElement, this.popupContainer, {
                middleware: [
                    offset(10),
                    inline(),
                    shift({
                        padding: 6,
                    }),
                ],
            })
                .then(({ x, y }) => {
                const popupContainer = this.popupContainer;
                if (!popupContainer)
                    return;
                popupContainer.style.left = `${x}px`;
                popupContainer.style.top = `${y}px`;
            })
                .catch(console.error);
        }
        render() {
            const mask = this.type === 'edit' || this.type === 'create'
                ? html `<div
            class="affine-link-popover-overlay-mask"
            @click=${() => {
                    this.abortController.abort();
                    this.host.selection.clear();
                }}
          ></div>`
                : nothing;
            const popover = this.type === 'create'
                ? this._createTemplate()
                : this.type === 'view'
                    ? this._viewTemplate()
                    : this._editTemplate();
            return html `
      <div class="overlay-root">
        ${mask}
        <div class="affine-link-popover-container" @keydown=${this._onKeydown}>
          ${popover}
        </div>
        <div class="mock-selection-container"></div>
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            this._bodyOverflowStyle = '';
            this._moreMenuAbortController = null;
            this._embedOptions = null;
            this.#type_accessor_storage = __runInitializers(this, _type_initializers, 'create');
            this.#inlineEditor_accessor_storage = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _inlineEditor_initializers, void 0));
            this.#targetInlineRange_accessor_storage = (__runInitializers(this, _inlineEditor_extraInitializers), __runInitializers(this, _targetInlineRange_initializers, void 0));
            this.#abortController_accessor_storage = (__runInitializers(this, _targetInlineRange_extraInitializers), __runInitializers(this, _abortController_initializers, void 0));
            this.#textInput_accessor_storage = (__runInitializers(this, _abortController_extraInitializers), __runInitializers(this, _textInput_initializers, null));
            this.#linkInput_accessor_storage = (__runInitializers(this, _textInput_extraInitializers), __runInitializers(this, _linkInput_initializers, null));
            this.#popupContainer_accessor_storage = (__runInitializers(this, _linkInput_extraInitializers), __runInitializers(this, _popupContainer_initializers, void 0));
            this.#mockSelectionContainer_accessor_storage = (__runInitializers(this, _popupContainer_extraInitializers), __runInitializers(this, _mockSelectionContainer_initializers, void 0));
            this.#confirmButton_accessor_storage = (__runInitializers(this, _mockSelectionContainer_extraInitializers), __runInitializers(this, _confirmButton_initializers, null));
            __runInitializers(this, _confirmButton_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return LinkPopup = _classThis;
})();
export { LinkPopup };
//# sourceMappingURL=link-popup.js.map