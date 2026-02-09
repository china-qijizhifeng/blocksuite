import { Slot } from '@blocksuite/global/utils';
import type * as Y from 'yjs';
import { z } from 'zod';
import { Boxed } from '../reactive/boxed.js';
import { Text } from '../reactive/text.js';
import type { YBlock } from '../store/doc/block.js';
import type { Doc } from '../store/index.js';
import type { BaseBlockTransformer } from '../transformer/base.js';
declare const role: readonly ["root", "hub", "content"];
export type RoleType = (typeof role)[number];
export interface InternalPrimitives {
    Text: (input?: Y.Text | string) => Text;
    Boxed: <T>(input: T) => Boxed<T>;
}
export declare const internalPrimitives: InternalPrimitives;
export declare const BlockSchema: z.ZodObject<{
    version: z.ZodNumber;
    model: z.ZodObject<{
        role: z.ZodEnum<["root", "hub", "content"]>;
        flavour: z.ZodString;
        parent: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        children: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        props: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodType<InternalPrimitives, z.ZodTypeDef, InternalPrimitives>], z.ZodUnknown>, z.ZodRecord<z.ZodString, z.ZodAny>>>;
        toModel: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodType<BlockModel<object>, z.ZodTypeDef, BlockModel<object>>>>;
    }, "strip", z.ZodTypeAny, {
        flavour: string;
        role: "root" | "hub" | "content";
        children?: string[] | undefined;
        parent?: string[] | undefined;
        props?: ((args_0: InternalPrimitives, ...args_1: unknown[]) => Record<string, any>) | undefined;
        toModel?: ((...args: unknown[]) => BlockModel<object>) | undefined;
    }, {
        flavour: string;
        role: "root" | "hub" | "content";
        children?: string[] | undefined;
        parent?: string[] | undefined;
        props?: ((args_0: InternalPrimitives, ...args_1: unknown[]) => Record<string, any>) | undefined;
        toModel?: ((...args: unknown[]) => BlockModel<object>) | undefined;
    }>;
    transformer: z.ZodOptional<z.ZodFunction<z.ZodTuple<[], z.ZodUnknown>, z.ZodType<BaseBlockTransformer<object>, z.ZodTypeDef, BaseBlockTransformer<object>>>>;
    onUpgrade: z.ZodOptional<z.ZodFunction<z.ZodTuple<[z.ZodAny, z.ZodNumber, z.ZodNumber], z.ZodUnknown>, z.ZodVoid>>;
}, "strip", z.ZodTypeAny, {
    version: number;
    model: {
        flavour: string;
        role: "root" | "hub" | "content";
        children?: string[] | undefined;
        parent?: string[] | undefined;
        props?: ((args_0: InternalPrimitives, ...args_1: unknown[]) => Record<string, any>) | undefined;
        toModel?: ((...args: unknown[]) => BlockModel<object>) | undefined;
    };
    transformer?: ((...args: unknown[]) => BaseBlockTransformer<object>) | undefined;
    onUpgrade?: ((args_0: any, args_1: number, args_2: number, ...args_3: unknown[]) => void) | undefined;
}, {
    version: number;
    model: {
        flavour: string;
        role: "root" | "hub" | "content";
        children?: string[] | undefined;
        parent?: string[] | undefined;
        props?: ((args_0: InternalPrimitives, ...args_1: unknown[]) => Record<string, any>) | undefined;
        toModel?: ((...args: unknown[]) => BlockModel<object>) | undefined;
    };
    transformer?: ((...args: unknown[]) => BaseBlockTransformer<object>) | undefined;
    onUpgrade?: ((args_0: any, args_1: number, args_2: number, ...args_3: unknown[]) => void) | undefined;
}>;
export type BlockSchemaType = z.infer<typeof BlockSchema>;
export type PropsGetter<Props> = (internalPrimitives: InternalPrimitives) => Props;
export type SchemaToModel<Schema extends {
    model: {
        props: PropsGetter<object>;
        flavour: string;
    };
}> = BlockModel<ReturnType<Schema['model']['props']>> & ReturnType<Schema['model']['props']> & {
    flavour: Schema['model']['flavour'];
};
export declare function defineBlockSchema<Flavour extends string, Role extends RoleType, Props extends object, Metadata extends Readonly<{
    version: number;
    role: Role;
    parent?: string[];
    children?: string[];
}>, Model extends BlockModel<Props>, Transformer extends BaseBlockTransformer<Props>>(options: {
    flavour: Flavour;
    metadata: Metadata;
    props?: (internalPrimitives: InternalPrimitives) => Props;
    onUpgrade?: (data: Props, previousVersion: number, latestVersion: number) => void;
    toModel?: () => Model;
    transformer?: () => Transformer;
}): {
    version: number;
    model: {
        props: PropsGetter<Props>;
        flavour: Flavour;
    } & Metadata;
    onUpgrade?: (data: Props, previousVersion: number, latestVersion: number) => void;
    transformer?: () => Transformer;
};
declare const modelLabel: unique symbol;
declare const BlockModel_base: new <Props_1>() => Props_1;
export declare class BlockModel<Props extends object = object> extends BlockModel_base<Props> {
    [modelLabel]: Props;
    version: number;
    flavour: string;
    role: RoleType;
    /**
     * @deprecated use doc instead
     */
    page: Doc;
    id: string;
    yBlock: YBlock;
    keys: string[];
    stash: (prop: keyof Props & string) => void;
    pop: (prop: keyof Props & string) => void;
    text?: Text;
    created: Slot<void>;
    deleted: Slot<void>;
    propsUpdated: Slot<{
        key: string;
    }>;
    childrenUpdated: Slot<void>;
    get doc(): Doc;
    set doc(doc: Doc);
    get childMap(): Map<string, number>;
    get children(): BlockModel<object>[];
    isEmpty(): boolean;
    firstChild(): BlockModel | null;
    lastChild(): BlockModel | null;
    dispose(): void;
}
export {};
//# sourceMappingURL=base.d.ts.map