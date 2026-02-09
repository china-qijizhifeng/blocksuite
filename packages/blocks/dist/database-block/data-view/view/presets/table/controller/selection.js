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
import { ShadowlessElement } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { clamp } from '../../../../../../_common/utils/math.js';
import { startDrag } from '../../../../utils/drag.js';
import { autoScrollOnBoundary } from '../../../../utils/frame-loop.js';
import { DragToFillElement, fillSelectionWithFocusCellData, } from './drag-to-fill.js';
export class TableSelectionController {
    get dragToFillDraggable() {
        return this.__dragToFillElement.dragToFillRef.value;
    }
    get focusSelectionElement() {
        return this.__selectionElement.focusRef.value;
    }
    get areaSelectionElement() {
        return this.__selectionElement.selectionRef.value;
    }
    get tableContainer() {
        const tableContainer = this.host.querySelector('.affine-database-table-container');
        assertExists(tableContainer);
        return tableContainer;
    }
    get viewData() {
        return this.view;
    }
    get selection() {
        return this._tableViewSelection;
    }
    set selection(data) {
        if (!data) {
            this.clearSelection();
            return;
        }
        const selection = {
            ...data,
            viewId: this.view.id,
            type: 'table',
        };
        if (selection.isEditing) {
            const focus = selection.focus;
            const container = this.getCellContainer(selection.groupKey, focus.rowIndex, focus.columnIndex);
            const cell = container?.cell;
            const isEditing = cell ? cell.beforeEnterEditMode() : true;
            this.host.setSelection({
                ...selection,
                isEditing,
            });
        }
        else {
            this.host.setSelection(selection);
        }
    }
    get view() {
        return this.host.view;
    }
    constructor(host) {
        this.host = host;
        this.__selectionElement = new SelectionElement();
        this.__dragToFillElement = new DragToFillElement();
        this.selectionStyleUpdateTask = 0;
        this.getFocusCellContainer = () => {
            if (!this._tableViewSelection)
                return null;
            const { groupKey, focus } = this._tableViewSelection;
            const dragStartCell = this.getCellContainer(groupKey, focus.rowIndex, focus.columnIndex);
            return dragStartCell ?? null;
        };
        host.addController(this);
    }
    handleSelectionChange() {
        this.host.disposables.add(this.host.selectionUpdated.on(tableSelection => {
            if (!this.isValidSelection(tableSelection)) {
                this.selection = undefined;
                return;
            }
            const old = this._tableViewSelection;
            if (old?.focus.rowIndex !== tableSelection?.focus.rowIndex ||
                old?.focus.columnIndex !== tableSelection?.focus.columnIndex) {
                requestAnimationFrame(() => {
                    this.scrollToFocus();
                });
            }
            if (this.isSelectedRowOnly() &&
                (old?.rowsSelection?.start !== tableSelection?.rowsSelection?.start ||
                    old?.rowsSelection?.end !== tableSelection?.rowsSelection?.end)) {
                requestAnimationFrame(() => {
                    this.scrollToAreaSelection();
                });
            }
            if (old) {
                const container = this.getCellContainer(old.groupKey, old.focus.rowIndex, old.focus.columnIndex);
                if (container) {
                    const cell = container.cell;
                    if (old.isEditing) {
                        cell?.onExitEditMode();
                        cell?.blurCell();
                        container.isEditing = false;
                    }
                }
            }
            this.updateSelection(tableSelection);
            if (tableSelection) {
                const container = this.getCellContainer(tableSelection.groupKey, tableSelection.focus.rowIndex, tableSelection.focus.columnIndex);
                if (container) {
                    const cell = container.cell;
                    if (tableSelection.isEditing) {
                        cell?.onEnterEditMode();
                        container.isEditing = true;
                        cell?.focusCell();
                    }
                }
            }
        }));
    }
    resolveDragStartTarget(target) {
        let cell;
        const fillValues = !!target.dataset.dragToFill;
        if (fillValues) {
            const focusCellContainer = this.getFocusCellContainer();
            assertExists(focusCellContainer);
            cell = focusCellContainer;
        }
        else {
            cell = target.closest('affine-database-cell-container');
        }
        return [cell, fillValues];
    }
    handleDragEvent() {
        this.host.disposables.add(this.host.handleEvent('dragStart', context => {
            const event = context.get('pointerState').raw;
            const target = event.target;
            if (target instanceof HTMLElement) {
                const [cell, fillValues] = this.resolveDragStartTarget(target);
                if (cell) {
                    const selection = this.selection;
                    if (selection &&
                        selection.isEditing &&
                        selection.focus.rowIndex === cell.rowIndex &&
                        selection.focus.columnIndex === cell.columnIndex) {
                        return false;
                    }
                    this.startDrag(event, cell, fillValues);
                    event.preventDefault();
                    return true;
                }
                return false;
            }
            return false;
        }));
    }
    clearSelection() {
        this.host.setSelection();
    }
    scrollToFocus() {
        this.focusSelectionElement?.scrollIntoView({
            block: 'nearest',
            inline: 'nearest',
        });
    }
    scrollToAreaSelection() {
        this.areaSelectionElement?.scrollIntoView({
            block: 'nearest',
            inline: 'nearest',
        });
    }
    insertTo(groupKey, rowId, before) {
        const id = this.view.rowAdd({ before, id: rowId });
        if (groupKey != null) {
            this.view.groupHelper?.moveCardTo(id, undefined, groupKey, {
                before,
                id: rowId,
            });
        }
        const rows = groupKey != null
            ? this.view.groupHelper?.groupMap[groupKey].rows
            : this.view.rows;
        requestAnimationFrame(() => {
            const index = this.host.view.columnManagerList.findIndex(v => v.type === 'title');
            this.selection = {
                groupKey: groupKey,
                focus: {
                    rowIndex: rows?.findIndex(v => v === id) ?? 0,
                    columnIndex: index,
                },
                isEditing: true,
            };
        });
    }
    checkSelection() {
        const selection = this.selection;
        if (!selection) {
            return true;
        }
        const cell = this.getCellContainer(selection.groupKey, selection.focus.rowIndex, selection.focus.columnIndex);
        if (!cell) {
            return false;
        }
        return true;
    }
    hostConnected() {
        requestAnimationFrame(() => {
            this.tableContainer.append(this.__selectionElement);
            this.tableContainer.append(this.__dragToFillElement);
        });
        this.handleDragEvent();
        this.handleSelectionChange();
    }
    isValidSelection(selection) {
        if (!selection) {
            return true;
        }
        if (selection.focus.rowIndex > this.view.rows.length - 1) {
            this.selection = undefined;
            return false;
        }
        if (selection.focus.columnIndex > this.view.columns.length - 1) {
            this.selection = undefined;
            return false;
        }
        return true;
    }
    cellPosition(groupKey) {
        const rows = this.rows(groupKey);
        const cells = rows
            ?.item(0)
            .querySelectorAll('affine-database-cell-container');
        return (x1, x2, y1, y2) => {
            const rowOffsets = Array.from(rows ?? []).map(v => v.getBoundingClientRect().top);
            const columnOffsets = Array.from(cells ?? []).map(v => v.getBoundingClientRect().left);
            const [startX, endX] = x1 < x2 ? [x1, x2] : [x2, x1];
            const [startY, endY] = y1 < y2 ? [y1, y2] : [y2, y1];
            const row = {
                start: 0,
                end: 0,
            };
            const column = {
                start: 0,
                end: 0,
            };
            for (let i = 0; i < rowOffsets.length; i++) {
                const offset = rowOffsets[i];
                if (offset < startY) {
                    row.start = i;
                }
                if (offset < endY) {
                    row.end = i;
                }
            }
            for (let i = 0; i < columnOffsets.length; i++) {
                const offset = columnOffsets[i];
                if (offset < startX) {
                    column.start = i;
                }
                if (offset < endX) {
                    column.end = i;
                }
            }
            return {
                row,
                column,
            };
        };
    }
    startDrag(evt, cell, fillValues) {
        const groupKey = cell.closest('affine-data-view-table-group')?.group?.key;
        const table = this.tableContainer;
        const scrollContainer = table.parentElement;
        assertExists(scrollContainer);
        const tableRect = table.getBoundingClientRect();
        const startOffsetX = evt.x - tableRect.left;
        const startOffsetY = evt.y - tableRect.top;
        const offsetToSelection = this.cellPosition(groupKey);
        const select = (selection) => {
            this.selection = {
                groupKey: groupKey,
                rowsSelection: selection.row,
                columnsSelection: selection.column,
                focus: {
                    rowIndex: cell.rowIndex,
                    columnIndex: cell.columnIndex,
                },
                isEditing: false,
            };
        };
        const cancelScroll = autoScrollOnBoundary(scrollContainer, {
            onScroll() {
                drag.move({ x: drag.last.x, y: drag.last.y });
            },
        });
        const drag = startDrag(evt, {
            transform: evt => ({
                x: evt.x,
                y: evt.y,
            }),
            onDrag: () => {
                if (fillValues)
                    this.__dragToFillElement.dragging = true;
                return undefined;
            },
            onMove: ({ x, y }) => {
                const tableRect = table.getBoundingClientRect();
                const startX = tableRect.left + startOffsetX;
                const startY = tableRect.top + startOffsetY;
                const selection = offsetToSelection(startX, x, startY, y);
                if (fillValues)
                    selection.column = {
                        start: cell.columnIndex,
                        end: cell.columnIndex,
                    };
                select(selection);
                return selection;
            },
            onDrop: selection => {
                if (!selection) {
                    return;
                }
                select(selection);
                if (fillValues && this.selection) {
                    this.__dragToFillElement.dragging = false;
                    fillSelectionWithFocusCellData(this.host, this.selection);
                }
            },
            onClear: () => {
                cancelScroll();
            },
        });
    }
    navigateRowSelection(direction, append = false) {
        if (!this.selection || !this.isSelectedRowOnly())
            return;
        const focusCell = this.getCellContainer(this.selection.groupKey, this.selection.focus.rowIndex, this.selection.focus.columnIndex);
        if (!focusCell)
            return;
        const rows = Array.from(this.rows(this.selection.groupKey));
        const rowsLen = rows.length;
        const { start: rowSelStart, end: rowSelEnd } = this.selection.rowsSelection;
        const isMultiRowSelection = rowSelEnd - rowSelStart > 0;
        const focus = this.selection.focus;
        const isGoingUp = direction === 'up';
        let newStart = rowSelStart;
        let newEnd = rowSelEnd;
        let newFocusRowIdx = focus.rowIndex;
        if (append) {
            if (isGoingUp) {
                if (rowSelEnd > focus.rowIndex) {
                    newStart = focus.rowIndex; // use focus as an anchor
                    newEnd = rowSelEnd - 1;
                }
                else {
                    newStart = rowSelStart - 1;
                    newEnd = focus.rowIndex; // use focus as an anchor
                }
            }
            else {
                if (rowSelStart < focus.rowIndex) {
                    newStart = rowSelStart + 1;
                    newEnd = focus.rowIndex; // use focus as an anchor
                }
                else {
                    newStart = focus.rowIndex; // use focus as an anchor
                    newEnd = rowSelEnd + 1;
                }
            }
        }
        else {
            // if it is a multi row selection then collapse to the selection start row or to the selection corresponding to the direction end row else select the row corresponding to the direction
            const dir = isGoingUp ? -1 : 1;
            const newIndex = isMultiRowSelection
                ? isGoingUp
                    ? rowSelStart
                    : rowSelEnd
                : rowSelStart + dir;
            newStart = newEnd = newFocusRowIdx = newIndex;
        }
        // clamp ranges
        newStart = clamp(newStart, 0, rowsLen - 1);
        newEnd = clamp(newEnd, 0, rowsLen - 1);
        newFocusRowIdx = clamp(newFocusRowIdx, 0, rowsLen - 1);
        this.selection = {
            ...this.selection,
            rowsSelection: {
                start: newStart,
                end: newEnd,
            },
            focus: { ...focus, rowIndex: newFocusRowIdx },
        };
    }
    focusToCell(position) {
        if (!this.selection) {
            return;
        }
        const cell = this.getCellContainer(this.selection.groupKey, this.selection.focus.rowIndex, this.selection.focus.columnIndex);
        if (!cell) {
            return;
        }
        const row = cell.closest('data-view-table-row');
        const rows = Array.from(row
            ?.closest('.affine-database-table-container')
            ?.querySelectorAll('data-view-table-row') ?? []);
        const cells = Array.from(row?.querySelectorAll('affine-database-cell-container') ?? []);
        if (!row || !rows || !cells) {
            return;
        }
        let rowIndex = rows.indexOf(row);
        let columnIndex = cells.indexOf(cell);
        if (position === 'left') {
            if (columnIndex === 0) {
                columnIndex = cells.length - 1;
                rowIndex--;
            }
            else {
                columnIndex--;
            }
        }
        if (position === 'right') {
            if (columnIndex === cells.length - 1) {
                columnIndex = 0;
                rowIndex++;
            }
            else {
                columnIndex++;
            }
        }
        if (position === 'up') {
            if (rowIndex === 0) {
                //
            }
            else {
                rowIndex--;
            }
        }
        if (position === 'down') {
            if (rowIndex === rows.length - 1) {
                //
            }
            else {
                rowIndex++;
            }
        }
        rows[rowIndex]
            ?.querySelectorAll('affine-database-cell-container')
            ?.item(columnIndex)
            ?.selectCurrentCell(false);
    }
    selectRange(selection, row, column) {
        this.selection = {
            ...selection,
            rowsSelection: row,
            columnsSelection: column,
            isEditing: false,
        };
    }
    getCellContainer(groupKey, rowIndex, columnIndex) {
        const row = this.rows(groupKey)?.item(rowIndex);
        return row
            ?.querySelectorAll('affine-database-cell-container')
            .item(columnIndex);
    }
    rows(groupKey) {
        const container = groupKey != null
            ? this.tableContainer.querySelector(`affine-data-view-table-group[data-group-key="${groupKey}"]`)
            : this.tableContainer;
        assertExists(container);
        return container.querySelectorAll('data-view-table-row');
    }
    updateSelection(tableSelection) {
        const update = () => {
            const result = this.checkSelection();
            if (!result) {
                return false;
            }
            this.updateSelectionStyle(tableSelection?.groupKey, tableSelection?.rowsSelection, tableSelection?.columnsSelection);
            const isRowSelection = tableSelection?.rowsSelection && !tableSelection?.columnsSelection;
            const rowSel = tableSelection?.rowsSelection;
            const isDragElemDragging = this.__dragToFillElement.dragging;
            const isEditing = !!tableSelection?.isEditing;
            const showDragToFillHandle = !isEditing && ((rowSel && isDragElemDragging) || !rowSel);
            this.updateFocusSelectionStyle(tableSelection?.groupKey, tableSelection?.focus, isRowSelection, isEditing, showDragToFillHandle);
            return true;
        };
        this._tableViewSelection = tableSelection;
        if (!tableSelection) {
            cancelAnimationFrame(this.selectionStyleUpdateTask);
            update();
        }
        else {
            const task = () => {
                cancelAnimationFrame(this.selectionStyleUpdateTask);
                if (!update()) {
                    this.selection = undefined;
                    return;
                }
                this.selectionStyleUpdateTask = requestAnimationFrame(task);
            };
            task();
        }
    }
    updateSelectionStyle(groupKey, rowSelection, columnSelection) {
        const div = this.areaSelectionElement;
        if (!div)
            return;
        if (!rowSelection && !columnSelection) {
            div.style.display = 'none';
            return;
        }
        const tableRect = this.tableContainer.getBoundingClientRect();
        // eslint-disable-next-line prefer-const
        let { left, top, width, height, scale } = this.getRect(groupKey, rowSelection?.start ?? 0, rowSelection?.end ?? this.view.rows.length - 1, columnSelection?.start ?? 0, columnSelection?.end ?? this.view.columnManagerList.length - 1);
        const isRowSelection = rowSelection && !columnSelection;
        if (isRowSelection) {
            left = tableRect.left;
            width = tableRect.width;
        }
        div.style.left = `${left - tableRect.left / scale}px`;
        div.style.top = `${top - tableRect.top / scale}px`;
        div.style.width = `${width}px`;
        div.style.height = `${height}px`;
        div.style.display = 'block';
        div.style.border = isRowSelection
            ? '1px solid var(--affine-primary-color)'
            : 'unset';
    }
    updateFocusSelectionStyle(groupKey, focus, isRowSelection, isEditing = false, showDragToFillHandle = false) {
        const div = this.focusSelectionElement;
        const dragToFill = this.dragToFillDraggable;
        if (!div || !dragToFill)
            return;
        if (focus && !isRowSelection) {
            // Check if row is removed.
            const rows = this.rows(groupKey) ?? [];
            if (rows.length <= focus.rowIndex)
                return;
            const { left, top, width, height, scale } = this.getRect(groupKey, focus.rowIndex, focus.rowIndex, focus.columnIndex, focus.columnIndex);
            const tableRect = this.tableContainer.getBoundingClientRect();
            const x = left - tableRect.left / scale;
            const y = top - 1 - tableRect.top / scale;
            const w = width + 1;
            const h = height + 1;
            div.style.left = `${x}px`;
            div.style.top = `${y}px`;
            div.style.width = `${w}px`;
            div.style.height = `${h}px`;
            div.style.borderColor = 'var(--affine-primary-color)';
            div.style.borderStyle = this.__dragToFillElement.dragging
                ? 'dashed'
                : 'solid';
            div.style.boxShadow = isEditing
                ? '0px 0px 0px 2px rgba(30, 150, 235, 0.30)'
                : 'unset';
            div.style.display = 'block';
            dragToFill.style.left = `${x + w}px`;
            dragToFill.style.top = `${y + h}px`;
            dragToFill.style.display = showDragToFillHandle ? 'block' : 'none';
        }
        else {
            div.style.display = 'none';
            dragToFill.style.display = 'none';
        }
    }
    getRect(groupKey, top, bottom, left, right) {
        const rows = this.rows(groupKey);
        const topRow = rows.item(top);
        const bottomRow = rows.item(bottom);
        const topCells = topRow.querySelectorAll('affine-database-cell-container');
        const leftCell = topCells.item(left);
        const rightCell = topCells.item(right);
        const leftRect = leftCell.getBoundingClientRect();
        const scale = leftRect.width / leftCell.column.width;
        return {
            top: leftRect.top / scale,
            left: leftRect.left / scale,
            width: (rightCell.getBoundingClientRect().right - leftRect.left) / scale,
            height: (bottomRow.getBoundingClientRect().bottom - leftRect.top) / scale,
            scale,
        };
    }
    selectRow(index) {
        this.selection = {
            rowsSelection: {
                start: index,
                end: index,
            },
            focus: {
                rowIndex: index,
                columnIndex: 0,
            },
            isEditing: false,
        };
    }
    toggleRow(index) {
        const selection = this.selection;
        if (selection) {
            const rowsSelection = selection.rowsSelection;
            if (rowsSelection &&
                !selection.columnsSelection &&
                rowsSelection.start === index &&
                rowsSelection.end === index) {
                this.selection = {
                    ...selection,
                    rowsSelection: undefined,
                };
                return;
            }
        }
        this.selection = {
            rowsSelection: {
                start: index,
                end: index,
            },
            focus: {
                rowIndex: index,
                columnIndex: 0,
            },
            isEditing: false,
        };
    }
    focusFirstCell() {
        this.selection = {
            focus: {
                rowIndex: 0,
                columnIndex: 0,
            },
            isEditing: false,
        };
    }
    insertRowBefore(groupKey, rowId) {
        this.insertTo(groupKey, rowId, true);
    }
    insertRowAfter(groupKey, rowId) {
        this.insertTo(groupKey, rowId, false);
    }
    deleteRow(rowId) {
        this.view.rowDelete([rowId]);
        this.focusToCell('up');
    }
    isSelectedRowOnly() {
        const selection = this.selection;
        return (!!selection && !!selection.rowsSelection && !selection.columnsSelection);
    }
    isRowSelected(groupKey, rowIndex) {
        const selection = this.selection;
        if (!selection || selection.groupKey != groupKey) {
            return false;
        }
        const { rowsSelection, columnsSelection } = selection;
        if (!rowsSelection || columnsSelection) {
            return false;
        }
        return rowsSelection.start === rowIndex && rowsSelection.end === rowIndex;
    }
}
let SelectionElement = (() => {
    let _classDecorators = [customElement('data-view-table-selection')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = ShadowlessElement;
    var SelectionElement = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.focusRef = createRef();
            this.selectionRef = createRef();
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            SelectionElement = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .database-selection {
      position: absolute;
      z-index: 1;
      box-sizing: border-box;
      background: var(--affine-primary-color-04);
      pointer-events: none;
      display: none;
    }

    .database-focus {
      position: absolute;
      width: 100%;
      z-index: 1;
      box-sizing: border-box;
      border: 1px solid var(--affine-primary-color);
      border-radius: 2px;
      pointer-events: none;
      display: none;
      outline: none;
    }

    @media print {
      affine-database-selection {
        display: none;
      }
    }
  `; }
        render() {
            return html `
      <div ${ref(this.selectionRef)} class="database-selection"></div>
      <div tabindex="0" ${ref(this.focusRef)} class="database-focus"></div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return SelectionElement = _classThis;
})();
//# sourceMappingURL=selection.js.map