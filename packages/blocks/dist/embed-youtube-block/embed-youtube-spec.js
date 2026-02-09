import { literal } from 'lit/static-html.js';
import { EmbedYoutubeBlockSchema } from './embed-youtube-schema.js';
import { EmbedYoutubeBlockService } from './embed-youtube-service.js';
export const EmbedYoutubeBlockSpec = {
    schema: EmbedYoutubeBlockSchema,
    view: {
        component: literal `affine-embed-youtube-block`,
    },
    service: EmbedYoutubeBlockService,
};
//# sourceMappingURL=embed-youtube-spec.js.map