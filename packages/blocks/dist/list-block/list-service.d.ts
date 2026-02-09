import { BlockService } from '@blocksuite/block-std';
import { InlineManager } from '../_common/inline/inline-manager.js';
import { type AffineTextAttributes } from '../_common/inline/presets/affine-inline-specs.js';
import { ReferenceNodeConfig } from '../_common/inline/presets/nodes/reference-node/reference-config.js';
import type { ListBlockModel } from './list-model.js';
import { ListIcon } from './utils/get-list-icon.js';
export declare class ListBlockService<TextAttributes extends AffineTextAttributes = AffineTextAttributes> extends BlockService<ListBlockModel> {
    readonly inlineManager: InlineManager<TextAttributes>;
    readonly referenceNodeConfig: ReferenceNodeConfig;
    readonly styles: {
        icon: typeof ListIcon;
        prefix: import("lit").CSSResult;
        toggle: import("lit").CSSResult;
    };
    mounted(): void;
}
//# sourceMappingURL=list-service.d.ts.map