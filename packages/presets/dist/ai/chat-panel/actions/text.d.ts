import './action-wrapper.js';
import type { EditorHost } from '@blocksuite/block-std';
import { LitElement } from 'lit';
import type { ChatAction } from '../chat-context.js';
declare const ActionText_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ActionText extends ActionText_base {
    static styles: import("lit").CSSResult;
    accessor item: ChatAction;
    accessor host: EditorHost;
    accessor isCode: boolean;
    protected render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'action-text': ActionText;
    }
}
export {};
//# sourceMappingURL=text.d.ts.map