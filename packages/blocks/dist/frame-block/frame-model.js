import { BlockModel, defineBlockSchema } from '@blocksuite/store';
import { selectable } from '../_common/edgeless/mixin/edgeless-selectable.js';
import { Bound } from '../surface-block/utils/bound.js';
export const FrameBlockSchema = defineBlockSchema({
    flavour: 'affine:frame',
    props: (internal) => ({
        title: internal.Text(),
        background: '--affine-palette-transparent',
        xywh: `[0,0,100,100]`,
        index: 'a0',
    }),
    metadata: {
        version: 1,
        role: 'content',
        parent: ['affine:surface'],
        children: [],
    },
    toModel: () => {
        return new FrameBlockModel();
    },
});
export class FrameBlockModel extends selectable(BlockModel) {
    static { this.PADDING = [8, 10]; }
    hitTest(x, y, _) {
        const bound = Bound.deserialize(this.xywh);
        const hit = bound.isPointNearBound([x, y], 5);
        if (hit)
            return true;
        return this.externalBound?.isPointInBound([x, y]) ?? false;
    }
    boxSelect(selectedBound) {
        const bound = Bound.deserialize(this.xywh);
        return (bound.isIntersectWithBound(selectedBound) || selectedBound.contains(bound));
    }
}
//# sourceMappingURL=frame-model.js.map