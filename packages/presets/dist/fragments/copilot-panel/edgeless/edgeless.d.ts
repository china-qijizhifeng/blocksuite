import { ShadowlessElement } from '@blocksuite/block-std';
import type { AILogic } from '../logic.js';
declare const CopilotEdgelessPanel_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class CopilotEdgelessPanel extends CopilotEdgelessPanel_base {
    static styles: import("lit").CSSResult;
    accessor logic: AILogic;
    get host(): import("@blocksuite/block-std").EditorHost;
    protected render(): unknown;
}
declare global {
    interface HTMLElementTagNameMap {
        'copilot-edgeless-panel': CopilotEdgelessPanel;
    }
}
export {};
//# sourceMappingURL=edgeless.d.ts.map