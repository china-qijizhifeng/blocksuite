import { BlockModel } from '@blocksuite/store';
import { defineEmbedModel } from '../_common/embed-block-helper/embed-block-model.js';
export const figmaUrlRegex = /https:\/\/[\w.-]+\.?figma.com\/([\w-]+)\/([0-9a-zA-Z]{22,128})(?:\/.*)?$/;
export const EmbedFigmaStyles = ['figma'];
export class EmbedFigmaModel extends defineEmbedModel(BlockModel) {
}
//# sourceMappingURL=embed-figma-model.js.map