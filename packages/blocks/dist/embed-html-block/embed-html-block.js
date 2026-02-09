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
import './components/fullscreen-toolbar.js';
import { assertExists } from '@blocksuite/global/utils';
import { html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { EMBED_CARD_HEIGHT, EMBED_CARD_WIDTH } from '../_common/consts.js';
import { EmbedBlockElement } from '../_common/embed-block-helper/index.js';
import { Bound } from '../surface-block/utils/bound.js';
import { HtmlIcon, styles } from './styles.js';
let EmbedHtmlBlockComponent = (() => {
    let _classDecorators = [customElement('affine-embed-html-block')];
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
    let _iframeWrapper_decorators;
    let _iframeWrapper_initializers = [];
    let _iframeWrapper_extraInitializers = [];
    var EmbedHtmlBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_isSelected_accessor_storage = __runInitializers(this, __isSelected_initializers, false);
            this.#_showOverlay_accessor_storage = (__runInitializers(this, __isSelected_extraInitializers), __runInitializers(this, __showOverlay_initializers, true));
            this._isDragging = (__runInitializers(this, __showOverlay_extraInitializers), false);
            this._isResizing = false;
            this._cardStyle = 'html';
            this.#iframeWrapper_accessor_storage = __runInitializers(this, _iframeWrapper_initializers, void 0);
            this.open = (__runInitializers(this, _iframeWrapper_extraInitializers), () => {
                this.iframeWrapper?.requestFullscreen().catch(console.error);
            });
            this.close = () => {
                document.exitFullscreen().catch(console.error);
            };
            this.refreshData = () => { };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __isSelected_decorators = [state()];
            __showOverlay_decorators = [state()];
            _iframeWrapper_decorators = [query('.embed-html-block-iframe-wrapper')];
            __esDecorate(this, null, __isSelected_decorators, { kind: "accessor", name: "_isSelected", static: false, private: false, access: { has: obj => "_isSelected" in obj, get: obj => obj._isSelected, set: (obj, value) => { obj._isSelected = value; } }, metadata: _metadata }, __isSelected_initializers, __isSelected_extraInitializers);
            __esDecorate(this, null, __showOverlay_decorators, { kind: "accessor", name: "_showOverlay", static: false, private: false, access: { has: obj => "_showOverlay" in obj, get: obj => obj._showOverlay, set: (obj, value) => { obj._showOverlay = value; } }, metadata: _metadata }, __showOverlay_initializers, __showOverlay_extraInitializers);
            __esDecorate(this, null, _iframeWrapper_decorators, { kind: "accessor", name: "iframeWrapper", static: false, private: false, access: { has: obj => "iframeWrapper" in obj, get: obj => obj.iframeWrapper, set: (obj, value) => { obj.iframeWrapper = value; } }, metadata: _metadata }, _iframeWrapper_initializers, _iframeWrapper_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EmbedHtmlBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        #_isSelected_accessor_storage;
        get _isSelected() { return this.#_isSelected_accessor_storage; }
        set _isSelected(value) { this.#_isSelected_accessor_storage = value; }
        #_showOverlay_accessor_storage;
        get _showOverlay() { return this.#_showOverlay_accessor_storage; }
        set _showOverlay(value) { this.#_showOverlay_accessor_storage = value; }
        #iframeWrapper_accessor_storage;
        get iframeWrapper() { return this.#iframeWrapper_accessor_storage; }
        set iframeWrapper(value) { this.#iframeWrapper_accessor_storage = value; }
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
            const { style, xywh } = this.model;
            this._cardStyle = style;
            const bound = Bound.deserialize(xywh);
            this._width = this.isInSurface ? bound.w : EMBED_CARD_WIDTH[style];
            this._height = this.isInSurface ? bound.h : EMBED_CARD_HEIGHT[style];
            const titleText = 'Basic HTML Page Structure';
            const htmlSrc = `
      <style>
        body {
          margin: 0;
        }
      </style>
      ${this.model.html}
    `;
            return this.renderEmbed(() => {
                if (!this.model.html) {
                    return html ` <div class="affine-html-empty">Empty</div>`;
                }
                return html `
        <div
          class=${classMap({
                    'affine-embed-html-block': true,
                    selected: this._isSelected,
                })}
          style=${styleMap({
                    width: this.isInSurface ? `${this._width}px` : '100%',
                    height: `${this._height}px`,
                })}
          @click=${this._handleClick}
          @dblclick=${this._handleDoubleClick}
        >
          <div class="affine-embed-html">
            <div class="affine-embed-html-iframe-container">
              <div class="embed-html-block-iframe-wrapper" allowfullscreen>
                <iframe
                  class="embed-html-block-iframe"
                  sandbox="allow-scripts"
                  scrolling="no"
                  .srcdoc=${htmlSrc}
                ></iframe>
                <embed-html-fullscreen-toolbar
                  .embedHtml=${this}
                ></embed-html-fullscreen-toolbar>
              </div>

              <div
                class=${classMap({
                    'affine-embed-html-iframe-overlay': true,
                    hide: !this._showOverlay,
                })}
              ></div>
            </div>
          </div>

          <div class="affine-embed-html-title">
            <div class="affine-embed-html-title-icon">${HtmlIcon}</div>

            <div class="affine-embed-html-title-text">${titleText}</div>
          </div>
        </div>
      `;
            });
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EmbedHtmlBlockComponent = _classThis;
})();
export { EmbedHtmlBlockComponent };
//# sourceMappingURL=embed-html-block.js.map