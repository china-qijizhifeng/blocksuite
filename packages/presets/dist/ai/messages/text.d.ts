import { type EditorHost } from '@blocksuite/block-std';
import type { AffineAIPanelState } from '@blocksuite/blocks';
import { type AffineAIPanelWidgetConfig } from '@blocksuite/blocks';
import { LitElement, type PropertyValues } from 'lit';
type TextRendererOptions = {
    maxHeight?: number;
    customHeading?: boolean;
};
declare const AIAnswerText_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AIAnswerText extends AIAnswerText_base {
    static styles: import("lit").CSSResult;
    private accessor _container;
    private _doc;
    private _answers;
    private _timer?;
    accessor host: EditorHost;
    accessor answer: string;
    accessor options: TextRendererOptions;
    accessor state: AffineAIPanelState | undefined;
    private _onWheel;
    private _clearTimer;
    private _selector;
    private _updateDoc;
    shouldUpdate(changedProperties: PropertyValues): boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-answer-text': AIAnswerText;
    }
}
export declare const createTextRenderer: (host: EditorHost, options: TextRendererOptions) => AffineAIPanelWidgetConfig['answerRenderer'];
export {};
//# sourceMappingURL=text.d.ts.map