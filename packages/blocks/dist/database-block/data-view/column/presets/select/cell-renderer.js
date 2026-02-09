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
import { selectColumnModelConfig } from './define.js';
let SelectCell = (() => {
    let _classDecorators = [customElement('affine-database-select-cell')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseCellRenderer;
    var SelectCell = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            SelectCell = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        render() {
            const value = this.value ? [this.value] : [];
            return html `
      <affine-multi-tag-view
        .value="${value}"
        .options="${this.column.data.options}"
      ></affine-multi-tag-view>
    `;
        }
    };
    return SelectCell = _classThis;
})();
export { SelectCell };
let SelectCellEditing = (() => {
    let _classDecorators = [customElement('affine-database-select-cell-editing')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseCellRenderer;
    var SelectCellEditing = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.popTagSelect = () => {
                this._disposables.add({
                    dispose: popTagSelect(this.querySelector('affine-multi-tag-view') ?? this, {
                        mode: 'single',
                        options: this._options,
                        onOptionsChange: this._onOptionsChange,
                        value: this._value,
                        onChange: this._onChange,
                        onComplete: this._editComplete,
                        minWidth: 400,
                    }),
                });
            };
            this._onChange = ([id]) => {
                this.onChange(id);
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
            SelectCellEditing = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        get _options() {
            return this.column.data.options;
        }
        get _value() {
            const value = this.value;
            return value ? [value] : [];
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
    return SelectCellEditing = _classThis;
})();
export { SelectCellEditing };
export const selectColumnConfig = selectColumnModelConfig.renderConfig({
    icon: createIcon('DatabaseSelect'),
    cellRenderer: {
        view: createFromBaseCellRenderer(SelectCell),
        edit: createFromBaseCellRenderer(SelectCellEditing),
    },
});
//# sourceMappingURL=cell-renderer.js.map