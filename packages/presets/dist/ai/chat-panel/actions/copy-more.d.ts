import type { BlockSelection, EditorHost, TextSelection } from '@blocksuite/block-std';
import { LitElement, type PropertyValues } from 'lit';
import type { ChatContextValue } from '../chat-context.js';
declare const ChatCopyMore_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ChatCopyMore extends ChatCopyMore_base {
    static styles: import("lit").CSSResult;
    private accessor _showMoreMenu;
    private accessor _moreButton;
    private accessor _moreMenu;
    private _morePopper;
    accessor host: EditorHost;
    accessor content: string;
    accessor isLast: boolean;
    accessor curTextSelection: TextSelection | undefined;
    accessor curBlockSelections: BlockSelection[] | undefined;
    accessor chatContextValue: ChatContextValue;
    accessor updateContext: (context: Partial<ChatContextValue>) => void;
    private _toggle;
    private _retry;
    protected updated(changed: PropertyValues): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'chat-copy-more': ChatCopyMore;
    }
}
export {};
//# sourceMappingURL=copy-more.d.ts.map