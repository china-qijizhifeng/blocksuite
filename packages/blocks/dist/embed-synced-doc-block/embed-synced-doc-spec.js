import { literal } from 'lit/static-html.js';
import { EmbedSyncedDocBlockSchema } from './embed-synced-doc-schema.js';
import { EmbedSyncedDocBlockService } from './embed-synced-doc-service.js';
export const EmbedSyncedDocBlockSpec = {
    schema: EmbedSyncedDocBlockSchema,
    view: {
        component: literal `affine-embed-synced-doc-block`,
    },
    service: EmbedSyncedDocBlockService,
};
//# sourceMappingURL=embed-synced-doc-spec.js.map