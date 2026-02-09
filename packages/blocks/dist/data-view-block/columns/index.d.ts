import type { ColumnMeta } from '../../database-block/data-view/index.js';
export declare const queryBlockColumns: (ColumnMeta<"checkbox", boolean, Record<string, never>> | ColumnMeta<"date", number, Record<string, never>> | ColumnMeta<"link", string, Record<string, never>> | ColumnMeta<"multi-select", string[], import("../../database-block/data-view/column/types.js").SelectColumnData> | ColumnMeta<"number", number, {
    decimal: number;
}> | ColumnMeta<"progress", number, Record<string, never>> | ColumnMeta<"select", string, import("../../database-block/data-view/column/types.js").SelectColumnData>)[];
export declare const queryBlockHiddenColumns: ColumnMeta<"rich-text", import("../../database-block/columns/utils.js").RichTextCellType, Record<string, never>>[];
export declare const queryBlockAllColumnMap: {
    [k: string]: ColumnMeta;
};
//# sourceMappingURL=index.d.ts.map