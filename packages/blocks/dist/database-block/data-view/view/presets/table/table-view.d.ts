import './components/column-header/column-header.js';
import './components/cell-container.js';
import './components/row.js';
import './group.js';
import type { GroupHelper } from '../../../common/group-by/helper.js';
import type { InsertToPosition } from '../../../types.js';
import { DataViewBase } from '../../data-view-base.js';
import { TableClipboardController } from './controller/clipboard.js';
import { TableDragController } from './controller/drag.js';
import { TableHotkeysController } from './controller/hotkeys.js';
import { TableSelectionController } from './controller/selection.js';
import type { DataViewTableManager } from './table-view-manager.js';
import type { TableViewSelection } from './types.js';
export declare class DataViewTable extends DataViewBase<DataViewTableManager, TableViewSelection> {
    private get readonly();
    static styles: import("lit").CSSResult;
    dragController: TableDragController;
    selectionController: TableSelectionController;
    hotkeysController: TableHotkeysController;
    clipboardController: TableClipboardController;
    private _addRow;
    private renderTable;
    connectedCallback(): void;
    addRow(position: InsertToPosition): void;
    renderAddGroup: (groupHelper: GroupHelper) => import("lit").TemplateResult | undefined;
    onWheel: (event: WheelEvent) => void;
    hideIndicator(): void;
    moveTo(id: string, evt: MouseEvent): void;
    showIndicator(evt: MouseEvent): boolean;
    render(): import("lit").TemplateResult;
    focusFirstCell(): void;
    getSelection: () => TableViewSelection | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-table': DataViewTable;
    }
}
//# sourceMappingURL=table-view.d.ts.map