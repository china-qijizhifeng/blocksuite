import { BlockService } from '@blocksuite/block-std';
import { LinkPreviewer } from '../_common/embed-block-helper/index.js';
import { EmbedYoutubeStyles, youtubeUrlRegex, } from './embed-youtube-model.js';
import { queryEmbedYoutubeData } from './utils.js';
export class EmbedYoutubeBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this.queryUrlData = (embedYoutubeModel, signal) => {
            return queryEmbedYoutubeData(embedYoutubeModel, EmbedYoutubeBlockService.linkPreviewer, signal);
        };
    }
    static { this.linkPreviewer = new LinkPreviewer(); }
    static { this.setLinkPreviewEndpoint = EmbedYoutubeBlockService.linkPreviewer.setEndpoint; }
    mounted() {
        super.mounted();
        this.std.spec.slots.afterApply.once(() => {
            const rootService = this.std.spec.getService('affine:page');
            rootService.registerEmbedBlockOptions({
                flavour: this.flavour,
                urlRegex: youtubeUrlRegex,
                styles: EmbedYoutubeStyles,
                viewType: 'embed',
            });
        });
    }
}
//# sourceMappingURL=embed-youtube-service.js.map