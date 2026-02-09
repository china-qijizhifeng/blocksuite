import { literal } from 'lit/static-html.js';
import { ImageBlockSchema } from './image-model.js';
import { ImageBlockService } from './image-service.js';
export const ImageBlockSpec = {
    schema: ImageBlockSchema,
    service: ImageBlockService,
    view: {
        component: literal `affine-image`,
        widgets: {
            imageToolbar: literal `affine-image-toolbar-widget`,
        },
    },
};
//# sourceMappingURL=image-spec.js.map