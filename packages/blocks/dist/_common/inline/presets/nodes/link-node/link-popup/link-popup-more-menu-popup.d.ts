import type { EditorHost } from '@blocksuite/block-std';
import type { InlineRange } from '@blocksuite/inline/types';
import { LitElement } from 'lit';
import type { AffineInlineEditor } from '../../../affine-inline-specs.js';
declare const LinkPopupMoreMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class LinkPopupMoreMenu extends LinkPopupMoreMenu_base {
    static styles: import("lit").CSSResult;
    accessor inlineEditor: AffineInlineEditor;
    accessor targetInlineRange: InlineRange;
    accessor abortController: AbortController;
    accessor host: EditorHost;
    get currentLink(): string;
    private _openLink;
    private _copyUrl;
    private _removeLink;
    private _delete;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'link-popup-more-menu': LinkPopupMoreMenu;
    }
}
export {};
//# sourceMappingURL=link-popup-more-menu-popup.d.ts.map