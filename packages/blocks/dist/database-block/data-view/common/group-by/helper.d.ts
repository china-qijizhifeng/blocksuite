import type { TType } from '../../logical/typesystem.js';
import type { InsertToPosition } from '../../types.js';
import type { DataViewManager } from '../../view/data-view-manager.js';
import type { GroupBy, GroupProperty } from '../types.js';
import type { GroupByConfig } from './matcher.js';
export type GroupData = {
    key: string;
    name: string;
    helper: GroupHelper;
    type: TType;
    value: unknown;
    rows: string[];
};
export declare class GroupHelper {
    private groupBy;
    private viewManager;
    private ops;
    get dataType(): TType;
    get column(): import("../../view/data-view-manager.js").DataViewColumnManager<unknown, Record<string, unknown>>;
    get columnId(): string;
    get type(): string;
    get data(): Record<string, unknown>;
    get addGroup(): ((text: string, oldData: {}) => {}) | undefined;
    readonly groups: GroupData[];
    readonly groupMap: Record<string, GroupData>;
    constructor(groupBy: GroupBy, config: GroupByConfig, type: TType, viewManager: DataViewManager, ops: {
        sortGroup: (keys: string[]) => string[];
        sortRow: (groupKey: string, rowIds: string[]) => string[];
        changeGroupSort: (keys: string[]) => void;
        changeRowSort: (groupKeys: string[], groupKey: string, keys: string[]) => void;
    });
    updateData: (data: NonNullable<unknown>) => void;
    updateValue(rows: string[], value: unknown): void;
    groupConfig(): GroupByConfig | undefined;
    defaultGroupProperty(key: string): GroupProperty;
    addToGroup(rowId: string, key: string): void;
    removeFromGroup(rowId: string, key: string): void;
    changeCardSort(groupKey: string, cardIds: string[]): void;
    changeGroupSort(keys: string[]): void;
    moveGroupTo(groupKey: string, position: InsertToPosition): void;
    moveCardTo(rowId: string, fromGroupKey: string | undefined, toGroupKey: string, position: InsertToPosition): void;
}
export declare const sortByManually: <T>(arr: T[], getId: (v: T) => string, ids: string[]) => T[];
//# sourceMappingURL=helper.d.ts.map