import { type SchemaToModel } from '@blocksuite/store';
export declare const DividerBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<object>;
        flavour: "affine:divider";
    } & {
        version: number;
        role: "content";
        children: never[];
    };
    onUpgrade?: ((data: object, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<object>) | undefined;
};
export type DividerBlockModel = SchemaToModel<typeof DividerBlockSchema>;
//# sourceMappingURL=divider-model.d.ts.map