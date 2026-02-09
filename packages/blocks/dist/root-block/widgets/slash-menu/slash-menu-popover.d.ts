import { LitElement, nothing, type PropertyValues } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';
import type { SlashMenuActionItem, SlashMenuContext, SlashMenuStaticConfig, SlashMenuStaticItem } from './config.js';
type InnerSlashMenuContext = SlashMenuContext & {
    tooltipTimeout: number;
    onClickItem: (item: SlashMenuActionItem) => void;
};
declare const SlashMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class SlashMenu extends SlashMenu_base {
    get host(): import("@blocksuite/block-std").EditorHost;
    static styles: import("lit").CSSResult;
    private accessor _filteredItems;
    private accessor _position;
    private _innerSlashMenuContext;
    private _itemPathMap;
    private _query;
    private _queryState;
    accessor context: SlashMenuContext;
    accessor config: SlashMenuStaticConfig;
    accessor triggerKey: string;
    accessor slashMenuElement: HTMLElement;
    abortController: AbortController;
    private _initItemPathMap;
    private _updateFilteredItems;
    private _handleClickItem;
    connectedCallback(): void;
    updatePosition: (position: {
        x: string;
        y: string;
        height: number;
    }) => void;
    render(): import("lit").TemplateResult<1>;
}
declare const InnerSlashMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class InnerSlashMenu extends InnerSlashMenu_base {
    static styles: import("lit").CSSResult;
    private accessor _activeItem;
    private _currentSubMenu;
    private _subMenuAbortController;
    accessor context: InnerSlashMenuContext;
    accessor menu: SlashMenuStaticItem[];
    accessor depth: number;
    accessor abortController: AbortController;
    accessor mainMenuStyle: Parameters<typeof styleMap>[0] | null;
    private _scrollToItem;
    private _openSubMenu;
    private _closeSubMenu;
    private _renderGroupItem;
    private _renderActionItem;
    private _renderSubMenuItem;
    private _renderItem;
    connectedCallback(): void;
    disconnectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
export {};
//# sourceMappingURL=slash-menu-popover.d.ts.map