import { literal } from 'lit/static-html.js';
import { AttachmentBlockSchema } from './attachment-model.js';
import { AttachmentBlockService } from './attachment-service.js';
export const AttachmentBlockSpec = {
    schema: AttachmentBlockSchema,
    view: {
        component: literal `affine-attachment`,
    },
    service: AttachmentBlockService,
};
//# sourceMappingURL=attachment-spec.js.map