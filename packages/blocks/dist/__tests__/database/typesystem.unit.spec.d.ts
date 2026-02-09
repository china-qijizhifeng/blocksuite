export declare const tString: import("../../database-block/data-view/logical/typesystem.js").DataDefine<{
    value: string;
}>;
export declare const tBoolean: import("../../database-block/data-view/logical/typesystem.js").DataDefine<{
    value: boolean;
}>;
export declare const tDate: import("../../database-block/data-view/logical/typesystem.js").DataDefine<{
    value: number;
}>;
export declare const tURL: import("../../database-block/data-view/logical/typesystem.js").DataDefine<import("../../database-block/data-view/logical/typesystem.js").DataTypeShape>;
export declare const tEmail: import("../../database-block/data-view/logical/typesystem.js").DataDefine<import("../../database-block/data-view/logical/typesystem.js").DataTypeShape>;
export declare const tPhone: import("../../database-block/data-view/logical/typesystem.js").DataDefine<import("../../database-block/data-view/logical/typesystem.js").DataTypeShape>;
type Tag = {
    id: string;
    value: string;
    color: string;
};
export declare const tTag: import("../../database-block/data-view/logical/typesystem.js").DataDefine<{
    tags: Tag[];
}>;
export {};
//# sourceMappingURL=typesystem.unit.spec.d.ts.map