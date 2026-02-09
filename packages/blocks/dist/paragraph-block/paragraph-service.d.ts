import { BlockService } from '@blocksuite/block-std';
import { InlineManager } from '../_common/inline/inline-manager.js';
import { type AffineTextAttributes } from '../_common/inline/presets/affine-inline-specs.js';
import { ReferenceNodeConfig } from '../_common/inline/presets/nodes/reference-node/reference-config.js';
import type { ParagraphBlockModel } from './paragraph-model.js';
export declare class ParagraphBlockService<TextAttributes extends AffineTextAttributes = AffineTextAttributes> extends BlockService<ParagraphBlockModel> {
    readonly inlineManager: InlineManager<TextAttributes>;
    readonly referenceNodeConfig: ReferenceNodeConfig;
    mounted(): void;
    placeholderGenerator: (model: ParagraphBlockModel) => string;
}
//# sourceMappingURL=paragraph-service.d.ts.map