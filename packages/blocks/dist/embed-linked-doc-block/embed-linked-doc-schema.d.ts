import { type EmbedLinkedDocBlockProps } from './embed-linked-doc-model.js';
export declare const EmbedLinkedDocBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<import("../_common/embed-block-helper/types.js").EmbedProps<EmbedLinkedDocBlockProps>>;
        flavour: `affine:embed-${string}`;
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: import("../_common/embed-block-helper/types.js").EmbedProps<EmbedLinkedDocBlockProps>, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<import("../_common/embed-block-helper/types.js").EmbedProps<EmbedLinkedDocBlockProps>>) | undefined;
};
//# sourceMappingURL=embed-linked-doc-schema.d.ts.map