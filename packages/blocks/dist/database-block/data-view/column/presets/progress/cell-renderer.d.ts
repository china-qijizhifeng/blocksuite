import { BaseCellRenderer } from '../../base-cell.js';
export declare class ProgressCell extends BaseCellRenderer<number> {
    static styles: import("lit").CSSResult;
    protected render(): import("lit").TemplateResult<1>;
    _bgClick(e: MouseEvent): void;
}
export declare class ProgressCellEditing extends BaseCellRenderer<number> {
    get _value(): number;
    static styles: import("lit").CSSResult;
    private accessor tempValue;
    private accessor _progressBg;
    protected render(): import("lit").TemplateResult<1>;
    onExitEditMode(): void;
    _onChange(value?: number): void;
    firstUpdated(): void;
    startDrag: (event: MouseEvent) => void;
    onCopy(_e: ClipboardEvent): void;
    onPaste(_e: ClipboardEvent): void;
    onCut(_e: ClipboardEvent): void;
}
export declare const progressColumnConfig: import("../../column-config.js").ColumnMeta<"progress", number, Record<string, never>>;
//# sourceMappingURL=cell-renderer.d.ts.map