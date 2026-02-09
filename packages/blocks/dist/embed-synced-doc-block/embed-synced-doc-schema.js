import { createEmbedBlockSchema } from '../_common/embed-block-helper/helper.js';
import { EmbedSyncedDocModel, EmbedSyncedDocStyles, } from './embed-synced-doc-model.js';
export const defaultEmbedSyncedDocBlockProps = {
    pageId: '',
    style: EmbedSyncedDocStyles[0],
    caption: undefined,
    scale: undefined,
};
export const EmbedSyncedDocBlockSchema = createEmbedBlockSchema({
    name: 'synced-doc',
    version: 1,
    toModel: () => new EmbedSyncedDocModel(),
    props: () => defaultEmbedSyncedDocBlockProps,
});
//# sourceMappingURL=embed-synced-doc-schema.js.map