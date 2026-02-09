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
import { html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { OpenIcon, WebIcon16 } from '../../_common/icons/text.js';
import { ThemeObserver } from '../../_common/theme/theme-observer.js';
import { getEmbedCardIcons } from '../../_common/utils/url.js';
import { styles } from '../styles.js';
let BookmarkCard = (() => {
    let _classDecorators = [customElement('bookmark-card')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let __isSelected_decorators;
    let __isSelected_initializers = [];
    let __isSelected_extraInitializers = [];
    let _bookmark_decorators;
    let _bookmark_initializers = [];
    let _bookmark_extraInitializers = [];
    let _loading_decorators;
    let _loading_initializers = [];
    let _loading_extraInitializers = [];
    let _error_decorators;
    let _error_initializers = [];
    let _error_extraInitializers = [];
    var BookmarkCard = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __isSelected_decorators = [state()];
            _bookmark_decorators = [property({ attribute: false })];
            _loading_decorators = [property({ attribute: false })];
            _error_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __isSelected_decorators, { kind: "accessor", name: "_isSelected", static: false, private: false, access: { has: obj => "_isSelected" in obj, get: obj => obj._isSelected, set: (obj, value) => { obj._isSelected = value; } }, metadata: _metadata }, __isSelected_initializers, __isSelected_extraInitializers);
            __esDecorate(this, null, _bookmark_decorators, { kind: "accessor", name: "bookmark", static: false, private: false, access: { has: obj => "bookmark" in obj, get: obj => obj.bookmark, set: (obj, value) => { obj.bookmark = value; } }, metadata: _metadata }, _bookmark_initializers, _bookmark_extraInitializers);
            __esDecorate(this, null, _loading_decorators, { kind: "accessor", name: "loading", static: false, private: false, access: { has: obj => "loading" in obj, get: obj => obj.loading, set: (obj, value) => { obj.loading = value; } }, metadata: _metadata }, _loading_initializers, _loading_extraInitializers);
            __esDecorate(this, null, _error_decorators, { kind: "accessor", name: "error", static: false, private: false, access: { has: obj => "error" in obj, get: obj => obj.error, set: (obj, value) => { obj.error = value; } }, metadata: _metadata }, _error_initializers, _error_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            BookmarkCard = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        #_isSelected_accessor_storage;
        get _isSelected() { return this.#_isSelected_accessor_storage; }
        set _isSelected(value) { this.#_isSelected_accessor_storage = value; }
        #bookmark_accessor_storage;
        get bookmark() { return this.#bookmark_accessor_storage; }
        set bookmark(value) { this.#bookmark_accessor_storage = value; }
        #loading_accessor_storage;
        get loading() { return this.#loading_accessor_storage; }
        set loading(value) { this.#loading_accessor_storage = value; }
        #error_accessor_storage;
        get error() { return this.#error_accessor_storage; }
        set error(value) { this.#error_accessor_storage = value; }
        _selectBlock() {
            const selectionManager = this.bookmark.host.selection;
            const blockSelection = selectionManager.create('block', {
                blockId: this.bookmark.blockId,
            });
            selectionManager.setGroup('note', [blockSelection]);
        }
        _handleClick(event) {
            event.stopPropagation();
            if (!this.bookmark.isInSurface) {
                this._selectBlock();
            }
        }
        _handleDoubleClick(event) {
            event.stopPropagation();
            this.bookmark.open();
        }
        _getHostName(url) {
            try {
                return new URL(url).hostname;
            }
            catch {
                return url;
            }
        }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.add(this.bookmark.model.propsUpdated.on(() => {
                this.requestUpdate();
            }));
            this._themeObserver.observe(document.documentElement);
            this._themeObserver.on(() => this.requestUpdate());
            this.disposables.add(() => this._themeObserver.dispose());
            this.disposables.add(this.bookmark.selection.slots.changed.on(() => {
                this._isSelected =
                    !!this.bookmark.selected?.is('block') ||
                        !!this.bookmark.selected?.is('surface');
            }));
        }
        render() {
            const { icon, title, url, description, image, style } = this.bookmark.model;
            const cardClassMap = classMap({
                loading: this.loading,
                error: this.error,
                [style]: true,
                selected: this._isSelected,
            });
            const domainName = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n]+)/im)?.[1];
            const titleText = this.loading
                ? 'Loading...'
                : !title
                    ? this.error
                        ? domainName ?? 'Link card'
                        : ''
                    : title;
            const { LoadingIcon, EmbedCardBannerIcon } = getEmbedCardIcons();
            const titleIconType = !icon?.split('.').pop() || icon?.split('.').pop() === 'svg'
                ? 'svg+xml'
                : icon?.split('.').pop();
            const titleIcon = this.loading
                ? LoadingIcon
                : icon
                    ? html `<object
            type="image/${titleIconType}"
            data=${icon}
            draggable="false"
          >
            ${WebIcon16}
          </object>`
                    : WebIcon16;
            const descriptionText = this.loading
                ? ''
                : !description
                    ? this.error
                        ? 'Failed to retrieve link information.'
                        : url
                    : description ?? '';
            const bannerImage = !this.loading && image
                ? html `<object type="image/webp" data=${image} draggable="false">
            ${EmbedCardBannerIcon}
          </object>`
                : EmbedCardBannerIcon;
            return html `
      <div
        class="affine-bookmark-card ${cardClassMap}"
        @click=${this._handleClick}
        @dblclick=${this._handleDoubleClick}
      >
        <div class="affine-bookmark-content">
          <div class="affine-bookmark-content-title">
            <div class="affine-bookmark-content-title-icon">${titleIcon}</div>
            <div class="affine-bookmark-content-title-text">${titleText}</div>
          </div>
          <div class="affine-bookmark-content-description">
            ${descriptionText}
          </div>
          <div class="affine-bookmark-content-url" @click=${this.bookmark.open}>
            <span>${this._getHostName(url)}</span>
            <div class="affine-bookmark-content-url-icon">${OpenIcon}</div>
          </div>
        </div>
        <div class="affine-bookmark-banner">${bannerImage}</div>
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            this.#_isSelected_accessor_storage = __runInitializers(this, __isSelected_initializers, false);
            this._themeObserver = (__runInitializers(this, __isSelected_extraInitializers), new ThemeObserver());
            this.#bookmark_accessor_storage = __runInitializers(this, _bookmark_initializers, void 0);
            this.#loading_accessor_storage = (__runInitializers(this, _bookmark_extraInitializers), __runInitializers(this, _loading_initializers, void 0));
            this.#error_accessor_storage = (__runInitializers(this, _loading_extraInitializers), __runInitializers(this, _error_initializers, void 0));
            __runInitializers(this, _error_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return BookmarkCard = _classThis;
})();
export { BookmarkCard };
//# sourceMappingURL=bookmark-card.js.map