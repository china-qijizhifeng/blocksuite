import { ShadowlessElement } from '@blocksuite/block-std';
import type { BookmarkBlockComponent } from '../bookmark-block.js';
declare const BookmarkCard_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class BookmarkCard extends BookmarkCard_base {
    static styles: import("lit").CSSResult;
    private accessor _isSelected;
    private readonly _themeObserver;
    accessor bookmark: BookmarkBlockComponent;
    accessor loading: boolean;
    accessor error: boolean;
    private _selectBlock;
    private _handleClick;
    private _handleDoubleClick;
    private _getHostName;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bookmark-card': BookmarkCard;
    }
}
export {};
//# sourceMappingURL=bookmark-card.d.ts.map