import { BlockService } from '@blocksuite/block-std';
import { LinkPreviewer } from '../_common/embed-block-helper/index.js';
import { EmbedLoomStyles, loomUrlRegex, } from './embed-loom-model.js';
import { queryEmbedLoomData } from './utils.js';
export class EmbedLoomBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this.queryUrlData = (embedLoomModel, signal) => {
            return queryEmbedLoomData(embedLoomModel, signal);
        };
    }
    static { this.linkPreviewer = new LinkPreviewer(); }
    static { this.setLinkPreviewEndpoint = EmbedLoomBlockService.linkPreviewer.setEndpoint; }
    mounted() {
        super.mounted();
        this.std.spec.slots.afterApply.once(() => {
            const rootService = this.std.spec.getService('affine:page');
            rootService.registerEmbedBlockOptions({
                flavour: this.flavour,
                urlRegex: loomUrlRegex,
                styles: EmbedLoomStyles,
                viewType: 'embed',
            });
        });
    }
}
//# sourceMappingURL=embed-loom-service.js.map