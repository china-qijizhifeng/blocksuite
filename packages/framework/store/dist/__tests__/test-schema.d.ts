import { type SchemaToModel } from '../schema/index.js';
export declare const RootBlockSchema: {
    version: number;
    model: {
        props: import("../schema/base.js").PropsGetter<{
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
};
export type RootBlockModel = SchemaToModel<typeof RootBlockSchema>;
export declare const NoteBlockSchema: {
    version: number;
    model: {
        props: import("../schema/base.js").PropsGetter<{}>;
        flavour: "affine:note";
    } & {
        version: number;
        role: "hub";
        parent: string[];
        children: string[];
    };
    onUpgrade?: ((data: {}, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("../index.js").BaseBlockTransformer<{}>) | undefined;
};
export declare const ParagraphBlockSchema: {
    version: number;
    model: {
        props: import("../schema/base.js").PropsGetter<{
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
};
export declare const ListBlockSchema: {
    version: number;
    model: {
        props: import("../schema/base.js").PropsGetter<{
            type: string;
            text: import("../index.js").Text;
            checked: boolean;
            collapsed: boolean;
        }>;
        flavour: "affine:list";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: {
        type: string;
        text: import("../index.js").Text;
        checked: boolean;
        collapsed: boolean;
    }, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("../index.js").BaseBlockTransformer<{
        type: string;
        text: import("../index.js").Text;
        checked: boolean;
        collapsed: boolean;
    }>) | undefined;
};
export declare const DividerBlockSchema: {
    version: number;
    model: {
        props: import("../schema/base.js").PropsGetter<object>;
        flavour: "affine:divider";
    } & {
        version: number;
        role: "content";
        children: never[];
    };
    onUpgrade?: ((data: object, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("../index.js").BaseBlockTransformer<object>) | undefined;
};
//# sourceMappingURL=test-schema.d.ts.map