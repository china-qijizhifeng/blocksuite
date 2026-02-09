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
import { flip, offset } from '@floating-ui/dom';
import { html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ref } from 'lit/directives/ref.js';
import { styleMap } from 'lit/directives/style-map.js';
import { BlockComponent, HoverController, } from '../_common/components/index.js';
import { EMBED_CARD_HEIGHT, EMBED_CARD_WIDTH } from '../_common/consts.js';
import { AttachmentIcon16, getAttachmentFileIcons, } from '../_common/icons/index.js';
import { ThemeObserver } from '../_common/theme/theme-observer.js';
import { humanFileSize } from '../_common/utils/math.js';
import { getEmbedCardIcons } from '../_common/utils/url.js';
import { Bound } from '../surface-block/utils/bound.js';
import { AttachmentBlockStyles, } from './attachment-model.js';
import { AttachmentOptionsTemplate } from './components/options.js';
import { renderEmbedView } from './embed.js';
import { styles } from './styles.js';
import { checkAttachmentBlob, downloadAttachmentBlob } from './utils.js';
let AttachmentBlockComponent = (() => {
    let _classDecorators = [customElement('affine-attachment')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BlockComponent;
    let __showOverlay_decorators;
    let __showOverlay_initializers = [];
    let __showOverlay_extraInitializers = [];
    let _loading_decorators;
    let _loading_initializers = [];
    let _loading_extraInitializers = [];
    let _error_decorators;
    let _error_initializers = [];
    let _error_extraInitializers = [];
    let _downloading_decorators;
    let _downloading_initializers = [];
    let _downloading_extraInitializers = [];
    let _blobUrl_decorators;
    let _blobUrl_initializers = [];
    let _blobUrl_extraInitializers = [];
    let _allowEmbed_decorators;
    let _allowEmbed_initializers = [];
    let _allowEmbed_extraInitializers = [];
    var AttachmentBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_showOverlay_accessor_storage = __runInitializers(this, __showOverlay_initializers, true);
            this._isSelected = (__runInitializers(this, __showOverlay_extraInitializers), false);
            this._isDragging = false;
            this._isResizing = false;
            this._themeObserver = new ThemeObserver();
            this._isInSurface = false;
            this._whenHover = new HoverController(this, ({ abortController }) => {
                const selection = this.host.selection;
                const textSelection = selection.find('text');
                if (!!textSelection &&
                    (!!textSelection.to || !!textSelection.from.length)) {
                    return null;
                }
                const blockSelections = selection.filter('block');
                if (blockSelections.length > 1 ||
                    (blockSelections.length === 1 &&
                        blockSelections[0].blockId !== this.blockId)) {
                    return null;
                }
                return {
                    template: AttachmentOptionsTemplate({
                        anchor: this,
                        model: this.model,
                        showCaption: () => this.captionEditor.show(),
                        downloadAttachment: this.download,
                        abortController,
                    }),
                    computePosition: {
                        referenceElement: this,
                        placement: 'top-start',
                        middleware: [flip(), offset(4)],
                        autoUpdate: true,
                    },
                };
            });
            this.#useCaptionEditor_accessor_storage = true;
            this.#loading_accessor_storage = __runInitializers(this, _loading_initializers, false);
            this.#error_accessor_storage = (__runInitializers(this, _loading_extraInitializers), __runInitializers(this, _error_initializers, false));
            this.#downloading_accessor_storage = (__runInitializers(this, _error_extraInitializers), __runInitializers(this, _downloading_initializers, false));
            this.#blobUrl_accessor_storage = (__runInitializers(this, _downloading_extraInitializers), __runInitializers(this, _blobUrl_initializers, undefined));
            this.#allowEmbed_accessor_storage = (__runInitializers(this, _blobUrl_extraInitializers), __runInitializers(this, _allowEmbed_initializers, false));
            this.open = (__runInitializers(this, _allowEmbed_extraInitializers), () => {
                if (!this.blobUrl) {
                    return;
                }
                window.open(this.blobUrl, '_blank');
            });
            this.download = () => {
                downloadAttachmentBlob(this);
            };
            this.refreshData = () => {
                checkAttachmentBlob(this).catch(console.error);
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __showOverlay_decorators = [state()];
            _loading_decorators = [property({ attribute: false })];
            _error_decorators = [property({ attribute: false })];
            _downloading_decorators = [property({ attribute: false })];
            _blobUrl_decorators = [property({ attribute: false })];
            _allowEmbed_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __showOverlay_decorators, { kind: "accessor", name: "_showOverlay", static: false, private: false, access: { has: obj => "_showOverlay" in obj, get: obj => obj._showOverlay, set: (obj, value) => { obj._showOverlay = value; } }, metadata: _metadata }, __showOverlay_initializers, __showOverlay_extraInitializers);
            __esDecorate(this, null, _loading_decorators, { kind: "accessor", name: "loading", static: false, private: false, access: { has: obj => "loading" in obj, get: obj => obj.loading, set: (obj, value) => { obj.loading = value; } }, metadata: _metadata }, _loading_initializers, _loading_extraInitializers);
            __esDecorate(this, null, _error_decorators, { kind: "accessor", name: "error", static: false, private: false, access: { has: obj => "error" in obj, get: obj => obj.error, set: (obj, value) => { obj.error = value; } }, metadata: _metadata }, _error_initializers, _error_extraInitializers);
            __esDecorate(this, null, _downloading_decorators, { kind: "accessor", name: "downloading", static: false, private: false, access: { has: obj => "downloading" in obj, get: obj => obj.downloading, set: (obj, value) => { obj.downloading = value; } }, metadata: _metadata }, _downloading_initializers, _downloading_extraInitializers);
            __esDecorate(this, null, _blobUrl_decorators, { kind: "accessor", name: "blobUrl", static: false, private: false, access: { has: obj => "blobUrl" in obj, get: obj => obj.blobUrl, set: (obj, value) => { obj.blobUrl = value; } }, metadata: _metadata }, _blobUrl_initializers, _blobUrl_extraInitializers);
            __esDecorate(this, null, _allowEmbed_decorators, { kind: "accessor", name: "allowEmbed", static: false, private: false, access: { has: obj => "allowEmbed" in obj, get: obj => obj.allowEmbed, set: (obj, value) => { obj.allowEmbed = value; } }, metadata: _metadata }, _allowEmbed_initializers, _allowEmbed_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AttachmentBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get isInSurface() {
            return this._isInSurface;
        }
        get edgeless() {
            if (!this._isInSurface) {
                return null;
            }
            return this.host.querySelector('affine-edgeless-root');
        }
        get _embedView() {
            if (this.isInSurface || !this.model.embed || !this.blobUrl)
                return;
            return renderEmbedView(this.model, this.blobUrl, this.service.maxFileSize);
        }
        static { this.styles = styles; }
        #_showOverlay_accessor_storage;
        get _showOverlay() { return this.#_showOverlay_accessor_storage; }
        set _showOverlay(value) { this.#_showOverlay_accessor_storage = value; }
        #useCaptionEditor_accessor_storage;
        get useCaptionEditor() { return this.#useCaptionEditor_accessor_storage; }
        set useCaptionEditor(value) { this.#useCaptionEditor_accessor_storage = value; }
        #loading_accessor_storage;
        get loading() { return this.#loading_accessor_storage; }
        set loading(value) { this.#loading_accessor_storage = value; }
        #error_accessor_storage;
        get error() { return this.#error_accessor_storage; }
        set error(value) { this.#error_accessor_storage = value; }
        #downloading_accessor_storage;
        get downloading() { return this.#downloading_accessor_storage; }
        set downloading(value) { this.#downloading_accessor_storage = value; }
        #blobUrl_accessor_storage;
        get blobUrl() { return this.#blobUrl_accessor_storage; }
        set blobUrl(value) { this.#blobUrl_accessor_storage = value; }
        #allowEmbed_accessor_storage;
        get allowEmbed() { return this.#allowEmbed_accessor_storage; }
        set allowEmbed(value) { this.#allowEmbed_accessor_storage = value; }
        _selectBlock() {
            const selectionManager = this.host.selection;
            const blockSelection = selectionManager.create('block', {
                blockId: this.blockId,
            });
            selectionManager.setGroup('note', [blockSelection]);
        }
        _handleClick(event) {
            event.stopPropagation();
            if (!this.isInSurface) {
                this._selectBlock();
            }
        }
        _handleDoubleClick(event) {
            event.stopPropagation();
            if (this.allowEmbed) {
                this.open();
            }
            else {
                this.download();
            }
        }
        connectedCallback() {
            super.connectedCallback();
            this.refreshData();
            this.contentEditable = 'false';
            const parent = this.host.doc.getParent(this.model);
            this._isInSurface = parent?.flavour === 'affine:surface';
            if (!this.model.style) {
                this.doc.withoutTransact(() => {
                    this.doc.updateBlock(this.model, {
                        style: AttachmentBlockStyles[1],
                    });
                });
            }
            this.model.propsUpdated.on(({ key }) => {
                if (key === 'sourceId') {
                    // Reset the blob url when the sourceId is changed
                    if (this.blobUrl) {
                        URL.revokeObjectURL(this.blobUrl);
                        this.blobUrl = undefined;
                    }
                    this.refreshData();
                }
            });
            // Workaround for https://github.com/toeverything/blocksuite/issues/4724
            this._themeObserver.observe(document.documentElement);
            this._themeObserver.on(() => this.requestUpdate());
            this.disposables.add(() => this._themeObserver.dispose());
            // this is required to prevent iframe from capturing pointer events
            this.disposables.add(this.std.selection.slots.changed.on(() => {
                this._isSelected =
                    !!this.selected?.is('block') || !!this.selected?.is('surface');
                this._showOverlay =
                    this._isResizing || this._isDragging || !this._isSelected;
            }));
            // this is required to prevent iframe from capturing pointer events
            this.handleEvent('pointerMove', ctx => {
                this._isDragging = ctx.get('pointerState').dragging;
                this._showOverlay =
                    this._isResizing || this._isDragging || !this._isSelected;
            });
            if (this.isInSurface) {
                this.edgeless?.slots.elementResizeStart.on(() => {
                    this._isResizing = true;
                    this._showOverlay = true;
                });
                this.edgeless?.slots.elementResizeEnd.on(() => {
                    this._isResizing = false;
                    this._showOverlay =
                        this._isResizing || this._isDragging || !this._isSelected;
                });
            }
        }
        disconnectedCallback() {
            if (this.blobUrl) {
                URL.revokeObjectURL(this.blobUrl);
            }
            super.disconnectedCallback();
        }
        renderBlock() {
            const { name, size, style } = this.model;
            const cardStyle = style ?? AttachmentBlockStyles[1];
            const { LoadingIcon } = getEmbedCardIcons();
            const titleIcon = this.loading ? LoadingIcon : AttachmentIcon16;
            const titleText = this.loading ? 'Loading...' : name;
            const infoText = this.error ? 'File loading failed.' : humanFileSize(size);
            const fileType = name.split('.').pop() ?? '';
            const FileTypeIcon = getAttachmentFileIcons(fileType);
            let containerStyleMap = styleMap({
                position: 'relative',
                width: '100%',
                margin: '18px 0px',
            });
            if (this.isInSurface) {
                const width = EMBED_CARD_WIDTH[cardStyle];
                const height = EMBED_CARD_HEIGHT[cardStyle];
                const bound = Bound.deserialize((this.edgeless?.service.getElementById(this.model.id) ?? this.model)
                    .xywh);
                const scaleX = bound.w / width;
                const scaleY = bound.h / height;
                containerStyleMap = styleMap({
                    width: `${width}px`,
                    height: `${height}px`,
                    transform: `scale(${scaleX}, ${scaleY})`,
                    transformOrigin: '0 0',
                });
            }
            const embedView = this._embedView;
            return html `
      <div
        ${this.isInSurface ? nothing : ref(this._whenHover.setReference)}
        class="affine-attachment-container"
        style=${containerStyleMap}
      >
        ${embedView
                ? html `<div
              class="affine-attachment-embed-container"
              @click=${this._handleClick}
              @dblclick=${this._handleDoubleClick}
            >
              ${embedView}

              <div
                class=${classMap({
                    'affine-attachment-iframe-overlay': true,
                    hide: !this._showOverlay,
                })}
              ></div>
            </div>`
                : html `<div
              class=${classMap({
                    'affine-attachment-card': true,
                    [cardStyle]: true,
                    loading: this.loading,
                    error: this.error,
                    unsynced: false,
                })}
              @click=${this._handleClick}
              @dblclick=${this._handleDoubleClick}
            >
              <div class="affine-attachment-content">
                <div class="affine-attachment-content-title">
                  <div class="affine-attachment-content-title-icon">
                    ${titleIcon}
                  </div>

                  <div class="affine-attachment-content-title-text">
                    ${titleText}
                  </div>
                </div>

                <div class="affine-attachment-content-info">${infoText}</div>
              </div>

              <div class="affine-attachment-banner">${FileTypeIcon}</div>
            </div>`}
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AttachmentBlockComponent = _classThis;
})();
export { AttachmentBlockComponent };
//# sourceMappingURL=attachment-block.js.map