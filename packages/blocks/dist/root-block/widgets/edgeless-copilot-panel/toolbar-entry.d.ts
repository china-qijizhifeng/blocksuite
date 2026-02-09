import { type EditorHost } from '@blocksuite/block-std';
import { LitElement } from 'lit';
import type { AIItemGroupConfig } from '../../../_common/components/ai-item/types.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessCopilotToolbarEntry_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessCopilotToolbarEntry extends EdgelessCopilotToolbarEntry_base {
    static styles: import("lit").CSSResult;
    accessor host: EditorHost;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor groups: AIItemGroupConfig[];
    private _showCopilotPanel;
    render(): import("lit").TemplateResult<1>;
}
export {};
//# sourceMappingURL=toolbar-entry.d.ts.map