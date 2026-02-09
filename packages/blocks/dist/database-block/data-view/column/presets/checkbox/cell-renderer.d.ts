import { BaseCellRenderer } from '../../base-cell.js';
export declare class CheckboxCell extends BaseCellRenderer<boolean> {
    static styles: import("lit").CSSResult;
    private accessor _checkbox;
    beforeEnterEditMode(): boolean;
    onCopy(_e: ClipboardEvent): void;
    onPaste(_e: ClipboardEvent): void;
    onCut(_e: ClipboardEvent): void;
    render(): import("lit").TemplateResult<1>;
}
export declare const checkboxColumnConfig: import("../../column-config.js").ColumnMeta<"checkbox", boolean, Record<string, never>>;
//# sourceMappingURL=cell-renderer.d.ts.map