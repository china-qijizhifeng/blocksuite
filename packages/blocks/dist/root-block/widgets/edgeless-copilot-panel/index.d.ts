import '../../../_common/components/ai-item/ai-item-list.js';
import type { EditorHost } from '@blocksuite/block-std';
import { LitElement, nothing } from 'lit';
import type { AIItemGroupConfig } from '../../../_common/components/ai-item/types.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessCopilotPanel_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessCopilotPanel extends EdgelessCopilotPanel_base {
    static styles: import("lit").CSSResult;
    accessor host: EditorHost;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor groups: AIItemGroupConfig[];
    accessor entry: 'toolbar' | 'selection' | undefined;
    accessor onClick: (() => void) | undefined;
    private _getChain;
    connectedCallback(): void;
    hide(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-copilot-panel': EdgelessCopilotPanel;
    }
}
export {};
//# sourceMappingURL=index.d.ts.map