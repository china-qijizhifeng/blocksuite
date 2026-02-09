import './database-header-column.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import { type TemplateResult } from 'lit';
import type { DataViewTableManager } from '../../table-view-manager.js';
declare const DatabaseColumnHeader_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class DatabaseColumnHeader extends DatabaseColumnHeader_base {
    private get readonly();
    static styles: import("lit").CSSResult;
    private addColumnPositionRef;
    accessor tableViewManager: DataViewTableManager;
    accessor renderGroupHeader: (() => TemplateResult) | undefined;
    addColumnButton: import("../../../../../utils/uni-component/render-template.js").AnyRender<unknown>;
    private _onAddColumn;
    connectedCallback(): void;
    updateAddButton: () => void;
    editLastColumnTitle: () => void;
    accessor scaleDiv: HTMLDivElement;
    getScale(): number;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-database-column-header': DatabaseColumnHeader;
    }
}
export {};
//# sourceMappingURL=column-header.d.ts.map