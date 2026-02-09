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
import './components/column-stats.js';
import './components/column-stats-cell.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { popFilterableSimpleMenu } from '../../../../../_common/components/index.js';
import { GroupTitle } from '../../../common/group-by/group-title.js';
import { PlusIcon } from '../../../common/icons/index.js';
import { LEFT_TOOL_BAR_WIDTH } from './consts.js';
const styles = css `
  affine-data-view-table-group .group-header-op {
    visibility: visible;
  }
  .data-view-table-group-add-row {
    display: flex;
    width: 100%;
    height: 28px;
    position: relative;
    z-index: 0;
    cursor: pointer;
    transition: opacity 0.2s ease-in-out;
    padding: 4px 8px;
    border-bottom: 1px solid var(--affine-border-color);
  }

  @media print {
    .data-view-table-group-add-row {
      display: none;
    }
  }

  .data-view-table-group-add-row-button {
    position: sticky;
    left: ${8 + LEFT_TOOL_BAR_WIDTH}px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    user-select: none;
    font-size: 12px;
    line-height: 20px;
    color: var(--affine-text-secondary-color);
  }
`;
let TableGroup = (() => {
    let _classDecorators = [customElement('affine-data-view-table-group')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _dataViewEle_decorators;
    let _dataViewEle_initializers = [];
    let _dataViewEle_extraInitializers = [];
    let _view_decorators;
    let _view_initializers = [];
    let _view_extraInitializers = [];
    let _viewEle_decorators;
    let _viewEle_initializers = [];
    let _viewEle_extraInitializers = [];
    let _group_decorators;
    let _group_initializers = [];
    let _group_extraInitializers = [];
    var TableGroup = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#dataViewEle_accessor_storage = __runInitializers(this, _dataViewEle_initializers, void 0);
            this.#view_accessor_storage = (__runInitializers(this, _dataViewEle_extraInitializers), __runInitializers(this, _view_initializers, void 0));
            this.#viewEle_accessor_storage = (__runInitializers(this, _view_extraInitializers), __runInitializers(this, _viewEle_initializers, void 0));
            this.#group_accessor_storage = (__runInitializers(this, _viewEle_extraInitializers), __runInitializers(this, _group_initializers, undefined));
            this.clickAddRow = (__runInitializers(this, _group_extraInitializers), () => {
                this.view.rowAdd('end', this.group?.key);
                requestAnimationFrame(() => {
                    const selectionController = this.viewEle.selectionController;
                    const index = this.view.columnManagerList.findIndex(v => v.type === 'title');
                    selectionController.selection = {
                        groupKey: this.group?.key,
                        focus: {
                            rowIndex: this.rows.length - 1,
                            columnIndex: index,
                        },
                        isEditing: true,
                    };
                });
            });
            this.clickAddRowInStart = () => {
                this.view.rowAdd('start', this.group?.key);
                requestAnimationFrame(() => {
                    const selectionController = this.viewEle.selectionController;
                    const index = this.view.columnManagerList.findIndex(v => v.type === 'title');
                    selectionController.selection = {
                        groupKey: this.group?.key,
                        focus: {
                            rowIndex: 0,
                            columnIndex: index,
                        },
                        isEditing: true,
                    };
                });
            };
            this.clickGroupOptions = (e) => {
                const group = this.group;
                if (!group) {
                    return;
                }
                const ele = e.currentTarget;
                popFilterableSimpleMenu(ele, [
                    {
                        type: 'action',
                        name: 'Ungroup',
                        hide: () => group.value == null,
                        select: () => {
                            group.rows.forEach(id => {
                                group.helper.removeFromGroup(id, group.key);
                            });
                        },
                    },
                    {
                        type: 'action',
                        name: 'Delete Cards',
                        select: () => {
                            this.view.rowDelete(group.rows);
                        },
                    },
                ]);
            };
            this.renderGroupHeader = () => {
                if (!this.group) {
                    return null;
                }
                return html `
      <div
        style="position: sticky;left: 0;width: max-content;padding: 6px 0;margin-bottom: 4px;display:flex;align-items:center;gap: 12px;max-width: 400px"
      >
        ${GroupTitle(this.group, {
                    readonly: this.view.readonly,
                    clickAdd: this.clickAddRowInStart,
                    clickOps: this.clickGroupOptions,
                })}
      </div>
    `;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _dataViewEle_decorators = [property({ attribute: false })];
            _view_decorators = [property({ attribute: false })];
            _viewEle_decorators = [property({ attribute: false })];
            _group_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _dataViewEle_decorators, { kind: "accessor", name: "dataViewEle", static: false, private: false, access: { has: obj => "dataViewEle" in obj, get: obj => obj.dataViewEle, set: (obj, value) => { obj.dataViewEle = value; } }, metadata: _metadata }, _dataViewEle_initializers, _dataViewEle_extraInitializers);
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(this, null, _viewEle_decorators, { kind: "accessor", name: "viewEle", static: false, private: false, access: { has: obj => "viewEle" in obj, get: obj => obj.viewEle, set: (obj, value) => { obj.viewEle = value; } }, metadata: _metadata }, _viewEle_initializers, _viewEle_extraInitializers);
            __esDecorate(this, null, _group_decorators, { kind: "accessor", name: "group", static: false, private: false, access: { has: obj => "group" in obj, get: obj => obj.group, set: (obj, value) => { obj.group = value; } }, metadata: _metadata }, _group_initializers, _group_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            TableGroup = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get rows() {
            return this.group?.rows ?? this.view.rows;
        }
        static { this.styles = styles; }
        #dataViewEle_accessor_storage;
        get dataViewEle() { return this.#dataViewEle_accessor_storage; }
        set dataViewEle(value) { this.#dataViewEle_accessor_storage = value; }
        #view_accessor_storage;
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        #viewEle_accessor_storage;
        get viewEle() { return this.#viewEle_accessor_storage; }
        set viewEle(value) { this.#viewEle_accessor_storage = value; }
        #group_accessor_storage;
        get group() { return this.#group_accessor_storage; }
        set group(value) { this.#group_accessor_storage = value; }
        renderRows(ids) {
            return html `
      <affine-database-column-header
        .renderGroupHeader="${this.renderGroupHeader}"
        .tableViewManager="${this.view}"
      ></affine-database-column-header>
      <div class="affine-database-block-rows">
        ${repeat(ids, id => id, (id, idx) => {
                return html `<data-view-table-row
              data-row-index="${idx}"
              data-row-id="${id}"
              .dataViewEle="${this.dataViewEle}"
              .view="${this.view}"
              .rowId="${id}"
              .rowIndex="${idx}"
            ></data-view-table-row>`;
            })}
      </div>
      ${this.view.readonly
                ? null
                : html ` <div
            class="data-view-table-group-add-row dv-hover"
            @click="${this.clickAddRow}"
          >
            <div
              class="data-view-table-group-add-row-button dv-icon-16"
              data-test-id="affine-database-add-row-button"
              role="button"
            >
              ${PlusIcon}<span>New Record</span>
            </div>
          </div>`}
      ${this.dataViewEle.config.getFlag?.('enable_database_statistics')
                ? html `
            <affine-database-column-stats
              .view="${this.view}"
              .group=${this.group}
            >
            </affine-database-column-stats>
          `
                : null}
    `;
        }
        updated(_changedProperties) {
            super.updated(_changedProperties);
            this.querySelectorAll('data-view-table-row').forEach(ele => {
                ele.requestUpdate();
            });
        }
        render() {
            return this.renderRows(this.rows);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return TableGroup = _classThis;
})();
export { TableGroup };
//# sourceMappingURL=group.js.map