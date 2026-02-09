import type { InsertToPosition } from '../../../../types.js';
import { WidgetBase } from '../../../widget-base.js';
export declare class DataViewHeaderToolsAddRow extends WidgetBase {
    private get readonly();
    static styles: import("lit").CSSResult;
    accessor showToolBar: boolean;
    private _onAddNewRecord;
    connectedCallback(): void;
    _dragStart: (e: MouseEvent) => void;
    addRow: (position: InsertToPosition | number) => void;
    render(): import("lit").TemplateResult<1> | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-header-tools-add-row': DataViewHeaderToolsAddRow;
    }
}
//# sourceMappingURL=add-row.d.ts.map