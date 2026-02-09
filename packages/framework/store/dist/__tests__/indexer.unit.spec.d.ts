export declare const BlockSchemas: ({
    version: number;
    model: {
        props: import("../index.js").PropsGetter<{
            title: import("../index.js").Text;
            count: number;
            style: Record<string, unknown>;
            items: unknown[];
        }>;
        flavour: "affine:page";
    } & {
        version: number;
        role: "root";
    };
    onUpgrade?: ((data: {
        title: import("../index.js").Text;
        count: number;
        style: Record<string, unknown>;
        items: unknown[];
    }, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("../index.js").BaseBlockTransformer<{
        title: import("../index.js").Text;
        count: number;
        style: Record<string, unknown>;
        items: unknown[];
    }>) | undefined;
} | {
    version: number;
    model: {
        props: import("../index.js").PropsGetter<{}>;
        flavour: "affine:note";
    } & {
        version: number;
        role: "hub";
        parent: string[];
        children: string[];
    };
    onUpgrade?: ((data: {}, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("../index.js").BaseBlockTransformer<{}>) | undefined;
} | {
    version: number;
    model: {
        props: import("../index.js").PropsGetter<{
            type: string;
            text: import("../index.js").Text;
        }>;
        flavour: "affine:paragraph";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: {
        type: string;
        text: import("../index.js").Text;
    }, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("../index.js").BaseBlockTransformer<{
        type: string;
        text: import("../index.js").Text;
    }>) | undefined;
})[];
//# sourceMappingURL=indexer.unit.spec.d.ts.map