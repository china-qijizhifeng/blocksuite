import { BlockService } from '@blocksuite/block-std';
import { LinkPreviewer } from '../_common/embed-block-helper/index.js';
import { EmbedGithubStyles, githubUrlRegex, } from './embed-github-model.js';
import { queryEmbedGithubApiData, queryEmbedGithubData } from './utils.js';
export class EmbedGithubBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this.queryUrlData = (embedGithubModel, signal) => {
            return queryEmbedGithubData(embedGithubModel, EmbedGithubBlockService.linkPreviewer, signal);
        };
        this.queryApiData = (embedGithubModel, signal) => {
            return queryEmbedGithubApiData(embedGithubModel, signal);
        };
    }
    static { this.linkPreviewer = new LinkPreviewer(); }
    static { this.setLinkPreviewEndpoint = EmbedGithubBlockService.linkPreviewer.setEndpoint; }
    mounted() {
        super.mounted();
        this.std.spec.slots.afterApply.once(() => {
            const rootService = this.std.spec.getService('affine:page');
            rootService.registerEmbedBlockOptions({
                flavour: this.flavour,
                urlRegex: githubUrlRegex,
                styles: EmbedGithubStyles,
                viewType: 'card',
            });
        });
    }
}
//# sourceMappingURL=embed-github-service.js.map