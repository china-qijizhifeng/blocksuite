import type { DataViewColumnManager } from '../view/data-view-manager.js';
import type { GroupData } from './group-by/helper.js';
/**
 * Class for computing statistics on a DataViewColumnManager column.
 * Supports various statistical operations such as counting, sum, mean, median, mode, max, min, range,
 * and specific operations for checkbox columns.
 */
export declare class ColumnDataStats<Column extends DataViewColumnManager = DataViewColumnManager> {
    private column;
    private dataViewManager;
    /**
     * Constructs a new ColumnDataStats instance.
     *
     * @param column The column for which statistics are computed.
     */
    constructor(column: Column);
    private _assertColumnType;
    private _getEmptyCellCount;
    private _getNonEmptyCellCount;
    private _getAllValuesAsString;
    private _getColumnValueCounts;
    private _getColValuesAsString;
    private _getColValuesAsNumber;
    private _getCheckBoxColValues;
    /**
     * Returns the number of cells in the column.
     */
    countAll(group?: GroupData): number;
    /**
     * Returns the number of cells in the column with a value in it.
     */
    countValues(group?: GroupData): number;
    /**
     * Returns the number of unique values in the column.
     */
    countUniqueValues(group?: GroupData): number;
    /**
     * Returns the number of cells in the column which are *empty*.
     */
    countEmpty(group?: GroupData): number;
    /**
     * Returns the number of cells in the column which are *not empty*.
     */
    countNonEmpty(group?: GroupData): number;
    /**
     * Returns the percent of cells in the column which are empty.
     */
    percentEmpty(group?: GroupData): number;
    /**
     * Returns the percent of cells in the column which are not empty.
     */
    percentNonEmpty(group?: GroupData): number;
    /**
     * Returns the sum of all values in the column.
     */
    sum(group?: GroupData): number;
    /**
     * Returns the average of values in the column.
     */
    mean(group?: GroupData): number;
    /**
     * Returns the median of the column.
     */
    median(group?: GroupData): number;
    /**
     * Returns the mode of the column.
     */
    mode(group?: GroupData): number;
    /**
     * Returns the maximum value in the column.
     */
    max(group?: GroupData): number;
    /**
     * Returns the minimum value in the column.
     */
    min(group?: GroupData): number;
    /**
     * Returns the range of the value in the column (max - min).
     */
    range(group?: GroupData): number;
    /**
     * Returns the number of checked checkboxes.
     */
    checked(group?: GroupData): number;
    /**
     * Returns the number of unchecked checkboxes.
     */
    notChecked(group?: GroupData): number;
    /**
     * Returns the percent of checked checkboxes.
     */
    percentChecked(group?: GroupData): number;
    /**
     * Returns the percent of unchecked checkboxes.
     */
    percentNotChecked(group?: GroupData): number;
}
//# sourceMappingURL=data-stats.d.ts.map