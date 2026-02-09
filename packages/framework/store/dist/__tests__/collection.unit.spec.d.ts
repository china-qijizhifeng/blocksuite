import type { BlockModel } from '../index.js';
export declare const BlockSchemas: {
    version: number;
    model: {
        flavour: string;
        role: "root" | "hub" | "content";
        children?: string[] | undefined;
        parent?: string[] | undefined;
        props?: ((args_0: import("../index.js").InternalPrimitives, ...args_1: unknown[]) => Record<string, any>) | undefined;
        toModel?: ((...args: unknown[]) => BlockModel<object>) | undefined;
    };
    transformer?: ((...args: unknown[]) => import("../index.js").BaseBlockTransformer<object>) | undefined;
    onUpgrade?: ((args_0: any, args_1: number, args_2: number, ...args_3: unknown[]) => void) | undefined;
}[];
declare global {
    namespace BlockSuite {
        interface BlockModels {
            'affine:page': BlockModel;
            'affine:paragraph': BlockModel;
            'affine:note': BlockModel;
        }
    }
}
//# sourceMappingURL=collection.unit.spec.d.ts.map