import { BlockModel, defineBlockSchema } from '@blocksuite/store';
import { selectable } from '../_common/edgeless/mixin/edgeless-selectable.js';
import { ImageBlockTransformer } from './image-transformer.js';
const defaultImageProps = {
    caption: '',
    sourceId: '',
    width: 0,
    height: 0,
    index: 'a0',
    xywh: '[0,0,0,0]',
    rotate: 0,
    size: -1,
};
export const ImageBlockSchema = defineBlockSchema({
    flavour: 'affine:image',
    props: () => defaultImageProps,
    metadata: {
        version: 1,
        role: 'content',
    },
    transformer: () => new ImageBlockTransformer(),
    toModel: () => new ImageBlockModel(),
});
export class ImageBlockModel extends selectable(BlockModel) {
}
//# sourceMappingURL=image-model.js.map