import '../_common/components/rich-text/rich-text.js';
import type { BlockElement } from '@blocksuite/block-std';
import { type TemplateResult } from 'lit';
import { BlockComponent } from '../_common/components/block-component.js';
import type { ParagraphBlockModel } from './paragraph-model.js';
import type { ParagraphBlockService } from './paragraph-service.js';
export declare class ParagraphBlockComponent extends BlockComponent<ParagraphBlockModel, ParagraphBlockService> {
    get inlineManager(): import("@blocksuite/blocks").InlineManager<import("@blocksuite/blocks").AffineTextAttributes>;
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
    }>;
    get attributeRenderer(): import("@blocksuite/inline").AttributeRenderer<import("@blocksuite/blocks").AffineTextAttributes>;
    get markdownShortcutHandler(): (context: import("@blocksuite/inline").KeyboardBindingContext<import("@blocksuite/blocks").AffineTextAttributes>, undoManager: import("yjs").UndoManager) => boolean;
    get embedChecker(): (delta: import("@blocksuite/inline").DeltaInsert<import("@blocksuite/blocks").AffineTextAttributes>) => boolean;
    get topContenteditableElement(): BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string> | null;
    get inEdgelessText(): boolean;
    get inlineEditor(): import("@blocksuite/blocks").AffineInlineEditor | null | undefined;
    static styles: import("lit").CSSResult;
    private _inlineRangeProvider;
    private accessor _richTextElement;
    private accessor _placeholderContainer;
    private _currentTextSelection;
    accessor blockContainerStyles: {
        margin: string;
    };
    private _updatePlaceholder;
    private _isInDatabase;
    getUpdateComplete(): Promise<boolean>;
    connectedCallback(): void;
    firstUpdated(): void;
    renderBlock(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-paragraph': ParagraphBlockComponent;
    }
}
//# sourceMappingURL=paragraph-block.d.ts.map