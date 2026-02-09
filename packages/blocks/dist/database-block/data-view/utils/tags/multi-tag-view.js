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
import { css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { html } from 'lit/static-html.js';
let MultiTagView = (() => {
    let _classDecorators = [customElement('affine-multi-tag-view')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _selectContainer_decorators;
    let _selectContainer_initializers = [];
    let _selectContainer_extraInitializers = [];
    let _value_decorators;
    let _value_initializers = [];
    let _value_extraInitializers = [];
    let _options_decorators;
    let _options_initializers = [];
    let _options_extraInitializers = [];
    var MultiTagView = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _selectContainer_decorators = [query('.affine-select-cell-container')];
            _value_decorators = [property({ attribute: false })];
            _options_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _selectContainer_decorators, { kind: "accessor", name: "selectContainer", static: false, private: false, access: { has: obj => "selectContainer" in obj, get: obj => obj.selectContainer, set: (obj, value) => { obj.selectContainer = value; } }, metadata: _metadata }, _selectContainer_initializers, _selectContainer_extraInitializers);
            __esDecorate(this, null, _value_decorators, { kind: "accessor", name: "value", static: false, private: false, access: { has: obj => "value" in obj, get: obj => obj.value, set: (obj, value) => { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
            __esDecorate(this, null, _options_decorators, { kind: "accessor", name: "options", static: false, private: false, access: { has: obj => "options" in obj, get: obj => obj.options, set: (obj, value) => { obj.options = value; } }, metadata: _metadata }, _options_initializers, _options_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            MultiTagView = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    affine-multi-tag-view {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      min-height: 22px;
    }

    .affine-select-cell-container * {
      box-sizing: border-box;
    }

    .affine-select-cell-container {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 6px;
      width: 100%;
      font-size: var(--affine-font-sm);
    }

    .affine-select-cell-container .select-selected {
      height: 22px;
      font-size: 14px;
      line-height: 22px;
      padding: 0 8px;
      border-radius: 4px;
      white-space: nowrap;
      background: var(--affine-tag-white);
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `; }
        #selectContainer_accessor_storage = __runInitializers(this, _selectContainer_initializers, void 0);
        get selectContainer() { return this.#selectContainer_accessor_storage; }
        set selectContainer(value) { this.#selectContainer_accessor_storage = value; }
        #value_accessor_storage = (__runInitializers(this, _selectContainer_extraInitializers), __runInitializers(this, _value_initializers, []));
        get value() { return this.#value_accessor_storage; }
        set value(value) { this.#value_accessor_storage = value; }
        #options_accessor_storage = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _options_initializers, []));
        get options() { return this.#options_accessor_storage; }
        set options(value) { this.#options_accessor_storage = value; }
        render() {
            const values = this.value;
            const map = new Map(this.options?.map(v => [v.id, v]));
            return html `
      <div contenteditable="false" class="affine-select-cell-container">
        ${repeat(values, id => {
                const option = map.get(id);
                if (!option) {
                    return;
                }
                const style = styleMap({
                    backgroundColor: option.color,
                });
                return html `<span class="select-selected" style=${style}
            >${option.value}</span
          >`;
            })}
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _options_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return MultiTagView = _classThis;
})();
export { MultiTagView };
//# sourceMappingURL=multi-tag-view.js.map