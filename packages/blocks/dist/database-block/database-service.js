import { BlockService } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { InlineManager } from '../_common/inline/inline-manager.js';
import { getAffineInlineSpecsWithReference, } from '../_common/inline/presets/affine-inline-specs.js';
import { affineInlineMarkdownMatches } from '../_common/inline/presets/markdown.js';
import { ReferenceNodeConfig } from '../_common/inline/presets/nodes/reference-node/reference-config.js';
import { DatabaseSelection } from './data-view/common/selection.js';
import { viewPresets } from './data-view/index.js';
import { databaseViewInitEmpty, databaseViewInitTemplate } from './utils.js';
export class DatabaseBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this.inlineManager = new InlineManager();
        this.referenceNodeConfig = new ReferenceNodeConfig();
        this.databaseViewInitEmpty = databaseViewInitEmpty;
        this.viewPresets = viewPresets;
    }
    mounted() {
        super.mounted();
        this.selectionManager.register(DatabaseSelection);
        this.referenceNodeConfig.setDoc(this.doc);
        const inlineSpecs = getAffineInlineSpecsWithReference(this.referenceNodeConfig);
        this.inlineManager.registerSpecs(inlineSpecs);
        this.inlineManager.registerMarkdownMatches(affineInlineMarkdownMatches);
    }
    initDatabaseBlock(doc, model, databaseId, viewMeta, isAppendNewRow = true) {
        const blockModel = doc.getBlockById(databaseId);
        assertExists(blockModel);
        databaseViewInitTemplate(blockModel, viewMeta);
        if (isAppendNewRow) {
            // Add a paragraph after database
            const parent = doc.getParent(model);
            assertExists(parent);
            doc.addBlock('affine:paragraph', {}, parent.id);
        }
        blockModel.applyColumnUpdate();
    }
}
//# sourceMappingURL=database-service.js.map