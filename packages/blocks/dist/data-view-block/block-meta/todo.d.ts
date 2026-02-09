import { type ListBlockModel } from '../../list-block/index.js';
export declare const todoMeta: {
    addProperty: <Value>(property: {
        name: string;
        key: string;
        columnMeta: import("../../database-block/data-view/index.js").ColumnMeta<string, Value, {}>;
        getColumnData?: ((block: ListBlockModel) => {}) | undefined;
        setColumnData?: ((block: ListBlockModel, data: {}) => void) | undefined;
        get: (block: ListBlockModel) => Value;
        set?: ((block: ListBlockModel, value: Value) => void) | undefined;
        updated: (block: ListBlockModel, callback: () => void) => import("@blocksuite/global/utils").Disposable;
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
//# sourceMappingURL=todo.d.ts.map