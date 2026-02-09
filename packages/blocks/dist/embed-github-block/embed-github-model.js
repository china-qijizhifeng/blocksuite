import { BlockModel } from '@blocksuite/store';
import { defineEmbedModel } from '../_common/embed-block-helper/embed-block-model.js';
export const githubUrlRegex = /^(?:https?:\/\/)?(?:www\.)?github\.com\/([^/]+)\/([^/]+)\/(issue|pull)s?\/(\d+)$/;
export const EmbedGithubStyles = [
    'vertical',
    'horizontal',
    'list',
    'cube',
];
export class EmbedGithubModel extends defineEmbedModel(BlockModel) {
}
//# sourceMappingURL=embed-github-model.js.map