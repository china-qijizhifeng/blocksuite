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
import { BlockElement } from '@blocksuite/block-std';
import { html, nothing } from 'lit';
import { query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
let BlockComponent = (() => {
    let _classSuper = BlockElement;
    let __captionEditor_decorators;
    let __captionEditor_initializers = [];
    let __captionEditor_extraInitializers = [];
    return class BlockComponent extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __captionEditor_decorators = [query('.affine-block-component > block-caption-editor')];
            __esDecorate(this, null, __captionEditor_decorators, { kind: "accessor", name: "_captionEditor", static: false, private: false, access: { has: obj => "_captionEditor" in obj, get: obj => obj._captionEditor, set: (obj, value) => { obj._captionEditor = value; } }, metadata: _metadata }, __captionEditor_initializers, __captionEditor_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get captionEditor() {
            if (!this.useCaptionEditor || !this._captionEditor)
                throw new Error('Oops! Please enable useCaptionEditor before accessing captionEditor');
            return this._captionEditor;
        }
        #_captionEditor_accessor_storage = __runInitializers(this, __captionEditor_initializers, void 0);
        get _captionEditor() { return this.#_captionEditor_accessor_storage; }
        set _captionEditor(value) { this.#_captionEditor_accessor_storage = value; }
        #useCaptionEditor_accessor_storage = (__runInitializers(this, __captionEditor_extraInitializers), false);
        get useCaptionEditor() { return this.#useCaptionEditor_accessor_storage; }
        set useCaptionEditor(value) { this.#useCaptionEditor_accessor_storage = value; }
        #showBlockSelection_accessor_storage = true;
        get showBlockSelection() { return this.#showBlockSelection_accessor_storage; }
        set showBlockSelection(value) { this.#showBlockSelection_accessor_storage = value; }
        #blockContainerStyles_accessor_storage = undefined;
        get blockContainerStyles() { return this.#blockContainerStyles_accessor_storage; }
        set blockContainerStyles(value) { this.#blockContainerStyles_accessor_storage = value; }
        constructor() {
            super();
            this.addRenderer(this._renderWithWidget);
        }
        _renderWithWidget(content) {
            const style = styleMap({
                position: 'relative',
                ...this.blockContainerStyles,
            });
            return html `<div style=${style} class="affine-block-component">
      ${content}
      ${this.useCaptionEditor
                ? html `<block-caption-editor .block=${this}></block-caption-editor>`
                : nothing}
      ${this.showBlockSelection
                ? html `<affine-block-selection .block=${this}></affine-block-selection>`
                : nothing}
    </div>`;
        }
    };
})();
export { BlockComponent };
//# sourceMappingURL=block-component.js.map