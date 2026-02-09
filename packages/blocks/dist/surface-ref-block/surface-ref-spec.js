import { literal } from 'lit/static-html.js';
import { SurfaceRefBlockSchema } from './surface-ref-model.js';
import { SurfaceRefBlockService } from './surface-ref-service.js';
export const PageSurfaceRefBlockSpec = {
    schema: SurfaceRefBlockSchema,
    service: SurfaceRefBlockService,
    view: {
        component: literal `affine-surface-ref`,
        widgets: {
            surfaceToolbar: literal `affine-surface-ref-toolbar`,
        },
    },
};
export const EdgelessSurfaceRefBlockSpec = {
    schema: SurfaceRefBlockSchema,
    service: SurfaceRefBlockService,
    view: {
        component: literal `affine-edgeless-surface-ref`,
    },
};
//# sourceMappingURL=surface-ref-spec.js.map