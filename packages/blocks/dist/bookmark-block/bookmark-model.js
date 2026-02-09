import { BlockModel, defineBlockSchema } from '@blocksuite/store';
import { selectable } from '../_common/edgeless/mixin/index.js';
export const BookmarkStyles = [
    'vertical',
    'horizontal',
    'list',
    'cube',
];
const defaultBookmarkProps = {
    style: BookmarkStyles[1],
    url: '',
    caption: null,
    description: null,
    icon: null,
    image: null,
    title: null,
    index: 'a0',
    xywh: '[0,0,0,0]',
    rotate: 0,
};
export const BookmarkBlockSchema = defineBlockSchema({
    flavour: 'affine:bookmark',
    props: () => defaultBookmarkProps,
    metadata: {
        version: 1,
        role: 'content',
        parent: ['affine:note', 'affine:surface', 'affine:edgeless-text'],
    },
    toModel: () => new BookmarkBlockModel(),
});
export class BookmarkBlockModel extends selectable(BlockModel) {
}
//# sourceMappingURL=bookmark-model.js.map