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
import './components/image-card.js';
import './components/page-image-block.js';
import './components/edgeless-image-block.js';
import { html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { BlockComponent } from '../_common/components/block-component.js';
import { Peekable } from '../_common/components/index.js';
import { Bound } from '../surface-block/utils/bound.js';
import { copyImageBlob, downloadImageBlob, fetchImageBlob, resetImageSize, turnImageIntoCardView, } from './utils.js';
let ImageBlockComponent = (() => {
    let _classDecorators = [customElement('affine-image'), Peekable()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BlockComponent;
    let __imageCard_decorators;
    let __imageCard_initializers = [];
    let __imageCard_extraInitializers = [];
    let __pageImage_decorators;
    let __pageImage_initializers = [];
    let __pageImage_extraInitializers = [];
    let __edgelessImage_decorators;
    let __edgelessImage_initializers = [];
    let __edgelessImage_extraInitializers = [];
    let _loading_decorators;
    let _loading_initializers = [];
    let _loading_extraInitializers = [];
    let _error_decorators;
    let _error_initializers = [];
    let _error_extraInitializers = [];
    let _downloading_decorators;
    let _downloading_initializers = [];
    let _downloading_extraInitializers = [];
    let _retryCount_decorators;
    let _retryCount_initializers = [];
    let _retryCount_extraInitializers = [];
    let _blob_decorators;
    let _blob_initializers = [];
    let _blob_extraInitializers = [];
    let _blobUrl_decorators;
    let _blobUrl_initializers = [];
    let _blobUrl_extraInitializers = [];
    let _lastSourceId_decorators;
    let _lastSourceId_initializers = [];
    let _lastSourceId_extraInitializers = [];
    var ImageBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_imageCard_accessor_storage = __runInitializers(this, __imageCard_initializers, null);
            this.#_pageImage_accessor_storage = (__runInitializers(this, __imageCard_extraInitializers), __runInitializers(this, __pageImage_initializers, null));
            this.#_edgelessImage_accessor_storage = (__runInitializers(this, __pageImage_extraInitializers), __runInitializers(this, __edgelessImage_initializers, null));
            this._isInSurface = (__runInitializers(this, __edgelessImage_extraInitializers), false);
            this.#useCaptionEditor_accessor_storage = true;
            this.#loading_accessor_storage = __runInitializers(this, _loading_initializers, false);
            this.#error_accessor_storage = (__runInitializers(this, _loading_extraInitializers), __runInitializers(this, _error_initializers, false));
            this.#downloading_accessor_storage = (__runInitializers(this, _error_extraInitializers), __runInitializers(this, _downloading_initializers, false));
            this.#retryCount_accessor_storage = (__runInitializers(this, _downloading_extraInitializers), __runInitializers(this, _retryCount_initializers, 0));
            this.#blob_accessor_storage = (__runInitializers(this, _retryCount_extraInitializers), __runInitializers(this, _blob_initializers, undefined));
            this.#blobUrl_accessor_storage = (__runInitializers(this, _blob_extraInitializers), __runInitializers(this, _blobUrl_initializers, undefined));
            this.#lastSourceId_accessor_storage = (__runInitializers(this, _blobUrl_extraInitializers), __runInitializers(this, _lastSourceId_initializers, void 0));
            this.copy = (__runInitializers(this, _lastSourceId_extraInitializers), () => {
                copyImageBlob(this).catch(console.error);
            });
            this.download = () => {
                downloadImageBlob(this).catch(console.error);
            };
            this.refreshData = () => {
                this.retryCount = 0;
                fetchImageBlob(this)
                    .then(() => {
                    // add width, height to model to show scale percent
                    const { width, height } = this.model;
                    if (this.isInSurface && !width && !height) {
                        this.resetImageSize();
                    }
                })
                    .catch(console.error);
            };
            this.resetImageSize = () => {
                resetImageSize(this).catch(console.error);
            };
            this.convertToCardView = () => {
                turnImageIntoCardView(this).catch(console.error);
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __imageCard_decorators = [query('affine-image-block-card')];
            __pageImage_decorators = [query('affine-page-image')];
            __edgelessImage_decorators = [query('affine-edgeless-image')];
            _loading_decorators = [property({ attribute: false })];
            _error_decorators = [property({ attribute: false })];
            _downloading_decorators = [property({ attribute: false })];
            _retryCount_decorators = [property({ attribute: false })];
            _blob_decorators = [property({ attribute: false })];
            _blobUrl_decorators = [property({ attribute: false })];
            _lastSourceId_decorators = [state()];
            __esDecorate(this, null, __imageCard_decorators, { kind: "accessor", name: "_imageCard", static: false, private: false, access: { has: obj => "_imageCard" in obj, get: obj => obj._imageCard, set: (obj, value) => { obj._imageCard = value; } }, metadata: _metadata }, __imageCard_initializers, __imageCard_extraInitializers);
            __esDecorate(this, null, __pageImage_decorators, { kind: "accessor", name: "_pageImage", static: false, private: false, access: { has: obj => "_pageImage" in obj, get: obj => obj._pageImage, set: (obj, value) => { obj._pageImage = value; } }, metadata: _metadata }, __pageImage_initializers, __pageImage_extraInitializers);
            __esDecorate(this, null, __edgelessImage_decorators, { kind: "accessor", name: "_edgelessImage", static: false, private: false, access: { has: obj => "_edgelessImage" in obj, get: obj => obj._edgelessImage, set: (obj, value) => { obj._edgelessImage = value; } }, metadata: _metadata }, __edgelessImage_initializers, __edgelessImage_extraInitializers);
            __esDecorate(this, null, _loading_decorators, { kind: "accessor", name: "loading", static: false, private: false, access: { has: obj => "loading" in obj, get: obj => obj.loading, set: (obj, value) => { obj.loading = value; } }, metadata: _metadata }, _loading_initializers, _loading_extraInitializers);
            __esDecorate(this, null, _error_decorators, { kind: "accessor", name: "error", static: false, private: false, access: { has: obj => "error" in obj, get: obj => obj.error, set: (obj, value) => { obj.error = value; } }, metadata: _metadata }, _error_initializers, _error_extraInitializers);
            __esDecorate(this, null, _downloading_decorators, { kind: "accessor", name: "downloading", static: false, private: false, access: { has: obj => "downloading" in obj, get: obj => obj.downloading, set: (obj, value) => { obj.downloading = value; } }, metadata: _metadata }, _downloading_initializers, _downloading_extraInitializers);
            __esDecorate(this, null, _retryCount_decorators, { kind: "accessor", name: "retryCount", static: false, private: false, access: { has: obj => "retryCount" in obj, get: obj => obj.retryCount, set: (obj, value) => { obj.retryCount = value; } }, metadata: _metadata }, _retryCount_initializers, _retryCount_extraInitializers);
            __esDecorate(this, null, _blob_decorators, { kind: "accessor", name: "blob", static: false, private: false, access: { has: obj => "blob" in obj, get: obj => obj.blob, set: (obj, value) => { obj.blob = value; } }, metadata: _metadata }, _blob_initializers, _blob_extraInitializers);
            __esDecorate(this, null, _blobUrl_decorators, { kind: "accessor", name: "blobUrl", static: false, private: false, access: { has: obj => "blobUrl" in obj, get: obj => obj.blobUrl, set: (obj, value) => { obj.blobUrl = value; } }, metadata: _metadata }, _blobUrl_initializers, _blobUrl_extraInitializers);
            __esDecorate(this, null, _lastSourceId_decorators, { kind: "accessor", name: "lastSourceId", static: false, private: false, access: { has: obj => "lastSourceId" in obj, get: obj => obj.lastSourceId, set: (obj, value) => { obj.lastSourceId = value; } }, metadata: _metadata }, _lastSourceId_initializers, _lastSourceId_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ImageBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
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
        get _imageElement() {
            const imageElement = this.isInSurface
                ? this._edgelessImage
                : this._pageImage;
            return imageElement;
        }
        get resizeImg() {
            return this._imageElement?.resizeImg;
        }
        get imageCard() {
            return this._imageCard;
        }
        #_imageCard_accessor_storage;
        get _imageCard() { return this.#_imageCard_accessor_storage; }
        set _imageCard(value) { this.#_imageCard_accessor_storage = value; }
        #_pageImage_accessor_storage;
        get _pageImage() { return this.#_pageImage_accessor_storage; }
        set _pageImage(value) { this.#_pageImage_accessor_storage = value; }
        #_edgelessImage_accessor_storage;
        get _edgelessImage() { return this.#_edgelessImage_accessor_storage; }
        set _edgelessImage(value) { this.#_edgelessImage_accessor_storage = value; }
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
        #retryCount_accessor_storage;
        get retryCount() { return this.#retryCount_accessor_storage; }
        set retryCount(value) { this.#retryCount_accessor_storage = value; }
        #blob_accessor_storage;
        get blob() { return this.#blob_accessor_storage; }
        set blob(value) { this.#blob_accessor_storage = value; }
        #blobUrl_accessor_storage;
        get blobUrl() { return this.#blobUrl_accessor_storage; }
        set blobUrl(value) { this.#blobUrl_accessor_storage = value; }
        #lastSourceId_accessor_storage;
        get lastSourceId() { return this.#lastSourceId_accessor_storage; }
        set lastSourceId(value) { this.#lastSourceId_accessor_storage = value; }
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
        connectedCallback() {
            super.connectedCallback();
            this.refreshData();
            this.contentEditable = 'false';
            const parent = this.host.doc.getParent(this.model);
            this._isInSurface = parent?.flavour === 'affine:surface';
            this.blockContainerStyles = this._isInSurface
                ? undefined
                : { margin: '18px 0' };
            this.model.propsUpdated.on(({ key }) => {
                if (key === 'sourceId') {
                    this.refreshData();
                }
            });
        }
        disconnectedCallback() {
            if (this.blobUrl) {
                URL.revokeObjectURL(this.blobUrl);
            }
            super.disconnectedCallback();
        }
        updated() {
            this._imageCard?.requestUpdate();
        }
        renderBlock() {
            let containerStyleMap = styleMap({
                position: 'relative',
                width: '100%',
            });
            if (this.isInSurface) {
                const { id, xywh, rotate } = this.model;
                const bound = Bound.deserialize(this.edgeless?.service.getElementById(id)?.xywh ?? xywh);
                containerStyleMap = styleMap({
                    width: `${bound.w}px`,
                    height: `${bound.h}px`,
                    transform: `rotate(${rotate}deg)`,
                    transformOrigin: 'center',
                });
            }
            return html `
      <div
        class="affine-image-container"
        style=${containerStyleMap}
        @click=${this._handleClick}
      >
        ${this.loading || this.error
                ? html `<affine-image-block-card
              .block=${this}
            ></affine-image-block-card>`
                : this.isInSurface
                    ? html `<affine-edgeless-image
                .url=${this.blobUrl}
                @error=${(_) => {
                        this.error = true;
                    }}
              ></affine-edgeless-image>`
                    : html `<affine-page-image .block=${this}></affine-page-image>`}
      </div>

      ${this.isInSurface ? nothing : Object.values(this.widgets)}
    `;
        }
    };
    return ImageBlockComponent = _classThis;
})();
export { ImageBlockComponent };
//# sourceMappingURL=image-block.js.map