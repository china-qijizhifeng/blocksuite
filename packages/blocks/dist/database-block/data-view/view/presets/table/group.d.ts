import './components/column-stats.js';
import './components/column-stats-cell.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { PropertyValues } from 'lit';
import type { GroupData } from '../../../common/group-by/helper.js';
import type { DataViewRenderer } from '../../../data-view.js';
import type { DataViewTable } from './table-view.js';
import type { DataViewTableManager } from './table-view-manager.js';
declare const TableGroup_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class TableGroup extends TableGroup_base {
    get rows(): string[];
    static styles: import("lit").CSSResult;
    accessor dataViewEle: DataViewRenderer;
    accessor view: DataViewTableManager;
    accessor viewEle: DataViewTable;
    accessor group: GroupData | undefined;
    private clickAddRow;
    private clickAddRowInStart;
    private clickGroupOptions;
    private renderGroupHeader;
    private renderRows;
    protected updated(_changedProperties: PropertyValues): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-table-group': TableGroup;
    }
}
export {};
//# sourceMappingURL=group.d.ts.map