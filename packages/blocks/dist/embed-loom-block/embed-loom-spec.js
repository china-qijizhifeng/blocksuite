import { literal } from 'lit/static-html.js';
import { EmbedLoomBlockSchema } from './embed-loom-schema.js';
import { EmbedLoomBlockService } from './embed-loom-service.js';
export const EmbedLoomBlockSpec = {
    schema: EmbedLoomBlockSchema,
    view: {
        component: literal `affine-embed-loom-block`,
    },
    service: EmbedLoomBlockService,
};
//# sourceMappingURL=embed-loom-spec.js.map