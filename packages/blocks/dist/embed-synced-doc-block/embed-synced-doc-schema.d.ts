import { type EmbedSyncedDocBlockProps } from './embed-synced-doc-model.js';
export declare const defaultEmbedSyncedDocBlockProps: EmbedSyncedDocBlockProps;
export declare const EmbedSyncedDocBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<import("../_common/embed-block-helper/types.js").EmbedProps<EmbedSyncedDocBlockProps>>;
        flavour: `affine:embed-${string}`;
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: import("../_common/embed-block-helper/types.js").EmbedProps<EmbedSyncedDocBlockProps>, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<import("../_common/embed-block-helper/types.js").EmbedProps<EmbedSyncedDocBlockProps>>) | undefined;
};
//# sourceMappingURL=embed-synced-doc-schema.d.ts.map