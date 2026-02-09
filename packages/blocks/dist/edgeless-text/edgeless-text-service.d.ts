import { BlockService } from '@blocksuite/block-std';
import type { EdgelessRootBlockComponent } from '../root-block/index.js';
import type { EdgelessTextBlockModel } from './edgeless-text-model.js';
export declare class EdgelessTextBlockService extends BlockService<EdgelessTextBlockModel> {
    initEdgelessTextBlock({ edgeless, x, y, }: {
        edgeless: EdgelessRootBlockComponent;
        x: number;
        y: number;
    }): string;
}
declare global {
    namespace BlockSuite {
        interface BlockServices {
            'affine:edgeless-text': EdgelessTextBlockService;
        }
    }
}
//# sourceMappingURL=edgeless-text-service.d.ts.map