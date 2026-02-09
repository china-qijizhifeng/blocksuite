import { type EmbedFigmaBlockProps } from './embed-figma-model.js';
export declare const EmbedFigmaBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<import("../_common/embed-block-helper/types.js").EmbedProps<EmbedFigmaBlockProps>>;
        flavour: `affine:embed-${string}`;
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: import("../_common/embed-block-helper/types.js").EmbedProps<EmbedFigmaBlockProps>, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<import("../_common/embed-block-helper/types.js").EmbedProps<EmbedFigmaBlockProps>>) | undefined;
};
//# sourceMappingURL=embed-figma-schema.d.ts.map