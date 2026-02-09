import { BaseCellRenderer } from '../../base-cell.js';
export declare class DateCell extends BaseCellRenderer<number> {
    static styles: import("lit").CSSResult;
    render(): "" | import("lit").TemplateResult<1>;
}
export declare class DateCellEditing extends BaseCellRenderer<number> {
    static styles: import("lit").CSSResult;
    private accessor _inputEle;
    private _prevPortalAbortController;
    private _datePicker;
    private _setValue;
    private _onFocus;
    private _onInput;
    onExitEditMode(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
export declare const dateColumnConfig: import("../../column-config.js").ColumnMeta<"date", number, Record<string, never>>;
//# sourceMappingURL=cell-renderer.d.ts.map