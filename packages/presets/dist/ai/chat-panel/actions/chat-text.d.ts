import './action-wrapper.js';
import type { EditorHost } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
declare const ChatText_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ChatText extends ChatText_base {
    accessor host: EditorHost;
    accessor attachments: string[] | undefined;
    accessor text: string;
    accessor state: 'finished' | 'generating';
    protected render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'chat-text': ChatText;
    }
}
export {};
//# sourceMappingURL=chat-text.d.ts.map