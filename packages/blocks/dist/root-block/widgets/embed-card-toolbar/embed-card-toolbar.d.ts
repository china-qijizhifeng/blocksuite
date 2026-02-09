import { WidgetElement } from '@blocksuite/block-std';
import { nothing, type PropertyValues } from 'lit';
import { type EmbedToolbarBlockElement, type EmbedToolbarModel } from '../../../_common/components/embed-card/type.js';
export declare const AFFINE_EMBED_CARD_TOOLBAR_WIDGET = "affine-embed-card-toolbar";
export declare class EmbedCardToolbar extends WidgetElement<EmbedToolbarModel, EmbedToolbarBlockElement> {
    private get _selection();
    private get _rootService();
    private get _canShowUrlOptions();
    private get _isCardView();
    private get _isEmbedView();
    private get _canConvertToEmbedView();
    private get _embedViewButtonDisabled();
    get _openButtonDisabled(): boolean;
    private get _pageIcon();
    private get _docTitle();
    static styles: import("lit").CSSResult;
    private _abortController;
    private _cardStyleMenuAbortController;
    private _moreMenuAbortController;
    private _embedOptions;
    accessor embedCardToolbarElement: HTMLElement;
    accessor cardStyleButton: HTMLElement | null;
    accessor moreButton: HTMLElement | null;
    accessor hide: boolean;
    private _resetAbortController;
    private _show;
    private _hide;
    private _canShowCardStylePanel;
    private _copyUrl;
    private _turnIntoInlineView;
    private _convertToCardView;
    private _convertToEmbedView;
    private _showCaption;
    private _createMenu;
    private _toggleCardStyleMenu;
    private _toggleMoreMenu;
    connectedCallback(): void;
    willUpdate(changedProperties: PropertyValues<typeof this>): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_EMBED_CARD_TOOLBAR_WIDGET]: EmbedCardToolbar;
    }
}
//# sourceMappingURL=embed-card-toolbar.d.ts.map