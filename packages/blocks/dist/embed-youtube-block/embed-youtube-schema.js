import { createEmbedBlockSchema } from '../_common/embed-block-helper/helper.js';
import { EmbedYoutubeModel, EmbedYoutubeStyles, } from './embed-youtube-model.js';
const defaultEmbedYoutubeProps = {
    style: EmbedYoutubeStyles[0],
    url: '',
    caption: null,
    image: null,
    title: null,
    description: null,
    creator: null,
    creatorUrl: null,
    creatorImage: null,
    videoId: null,
};
export const EmbedYoutubeBlockSchema = createEmbedBlockSchema({
    name: 'youtube',
    version: 1,
    toModel: () => new EmbedYoutubeModel(),
    props: () => defaultEmbedYoutubeProps,
});
//# sourceMappingURL=embed-youtube-schema.js.map