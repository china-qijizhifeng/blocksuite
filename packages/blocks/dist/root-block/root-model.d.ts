import type { Text } from '@blocksuite/store';
import { BlockModel } from '@blocksuite/store';
type RootBlockProps = {
    title: Text;
};
export declare class RootBlockModel extends BlockModel<RootBlockProps> {
    constructor();
}
export declare const RootBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<RootBlockProps>;
        flavour: "affine:page";
    } & {
        version: number;
        role: "root";
    };
    onUpgrade?: ((data: RootBlockProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<RootBlockProps>) | undefined;
};
export {};
//# sourceMappingURL=root-model.d.ts.map