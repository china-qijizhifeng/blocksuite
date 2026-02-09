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
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { humanFileSize } from '../../_common/utils/math.js';
import { FailedImageIcon, ImageIcon, LoadingIcon } from '../styles.js';
export const SURFACE_IMAGE_CARD_WIDTH = 220;
export const SURFACE_IMAGE_CARD_HEIGHT = 122;
export const NOTE_IMAGE_CARD_WIDTH = 752;
export const NOTE_IMAGE_CARD_HEIGHT = 78;
let AffineImageCard = (() => {
    let _classDecorators = [customElement('affine-image-block-card')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _block_decorators;
    let _block_initializers = [];
    let _block_extraInitializers = [];
    var AffineImageCard = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _block_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _block_decorators, { kind: "accessor", name: "block", static: false, private: false, access: { has: obj => "block" in obj, get: obj => obj.block, set: (obj, value) => { obj.block = value; } }, metadata: _metadata }, _block_initializers, _block_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineImageCard = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .affine-image-block-card-container {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .affine-image-block-card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      background-color: var(--affine-background-secondary-color, #f4f4f5);
      border-radius: 8px;
      border: 1px solid var(--affine-background-tertiary-color, #eee);
      padding: 12px;
    }

    .affine-image-block-card-content {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--affine-placeholder-color);
      text-align: justify;
      font-family: var(--affine-font-family);
      font-size: var(--affine-font-sm);
      font-style: normal;
      font-weight: 600;
      line-height: var(--affine-line-height);
      user-select: none;
    }

    .affine-image-card-size {
      overflow: hidden;
      padding-top: 12px;
      color: var(--affine-text-secondary-color);
      text-overflow: ellipsis;
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
      user-select: none;
    }
  `; }
        #block_accessor_storage = __runInitializers(this, _block_initializers, void 0);
        get block() { return this.#block_accessor_storage; }
        set block(value) { this.#block_accessor_storage = value; }
        render() {
            const { isInSurface, loading, error, model } = this.block;
            const width = isInSurface
                ? `${SURFACE_IMAGE_CARD_WIDTH}px`
                : `${NOTE_IMAGE_CARD_WIDTH}px`;
            const height = isInSurface
                ? `${SURFACE_IMAGE_CARD_HEIGHT}px`
                : `${NOTE_IMAGE_CARD_HEIGHT}px`;
            const rotate = isInSurface ? model.rotate : 0;
            const cardStyleMap = styleMap({
                transform: `rotate(${rotate}deg)`,
                transformOrigin: 'center',
                width,
                height,
            });
            const titleIcon = loading
                ? LoadingIcon
                : error
                    ? FailedImageIcon
                    : ImageIcon;
            const titleText = loading
                ? 'Loading image...'
                : error
                    ? 'Image loading failed.'
                    : 'Image';
            const size = !!model.size && model.size > 0
                ? humanFileSize(model.size, true, 0)
                : null;
            return html `
      <div class="affine-image-block-card-container">
        <div class="affine-image-block-card drag-target" style=${cardStyleMap}>
          <div class="affine-image-block-card-content">
            ${titleIcon}
            <span class="affine-image-block-card-title-text">${titleText}</span>
          </div>
          <div class="affine-image-card-size">${size}</div>
        </div>
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _block_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineImageCard = _classThis;
})();
export { AffineImageCard };
//# sourceMappingURL=image-card.js.map