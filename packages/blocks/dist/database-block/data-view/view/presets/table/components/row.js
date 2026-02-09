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
import { css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { html } from 'lit/static-html.js';
import { NewEditIcon } from '../../../../../../_common/icons/index.js';
import { MoreHorizontalIcon } from '../../../../common/icons/index.js';
import { DEFAULT_COLUMN_MIN_WIDTH } from '../consts.js';
import { openDetail, popRowMenu } from './menu.js';
let TableRow = (() => {
    let _classDecorators = [customElement('data-view-table-row')];
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
    let _rowIndex_decorators;
    let _rowIndex_initializers = [];
    let _rowIndex_extraInitializers = [];
    let _rowId_decorators;
    let _rowId_initializers = [];
    let _rowId_extraInitializers = [];
    var TableRow = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#dataViewEle_accessor_storage = __runInitializers(this, _dataViewEle_initializers, void 0);
            this.#view_accessor_storage = (__runInitializers(this, _dataViewEle_extraInitializers), __runInitializers(this, _view_initializers, void 0));
            this.#rowIndex_accessor_storage = (__runInitializers(this, _view_extraInitializers), __runInitializers(this, _rowIndex_initializers, void 0));
            this.#rowId_accessor_storage = (__runInitializers(this, _rowIndex_extraInitializers), __runInitializers(this, _rowId_initializers, void 0));
            this._clickDragHandler = (__runInitializers(this, _rowId_extraInitializers), () => {
                const selectionController = this.selectionController;
                if (selectionController) {
                    if (selectionController.isRowSelected(this.groupKey, this.rowIndex) &&
                        selectionController.selection) {
                        selectionController.selection = {
                            ...selectionController.selection,
                            rowsSelection: undefined,
                        };
                    }
                    else {
                        selectionController.selection = {
                            groupKey: this.groupKey,
                            rowsSelection: {
                                start: this.rowIndex,
                                end: this.rowIndex,
                            },
                            focus: {
                                rowIndex: this.rowIndex,
                                columnIndex: 0,
                            },
                            isEditing: false,
                        };
                    }
                }
            });
            this.setSelection = (selection) => {
                if (this.selectionController) {
                    this.selectionController.selection = selection;
                }
            };
            this.contextMenu = (e) => {
                const selection = this.selectionController;
                if (!selection) {
                    return;
                }
                e.preventDefault();
                const ele = e.target;
                const cell = ele.closest('affine-database-cell-container');
                const columnIndex = cell?.columnIndex ?? 0;
                selection.selection = {
                    groupKey: this.groupKey,
                    rowsSelection: {
                        start: this.rowIndex,
                        end: this.rowIndex,
                    },
                    focus: {
                        rowIndex: this.rowIndex,
                        columnIndex: columnIndex,
                    },
                    isEditing: false,
                };
                popRowMenu(this.dataViewEle, e.target, this.rowId, selection);
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _dataViewEle_decorators = [property({ attribute: false })];
            _view_decorators = [property({ attribute: false })];
            _rowIndex_decorators = [property({ attribute: false })];
            _rowId_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _dataViewEle_decorators, { kind: "accessor", name: "dataViewEle", static: false, private: false, access: { has: obj => "dataViewEle" in obj, get: obj => obj.dataViewEle, set: (obj, value) => { obj.dataViewEle = value; } }, metadata: _metadata }, _dataViewEle_initializers, _dataViewEle_extraInitializers);
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(this, null, _rowIndex_decorators, { kind: "accessor", name: "rowIndex", static: false, private: false, access: { has: obj => "rowIndex" in obj, get: obj => obj.rowIndex, set: (obj, value) => { obj.rowIndex = value; } }, metadata: _metadata }, _rowIndex_initializers, _rowIndex_extraInitializers);
            __esDecorate(this, null, _rowId_decorators, { kind: "accessor", name: "rowId", static: false, private: false, access: { has: obj => "rowId" in obj, get: obj => obj.rowId, set: (obj, value) => { obj.rowId = value; } }, metadata: _metadata }, _rowId_initializers, _rowId_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            TableRow = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get selectionController() {
            return this.closest('affine-database-table')?.selectionController;
        }
        get groupKey() {
            return this.closest('affine-data-view-table-group')?.group?.key;
        }
        static { this.styles = css `
    .data-view-table-row {
      width: 100%;
    }
    .affine-database-block-row {
      width: 100%;
      display: flex;
      flex-direction: row;
      border-bottom: 1px solid var(--affine-border-color);
      position: relative;
    }

    .affine-database-block-row.selected > .database-cell {
      background: transparent;
    }

    .database-cell {
      min-width: ${DEFAULT_COLUMN_MIN_WIDTH}px;
    }

    .row-ops {
      position: relative;
      width: 0;
      margin-top: 8px;
      height: max-content;
      visibility: hidden;
      display: flex;
      gap: 4px;
      cursor: pointer;
      justify-content: end;
    }

    .row-op:last-child {
      margin-right: 8px;
    }

    .affine-database-block-row:hover .row-ops {
      visibility: visible;
    }
    .affine-database-block-row .show-on-hover-row {
      visibility: hidden;
      opacity: 0;
      transition: opacity 150ms cubic-bezier(0.42, 0, 1, 1);
    }
    .affine-database-block-row:hover .show-on-hover-row {
      visibility: visible;
      opacity: 1;
    }

    .row-op {
      display: flex;
      padding: 4px;
      border-radius: 4px;
      box-shadow: 0px 0px 4px 0px rgba(66, 65, 73, 0.14);
      background-color: var(--affine-background-primary-color);
      position: relative;
    }

    .row-op:hover:before {
      content: '';
      border-radius: 4px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: var(--affine-hover-color);
    }

    .row-op svg {
      fill: var(--affine-icon-color);
      color: var(--affine-icon-color);
      width: 16px;
      height: 16px;
    }
  `; }
        #dataViewEle_accessor_storage;
        get dataViewEle() { return this.#dataViewEle_accessor_storage; }
        set dataViewEle(value) { this.#dataViewEle_accessor_storage = value; }
        #view_accessor_storage;
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        #rowIndex_accessor_storage;
        get rowIndex() { return this.#rowIndex_accessor_storage; }
        set rowIndex(value) { this.#rowIndex_accessor_storage = value; }
        #rowId_accessor_storage;
        get rowId() { return this.#rowId_accessor_storage; }
        set rowId(value) { this.#rowId_accessor_storage = value; }
        render() {
            const view = this.view;
            return html `
      <div class="data-view-table-left-bar">
        <div
          class="data-view-table-view-drag-handler"
          @click=${this._clickDragHandler}
          style="width: 8px;height: 100%;display:flex;align-items:center;justify-content:center;cursor:grab;"
        >
          <div
            class="show-on-hover-row"
            style="width: 4px;
            border-radius: 2px;
            height: 12px;
            background-color: var(--affine-placeholder-color);"
          ></div>
        </div>
      </div>
      ${repeat(view.columnManagerList, v => v.id, (column, i) => {
                const clickDetail = () => {
                    if (!this.selectionController) {
                        return;
                    }
                    this.setSelection({
                        groupKey: this.groupKey,
                        rowsSelection: {
                            start: this.rowIndex,
                            end: this.rowIndex,
                        },
                        focus: {
                            rowIndex: this.rowIndex,
                            columnIndex: i,
                        },
                        isEditing: false,
                    });
                    openDetail(this.dataViewEle, this.rowId, this.selectionController);
                };
                const openMenu = (e) => {
                    if (!this.selectionController) {
                        return;
                    }
                    const ele = e.currentTarget;
                    this.setSelection({
                        groupKey: this.groupKey,
                        rowsSelection: {
                            start: this.rowIndex,
                            end: this.rowIndex,
                        },
                        focus: {
                            rowIndex: this.rowIndex,
                            columnIndex: i,
                        },
                        isEditing: false,
                    });
                    popRowMenu(this.dataViewEle, ele, this.rowId, this.selectionController);
                };
                return html `
            <div>
              <affine-database-cell-container
                class="database-cell"
                style=${styleMap({
                    width: `${column.width}px`,
                    border: i === 0 ? 'none' : undefined,
                })}
                .view="${view}"
                .column="${column}"
                .rowId="${this.rowId}"
                data-row-id="${this.rowId}"
                .rowIndex="${this.rowIndex}"
                data-row-index="${this.rowIndex}"
                .columnId="${column.id}"
                data-column-id="${column.id}"
                .columnIndex="${i}"
                data-column-index="${i}"
              >
              </affine-database-cell-container>
            </div>
            ${column.dataViewManager.header.titleColumn === column.id
                    ? html `<div class="row-ops">
                  <div class="row-op" @click="${clickDetail}">
                    ${NewEditIcon}
                  </div>
                  ${!view.readonly
                        ? html `<div class="row-op" @click="${openMenu}">
                        ${MoreHorizontalIcon}
                      </div>`
                        : nothing}
                </div>`
                    : nothing}
          `;
            })}
      <div class="database-cell add-column-button"></div>
    `;
        }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.addFromEvent(this, 'contextmenu', this.contextMenu);
            // eslint-disable-next-line wc/no-self-class
            this.classList.add('affine-database-block-row', 'database-row');
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return TableRow = _classThis;
})();
export { TableRow };
//# sourceMappingURL=row.js.map