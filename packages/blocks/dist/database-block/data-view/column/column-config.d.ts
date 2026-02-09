import type { Disposable } from '@blocksuite/global/utils';
import type { TType } from '../logical/typesystem.js';
import type { StatCalcOpType } from '../view/presets/table/types.js';
import type { GetCellDataFromConfig, GetColumnDataFromConfig } from './manager.js';
import { type Renderer } from './renderer.js';
type JSON = null | number | string | boolean | JSON[] | {
    [k: string]: JSON;
};
type ColumnOps<Data extends NonNullable<unknown> = NonNullable<unknown>, Value = unknown> = {
    name: string;
    defaultData: () => Data;
    type: (data: Data) => TType;
    formatValue?: (value: unknown, colData: Data) => Value;
    isEmpty: (value?: Value) => boolean;
    cellToString: (data: Value, colData: Data) => string;
    cellFromString: (data: string, colData: Data) => {
        value: unknown;
        data?: Record<string, unknown>;
    };
    cellToJson: (data: Value, colData: Data) => JSON;
    addGroup?: (text: string, oldData: Data) => Data;
    onUpdate?: (value: Value, Data: Data, callback: () => void) => Disposable;
    valueUpdate?: (value: Value, Data: Data, newValue: Value) => Value;
};
export declare class ColumnConfig<Type extends string = keyof ColumnConfigMap, T extends NonNullable<unknown> = NonNullable<unknown>, CellData = unknown> {
    readonly type: Type;
    ops: ColumnOps<T, CellData>;
    convertMap: Map<any, any>;
    constructor(type: Type, ops: ColumnOps<T, CellData>);
    create: (name: string, data?: T) => {
        type: string;
        name: string;
        statCalcOp: StatCalcOpType;
        data: T;
    };
    defaultData(): T;
    createWithId(id: string, name: string, data?: T): {
        type: string;
        name: string;
        data: T;
        id: string;
    };
    dataType(data: T): TType;
    toString(cellData: CellData, colData: T): string;
    toJson(cellData: CellData, colData: T): JSON;
    formatValue(cellData: CellData, colData: T): CellData | undefined;
    fromString(cellData: string, colData: T): {
        value: unknown;
        data?: Record<string, unknown> | undefined;
    };
    convertCell(to: string, column: Record<string, unknown>, cells: unknown[]): any;
    registerConvert: <ToCellName extends keyof ColumnConfigMap>(to: ToCellName, convert: (column: GetColumnDataFromConfig<ColumnConfig<Type, T, CellData>>, cells: (GetCellDataFromConfig<ColumnConfig<Type, T, CellData>> | undefined)[]) => {
        column: GetColumnDataFromConfig<ColumnConfigMap[ToCellName]>;
        cells: (GetCellDataFromConfig<ColumnConfigMap[ToCellName]> | undefined)[];
    }) => void;
    get name(): string;
}
export type ColumnMeta<Type extends string = keyof ColumnConfigMap, CellData = unknown, ColumnData extends NonNullable<unknown> = NonNullable<unknown>> = {
    type: Type;
    model: ColumnConfig<Type, ColumnData, CellData>;
    renderer: Renderer<ColumnData, CellData>;
};
export declare const columnType: <Type extends string>(type: Type) => {
    type: Type;
    modelConfig: <CellData, ColumnData extends Record<string, unknown> = Record<string, never>>(ops: ColumnOps<ColumnData, CellData>) => {
        type: Type;
        model: ColumnConfig<Type, ColumnData, CellData>;
        create: (name: string, data?: ColumnData | undefined) => {
            type: string;
            name: string;
            statCalcOp: StatCalcOpType;
            data: ColumnData;
        };
        addConvert: <ToCellName extends keyof ColumnConfigMap>(to: ToCellName, convert: (column: ColumnData, cells: (CellData | undefined)[]) => {
            column: GetColumnDataFromConfig<ColumnConfigMap[ToCellName]>;
            cells: (GetCellDataFromConfig<ColumnConfigMap[ToCellName]> | undefined)[];
        }) => void;
        renderConfig: (renderer: Omit<Renderer<ColumnData, CellData>, 'type'>) => ColumnMeta<Type, CellData, ColumnData>;
    };
};
export {};
//# sourceMappingURL=column-config.d.ts.map