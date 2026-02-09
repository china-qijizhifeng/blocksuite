import { BlockModel, defineBlockSchema } from '@blocksuite/store';
import { selectable } from '../_common/edgeless/mixin/edgeless-selectable.js';
import { AttachmentBlockTransformer } from './attachment-transformer.js';
export const AttachmentBlockStyles = [
    'cubeThick',
    'horizontalThin',
];
export const defaultAttachmentProps = {
    name: '',
    size: 0,
    type: 'application/octet-stream',
    sourceId: undefined,
    caption: undefined,
    embed: false,
    style: AttachmentBlockStyles[1],
    index: 'a0',
    xywh: '[0,0,0,0]',
    rotate: 0,
};
export const AttachmentBlockSchema = defineBlockSchema({
    flavour: 'affine:attachment',
    props: () => defaultAttachmentProps,
    metadata: {
        version: 1,
        role: 'content',
        parent: ['affine:note', 'affine:surface', 'affine:edgeless-text'],
    },
    transformer: () => new AttachmentBlockTransformer(),
    toModel: () => new AttachmentBlockModel(),
});
export class AttachmentBlockModel extends selectable(BlockModel) {
}
//# sourceMappingURL=attachment-model.js.map