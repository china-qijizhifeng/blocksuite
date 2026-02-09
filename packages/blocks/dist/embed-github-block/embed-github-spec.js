import { literal } from 'lit/static-html.js';
import { EmbedGithubBlockSchema } from './embed-github-schema.js';
import { EmbedGithubBlockService } from './embed-github-service.js';
export const EmbedGithubBlockSpec = {
    schema: EmbedGithubBlockSchema,
    view: {
        component: literal `affine-embed-github-block`,
    },
    service: EmbedGithubBlockService,
};
//# sourceMappingURL=embed-github-spec.js.map