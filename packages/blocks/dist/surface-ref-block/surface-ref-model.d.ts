import { type SchemaToModel } from '@blocksuite/store';
type SurfaceRefProps = {
    reference: string;
    caption: string;
    refFlavour: string;
};
export declare const SurfaceRefBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<SurfaceRefProps>;
        flavour: "affine:surface-ref";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: SurfaceRefProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<SurfaceRefProps>) | undefined;
};
export type SurfaceRefBlockModel = SchemaToModel<typeof SurfaceRefBlockSchema>;
export {};
//# sourceMappingURL=surface-ref-model.d.ts.map