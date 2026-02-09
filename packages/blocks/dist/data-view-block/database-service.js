import { BlockService } from '@blocksuite/block-std';
import { InlineManager } from '../_common/inline/inline-manager.js';
import { getAffineInlineSpecsWithReference, } from '../_common/inline/presets/affine-inline-specs.js';
import { affineInlineMarkdownMatches } from '../_common/inline/presets/markdown.js';
import { ReferenceNodeConfig } from '../_common/inline/presets/nodes/reference-node/reference-config.js';
import { DatabaseSelection } from '../database-block/data-view/index.js';
export class DataViewBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this.inlineManager = new InlineManager();
        this.referenceNodeConfig = new ReferenceNodeConfig();
    }
    mounted() {
        super.mounted();
        this.selectionManager.register(DatabaseSelection);
        this.referenceNodeConfig.setDoc(this.doc);
        const inlineSpecs = getAffineInlineSpecsWithReference(this.referenceNodeConfig);
        this.inlineManager.registerSpecs(inlineSpecs);
        this.inlineManager.registerMarkdownMatches(affineInlineMarkdownMatches);
    }
}
//# sourceMappingURL=database-service.js.map