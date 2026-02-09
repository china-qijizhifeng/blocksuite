import { LitElement } from 'lit';
import type { GroupData } from '../../../../common/group-by/helper.js';
import type { DataViewTableManager } from '../table-view-manager.js';
declare const DataBaseColumnStats_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DataBaseColumnStats extends DataBaseColumnStats_base {
    static styles: import("lit").CSSResult;
    accessor view: DataViewTableManager;
    accessor group: GroupData | undefined;
    protected render(): import("lit").TemplateResult<1>;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-column-stats': DataBaseColumnStats;
    }
}
export {};
//# sourceMappingURL=column-stats.d.ts.map