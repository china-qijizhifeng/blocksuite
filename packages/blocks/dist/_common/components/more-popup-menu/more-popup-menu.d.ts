import { LitElement, type TemplateResult } from 'lit';
declare const MorePopupMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class MorePopupMenu extends MorePopupMenu_base {
    static styles: import("lit").CSSResult;
    accessor items: TemplateResult[];
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'more-popup-menu': MorePopupMenu;
    }
}
export {};
//# sourceMappingURL=more-popup-menu.d.ts.map