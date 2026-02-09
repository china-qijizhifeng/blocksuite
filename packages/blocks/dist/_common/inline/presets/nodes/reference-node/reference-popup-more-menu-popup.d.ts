import type { BlockElement } from '@blocksuite/block-std';
import type { InlineRange } from '@blocksuite/inline/types';
import { LitElement } from 'lit';
import type { AffineInlineEditor } from '../../affine-inline-specs.js';
declare const ReferencePopupMoreMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ReferencePopupMoreMenu extends ReferencePopupMoreMenu_base {
    static styles: import("lit").CSSResult;
    accessor target: LitElement;
    accessor inlineEditor: AffineInlineEditor;
    accessor targetInlineRange: InlineRange;
    accessor abortController: AbortController;
    get referenceDocId(): string;
    get blockElement(): BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string>;
    get std(): import("@blocksuite/block-std").BlockStdScope;
    get _openButtonDisabled(): boolean;
    private _openDoc;
    private _delete;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'reference-popup-more-menu': ReferencePopupMoreMenu;
    }
}
export {};
//# sourceMappingURL=reference-popup-more-menu-popup.d.ts.map