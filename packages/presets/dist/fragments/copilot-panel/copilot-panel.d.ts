import './chat/chat.js';
import './edgeless/edgeless.js';
import './copilot-service/index.js';
import { ShadowlessElement } from '@blocksuite/block-std';
import { type TemplateResult } from 'lit';
import type { AffineEditorContainer } from '../../index.js';
import type { AIEdgelessLogic } from './edgeless/logic.js';
import { AILogic } from './logic.js';
declare const CopilotPanel_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class CopilotPanel extends CopilotPanel_base {
    get host(): import("@blocksuite/block-std").EditorHost;
    get logic(): AILogic;
    static styles: import("lit").CSSResult;
    accessor editor: AffineEditorContainer;
    editorWithAI?: AIEdgelessLogic;
    aiLogic?: AILogic;
    config: () => TemplateResult<1>;
    panels: Record<string, {
        render: () => TemplateResult;
    }>;
    accessor currentPanel: keyof typeof this.panels;
    connectedCallback(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'copilot-panel': CopilotPanel;
    }
}
export declare const affineFormatBarItemConfig: {
    type: "custom";
    render(): TemplateResult | null;
};
export {};
//# sourceMappingURL=copilot-panel.d.ts.map