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
import { WidgetElement } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { DocCollection } from '@blocksuite/store';
import { autoUpdate, computePosition, flip, offset, } from '@floating-ui/dom';
import { html, nothing } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { EmbedCardMoreMenu } from '../../../_common/components/embed-card/embed-card-more-menu-popper.js';
import { EmbedCardStyleMenu } from '../../../_common/components/embed-card/embed-card-style-popper.js';
import { toggleEmbedCardCaptionEditModal } from '../../../_common/components/embed-card/modal/embed-card-caption-edit-modal.js';
import { toggleEmbedCardEditModal } from '../../../_common/components/embed-card/modal/embed-card-edit-modal.js';
import { isEmbedCardBlockElement, } from '../../../_common/components/embed-card/type.js';
import { isPeekable, peek } from '../../../_common/components/index.js';
import { createLitPortal } from '../../../_common/components/portal.js';
import { toast } from '../../../_common/components/toast.js';
import { BookmarkIcon, MoreVerticalIcon, } from '../../../_common/icons/edgeless.js';
import { CaptionIcon, CenterPeekIcon, CopyIcon, EditIcon, EmbedEdgelessIcon, EmbedPageIcon, EmbedWebIcon, LinkIcon, OpenIcon, PaletteIcon, } from '../../../_common/icons/text.js';
import { getBlockComponentByPath, getModelByBlockComponent, } from '../../../_common/utils/query.js';
import { BookmarkStyles, } from '../../../bookmark-block/bookmark-model.js';
import { isBookmarkBlock, isEmbedGithubBlock, isEmbedLinkedDocBlock, isEmbedSyncedDocBlock, } from '../../edgeless/utils/query.js';
import { RootBlockModel } from '../../root-model.js';
import { embedCardToolbarStyle } from './styles.js';
export const AFFINE_EMBED_CARD_TOOLBAR_WIDGET = 'affine-embed-card-toolbar';
let EmbedCardToolbar = (() => {
    let _classDecorators = [customElement(AFFINE_EMBED_CARD_TOOLBAR_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetElement;
    let _embedCardToolbarElement_decorators;
    let _embedCardToolbarElement_initializers = [];
    let _embedCardToolbarElement_extraInitializers = [];
    let _cardStyleButton_decorators;
    let _cardStyleButton_initializers = [];
    let _cardStyleButton_extraInitializers = [];
    let _moreButton_decorators;
    let _moreButton_initializers = [];
    let _moreButton_extraInitializers = [];
    let _hide_decorators;
    let _hide_initializers = [];
    let _hide_extraInitializers = [];
    var EmbedCardToolbar = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._abortController = new AbortController();
            this._cardStyleMenuAbortController = null;
            this._moreMenuAbortController = null;
            this._embedOptions = null;
            this.#embedCardToolbarElement_accessor_storage = __runInitializers(this, _embedCardToolbarElement_initializers, void 0);
            this.#cardStyleButton_accessor_storage = (__runInitializers(this, _embedCardToolbarElement_extraInitializers), __runInitializers(this, _cardStyleButton_initializers, null));
            this.#moreButton_accessor_storage = (__runInitializers(this, _cardStyleButton_extraInitializers), __runInitializers(this, _moreButton_initializers, null));
            this.#hide_accessor_storage = (__runInitializers(this, _moreButton_extraInitializers), __runInitializers(this, _hide_initializers, true));
            this._resetAbortController = (__runInitializers(this, _hide_extraInitializers), () => {
                this._abortController.abort();
                this._abortController = new AbortController();
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _embedCardToolbarElement_decorators = [query('.embed-card-toolbar')];
            _cardStyleButton_decorators = [query('.embed-card-toolbar-button.card-style')];
            _moreButton_decorators = [query('.embed-card-toolbar-button.more-button')];
            _hide_decorators = [state()];
            __esDecorate(this, null, _embedCardToolbarElement_decorators, { kind: "accessor", name: "embedCardToolbarElement", static: false, private: false, access: { has: obj => "embedCardToolbarElement" in obj, get: obj => obj.embedCardToolbarElement, set: (obj, value) => { obj.embedCardToolbarElement = value; } }, metadata: _metadata }, _embedCardToolbarElement_initializers, _embedCardToolbarElement_extraInitializers);
            __esDecorate(this, null, _cardStyleButton_decorators, { kind: "accessor", name: "cardStyleButton", static: false, private: false, access: { has: obj => "cardStyleButton" in obj, get: obj => obj.cardStyleButton, set: (obj, value) => { obj.cardStyleButton = value; } }, metadata: _metadata }, _cardStyleButton_initializers, _cardStyleButton_extraInitializers);
            __esDecorate(this, null, _moreButton_decorators, { kind: "accessor", name: "moreButton", static: false, private: false, access: { has: obj => "moreButton" in obj, get: obj => obj.moreButton, set: (obj, value) => { obj.moreButton = value; } }, metadata: _metadata }, _moreButton_initializers, _moreButton_extraInitializers);
            __esDecorate(this, null, _hide_decorators, { kind: "accessor", name: "hide", static: false, private: false, access: { has: obj => "hide" in obj, get: obj => obj.hide, set: (obj, value) => { obj.hide = value; } }, metadata: _metadata }, _hide_initializers, _hide_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EmbedCardToolbar = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get _selection() {
            return this.host.selection;
        }
        get _rootService() {
            return this.std.spec.getService('affine:page');
        }
        get _canShowUrlOptions() {
            return 'url' in this.model && this._isCardView;
        }
        get _isCardView() {
            return (isBookmarkBlock(this.model) ||
                isEmbedLinkedDocBlock(this.model) ||
                this._embedOptions?.viewType === 'card');
        }
        get _isEmbedView() {
            return (!isBookmarkBlock(this.model) &&
                (isEmbedSyncedDocBlock(this.model) ||
                    this._embedOptions?.viewType === 'embed'));
        }
        get _canConvertToEmbedView() {
            // synced doc entry controlled by awareness flag
            if (isEmbedLinkedDocBlock(this.model)) {
                const isSyncedDocEnabled = this.model.doc.awarenessStore.getFlag('enable_synced_doc_block');
                if (!isSyncedDocEnabled) {
                    return false;
                }
            }
            return ('convertToEmbed' in this.blockElement ||
                this._embedOptions?.viewType === 'embed');
        }
        get _embedViewButtonDisabled() {
            if (this.model.doc.readonly) {
                return true;
            }
            return (isEmbedLinkedDocBlock(this.model) &&
                (!!this.blockElement.closest('affine-embed-synced-doc-block') ||
                    this.model.pageId === this.doc.id));
        }
        get _openButtonDisabled() {
            return (isEmbedLinkedDocBlock(this.model) && this.model.pageId === this.doc.id);
        }
        get _pageIcon() {
            if (!isEmbedLinkedDocBlock(this.model) &&
                !isEmbedSyncedDocBlock(this.model)) {
                return nothing;
            }
            const block = this.blockElement;
            return block.editorMode === 'page' ? EmbedPageIcon : EmbedEdgelessIcon;
        }
        get _docTitle() {
            if (!isEmbedLinkedDocBlock(this.model) &&
                !isEmbedSyncedDocBlock(this.model)) {
                return '';
            }
            const block = this.blockElement;
            return block.docTitle;
        }
        static { this.styles = embedCardToolbarStyle; }
        #embedCardToolbarElement_accessor_storage;
        get embedCardToolbarElement() { return this.#embedCardToolbarElement_accessor_storage; }
        set embedCardToolbarElement(value) { this.#embedCardToolbarElement_accessor_storage = value; }
        #cardStyleButton_accessor_storage;
        get cardStyleButton() { return this.#cardStyleButton_accessor_storage; }
        set cardStyleButton(value) { this.#cardStyleButton_accessor_storage = value; }
        #moreButton_accessor_storage;
        get moreButton() { return this.#moreButton_accessor_storage; }
        set moreButton(value) { this.#moreButton_accessor_storage = value; }
        #hide_accessor_storage;
        get hide() { return this.#hide_accessor_storage; }
        set hide(value) { this.#hide_accessor_storage = value; }
        _show() {
            this.hide = false;
            this._abortController.signal.addEventListener('abort', autoUpdate(this.blockElement, this, () => {
                computePosition(this.blockElement, this, {
                    placement: 'top-start',
                    middleware: [flip(), offset(8)],
                })
                    .then(({ x, y }) => {
                    this.style.left = `${x}px`;
                    this.style.top = `${y}px`;
                })
                    .catch(console.error);
            }));
        }
        _hide() {
            this._resetAbortController();
            this.hide = true;
        }
        _canShowCardStylePanel(model) {
            return (isBookmarkBlock(model) ||
                isEmbedGithubBlock(model) ||
                isEmbedLinkedDocBlock(model));
        }
        _copyUrl() {
            if (!('url' in this.model)) {
                return;
            }
            navigator.clipboard.writeText(this.model.url).catch(console.error);
            toast(this.host, 'Copied link to clipboard');
        }
        _turnIntoInlineView() {
            if ('covertToInline' in this.blockElement) {
                this.blockElement.covertToInline();
                return;
            }
            if (!('url' in this.model)) {
                return;
            }
            const { doc } = this.model;
            const parent = doc.getParent(this.model);
            const index = parent?.children.indexOf(this.model);
            const yText = new DocCollection.Y.Text();
            const insert = this.model.title || this.model.caption || this.model.url;
            yText.insert(0, insert);
            yText.format(0, insert.length, { link: this.model.url });
            const text = new doc.Text(yText);
            doc.addBlock('affine:paragraph', {
                text,
            }, parent, index);
            doc.deleteBlock(this.model);
        }
        _convertToCardView() {
            if (this._isCardView) {
                return;
            }
            if ('convertToCard' in this.blockElement) {
                this.blockElement.convertToCard();
                return;
            }
            if (!('url' in this.model)) {
                return;
            }
            const { doc, url, style, caption } = this.model;
            let targetFlavour = 'affine:bookmark', targetStyle = style;
            if (this._embedOptions && this._embedOptions.viewType === 'card') {
                const { flavour, styles } = this._embedOptions;
                targetFlavour = flavour;
                targetStyle = styles.includes(style) ? style : styles[0];
            }
            else {
                targetStyle = BookmarkStyles.includes(style)
                    ? style
                    : BookmarkStyles.filter(style => style !== 'vertical' && style !== 'cube')[0];
            }
            const parent = doc.getParent(this.model);
            assertExists(parent);
            const index = parent.children.indexOf(this.model);
            doc.addBlock(targetFlavour, { url, style: targetStyle, caption }, parent, index);
            this.std.selection.setGroup('note', []);
            doc.deleteBlock(this.model);
        }
        _convertToEmbedView() {
            if (this._isEmbedView) {
                return;
            }
            if ('convertToEmbed' in this.blockElement) {
                this.blockElement.convertToEmbed();
                return;
            }
            if (!('url' in this.model)) {
                return;
            }
            const { doc, url, style, caption } = this.model;
            if (!this._embedOptions || this._embedOptions.viewType !== 'embed') {
                return;
            }
            const { flavour, styles } = this._embedOptions;
            const targetStyle = styles.includes(style)
                ? style
                : styles.filter(style => style !== 'vertical' && style !== 'cube')[0];
            const parent = doc.getParent(this.model);
            assertExists(parent);
            const index = parent.children.indexOf(this.model);
            doc.addBlock(flavour, { url, style: targetStyle, caption }, parent, index);
            this.std.selection.setGroup('note', []);
            doc.deleteBlock(this.model);
        }
        _showCaption() {
            try {
                this.blockElement.captionEditor.show();
            }
            catch (_) {
                toggleEmbedCardCaptionEditModal(this.blockElement);
            }
            this._resetAbortController();
        }
        _createMenu(referenceElement, menu, placement, offsetValue = 0) {
            createLitPortal({
                template: menu,
                container: this.embedCardToolbarElement,
                computePosition: {
                    referenceElement,
                    placement,
                    middleware: [flip(), offset(offsetValue)],
                    autoUpdate: true,
                },
                abortController: menu.abortController,
                closeOnClickAway: true,
            });
        }
        _toggleCardStyleMenu() {
            this._moreMenuAbortController?.abort();
            if (this._cardStyleMenuAbortController &&
                !this._cardStyleMenuAbortController.signal.aborted) {
                this._cardStyleMenuAbortController.abort();
                return;
            }
            this._cardStyleMenuAbortController = new AbortController();
            if (!this._canShowCardStylePanel(this.model)) {
                return;
            }
            const embedCardStyleMenu = new EmbedCardStyleMenu();
            embedCardStyleMenu.model = this.model;
            embedCardStyleMenu.abortController = this._cardStyleMenuAbortController;
            assertExists(this.cardStyleButton);
            this._createMenu(this.cardStyleButton, embedCardStyleMenu, 'top', 4);
        }
        _toggleMoreMenu() {
            this._cardStyleMenuAbortController?.abort();
            // Abort the previous menu if it's not aborted
            if (this._moreMenuAbortController &&
                !this._moreMenuAbortController.signal.aborted) {
                this._moreMenuAbortController.abort();
                return;
            }
            this._moreMenuAbortController = new AbortController();
            const embedCardMoreMenu = new EmbedCardMoreMenu();
            embedCardMoreMenu.block = this.blockElement;
            embedCardMoreMenu.abortController = this._moreMenuAbortController;
            assertExists(this.moreButton);
            this._createMenu(this.embedCardToolbarElement, embedCardMoreMenu, 'top-end');
        }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.add(this._selection.slots.changed.on(() => {
                const hasTextSelection = this._selection.find('text');
                if (hasTextSelection) {
                    this._hide();
                    return;
                }
                const blockSelections = this._selection.filter('block');
                if (!blockSelections || blockSelections.length !== 1) {
                    this._hide();
                    return;
                }
                const block = getBlockComponentByPath(this.host, blockSelections[0].blockId);
                if (!block || !isEmbedCardBlockElement(block)) {
                    this._hide();
                    return;
                }
                this.blockElement = block;
                this.model = getModelByBlockComponent(block);
                this._show();
            }));
        }
        willUpdate(changedProperties) {
            // avoid no selection change on the first update so that `this.model` will be root block model
            if (!this.hasUpdated)
                return;
            // `this.model` is only controlled by selection changed event
            if (changedProperties.has('model')) {
                const previousModel = changedProperties.get('model');
                assertExists(previousModel);
                if (this.model instanceof RootBlockModel) {
                    this.model = previousModel;
                }
            }
        }
        render() {
            if (this.hide)
                return nothing;
            const model = this.model;
            this._embedOptions =
                'url' in model ? this._rootService.getEmbedBlockOptions(model.url) : null;
            return html `
      <div
        class="embed-card-toolbar"
        @pointerdown=${(e) => e.stopPropagation()}
        @click=${(e) => e.stopPropagation()}
        @dblclick=${(e) => e.stopPropagation()}
      >
        ${this._canShowUrlOptions && 'url' in model
                ? html `
              <div
                class="embed-card-toolbar-button url"
                @click=${() => this._copyUrl()}
              >
                <span>${model.url}</span>
              </div>

              <icon-button
                size="24px"
                class="embed-card-toolbar-button copy"
                ?disabled=${model.doc.readonly}
                @click=${() => this._copyUrl()}
              >
                ${CopyIcon}
                <affine-tooltip .offset=${12}
                  >${'Click to copy link'}</affine-tooltip
                >
              </icon-button>

              <icon-button
                size="24px"
                class="embed-card-toolbar-button edit"
                ?disabled=${model.doc.readonly}
                @click=${() => toggleEmbedCardEditModal(this.host, model)}
              >
                ${EditIcon}
                <affine-tooltip .offset=${12}>${'Edit'}</affine-tooltip>
              </icon-button>

              <div class="divider"></div>
            `
                : nothing}
        ${isEmbedLinkedDocBlock(model) || isEmbedSyncedDocBlock(model)
                ? html `
              <icon-button
                size="24px"
                class="embed-card-toolbar-button doc-info"
                @click=${() => this.blockElement.open()}
                ?disabled=${this._openButtonDisabled}
              >
                ${isEmbedLinkedDocBlock(model)
                    ? nothing
                    : html `${this._pageIcon} <span>${this._docTitle}</span>`}
                ${OpenIcon}
                <affine-tooltip .offset=${12}
                  >${'Open this doc'}</affine-tooltip
                >
              </icon-button>

              <div class="divider"></div>
            `
                : nothing}
        ${isPeekable(this.blockElement)
                ? html `<icon-button
                size="24px"
                class="embed-card-toolbar-button peek"
                @click=${() => peek(this.blockElement)}
              >
                ${CenterPeekIcon}
                <affine-tooltip .offset=${12}
                  >${'Open in center peek'}</affine-tooltip
                >
              </icon-button>
              <div class="divider"></div>`
                : nothing}
        <div class="embed-card-toolbar-button view-selector">
          <icon-button
            size="24px"
            class="embed-card-toolbar-button link"
            .hover=${false}
            ?disabled=${model.doc.readonly}
            @click=${() => this._turnIntoInlineView()}
          >
            ${LinkIcon}
            <affine-tooltip .offset=${12}>${'Inline view'}</affine-tooltip>
          </icon-button>

          <icon-button
            size="24px"
            class=${classMap({
                'embed-card-toolbar-button': true,
                card: true,
                'current-view': this._isCardView,
            })}
            .hover=${false}
            ?disabled=${model.doc.readonly}
            @click=${() => this._convertToCardView()}
          >
            ${BookmarkIcon}
            <affine-tooltip .offset=${12}>${'Card view'}</affine-tooltip>
          </icon-button>

          ${this._canConvertToEmbedView || this._isEmbedView
                ? html `
                <icon-button
                  size="24px"
                  class=${classMap({
                    'embed-card-toolbar-button': true,
                    embed: true,
                    'current-view': this._isEmbedView,
                })}
                  .hover=${false}
                  ?disabled=${this._embedViewButtonDisabled}
                  @click=${() => this._convertToEmbedView()}
                >
                  ${EmbedWebIcon}
                  <affine-tooltip .offset=${12}>${'Embed view'}</affine-tooltip>
                </icon-button>
              `
                : nothing}
        </div>

        ${this._canShowCardStylePanel(model)
                ? html `
              <icon-button
                size="24px"
                class="embed-card-toolbar-button card-style"
                ?disabled=${model.doc.readonly}
                @click=${() => this._toggleCardStyleMenu()}
              >
                ${PaletteIcon}
                <affine-tooltip .offset=${12}>${'Card style'}</affine-tooltip>
              </icon-button>
            `
                : nothing}

        <div class="divider"></div>

        <icon-button
          size="24px"
          class="embed-card-toolbar-button caption"
          ?disabled=${model.doc.readonly}
          @click=${() => this._showCaption()}
        >
          ${CaptionIcon}
          <affine-tooltip .offset=${12}>${'Add Caption'}</affine-tooltip>
        </icon-button>

        <div class="divider"></div>

        <icon-button
          size="24px"
          class="embed-card-toolbar-button more-button"
          @click=${() => this._toggleMoreMenu()}
        >
          ${MoreVerticalIcon}
          <affine-tooltip .offset=${12}>More</affine-tooltip>
        </icon-button>
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EmbedCardToolbar = _classThis;
})();
export { EmbedCardToolbar };
//# sourceMappingURL=embed-card-toolbar.js.map