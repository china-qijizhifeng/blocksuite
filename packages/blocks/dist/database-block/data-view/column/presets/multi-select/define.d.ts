import type { SelectColumnData } from '../../types.js';
export declare const multiSelectColumnType: {
    type: "multi-select";
    modelConfig: <CellData, ColumnData extends Record<string, unknown> = Record<string, never>>(ops: {
        name: string;
        defaultData: () => ColumnData;
        type: (data: ColumnData) => import("../../../logical/typesystem.js").TType;
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
        type: "multi-select";
        model: import("../../column-config.js").ColumnConfig<"multi-select", ColumnData, CellData>;
        create: (name: string, data?: ColumnData | undefined) => {
            type: string;
            name: string;
            statCalcOp: import("../../../index.js").StatCalcOpType;
            data: ColumnData;
        };
        addConvert: <ToCellName extends keyof ColumnConfigMap>(to: ToCellName, convert: (column: ColumnData, cells: (CellData | undefined)[]) => {
            column: import("../../manager.js").GetColumnDataFromConfig<ColumnConfigMap[ToCellName]>;
            cells: (import("../../manager.js").GetCellDataFromConfig<ColumnConfigMap[ToCellName]> | undefined)[];
        }) => void;
        renderConfig: (renderer: Omit<import("../../renderer.js").Renderer<ColumnData, CellData>, "type">) => import("../../column-config.js").ColumnMeta<"multi-select", CellData, ColumnData>;
    };
};
declare global {
    interface ColumnConfigMap {
        [multiSelectColumnType.type]: typeof multiSelectColumnModelConfig.model;
    }
}
export declare const multiSelectColumnModelConfig: {
    type: "multi-select";
    model: import("../../column-config.js").ColumnConfig<"multi-select", SelectColumnData, string[]>;
    create: (name: string, data?: SelectColumnData | undefined) => {
        type: string;
        name: string;
        statCalcOp: import("../../../index.js").StatCalcOpType;
        data: SelectColumnData;
    };
    addConvert: <ToCellName extends keyof ColumnConfigMap>(to: ToCellName, convert: (column: SelectColumnData, cells: (string[] | undefined)[]) => {
        column: import("../../manager.js").GetColumnDataFromConfig<ColumnConfigMap[ToCellName]>;
        cells: (import("../../manager.js").GetCellDataFromConfig<ColumnConfigMap[ToCellName]> | undefined)[];
    }) => void;
    renderConfig: (renderer: Omit<import("../../renderer.js").Renderer<SelectColumnData, string[]>, "type">) => import("../../column-config.js").ColumnMeta<"multi-select", string[], SelectColumnData>;
};
//# sourceMappingURL=define.d.ts.map