import { BlockModel } from '@blocksuite/store';
import { defineEmbedModel } from '../_common/embed-block-helper/embed-block-model.js';
export const loomUrlRegex = /(?:https?:\/\/)??(?:www\.)?loom\.com\/share\/([a-zA-Z0-9]+)/;
export const EmbedLoomStyles = ['video'];
export class EmbedLoomModel extends defineEmbedModel(BlockModel) {
}
//# sourceMappingURL=embed-loom-model.js.map