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
import { Text } from '@blocksuite/store';
import { css, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { stopPropagation } from '../utils/event.js';
import { asyncFocusRichText } from '../utils/selection.js';
let BlockCaptionEditor = (() => {
    let _classDecorators = [customElement('block-caption-editor')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _block_decorators;
    let _block_initializers = [];
    let _block_extraInitializers = [];
    let _display_decorators;
    let _display_initializers = [];
    let _display_extraInitializers = [];
    let _caption_decorators;
    let _caption_initializers = [];
    let _caption_extraInitializers = [];
    let _input_decorators;
    let _input_initializers = [];
    let _input_extraInitializers = [];
    var BlockCaptionEditor = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._focus = false;
            this.#block_accessor_storage = __runInitializers(this, _block_initializers, void 0);
            this.#display_accessor_storage = (__runInitializers(this, _block_extraInitializers), __runInitializers(this, _display_initializers, false));
            this.#caption_accessor_storage = (__runInitializers(this, _display_extraInitializers), __runInitializers(this, _caption_initializers, undefined));
            this.#input_accessor_storage = (__runInitializers(this, _caption_extraInitializers), __runInitializers(this, _input_initializers, void 0));
            this.show = (__runInitializers(this, _input_extraInitializers), () => {
                this.display = true;
                this.updateComplete.then(() => this.input.focus()).catch(console.error);
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _block_decorators = [property({ attribute: false })];
            _display_decorators = [state()];
            _caption_decorators = [state()];
            _input_decorators = [query('.block-caption-editor')];
            __esDecorate(this, null, _block_decorators, { kind: "accessor", name: "block", static: false, private: false, access: { has: obj => "block" in obj, get: obj => obj.block, set: (obj, value) => { obj.block = value; } }, metadata: _metadata }, _block_initializers, _block_extraInitializers);
            __esDecorate(this, null, _display_decorators, { kind: "accessor", name: "display", static: false, private: false, access: { has: obj => "display" in obj, get: obj => obj.display, set: (obj, value) => { obj.display = value; } }, metadata: _metadata }, _display_initializers, _display_extraInitializers);
            __esDecorate(this, null, _caption_decorators, { kind: "accessor", name: "caption", static: false, private: false, access: { has: obj => "caption" in obj, get: obj => obj.caption, set: (obj, value) => { obj.caption = value; } }, metadata: _metadata }, _caption_initializers, _caption_extraInitializers);
            __esDecorate(this, null, _input_decorators, { kind: "accessor", name: "input", static: false, private: false, access: { has: obj => "input" in obj, get: obj => obj.input, set: (obj, value) => { obj.input = value; } }, metadata: _metadata }, _input_initializers, _input_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            BlockCaptionEditor = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .block-caption-editor {
      display: inline-table;
      resize: none;
      width: 100%;
      outline: none;
      border: 0;
      background: transparent;
      color: var(--affine-icon-color);
      font-size: var(--affine-font-sm);
      font-family: inherit;
      text-align: center;
    }
    .block-caption-editor::placeholder {
      color: var(--affine-placeholder-color);
    }
  `; }
        #block_accessor_storage;
        get block() { return this.#block_accessor_storage; }
        set block(value) { this.#block_accessor_storage = value; }
        #display_accessor_storage;
        get display() { return this.#display_accessor_storage; }
        set display(value) { this.#display_accessor_storage = value; }
        #caption_accessor_storage;
        get caption() { return this.#caption_accessor_storage; }
        set caption(value) { this.#caption_accessor_storage = value; }
        #input_accessor_storage;
        get input() { return this.#input_accessor_storage; }
        set input(value) { this.#input_accessor_storage = value; }
        _onInputChange(e) {
            const target = e.target;
            this.caption = target.value;
            this.block.doc.updateBlock(this.block.model, {
                caption: this.caption,
            });
        }
        _onInputFocus() {
            this._focus = true;
        }
        _onInputBlur() {
            this._focus = false;
            this.display = !!this.caption?.length;
        }
        _onCaptionKeydown(event) {
            event.stopPropagation();
            if (this.block.isInSurface || event.isComposing) {
                return;
            }
            if (event.key === 'Enter') {
                event.preventDefault();
                const doc = this.block.doc;
                const target = event.target;
                const start = target.selectionStart;
                if (start === null) {
                    return;
                }
                const model = this.block.model;
                const parent = doc.getParent(model);
                if (!parent) {
                    return;
                }
                const value = target.value;
                const caption = value.slice(0, start);
                doc.updateBlock(model, { caption });
                const nextBlockText = value.slice(start);
                const index = parent.children.indexOf(model);
                const id = doc.addBlock('affine:paragraph', { text: new Text(nextBlockText) }, parent, index + 1);
                asyncFocusRichText(this.block.host, id)?.catch(console.error);
            }
        }
        connectedCallback() {
            super.connectedCallback();
            this.caption = this.block.model.caption;
            this.disposables.add(this.block.model.propsUpdated.on(({ key }) => {
                if (key === 'caption') {
                    this.caption = this.block.model.caption;
                    if (!this._focus) {
                        this.display = !!this.caption?.length;
                    }
                }
            }));
        }
        render() {
            if (!this.display && !this.caption) {
                return nothing;
            }
            return html `<textarea
      .disabled=${this.block.doc.readonly}
      placeholder="Write a caption"
      class="block-caption-editor"
      .value=${this.caption ?? ''}
      @input=${this._onInputChange}
      @focus=${this._onInputFocus}
      @blur=${this._onInputBlur}
      @pointerdown=${stopPropagation}
      @click=${stopPropagation}
      @dblclick=${stopPropagation}
      @cut=${stopPropagation}
      @copy=${stopPropagation}
      @paste=${stopPropagation}
      @keydown=${this._onCaptionKeydown}
      @keyup=${stopPropagation}
    ></textarea>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return BlockCaptionEditor = _classThis;
})();
export { BlockCaptionEditor };
//# sourceMappingURL=block-caption.js.map