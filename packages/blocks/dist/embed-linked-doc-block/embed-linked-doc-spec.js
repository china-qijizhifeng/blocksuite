import { literal } from 'lit/static-html.js';
import { EmbedLinkedDocBlockSchema } from './embed-linked-doc-schema.js';
import { EmbedLinkedDocBlockService } from './embed-linked-doc-service.js';
export const EmbedLinkedDocBlockSpec = {
    schema: EmbedLinkedDocBlockSchema,
    view: {
        component: literal `affine-embed-linked-doc-block`,
    },
    service: EmbedLinkedDocBlockService,
};
//# sourceMappingURL=embed-linked-doc-spec.js.map