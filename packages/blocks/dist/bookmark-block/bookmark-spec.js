import { literal } from 'lit/static-html.js';
import { BookmarkBlockSchema } from './bookmark-model.js';
import { BookmarkBlockService } from './bookmark-service.js';
export const BookmarkBlockSpec = {
    schema: BookmarkBlockSchema,
    view: {
        component: literal `affine-bookmark`,
    },
    service: BookmarkBlockService,
};
//# sourceMappingURL=bookmark-spec.js.map