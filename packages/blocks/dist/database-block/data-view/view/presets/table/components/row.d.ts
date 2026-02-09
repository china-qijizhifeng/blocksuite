import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewRenderer } from '../../../../data-view.js';
import type { DataViewTableManager } from '../table-view-manager.js';
import type { TableViewSelection } from '../types.js';
declare const TableRow_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class TableRow extends TableRow_base {
    get selectionController(): import("../controller/selection.js").TableSelectionController | undefined;
    get groupKey(): string | undefined;
    static styles: import("lit").CSSResult;
    accessor dataViewEle: DataViewRenderer;
    accessor view: DataViewTableManager;
    accessor rowIndex: number;
    accessor rowId: string;
    private _clickDragHandler;
    protected render(): unknown;
    setSelection: (selection?: Omit<TableViewSelection, 'viewId' | 'type'>) => void;
    contextMenu: (e: MouseEvent) => void;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-table-row': TableRow;
    }
}
export {};
//# sourceMappingURL=row.d.ts.map