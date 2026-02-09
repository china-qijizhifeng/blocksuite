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
import '../../../../components/tooltip/tooltip.js';
import '../../../../components/button.js';
import { WithDisposable } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { computePosition, flip, inline, offset, shift } from '@floating-ui/dom';
import { html, LitElement, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { isPeekable, peek } from '../../../../components/index.js';
import { createLitPortal } from '../../../../components/portal.js';
import { BLOCK_ID_ATTR } from '../../../../consts.js';
import { BookmarkIcon, MoreVerticalIcon } from '../../../../icons/index.js';
import { CenterPeekIcon, EmbedWebIcon, LinkIcon, OpenIcon, } from '../../../../icons/text.js';
import { isInsideBlockByFlavour } from '../../../../utils/model.js';
import { ReferencePopupMoreMenu } from './reference-popup-more-menu-popup.js';
import { styles } from './styles.js';
let ReferencePopup = (() => {
    let _classDecorators = [customElement('reference-popup')];
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
    let _docTitle_decorators;
    let _docTitle_initializers = [];
    let _docTitle_extraInitializers = [];
    let _abortController_decorators;
    let _abortController_initializers = [];
    let _abortController_extraInitializers = [];
    let _popupContainer_decorators;
    let _popupContainer_initializers = [];
    let _popupContainer_extraInitializers = [];
    var ReferencePopup = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _target_decorators = [property({ attribute: false })];
            _inlineEditor_decorators = [property({ attribute: false })];
            _targetInlineRange_decorators = [property({ attribute: false })];
            _docTitle_decorators = [property({ attribute: false })];
            _abortController_decorators = [property({ attribute: false })];
            _popupContainer_decorators = [query('.affine-reference-popover-container')];
            __esDecorate(this, null, _target_decorators, { kind: "accessor", name: "target", static: false, private: false, access: { has: obj => "target" in obj, get: obj => obj.target, set: (obj, value) => { obj.target = value; } }, metadata: _metadata }, _target_initializers, _target_extraInitializers);
            __esDecorate(this, null, _inlineEditor_decorators, { kind: "accessor", name: "inlineEditor", static: false, private: false, access: { has: obj => "inlineEditor" in obj, get: obj => obj.inlineEditor, set: (obj, value) => { obj.inlineEditor = value; } }, metadata: _metadata }, _inlineEditor_initializers, _inlineEditor_extraInitializers);
            __esDecorate(this, null, _targetInlineRange_decorators, { kind: "accessor", name: "targetInlineRange", static: false, private: false, access: { has: obj => "targetInlineRange" in obj, get: obj => obj.targetInlineRange, set: (obj, value) => { obj.targetInlineRange = value; } }, metadata: _metadata }, _targetInlineRange_initializers, _targetInlineRange_extraInitializers);
            __esDecorate(this, null, _docTitle_decorators, { kind: "accessor", name: "docTitle", static: false, private: false, access: { has: obj => "docTitle" in obj, get: obj => obj.docTitle, set: (obj, value) => { obj.docTitle = value; } }, metadata: _metadata }, _docTitle_initializers, _docTitle_extraInitializers);
            __esDecorate(this, null, _abortController_decorators, { kind: "accessor", name: "abortController", static: false, private: false, access: { has: obj => "abortController" in obj, get: obj => obj.abortController, set: (obj, value) => { obj.abortController = value; } }, metadata: _metadata }, _abortController_initializers, _abortController_extraInitializers);
            __esDecorate(this, null, _popupContainer_decorators, { kind: "accessor", name: "popupContainer", static: false, private: false, access: { has: obj => "popupContainer" in obj, get: obj => obj.popupContainer, set: (obj, value) => { obj.popupContainer = value; } }, metadata: _metadata }, _popupContainer_initializers, _popupContainer_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ReferencePopup = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
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
        get doc() {
            const doc = this.blockElement.doc;
            assertExists(doc);
            return doc;
        }
        get _embedViewButtonDisabled() {
            if (this.blockElement.doc.readonly ||
                isInsideBlockByFlavour(this.blockElement.doc, this.blockElement.model, 'affine:edgeless-text')) {
                return true;
            }
            return (!!this.blockElement.closest('affine-embed-synced-doc-block') ||
                this.referenceDocId === this.doc.id);
        }
        get _openButtonDisabled() {
            return this.referenceDocId === this.doc.id;
        }
        static { this.styles = styles; }
        #target_accessor_storage;
        get target() { return this.#target_accessor_storage; }
        set target(value) { this.#target_accessor_storage = value; }
        #inlineEditor_accessor_storage;
        get inlineEditor() { return this.#inlineEditor_accessor_storage; }
        set inlineEditor(value) { this.#inlineEditor_accessor_storage = value; }
        #targetInlineRange_accessor_storage;
        get targetInlineRange() { return this.#targetInlineRange_accessor_storage; }
        set targetInlineRange(value) { this.#targetInlineRange_accessor_storage = value; }
        #docTitle_accessor_storage;
        get docTitle() { return this.#docTitle_accessor_storage; }
        set docTitle(value) { this.#docTitle_accessor_storage = value; }
        #abortController_accessor_storage;
        get abortController() { return this.#abortController_accessor_storage; }
        set abortController(value) { this.#abortController_accessor_storage = value; }
        #popupContainer_accessor_storage;
        get popupContainer() { return this.#popupContainer_accessor_storage; }
        set popupContainer(value) { this.#popupContainer_accessor_storage = value; }
        _openDoc() {
            const refDocId = this.referenceDocId;
            const blockElement = this.blockElement;
            if (refDocId === blockElement.doc.id)
                return;
            const rootElement = this.std.view.viewFromPath('block', [
                blockElement.doc.root?.id ?? '',
            ]);
            assertExists(rootElement);
            rootElement.slots.docLinkClicked.emit({ docId: refDocId });
        }
        _convertToCardView() {
            const blockElement = this.blockElement;
            const doc = blockElement.host.doc;
            const parent = doc.getParent(blockElement.model);
            assertExists(parent);
            const index = parent.children.indexOf(blockElement.model);
            const docId = this.referenceDocId;
            doc.addBlock('affine:embed-linked-doc', { pageId: docId }, parent, index + 1);
            const totalTextLength = this.inlineEditor.yTextLength;
            const inlineTextLength = this.targetInlineRange.length;
            if (totalTextLength === inlineTextLength) {
                doc.deleteBlock(blockElement.model);
            }
            else {
                this.inlineEditor.insertText(this.targetInlineRange, this.docTitle);
            }
            this.abortController.abort();
        }
        _convertToEmbedView() {
            const blockElement = this.blockElement;
            const doc = blockElement.host.doc;
            const parent = doc.getParent(blockElement.model);
            assertExists(parent);
            const index = parent.children.indexOf(blockElement.model);
            const docId = this.referenceDocId;
            doc.addBlock('affine:embed-synced-doc', { pageId: docId }, parent, index + 1);
            const totalTextLength = this.inlineEditor.yTextLength;
            const inlineTextLength = this.targetInlineRange.length;
            if (totalTextLength === inlineTextLength) {
                doc.deleteBlock(blockElement.model);
            }
            else {
                this.inlineEditor.insertText(this.targetInlineRange, this.docTitle);
            }
            this.abortController.abort();
        }
        _toggleMoreMenu() {
            if (this._moreMenuAbortController) {
                this._moreMenuAbortController.abort();
                this._moreMenuAbortController = null;
                return;
            }
            this._moreMenuAbortController = new AbortController();
            const referencePopupMoreMenu = new ReferencePopupMoreMenu();
            referencePopupMoreMenu.target = this.target;
            referencePopupMoreMenu.abortController = this.abortController;
            referencePopupMoreMenu.inlineEditor = this.inlineEditor;
            referencePopupMoreMenu.targetInlineRange = this.targetInlineRange;
            createLitPortal({
                template: referencePopupMoreMenu,
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
        connectedCallback() {
            super.connectedCallback();
            if (this.targetInlineRange.length === 0) {
                throw new Error('Cannot toggle reference popup on empty range');
            }
            const parent = this.blockElement.host.doc.getParent(this.blockElement.model);
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
            // synced doc entry controlled by awareness flag
            const isSyncedDocEnabled = this.doc.awarenessStore.getFlag('enable_synced_doc_block');
            return html `
      <div class="overlay-root">
        <div class="affine-reference-popover-container">
          <div class="affine-reference-popover view">
            <icon-button
              size="24px"
              class="affine-reference-popover-open-button"
              @click=${this._openDoc}
              ?disabled=${this._openButtonDisabled}
            >
              ${OpenIcon}
              <affine-tooltip .offset=${12}>${'Open this doc'}</affine-tooltip>
            </icon-button>
            ${isPeekable(this.target)
                ? html `<icon-button
                  size="24px"
                  class="affine-reference-popover-open-button"
                  @click=${() => peek(this.target)}
                >
                  ${CenterPeekIcon}
                  <affine-tooltip .offset=${12}
                    >${'Open in center peek'}</affine-tooltip
                  >
                </icon-button>`
                : nothing}

            <span class="affine-reference-popover-dividing-line"></span>

            <div class="affine-reference-popover-view-selector">
              <icon-button
                size="24px"
                class="affine-reference-popover-view-selector-button link current-view"
                .hover=${false}
              >
                ${LinkIcon}
                <affine-tooltip .offset=${12}>${'Inline view'}</affine-tooltip>
              </icon-button>

              <icon-button
                size="24px"
                class="affine-reference-popover-view-selector-button embed card-view"
                .hover=${false}
                @click=${() => this._convertToCardView()}
              >
                ${BookmarkIcon}
                <affine-tooltip .offset=${12}>${'Card view'}</affine-tooltip>
              </icon-button>

              ${isSyncedDocEnabled
                ? html `
                    <icon-button
                      size="24px"
                      class="affine-reference-popover-view-selector-button embed embed-view"
                      .hover=${false}
                      @click=${() => this._convertToEmbedView()}
                      ?disabled=${this._embedViewButtonDisabled}
                    >
                      ${EmbedWebIcon}
                      <affine-tooltip .offset=${12}
                        >${'Embed view'}</affine-tooltip
                      >
                    </icon-button>
                  `
                : nothing}
            </div>

            <span class="affine-reference-popover-dividing-line"></span>

            <icon-button size="24px" @click=${() => this._toggleMoreMenu()}>
              ${MoreVerticalIcon}
              <affine-tooltip .offset=${12}>More</affine-tooltip>
            </icon-button>
          </div>
        </div>
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            this._moreMenuAbortController = null;
            this.#target_accessor_storage = __runInitializers(this, _target_initializers, void 0);
            this.#inlineEditor_accessor_storage = (__runInitializers(this, _target_extraInitializers), __runInitializers(this, _inlineEditor_initializers, void 0));
            this.#targetInlineRange_accessor_storage = (__runInitializers(this, _inlineEditor_extraInitializers), __runInitializers(this, _targetInlineRange_initializers, void 0));
            this.#docTitle_accessor_storage = (__runInitializers(this, _targetInlineRange_extraInitializers), __runInitializers(this, _docTitle_initializers, void 0));
            this.#abortController_accessor_storage = (__runInitializers(this, _docTitle_extraInitializers), __runInitializers(this, _abortController_initializers, void 0));
            this.#popupContainer_accessor_storage = (__runInitializers(this, _abortController_extraInitializers), __runInitializers(this, _popupContainer_initializers, void 0));
            __runInitializers(this, _popupContainer_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ReferencePopup = _classThis;
})();
export { ReferencePopup };
export function toggleReferencePopup(target, inlineEditor, targetInlineRange, docTitle, abortController) {
    const popup = new ReferencePopup();
    popup.target = target;
    popup.inlineEditor = inlineEditor;
    popup.targetInlineRange = targetInlineRange;
    popup.docTitle = docTitle;
    popup.abortController = abortController;
    document.body.append(popup);
    return popup;
}
//# sourceMappingURL=reference-popup.js.map