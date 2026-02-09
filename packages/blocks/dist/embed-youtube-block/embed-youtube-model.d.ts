import type { EmbedCardStyle } from '../_common/types.js';
export declare const youtubeUrlRegex: RegExp;
export type EmbedYoutubeBlockUrlData = {
    videoId: string | null;
    image: string | null;
    title: string | null;
    description: string | null;
    creator: string | null;
    creatorUrl: string | null;
    creatorImage: string | null;
};
export declare const EmbedYoutubeStyles: EmbedCardStyle[];
export type EmbedYoutubeBlockProps = {
    style: (typeof EmbedYoutubeStyles)[number];
    url: string;
    caption: string | null;
} & EmbedYoutubeBlockUrlData;
declare const EmbedYoutubeModel_base: {
    new (): import("@blocksuite/blocks").EdgelessBlockModel<{
        style: EmbedCardStyle;
        url: string;
        caption: string | null;
    } & EmbedYoutubeBlockUrlData & import("../_common/edgeless/mixin/edgeless-selectable.js").EdgelessSelectableProps>;
};
export declare class EmbedYoutubeModel extends EmbedYoutubeModel_base {
}
declare global {
    namespace BlockSuite {
        interface EdgelessBlockModelMap {
            'affine:embed-youtube': EmbedYoutubeModel;
        }
    }
}
export {};
//# sourceMappingURL=embed-youtube-model.d.ts.map