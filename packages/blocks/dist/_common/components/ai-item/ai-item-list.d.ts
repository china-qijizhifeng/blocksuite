import './ai-item.js';
import type { EditorHost } from '@blocksuite/block-std';
import { LitElement } from 'lit';
import type { AIItemGroupConfig } from './types.js';
declare const AIItemList_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AIItemList extends AIItemList_base {
    static styles: import("lit").CSSResult;
    private _abortController;
    private _activeSubMenuItem;
    accessor host: EditorHost;
    accessor groups: AIItemGroupConfig[];
    accessor onClick: (() => void) | undefined;
    private _itemClassName;
    private _closeSubMenu;
    private _openSubMenu;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-item-list': AIItemList;
    }
}
export {};
//# sourceMappingURL=ai-item-list.d.ts.map