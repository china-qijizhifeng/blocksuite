import type { EditorHost } from '@blocksuite/block-std';
import { LitElement } from 'lit';
import type { ChatContextValue } from './chat-context.js';
declare const ChatPanelInput_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ChatPanelInput extends ChatPanelInput_base {
    static styles: import("lit").CSSResult;
    accessor host: EditorHost;
    accessor imagesWrapper: HTMLDivElement;
    accessor textarea: HTMLTextAreaElement;
    accessor closeWrapper: HTMLDivElement;
    accessor curIndex: number;
    accessor isInputEmpty: boolean;
    accessor focused: boolean;
    accessor chatContextValue: ChatContextValue;
    accessor updateContext: (context: Partial<ChatContextValue>) => void;
    accessor cleanupHistories: () => Promise<void>;
    private _addImages;
    private _renderImages;
    protected render(): import("lit").TemplateResult<1>;
    send: () => Promise<void>;
}
declare global {
    interface HTMLElementTagNameMap {
        'chat-panel-input': ChatPanelInput;
    }
}
export {};
//# sourceMappingURL=chat-panel-input.d.ts.map