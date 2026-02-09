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
import { WithDisposable } from '@blocksuite/block-std';
import { css, html, LitElement } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ArrowDownIcon } from '../../../../../../_common/icons/index.js';
import { getRootByElement } from '../../../../../../_common/utils/index.js';
import { getStatCalcOperationFromType, } from '../stat-ops.js';
import { DEFAULT_COLUMN_MIN_WIDTH } from './../consts.js';
import { popColStatOperationMenu } from './menu.js';
const styles = css `
  .stats-cell {
    cursor: pointer;
    transition: opacity 230ms ease;
    padding: 8px 0px;
    font-size: 12px;
    color: var(--affine-text-secondary-color);
    display: flex;
    opacity: 0;
    min-width: ${DEFAULT_COLUMN_MIN_WIDTH}px;
    justify-content: flex-end;
  }
  .stats-cell:hover {
    background-color: var(--affine-hover-color);
    cursor: pointer;
    opacity: 1;
  }
  .stats-cell[calculated='true'] {
    opacity: 1;
  }
  .stats-cell .content {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.2rem;
    margin-inline: 5px;
  }
  .label {
    text-transform: uppercase;
  }
  .value {
    color: var(--affine-text-primary-color);
  }
`;
let DatabaseColumnStatsCell = (() => {
    let _classDecorators = [customElement('affine-database-column-stats-cell')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _operation_decorators;
    let _operation_initializers = [];
    let _operation_extraInitializers = [];
    let _result_decorators;
    let _result_initializers = [];
    let _result_extraInitializers = [];
    let _column_decorators;
    let _column_initializers = [];
    let _column_extraInitializers = [];
    let _group_decorators;
    let _group_initializers = [];
    let _group_extraInitializers = [];
    var DatabaseColumnStatsCell = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#operation_accessor_storage = __runInitializers(this, _operation_initializers, null);
            this.#result_accessor_storage = (__runInitializers(this, _operation_extraInitializers), __runInitializers(this, _result_initializers, null));
            this.#column_accessor_storage = (__runInitializers(this, _result_extraInitializers), __runInitializers(this, _column_initializers, void 0));
            this.#group_accessor_storage = (__runInitializers(this, _column_extraInitializers), __runInitializers(this, _group_initializers, undefined));
            this.openMenu = (__runInitializers(this, _group_extraInitializers), (ev) => {
                const rootElement = getRootByElement(this);
                popColStatOperationMenu(rootElement, ev.target, this.column, this.getColumnType(), this.onSelect);
            });
            this.onSelect = (operation) => {
                if (operation.type === 'none') {
                    this.operation = null;
                    this.result = null;
                    return;
                }
                this.column.updateStatCalcOp(operation.type);
                this.operation = operation;
                this.calculate();
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _operation_decorators = [state()];
            _result_decorators = [state()];
            _column_decorators = [property({ attribute: false })];
            _group_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _operation_decorators, { kind: "accessor", name: "operation", static: false, private: false, access: { has: obj => "operation" in obj, get: obj => obj.operation, set: (obj, value) => { obj.operation = value; } }, metadata: _metadata }, _operation_initializers, _operation_extraInitializers);
            __esDecorate(this, null, _result_decorators, { kind: "accessor", name: "result", static: false, private: false, access: { has: obj => "result" in obj, get: obj => obj.result, set: (obj, value) => { obj.result = value; } }, metadata: _metadata }, _result_initializers, _result_extraInitializers);
            __esDecorate(this, null, _column_decorators, { kind: "accessor", name: "column", static: false, private: false, access: { has: obj => "column" in obj, get: obj => obj.column, set: (obj, value) => { obj.column = value; } }, metadata: _metadata }, _column_initializers, _column_extraInitializers);
            __esDecorate(this, null, _group_decorators, { kind: "accessor", name: "group", static: false, private: false, access: { has: obj => "group" in obj, get: obj => obj.group, set: (obj, value) => { obj.group = value; } }, metadata: _metadata }, _group_initializers, _group_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DatabaseColumnStatsCell = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        #operation_accessor_storage;
        get operation() { return this.#operation_accessor_storage; }
        set operation(value) { this.#operation_accessor_storage = value; }
        #result_accessor_storage;
        get result() { return this.#result_accessor_storage; }
        set result(value) { this.#result_accessor_storage = value; }
        #column_accessor_storage;
        get column() { return this.#column_accessor_storage; }
        set column(value) { this.#column_accessor_storage = value; }
        #group_accessor_storage;
        get group() { return this.#group_accessor_storage; }
        set group(value) { this.#group_accessor_storage = value; }
        getResultString() {
            if (!this.result || !isFinite(this.result.value))
                return '';
            const { displayFormat: df, value } = this.result;
            switch (df) {
                case '%':
                    return `${(value * 100).toFixed(3)}%`;
                case 'x10':
                    return `${value}`;
            }
        }
        render() {
            const style = {
                width: `${this.column.width}px`,
            };
            return html `<div
      calculated="${!!this.operation && this.operation.type !== 'none'}"
      style="${styleMap(style)}"
      class="stats-cell"
    >
      <div class="content">
        ${!this.operation || this.operation.type === 'none'
                ? html `Calculate ${ArrowDownIcon}`
                : html `
              <span class="label">${this.operation.display}</span>
              <span class="value">${this.getResultString()} </span>
            `}
      </div>
    </div>`;
        }
        connectedCallback() {
            super.connectedCallback();
            this.operation = getStatCalcOperationFromType(this.column.statCalcOp);
            this.calculate();
            this.disposables.addFromEvent(this, 'click', this.openMenu);
            const view = this.column.dataViewManager;
            this.disposables.add(view.slots.update.on(() => {
                this.calculate();
            }));
            view.rows.forEach(rowId => {
                this._disposables.add(this.column.onCellUpdate(rowId, () => {
                    this.calculate();
                }));
            });
        }
        calculate() {
            if (!this.operation)
                return;
            this.result = this.operation.calculate(this.column, this.group);
        }
        getColumnType() {
            const type = this.column.type;
            if (type === 'number' || type === 'checkbox')
                return type;
            return 'other';
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DatabaseColumnStatsCell = _classThis;
})();
export { DatabaseColumnStatsCell };
//# sourceMappingURL=column-stats-cell.js.map