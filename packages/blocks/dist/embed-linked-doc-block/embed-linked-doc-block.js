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
import { assertExists } from '@blocksuite/global/utils';
import { DocCollection } from '@blocksuite/store';
import { html, nothing } from 'lit';
import { customElement, property, queryAsync, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { isPeekable, Peekable } from '../_common/components/peekable.js';
import { EMBED_CARD_HEIGHT, EMBED_CARD_WIDTH } from '../_common/consts.js';
import { EmbedBlockElement } from '../_common/embed-block-helper/index.js';
import { REFERENCE_NODE } from '../_common/inline/presets/nodes/consts.js';
import { renderLinkedDocInCard } from '../_common/utils/render-linked-doc.js';
import { SyncedDocErrorIcon } from '../embed-synced-doc-block/styles.js';
import { Bound } from '../surface-block/index.js';
import { styles } from './styles.js';
import { getEmbedLinkedDocIcons } from './utils.js';
let EmbedLinkedDocBlockComponent = (() => {
    let _classDecorators = [customElement('affine-embed-linked-doc-block'), Peekable()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EmbedBlockElement;
    let __linkedDocMode_decorators;
    let __linkedDocMode_initializers = [];
    let __linkedDocMode_extraInitializers = [];
    let __docUpdatedAt_decorators;
    let __docUpdatedAt_initializers = [];
    let __docUpdatedAt_extraInitializers = [];
    let __loading_decorators;
    let __loading_initializers = [];
    let __loading_extraInitializers = [];
    let _isNoteContentEmpty_decorators;
    let _isNoteContentEmpty_initializers = [];
    let _isNoteContentEmpty_extraInitializers = [];
    let _isBannerEmpty_decorators;
    let _isBannerEmpty_initializers = [];
    let _isBannerEmpty_extraInitializers = [];
    let _surfaceRefService_decorators;
    let _surfaceRefService_initializers = [];
    let _surfaceRefService_extraInitializers = [];
    let _isError_decorators;
    let _isError_initializers = [];
    let _isError_extraInitializers = [];
    let _surfaceRefRenderer_decorators;
    let _surfaceRefRenderer_initializers = [];
    let _surfaceRefRenderer_extraInitializers = [];
    let _bannerContainer_decorators;
    let _bannerContainer_initializers = [];
    let _bannerContainer_extraInitializers = [];
    let _noteContainer_decorators;
    let _noteContainer_initializers = [];
    let _noteContainer_extraInitializers = [];
    var EmbedLinkedDocBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_linkedDocMode_accessor_storage = __runInitializers(this, __linkedDocMode_initializers, 'page');
            this.#_docUpdatedAt_accessor_storage = (__runInitializers(this, __linkedDocMode_extraInitializers), __runInitializers(this, __docUpdatedAt_initializers, new Date()));
            this.#_loading_accessor_storage = (__runInitializers(this, __docUpdatedAt_extraInitializers), __runInitializers(this, __loading_initializers, false));
            this._cardStyle = (__runInitializers(this, __loading_extraInitializers), 'horizontal');
            this._width = EMBED_CARD_WIDTH.horizontal;
            this._height = EMBED_CARD_HEIGHT.horizontal;
            this.#isNoteContentEmpty_accessor_storage = __runInitializers(this, _isNoteContentEmpty_initializers, false);
            this.#isBannerEmpty_accessor_storage = (__runInitializers(this, _isNoteContentEmpty_extraInitializers), __runInitializers(this, _isBannerEmpty_initializers, false));
            this.#surfaceRefService_accessor_storage = (__runInitializers(this, _isBannerEmpty_extraInitializers), __runInitializers(this, _surfaceRefService_initializers, void 0));
            this.#isError_accessor_storage = (__runInitializers(this, _surfaceRefService_extraInitializers), __runInitializers(this, _isError_initializers, false));
            this.#surfaceRefRenderer_accessor_storage = (__runInitializers(this, _isError_extraInitializers), __runInitializers(this, _surfaceRefRenderer_initializers, undefined));
            this.#bannerContainer_accessor_storage = (__runInitializers(this, _surfaceRefRenderer_extraInitializers), __runInitializers(this, _bannerContainer_initializers, void 0));
            this.#noteContainer_accessor_storage = (__runInitializers(this, _bannerContainer_extraInitializers), __runInitializers(this, _noteContainer_initializers, void 0));
            this.open = (__runInitializers(this, _noteContainer_extraInitializers), () => {
                const linkedDocId = this.model.pageId;
                if (linkedDocId === this.doc.id)
                    return;
                const rootElement = this.std.view.viewFromPath('block', [
                    this.doc.root?.id ?? '',
                ]);
                assertExists(rootElement);
                rootElement.slots.docLinkClicked.emit({ docId: linkedDocId });
            });
            this.covertToInline = () => {
                const { doc, pageId } = this.model;
                const parent = doc.getParent(this.model);
                assertExists(parent);
                const index = parent.children.indexOf(this.model);
                const yText = new DocCollection.Y.Text();
                yText.insert(0, REFERENCE_NODE);
                yText.format(0, REFERENCE_NODE.length, {
                    reference: { type: 'LinkedPage', pageId },
                });
                const text = new doc.Text(yText);
                doc.addBlock('affine:paragraph', {
                    text,
                }, parent, index);
                doc.deleteBlock(this.model);
            };
            this.convertToEmbed = () => {
                const { id, doc, pageId, caption, xywh } = this.model;
                // synced doc entry controlled by awareness flag
                const isSyncedDocEnabled = doc.awarenessStore.getFlag('enable_synced_doc_block');
                if (!isSyncedDocEnabled) {
                    return;
                }
                if (this.isInSurface) {
                    const style = 'syncedDoc';
                    const bound = Bound.deserialize(xywh);
                    bound.w = EMBED_CARD_WIDTH[style];
                    bound.h = EMBED_CARD_HEIGHT[style];
                    const edgeless = this.edgeless;
                    assertExists(edgeless);
                    const newId = edgeless.service.addBlock('affine:embed-synced-doc', { pageId, xywh: bound.serialize(), caption }, edgeless.surface.model);
                    this.std.command.exec('reassociateConnectors', {
                        oldId: id,
                        newId,
                    });
                    edgeless.service.selection.set({
                        editing: false,
                        elements: [newId],
                    });
                }
                else {
                    const parent = doc.getParent(this.model);
                    assertExists(parent);
                    const index = parent.children.indexOf(this.model);
                    doc.addBlock('affine:embed-synced-doc', { pageId, caption }, parent, index);
                    this.std.selection.setGroup('note', []);
                }
                doc.deleteBlock(this.model);
            };
            this.refreshData = () => {
                this._load().catch(e => {
                    console.error(e);
                    this.isError = true;
                });
            };
            this.cleanUpSurfaceRefRenderer = () => {
                if (this.surfaceRefRenderer) {
                    this.surfaceRefService.removeRenderer(this.surfaceRefRenderer.id);
                }
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __linkedDocMode_decorators = [state()];
            __docUpdatedAt_decorators = [state()];
            __loading_decorators = [state()];
            _isNoteContentEmpty_decorators = [property({ attribute: false })];
            _isBannerEmpty_decorators = [property({ attribute: false })];
            _surfaceRefService_decorators = [property({ attribute: false })];
            _isError_decorators = [property({ attribute: false })];
            _surfaceRefRenderer_decorators = [property({ attribute: false })];
            _bannerContainer_decorators = [queryAsync('.affine-embed-linked-doc-banner.render')];
            _noteContainer_decorators = [queryAsync('.affine-embed-linked-doc-content-note.render')];
            __esDecorate(this, null, __linkedDocMode_decorators, { kind: "accessor", name: "_linkedDocMode", static: false, private: false, access: { has: obj => "_linkedDocMode" in obj, get: obj => obj._linkedDocMode, set: (obj, value) => { obj._linkedDocMode = value; } }, metadata: _metadata }, __linkedDocMode_initializers, __linkedDocMode_extraInitializers);
            __esDecorate(this, null, __docUpdatedAt_decorators, { kind: "accessor", name: "_docUpdatedAt", static: false, private: false, access: { has: obj => "_docUpdatedAt" in obj, get: obj => obj._docUpdatedAt, set: (obj, value) => { obj._docUpdatedAt = value; } }, metadata: _metadata }, __docUpdatedAt_initializers, __docUpdatedAt_extraInitializers);
            __esDecorate(this, null, __loading_decorators, { kind: "accessor", name: "_loading", static: false, private: false, access: { has: obj => "_loading" in obj, get: obj => obj._loading, set: (obj, value) => { obj._loading = value; } }, metadata: _metadata }, __loading_initializers, __loading_extraInitializers);
            __esDecorate(this, null, _isNoteContentEmpty_decorators, { kind: "accessor", name: "isNoteContentEmpty", static: false, private: false, access: { has: obj => "isNoteContentEmpty" in obj, get: obj => obj.isNoteContentEmpty, set: (obj, value) => { obj.isNoteContentEmpty = value; } }, metadata: _metadata }, _isNoteContentEmpty_initializers, _isNoteContentEmpty_extraInitializers);
            __esDecorate(this, null, _isBannerEmpty_decorators, { kind: "accessor", name: "isBannerEmpty", static: false, private: false, access: { has: obj => "isBannerEmpty" in obj, get: obj => obj.isBannerEmpty, set: (obj, value) => { obj.isBannerEmpty = value; } }, metadata: _metadata }, _isBannerEmpty_initializers, _isBannerEmpty_extraInitializers);
            __esDecorate(this, null, _surfaceRefService_decorators, { kind: "accessor", name: "surfaceRefService", static: false, private: false, access: { has: obj => "surfaceRefService" in obj, get: obj => obj.surfaceRefService, set: (obj, value) => { obj.surfaceRefService = value; } }, metadata: _metadata }, _surfaceRefService_initializers, _surfaceRefService_extraInitializers);
            __esDecorate(this, null, _isError_decorators, { kind: "accessor", name: "isError", static: false, private: false, access: { has: obj => "isError" in obj, get: obj => obj.isError, set: (obj, value) => { obj.isError = value; } }, metadata: _metadata }, _isError_initializers, _isError_extraInitializers);
            __esDecorate(this, null, _surfaceRefRenderer_decorators, { kind: "accessor", name: "surfaceRefRenderer", static: false, private: false, access: { has: obj => "surfaceRefRenderer" in obj, get: obj => obj.surfaceRefRenderer, set: (obj, value) => { obj.surfaceRefRenderer = value; } }, metadata: _metadata }, _surfaceRefRenderer_initializers, _surfaceRefRenderer_extraInitializers);
            __esDecorate(this, null, _bannerContainer_decorators, { kind: "accessor", name: "bannerContainer", static: false, private: false, access: { has: obj => "bannerContainer" in obj, get: obj => obj.bannerContainer, set: (obj, value) => { obj.bannerContainer = value; } }, metadata: _metadata }, _bannerContainer_initializers, _bannerContainer_extraInitializers);
            __esDecorate(this, null, _noteContainer_decorators, { kind: "accessor", name: "noteContainer", static: false, private: false, access: { has: obj => "noteContainer" in obj, get: obj => obj.noteContainer, set: (obj, value) => { obj.noteContainer = value; } }, metadata: _metadata }, _noteContainer_initializers, _noteContainer_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EmbedLinkedDocBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get editorMode() {
            return this._linkedDocMode;
        }
        get linkedDoc() {
            const doc = this.std.collection.getDoc(this.model.pageId);
            return doc;
        }
        get docTitle() {
            return this.linkedDoc?.meta?.title.length
                ? this.linkedDoc.meta.title
                : 'Untitled';
        }
        get _rootService() {
            return this.std.spec.getService('affine:page');
        }
        static { this.styles = styles; }
        #_linkedDocMode_accessor_storage;
        get _linkedDocMode() { return this.#_linkedDocMode_accessor_storage; }
        set _linkedDocMode(value) { this.#_linkedDocMode_accessor_storage = value; }
        #_docUpdatedAt_accessor_storage;
        get _docUpdatedAt() { return this.#_docUpdatedAt_accessor_storage; }
        set _docUpdatedAt(value) { this.#_docUpdatedAt_accessor_storage = value; }
        #_loading_accessor_storage;
        get _loading() { return this.#_loading_accessor_storage; }
        set _loading(value) { this.#_loading_accessor_storage = value; }
        #isNoteContentEmpty_accessor_storage;
        get isNoteContentEmpty() { return this.#isNoteContentEmpty_accessor_storage; }
        set isNoteContentEmpty(value) { this.#isNoteContentEmpty_accessor_storage = value; }
        #isBannerEmpty_accessor_storage;
        get isBannerEmpty() { return this.#isBannerEmpty_accessor_storage; }
        set isBannerEmpty(value) { this.#isBannerEmpty_accessor_storage = value; }
        #surfaceRefService_accessor_storage;
        get surfaceRefService() { return this.#surfaceRefService_accessor_storage; }
        set surfaceRefService(value) { this.#surfaceRefService_accessor_storage = value; }
        #isError_accessor_storage;
        get isError() { return this.#isError_accessor_storage; }
        set isError(value) { this.#isError_accessor_storage = value; }
        #surfaceRefRenderer_accessor_storage;
        get surfaceRefRenderer() { return this.#surfaceRefRenderer_accessor_storage; }
        set surfaceRefRenderer(value) { this.#surfaceRefRenderer_accessor_storage = value; }
        #bannerContainer_accessor_storage;
        get bannerContainer() { return this.#bannerContainer_accessor_storage; }
        set bannerContainer(value) { this.#bannerContainer_accessor_storage = value; }
        #noteContainer_accessor_storage;
        get noteContainer() { return this.#noteContainer_accessor_storage; }
        set noteContainer(value) { this.#noteContainer_accessor_storage = value; }
        async _load() {
            this._loading = true;
            this.isError = false;
            this.isNoteContentEmpty = true;
            this.isBannerEmpty = true;
            const linkedDoc = this.linkedDoc;
            if (!linkedDoc) {
                this._loading = false;
                return;
            }
            if (!linkedDoc.loaded) {
                try {
                    linkedDoc.load();
                }
                catch (e) {
                    console.error(e);
                    this.isError = true;
                }
            }
            if (!this.isError && !linkedDoc.root) {
                await new Promise(resolve => {
                    linkedDoc.slots.rootAdded.once(() => {
                        resolve();
                    });
                });
            }
            this._loading = false;
            if (!this.isError) {
                // renderLinkedDocInCard(this);
                const cardStyle = this.model.style;
                if (cardStyle === 'horizontal' || cardStyle === 'vertical') {
                    renderLinkedDocInCard(this);
                }
            }
        }
        _isDocEmpty() {
            const linkedDoc = this.linkedDoc;
            if (!linkedDoc) {
                return false;
            }
            return !!linkedDoc && this.isNoteContentEmpty && this.isBannerEmpty;
        }
        _setDocUpdatedAt() {
            const meta = this.doc.collection.meta.getDocMeta(this.model.pageId);
            if (meta) {
                const date = meta.updatedDate || meta.createDate;
                this._docUpdatedAt = new Date(date);
            }
        }
        _selectBlock() {
            const selectionManager = this.host.selection;
            const blockSelection = selectionManager.create('block', {
                blockId: this.blockId,
            });
            selectionManager.setGroup('note', [blockSelection]);
        }
        _handleClick(_event) {
            if (this.isInSurface)
                return;
            this._selectBlock();
        }
        _handleDoubleClick(event) {
            if (isPeekable(this)) {
                return;
            }
            event.stopPropagation();
            this.open();
        }
        updated() {
            // update card style when linked doc deleted
            const linkedDoc = this.linkedDoc;
            const { xywh, style } = this.model;
            const bound = Bound.deserialize(xywh);
            if (linkedDoc && style === 'horizontalThin') {
                bound.w = EMBED_CARD_WIDTH.horizontal;
                bound.h = EMBED_CARD_HEIGHT.horizontal;
                this.doc.withoutTransact(() => {
                    this.doc.updateBlock(this.model, {
                        xywh: bound.serialize(),
                        style: 'horizontal',
                    });
                });
            }
            else if (!linkedDoc && style === 'horizontal') {
                bound.w = EMBED_CARD_WIDTH.horizontalThin;
                bound.h = EMBED_CARD_HEIGHT.horizontalThin;
                this.doc.withoutTransact(() => {
                    this.doc.updateBlock(this.model, {
                        xywh: bound.serialize(),
                        style: 'horizontalThin',
                    });
                });
            }
        }
        connectedCallback() {
            super.connectedCallback();
            this._load().catch(e => {
                console.error(e);
                this.isError = true;
            });
            const linkedDoc = this.linkedDoc;
            if (linkedDoc) {
                this.disposables.add(linkedDoc.collection.meta.docMetaUpdated.on(() => {
                    this._load().catch(e => {
                        console.error(e);
                        this.isError = true;
                    });
                }));
                this.disposables.add(linkedDoc.slots.blockUpdated.on(payload => {
                    if (payload.type === 'update' &&
                        ['xywh', 'caption', ''].includes(payload.props.key)) {
                        return;
                    }
                    if (payload.type === 'add' && payload.init) {
                        return;
                    }
                    this._load().catch(e => {
                        console.error(e);
                        this.isError = true;
                    });
                }));
                this._setDocUpdatedAt();
                this.disposables.add(this.doc.collection.meta.docMetaUpdated.on(() => {
                    this._setDocUpdatedAt();
                }));
                this._linkedDocMode = this._rootService.docModeService.getMode(this.model.pageId);
                this.disposables.add(this._rootService.docModeService.onModeChange(mode => {
                    this._linkedDocMode = mode;
                }, this.model.pageId));
            }
            this.model.propsUpdated.on(({ key }) => {
                if (key === 'pageId' || key === 'style') {
                    this._load().catch(e => {
                        console.error(e);
                        this.isError = true;
                    });
                }
            });
            if (this.isInSurface) {
                const surface = this.surface;
                assertExists(surface);
                this.disposables.add(this.model.propsUpdated.on(() => {
                    this.requestUpdate();
                }));
            }
        }
        disconnectedCallback() {
            this.cleanUpSurfaceRefRenderer();
            super.disconnectedCallback();
        }
        renderBlock() {
            this._cardStyle = this.model.style;
            this._width = EMBED_CARD_WIDTH[this._cardStyle];
            this._height = EMBED_CARD_HEIGHT[this._cardStyle];
            const linkedDoc = this.linkedDoc;
            const isDeleted = !linkedDoc;
            const isLoading = this._loading;
            const isError = this.isError;
            const isEmpty = this._isDocEmpty() && this.isBannerEmpty;
            const cardClassMap = classMap({
                loading: isLoading,
                error: isError,
                deleted: isDeleted,
                empty: isEmpty,
                'banner-empty': this.isBannerEmpty,
                'note-empty': this.isNoteContentEmpty,
                [this._cardStyle]: true,
            });
            const { LoadingIcon, ReloadIcon, LinkedDocIcon, LinkedDocDeletedIcon, LinkedDocDeletedBanner, LinkedDocEmptyBanner, SyncedDocErrorBanner, } = getEmbedLinkedDocIcons(this._linkedDocMode, this._cardStyle);
            const titleIcon = isError
                ? SyncedDocErrorIcon
                : isLoading
                    ? LoadingIcon
                    : isDeleted
                        ? LinkedDocDeletedIcon
                        : LinkedDocIcon;
            const titleText = isError
                ? linkedDoc?.meta?.title || 'Untitled'
                : isLoading
                    ? 'Loading...'
                    : isDeleted
                        ? `Deleted doc`
                        : linkedDoc?.meta?.title || 'Untitled';
            const showDefaultNoteContent = isError || isLoading || isDeleted || isEmpty;
            const defaultNoteContent = isError
                ? 'This linked doc failed to load.'
                : isLoading
                    ? ''
                    : isDeleted
                        ? 'This linked doc is deleted.'
                        : isEmpty
                            ? 'Preview of the doc will be displayed here.'
                            : '';
            const dateText = this._cardStyle === 'cube'
                ? this._docUpdatedAt.toLocaleTimeString()
                : this._docUpdatedAt.toLocaleString();
            const showDefaultBanner = isError || isLoading || isDeleted || isEmpty;
            const defaultBanner = isError
                ? SyncedDocErrorBanner
                : isLoading
                    ? LinkedDocEmptyBanner
                    : isDeleted
                        ? LinkedDocDeletedBanner
                        : LinkedDocEmptyBanner;
            return this.renderEmbed(() => html `
        <div>
          <div
            class="affine-embed-linked-doc-block ${cardClassMap}"
            @click=${this._handleClick}
            @dblclick=${this._handleDoubleClick}
          >
            <div class="affine-embed-linked-doc-content">
              <div class="affine-embed-linked-doc-content-title">
                <div class="affine-embed-linked-doc-content-title-icon">
                  ${titleIcon}
                </div>

                <div class="affine-embed-linked-doc-content-title-text">
                  ${titleText}
                </div>
              </div>

              <div class="affine-embed-linked-doc-content-note render"></div>
              ${showDefaultNoteContent
                ? html `<div
                    class="affine-embed-linked-doc-content-note default"
                  >
                    ${defaultNoteContent}
                  </div>`
                : nothing}
              ${isError
                ? html `
                    <div class="affine-embed-linked-doc-card-content-reload">
                      <div
                        class="affine-embed-linked-doc-card-content-reload-button"
                        @click=${this.refreshData}
                      >
                        ${ReloadIcon} <span>Reload</span>
                      </div>
                    </div>
                  `
                : html `
                    <div class="affine-embed-linked-doc-content-date">
                      <span>Updated</span>

                      <span>${dateText}</span>
                    </div>
                  `}
            </div>

            <div class="affine-embed-linked-doc-banner render"></div>

            ${showDefaultBanner
                ? html `
                  <div class="affine-embed-linked-doc-banner default">
                    ${defaultBanner}
                  </div>
                `
                : nothing}
            <div class="affine-embed-linked-doc-block-overlay"></div>
          </div>
        </div>
      `);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EmbedLinkedDocBlockComponent = _classThis;
})();
export { EmbedLinkedDocBlockComponent };
//# sourceMappingURL=embed-linked-doc-block.js.map