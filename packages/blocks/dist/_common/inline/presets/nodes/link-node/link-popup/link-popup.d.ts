import '../../../../../components/button.js';
import '../../../../../components/tooltip/tooltip.js';
import type { BlockElement } from '@blocksuite/block-std';
import type { InlineRange } from '@blocksuite/inline/types';
import { LitElement } from 'lit';
import type { IconButton } from '../../../../../components/button.js';
import type { AffineInlineEditor } from '../../../affine-inline-specs.js';
declare const LinkPopup_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class LinkPopup extends LinkPopup_base {
    private get _rootService();
    get host(): import("@blocksuite/block-std").EditorHost;
    get std(): import("@blocksuite/block-std").BlockStdScope;
    get blockElement(): BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string>;
    get currentText(): string;
    get currentLink(): string;
    private get _isBookmarkAllowed();
    private get _canConvertToEmbedView();
    static styles: import("lit").CSSResult;
    private _bodyOverflowStyle;
    private _moreMenuAbortController;
    private _embedOptions;
    accessor type: 'create' | 'edit' | 'view';
    accessor inlineEditor: AffineInlineEditor;
    accessor targetInlineRange: InlineRange;
    accessor abortController: AbortController;
    accessor textInput: HTMLInputElement | null;
    accessor linkInput: HTMLInputElement | null;
    accessor popupContainer: HTMLDivElement;
    accessor mockSelectionContainer: HTMLDivElement;
    accessor confirmButton: IconButton | null;
    private _onConfirm;
    private _copyUrl;
    private _convertToCardView;
    private _convertToEmbedView;
    private _removeLink;
    private _onKeydown;
    private _updateConfirmBtn;
    private _confirmBtnTemplate;
    private _createTemplate;
    private _toggleMoreMenu;
    private _viewTemplate;
    private _editTemplate;
    protected firstUpdated(): void;
    connectedCallback(): void;
    updated(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'link-popup': LinkPopup;
    }
}
export {};
//# sourceMappingURL=link-popup.d.ts.map