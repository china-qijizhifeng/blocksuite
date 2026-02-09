import type { BaseBlockTransformer, InternalPrimitives } from '@blocksuite/store';
import type { EmbedBlockModel } from './embed-block-model.js';
import type { EmbedProps, LinkPreviewData } from './types.js';
export declare function createEmbedBlockSchema<Props extends object, Model extends EmbedBlockModel<Props>, Transformer extends BaseBlockTransformer<EmbedProps<Props>> = BaseBlockTransformer<EmbedProps<Props>>>({ name, version, toModel, props, transformer, }: {
    name: string;
    version: number;
    toModel: () => Model;
    props?: (internalPrimitives: InternalPrimitives) => Props;
    transformer?: () => Transformer;
}): {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<EmbedProps<Props>>;
        flavour: `affine:embed-${string}`;
    } & {
        version: number;
        role: "content";
    };
    onUpgrade?: ((data: EmbedProps<Props>, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => Transformer) | undefined;
};
export declare class LinkPreviewer {
    private _endpoint;
    private _getStringFromHTML;
    setEndpoint: (endpoint: string) => void;
    query: (url: string, signal?: AbortSignal) => Promise<Partial<LinkPreviewData>>;
}
//# sourceMappingURL=helper.d.ts.map