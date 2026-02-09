import type { EditorHost } from '@blocksuite/block-std';
import { LitElement, nothing } from 'lit';
import type { AIItemConfig } from './types.js';
declare const AISubItemList_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AISubItemList extends AISubItemList_base {
    static styles: import("lit").CSSResult;
    accessor host: EditorHost;
    accessor item: AIItemConfig;
    accessor abortController: AbortController;
    accessor onClick: (() => void) | undefined;
    private _handleClick;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-sub-item-list': AISubItemList;
    }
}
export {};
//# sourceMappingURL=ai-sub-item-list.d.ts.map