import type { GroupData } from '../../../common/group-by/helper.js';
import type { DataViewTableColumnManager } from './table-view-manager.js';
import type { StatCalcOpType } from './types.js';
export interface StatCalcOp {
    type: StatCalcOpType;
    label: string;
    display: string;
    calculate: (column: DataViewTableColumnManager, group?: GroupData) => StatOpResult;
}
export type ColumnDataType = 'number' | 'checkbox' | 'other';
export type StatOpResult = {
    value: number;
    displayFormat: '%' | 'x10';
};
export declare const commonCalcOps: StatCalcOp[];
export declare const numberColCalcOps: StatCalcOp[];
export declare const checkboxCalcOps: StatCalcOp[];
export declare function getStatCalcOperationFromType(type: StatCalcOpType): StatCalcOp;
//# sourceMappingURL=stat-ops.d.ts.map