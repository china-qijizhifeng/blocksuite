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
let LiteralElement = (() => {
    let _classSuper = WithDisposable(ShadowlessElement);
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _value_decorators;
    let _value_initializers = [];
    let _value_extraInitializers = [];
    let _onChange_decorators;
    let _onChange_initializers = [];
    let _onChange_extraInitializers = [];
    return class LiteralElement extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _type_decorators = [property({ attribute: false })];
            _value_decorators = [property({ attribute: false })];
            _onChange_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _type_decorators, { kind: "accessor", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(this, null, _value_decorators, { kind: "accessor", name: "value", static: false, private: false, access: { has: obj => "value" in obj, get: obj => obj.value, set: (obj, value) => { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
            __esDecorate(this, null, _onChange_decorators, { kind: "accessor", name: "onChange", static: false, private: false, access: { has: obj => "onChange" in obj, get: obj => obj.onChange, set: (obj, value) => { obj.onChange = value; } }, metadata: _metadata }, _onChange_initializers, _onChange_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #type_accessor_storage = __runInitializers(this, _type_initializers, void 0);
        get type() { return this.#type_accessor_storage; }
        set type(value) { this.#type_accessor_storage = value; }
        #value_accessor_storage = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _value_initializers, undefined));
        get value() { return this.#value_accessor_storage; }
        set value(value) { this.#value_accessor_storage = value; }
        #onChange_accessor_storage = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _onChange_initializers, void 0));
        get onChange() { return this.#onChange_accessor_storage; }
        set onChange(value) { this.#onChange_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _onChange_extraInitializers);
        }
    };
})();
export { LiteralElement };
let BooleanLiteral = (() => {
    let _classDecorators = [customElement('data-view-literal-boolean-view')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LiteralElement;
    var BooleanLiteral = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            BooleanLiteral = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        render() {
            return this.value ? 'True' : 'False';
        }
    };
    return BooleanLiteral = _classThis;
})();
export { BooleanLiteral };
let NumberLiteral = (() => {
    let _classDecorators = [customElement('data-view-literal-number-view')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LiteralElement;
    var NumberLiteral = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            NumberLiteral = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    data-view-literal-number-view {
      display: block;
      max-width: 100px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  `; }
        render() {
            return (this.value?.toString() ?? html `<span class="dv-color-2">Empty</span>`);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return NumberLiteral = _classThis;
})();
export { NumberLiteral };
let StringLiteral = (() => {
    let _classDecorators = [customElement('data-view-literal-string-view')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LiteralElement;
    var StringLiteral = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            StringLiteral = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    data-view-literal-string-view {
      display: block;
      max-width: 100px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  `; }
        render() {
            return (this.value?.toString() ?? html `<span class="dv-color-2">Empty</span>`);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return StringLiteral = _classThis;
})();
export { StringLiteral };
//# sourceMappingURL=literal-element.js.map