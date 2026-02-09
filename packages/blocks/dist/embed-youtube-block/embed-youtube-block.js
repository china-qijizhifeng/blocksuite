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
import { html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { EMBED_CARD_HEIGHT, EMBED_CARD_WIDTH } from '../_common/consts.js';
import { EmbedBlockElement } from '../_common/embed-block-helper/embed-block-element.js';
import { OpenIcon } from '../_common/icons/text.js';
import { getEmbedCardIcons } from '../_common/utils/url.js';
import { youtubeUrlRegex, } from './embed-youtube-model.js';
import { styles, YoutubeIcon } from './styles.js';
import { refreshEmbedYoutubeUrlData } from './utils.js';
let EmbedYoutubeBlockComponent = (() => {
    let _classDecorators = [customElement('affine-embed-youtube-block')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EmbedBlockElement;
    let __isSelected_decorators;
    let __isSelected_initializers = [];
    let __isSelected_extraInitializers = [];
    let __showOverlay_decorators;
    let __showOverlay_initializers = [];
    let __showOverlay_extraInitializers = [];
    let __showImage_decorators;
    let __showImage_initializers = [];
    let __showImage_extraInitializers = [];
    let _loading_decorators;
    let _loading_initializers = [];
    let _loading_extraInitializers = [];
    var EmbedYoutubeBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_isSelected_accessor_storage = __runInitializers(this, __isSelected_initializers, false);
            this.#_showOverlay_accessor_storage = (__runInitializers(this, __isSelected_extraInitializers), __runInitializers(this, __showOverlay_initializers, true));
            this.#_showImage_accessor_storage = (__runInitializers(this, __showOverlay_extraInitializers), __runInitializers(this, __showImage_initializers, false));
            this._isDragging = (__runInitializers(this, __showImage_extraInitializers), false);
            this._isResizing = false;
            this._cardStyle = 'video';
            this.#loading_accessor_storage = __runInitializers(this, _loading_initializers, false);
            this.open = (__runInitializers(this, _loading_extraInitializers), () => {
                let link = this.model.url;
                if (!link.match(/^[a-zA-Z]+:\/\//)) {
                    link = 'https://' + link;
                }
                window.open(link, '_blank');
            });
            this.refreshData = () => {
                refreshEmbedYoutubeUrlData(this, this.fetchAbortController.signal).catch(console.error);
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __isSelected_decorators = [state()];
            __showOverlay_decorators = [state()];
            __showImage_decorators = [state()];
            _loading_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __isSelected_decorators, { kind: "accessor", name: "_isSelected", static: false, private: false, access: { has: obj => "_isSelected" in obj, get: obj => obj._isSelected, set: (obj, value) => { obj._isSelected = value; } }, metadata: _metadata }, __isSelected_initializers, __isSelected_extraInitializers);
            __esDecorate(this, null, __showOverlay_decorators, { kind: "accessor", name: "_showOverlay", static: false, private: false, access: { has: obj => "_showOverlay" in obj, get: obj => obj._showOverlay, set: (obj, value) => { obj._showOverlay = value; } }, metadata: _metadata }, __showOverlay_initializers, __showOverlay_extraInitializers);
            __esDecorate(this, null, __showImage_decorators, { kind: "accessor", name: "_showImage", static: false, private: false, access: { has: obj => "_showImage" in obj, get: obj => obj._showImage, set: (obj, value) => { obj._showImage = value; } }, metadata: _metadata }, __showImage_initializers, __showImage_extraInitializers);
            __esDecorate(this, null, _loading_decorators, { kind: "accessor", name: "loading", static: false, private: false, access: { has: obj => "loading" in obj, get: obj => obj.loading, set: (obj, value) => { obj.loading = value; } }, metadata: _metadata }, _loading_initializers, _loading_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EmbedYoutubeBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        #_isSelected_accessor_storage;
        get _isSelected() { return this.#_isSelected_accessor_storage; }
        set _isSelected(value) { this.#_isSelected_accessor_storage = value; }
        #_showOverlay_accessor_storage;
        get _showOverlay() { return this.#_showOverlay_accessor_storage; }
        set _showOverlay(value) { this.#_showOverlay_accessor_storage = value; }
        #_showImage_accessor_storage;
        get _showImage() { return this.#_showImage_accessor_storage; }
        set _showImage(value) { this.#_showImage_accessor_storage = value; }
        #loading_accessor_storage;
        get loading() { return this.#loading_accessor_storage; }
        set loading(value) { this.#loading_accessor_storage = value; }
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
            this.open();
        }
        connectedCallback() {
            super.connectedCallback();
            if (!this.model.videoId) {
                this.doc.withoutTransact(() => {
                    const url = this.model.url;
                    const urlMatch = url.match(youtubeUrlRegex);
                    if (urlMatch) {
                        const [, videoId] = urlMatch;
                        this.doc.updateBlock(this.model, {
                            videoId,
                        });
                    }
                });
            }
            if (!this.model.description && !this.model.title) {
                this.doc.withoutTransact(() => {
                    this.refreshData();
                });
            }
            this.disposables.add(this.model.propsUpdated.on(({ key }) => {
                this.requestUpdate();
                if (key === 'url') {
                    this.refreshData();
                }
            }));
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
            matchMedia('print').addEventListener('change', () => {
                this._showImage = matchMedia('print').matches;
            });
            if (this.isInSurface) {
                const surface = this.surface;
                assertExists(surface);
                this.disposables.add(this.model.propsUpdated.on(() => {
                    this.requestUpdate();
                }));
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
        renderBlock() {
            const { image, title = 'YouTube', description, creator, creatorImage, videoId, style, } = this.model;
            this._cardStyle = style;
            this._width = EMBED_CARD_WIDTH[this._cardStyle];
            this._height = EMBED_CARD_HEIGHT[this._cardStyle];
            const loading = this.loading;
            const { LoadingIcon, EmbedCardBannerIcon } = getEmbedCardIcons();
            const titleIcon = loading ? LoadingIcon : YoutubeIcon;
            const titleText = loading ? 'Loading...' : title;
            const descriptionText = loading ? '' : description;
            const bannerImage = !loading && image
                ? html `<object type="image/webp" data=${image} draggable="false">
            ${EmbedCardBannerIcon}
          </object>`
                : EmbedCardBannerIcon;
            const creatorImageEl = !loading && creatorImage
                ? html `<object
            type="image/webp"
            data=${creatorImage}
            draggable="false"
          ></object>`
                : nothing;
            return this.renderEmbed(() => html `
        <div>
          <div
            class=${classMap({
                'affine-embed-youtube-block': true,
                loading,
                selected: this._isSelected,
            })}
            @click=${this._handleClick}
            @dblclick=${this._handleDoubleClick}
          >
            <div class="affine-embed-youtube-video">
              ${videoId
                ? html `
                    <div class="affine-embed-youtube-video-iframe-container">
                      <iframe
                        id="ytplayer"
                        type="text/html"
                        src=${`https://www.youtube.com/embed/${videoId}`}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                      ></iframe>
                      <div
                        class=${classMap({
                    'affine-embed-youtube-video-iframe-overlay': true,
                    hide: !this._showOverlay,
                })}
                      ></div>
                      <img
                        class=${classMap({
                    'affine-embed-youtube-video-iframe-overlay': true,
                    'media-print': true,
                    hide: !this._showImage,
                })}
                        src=${`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt="YouTube Video"
                      />
                    </div>
                  `
                : bannerImage}
            </div>
            <div class="affine-embed-youtube-content">
              <div class="affine-embed-youtube-content-header">
                <div class="affine-embed-youtube-content-title-icon">
                  ${titleIcon}
                </div>

                <div class="affine-embed-youtube-content-title-text">
                  ${titleText}
                </div>

                <div class="affine-embed-youtube-content-creator-image">
                  ${creatorImageEl}
                </div>

                <div class="affine-embed-youtube-content-creator-text">
                  ${creator}
                </div>
              </div>

              <div class="affine-embed-youtube-content-description">
                ${descriptionText}
              </div>

              <div class="affine-embed-youtube-content-url" @click=${this.open}>
                <span>www.youtube.com</span>

                <div class="affine-embed-youtube-content-url-icon">
                  ${OpenIcon}
                </div>
              </div>
            </div>
          </div>
        </div>
      `);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EmbedYoutubeBlockComponent = _classThis;
})();
export { EmbedYoutubeBlockComponent };
//# sourceMappingURL=embed-youtube-block.js.map