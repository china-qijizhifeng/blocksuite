import { createEmbedBlockSchema } from '../_common/embed-block-helper/helper.js';
import { EmbedHtmlModel, EmbedHtmlStyles, } from './embed-html-model.js';
const defaultEmbedHtmlProps = {
    style: EmbedHtmlStyles[0],
    caption: null,
    html: undefined,
    design: undefined,
};
export const EmbedHtmlBlockSchema = createEmbedBlockSchema({
    name: 'html',
    version: 1,
    toModel: () => new EmbedHtmlModel(),
    props: () => defaultEmbedHtmlProps,
});
//# sourceMappingURL=embed-html-schema.js.map