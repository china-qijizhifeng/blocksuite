import { type EmbedHtmlBlockProps } from './embed-html-model.js';
export declare const EmbedHtmlBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<import("../_common/embed-block-helper/types.js").EmbedProps<EmbedHtmlBlockProps>>;
        flavour: `affine:embed-${string}`;
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: import("../_common/embed-block-helper/types.js").EmbedProps<EmbedHtmlBlockProps>, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<import("../_common/embed-block-helper/types.js").EmbedProps<EmbedHtmlBlockProps>>) | undefined;
};
//# sourceMappingURL=embed-html-schema.d.ts.map