import { literal } from 'lit/static-html.js';
import { DatabaseBlockSchema } from './database-model.js';
import { DatabaseBlockService } from './database-service.js';
export const DatabaseBlockSpec = {
    schema: DatabaseBlockSchema,
    service: DatabaseBlockService,
    view: {
        component: literal `affine-database`,
    },
};
//# sourceMappingURL=database-spec.js.map