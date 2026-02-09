export declare const blockMetaMap: {
    todo: {
        addProperty: <Value>(property: {
            name: string;
            key: string;
            columnMeta: import("../../database-block/data-view/index.js").ColumnMeta<string, Value, {}>;
            getColumnData?: ((block: import("@blocksuite/blocks").ListBlockModel) => {}) | undefined;
            setColumnData?: ((block: import("@blocksuite/blocks").ListBlockModel, data: {}) => void) | undefined;
            get: (block: import("@blocksuite/blocks").ListBlockModel) => Value;
            set?: ((block: import("@blocksuite/blocks").ListBlockModel, value: Value) => void) | undefined;
            updated: (block: import("@blocksuite/blocks").ListBlockModel, callback: () => void) => import("@blocksuite/global/utils").Disposable;
        }) => void;
        selector: (block: import("@blocksuite/store").Block) => boolean;
        properties: {
            name: string;
            key: string;
            columnMeta: import("../../database-block/data-view/index.js").ColumnMeta<string, unknown, {}>;
            getColumnData?: ((block: import("@blocksuite/store").BlockModel<object>) => {}) | undefined;
            setColumnData?: ((block: import("@blocksuite/store").BlockModel<object>, data: {}) => void) | undefined;
            get: (block: import("@blocksuite/store").BlockModel<object>) => unknown;
            set?: ((block: import("@blocksuite/store").BlockModel<object>, value: unknown) => void) | undefined;
            updated: (block: import("@blocksuite/store").BlockModel<object>, callback: () => void) => import("@blocksuite/global/utils").Disposable;
        }[];
    };
};
//# sourceMappingURL=index.d.ts.map