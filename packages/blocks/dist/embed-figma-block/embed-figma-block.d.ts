import { EmbedBlockElement } from '../_common/embed-block-helper/embed-block-element.js';
import type { EmbedFigmaStyles } from './embed-figma-model.js';
import type { EmbedFigmaModel } from './embed-figma-model.js';
import type { EmbedFigmaBlockService } from './embed-figma-service.js';
export declare class EmbedFigmaBlockComponent extends EmbedBlockElement<EmbedFigmaModel, EmbedFigmaBlockService> {
    static styles: import("lit").CSSResult;
    private accessor _isSelected;
    private accessor _showOverlay;
    private _isDragging;
    private _isResizing;
    _cardStyle: (typeof EmbedFigmaStyles)[number];
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
        'affine-embed-figma-block': EmbedFigmaBlockComponent;
    }
}
//# sourceMappingURL=embed-figma-block.d.ts.map