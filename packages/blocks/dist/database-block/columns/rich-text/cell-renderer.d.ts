import { Text } from '@blocksuite/store';
import { nothing } from 'lit';
import type { AffineInlineEditor, AffineTextAttributes } from '../../../_common/inline/presets/affine-inline-specs.js';
import { BaseCellRenderer } from '../../data-view/column/base-cell.js';
export declare class RichTextCell extends BaseCellRenderer<Text> {
    static styles: import("lit").CSSResult;
    get service(): import("@blocksuite/blocks").DatabaseBlockService<AffineTextAttributes> | undefined;
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
    private accessor _richTextElement;
    get inlineEditor(): AffineInlineEditor;
    get topContenteditableElement(): import("@blocksuite/block-std").BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string> | null | undefined;
    render(): import("lit/directive.js").DirectiveResult<typeof import("lit/directives/keyed.js").Keyed>;
}
export declare class RichTextCellEditing extends BaseCellRenderer<Text> {
    get service(): import("@blocksuite/blocks").DatabaseBlockService<AffineTextAttributes> | undefined;
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
        'affine-database-rich-text-cell-editing': RichTextCellEditing;
    }
}
export declare const richTextColumnConfig: import("../../data-view/index.js").ColumnMeta<"rich-text", import("../utils.js").RichTextCellType, Record<string, never>>;
//# sourceMappingURL=cell-renderer.d.ts.map