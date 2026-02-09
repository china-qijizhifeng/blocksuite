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
import '../../edgeless/components/buttons/tool-icon-button.js';
import '../../edgeless/components/buttons/menu-button.js';
import '../../edgeless/components/panel/card-style-panel.js';
import { WithDisposable } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { baseTheme } from '@toeverything/theme';
import { css, html, LitElement, nothing, unsafeCSS, } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { join } from 'lit/directives/join.js';
import { toggleEmbedCardEditModal } from '../../../_common/components/embed-card/modal/embed-card-edit-modal.js';
import { isPeekable, peek } from '../../../_common/components/index.js';
import { toast } from '../../../_common/components/toast.js';
import { EMBED_CARD_HEIGHT, EMBED_CARD_WIDTH, } from '../../../_common/consts.js';
import { BookmarkIcon, SmallArrowDownIcon, } from '../../../_common/icons/edgeless.js';
import { CaptionIcon, CenterPeekIcon, CopyIcon, EditIcon, EmbedEdgelessIcon, EmbedPageIcon, EmbedWebIcon, ExpandFullIcon, OpenIcon, PaletteIcon, } from '../../../_common/icons/text.js';
import { getEmbedCardIcons } from '../../../_common/utils/url.js';
import { BookmarkStyles } from '../../../bookmark-block/bookmark-model.js';
import { Bound } from '../../../surface-block/index.js';
import { renderMenuDivider } from '../../edgeless/components/buttons/menu-button.js';
import { isBookmarkBlock, isEmbedGithubBlock, isEmbedHtmlBlock, isEmbedLinkedDocBlock, isEmbedSyncedDocBlock, } from '../../edgeless/utils/query.js';
let EdgelessChangeEmbedCardButton = (() => {
    let _classDecorators = [customElement('edgeless-change-embed-card-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __embedScale_decorators;
    let __embedScale_initializers = [];
    let __embedScale_extraInitializers = [];
    let _model_decorators;
    let _model_initializers = [];
    let _model_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _quickConnectButton_decorators;
    let _quickConnectButton_initializers = [];
    let _quickConnectButton_extraInitializers = [];
    var EdgelessChangeEmbedCardButton = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_embedScale_accessor_storage = __runInitializers(this, __embedScale_initializers, 1);
            this._embedOptions = (__runInitializers(this, __embedScale_extraInitializers), null);
            this.#model_accessor_storage = __runInitializers(this, _model_initializers, void 0);
            this.#edgeless_accessor_storage = (__runInitializers(this, _model_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
            this.#quickConnectButton_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _quickConnectButton_initializers, void 0));
            this._open = (__runInitializers(this, _quickConnectButton_extraInitializers), () => {
                this._blockElement?.open();
            });
            this._peek = () => {
                if (!this._blockElement)
                    return;
                peek(this._blockElement);
            };
            this._copyUrl = () => {
                if (!('url' in this.model)) {
                    return;
                }
                navigator.clipboard.writeText(this.model.url).catch(console.error);
                toast(this.std.host, 'Copied link to clipboard');
                this.edgeless.service.selection.clear();
            };
            this._convertToCardView = () => {
                if (this._isCardView) {
                    return;
                }
                const block = this._blockElement;
                if (block && 'convertToCard' in block) {
                    block.convertToCard();
                    return;
                }
                if (!('url' in this.model)) {
                    return;
                }
                const { id, url, xywh, style, caption } = this.model;
                let targetFlavour = 'affine:bookmark', targetStyle = style;
                if (this._embedOptions && this._embedOptions.viewType === 'card') {
                    const { flavour, styles } = this._embedOptions;
                    targetFlavour = flavour;
                    targetStyle = styles.includes(style) ? style : styles[0];
                }
                else {
                    targetStyle = BookmarkStyles.includes(style) ? style : BookmarkStyles[0];
                }
                const bound = Bound.deserialize(xywh);
                bound.w = EMBED_CARD_WIDTH[targetStyle];
                bound.h = EMBED_CARD_HEIGHT[targetStyle];
                const newId = this.edgeless.service.addBlock(targetFlavour, { url, xywh: bound.serialize(), style: targetStyle, caption }, this.edgeless.surface.model);
                this.std.command.exec('reassociateConnectors', {
                    oldId: id,
                    newId,
                });
                this.edgeless.service.selection.set({
                    editing: false,
                    elements: [newId],
                });
                this._doc.deleteBlock(this.model);
            };
            this._convertToEmbedView = () => {
                if (this._isEmbedView) {
                    return;
                }
                const block = this._blockElement;
                if (block && 'convertToEmbed' in block) {
                    block.convertToEmbed();
                    return;
                }
                if (!('url' in this.model)) {
                    return;
                }
                if (!this._embedOptions)
                    return;
                const { flavour, styles } = this._embedOptions;
                const { id, url, xywh, style } = this.model;
                const targetStyle = styles.includes(style) ? style : styles[0];
                const bound = Bound.deserialize(xywh);
                bound.w = EMBED_CARD_WIDTH[targetStyle];
                bound.h = EMBED_CARD_HEIGHT[targetStyle];
                const newId = this.edgeless.service.addBlock(flavour, {
                    url,
                    xywh: bound.serialize(),
                    style: targetStyle,
                }, this.edgeless.surface.model);
                this.std.command.exec('reassociateConnectors', {
                    oldId: id,
                    newId,
                });
                this.edgeless.service.selection.set({
                    editing: false,
                    elements: [newId],
                });
                this._doc.deleteBlock(this.model);
            };
            this._getScale = () => {
                if (isEmbedSyncedDocBlock(this.model)) {
                    return this.model.scale ?? 1;
                }
                else if (isEmbedHtmlBlock(this.model)) {
                    return 1;
                }
                const bound = Bound.deserialize(this.model.xywh);
                return bound.h / EMBED_CARD_HEIGHT[this.model.style];
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __embedScale_decorators = [state()];
            _model_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            _quickConnectButton_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __embedScale_decorators, { kind: "accessor", name: "_embedScale", static: false, private: false, access: { has: obj => "_embedScale" in obj, get: obj => obj._embedScale, set: (obj, value) => { obj._embedScale = value; } }, metadata: _metadata }, __embedScale_initializers, __embedScale_extraInitializers);
            __esDecorate(this, null, _model_decorators, { kind: "accessor", name: "model", static: false, private: false, access: { has: obj => "model" in obj, get: obj => obj.model, set: (obj, value) => { obj.model = value; } }, metadata: _metadata }, _model_initializers, _model_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _quickConnectButton_decorators, { kind: "accessor", name: "quickConnectButton", static: false, private: false, access: { has: obj => "quickConnectButton" in obj, get: obj => obj.quickConnectButton, set: (obj, value) => { obj.quickConnectButton = value; } }, metadata: _metadata }, _quickConnectButton_initializers, _quickConnectButton_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessChangeEmbedCardButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get _doc() {
            return this.model.doc;
        }
        get std() {
            return this.edgeless.std;
        }
        get _rootService() {
            return this.std.spec.getService('affine:page');
        }
        get _blockElement() {
            const blockSelection = this.edgeless.service.selection.surfaceSelections.filter(sel => sel.elements.includes(this.model.id));
            if (blockSelection.length !== 1) {
                return;
            }
            const blockElement = this.std.view.getBlock(blockSelection[0].blockId);
            assertExists(blockElement);
            return blockElement;
        }
        get _canShowUrlOptions() {
            return ('url' in this.model &&
                (isBookmarkBlock(this.model) ||
                    isEmbedGithubBlock(this.model) ||
                    isEmbedLinkedDocBlock(this.model)));
        }
        get _canShowFullScreenButton() {
            return isEmbedHtmlBlock(this.model);
        }
        get _isCardView() {
            if (isBookmarkBlock(this.model) || isEmbedLinkedDocBlock(this.model)) {
                return true;
            }
            return this._embedOptions?.viewType === 'card';
        }
        get _isEmbedView() {
            return (!isBookmarkBlock(this.model) &&
                (isEmbedSyncedDocBlock(this.model) ||
                    this._embedOptions?.viewType === 'embed'));
        }
        get _canConvertToEmbedView() {
            const block = this._blockElement;
            // synced doc entry controlled by awareness flag
            if (!!block && isEmbedLinkedDocBlock(block.model)) {
                const isSyncedDocEnabled = block.doc.awarenessStore.getFlag('enable_synced_doc_block');
                if (!isSyncedDocEnabled) {
                    return false;
                }
            }
            return ((block && 'convertToEmbed' in block) ||
                this._embedOptions?.viewType === 'embed');
        }
        get _canShowCardStylePanel() {
            return (isBookmarkBlock(this.model) ||
                isEmbedGithubBlock(this.model) ||
                isEmbedLinkedDocBlock(this.model));
        }
        get _getCardStyleOptions() {
            const { EmbedCardHorizontalIcon, EmbedCardListIcon, EmbedCardVerticalIcon, EmbedCardCubeIcon, } = getEmbedCardIcons();
            return [
                {
                    style: 'horizontal',
                    Icon: EmbedCardHorizontalIcon,
                    tooltip: 'Large horizontal style',
                },
                {
                    style: 'list',
                    Icon: EmbedCardListIcon,
                    tooltip: 'Small horizontal style',
                },
                {
                    style: 'vertical',
                    Icon: EmbedCardVerticalIcon,
                    tooltip: 'Large vertical style',
                },
                {
                    style: 'cube',
                    Icon: EmbedCardCubeIcon,
                    tooltip: 'Small vertical style',
                },
            ];
        }
        get _pageIcon() {
            if (!isEmbedLinkedDocBlock(this.model) &&
                !isEmbedSyncedDocBlock(this.model)) {
                return nothing;
            }
            const block = this._blockElement;
            return block.editorMode === 'page' ? EmbedPageIcon : EmbedEdgelessIcon;
        }
        get _docTitle() {
            if (!isEmbedLinkedDocBlock(this.model) &&
                !isEmbedSyncedDocBlock(this.model)) {
                return '';
            }
            const block = this._blockElement;
            return block.docTitle;
        }
        get _embedViewButtonDisabled() {
            if (this._doc.readonly) {
                return true;
            }
            return (isEmbedLinkedDocBlock(this.model) &&
                (!!this._blockElement?.closest('affine-embed-synced-doc-block') ||
                    this.model.pageId === this._doc.id));
        }
        get _openButtonDisabled() {
            return (isEmbedLinkedDocBlock(this.model) && this.model.pageId === this._doc.id);
        }
        static { this.styles = css `
    .change-embed-card-button {
      width: 24px;
      height: 24px;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .change-embed-card-button svg {
      width: 20px;
      height: 20px;
    }

    .change-embed-card-button.url {
      display: flex;
      width: 180px;
      padding: var(--1, 0px);
      align-items: flex-start;
      gap: 10px;
      border-radius: var(--1, 0px);
      opacity: var(--add, 1);
      margin-right: 6px;
      user-select: none;
      cursor: pointer;
    }

    .change-embed-card-button.url > span {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      color: var(--affine-link-color);
      font-feature-settings:
        'clig' off,
        'liga' off;
      font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      text-overflow: ellipsis;
      overflow: hidden;
      opacity: var(--add, 1);
    }

    .change-embed-card-button.doc-info {
      display: flex;
      align-items: center;
      width: max-content;
      max-width: 180px;
      padding: var(--1, 0px);

      gap: 4px;
      border-radius: var(--1, 0px);
      opacity: var(--add, 1);
      user-select: none;
      cursor: pointer;
    }

    .change-embed-card-button.doc-info > svg {
      width: 20px;
      height: 20px;
      flex-shrink: 0;
    }

    .change-embed-card-button.doc-info > span {
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;

      color: var(--affine-text-primary-color);
      font-feature-settings:
        'clig' off,
        'liga' off;
      word-break: break-all;
      font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      text-overflow: ellipsis;
      overflow: hidden;
      opacity: var(--add, 1);
    }

    .change-embed-card-view-style {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .change-embed-card-button-view-selector {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 2px;
      border-radius: 6px;
      background: var(--affine-hover-color);
    }
    .change-embed-card-button-view-selector .change-embed-card-button {
      width: 24px;
      height: 24px;
    }
    .change-embed-card-button-view-selector > icon-button {
      padding: 0px;
    }
    .change-embed-card-button-view-selector .current-view {
      background: var(--affine-background-overlay-panel-color);
      border-radius: 6px;
    }

    .embed-scale-button {
      display: flex;
      align-items: center;
      border-radius: 4px;
      background-color: var(--affine-hover-color);
      gap: 2px;
      line-height: 24px;
    }
  `; }
        #_embedScale_accessor_storage;
        get _embedScale() { return this.#_embedScale_accessor_storage; }
        set _embedScale(value) { this.#_embedScale_accessor_storage = value; }
        #model_accessor_storage;
        get model() { return this.#model_accessor_storage; }
        set model(value) { this.#model_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #quickConnectButton_accessor_storage;
        get quickConnectButton() { return this.#quickConnectButton_accessor_storage; }
        set quickConnectButton(value) { this.#quickConnectButton_accessor_storage = value; }
        _showCaption() {
            this._blockElement?.captionEditor.show();
        }
        _setCardStyle(style) {
            const bounds = Bound.deserialize(this.model.xywh);
            bounds.w = EMBED_CARD_WIDTH[style];
            bounds.h = EMBED_CARD_HEIGHT[style];
            const xywh = bounds.serialize();
            this.model.doc.updateBlock(this.model, { style, xywh });
        }
        _setEmbedScale(scale) {
            if (isEmbedHtmlBlock(this.model))
                return;
            const bound = Bound.deserialize(this.model.xywh);
            if (isEmbedSyncedDocBlock(this.model)) {
                const oldScale = this.model.scale ?? 1;
                const ratio = scale / oldScale;
                bound.w *= ratio;
                bound.h *= ratio;
                const xywh = bound.serialize();
                this.model.doc.updateBlock(this.model, { scale, xywh });
            }
            else {
                bound.h = EMBED_CARD_HEIGHT[this.model.style] * scale;
                bound.w = EMBED_CARD_WIDTH[this.model.style] * scale;
                const xywh = bound.serialize();
                this.model.doc.updateBlock(this.model, { xywh });
            }
            this._embedScale = scale;
        }
        connectedCallback() {
            super.connectedCallback();
            this._embedScale = this._getScale();
        }
        render() {
            const model = this.model;
            if ('url' in this.model) {
                this._embedOptions = this._rootService.getEmbedBlockOptions(this.model.url);
            }
            const buttons = [
                this._canShowUrlOptions && 'url' in model
                    ? html `
            <div class="change-embed-card-button url" @click=${this._copyUrl}>
              <span>${model.url}</span>
            </div>

            <edgeless-tool-icon-button
              arai-label="Click to copy link"
              .tooltip=${'Click to copy link'}
              class="change-embed-card-button copy"
              ?disabled=${this._doc.readonly}
              @click=${this._copyUrl}
            >
              ${CopyIcon}
            </edgeless-tool-icon-button>

            <edgeless-tool-icon-button
              arai-label="Edit"
              .tooltip=${'Edit'}
              class="change-embed-card-button edit"
              ?disabled=${this._doc.readonly}
              @click=${() => toggleEmbedCardEditModal(this.std.host, model)}
            >
              ${EditIcon}
            </edgeless-tool-icon-button>
          `
                    : nothing,
                isEmbedSyncedDocBlock(model)
                    ? html `
            <div class="change-embed-card-button doc-info" @click=${this._open}>
              ${this._pageIcon}
              <span>${this._docTitle}</span>
            </div>
          `
                    : nothing,
                isEmbedSyncedDocBlock(model) || isEmbedLinkedDocBlock(model)
                    ? html `
            <edgeless-tool-icon-button
              arai-label="Open"
              .tooltip=${'Open this doc'}
              class="change-embed-card-button open"
              @click=${this._open}
              .disabled=${this._openButtonDisabled}
            >
              ${OpenIcon}
            </edgeless-tool-icon-button>
          `
                    : nothing,
                this._blockElement && isPeekable(this._blockElement)
                    ? html `
            <edgeless-tool-icon-button
              arai-label="Center peek"
              .tooltip=${'Open in center peek'}
              class="change-embed-card-button center-peek"
              @click=${this._peek}
            >
              ${CenterPeekIcon}
            </edgeless-tool-icon-button>
          `
                    : nothing,
                this._canShowFullScreenButton
                    ? html `
            <edgeless-tool-icon-button
              arai-label="Full screen"
              .tooltip=${'Full screen'}
              class="change-embed-card-button expand"
              @click=${this._open}
            >
              ${ExpandFullIcon}
            </edgeless-tool-icon-button>
          `
                    : nothing,
                this._canConvertToEmbedView || this._isEmbedView
                    ? html `
            <div class="change-embed-card-view-style">
              <div class="change-embed-card-button-view-selector">
                <edgeless-tool-icon-button
                  class=${classMap({
                        'change-embed-card-button': true,
                        card: true,
                        'current-view': this._isCardView,
                    })}
                  arai-label="Card view"
                  .tooltip=${'Card view'}
                  ?disabled=${this._doc.readonly}
                  .hover=${false}
                  @click=${this._convertToCardView}
                >
                  ${BookmarkIcon}
                </edgeless-tool-icon-button>

                <edgeless-tool-icon-button
                  class=${classMap({
                        'change-embed-card-button': true,
                        embed: true,
                        'current-view': this._isEmbedView,
                    })}
                  arai-label="Embed view"
                  .tooltip=${'Embed view'}
                  .disabled=${this._embedViewButtonDisabled}
                  .hover=${false}
                  @click=${this._convertToEmbedView}
                >
                  ${EmbedWebIcon}
                </edgeless-tool-icon-button>
              </div>
            </div>
          `
                    : nothing,
                'style' in model && this._canShowCardStylePanel
                    ? html `
            <edgeless-menu-button
              .contentPadding=${'8px'}
              .button=${html `
                <edgeless-tool-icon-button
                  aria-label="Card style"
                  .tooltip=${'Card style'}
                >
                  ${PaletteIcon}
                </edgeless-tool-icon-button>
              `}
            >
              <card-style-panel
                slot
                .value=${model.style}
                .options=${this._getCardStyleOptions}
                .onSelect=${(value) => this._setCardStyle(value)}
              >
              </card-style-panel>
            </edgeless-menu-button>
          `
                    : nothing,
                html `
        <edgeless-tool-icon-button
          arai-label="Add caption"
          .tooltip=${'Add caption'}
          class="change-embed-card-button caption"
          ?disabled=${this._doc.readonly}
          @click=${this._showCaption}
        >
          ${CaptionIcon}
        </edgeless-tool-icon-button>
      `,
                this.quickConnectButton,
                isEmbedHtmlBlock(model)
                    ? nothing
                    : html `
            <edgeless-menu-button
              .contentPadding=${'8px'}
              .button=${html `
                <edgeless-tool-icon-button
                  aria-label="Scale"
                  .tooltip=${'Scale'}
                  .justify=${'space-between'}
                  .iconContainerWidth=${'65px'}
                  .labelHeight=${'20px'}
                >
                  <span class="label ellipsis">
                    ${Math.round(this._embedScale * 100) + '%'}
                  </span>
                  ${SmallArrowDownIcon}
                </edgeless-tool-icon-button>
              `}
            >
              <edgeless-scale-panel
                slot
                class="embed-scale-popper"
                .scale=${Math.round(this._embedScale * 100)}
                .onSelect=${(scale) => this._setEmbedScale(scale)}
              ></edgeless-scale-panel>
            </edgeless-menu-button>
          `,
            ];
            return join(buttons.filter(button => button !== nothing), renderMenuDivider);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessChangeEmbedCardButton = _classThis;
})();
export { EdgelessChangeEmbedCardButton };
export function renderEmbedButton(edgeless, models, quickConnectButton) {
    if (models?.length !== 1)
        return nothing;
    return html `
    <edgeless-change-embed-card-button
      .model=${models[0]}
      .edgeless=${edgeless}
      .quickConnectButton=${quickConnectButton?.pop() ?? nothing}
    ></edgeless-change-embed-card-button>
  `;
}
//# sourceMappingURL=change-embed-card-button.js.map