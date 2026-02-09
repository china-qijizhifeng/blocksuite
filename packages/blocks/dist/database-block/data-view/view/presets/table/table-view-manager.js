import { ColumnDataStats } from '../../../common/data-stats.js';
import { GroupHelper, sortByManually, } from '../../../common/group-by/helper.js';
import { groupByMatcher } from '../../../common/group-by/matcher.js';
import { defaultGroupBy } from '../../../common/view-manager.js';
import { evalFilter } from '../../../logical/eval-filter.js';
import { insertPositionToIndex } from '../../../utils/insert.js';
import { DataViewColumnManagerBase, DataViewManagerBase, } from '../../data-view-manager.js';
export class DataViewTableManager extends DataViewManagerBase {
    get type() {
        return this.view.mode;
    }
    get view() {
        return this.viewSource.view;
    }
    get filter() {
        return this.view.filter;
    }
    get id() {
        return this.view.id;
    }
    get name() {
        return this.view.name;
    }
    get columns() {
        return this.columnsWithoutFilter.filter(id => !this.columnGetHide(id));
    }
    get detailColumns() {
        return this.columnsWithoutFilter.filter(id => this.columnGetType(id) !== 'title');
    }
    get columnsWithoutFilter() {
        const needShow = new Set(this.dataSource.properties);
        const result = [];
        this.view.columns.forEach(v => {
            if (needShow.has(v.id)) {
                result.push(v.id);
                needShow.delete(v.id);
            }
        });
        result.push(...needShow);
        return result;
    }
    get readonly() {
        return this.viewSource.readonly;
    }
    get isDeleted() {
        return this.viewSource.isDeleted();
    }
    get header() {
        return (this.view.header ?? {
            titleColumn: this.columnsWithoutFilter.find(id => this.columnGetType(id) === 'title'),
            iconColumn: 'type',
        });
    }
    get groupProperties() {
        return this.view.groupProperties ?? [];
    }
    get groupHelper() {
        const groupBy = this.view.groupBy;
        if (!groupBy) {
            return;
        }
        const result = groupByMatcher.find(v => v.data.name === groupBy.name);
        if (!result) {
            return;
        }
        const groupByConfig = result.data;
        const type = this.columnGetDataType(groupBy.columnId);
        if (!this.checkGroup(groupBy.columnId, result.type, type)) {
            // reset groupBy config
            return this.groupHelper;
        }
        return new GroupHelper(groupBy, groupByConfig, type, this, {
            sortGroup: ids => sortByManually(ids, v => v, this.groupProperties.map(v => v.key)),
            sortRow: (key, ids) => {
                const property = this.groupProperties.find(v => v.key === key);
                return sortByManually(ids, v => v, property?.manuallyCardSort ?? []);
            },
            changeGroupSort: keys => {
                const map = new Map(this.groupProperties.map(v => [v.key, v]));
                this.updateView(() => {
                    return {
                        groupProperties: keys.map(key => {
                            const property = map.get(key);
                            if (property) {
                                return property;
                            }
                            return {
                                key,
                                hide: false,
                                manuallyCardSort: [],
                            };
                        }),
                    };
                });
            },
            changeRowSort: (groupKeys, groupKey, keys) => {
                const map = new Map(this.groupProperties.map(v => [v.key, v]));
                this.updateView(() => {
                    return {
                        groupProperties: groupKeys.map(key => {
                            if (key === groupKey) {
                                const group = map.get(key);
                                return group
                                    ? {
                                        ...group,
                                        manuallyCardSort: keys,
                                    }
                                    : {
                                        key,
                                        hide: false,
                                        manuallyCardSort: keys,
                                    };
                            }
                            else {
                                return (map.get(key) ?? {
                                    key,
                                    hide: false,
                                    manuallyCardSort: [],
                                });
                            }
                        }),
                    };
                });
            },
        });
    }
    updateView(updater) {
        this.syncView();
        this.viewSource.updateView(updater);
    }
    syncView() {
        if (this.view.columns.length === this.columns.length) {
            return;
        }
        this.viewSource.updateView(_view => {
            return {
                columns: this.columnsWithoutFilter.map(id => {
                    const column = this.columnGet(id);
                    return {
                        id: column.id,
                        hide: column.hide,
                        width: column.width,
                        statCalcType: column.statCalcOp,
                    };
                }),
            };
        });
    }
    updateFilter(filter) {
        this.updateView(() => {
            return {
                filter,
            };
        });
    }
    updateName(name) {
        this.updateView(() => {
            return {
                name,
            };
        });
    }
    rowMove(rowId, position, fromGroup, toGroup) {
        if (toGroup == null) {
            super.rowMove(rowId, position);
            return;
        }
        this.groupHelper?.moveCardTo(rowId, fromGroup, toGroup, position);
    }
    columnGet(columnId) {
        return new DataViewTableColumnManager(columnId, this);
    }
    columnGetWidth(columnId) {
        return (this.view.columns.find(v => v.id === columnId)?.width ??
            this.dataSource.propertyGetDefaultWidth(columnId));
    }
    columnMove(columnId, toAfterOfColumn) {
        this.updateView(view => {
            const columnIndex = view.columns.findIndex(v => v.id === columnId);
            if (columnIndex < 0) {
                return {};
            }
            const columns = [...view.columns];
            const [column] = columns.splice(columnIndex, 1);
            const index = insertPositionToIndex(toAfterOfColumn, columns);
            columns.splice(index, 0, column);
            return {
                columns,
            };
        });
    }
    columnUpdateWidth(columnId, width) {
        this.updateView(view => {
            return {
                columns: view.columns.map(v => v.id === columnId
                    ? {
                        ...v,
                        width: width,
                    }
                    : v),
            };
        });
    }
    rowAdd(insertPosition, groupKey) {
        const id = super.rowAdd(insertPosition);
        if (!groupKey) {
            return id;
        }
        this.groupHelper?.addToGroup(id, groupKey);
        return id;
    }
    isShow(rowId) {
        if (this.filter.conditions.length) {
            const rowMap = Object.fromEntries(this.columnManagerList.map(column => [
                column.id,
                column.getJsonValue(rowId),
            ]));
            return evalFilter(this.filter, rowMap);
        }
        return true;
    }
    columnUpdateHide(columnId, hide) {
        this.updateView(view => {
            return {
                columns: view.columns.map(v => v.id === columnId
                    ? {
                        ...v,
                        hide,
                    }
                    : v),
            };
        });
    }
    columnGetHide(columnId) {
        return this.view.columns.find(v => v.id === columnId)?.hide ?? false;
    }
    duplicateView() {
        this.viewSource.duplicate();
    }
    deleteView() {
        this.viewSource.delete();
    }
    isInHeader(columnId) {
        return Object.values(this.header).some(v => v === columnId);
    }
    hasHeader(rowId) {
        return Object.values(this.header).some(id => this.cellGetValue(rowId, id));
    }
    changeGroup(columnId) {
        if (columnId == null) {
            this.updateView(() => {
                return {
                    groupBy: undefined,
                };
            });
            return;
        }
        const column = this.columnGet(columnId);
        this.updateView(_view => {
            return {
                groupBy: defaultGroupBy(this.columnGetMeta(column.type), column.id, column.data),
            };
        });
    }
    checkGroup(columnId, type, target) {
        if (!groupByMatcher.isMatched(type, target)) {
            this.changeGroup(columnId);
            return false;
        }
        return true;
    }
    columnGetStatCalcOp(columnId) {
        return (this.view.columns.find(v => v.id === columnId)?.statCalcType ?? 'none');
    }
    columnUpdateStatCalcOp(columnId, op) {
        this.updateView(view => {
            return {
                columns: view.columns.map(v => v.id === columnId
                    ? {
                        ...v,
                        statCalcType: op,
                    }
                    : v),
            };
        });
    }
}
export class DataViewTableColumnManager extends DataViewColumnManagerBase {
    get statCalcOp() {
        return this.dataViewManager.columnGetStatCalcOp(this.id);
    }
    get width() {
        return this.dataViewManager.columnGetWidth(this.id);
    }
    constructor(propertyId, dataViewManager) {
        super(propertyId, dataViewManager);
        this.dataViewManager = dataViewManager;
        this.stats = new ColumnDataStats(this);
    }
    updateStatCalcOp(type) {
        return this.dataViewManager.columnUpdateStatCalcOp(this.id, type);
    }
    updateWidth(width) {
        this.dataViewManager.columnUpdateWidth(this.id, width);
    }
}
//# sourceMappingURL=table-view-manager.js.map