import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewCellLifeCycle } from '../../../../column/index.js';
import type { DataViewManager } from '../../../data-view-manager.js';
import type { DataViewTableColumnManager } from '../table-view-manager.js';
declare const DatabaseCellContainer_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DatabaseCellContainer extends DatabaseCellContainer_base {
    private get selectionView();
    private get groupKey();
    private get readonly();
    get table(): import("../table-view.js").DataViewTable;
    get cell(): DataViewCellLifeCycle | undefined;
    static styles: import("lit").CSSResult;
    private _cell;
    accessor isEditing: boolean;
    accessor view: DataViewManager;
    accessor rowId: string;
    accessor rowIndex: number;
    accessor columnId: string;
    accessor columnIndex: number;
    accessor column: DataViewTableColumnManager;
    selectCurrentCell: (editing: boolean) => void;
    connectedCallback(): void;
    render(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-cell-container': DatabaseCellContainer;
    }
}
export {};
//# sourceMappingURL=cell-container.d.ts.map