import './action-wrapper.js';
import type { EditorHost } from '@blocksuite/block-std';
import { ShadowlessElement } from '@blocksuite/block-std';
import type { ChatAction } from '../chat-context.js';
declare const ActionMindmap_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ActionMindmap extends ActionMindmap_base {
    accessor item: ChatAction;
    accessor host: EditorHost;
    protected render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'action-mindmap': ActionMindmap;
    }
}
export {};
//# sourceMappingURL=mindmap.d.ts.map