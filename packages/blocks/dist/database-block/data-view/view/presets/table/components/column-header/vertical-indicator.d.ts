import { ShadowlessElement } from '@blocksuite/block-std';
import type { DataViewTableColumnManager } from '../../table-view-manager.js';
type GroupRectList = {
    top: number;
    bottom: number;
}[];
declare const TableVerticalIndicator_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class TableVerticalIndicator extends TableVerticalIndicator_base {
    static styles: import("lit").CSSResult;
    accessor top: number;
    accessor left: number;
    accessor width: number;
    accessor lines: GroupRectList;
    accessor shadow: boolean;
    protected render(): unknown;
}
export declare const getTableGroupRects: (tableContainer: HTMLElement) => {
    top: number;
    bottom: number;
}[];
export declare const startDragWidthAdjustmentBar: (evt: PointerEvent, tableContainer: HTMLElement, width: number, column: DataViewTableColumnManager) => void;
type VerticalIndicator = {
    display: (width: number, top: number, lines: GroupRectList, left: number, shadow?: boolean) => void;
    remove: () => void;
};
export declare const getVerticalIndicator: () => VerticalIndicator;
export {};
//# sourceMappingURL=vertical-indicator.d.ts.map