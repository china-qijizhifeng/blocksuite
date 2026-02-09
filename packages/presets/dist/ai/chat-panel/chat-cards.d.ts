import type { BaseSelection, EditorHost } from '@blocksuite/block-std';
import { LitElement, type PropertyValues } from 'lit';
import type { ChatContextValue } from './chat-context.js';
declare const ChatCards_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ChatCards extends ChatCards_base {
    static styles: import("lit").CSSResult;
    accessor host: EditorHost;
    accessor chatContextValue: ChatContextValue;
    accessor updateContext: (context: Partial<ChatContextValue>) => void;
    accessor selectionValue: BaseSelection[];
    accessor text: string;
    accessor markdown: string;
    accessor images: File[];
    accessor caption: string;
    private _onEdgelessCopilotAreaUpdated;
    private _updateState;
    private _handleDocSelection;
    protected updated(_changedProperties: PropertyValues): Promise<void>;
    protected render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'chat-cards': ChatCards;
    }
}
export {};
//# sourceMappingURL=chat-cards.d.ts.map