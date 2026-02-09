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
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { html } from 'lit/static-html.js';
let DataViewColumnPreview = (() => {
    let _classDecorators = [customElement('affine-data-view-column-preview')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _tableViewManager_decorators;
    let _tableViewManager_initializers = [];
    let _tableViewManager_extraInitializers = [];
    let _column_decorators;
    let _column_initializers = [];
    let _column_extraInitializers = [];
    let _table_decorators;
    let _table_initializers = [];
    let _table_extraInitializers = [];
    var DataViewColumnPreview = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _tableViewManager_decorators = [property({ attribute: false })];
            _column_decorators = [property({ attribute: false })];
            _table_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _tableViewManager_decorators, { kind: "accessor", name: "tableViewManager", static: false, private: false, access: { has: obj => "tableViewManager" in obj, get: obj => obj.tableViewManager, set: (obj, value) => { obj.tableViewManager = value; } }, metadata: _metadata }, _tableViewManager_initializers, _tableViewManager_extraInitializers);
            __esDecorate(this, null, _column_decorators, { kind: "accessor", name: "column", static: false, private: false, access: { has: obj => "column" in obj, get: obj => obj.column, set: (obj, value) => { obj.column = value; } }, metadata: _metadata }, _column_initializers, _column_extraInitializers);
            __esDecorate(this, null, _table_decorators, { kind: "accessor", name: "table", static: false, private: false, access: { has: obj => "table" in obj, get: obj => obj.table, set: (obj, value) => { obj.table = value; } }, metadata: _metadata }, _table_initializers, _table_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DataViewColumnPreview = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    affine-data-view-column-preview {
      pointer-events: none;
      display: block;
    }
  `; }
        #tableViewManager_accessor_storage = __runInitializers(this, _tableViewManager_initializers, void 0);
        get tableViewManager() { return this.#tableViewManager_accessor_storage; }
        set tableViewManager(value) { this.#tableViewManager_accessor_storage = value; }
        #column_accessor_storage = (__runInitializers(this, _tableViewManager_extraInitializers), __runInitializers(this, _column_initializers, void 0));
        get column() { return this.#column_accessor_storage; }
        set column(value) { this.#column_accessor_storage = value; }
        #table_accessor_storage = (__runInitializers(this, _column_extraInitializers), __runInitializers(this, _table_initializers, void 0));
        get table() { return this.#table_accessor_storage; }
        set table(value) { this.#table_accessor_storage = value; }
        renderGroup(rows) {
            const columnIndex = this.tableViewManager.columnGetIndex(this.column.id);
            return html `
      <div
        style="background-color: var(--affine-background-primary-color);border-top: 1px solid var(--affine-border-color);box-shadow: var(--affine-shadow-2);"
      >
        <affine-database-header-column
          .tableViewManager="${this.tableViewManager}"
          .column="${this.column}"
        ></affine-database-header-column>
        ${repeat(rows, (id, index) => {
                const height = this.table.querySelector(`affine-database-cell-container[data-row-id="${id}"]`)?.clientHeight;
                const style = styleMap({
                    height: height + 'px',
                });
                return html `<div
            style="border-top: 1px solid var(--affine-border-color)"
          >
            <div style="${style}">
              <affine-database-cell-container
                .column="${this.column}"
                .view="${this.tableViewManager}"
                .rowId="${id}"
                .columnId="${this.column.id}"
                .rowIndex="${index}"
                .columnIndex="${columnIndex}"
              ></affine-database-cell-container>
            </div>
          </div>`;
            })}
      </div>
      <div style="height: 45px;"></div>
    `;
        }
        render() {
            const groupHelper = this.tableViewManager.groupHelper;
            if (!groupHelper) {
                const rows = this.tableViewManager.rows;
                return this.renderGroup(rows);
            }
            return groupHelper.groups.map(group => {
                return html `
        <div style="height: 44px;"></div>
        ${this.renderGroup(group.rows)}
      `;
            });
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _table_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DataViewColumnPreview = _classThis;
})();
export { DataViewColumnPreview };
//# sourceMappingURL=column-renderer.js.map