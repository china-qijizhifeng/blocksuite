import '../_common/components/rich-text/rich-text.js';
import type { BlockElement } from '@blocksuite/block-std';
import { type TemplateResult } from 'lit';
import { BlockComponent } from '../_common/components/block-component.js';
import type { ListBlockModel } from './list-model.js';
import type { ListBlockService } from './list-service.js';
export declare class ListBlockComponent extends BlockComponent<ListBlockModel, ListBlockService> {
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
    static styles: import("lit").CSSResult;
    private accessor _isCollapsedWhenReadOnly;
    private accessor _richTextElement;
    private _inlineRangeProvider;
    accessor blockContainerStyles: {
        margin: string;
    };
    private _select;
    private _onClickIcon;
    private _updateFollowingListSiblings;
    private _toggleChildren;
    private _toggleTemplate;
    getUpdateComplete(): Promise<boolean>;
    connectedCallback(): void;
    renderBlock(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-list': ListBlockComponent;
    }
}
//# sourceMappingURL=list-block.d.ts.map