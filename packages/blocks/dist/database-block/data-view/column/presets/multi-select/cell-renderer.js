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
import '../../../utils/tags/multi-tag-select.js';
import '../../../utils/tags/multi-tag-view.js';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import { popTagSelect, } from '../../../utils/tags/multi-tag-select.js';
import { createIcon } from '../../../utils/uni-icon.js';
import { BaseCellRenderer } from '../../base-cell.js';
import { createFromBaseCellRenderer } from '../../renderer.js';
import { multiSelectColumnModelConfig } from './define.js';
let MultiSelectCell = (() => {
    let _classDecorators = [customElement('affine-database-multi-select-cell')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseCellRenderer;
    var MultiSelectCell = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            MultiSelectCell = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        render() {
            return html `
      <affine-multi-tag-view
        .value="${this.value ?? []}"
        .options="${this.column.data.options}"
      ></affine-multi-tag-view>
    `;
        }
    };
    return MultiSelectCell = _classThis;
})();
export { MultiSelectCell };
let MultiSelectCellEditing = (() => {
    let _classDecorators = [customElement('affine-database-multi-select-cell-editing')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseCellRenderer;
    var MultiSelectCellEditing = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.popTagSelect = () => {
                this._disposables.add({
                    dispose: popTagSelect(this.querySelector('affine-multi-tag-view') ?? this, {
                        options: this._options,
                        onOptionsChange: this._onOptionsChange,
                        value: this._value,
                        onChange: this._onChange,
                        onComplete: this._editComplete,
                        minWidth: 400,
                    }),
                });
            };
            this._onChange = (ids) => {
                this.onChange(ids);
            };
            this._editComplete = () => {
                this.selectCurrentCell(false);
            };
            this._onOptionsChange = (options) => {
                this.column.updateData(data => {
                    return {
                        ...data,
                        options,
                    };
                });
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            MultiSelectCellEditing = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        get _options() {
            return this.column.data.options;
        }
        get _value() {
            return this.value ?? [];
        }
        firstUpdated() {
            this.popTagSelect();
        }
        render() {
            return html `
      <affine-multi-tag-view
        .value="${this._value}"
        .options="${this._options}"
      ></affine-multi-tag-view>
    `;
        }
    };
    return MultiSelectCellEditing = _classThis;
})();
export { MultiSelectCellEditing };
export const multiSelectColumnConfig = multiSelectColumnModelConfig.renderConfig({
    icon: createIcon('DatabaseMultiSelect'),
    cellRenderer: {
        view: createFromBaseCellRenderer(MultiSelectCell),
        edit: createFromBaseCellRenderer(MultiSelectCellEditing),
    },
});
//# sourceMappingURL=cell-renderer.js.map