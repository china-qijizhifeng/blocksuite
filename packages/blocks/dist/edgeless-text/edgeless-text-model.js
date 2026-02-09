import { BlockModel, defineBlockSchema } from '@blocksuite/store';
import { selectable } from '../_common/edgeless/mixin/edgeless-selectable.js';
import { FontFamily, FontStyle, FontWeight, TextAlign, } from '../surface-block/consts.js';
export const EdgelessTextBlockSchema = defineBlockSchema({
    flavour: 'affine:edgeless-text',
    props: () => ({
        xywh: '[0,0,16,16]',
        index: 'a0',
        color: '#000000',
        fontFamily: FontFamily.Inter,
        fontStyle: FontStyle.Normal,
        fontWeight: FontWeight.Regular,
        textAlign: TextAlign.Left,
        scale: 1,
        rotate: 0,
        hasMaxWidth: false,
    }),
    metadata: {
        version: 1,
        role: 'hub',
        parent: ['affine:surface'],
        children: [
            'affine:paragraph',
            'affine:list',
            'affine:code',
            'affine:image',
            'affine:bookmark',
            'affine:attachment',
            'affine:embed-!(synced-doc)',
        ],
    },
    toModel: () => {
        return new EdgelessTextBlockModel();
    },
});
export class EdgelessTextBlockModel extends selectable(BlockModel) {
}
//# sourceMappingURL=edgeless-text-model.js.map