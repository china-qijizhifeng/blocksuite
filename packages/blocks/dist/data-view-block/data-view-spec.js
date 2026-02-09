import { literal } from 'lit/static-html.js';
import { DataViewBlockSchema } from './data-view-model.js';
import { DataViewBlockService } from './database-service.js';
export const DataViewBlockSpec = {
    schema: DataViewBlockSchema,
    service: DataViewBlockService,
    view: {
        component: literal `affine-data-view`,
    },
};
//# sourceMappingURL=data-view-spec.js.map