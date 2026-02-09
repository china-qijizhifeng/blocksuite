import { EmbedBlockElement } from '../_common/embed-block-helper/embed-block-element.js';
import type { EmbedLoomStyles } from './embed-loom-model.js';
import { type EmbedLoomModel } from './embed-loom-model.js';
import type { EmbedLoomBlockService } from './embed-loom-service.js';
export declare class EmbedLoomBlockComponent extends EmbedBlockElement<EmbedLoomModel, EmbedLoomBlockService> {
    static styles: import("lit").CSSResult;
    private accessor _isSelected;
    private accessor _showOverlay;
    private _isDragging;
    private _isResizing;
    _cardStyle: (typeof EmbedLoomStyles)[number];
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
        'affine-embed-loom-block': EmbedLoomBlockComponent;
    }
}
//# sourceMappingURL=embed-loom-block.d.ts.map