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
import { customElement, property, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ImageResizeManager } from '../image-resize-manager.js';
import { shouldResizeImage } from '../utils.js';
import { ImageSelectedRect } from './image-selected-rect.js';
let ImageBlockPageComponent = (() => {
    let _classDecorators = [customElement('affine-page-image')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _block_decorators;
    let _block_initializers = [];
    let _block_extraInitializers = [];
    let __isSelected_decorators;
    let __isSelected_initializers = [];
    let __isSelected_extraInitializers = [];
    let _resizeImg_decorators;
    let _resizeImg_initializers = [];
    let _resizeImg_extraInitializers = [];
    var ImageBlockPageComponent = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _block_decorators = [property({ attribute: false })];
            __isSelected_decorators = [state()];
            _resizeImg_decorators = [query('.resizable-img')];
            __esDecorate(this, null, _block_decorators, { kind: "accessor", name: "block", static: false, private: false, access: { has: obj => "block" in obj, get: obj => obj.block, set: (obj, value) => { obj.block = value; } }, metadata: _metadata }, _block_initializers, _block_extraInitializers);
            __esDecorate(this, null, __isSelected_decorators, { kind: "accessor", name: "_isSelected", static: false, private: false, access: { has: obj => "_isSelected" in obj, get: obj => obj._isSelected, set: (obj, value) => { obj._isSelected = value; } }, metadata: _metadata }, __isSelected_initializers, __isSelected_extraInitializers);
            __esDecorate(this, null, _resizeImg_decorators, { kind: "accessor", name: "resizeImg", static: false, private: false, access: { has: obj => "resizeImg" in obj, get: obj => obj.resizeImg, set: (obj, value) => { obj.resizeImg = value; } }, metadata: _metadata }, _resizeImg_initializers, _resizeImg_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ImageBlockPageComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get _host() {
            return this.block.host;
        }
        get _doc() {
            return this.block.doc;
        }
        get _model() {
            return this.block.model;
        }
        static { this.styles = css `
    affine-page-image {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 8px;
      line-height: 0;
      cursor: pointer;
    }

    affine-page-image .resizable-img {
      position: relative;
      max-width: 100%;
    }

    affine-page-image .resizable-img img {
      width: 100%;
      height: 100%;
    }
  `; }
        #block_accessor_storage;
        get block() { return this.#block_accessor_storage; }
        set block(value) { this.#block_accessor_storage = value; }
        #_isSelected_accessor_storage;
        get _isSelected() { return this.#_isSelected_accessor_storage; }
        set _isSelected(value) { this.#_isSelected_accessor_storage = value; }
        #resizeImg_accessor_storage;
        get resizeImg() { return this.#resizeImg_accessor_storage; }
        set resizeImg(value) { this.#resizeImg_accessor_storage = value; }
        _bindKeyMap() {
            const selection = this._host.selection;
            const addParagraph = (ctx) => {
                const parent = this._doc.getParent(this._model);
                if (!parent)
                    return;
                const index = parent.children.indexOf(this._model);
                const blockId = this._doc.addBlock('affine:paragraph', {}, parent, index + 1);
                const event = ctx.get('defaultState').event;
                event.preventDefault();
                selection.update(selList => selList
                    .filter(sel => !sel.is('image'))
                    .concat(selection.create('text', {
                    from: {
                        blockId,
                        index: 0,
                        length: 0,
                    },
                    to: null,
                })));
            };
            this.block.bindHotKey({
                Escape: () => {
                    selection.update(selList => {
                        return selList.map(sel => {
                            const current = sel.is('image') && sel.blockId === this.block.blockId;
                            if (current) {
                                return selection.create('block', { blockId: this.block.blockId });
                            }
                            return sel;
                        });
                    });
                    return true;
                },
                Delete: ctx => {
                    if (!this._isSelected)
                        return;
                    addParagraph(ctx);
                    this._doc.deleteBlock(this._model);
                    return true;
                },
                Backspace: ctx => {
                    if (!this._isSelected)
                        return;
                    addParagraph(ctx);
                    this._doc.deleteBlock(this._model);
                    return true;
                },
                Enter: ctx => {
                    if (!this._isSelected)
                        return;
                    addParagraph(ctx);
                    return true;
                },
            });
        }
        _handleSelection() {
            const selection = this._host.selection;
            this._disposables.add(selection.slots.changed.on(selList => {
                this._isSelected = selList.some(sel => sel.blockId === this.block.blockId && sel.is('image'));
            }));
            this._disposables.add(this._model.propsUpdated.on(() => {
                this.requestUpdate();
            }));
            this._disposables.addFromEvent(this.resizeImg, 'click', (event) => {
                event.stopPropagation();
                selection.update(selList => {
                    return selList
                        .filter(sel => !['text', 'block', 'image'].includes(sel.type))
                        .concat(selection.create('image', { blockId: this.block.blockId }));
                });
                return true;
            });
            this.block.handleEvent('click', () => {
                if (!this._isSelected)
                    return;
                selection.update(selList => selList.filter(sel => !(sel.is('image') && sel.blockId === this.block.blockId)));
            }, {
                global: true,
            });
        }
        _observeDrag() {
            const imageResizeManager = new ImageResizeManager();
            this._disposables.add(this._host.event.add('dragStart', ctx => {
                const pointerState = ctx.get('pointerState');
                const target = pointerState.event.target;
                if (shouldResizeImage(this, target)) {
                    this._isDragging = true;
                    imageResizeManager.onStart(pointerState);
                    return true;
                }
                return false;
            }));
            this._disposables.add(this._host.event.add('dragMove', ctx => {
                const pointerState = ctx.get('pointerState');
                if (this._isDragging) {
                    imageResizeManager.onMove(pointerState);
                    return true;
                }
                return false;
            }));
            this._disposables.add(this._host.event.add('dragEnd', () => {
                if (this._isDragging) {
                    this._isDragging = false;
                    imageResizeManager.onEnd();
                    return true;
                }
                return false;
            }));
        }
        _handleError() {
            this.block.error = true;
        }
        _normalizeImageSize() {
            // If is dragging, we should use the real size of the image
            if (this._isDragging && this.resizeImg) {
                return {
                    width: this.resizeImg.style.width,
                };
            }
            const { width, height } = this._model;
            if (!width || !height) {
                return {
                    width: 'unset',
                    height: 'unset',
                };
            }
            return {
                width: `${width}px`,
            };
        }
        connectedCallback() {
            super.connectedCallback();
            this._bindKeyMap();
            this._observeDrag();
        }
        firstUpdated(changedProperties) {
            super.firstUpdated(changedProperties);
            this._handleSelection();
            // The embed block can not be focused,
            // so the active element will be the last activated element.
            // If the active element is the title textarea,
            // any event will dispatch from it and be ignored. (Most events will ignore title)
            // so we need to blur it.
            // See also https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
            this.addEventListener('click', () => {
                if (document.activeElement &&
                    document.activeElement instanceof HTMLElement) {
                    document.activeElement.blur();
                }
            });
        }
        render() {
            const imageSize = this._normalizeImageSize();
            const imageSelectedRect = this._isSelected
                ? ImageSelectedRect(this._doc.readonly)
                : null;
            return html `
      <div class="resizable-img" style=${styleMap(imageSize)}>
        <img
          class="drag-target"
          src=${this.block.blobUrl ?? ''}
          draggable="false"
          @error=${this._handleError}
        />

        ${imageSelectedRect}
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            this._isDragging = false;
            this.#block_accessor_storage = __runInitializers(this, _block_initializers, void 0);
            this.#_isSelected_accessor_storage = (__runInitializers(this, _block_extraInitializers), __runInitializers(this, __isSelected_initializers, false));
            this.#resizeImg_accessor_storage = (__runInitializers(this, __isSelected_extraInitializers), __runInitializers(this, _resizeImg_initializers, void 0));
            __runInitializers(this, _resizeImg_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ImageBlockPageComponent = _classThis;
})();
export { ImageBlockPageComponent };
//# sourceMappingURL=page-image-block.js.map