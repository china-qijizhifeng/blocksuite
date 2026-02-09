import type { TemplateResult } from 'lit';
export type ColumnType = string;
export type ColumnTypeIcon = Record<ColumnType, TemplateResult>;
export interface Column<Data extends Record<string, unknown> = Record<string, unknown>> {
    id: string;
    type: ColumnType;
    name: string;
    data: Data;
}
export type StatCalcOpBaseTypes = 'none' | 'count-all' | 'count-values' | 'count-uni-values' | 'count-empty' | 'count-not-empty' | 'percent-empty' | 'percent-not-empty';
export type StatCalcOpMathTypes = StatCalcOpBaseTypes | 'sum' | 'avg' | 'median' | 'mode' | 'min' | 'max' | 'range';
export type StatCalcOpCheckboxTypes = StatCalcOpBaseTypes | 'checked' | 'not-checked' | 'percent-checked' | 'percent-not-checked';
export type StatCalcOpType = StatCalcOpBaseTypes | StatCalcOpMathTypes | StatCalcOpCheckboxTypes;
export declare const getTableContainer: (ele: HTMLElement) => HTMLElement;
export type CellFocus = {
    rowIndex: number;
    columnIndex: number;
};
export type MultiSelection = {
    start: number;
    end: number;
};
export type TableViewSelection = {
    viewId: string;
    type: 'table';
    groupKey?: string;
    rowsSelection?: MultiSelection;
    columnsSelection?: MultiSelection;
    focus: CellFocus;
    isEditing: boolean;
};
//# sourceMappingURL=types.d.ts.map