import './components/link-node.js';
import { BaseCellRenderer } from '../../base-cell.js';
export declare class LinkCell extends BaseCellRenderer<string> {
    static styles: import("lit").CSSResult;
    private preValue?;
    private _onClick;
    private _onEdit;
    get std(): import("@blocksuite/block-std").BlockStdScope | undefined;
    updated(): void;
    openDoc: (e: MouseEvent) => void;
    accessor docId: string | undefined;
    render(): import("lit").TemplateResult;
}
export declare class LinkCellEditing extends BaseCellRenderer<string> {
    static styles: import("lit").CSSResult;
    private accessor _container;
    private _focusEnd;
    private _setValue;
    private _onKeydown;
    firstUpdated(): void;
    onExitEditMode(): void;
    render(): import("lit").TemplateResult;
}
export declare const linkColumnConfig: import("../../column-config.js").ColumnMeta<"link", string, Record<string, never>>;
//# sourceMappingURL=cell-renderer.d.ts.map