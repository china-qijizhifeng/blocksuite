import { literal } from 'lit/static-html.js';
import { ParagraphBlockSchema } from './paragraph-model.js';
import { ParagraphBlockService } from './paragraph-service.js';
export const ParagraphBlockSpec = {
    schema: ParagraphBlockSchema,
    view: {
        component: literal `affine-paragraph`,
    },
    service: ParagraphBlockService,
};
//# sourceMappingURL=paragraph-spec.js.map