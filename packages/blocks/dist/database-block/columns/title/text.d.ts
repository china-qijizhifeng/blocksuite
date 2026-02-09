import type { Text } from '@blocksuite/store';
import type { RichText } from '../../../_common/components/index.js';
import { BaseCellRenderer } from '../../data-view/column/index.js';
import type { DataViewKanbanManager } from '../../data-view/view/presets/kanban/kanban-view-manager.js';
import type { DataViewTableManager } from '../../data-view/view/presets/table/table-view-manager.js';
declare abstract class BaseTextCell extends BaseCellRenderer<Text> {
    get service(): import("@blocksuite/blocks").DatabaseBlockService<import("@blocksuite/blocks").AffineTextAttributes> | undefined;
    get inlineManager(): import("@blocksuite/blocks").InlineManager<import("@blocksuite/blocks").AffineTextAttributes> | undefined;
    get attributesSchema(): import("zod").ZodObject<Record<keyof import("@blocksuite/blocks").AffineTextAttributes, import("zod").ZodTypeAny>, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
        code?: any;
        link?: any;
        bold?: any;
        italic?: any;
        background?: any;
        reference?: any;
        strike?: any;
        color?: any;
        comment?: any;
        underline?: any;
        aiPlaceholder?: any;
        aiDiff?: any;
    }, {
        code?: any;
        link?: any;
        bold?: any;
        italic?: any;
        background?: any;
        reference?: any;
        strike?: any;
        color?: any;
        comment?: any;
        underline?: any;
        aiPlaceholder?: any;
        aiDiff?: any;
    }> | undefined;
    get attributeRenderer(): import("@blocksuite/inline/types").AttributeRenderer<import("@blocksuite/blocks").AffineTextAttributes> | undefined;
    get topContenteditableElement(): import("@blocksuite/block-std").BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string> | null | undefined;
    get titleColumn(): import("../../data-view/view/presets/table/table-view-manager.js").DataViewTableColumnManager | import("../../data-view/view/presets/kanban/kanban-view-manager.js").DataViewKanbanColumnManager;
    get inlineEditor(): import("@blocksuite/blocks").AffineInlineEditor;
    static styles: import("lit").CSSResult;
    accessor view: DataViewTableManager | DataViewKanbanManager;
    accessor showIcon: boolean;
    accessor richText: RichText;
    renderIcon(): import("lit").TemplateResult | undefined;
}
export declare class HeaderAreaTextCell extends BaseTextCell {
    render(): import("lit").TemplateResult;
}
export declare class HeaderAreaTextCellEditing extends BaseTextCell {
    private _onCopy;
    private get std();
    private _onCut;
    private _onPaste;
    firstUpdated(props: Map<string, unknown>): void;
    connectedCallback(): void;
    render(): import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'data-view-header-area-text': HeaderAreaTextCell;
        'data-view-header-area-text-editing': HeaderAreaTextCellEditing;
    }
}
export {};
//# sourceMappingURL=text.d.ts.map