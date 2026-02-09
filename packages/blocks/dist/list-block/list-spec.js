import { literal } from 'lit/static-html.js';
import { ListBlockSchema } from './list-model.js';
import { ListBlockService } from './list-service.js';
export const ListBlockSpec = {
    schema: ListBlockSchema,
    view: {
        component: literal `affine-list`,
    },
    service: ListBlockService,
};
//# sourceMappingURL=list-spec.js.map