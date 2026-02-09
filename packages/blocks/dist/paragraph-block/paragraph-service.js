import { BlockService } from '@blocksuite/block-std';
import { InlineManager } from '../_common/inline/inline-manager.js';
import { getAffineInlineSpecsWithReference, } from '../_common/inline/presets/affine-inline-specs.js';
import { affineInlineMarkdownMatches } from '../_common/inline/presets/markdown.js';
import { ReferenceNodeConfig } from '../_common/inline/presets/nodes/reference-node/reference-config.js';
export class ParagraphBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this.inlineManager = new InlineManager();
        this.referenceNodeConfig = new ReferenceNodeConfig();
        this.placeholderGenerator = model => {
            if (model.type === 'text') {
                return "Type '/' for commands";
            }
            const placeholders = {
                h1: 'Heading 1',
                h2: 'Heading 2',
                h3: 'Heading 3',
                h4: 'Heading 4',
                h5: 'Heading 5',
                h6: 'Heading 6',
                quote: '',
            };
            return placeholders[model.type];
        };
    }
    mounted() {
        super.mounted();
        this.referenceNodeConfig.setDoc(this.doc);
        const inlineSpecs = getAffineInlineSpecsWithReference(this.referenceNodeConfig);
        this.inlineManager.registerSpecs(inlineSpecs);
        this.inlineManager.registerMarkdownMatches(affineInlineMarkdownMatches);
    }
}
//# sourceMappingURL=paragraph-service.js.map