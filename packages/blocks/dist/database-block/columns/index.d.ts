import type { ColumnMeta } from '../data-view/index.js';
export declare const databaseBlockColumns: (ColumnMeta<"checkbox", boolean, Record<string, never>> | ColumnMeta<"date", number, Record<string, never>> | ColumnMeta<"link", string, Record<string, never>> | ColumnMeta<"multi-select", string[], import("../data-view/column/types.js").SelectColumnData> | ColumnMeta<"number", number, {
    decimal: number;
}> | ColumnMeta<"progress", number, Record<string, never>> | ColumnMeta<"select", string, import("../data-view/column/types.js").SelectColumnData> | ColumnMeta<"rich-text", import("./utils.js").RichTextCellType, Record<string, never>>)[];
export declare const databaseBlockHiddenColumns: (ColumnMeta<"image", string, Record<string, never>> | ColumnMeta<"title", import("@blocksuite/store").Text, Record<string, never>>)[];
export declare const databaseBlockAllColumnMap: {
    [k: string]: ColumnMeta;
};
//# sourceMappingURL=index.d.ts.map