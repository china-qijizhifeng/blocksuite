import './components/image-card.js';
import './components/page-image-block.js';
import './components/edgeless-image-block.js';
import { BlockComponent } from '../_common/components/block-component.js';
import type { AffineImageCard } from './components/image-card.js';
import type { ImageBlockModel } from './image-model.js';
import type { ImageBlockService } from './image-service.js';
export declare class ImageBlockComponent extends BlockComponent<ImageBlockModel, ImageBlockService> {
    get isInSurface(): boolean;
    get edgeless(): import("@blocksuite/blocks").EdgelessRootBlockComponent | null;
    private get _imageElement();
    get resizeImg(): HTMLElement | null | undefined;
    get imageCard(): AffineImageCard | null;
    private accessor _imageCard;
    private accessor _pageImage;
    private accessor _edgelessImage;
    private _isInSurface;
    accessor useCaptionEditor: boolean;
    accessor loading: boolean;
    accessor error: boolean;
    accessor downloading: boolean;
    accessor retryCount: number;
    accessor blob: Blob | undefined;
    accessor blobUrl: string | undefined;
    accessor lastSourceId: string;
    private _selectBlock;
    private _handleClick;
    copy: () => void;
    download: () => void;
    refreshData: () => void;
    resetImageSize: () => void;
    convertToCardView: () => void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(): void;
    renderBlock(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-image': ImageBlockComponent;
    }
}
//# sourceMappingURL=image-block.d.ts.map