import { literal } from 'lit/static-html.js';
import { EdgelessTextBlockSchema } from './edgeless-text-model.js';
import { EdgelessTextBlockService } from './edgeless-text-service.js';
export const EdgelessTextBlockSpec = {
    schema: EdgelessTextBlockSchema,
    view: {
        component: literal `affine-edgeless-text`,
    },
    service: EdgelessTextBlockService,
};
//# sourceMappingURL=edgeless-text-spec.js.map