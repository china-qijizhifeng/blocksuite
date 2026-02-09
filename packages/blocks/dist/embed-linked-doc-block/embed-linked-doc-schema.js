import { createEmbedBlockSchema } from '../_common/embed-block-helper/helper.js';
import { EmbedLinkedDocModel, EmbedLinkedDocStyles, } from './embed-linked-doc-model.js';
const defaultEmbedLinkedDocBlockProps = {
    pageId: '',
    style: EmbedLinkedDocStyles[1],
    caption: null,
};
export const EmbedLinkedDocBlockSchema = createEmbedBlockSchema({
    name: 'linked-doc',
    version: 1,
    toModel: () => new EmbedLinkedDocModel(),
    props: () => defaultEmbedLinkedDocBlockProps,
});
//# sourceMappingURL=embed-linked-doc-schema.js.map