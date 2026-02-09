import { BlockService } from '@blocksuite/block-std';
import type { Doc } from '@blocksuite/store';
import { SurfaceRefRenderer } from './surface-ref-renderer.js';
export declare class SurfaceRefBlockService extends BlockService {
    private _rendererMap;
    getRenderer(id: string, doc?: Doc, stackingCanvas?: boolean): SurfaceRefRenderer;
    removeRenderer(id: string): void;
}
//# sourceMappingURL=surface-ref-service.d.ts.map