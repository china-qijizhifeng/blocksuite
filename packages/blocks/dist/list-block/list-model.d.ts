import { type SchemaToModel } from '@blocksuite/store';
export type ListType = 'bulleted' | 'numbered' | 'todo' | 'toggle';
declare const BackwardUndefined: unique symbol;
/**
 * The `collapsed` property may be `undefined` due to legacy data,
 * but you should not manually set it to undefined.
 */
type ListCollapsed = boolean | typeof BackwardUndefined;
export declare const ListBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<{
            type: ListType;
            text: import("@blocksuite/store").Text;
            checked: boolean;
            collapsed: ListCollapsed;
        }>;
        flavour: "affine:list";
    } & {
        version: number;
        role: "content";
        parent: string[];
    };
    onUpgrade?: ((data: {
        type: ListType;
        text: import("@blocksuite/store").Text;
        checked: boolean;
        collapsed: ListCollapsed;
    }, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<{
        type: ListType;
        text: import("@blocksuite/store").Text;
        checked: boolean;
        collapsed: ListCollapsed;
    }>) | undefined;
};
export type ListBlockModel = SchemaToModel<typeof ListBlockSchema>;
export {};
//# sourceMappingURL=list-model.d.ts.map