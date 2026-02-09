import { LitElement } from 'lit';
import { type EdgelessToolbarSlots } from '../context.js';
declare const EdgelessSlideMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessSlideMenu extends EdgelessSlideMenu_base {
    static styles: import("lit").CSSResult;
    private accessor _menuContainer;
    private accessor _slideMenuContent;
    accessor toolbarSlots: EdgelessToolbarSlots;
    accessor showPrevious: boolean;
    accessor showNext: boolean;
    accessor height: string;
    private _toggleSlideButton;
    private _handleWheel;
    private _handleSlideButtonClick;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-slide-menu': EdgelessSlideMenu;
    }
}
export {};
//# sourceMappingURL=slide-menu.d.ts.map