import { ShadowlessElement } from '@blocksuite/block-std';
import type { ReactiveController } from 'lit';
import type { Ref } from 'lit/directives/ref.js';
import type { DatabaseCellContainer } from '../components/cell-container.js';
import type { DataViewTable } from '../table-view.js';
import type { CellFocus, MultiSelection, TableViewSelection } from '../types.js';
import { DragToFillElement } from './drag-to-fill.js';
export declare class TableSelectionController implements ReactiveController {
    host: DataViewTable;
    private get dragToFillDraggable();
    private get focusSelectionElement();
    private get areaSelectionElement();
    get tableContainer(): Element;
    get viewData(): import("../table-view-manager.js").DataViewTableManager;
    get selection(): TableViewSelection | undefined;
    set selection(data: Omit<TableViewSelection, 'viewId' | 'type'> | undefined);
    private get view();
    private _tableViewSelection?;
    __selectionElement: SelectionElement;
    __dragToFillElement: DragToFillElement;
    selectionStyleUpdateTask: number;
    constructor(host: DataViewTable);
    private handleSelectionChange;
    private getFocusCellContainer;
    private resolveDragStartTarget;
    private handleDragEvent;
    private clearSelection;
    private scrollToFocus;
    private scrollToAreaSelection;
    private insertTo;
    private checkSelection;
    hostConnected(): void;
    isValidSelection(selection?: TableViewSelection): boolean;
    cellPosition(groupKey: string | undefined): (x1: number, x2: number, y1: number, y2: number) => {
        row: MultiSelection;
        column: MultiSelection;
    };
    startDrag(evt: PointerEvent, cell: DatabaseCellContainer, fillValues?: boolean): void;
    navigateRowSelection(direction: 'up' | 'down', append?: boolean): void;
    focusToCell(position: 'left' | 'right' | 'up' | 'down'): void;
    selectRange(selection: TableViewSelection, row: MultiSelection, column: MultiSelection): void;
    getCellContainer(groupKey: string | undefined, rowIndex: number, columnIndex: number): DatabaseCellContainer | undefined;
    rows(groupKey: string | undefined): NodeListOf<import("../components/row.js").TableRow>;
    updateSelection(tableSelection?: TableViewSelection): void;
    updateSelectionStyle(groupKey: string | undefined, rowSelection?: MultiSelection, columnSelection?: MultiSelection): void;
    updateFocusSelectionStyle(groupKey: string | undefined, focus?: CellFocus, isRowSelection?: boolean, isEditing?: boolean, showDragToFillHandle?: boolean): void;
    getRect(groupKey: string | undefined, top: number, bottom: number, left: number, right: number): {
        top: number;
        left: number;
        width: number;
        height: number;
        scale: number;
    };
    selectRow(index: number): void;
    toggleRow(index: number): void;
    focusFirstCell(): void;
    insertRowBefore(groupKey: string | undefined, rowId: string): void;
    insertRowAfter(groupKey: string | undefined, rowId: string): void;
    deleteRow(rowId: string): void;
    isSelectedRowOnly(): boolean;
    isRowSelected(groupKey: string | undefined, rowIndex: number): boolean;
}
declare class SelectionElement extends ShadowlessElement {
    static styles: import("lit").CSSResult;
    focusRef: Ref<HTMLDivElement>;
    selectionRef: Ref<HTMLDivElement>;
    render(): import("lit").TemplateResult<1>;
}
export {};
//# sourceMappingURL=selection.d.ts.map