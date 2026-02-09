import './ai-sub-item-list.js';
import type { EditorHost } from '@blocksuite/block-std';
import { LitElement } from 'lit';
import type { AIItemConfig } from './types.js';
declare const AIItem_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AIItem extends AIItem_base {
    static styles: import("lit").CSSResult;
    accessor item: AIItemConfig;
    accessor host: EditorHost;
    accessor onClick: (() => void) | undefined;
    accessor menuItem: HTMLDivElement;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'ai-item': AIItem;
    }
}
export {};
//# sourceMappingURL=ai-item.d.ts.map