import type { FilterGroup } from '../../../common/ast.js';
import { ColumnDataStats } from '../../../common/data-stats.js';
import { GroupHelper } from '../../../common/group-by/helper.js';
import type { TType } from '../../../logical/typesystem.js';
import type { InsertToPosition } from '../../../types.js';
import type { _DataViewDataTypeMap } from '../../data-view.js';
import { DataViewColumnManagerBase, DataViewManagerBase } from '../../data-view-manager.js';
import type { StatCalcOpType } from './types.js';
type TableViewData = _DataViewDataTypeMap['table'];
export declare class DataViewTableManager extends DataViewManagerBase<TableViewData> {
    get type(): string;
    get view(): import("../../data-view.js").BasicViewDataType<"table", {
        columns: import("./define.js").TableViewColumn[];
        filter: FilterGroup;
        groupBy?: import("../../../common/types.js").GroupBy | undefined;
        groupProperties?: import("../../../common/types.js").GroupProperty[] | undefined;
        sort?: import("../../../common/types.js").Sort | undefined;
        header?: {
            titleColumn?: string | undefined;
            iconColumn?: string | undefined;
            imageColumn?: string | undefined;
        } | undefined;
    }>;
    get filter(): FilterGroup;
    get id(): string;
    get name(): string;
    get columns(): string[];
    get detailColumns(): string[];
    get columnsWithoutFilter(): string[];
    get readonly(): boolean;
    get isDeleted(): boolean;
    get header(): {
        titleColumn?: string | undefined;
        iconColumn?: string | undefined;
        imageColumn?: string | undefined;
    };
    get groupProperties(): import("../../../common/types.js").GroupProperty[];
    get groupHelper(): GroupHelper | undefined;
    private updateView;
    private syncView;
    updateFilter(filter: FilterGroup): void;
    updateName(name: string): void;
    rowMove(rowId: string, position: InsertToPosition, fromGroup?: string, toGroup?: string): void;
    columnGet(columnId: string): DataViewTableColumnManager;
    columnGetWidth(columnId: string): number;
    columnMove(columnId: string, toAfterOfColumn: InsertToPosition): void;
    columnUpdateWidth(columnId: string, width: number): void;
    rowAdd(insertPosition: InsertToPosition | number, groupKey?: string): string;
    isShow(rowId: string): boolean;
    columnUpdateHide(columnId: string, hide: boolean): void;
    columnGetHide(columnId: string): boolean;
    duplicateView(): void;
    deleteView(): void;
    isInHeader(columnId: string): boolean;
    hasHeader(rowId: string): boolean;
    changeGroup(columnId: string | undefined): void;
    checkGroup(columnId: string, type: TType, target: TType): boolean;
    columnGetStatCalcOp(columnId: string): StatCalcOpType;
    columnUpdateStatCalcOp(columnId: string, op: StatCalcOpType): void;
}
export declare class DataViewTableColumnManager extends DataViewColumnManagerBase {
    dataViewManager: DataViewTableManager;
    get statCalcOp(): StatCalcOpType;
    get width(): number;
    readonly stats: ColumnDataStats<this>;
    constructor(propertyId: string, dataViewManager: DataViewTableManager);
    updateStatCalcOp(type: StatCalcOpType): void;
    updateWidth(width: number): void;
}
export {};
//# sourceMappingURL=table-view-manager.d.ts.map