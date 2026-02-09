import '../../../../surface-ref-block/surface-ref-portal.js';
import { type EditorHost, ShadowlessElement } from '@blocksuite/block-std';
import { type Doc } from '@blocksuite/store';
import { type PropertyValues } from 'lit';
import type { FrameBlockModel } from '../../../../frame-block/frame-model.js';
import type { SurfaceRefPortal } from '../../../../surface-ref-block/surface-ref-portal.js';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
declare const FramePreview_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class FramePreview extends FramePreview_base {
    get surfaceRenderer(): import("../../../../surface-block/index.js").Renderer;
    private get _surfaceService();
    private get _surfaceRefService();
    static styles: import("lit").CSSResult;
    private accessor _surfaceModel;
    private _surfaceRefRendererId;
    private _surfaceRefRenderer;
    private _edgelessDisposables;
    private _docDisposables;
    private _frameDisposables;
    private _debounceHandleElementUpdated;
    accessor edgeless: EdgelessRootBlockComponent | null;
    accessor frame: FrameBlockModel;
    accessor doc: Doc;
    accessor host: EditorHost;
    accessor surfaceWidth: number;
    accessor surfaceHeight: number;
    accessor fillScreen: boolean;
    accessor container: HTMLDivElement;
    accessor blocksPortal: SurfaceRefPortal;
    private _attachRenderer;
    private _setupSurfaceRefRenderer;
    private _cleanupSurfaceRefRenderer;
    private _refreshViewport;
    private _tryLoadFillScreen;
    private _getViewportWH;
    private _overlapWithFrame;
    private _clearEdgelessDisposables;
    private _clearDocDisposables;
    private _clearFrameDisposables;
    private _setEdgelessDisposables;
    private _setDocDisposables;
    private _setFrameDisposables;
    private _getSelector;
    private _renderModel;
    private _renderSurfaceContent;
    connectedCallback(): void;
    firstUpdated(): void;
    updated(_changedProperties: PropertyValues): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'frame-preview': FramePreview;
    }
}
export {};
//# sourceMappingURL=frame-preview.d.ts.map