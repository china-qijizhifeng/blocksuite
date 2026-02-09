import { GroupHelper, sortByManually, } from '../../../common/group-by/helper.js';
import { groupByMatcher } from '../../../common/group-by/matcher.js';
import { defaultGroupBy } from '../../../common/view-manager.js';
import { evalFilter } from '../../../logical/eval-filter.js';
import { insertPositionToIndex } from '../../../utils/insert.js';
import { DataViewColumnManagerBase, DataViewManagerBase, } from '../../data-view-manager.js';
export class DataViewKanbanManager extends DataViewManagerBase {
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
            sortGroup: ids => sortByManually(ids, v => v, this.view.groupProperties.map(v => v.key)),
            sortRow: (key, ids) => {
                const property = this.view.groupProperties.find(v => v.key === key);
                return sortByManually(ids, v => v, property?.manuallyCardSort ?? []);
            },
            changeGroupSort: keys => {
                const map = new Map(this.view.groupProperties.map(v => [v.key, v]));
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
                const map = new Map(this.view.groupProperties.map(v => [v.key, v]));
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
    get type() {
        return this.view.mode;
    }
    get header() {
        return this.view.header;
    }
    get isDeleted() {
        return this.viewSource.isDeleted();
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
    columnGet(columnId) {
        return new DataViewKanbanColumnManager(columnId, this);
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
    rowMove(rowId, position) {
        this.dataSource.rowMove(rowId, position);
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
    checkGroup(columnId, type, target) {
        if (!groupByMatcher.isMatched(type, target)) {
            this.changeGroup(columnId);
            return false;
        }
        return true;
    }
    changeGroup(columnId) {
        const column = this.columnGet(columnId);
        this.updateView(_view => {
            return {
                groupBy: defaultGroupBy(this.columnGetMeta(column.type), column.id, column.data),
            };
        });
    }
    addCard(position, group) {
        const id = this.rowAdd(position);
        this.groupHelper?.addToGroup(id, group);
        return id;
    }
    isInHeader(columnId) {
        const hd = this.view.header;
        return (hd.titleColumn === columnId ||
            hd.iconColumn === columnId ||
            hd.coverColumn === columnId);
    }
    hasHeader(_rowId) {
        const hd = this.view.header;
        return !!hd.titleColumn || !!hd.iconColumn || !!hd.coverColumn;
    }
    getHeaderTitle(_rowId) {
        const columnId = this.view.header.titleColumn;
        if (!columnId) {
            return;
        }
        return this.columnGet(columnId);
    }
    getHeaderIcon(_rowId) {
        const columnId = this.view.header.iconColumn;
        if (!columnId) {
            return;
        }
        return this.columnGet(columnId);
    }
    getHeaderCover(_rowId) {
        const columnId = this.view.header.coverColumn;
        if (!columnId) {
            return;
        }
        return this.columnGet(columnId);
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
}
export class DataViewKanbanColumnManager extends DataViewColumnManagerBase {
    constructor(propertyId, dataViewManager) {
        super(propertyId, dataViewManager);
        this.dataViewManager = dataViewManager;
    }
}
//# sourceMappingURL=kanban-view-manager.js.map