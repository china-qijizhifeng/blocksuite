import { BaseCellRenderer } from '../../base-cell.js';
export declare class NumberCell extends BaseCellRenderer<number> {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
export declare class NumberCellEditing extends BaseCellRenderer<number> {
    static styles: import("lit").CSSResult;
    private accessor _inputEle;
    private _setValue;
    private _keydown;
    focusEnd: () => void;
    onExitEditMode(): void;
    firstUpdated(): void;
    _blur(): void;
    _focus(): void;
    render(): import("lit").TemplateResult<1>;
}
export declare const numberColumnConfig: import("../../column-config.js").ColumnMeta<"number", number, {
    decimal: number;
}>;
//# sourceMappingURL=cell-renderer.d.ts.map