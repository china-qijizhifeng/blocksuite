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
import { css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * Renders a the block selection.
 *
 * @example
 * ```ts
 * class Block extends LitElement {
 *   state override styles = css`
 *     :host {
 *       position: relative;
 *     }
 *
 *   render() {
 *      return html`<affine-block-selection></affine-block-selection>
 *   };
 * }
 * ```
 */
let BlockSelection = (() => {
    let _classDecorators = [customElement('affine-block-selection')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let _block_decorators;
    let _block_initializers = [];
    let _block_extraInitializers = [];
    let _borderRadius_decorators;
    let _borderRadius_initializers = [];
    let _borderRadius_extraInitializers = [];
    let _borderWidth_decorators;
    let _borderWidth_initializers = [];
    let _borderWidth_extraInitializers = [];
    var BlockSelection = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _block_decorators = [property({ attribute: false })];
            _borderRadius_decorators = [property({ attribute: false })];
            _borderWidth_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _block_decorators, { kind: "accessor", name: "block", static: false, private: false, access: { has: obj => "block" in obj, get: obj => obj.block, set: (obj, value) => { obj.block = value; } }, metadata: _metadata }, _block_initializers, _block_extraInitializers);
            __esDecorate(this, null, _borderRadius_decorators, { kind: "accessor", name: "borderRadius", static: false, private: false, access: { has: obj => "borderRadius" in obj, get: obj => obj.borderRadius, set: (obj, value) => { obj.borderRadius = value; } }, metadata: _metadata }, _borderRadius_initializers, _borderRadius_extraInitializers);
            __esDecorate(this, null, _borderWidth_decorators, { kind: "accessor", name: "borderWidth", static: false, private: false, access: { has: obj => "borderWidth" in obj, get: obj => obj.borderWidth, set: (obj, value) => { obj.borderWidth = value; } }, metadata: _metadata }, _borderWidth_initializers, _borderWidth_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            BlockSelection = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background-color: var(--affine-hover-color);
      border-color: transparent;
      border-style: solid;
    }
  `; }
        #block_accessor_storage = __runInitializers(this, _block_initializers, void 0);
        get block() { return this.#block_accessor_storage; }
        set block(value) { this.#block_accessor_storage = value; }
        #borderRadius_accessor_storage = (__runInitializers(this, _block_extraInitializers), __runInitializers(this, _borderRadius_initializers, 5));
        get borderRadius() { return this.#borderRadius_accessor_storage; }
        set borderRadius(value) { this.#borderRadius_accessor_storage = value; }
        #borderWidth_accessor_storage = (__runInitializers(this, _borderRadius_extraInitializers), __runInitializers(this, _borderWidth_initializers, 0));
        get borderWidth() { return this.#borderWidth_accessor_storage; }
        set borderWidth(value) { this.#borderWidth_accessor_storage = value; }
        updated(_changedProperties) {
            super.updated(_changedProperties);
            this.style.display = this.block.selected?.is('block') ? 'block' : 'none';
        }
        connectedCallback() {
            super.connectedCallback();
            this.style.borderRadius = `${this.borderRadius}px`;
            if (this.borderWidth !== 0) {
                this.style.boxSizing = 'content-box';
                this.style.transform = `translate(-${this.borderWidth}px, -${this.borderWidth}px)`;
            }
            this.style.borderWidth = `${this.borderWidth}px`;
            this.block.host.selection.slots.changed.on(() => this.requestUpdate());
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _borderWidth_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return BlockSelection = _classThis;
})();
export { BlockSelection };
//# sourceMappingURL=block-selection.js.map