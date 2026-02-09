import type { Text } from '@blocksuite/store';
export declare const titleColumnType: {
    type: "title";
    modelConfig: <CellData, ColumnData extends Record<string, unknown> = Record<string, never>>(ops: {
        name: string;
        defaultData: () => ColumnData;
        type: (data: ColumnData) => import("../../data-view/logical/typesystem.js").TType;
        formatValue?: ((value: unknown, colData: ColumnData) => CellData) | undefined;
        isEmpty: (value?: CellData | undefined) => boolean;
        cellToString: (data: CellData, colData: ColumnData) => string;
        cellFromString: (data: string, colData: ColumnData) => {
            value: unknown;
            data?: Record<string, unknown> | undefined;
        };
        cellToJson: (data: CellData, colData: ColumnData) => string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | any | {
            [k: string]: string | number | boolean | any | any | null;
        } | null)[] | {
            [k: string]: string | number | boolean | (string | number | boolean | any | any | null)[] | any | null;
        } | null)[] | {
            [k: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | any | any | null)[] | any | null)[] | any | null;
        } | null)[] | {
            [k: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | any | any | null)[] | any | null)[] | any | null)[] | any | null;
        } | null)[] | {
            [k: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | any | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null;
        } | null)[] | {
            [k: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | any | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null;
        } | null)[] | {
            [k: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | any | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null;
        } | null)[] | {
            [k: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | any | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null;
        } | null)[] | {
            [k: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | any | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null;
        } | null)[] | {
            [k: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | any | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null;
        } | null)[] | {
            [k: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | any | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null;
        } | null)[] | {
            [k: string]: string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | (string | number | boolean | any | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null)[] | any | null;
        } | null;
        addGroup?: ((text: string, oldData: ColumnData) => ColumnData) | undefined;
        onUpdate?: ((value: CellData, Data: ColumnData, callback: () => void) => import("@blocksuite/global/utils").Disposable) | undefined;
        valueUpdate?: ((value: CellData, Data: ColumnData, newValue: CellData) => CellData) | undefined;
    }) => {
        type: "title";
        model: import("../../data-view/column/column-config.js").ColumnConfig<"title", ColumnData, CellData>;
        create: (name: string, data?: ColumnData | undefined) => {
            type: string;
            name: string;
            statCalcOp: import("../../data-view/index.js").StatCalcOpType;
            data: ColumnData;
        };
        addConvert: <ToCellName extends keyof ColumnConfigMap>(to: ToCellName, convert: (column: ColumnData, cells: (CellData | undefined)[]) => {
            column: import("../../data-view/column/manager.js").GetColumnDataFromConfig<ColumnConfigMap[ToCellName]>;
            cells: (import("../../data-view/column/manager.js").GetCellDataFromConfig<ColumnConfigMap[ToCellName]> | undefined)[];
        }) => void;
        renderConfig: (renderer: Omit<import("../../data-view/column/renderer.js").Renderer<ColumnData, CellData>, "type">) => import("../../data-view/column/column-config.js").ColumnMeta<"title", CellData, ColumnData>;
    };
};
declare global {
    interface ColumnConfigMap {
        [titleColumnType.type]: typeof titlePureColumnConfig.model;
    }
}
export declare const titlePureColumnConfig: {
    type: "title";
    model: import("../../data-view/column/column-config.js").ColumnConfig<"title", Record<string, never>, Text>;
    create: (name: string, data?: Record<string, never> | undefined) => {
        type: string;
        name: string;
        statCalcOp: import("../../data-view/index.js").StatCalcOpType;
        data: Record<string, never>;
    };
    addConvert: <ToCellName extends keyof ColumnConfigMap>(to: ToCellName, convert: (column: Record<string, never>, cells: (Text | undefined)[]) => {
        column: import("../../data-view/column/manager.js").GetColumnDataFromConfig<ColumnConfigMap[ToCellName]>;
        cells: (import("../../data-view/column/manager.js").GetCellDataFromConfig<ColumnConfigMap[ToCellName]> | undefined)[];
    }) => void;
    renderConfig: (renderer: Omit<import("../../data-view/column/renderer.js").Renderer<Record<string, never>, Text>, "type">) => import("../../data-view/column/column-config.js").ColumnMeta<"title", Text, Record<string, never>>;
};
//# sourceMappingURL=define.d.ts.map