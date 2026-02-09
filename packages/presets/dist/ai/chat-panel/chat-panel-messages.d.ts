import '../messages/slides-renderer.js';
import './ai-loading.js';
import '../messages/text.js';
import './actions/text.js';
import './actions/action-wrapper.js';
import './actions/make-real.js';
import './actions/slides.js';
import './actions/mindmap.js';
import './actions/chat-text.js';
import './actions/copy-more.js';
import './actions/image-to-text.js';
import './actions/image.js';
import './chat-cards.js';
import type { EditorHost } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import { nothing, type PropertyValues } from 'lit';
import type { ChatContextValue, ChatItem, ChatMessage } from './chat-context.js';
declare const ChatPanelMessages_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ChatPanelMessages extends ChatPanelMessages_base {
    private get _currentTextSelection();
    private get _currentBlockSelections();
    private get _currentImageSelections();
    static styles: import("lit").CSSResult;
    private _selectionValue;
    accessor showDownIndicator: boolean;
    accessor avatarUrl: string;
    accessor host: EditorHost;
    accessor isLoading: boolean;
    accessor chatContextValue: ChatContextValue;
    accessor updateContext: (context: Partial<ChatContextValue>) => void;
    accessor messagesContainer: HTMLDivElement;
    protected updated(_changedProperties: PropertyValues): void;
    protected render(): import("lit").TemplateResult<1>;
    connectedCallback(): Promise<void>;
    renderError(): import("lit").TemplateResult<1>;
    renderItem(item: ChatItem, isLast: boolean): import("lit").TemplateResult<1>;
    renderAvatar(item: ChatItem): import("lit").TemplateResult<1>;
    renderLoading(): import("lit").TemplateResult<1>;
    scrollToDown(): void;
    renderEditorActions(item: ChatMessage, isLast: boolean): typeof nothing | import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'chat-panel-messages': ChatPanelMessages;
    }
}
export {};
//# sourceMappingURL=chat-panel-messages.d.ts.map