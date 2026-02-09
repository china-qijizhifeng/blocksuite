import { BlockService } from '@blocksuite/block-std';
import { InlineManager } from '../_common/inline/inline-manager.js';
import { type AffineTextAttributes } from '../_common/inline/presets/affine-inline-specs.js';
import { ReferenceNodeConfig } from '../_common/inline/presets/nodes/reference-node/reference-config.js';
import type { DataViewBlockModel } from './data-view-model.js';
export declare class DataViewBlockService<TextAttributes extends AffineTextAttributes = AffineTextAttributes> extends BlockService<DataViewBlockModel> {
    readonly inlineManager: InlineManager<TextAttributes>;
    readonly referenceNodeConfig: ReferenceNodeConfig;
    mounted(): void;
}
//# sourceMappingURL=database-service.d.ts.map