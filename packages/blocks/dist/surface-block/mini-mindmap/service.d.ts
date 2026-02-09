import { BlockService } from '@blocksuite/block-std';
import { Slot } from '@blocksuite/store';
import type { RootBlockModel } from '../../root-block/root-model.js';
export declare class MindmapService extends BlockService<RootBlockModel> {
    requestCenter: Slot<void>;
    mounted(): void;
    center(): void;
}
//# sourceMappingURL=service.d.ts.map