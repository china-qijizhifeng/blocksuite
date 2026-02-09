import { LitElement } from 'lit';
import type { GroupData } from '../../../../common/group-by/helper.js';
import { type ColumnDataType, type StatCalcOp } from '../stat-ops.js';
import type { DataViewTableColumnManager } from '../table-view-manager.js';
declare const DatabaseColumnStatsCell_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DatabaseColumnStatsCell extends DatabaseColumnStatsCell_base {
    static styles: import("lit").CSSResult;
    private accessor operation;
    private accessor result;
    accessor column: DataViewTableColumnManager;
    accessor group: GroupData | undefined;
    private getResultString;
    protected render(): import("lit").TemplateResult<1>;
    connectedCallback(): void;
    openMenu: (ev: MouseEvent) => void;
    onSelect: (operation: StatCalcOp) => void;
    calculate(): void;
    getColumnType(): ColumnDataType;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-column-stats-cell': DatabaseColumnStatsCell;
    }
}
export {};
//# sourceMappingURL=column-stats-cell.d.ts.map