import { BlockModel, defineBlockSchema } from '@blocksuite/store';
import { NOTE_WIDTH } from '../_common/consts.js';
import { selectable } from '../_common/edgeless/mixin/edgeless-selectable.js';
import { DEFAULT_NOTE_BACKGROUND_COLOR, DEFAULT_NOTE_SHADOW, } from '../_common/edgeless/note/consts.js';
import { NoteDisplayMode } from '../_common/types.js';
import { StrokeStyle } from '../surface-block/consts.js';
import { Bound } from '../surface-block/utils/bound.js';
export const NoteBlockSchema = defineBlockSchema({
    flavour: 'affine:note',
    props: () => ({
        xywh: `[0,0,${NOTE_WIDTH},95]`,
        background: DEFAULT_NOTE_BACKGROUND_COLOR,
        index: 'a0',
        hidden: false,
        displayMode: NoteDisplayMode.DocAndEdgeless,
        edgeless: {
            style: {
                borderRadius: 0,
                borderSize: 4,
                borderStyle: StrokeStyle.None,
                shadowType: DEFAULT_NOTE_SHADOW,
            },
        },
    }),
    metadata: {
        version: 1,
        role: 'hub',
        parent: ['affine:page'],
        children: [
            'affine:paragraph',
            'affine:list',
            'affine:code',
            'affine:divider',
            'affine:database',
            'affine:data-view',
            'affine:image',
            'affine:bookmark',
            'affine:attachment',
            'affine:surface-ref',
            'affine:embed-*',
        ],
    },
    toModel: () => {
        return new NoteBlockModel();
    },
});
export class NoteBlockModel extends selectable(BlockModel) {
    _isSelectable() {
        return this.displayMode !== NoteDisplayMode.DocOnly;
    }
    hitTest(x, y) {
        if (!this._isSelectable())
            return false;
        const bound = Bound.deserialize(this.xywh);
        return bound.isPointInBound([x, y], 0);
    }
    containedByBounds(bounds) {
        if (!this._isSelectable())
            return false;
        return super.containedByBounds(bounds);
    }
    boxSelect(bound) {
        if (!this._isSelectable())
            return false;
        return super.boxSelect(bound);
    }
}
//# sourceMappingURL=note-model.js.map