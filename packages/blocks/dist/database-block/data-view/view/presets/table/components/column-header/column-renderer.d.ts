import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewColumnManager } from '../../../../data-view-manager.js';
import type { DataViewTableManager } from '../../table-view-manager.js';
declare const DataViewColumnPreview_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DataViewColumnPreview extends DataViewColumnPreview_base {
    static styles: import("lit").CSSResult;
    accessor tableViewManager: DataViewTableManager;
    accessor column: DataViewColumnManager;
    accessor table: HTMLElement;
    private renderGroup;
    render(): import("lit").TemplateResult | import("lit").TemplateResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-column-preview': DataViewColumnPreview;
    }
}
export {};
//# sourceMappingURL=column-renderer.d.ts.map