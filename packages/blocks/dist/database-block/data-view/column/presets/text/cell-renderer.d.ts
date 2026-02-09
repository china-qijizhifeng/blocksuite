import { BaseCellRenderer } from '../../base-cell.js';
export declare class TextCell extends BaseCellRenderer<string> {
    static styles: import("lit").CSSResult;
    render(): import("lit").TemplateResult<1>;
}
export declare class TextCellEditing extends BaseCellRenderer<string> {
    static styles: import("lit").CSSResult;
    private accessor _inputEle;
    private _setValue;
    private _keydown;
    focusEnd: () => void;
    onExitEditMode(): void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
export declare const textColumnConfig: import("../../column-config.js").ColumnMeta<"text", string, Record<string, never>>;
//# sourceMappingURL=cell-renderer.d.ts.map