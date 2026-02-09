import type { EditorHost } from '@blocksuite/block-std';
import type { AffineAIPanelWidgetConfig } from '@blocksuite/blocks';
import { LitElement } from 'lit';
type AIAnswerWrapperOptions = {
    height: number;
};
export declare class AIAnswerWrapper extends LitElement {
    static styles: import("lit").CSSResult;
    accessor options: AIAnswerWrapperOptions | undefined;
    protected render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-answer-wrapper': AIAnswerWrapper;
    }
}
export declare const createIframeRenderer: (host: EditorHost, options?: AIAnswerWrapperOptions) => AffineAIPanelWidgetConfig['answerRenderer'];
export declare const createImageRenderer: (host: EditorHost, options?: AIAnswerWrapperOptions) => AffineAIPanelWidgetConfig['answerRenderer'];
export {};
//# sourceMappingURL=wrapper.d.ts.map