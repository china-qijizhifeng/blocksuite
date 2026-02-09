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
import { html, nothing } from 'lit';
import { customElement, property, queryAsync } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { renderLinkedDocInCard } from '../../_common/utils/render-linked-doc.js';
import { cardStyles } from '../styles.js';
import { getSyncedDocIcons } from '../utils.js';
let EmbedSyncedDocCard = (() => {
    let _classDecorators = [customElement('affine-embed-synced-doc-card')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _block_decorators;
    let _block_initializers = [];
    let _block_extraInitializers = [];
    let _isError_decorators;
    let _isError_initializers = [];
    let _isError_extraInitializers = [];
    let _isNoteContentEmpty_decorators;
    let _isNoteContentEmpty_initializers = [];
    let _isNoteContentEmpty_extraInitializers = [];
    let _isBannerEmpty_decorators;
    let _isBannerEmpty_initializers = [];
    let _isBannerEmpty_extraInitializers = [];
    let _surfaceRefService_decorators;
    let _surfaceRefService_initializers = [];
    let _surfaceRefService_extraInitializers = [];
    let _surfaceRefRenderer_decorators;
    let _surfaceRefRenderer_initializers = [];
    let _surfaceRefRenderer_extraInitializers = [];
    let _bannerContainer_decorators;
    let _bannerContainer_initializers = [];
    let _bannerContainer_extraInitializers = [];
    let _noteContainer_decorators;
    let _noteContainer_initializers = [];
    let _noteContainer_extraInitializers = [];
    var EmbedSyncedDocCard = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#block_accessor_storage = __runInitializers(this, _block_initializers, void 0);
            this.#isError_accessor_storage = (__runInitializers(this, _block_extraInitializers), __runInitializers(this, _isError_initializers, false));
            this.#isNoteContentEmpty_accessor_storage = (__runInitializers(this, _isError_extraInitializers), __runInitializers(this, _isNoteContentEmpty_initializers, false));
            this.#isBannerEmpty_accessor_storage = (__runInitializers(this, _isNoteContentEmpty_extraInitializers), __runInitializers(this, _isBannerEmpty_initializers, false));
            this.#surfaceRefService_accessor_storage = (__runInitializers(this, _isBannerEmpty_extraInitializers), __runInitializers(this, _surfaceRefService_initializers, void 0));
            this.#surfaceRefRenderer_accessor_storage = (__runInitializers(this, _surfaceRefService_extraInitializers), __runInitializers(this, _surfaceRefRenderer_initializers, null));
            this.#bannerContainer_accessor_storage = (__runInitializers(this, _surfaceRefRenderer_extraInitializers), __runInitializers(this, _bannerContainer_initializers, void 0));
            this.#noteContainer_accessor_storage = (__runInitializers(this, _bannerContainer_extraInitializers), __runInitializers(this, _noteContainer_initializers, void 0));
            this.cleanUpSurfaceRefRenderer = (__runInitializers(this, _noteContainer_extraInitializers), () => {
                if (this.surfaceRefRenderer) {
                    this.surfaceRefService.removeRenderer(this.surfaceRefRenderer.id);
                }
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _block_decorators = [property({ attribute: false })];
            _isError_decorators = [property({ attribute: false })];
            _isNoteContentEmpty_decorators = [property({ attribute: false })];
            _isBannerEmpty_decorators = [property({ attribute: false })];
            _surfaceRefService_decorators = [property({ attribute: false })];
            _surfaceRefRenderer_decorators = [property({ attribute: false })];
            _bannerContainer_decorators = [queryAsync('.affine-embed-synced-doc-card-banner.render')];
            _noteContainer_decorators = [queryAsync('.affine-embed-synced-doc-content-note.render')];
            __esDecorate(this, null, _block_decorators, { kind: "accessor", name: "block", static: false, private: false, access: { has: obj => "block" in obj, get: obj => obj.block, set: (obj, value) => { obj.block = value; } }, metadata: _metadata }, _block_initializers, _block_extraInitializers);
            __esDecorate(this, null, _isError_decorators, { kind: "accessor", name: "isError", static: false, private: false, access: { has: obj => "isError" in obj, get: obj => obj.isError, set: (obj, value) => { obj.isError = value; } }, metadata: _metadata }, _isError_initializers, _isError_extraInitializers);
            __esDecorate(this, null, _isNoteContentEmpty_decorators, { kind: "accessor", name: "isNoteContentEmpty", static: false, private: false, access: { has: obj => "isNoteContentEmpty" in obj, get: obj => obj.isNoteContentEmpty, set: (obj, value) => { obj.isNoteContentEmpty = value; } }, metadata: _metadata }, _isNoteContentEmpty_initializers, _isNoteContentEmpty_extraInitializers);
            __esDecorate(this, null, _isBannerEmpty_decorators, { kind: "accessor", name: "isBannerEmpty", static: false, private: false, access: { has: obj => "isBannerEmpty" in obj, get: obj => obj.isBannerEmpty, set: (obj, value) => { obj.isBannerEmpty = value; } }, metadata: _metadata }, _isBannerEmpty_initializers, _isBannerEmpty_extraInitializers);
            __esDecorate(this, null, _surfaceRefService_decorators, { kind: "accessor", name: "surfaceRefService", static: false, private: false, access: { has: obj => "surfaceRefService" in obj, get: obj => obj.surfaceRefService, set: (obj, value) => { obj.surfaceRefService = value; } }, metadata: _metadata }, _surfaceRefService_initializers, _surfaceRefService_extraInitializers);
            __esDecorate(this, null, _surfaceRefRenderer_decorators, { kind: "accessor", name: "surfaceRefRenderer", static: false, private: false, access: { has: obj => "surfaceRefRenderer" in obj, get: obj => obj.surfaceRefRenderer, set: (obj, value) => { obj.surfaceRefRenderer = value; } }, metadata: _metadata }, _surfaceRefRenderer_initializers, _surfaceRefRenderer_extraInitializers);
            __esDecorate(this, null, _bannerContainer_decorators, { kind: "accessor", name: "bannerContainer", static: false, private: false, access: { has: obj => "bannerContainer" in obj, get: obj => obj.bannerContainer, set: (obj, value) => { obj.bannerContainer = value; } }, metadata: _metadata }, _bannerContainer_initializers, _bannerContainer_extraInitializers);
            __esDecorate(this, null, _noteContainer_decorators, { kind: "accessor", name: "noteContainer", static: false, private: false, access: { has: obj => "noteContainer" in obj, get: obj => obj.noteContainer, set: (obj, value) => { obj.noteContainer = value; } }, metadata: _metadata }, _noteContainer_initializers, _noteContainer_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EmbedSyncedDocCard = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = cardStyles; }
        #block_accessor_storage;
        get block() { return this.#block_accessor_storage; }
        set block(value) { this.#block_accessor_storage = value; }
        #isError_accessor_storage;
        get isError() { return this.#isError_accessor_storage; }
        set isError(value) { this.#isError_accessor_storage = value; }
        #isNoteContentEmpty_accessor_storage;
        get isNoteContentEmpty() { return this.#isNoteContentEmpty_accessor_storage; }
        set isNoteContentEmpty(value) { this.#isNoteContentEmpty_accessor_storage = value; }
        #isBannerEmpty_accessor_storage;
        get isBannerEmpty() { return this.#isBannerEmpty_accessor_storage; }
        set isBannerEmpty(value) { this.#isBannerEmpty_accessor_storage = value; }
        #surfaceRefService_accessor_storage;
        get surfaceRefService() { return this.#surfaceRefService_accessor_storage; }
        set surfaceRefService(value) { this.#surfaceRefService_accessor_storage = value; }
        #surfaceRefRenderer_accessor_storage;
        get surfaceRefRenderer() { return this.#surfaceRefRenderer_accessor_storage; }
        set surfaceRefRenderer(value) { this.#surfaceRefRenderer_accessor_storage = value; }
        #bannerContainer_accessor_storage;
        get bannerContainer() { return this.#bannerContainer_accessor_storage; }
        set bannerContainer(value) { this.#bannerContainer_accessor_storage = value; }
        #noteContainer_accessor_storage;
        get noteContainer() { return this.#noteContainer_accessor_storage; }
        set noteContainer(value) { this.#noteContainer_accessor_storage = value; }
        get std() {
            return this.block.std;
        }
        get host() {
            return this.block.host;
        }
        get model() {
            return this.block.model;
        }
        get path() {
            return this.block.path;
        }
        get linkedDoc() {
            return this.block.syncedDoc;
        }
        get editorMode() {
            return this.block.editorMode;
        }
        get blockState() {
            return this.block.blockState;
        }
        _isDocEmpty() {
            const syncedDoc = this.block.syncedDoc;
            if (!syncedDoc) {
                return false;
            }
            return (!!syncedDoc &&
                !syncedDoc.meta?.title.length &&
                this.isNoteContentEmpty &&
                this.isBannerEmpty);
        }
        _selectBlock() {
            const selectionManager = this.host.selection;
            const blockSelection = selectionManager.create('block', {
                blockId: this.block.blockId,
            });
            selectionManager.setGroup('note', [blockSelection]);
        }
        _handleClick(event) {
            event.stopPropagation();
            if (!this.block.isInSurface) {
                this._selectBlock();
            }
        }
        connectedCallback() {
            super.connectedCallback();
            const { isCycle } = this.block.blockState;
            const syncedDoc = this.block.syncedDoc;
            if (isCycle && syncedDoc) {
                if (syncedDoc.root) {
                    renderLinkedDocInCard(this);
                }
                else {
                    syncedDoc.slots.rootAdded.once(() => {
                        renderLinkedDocInCard(this);
                    });
                }
                this.disposables.add(syncedDoc.collection.meta.docMetaUpdated.on(() => {
                    renderLinkedDocInCard(this);
                }));
                this.disposables.add(syncedDoc.slots.blockUpdated.on(payload => {
                    if (payload.type === 'update' &&
                        ['xywh', 'caption', ''].includes(payload.props.key)) {
                        return;
                    }
                    renderLinkedDocInCard(this);
                }));
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.cleanUpSurfaceRefRenderer();
        }
        render() {
            const { isLoading, isDeleted, isError, isCycle } = this.blockState;
            const error = this.isError || isError;
            const isEmpty = this._isDocEmpty() && this.isBannerEmpty;
            const cardClassMap = classMap({
                loading: isLoading,
                error,
                deleted: isDeleted,
                cycle: isCycle,
                surface: this.block.isInSurface,
                empty: isEmpty,
                'banner-empty': this.isBannerEmpty,
                'note-empty': this.isNoteContentEmpty,
            });
            const { LoadingIcon, SyncedDocIcon, SyncedDocErrorIcon, SyncedDocDeletedIcon, ReloadIcon, SyncedDocEmptyBanner, SyncedDocErrorBanner, SyncedDocDeletedBanner, } = getSyncedDocIcons(this.editorMode);
            const titleIcon = error
                ? SyncedDocErrorIcon
                : isLoading
                    ? LoadingIcon
                    : isDeleted
                        ? SyncedDocDeletedIcon
                        : SyncedDocIcon;
            const titleText = error
                ? this.block.docTitle
                : isLoading
                    ? 'Loading...'
                    : isDeleted
                        ? `Deleted doc`
                        : this.block.docTitle;
            const showDefaultNoteContent = isLoading || error || isDeleted || isEmpty;
            const defaultNoteContent = error
                ? 'This linked doc failed to load.'
                : isLoading
                    ? ''
                    : isDeleted
                        ? 'This linked doc is deleted.'
                        : isEmpty
                            ? 'Preview of the page will be displayed here.'
                            : '';
            const dateText = this.block.docUpdatedAt.toLocaleString();
            const showDefaultBanner = isLoading || error || isDeleted || isEmpty;
            const defaultBanner = isLoading
                ? SyncedDocEmptyBanner
                : error
                    ? SyncedDocErrorBanner
                    : isDeleted
                        ? SyncedDocDeletedBanner
                        : SyncedDocEmptyBanner;
            return html `
      <div
        class="affine-embed-synced-doc-card ${cardClassMap}"
        @click=${this._handleClick}
      >
        <div class="affine-embed-synced-doc-card-content">
          <div class="affine-embed-synced-doc-card-content-title">
            <div class="affine-embed-synced-doc-card-content-title-icon">
              ${titleIcon}
            </div>

            <div class="affine-embed-synced-doc-card-content-title-text">
              ${titleText}
            </div>
          </div>

          ${showDefaultNoteContent
                ? html `<div class="affine-embed-synced-doc-content-note default">
                ${defaultNoteContent}
              </div>`
                : nothing}
          <div class="affine-embed-synced-doc-content-note render"></div>

          ${error
                ? html `
                <div class="affine-embed-synced-doc-card-content-reload">
                  <div
                    class="affine-embed-synced-doc-card-content-reload-button"
                    @click=${() => this.block.refreshData()}
                  >
                    ${ReloadIcon} <span>Reload</span>
                  </div>
                </div>
              `
                : html `
                <div class="affine-embed-synced-doc-card-content-date">
                  <span>Updated</span>

                  <span>${dateText}</span>
                </div>
              `}
        </div>

        <div class="affine-embed-synced-doc-card-banner render"></div>

        ${showDefaultBanner
                ? html `
              <div class="affine-embed-synced-doc-card-banner default">
                ${defaultBanner}
              </div>
            `
                : nothing}
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EmbedSyncedDocCard = _classThis;
})();
export { EmbedSyncedDocCard };
//# sourceMappingURL=embed-synced-doc-card.js.map