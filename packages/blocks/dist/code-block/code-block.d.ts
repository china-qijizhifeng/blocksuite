import '../_common/components/rich-text/rich-text.js';
import type { BlockElement } from '@blocksuite/block-std';
import { type TemplateResult } from 'lit';
import { z } from 'zod';
import { BlockComponent } from './../_common/components/block-component.js';
import { CodeClipboardController } from './clipboard/index.js';
import type { CodeBlockModel, HighlightOptionsGetter } from './code-model.js';
export declare class CodeBlockComponent extends BlockComponent<CodeBlockModel> {
    get readonly(): boolean;
    get topContenteditableElement(): BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string> | null;
    get inlineEditor(): import("@blocksuite/inline").InlineEditor<{
        bold?: true | null | undefined;
        italic?: true | null | undefined;
        underline?: true | null | undefined;
        strike?: true | null | undefined;
        code?: true | null | undefined;
        link?: string | null | undefined;
    }>;
    static styles: import("lit").CSSResult;
    private readonly _themeObserver;
    private _richTextResizeObserver;
    /**
     * Given the high cost associated with updating the highlight,
     * it is preferable to do so only when a change in language occurs.
     *
     * The variable is used to store the "current" language info,
     * also known as the "previous" language
     * when a language change occurs and the highlighter is not updated.
     *
     * In most cases, the language will be equal to normalizing the language of the model.
     *
     * See {@link updated}
     */
    private _previousLanguage;
    private _highlighter;
    private _inlineRangeProvider;
    private accessor _richTextElement;
    accessor useCaptionEditor: boolean;
    accessor blockContainerStyles: {
        margin: string;
    };
    clipboardController: CodeClipboardController;
    highlightOptionsGetter: HighlightOptionsGetter | null;
    readonly attributesSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    private _startHighlight;
    private _updateLineNumbers;
    readonly getAttributeRenderer: () => import("@blocksuite/inline").AttributeRenderer;
    getUpdateComplete(): Promise<boolean>;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(): void;
    copyCode(): void;
    setHighlightOptionsGetter(fn: HighlightOptionsGetter): void;
    setLang(lang: string | null): void;
    setWrap(wrap: boolean): void;
    renderBlock(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-code': CodeBlockComponent;
    }
}
//# sourceMappingURL=code-block.d.ts.map