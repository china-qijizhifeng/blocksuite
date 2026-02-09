import { EmbedBlockElement } from '../_common/embed-block-helper/embed-block-element.js';
import type { EmbedYoutubeStyles } from './embed-youtube-model.js';
import { type EmbedYoutubeModel } from './embed-youtube-model.js';
import type { EmbedYoutubeBlockService } from './embed-youtube-service.js';
export declare class EmbedYoutubeBlockComponent extends EmbedBlockElement<EmbedYoutubeModel, EmbedYoutubeBlockService> {
    static styles: import("lit").CSSResult;
    private accessor _isSelected;
    private accessor _showOverlay;
    private accessor _showImage;
    private _isDragging;
    private _isResizing;
    _cardStyle: (typeof EmbedYoutubeStyles)[number];
    accessor loading: boolean;
    private _selectBlock;
    private _handleClick;
    private _handleDoubleClick;
    open: () => void;
    refreshData: () => void;
    connectedCallback(): void;
    renderBlock(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-embed-youtube-block': EmbedYoutubeBlockComponent;
    }
}
//# sourceMappingURL=embed-youtube-block.d.ts.map