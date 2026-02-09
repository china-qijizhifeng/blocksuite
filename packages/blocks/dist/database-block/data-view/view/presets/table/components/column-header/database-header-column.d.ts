import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewTableColumnManager, DataViewTableManager } from '../../table-view-manager.js';
declare const DatabaseHeaderColumn_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DatabaseHeaderColumn extends DatabaseHeaderColumn_base {
    private get readonly();
    static styles: import("lit").CSSResult;
    private widthDragBar;
    private drawWidthDragBarTask;
    accessor tableViewManager: DataViewTableManager;
    accessor column: DataViewTableColumnManager;
    accessor grabStatus: 'grabStart' | 'grabEnd' | 'grabbing';
    private _columnsOffset;
    private moveColumn;
    private _clickColumn;
    private _contextMenu;
    private popMenu;
    private _clickTypeIcon;
    private drawWidthDragBar;
    private _enterWidthDragBar;
    private _leaveWidthDragBar;
    private widthDragStart;
    connectedCallback(): void;
    editTitle: () => void;
    render(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-header-column': DatabaseHeaderColumn;
    }
}
export {};
//# sourceMappingURL=database-header-column.d.ts.map