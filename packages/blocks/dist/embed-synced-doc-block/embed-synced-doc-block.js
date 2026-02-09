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
import './components/embed-synced-doc-card.js';
import { assertExists } from '@blocksuite/global/utils';
import { BlockViewType, DocCollection, } from '@blocksuite/store';
import { html, nothing } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { classMap } from 'lit/directives/class-map.js';
import { guard } from 'lit/directives/guard.js';
import { styleMap } from 'lit/directives/style-map.js';
import { Peekable } from '../_common/components/peekable.js';
import { EMBED_CARD_HEIGHT, EMBED_CARD_WIDTH } from '../_common/consts.js';
import { EmbedBlockElement } from '../_common/embed-block-helper/embed-block-element.js';
import { EmbedEdgelessIcon, EmbedPageIcon } from '../_common/icons/text.js';
import { REFERENCE_NODE } from '../_common/inline/presets/nodes/consts.js';
import { NoteDisplayMode } from '../_common/types.js';
import { matchFlavours } from '../_common/utils/model.js';
import { getThemeMode } from '../_common/utils/query.js';
import { isEmptyDoc } from '../_common/utils/render-linked-doc.js';
import { SpecProvider } from '../specs/utils/spec-provider.js';
import { Bound } from '../surface-block/utils/bound.js';
import { blockStyles } from './styles.js';
let EmbedSyncedDocBlockComponent = (() => {
    let _classDecorators = [customElement('affine-embed-synced-doc-block'), Peekable()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EmbedBlockElement;
    let _depth_decorators;
    let _depth_initializers = [];
    let _depth_extraInitializers = [];
    let __syncedDocMode_decorators;
    let __syncedDocMode_initializers = [];
    let __syncedDocMode_extraInitializers = [];
    let __isEmptySyncedDoc_decorators;
    let __isEmptySyncedDoc_initializers = [];
    let __isEmptySyncedDoc_extraInitializers = [];
    let __docUpdatedAt_decorators;
    let __docUpdatedAt_initializers = [];
    let __docUpdatedAt_extraInitializers = [];
    let __loading_decorators;
    let __loading_initializers = [];
    let __loading_extraInitializers = [];
    let __error_decorators;
    let __error_initializers = [];
    let __error_extraInitializers = [];
    let __deleted_decorators;
    let __deleted_initializers = [];
    let __deleted_extraInitializers = [];
    let __cycle_decorators;
    let __cycle_initializers = [];
    let __cycle_extraInitializers = [];
    let _syncedDocCard_decorators;
    let _syncedDocCard_initializers = [];
    let _syncedDocCard_extraInitializers = [];
    let _syncedDocEditorHost_decorators;
    let _syncedDocEditorHost_initializers = [];
    let _syncedDocEditorHost_extraInitializers = [];
    var EmbedSyncedDocBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._pageFilter = block => {
                if (matchFlavours(block.model, ['affine:note']) &&
                    block.model.displayMode === NoteDisplayMode.EdgelessOnly) {
                    return BlockViewType.Hidden;
                }
                return BlockViewType.Display;
            };
            this.#depth_accessor_storage = __runInitializers(this, _depth_initializers, 0);
            this.#_syncedDocMode_accessor_storage = (__runInitializers(this, _depth_extraInitializers), __runInitializers(this, __syncedDocMode_initializers, 'page'));
            this.#_isEmptySyncedDoc_accessor_storage = (__runInitializers(this, __syncedDocMode_extraInitializers), __runInitializers(this, __isEmptySyncedDoc_initializers, true));
            this.#_docUpdatedAt_accessor_storage = (__runInitializers(this, __isEmptySyncedDoc_extraInitializers), __runInitializers(this, __docUpdatedAt_initializers, new Date()));
            this.#_loading_accessor_storage = (__runInitializers(this, __docUpdatedAt_extraInitializers), __runInitializers(this, __loading_initializers, false));
            this.#_error_accessor_storage = (__runInitializers(this, __loading_extraInitializers), __runInitializers(this, __error_initializers, false));
            this.#_deleted_accessor_storage = (__runInitializers(this, __error_extraInitializers), __runInitializers(this, __deleted_initializers, false));
            this.#_cycle_accessor_storage = (__runInitializers(this, __deleted_extraInitializers), __runInitializers(this, __cycle_initializers, false));
            this.#useCaptionEditor_accessor_storage = (__runInitializers(this, __cycle_extraInitializers), false);
            this.#syncedDocCard_accessor_storage = __runInitializers(this, _syncedDocCard_initializers, null);
            this.#syncedDocEditorHost_accessor_storage = (__runInitializers(this, _syncedDocCard_extraInitializers), __runInitializers(this, _syncedDocEditorHost_initializers, null));
            this._buildPreviewSpec = (__runInitializers(this, _syncedDocEditorHost_extraInitializers), (name) => {
                const nextDepth = this.depth + 1;
                const previewSpecBuilder = SpecProvider.getInstance().getSpec(name);
                const currentDisposables = this.disposables;
                previewSpecBuilder.setup('affine:embed-synced-doc', (slots, disposableGroup) => {
                    disposableGroup.add(slots.viewConnected.on(({ component }) => {
                        const nextComponent = component;
                        nextComponent.depth = nextDepth;
                        currentDisposables.add(() => {
                            nextComponent.depth = 0;
                        });
                    }));
                    disposableGroup.add(slots.viewDisconnected.on(({ component }) => {
                        const nextComponent = component;
                        nextComponent.depth = 0;
                    }));
                });
                return previewSpecBuilder.value;
            });
            this._renderSyncedView = () => {
                const syncedDoc = this.syncedDoc;
                const isInSurface = this.isInSurface;
                const editorMode = this._syncedDocMode;
                assertExists(syncedDoc);
                if (this.isPageMode && !this.isInSurface) {
                    this.style.width = 'calc(100% + 48px)';
                    this.style.marginLeft = '-24px';
                    this.style.marginRight = '-24px';
                }
                let containerStyleMap = styleMap({
                    position: 'relative',
                    width: '100%',
                });
                if (isInSurface) {
                    const scale = this.model.scale ?? 1;
                    const bound = Bound.deserialize((this.edgeless?.service.getElementById(this.model.id) ?? this.model)
                        .xywh);
                    const width = bound.w / scale;
                    const height = bound.h / scale;
                    containerStyleMap = styleMap({
                        width: `${width}px`,
                        height: `${height}px`,
                        minHeight: `${height}px`,
                        transform: `scale(${scale})`,
                        transformOrigin: '0 0',
                    });
                }
                const theme = getThemeMode();
                const isSelected = !!this.selected?.is('block');
                const scale = isInSurface ? this.model.scale ?? 1 : undefined;
                this.dataset.nestedEditor = '';
                const renderEditor = () => {
                    return choose(editorMode, [
                        [
                            'page',
                            () => html `
            <div class="affine-page-viewport">
              ${this.host.renderSpecPortal(syncedDoc, this._buildPreviewSpec('page:preview'))}
            </div>
          `,
                        ],
                        [
                            'edgeless',
                            () => html `
            <div class="affine-edgeless-viewport">
              ${this.host.renderSpecPortal(syncedDoc, this._buildPreviewSpec('edgeless:preview'))}
            </div>
          `,
                        ],
                    ]);
                };
                const icon = this.isPageMode ? EmbedPageIcon : EmbedEdgelessIcon;
                return this.renderEmbed(() => html `
        <div
          class=${classMap({
                    'affine-embed-synced-doc-container': true,
                    [editorMode]: true,
                    [theme]: true,
                    selected: isSelected,
                    surface: isInSurface,
                })}
          @click=${this._handleClick}
          style=${containerStyleMap}
          ?data-scale=${scale}
        >
          <div class="affine-embed-synced-doc-editor">
            ${this.isPageMode && this._isEmptySyncedDoc
                    ? html `
                  <div class="affine-embed-synced-doc-editor-empty">
                    <span>
                      This is a linked doc, you can add content here.
                    </span>
                  </div>
                `
                    : guard([editorMode, syncedDoc], renderEditor)}
          </div>
          ${isInSurface
                    ? nothing
                    : html `
                <div
                  class=${classMap({
                        'affine-embed-synced-doc-header-wrapper': true,
                        selected: isSelected,
                    })}
                >
                  <div class="affine-embed-synced-doc-header">
                    ${icon}
                    <span class="affine-embed-synced-doc-title">
                      ${this.docTitle}
                    </span>
                  </div>
                </div>
              `}
          ${isInSurface
                    ? html ` <div class="affine-embed-synced-doc-editor-overlay"></div> `
                    : nothing}
        </div>
      `);
            };
            this._initEdgelessFitEffect = () => {
                const fitToContent = () => {
                    const { _syncedDocMode } = this;
                    if (_syncedDocMode !== 'edgeless')
                        return;
                    const service = this.syncedDocEditorHost?.std.spec.getService('affine:page');
                    if (!service)
                        return;
                    service.viewport.onResize();
                    service.zoomToFit();
                };
                const observer = new ResizeObserver(fitToContent);
                const blockElement = this.embedBlock;
                observer.observe(blockElement);
                this._disposables.add(() => {
                    observer.disconnect();
                });
                this.syncedDocEditorHost?.updateComplete
                    .then(() => {
                    fitToContent();
                })
                    .catch(() => { });
            };
            this.open = () => {
                const syncedDocId = this.model.pageId;
                if (syncedDocId === this.doc.id)
                    return;
                const rootElement = this.std.view.viewFromPath('block', [
                    this.doc.root?.id ?? '',
                ]);
                assertExists(rootElement);
                rootElement.slots.docLinkClicked.emit({ docId: syncedDocId });
            };
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
            this.convertToCard = () => {
                const { id, doc, pageId, caption, xywh } = this.model;
                if (this.isInSurface) {
                    const style = 'vertical';
                    const bound = Bound.deserialize(xywh);
                    bound.w = EMBED_CARD_WIDTH[style];
                    bound.h = EMBED_CARD_HEIGHT[style];
                    const edgeless = this.edgeless;
                    assertExists(edgeless);
                    const newId = edgeless.service.addBlock('affine:embed-linked-doc', { pageId, xywh: bound.serialize(), style, caption }, edgeless.surface.model);
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
                    doc.addBlock('affine:embed-linked-doc', { pageId, caption }, parent, index);
                    this.std.selection.setGroup('note', []);
                }
                doc.deleteBlock(this.model);
            };
            this.refreshData = () => {
                this._load().catch(e => {
                    console.error(e);
                    this._error = true;
                });
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _depth_decorators = [state()];
            __syncedDocMode_decorators = [state()];
            __isEmptySyncedDoc_decorators = [state()];
            __docUpdatedAt_decorators = [state()];
            __loading_decorators = [state()];
            __error_decorators = [state()];
            __deleted_decorators = [state()];
            __cycle_decorators = [state()];
            _syncedDocCard_decorators = [query(':scope > .affine-block-component > .embed-block-container > affine-embed-synced-doc-card')];
            _syncedDocEditorHost_decorators = [query(':scope > .affine-block-component > .embed-block-container > .affine-embed-synced-doc-container > .affine-embed-synced-doc-editor > div > editor-host')];
            __esDecorate(this, null, _depth_decorators, { kind: "accessor", name: "depth", static: false, private: false, access: { has: obj => "depth" in obj, get: obj => obj.depth, set: (obj, value) => { obj.depth = value; } }, metadata: _metadata }, _depth_initializers, _depth_extraInitializers);
            __esDecorate(this, null, __syncedDocMode_decorators, { kind: "accessor", name: "_syncedDocMode", static: false, private: false, access: { has: obj => "_syncedDocMode" in obj, get: obj => obj._syncedDocMode, set: (obj, value) => { obj._syncedDocMode = value; } }, metadata: _metadata }, __syncedDocMode_initializers, __syncedDocMode_extraInitializers);
            __esDecorate(this, null, __isEmptySyncedDoc_decorators, { kind: "accessor", name: "_isEmptySyncedDoc", static: false, private: false, access: { has: obj => "_isEmptySyncedDoc" in obj, get: obj => obj._isEmptySyncedDoc, set: (obj, value) => { obj._isEmptySyncedDoc = value; } }, metadata: _metadata }, __isEmptySyncedDoc_initializers, __isEmptySyncedDoc_extraInitializers);
            __esDecorate(this, null, __docUpdatedAt_decorators, { kind: "accessor", name: "_docUpdatedAt", static: false, private: false, access: { has: obj => "_docUpdatedAt" in obj, get: obj => obj._docUpdatedAt, set: (obj, value) => { obj._docUpdatedAt = value; } }, metadata: _metadata }, __docUpdatedAt_initializers, __docUpdatedAt_extraInitializers);
            __esDecorate(this, null, __loading_decorators, { kind: "accessor", name: "_loading", static: false, private: false, access: { has: obj => "_loading" in obj, get: obj => obj._loading, set: (obj, value) => { obj._loading = value; } }, metadata: _metadata }, __loading_initializers, __loading_extraInitializers);
            __esDecorate(this, null, __error_decorators, { kind: "accessor", name: "_error", static: false, private: false, access: { has: obj => "_error" in obj, get: obj => obj._error, set: (obj, value) => { obj._error = value; } }, metadata: _metadata }, __error_initializers, __error_extraInitializers);
            __esDecorate(this, null, __deleted_decorators, { kind: "accessor", name: "_deleted", static: false, private: false, access: { has: obj => "_deleted" in obj, get: obj => obj._deleted, set: (obj, value) => { obj._deleted = value; } }, metadata: _metadata }, __deleted_initializers, __deleted_extraInitializers);
            __esDecorate(this, null, __cycle_decorators, { kind: "accessor", name: "_cycle", static: false, private: false, access: { has: obj => "_cycle" in obj, get: obj => obj._cycle, set: (obj, value) => { obj._cycle = value; } }, metadata: _metadata }, __cycle_initializers, __cycle_extraInitializers);
            __esDecorate(this, null, _syncedDocCard_decorators, { kind: "accessor", name: "syncedDocCard", static: false, private: false, access: { has: obj => "syncedDocCard" in obj, get: obj => obj.syncedDocCard, set: (obj, value) => { obj.syncedDocCard = value; } }, metadata: _metadata }, _syncedDocCard_initializers, _syncedDocCard_extraInitializers);
            __esDecorate(this, null, _syncedDocEditorHost_decorators, { kind: "accessor", name: "syncedDocEditorHost", static: false, private: false, access: { has: obj => "syncedDocEditorHost" in obj, get: obj => obj.syncedDocEditorHost, set: (obj, value) => { obj.syncedDocEditorHost = value; } }, metadata: _metadata }, _syncedDocEditorHost_initializers, _syncedDocEditorHost_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EmbedSyncedDocBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get syncedDoc() {
            return this._syncedDocMode === 'page'
                ? this.std.collection.getDoc(this.model.pageId, {
                    readonly: true,
                    selector: this._pageFilter,
                })
                : this.std.collection.getDoc(this.model.pageId, {
                    readonly: true,
                });
        }
        get blockState() {
            return {
                isLoading: this._loading,
                isError: this._error,
                isDeleted: this._deleted,
                isCycle: this._cycle,
            };
        }
        get editorMode() {
            return this._syncedDocMode;
        }
        get docUpdatedAt() {
            return this._docUpdatedAt;
        }
        get docTitle() {
            return this.syncedDoc?.meta?.title.length
                ? this.syncedDoc.meta.title
                : 'Untitled';
        }
        get _rootService() {
            return this.std.spec.getService('affine:page');
        }
        get isPageMode() {
            return this._syncedDocMode === 'page';
        }
        static { this.styles = blockStyles; }
        #depth_accessor_storage;
        get depth() { return this.#depth_accessor_storage; }
        set depth(value) { this.#depth_accessor_storage = value; }
        #_syncedDocMode_accessor_storage;
        get _syncedDocMode() { return this.#_syncedDocMode_accessor_storage; }
        set _syncedDocMode(value) { this.#_syncedDocMode_accessor_storage = value; }
        #_isEmptySyncedDoc_accessor_storage;
        get _isEmptySyncedDoc() { return this.#_isEmptySyncedDoc_accessor_storage; }
        set _isEmptySyncedDoc(value) { this.#_isEmptySyncedDoc_accessor_storage = value; }
        #_docUpdatedAt_accessor_storage;
        get _docUpdatedAt() { return this.#_docUpdatedAt_accessor_storage; }
        set _docUpdatedAt(value) { this.#_docUpdatedAt_accessor_storage = value; }
        #_loading_accessor_storage;
        get _loading() { return this.#_loading_accessor_storage; }
        set _loading(value) { this.#_loading_accessor_storage = value; }
        #_error_accessor_storage;
        get _error() { return this.#_error_accessor_storage; }
        set _error(value) { this.#_error_accessor_storage = value; }
        #_deleted_accessor_storage;
        get _deleted() { return this.#_deleted_accessor_storage; }
        set _deleted(value) { this.#_deleted_accessor_storage = value; }
        #_cycle_accessor_storage;
        get _cycle() { return this.#_cycle_accessor_storage; }
        set _cycle(value) { this.#_cycle_accessor_storage = value; }
        #useCaptionEditor_accessor_storage;
        get useCaptionEditor() { return this.#useCaptionEditor_accessor_storage; }
        set useCaptionEditor(value) { this.#useCaptionEditor_accessor_storage = value; }
        #syncedDocCard_accessor_storage;
        get syncedDocCard() { return this.#syncedDocCard_accessor_storage; }
        set syncedDocCard(value) { this.#syncedDocCard_accessor_storage = value; }
        #syncedDocEditorHost_accessor_storage;
        get syncedDocEditorHost() { return this.#syncedDocEditorHost_accessor_storage; }
        set syncedDocEditorHost(value) { this.#syncedDocEditorHost_accessor_storage = value; }
        _checkCycle() {
            let editorHost = this.host;
            while (editorHost && !this._cycle) {
                this._cycle = !!editorHost && editorHost.doc.id === this.model.pageId;
                editorHost =
                    editorHost.parentElement?.closest('editor-host') ?? null;
            }
        }
        async _load() {
            this._loading = true;
            this._error = false;
            this._deleted = false;
            this._cycle = false;
            const syncedDoc = this.syncedDoc;
            if (!syncedDoc) {
                this._deleted = true;
                this._loading = false;
                return;
            }
            this._checkCycle();
            if (!syncedDoc.loaded) {
                try {
                    syncedDoc.load();
                }
                catch (e) {
                    console.error(e);
                    this._error = true;
                }
            }
            if (!this._error && !syncedDoc.root) {
                await new Promise(resolve => {
                    syncedDoc.slots.rootAdded.once(() => resolve());
                });
            }
            this._loading = false;
        }
        _setDocUpdatedAt() {
            const meta = this.doc.collection.meta.getDocMeta(this.model.pageId);
            if (meta) {
                const date = meta.updatedDate || meta.createDate;
                this._docUpdatedAt = new Date(date);
            }
        }
        _isClickAtBorder(event, element, tolerance = 8) {
            const { x, y } = event;
            const rect = element.getBoundingClientRect();
            if (!rect) {
                return false;
            }
            return (Math.abs(x - rect.left) < tolerance ||
                Math.abs(x - rect.right) < tolerance ||
                Math.abs(y - rect.top) < tolerance ||
                Math.abs(y - rect.bottom) < tolerance);
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
        connectedCallback() {
            super.connectedCallback();
            this.style.display = 'block';
            this._load().catch(e => {
                console.error(e);
                this._error = true;
            });
            this.contentEditable = 'false';
            this.model.propsUpdated.on(({ key }) => {
                if (key === 'pageId' || key === 'style') {
                    this._load().catch(e => {
                        console.error(e);
                        this._error = true;
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
            this._setDocUpdatedAt();
            this.disposables.add(this.doc.collection.meta.docMetaUpdated.on(() => {
                this._setDocUpdatedAt();
            }));
            this._syncedDocMode = this._rootService.docModeService.getMode(this.model.pageId);
            this._isEmptySyncedDoc = isEmptyDoc(this.syncedDoc, this._syncedDocMode);
            this.disposables.add(this._rootService.docModeService.onModeChange(mode => {
                this._syncedDocMode = mode;
                this._isEmptySyncedDoc = isEmptyDoc(this.syncedDoc, mode);
            }, this.model.pageId));
            this.syncedDoc &&
                this.disposables.add(this.syncedDoc.slots.blockUpdated.on(() => {
                    this._isEmptySyncedDoc = isEmptyDoc(this.syncedDoc, this._syncedDocMode);
                }));
        }
        firstUpdated() {
            this.disposables.addFromEvent(this, 'click', e => {
                e.stopPropagation();
                if (this._isClickAtBorder(e, this)) {
                    e.preventDefault();
                    this._selectBlock();
                }
            });
            // Forward docLinkClicked event from the synced doc
            const syncedDocRootService = this.syncedDocEditorHost?.std.spec.getService('affine:page');
            if (syncedDocRootService) {
                this.disposables.add(syncedDocRootService.slots.docLinkClicked.on(({ docId }) => {
                    this._rootService.slots.docLinkClicked.emit({ docId });
                }));
            }
            this._initEdgelessFitEffect();
        }
        updated(changedProperties) {
            super.updated(changedProperties);
            this.syncedDocCard?.requestUpdate();
        }
        renderBlock() {
            delete this.dataset.nestedEditor;
            const { style, xywh } = this.model;
            this._cardStyle = style;
            const bound = Bound.deserialize(xywh);
            this._width = this.isInSurface ? bound.w : EMBED_CARD_WIDTH[style];
            this._height = this.isInSurface ? bound.h : EMBED_CARD_HEIGHT[style];
            const syncedDoc = this.syncedDoc;
            const { isLoading, isError, isDeleted, isCycle } = this.blockState;
            const isInSurface = this.isInSurface;
            const isCardOnly = this.depth >= 1;
            if (isLoading ||
                isError ||
                isDeleted ||
                isCardOnly ||
                isCycle ||
                !syncedDoc) {
                let cardStyleMap = styleMap({
                    position: 'relative',
                    display: 'block',
                    width: '100%',
                });
                if (isInSurface) {
                    const bound = Bound.deserialize(this.model.xywh);
                    const scaleX = bound.w / EMBED_CARD_WIDTH[style];
                    const scaleY = bound.h / EMBED_CARD_HEIGHT[style];
                    cardStyleMap = styleMap({
                        display: 'block',
                        width: `${EMBED_CARD_WIDTH[style]}px`,
                        height: `${EMBED_CARD_HEIGHT[style]}px`,
                        transform: `scale(${scaleX}, ${scaleY})`,
                        transformOrigin: '0 0',
                    });
                }
                return this.renderEmbed(() => html `
          <affine-embed-synced-doc-card
            style=${cardStyleMap}
            .block=${this}
          ></affine-embed-synced-doc-card>
        `);
            }
            return this._renderSyncedView();
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EmbedSyncedDocBlockComponent = _classThis;
})();
export { EmbedSyncedDocBlockComponent };
//# sourceMappingURL=embed-synced-doc-block.js.map