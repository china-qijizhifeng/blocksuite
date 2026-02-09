import './chat-panel-input.js';
import './chat-panel-messages.js';
import type { EditorHost } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { Doc } from '@blocksuite/store';
import { type PropertyValues } from 'lit';
import type { ChatContextValue } from './chat-context.js';
declare const ChatPanel_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ChatPanel extends ChatPanel_base {
    static styles: import("lit").CSSResult;
    private _chatMessages;
    private _chatSessionId;
    private _resettingCounter;
    private _resetItems;
    accessor host: EditorHost;
    accessor doc: Doc;
    accessor isLoading: boolean;
    accessor chatContextValue: ChatContextValue;
    private _cleanupHistories;
    protected updated(_changedProperties: PropertyValues): void;
    connectedCallback(): void;
    updateContext: (context: Partial<ChatContextValue>) => void;
    continueInChat: () => Promise<void>;
    scrollToDown(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'chat-panel': ChatPanel;
    }
}
export {};
//# sourceMappingURL=index.d.ts.map