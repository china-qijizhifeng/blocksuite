import { literal } from 'lit/static-html.js';
import { EmbedFigmaBlockSchema } from './embed-figma-schema.js';
import { EmbedFigmaBlockService } from './embed-figma-service.js';
export const EmbedFigmaBlockSpec = {
    schema: EmbedFigmaBlockSchema,
    view: {
        component: literal `affine-embed-figma-block`,
    },
    service: EmbedFigmaBlockService,
};
//# sourceMappingURL=embed-figma-spec.js.map