import '../../edgeless/components/buttons/tool-icon-button.js';
import '../../edgeless/components/buttons/menu-button.js';
import '../../edgeless/components/panel/card-style-panel.js';
import { LitElement, nothing, type TemplateResult } from 'lit';
import type { BookmarkBlockModel } from '../../../bookmark-block/index.js';
import type { EmbedFigmaModel } from '../../../embed-figma-block/index.js';
import type { EmbedGithubModel } from '../../../embed-github-block/index.js';
import type { EmbedHtmlModel } from '../../../embed-html-block/index.js';
import type { EmbedLinkedDocModel } from '../../../embed-linked-doc-block/index.js';
import type { EmbedLoomModel } from '../../../embed-loom-block/index.js';
import type { EmbedSyncedDocModel } from '../../../embed-synced-doc-block/index.js';
import type { EmbedYoutubeModel } from '../../../embed-youtube-block/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessChangeEmbedCardButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessChangeEmbedCardButton extends EdgelessChangeEmbedCardButton_base {
    private get _doc();
    private get std();
    private get _rootService();
    private get _blockElement();
    private get _canShowUrlOptions();
    private get _canShowFullScreenButton();
    private get _isCardView();
    private get _isEmbedView();
    private get _canConvertToEmbedView();
    private get _canShowCardStylePanel();
    private get _getCardStyleOptions();
    private get _pageIcon();
    private get _docTitle();
    private get _embedViewButtonDisabled();
    get _openButtonDisabled(): boolean;
    static styles: import("lit").CSSResult;
    private accessor _embedScale;
    private _embedOptions;
    accessor model: BookmarkBlockModel | EmbedGithubModel | EmbedYoutubeModel | EmbedFigmaModel | EmbedLinkedDocModel | EmbedSyncedDocModel | EmbedHtmlModel | EmbedLoomModel;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor quickConnectButton: TemplateResult<1>;
    private _open;
    private _peek;
    private _showCaption;
    private _copyUrl;
    private _setCardStyle;
    private _convertToCardView;
    private _convertToEmbedView;
    private _getScale;
    private _setEmbedScale;
    connectedCallback(): void;
    render(): Iterable<symbol | TemplateResult<1>>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-embed-card-button': EdgelessChangeEmbedCardButton;
    }
}
export declare function renderEmbedButton(edgeless: EdgelessRootBlockComponent, models?: EdgelessChangeEmbedCardButton['model'][], quickConnectButton?: TemplateResult<1>[]): TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-embed-card-button.d.ts.map