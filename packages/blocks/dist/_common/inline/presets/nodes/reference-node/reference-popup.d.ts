import '../../../../components/tooltip/tooltip.js';
import '../../../../components/button.js';
import type { BlockElement } from '@blocksuite/block-std';
import type { InlineRange } from '@blocksuite/inline';
import { LitElement } from 'lit';
import type { AffineInlineEditor } from '../../affine-inline-specs.js';
declare const ReferencePopup_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ReferencePopup extends ReferencePopup_base {
    get referenceDocId(): string;
    get blockElement(): BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string>;
    get std(): import("@blocksuite/block-std").BlockStdScope;
    get doc(): import("@blocksuite/store").Doc;
    get _embedViewButtonDisabled(): boolean;
    get _openButtonDisabled(): boolean;
    static styles: import("lit").CSSResult;
    private _moreMenuAbortController;
    accessor target: LitElement;
    accessor inlineEditor: AffineInlineEditor;
    accessor targetInlineRange: InlineRange;
    accessor docTitle: string;
    accessor abortController: AbortController;
    accessor popupContainer: HTMLDivElement;
    private _openDoc;
    private _convertToCardView;
    private _convertToEmbedView;
    private _toggleMoreMenu;
    connectedCallback(): void;
    updated(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'reference-popup': ReferencePopup;
    }
}
export declare function toggleReferencePopup(target: LitElement, inlineEditor: AffineInlineEditor, targetInlineRange: InlineRange, docTitle: string, abortController: AbortController): ReferencePopup;
export {};
//# sourceMappingURL=reference-popup.d.ts.map