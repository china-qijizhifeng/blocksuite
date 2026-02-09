import { BlockModel } from '@blocksuite/store';
import { defineEmbedModel } from '../_common/embed-block-helper/embed-block-model.js';
export const youtubeUrlRegex = /(?:https?:\/\/)?(?:(?:www|m)\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w-_]+)/;
export const EmbedYoutubeStyles = ['video'];
export class EmbedYoutubeModel extends defineEmbedModel(BlockModel) {
}
//# sourceMappingURL=embed-youtube-model.js.map