import './ask-ai-panel.js';
import { type EditorHost } from '@blocksuite/block-std';
import { type AIItemGroupConfig, EdgelessRootService } from '@blocksuite/blocks';
import { LitElement } from 'lit';
type buttonSize = 'small' | 'middle' | 'large';
type toggleType = 'hover' | 'click';
export type AskAIButtonOptions = {
    size: buttonSize;
    backgroundColor?: string;
    boxShadow?: string;
    panelWidth?: number;
};
declare const AskAIButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AskAIButton extends AskAIButton_base {
    get _edgeless(): EdgelessRootService | null;
    static styles: import("lit").CSSResult;
    private accessor _askAIButton;
    private _abortController;
    private _whenHover;
    accessor host: EditorHost;
    accessor actionGroups: AIItemGroupConfig[];
    accessor toggleType: toggleType;
    accessor options: AskAIButtonOptions;
    private _clearAbortController;
    private _toggleAIPanel;
    firstUpdated(): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ask-ai-button': AskAIButton;
    }
}
export {};
//# sourceMappingURL=ask-ai-button.d.ts.map