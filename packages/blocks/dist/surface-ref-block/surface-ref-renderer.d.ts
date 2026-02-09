import type { BlockStdScope } from '@blocksuite/block-std';
import { DisposableGroup, Slot } from '@blocksuite/global/utils';
import type { Doc } from '@blocksuite/store';
import { Renderer } from '../surface-block/index.js';
import type { SurfaceBlockModel } from '../surface-block/surface-model.js';
export declare class SurfaceRefRenderer {
    readonly id: string;
    readonly doc: Doc;
    readonly std: BlockStdScope;
    get surfaceService(): import("@blocksuite/blocks").SurfaceBlockService;
    get surfaceRenderer(): Renderer;
    get surfaceModel(): SurfaceBlockModel | null;
    private readonly _surfaceRenderer;
    private _surfaceModel;
    protected _disposables: DisposableGroup;
    slots: {
        surfaceRendererInit: Slot<void>;
        surfaceRendererRefresh: Slot<void>;
        surfaceModelChanged: Slot<SurfaceBlockModel>;
        mounted: Slot<void>;
        unmounted: Slot<void>;
    };
    constructor(id: string, doc: Doc, std: BlockStdScope, options?: {
        enableStackingCanvas?: boolean;
    });
    private _initSurfaceRenderer;
    private _initSurfaceModel;
    mount(): void;
    unmount(): void;
    getModel(id: string): BlockSuite.EdgelessModelType | null;
}
//# sourceMappingURL=surface-ref-renderer.d.ts.map