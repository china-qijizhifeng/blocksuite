import { LitElement } from 'lit';
import type { CodeBlockComponent } from '../../../../code-block/code-block.js';
import type { CodeToolbarItem, CodeToolbarMoreItem } from '../types.js';
declare const AffineCodeToolbar_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AffineCodeToolbar extends AffineCodeToolbar_base {
    static styles: import("lit").CSSResult;
    private accessor _moreMenuOpen;
    private accessor _moreButton;
    private _popMenuAbortController;
    private _currentOpenMenu;
    accessor blockElement: CodeBlockComponent;
    accessor items: CodeToolbarItem[];
    accessor moreItems: CodeToolbarMoreItem[];
    accessor onActiveStatusChange: (active: boolean) => void;
    private _toggleMoreMenu;
    closeCurrentMenu: () => void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-code-toolbar': AffineCodeToolbar;
    }
}
export {};
//# sourceMappingURL=code-toolbar.d.ts.map