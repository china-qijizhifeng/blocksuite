export interface TUnion {
    type: 'union';
    title: 'union';
    list: TType[];
}
export declare const tUnion: (list: TType[]) => TUnion;
export interface TArray<_Ele extends TType = TType> {
    type: 'array';
    ele: TType;
    title: 'array';
}
export declare const tArray: <const T extends TType>(ele: T) => TArray<T>;
export declare const isTArray: (type: TType) => type is TArray<TType>;
export type TTypeVar = {
    type: 'typeVar';
    title: 'typeVar';
    name: string;
    bound: TType;
};
export declare const tTypeVar: (name: string, bound: TType) => TTypeVar;
export type TTypeRef = {
    type: 'typeRef';
    title: 'typeRef';
    name: string;
};
export declare const tTypeRef: (name: string) => TTypeRef;
export type TFunction = {
    type: 'function';
    title: 'function';
    typeVars: TTypeVar[];
    args: TType[];
    rt: TType;
};
export declare const tFunction: (fn: {
    typeVars?: TTypeVar[];
    args: TType[];
    rt: TType;
}) => TFunction;
export type TType = TDataType | TArray | TUnion | TTypeRef | TFunction;
export type DataTypeShape = Record<string, unknown>;
export type TDataType<Data extends DataTypeShape = Record<string, unknown>> = {
    type: 'data';
    name: string;
    data?: Data;
};
export type ValueOfData<T extends DataDefine> = T extends DataDefine<infer R> ? R : never;
export type TypeOfData<T extends DataDefine> = T extends DataDefine<infer R> ? TDataType<R> : never;
export declare class DataDefine<Data extends DataTypeShape = Record<string, unknown>> {
    private config;
    private dataMap;
    constructor(config: DataDefineConfig<Data>, dataMap: Map<string, DataDefine>);
    private isByName;
    private isSubOfByName;
    create(data?: Data): TDataType<Data>;
    is(data: TType): data is TDataType<Data>;
    isSubOf(superType: TDataType): boolean;
    isSuperOf(subType: TDataType): boolean;
}
interface DataDefineConfig<_T extends DataTypeShape> {
    name: string;
    supers: DataDefine[];
}
export declare class Typesystem {
    dataMap: Map<string, DataDefine<Record<string, unknown>>>;
    defineData<MetaData extends DataTypeShape>(config: DataDefineConfig<MetaData>): DataDefine<MetaData>;
    isDataType(t: TType): t is TDataType;
    isSubtype(superType: TType, sub: TType, context?: Record<string, TType>): boolean;
    subst(context: Record<string, TType>, template: TFunction): TFunction;
    instance(context: Record<string, TType>, realArgs: TType[], realRt: TType, template: TFunction): TFunction;
}
export declare const typesystem: Typesystem;
export declare const tUnknown: DataDefine<Record<string, unknown>>;
export {};
//# sourceMappingURL=typesystem.d.ts.map