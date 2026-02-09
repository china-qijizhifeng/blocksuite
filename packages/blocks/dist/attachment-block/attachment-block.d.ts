import { BlockComponent } from '../_common/components/index.js';
import { type AttachmentBlockModel } from './attachment-model.js';
import type { AttachmentBlockService } from './attachment-service.js';
export declare class AttachmentBlockComponent extends BlockComponent<AttachmentBlockModel, AttachmentBlockService> {
    get isInSurface(): boolean;
    get edgeless(): import("@blocksuite/blocks").EdgelessRootBlockComponent | null;
    private get _embedView();
    static styles: import("lit").CSSResult;
    private accessor _showOverlay;
    private _isSelected;
    private _isDragging;
    private _isResizing;
    private readonly _themeObserver;
    private _isInSurface;
    private _whenHover;
    accessor useCaptionEditor: boolean;
    accessor loading: boolean;
    accessor error: boolean;
    accessor downloading: boolean;
    accessor blobUrl: string | undefined;
    accessor allowEmbed: boolean;
    private _selectBlock;
    private _handleClick;
    private _handleDoubleClick;
    open: () => void;
    download: () => void;
    refreshData: () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    renderBlock(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-attachment': AttachmentBlockComponent;
    }
}
//# sourceMappingURL=attachment-block.d.ts.map