import { type EditorHost } from '@blocksuite/block-std';
import { type AIItemGroupConfig, EdgelessRootService } from '@blocksuite/blocks';
import { LitElement } from 'lit';
declare const AskAIPanel_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AskAIPanel extends AskAIPanel_base {
    static styles: import("lit").CSSResult;
    accessor host: EditorHost;
    accessor actionGroups: AIItemGroupConfig[];
    accessor abortController: AbortController | null;
    accessor minWidth: number;
    get _edgeless(): EdgelessRootService | null;
    get _actionGroups(): {
        items: import("@blocksuite/blocks").AIItemConfig[];
        name?: string | undefined;
    }[];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ask-ai-panel': AskAIPanel;
    }
}
export {};
//# sourceMappingURL=ask-ai-panel.d.ts.map