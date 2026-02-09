import type { Y } from '@blocksuite/store';
import { Text } from '@blocksuite/store';
import { nothing } from 'lit';
import type { AffineInlineEditor, AffineTextAttributes } from '../../../_common/inline/presets/affine-inline-specs.js';
import { BaseCellRenderer } from '../../../database-block/data-view/column/index.js';
export declare class RichTextCell extends BaseCellRenderer<Y.Text> {
    get service(): import("../../../database-block/database-service.js").DatabaseBlockService<AffineTextAttributes> | undefined;
    get inlineManager(): import("@blocksuite/blocks").InlineManager<AffineTextAttributes> | undefined;
    get attributesSchema(): import("zod").ZodObject<Record<keyof AffineTextAttributes, import("zod").ZodTypeAny>, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
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
    get attributeRenderer(): import("@blocksuite/inline/types").AttributeRenderer<AffineTextAttributes> | undefined;
    get inlineEditor(): AffineInlineEditor;
    get topContenteditableElement(): import("@blocksuite/block-std").BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string> | null | undefined;
    static styles: import("lit").CSSResult;
    private accessor _richTextElement;
    private _initYText;
    connectedCallback(): void;
    render(): typeof nothing | import("lit").TemplateResult;
}
export declare class RichTextCellEditing extends BaseCellRenderer<Text> {
    get service(): import("../../../database-block/database-service.js").DatabaseBlockService<AffineTextAttributes> | undefined;
    get inlineManager(): import("@blocksuite/blocks").InlineManager<AffineTextAttributes> | undefined;
    get attributesSchema(): import("zod").ZodObject<Record<keyof AffineTextAttributes, import("zod").ZodTypeAny>, import("zod").UnknownKeysParam, import("zod").ZodTypeAny, {
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
    get attributeRenderer(): import("@blocksuite/inline/types").AttributeRenderer<AffineTextAttributes> | undefined;
    get inlineEditor(): AffineInlineEditor;
    get topContenteditableElement(): import("@blocksuite/block-std").BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string> | null | undefined;
    static styles: import("lit").CSSResult;
    private accessor _richTextElement;
    private _initYText;
    private _handleKeyDown;
    private _onSoftEnter;
    connectedCallback(): void;
    firstUpdated(): void;
    render(): typeof nothing | import("lit").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-data-view-rich-text-cell-editing': RichTextCellEditing;
    }
}
export declare const richTextColumnConfig: import("../../../database-block/data-view/index.js").ColumnMeta<"rich-text", import("../../../database-block/columns/utils.js").RichTextCellType, Record<string, never>>;
//# sourceMappingURL=cell-renderer.d.ts.map