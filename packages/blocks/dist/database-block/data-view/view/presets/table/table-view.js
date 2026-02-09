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
// related component
import './components/column-header/column-header.js';
import './components/cell-container.js';
import './components/row.js';
import './group.js';
import { css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import { popMenu } from '../../../../../_common/components/index.js';
import { AddCursorIcon } from '../../../../../_common/icons/index.js';
import { insertPositionToIndex } from '../../../utils/insert.js';
import { renderUniLit } from '../../../utils/uni-component/index.js';
import { DataViewBase } from '../../data-view-base.js';
import { LEFT_TOOL_BAR_WIDTH } from './consts.js';
import { TableClipboardController } from './controller/clipboard.js';
import { TableDragController } from './controller/drag.js';
import { TableHotkeysController } from './controller/hotkeys.js';
import { TableSelectionController } from './controller/selection.js';
const styles = css `
  affine-database-table {
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  affine-database-table * {
    box-sizing: border-box;
  }
  .affine-database-table {
    overflow-y: auto;
  }

  .affine-database-block-title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 44px;
    margin: 2px 0 2px;
  }

  .affine-database-block-table {
    position: relative;
    width: 100%;
    padding-bottom: 4px;
    z-index: 1;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .affine-database-block-table:hover {
    padding-bottom: 0px;
  }

  .affine-database-block-table::-webkit-scrollbar {
    -webkit-appearance: none;
    display: block;
  }

  .affine-database-block-table::-webkit-scrollbar:horizontal {
    height: 4px;
  }

  .affine-database-block-table::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: transparent;
  }

  .affine-database-block-table:hover::-webkit-scrollbar:horizontal {
    height: 8px;
  }

  .affine-database-block-table:hover::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background-color: var(--affine-black-30);
  }

  .affine-database-block-table:hover::-webkit-scrollbar-track {
    background-color: var(--affine-hover-color);
  }

  .affine-database-table-container {
    position: relative;
    width: fit-content;
    min-width: 100%;
  }

  .affine-database-block-tag-circle {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    display: inline-block;
  }

  .affine-database-block-tag {
    display: inline-flex;
    border-radius: 11px;
    align-items: center;
    padding: 0 8px;
    cursor: pointer;
  }

  .database-cell {
    border-left: 1px solid var(--affine-border-color);
  }
  .data-view-table-left-bar {
    display: flex;
    align-items: center;
    position: sticky;
    left: 0;
    width: ${LEFT_TOOL_BAR_WIDTH}px;
    flex-shrink: 0;
    background-color: var(--affine-background-primary-color);
  }
  .affine-database-block-rows {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;
let DataViewTable = (() => {
    let _classDecorators = [customElement('affine-database-table')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = DataViewBase;
    var DataViewTable = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.dragController = new TableDragController(this);
            this.selectionController = new TableSelectionController(this);
            this.hotkeysController = new TableHotkeysController(this);
            this.clipboardController = new TableClipboardController(this);
            this._addRow = (tableViewManager, position) => {
                if (this.readonly)
                    return;
                const index = typeof position === 'number'
                    ? position
                    : insertPositionToIndex(position, this.view.rows.map(id => ({ id })));
                tableViewManager.rowAdd(position);
                requestAnimationFrame(() => {
                    this.selectionController.selection = {
                        focus: {
                            rowIndex: index,
                            columnIndex: 0,
                        },
                        isEditing: true,
                    };
                });
            };
            this.renderAddGroup = (groupHelper) => {
                const addGroup = groupHelper.addGroup;
                if (!addGroup) {
                    return;
                }
                const add = (e) => {
                    const ele = e.currentTarget;
                    popMenu(ele, {
                        options: {
                            input: {
                                onComplete: text => {
                                    const column = groupHelper.column;
                                    if (column) {
                                        column.updateData(() => addGroup(text, column.data));
                                    }
                                },
                            },
                            items: [],
                        },
                    });
                };
                return html ` <div style="display:flex;">
      <div
        class="dv-hover dv-round-8"
        style="display:flex;align-items:center;gap: 10px;padding: 6px 12px 6px 8px;color: var(--affine-text-secondary-color);font-size: 12px;line-height: 20px;position: sticky;left: ${LEFT_TOOL_BAR_WIDTH}px;"
        @click="${add}"
      >
        <div class="dv-icon-16" style="display:flex;">${AddCursorIcon}</div>
        <div>New Group</div>
      </div>
    </div>`;
            };
            this.onWheel = (event) => {
                if (event.metaKey || event.ctrlKey) {
                    return;
                }
                const ele = event.currentTarget;
                if (ele instanceof HTMLElement) {
                    if (ele.scrollWidth === ele.clientWidth) {
                        return;
                    }
                    event.stopPropagation();
                }
            };
            this.getSelection = () => {
                return this.selectionController.selection;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DataViewTable = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get readonly() {
            return this.view.readonly;
        }
        static { this.styles = styles; }
        renderTable() {
            const groupHelper = this.view.groupHelper;
            if (groupHelper) {
                return html `
        <div style="display:flex;flex-direction: column;gap: 16px;">
          ${groupHelper.groups.map(group => {
                    return html `<affine-data-view-table-group
              data-group-key="${group.key}"
              .dataViewEle="${this.dataViewEle}"
              .view="${this.view}"
              .viewEle="${this}"
              .group="${group}"
            ></affine-data-view-table-group>`;
                })}
          ${this.renderAddGroup(groupHelper)}
        </div>
      `;
            }
            return html `<affine-data-view-table-group
      .dataViewEle="${this.dataViewEle}"
      .view="${this.view}"
      .viewEle="${this}"
    ></affine-data-view-table-group>`;
        }
        connectedCallback() {
            super.connectedCallback();
            this._disposables.add(this.view.slots.update.on(() => {
                this.requestUpdate();
                this.querySelectorAll('affine-data-view-table-group').forEach(v => {
                    v.requestUpdate();
                });
            }));
            if (this.readonly)
                return;
        }
        addRow(position) {
            this._addRow(this.view, position);
        }
        hideIndicator() {
            this.dragController.dropPreview.remove();
        }
        moveTo(id, evt) {
            const result = this.dragController.getInsertPosition(evt);
            if (result) {
                this.view.rowMove(id, result.position, undefined, result.groupKey);
            }
        }
        showIndicator(evt) {
            return this.dragController.showIndicator(evt) != null;
        }
        render() {
            return html `
      ${renderUniLit(this.headerWidget, {
                view: this.view,
                viewMethods: this,
                viewSource: this.viewSource,
                dataSource: this.dataSource,
            })}
      <div class="affine-database-table">
        <div class="affine-database-block-table" @wheel="${this.onWheel}">
          <div class="affine-database-table-container">
            ${this.renderTable()}
          </div>
        </div>
      </div>
    `;
        }
        focusFirstCell() {
            this.selectionController.focusFirstCell();
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DataViewTable = _classThis;
})();
export { DataViewTable };
//# sourceMappingURL=table-view.js.map