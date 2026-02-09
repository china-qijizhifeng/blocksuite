import { BlockService } from '@blocksuite/block-std';
import { LayerManager } from './managers/layer-manager.js';
import type { SurfaceBlockModel } from './surface-model.js';
export declare class SurfaceBlockService extends BlockService<SurfaceBlockModel> {
    layer: LayerManager;
    surface: SurfaceBlockModel;
    mounted(): void;
    unmounted(): void;
}
//# sourceMappingURL=surface-service.d.ts.map