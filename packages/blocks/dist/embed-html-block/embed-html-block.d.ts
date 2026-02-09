import './components/fullscreen-toolbar.js';
import { EmbedBlockElement } from '../_common/embed-block-helper/index.js';
import type { EmbedHtmlModel, EmbedHtmlStyles } from './embed-html-model.js';
import type { EmbedHtmlBlockService } from './embed-html-service.js';
export declare class EmbedHtmlBlockComponent extends EmbedBlockElement<EmbedHtmlModel, EmbedHtmlBlockService> {
    static styles: import("lit").CSSResult;
    private accessor _isSelected;
    private accessor _showOverlay;
    private _isDragging;
    private _isResizing;
    _cardStyle: (typeof EmbedHtmlStyles)[number];
    accessor iframeWrapper: HTMLDivElement;
    private _selectBlock;
    private _handleClick;
    private _handleDoubleClick;
    open: () => void;
    close: () => void;
    refreshData: () => void;
    connectedCallback(): void;
    renderBlock(): unknown;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-embed-html-block': EmbedHtmlBlockComponent;
    }
}
//# sourceMappingURL=embed-html-block.d.ts.map