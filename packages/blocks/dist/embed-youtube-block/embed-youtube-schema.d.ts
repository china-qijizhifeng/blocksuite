import { type EmbedYoutubeBlockProps } from './embed-youtube-model.js';
export declare const EmbedYoutubeBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<import("../_common/embed-block-helper/types.js").EmbedProps<EmbedYoutubeBlockProps>>;
        flavour: `affine:embed-${string}`;
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: import("../_common/embed-block-helper/types.js").EmbedProps<EmbedYoutubeBlockProps>, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<import("../_common/embed-block-helper/types.js").EmbedProps<EmbedYoutubeBlockProps>>) | undefined;
};
//# sourceMappingURL=embed-youtube-schema.d.ts.map