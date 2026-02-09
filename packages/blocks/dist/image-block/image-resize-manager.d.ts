import type { PointerEventState } from '@blocksuite/block-std';
export declare class ImageResizeManager {
    private _activeComponent;
    private _imageContainer;
    private _imageCenterX;
    private _dragMoveTarget;
    private _zoom;
    onStart(e: PointerEventState): void;
    onMove(e: PointerEventState): void;
    onEnd(): void;
}
//# sourceMappingURL=image-resize-manager.d.ts.map