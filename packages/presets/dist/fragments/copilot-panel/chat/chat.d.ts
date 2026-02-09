import { ShadowlessElement } from '@blocksuite/block-std';
import { type PropertyValues } from 'lit';
import type { AILogic } from '../logic.js';
import type { ChatMessage, ChatReactiveData, EmbeddedDoc } from './logic.js';
declare const CopilotChatPanel_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class CopilotChatPanel extends CopilotChatPanel_base implements ChatReactiveData {
    get chat(): import("./logic.js").AIChatLogic;
    get host(): import("@blocksuite/block-std").EditorHost;
    get loading(): boolean;
    static styles: import("lit").CSSResult;
    accessor logic: AILogic;
    accessor chatMessagesContainer: HTMLDivElement;
    accessor tempMessage: string | undefined;
    accessor history: ChatMessage[];
    accessor currentRequest: number | undefined;
    accessor value: string;
    accessor syncedDocs: EmbeddedDoc[];
    accessor surfaceSelection: boolean;
    accessor docSelection: boolean;
    accessor input: HTMLInputElement;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): unknown;
    connectedCallback(): void;
    checkSelection(): void;
    addSelectionBackground: () => Promise<void>;
    renderMessage: (message: ChatMessage) => import("lit").TemplateResult<1> | null;
    toolbar(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'copilot-chat-panel': CopilotChatPanel;
    }
}
export {};
//# sourceMappingURL=chat.d.ts.map