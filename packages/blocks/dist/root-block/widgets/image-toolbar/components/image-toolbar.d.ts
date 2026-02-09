import { LitElement } from 'lit';
import type { ImageBlockComponent } from '../../../../image-block/image-block.js';
import type { ImageConfigItem, MoreMenuConfigItem } from '../type.js';
export declare class AffineImageToolbar extends LitElement {
    get _items(): (import("lit").TemplateResult | null)[];
    static styles: import("lit").CSSResult;
    private accessor _moreButton;
    private accessor _moreMenuOpen;
    private _popMenuAbortController;
    private _currentOpenMenu;
    accessor blockElement: ImageBlockComponent;
    accessor abortController: AbortController;
    accessor config: ImageConfigItem[];
    accessor moreMenuConfig: MoreMenuConfigItem[];
    accessor onActiveStatusChange: (active: boolean) => void;
    private _clearPopMenu;
    private _toggleMoreMenu;
    closeCurrentMenu: () => void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-image-toolbar': AffineImageToolbar;
    }
}
//# sourceMappingURL=image-toolbar.d.ts.map