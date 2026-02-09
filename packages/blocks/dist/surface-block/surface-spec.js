import { literal } from 'lit/static-html.js';
import { SurfaceBlockSchema } from './surface-model.js';
import { SurfaceBlockService } from './surface-service.js';
export const PageSurfaceBlockSpec = {
    schema: SurfaceBlockSchema,
    view: {
        component: literal `affine-surface`,
    },
    service: SurfaceBlockService,
};
export const EdgelessSurfaceBlockSpec = {
    schema: SurfaceBlockSchema,
    view: {
        component: literal `affine-surface`,
    },
    service: SurfaceBlockService,
};
//# sourceMappingURL=surface-spec.js.map