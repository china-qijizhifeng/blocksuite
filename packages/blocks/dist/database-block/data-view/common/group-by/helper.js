import { insertPositionToIndex } from '../../utils/insert.js';
import { groupByMatcher } from './matcher.js';
export class GroupHelper {
    get dataType() {
        return this.viewManager.columnGetDataType(this.groupBy.columnId);
    }
    get column() {
        return this.viewManager.columnGet(this.groupBy.columnId);
    }
    get columnId() {
        return this.groupBy.columnId;
    }
    get type() {
        return this.viewManager.columnGetType(this.columnId);
    }
    get data() {
        return this.viewManager.columnGetData(this.columnId);
    }
    get addGroup() {
        return this.viewManager.columnGetMeta(this.column.type).model.ops.addGroup;
    }
    constructor(groupBy, config, type, viewManager, ops) {
        this.groupBy = groupBy;
        this.viewManager = viewManager;
        this.ops = ops;
        this.updateData = (data) => {
            this.viewManager.columnUpdateData(this.columnId, data);
        };
        this.groupMap = Object.fromEntries(config.defaultKeys(type).map(({ key, value }) => [
            key,
            {
                key,
                name: config.groupName(type, value),
                helper: this,
                type,
                value,
                rows: [],
            },
        ]));
        this.viewManager.rows.forEach(id => {
            const value = this.viewManager.cellGetJsonValue(id, groupBy.columnId);
            const keys = config.valuesGroup(value, type);
            keys.forEach(({ key, value }) => {
                if (!this.groupMap[key]) {
                    this.groupMap[key] = {
                        key,
                        name: config.groupName(type, value),
                        helper: this,
                        value,
                        rows: [],
                        type,
                    };
                }
                this.groupMap[key].rows.push(id);
            });
        });
        const sortedGroup = ops.sortGroup(Object.keys(this.groupMap));
        sortedGroup.forEach(key => {
            this.groupMap[key].rows = ops.sortRow(key, this.groupMap[key].rows);
        });
        this.groups = sortedGroup.map(key => this.groupMap[key]);
    }
    updateValue(rows, value) {
        rows.forEach(id => {
            this.viewManager.cellUpdateValue(id, this.columnId, value);
        });
    }
    groupConfig() {
        return groupByMatcher.findData(v => v.name === this.groupBy.name);
    }
    defaultGroupProperty(key) {
        return {
            key,
            hide: false,
            manuallyCardSort: [],
        };
    }
    addToGroup(rowId, key) {
        const columnId = this.columnId;
        const addTo = this.groupConfig()?.addToGroup ?? (value => value);
        const newValue = addTo(this.groupMap[key].value, this.viewManager.cellGetJsonValue(rowId, columnId));
        this.viewManager.cellUpdateValue(rowId, columnId, newValue);
    }
    removeFromGroup(rowId, key) {
        const columnId = this.columnId;
        const remove = this.groupConfig()?.removeFromGroup ?? (() => undefined);
        const newValue = remove(this.groupMap[key].value, this.viewManager.cellGetJsonValue(rowId, columnId));
        this.viewManager.cellUpdateValue(rowId, columnId, newValue);
    }
    changeCardSort(groupKey, cardIds) {
        this.ops.changeRowSort(this.groups.map(v => v.key), groupKey, cardIds);
    }
    changeGroupSort(keys) {
        this.ops.changeGroupSort(keys);
    }
    moveGroupTo(groupKey, position) {
        const keys = this.groups.map(v => v.key);
        keys.splice(keys.findIndex(key => key === groupKey), 1);
        const index = insertPositionToIndex(position, keys, key => key);
        keys.splice(index, 0, groupKey);
        this.changeGroupSort(keys);
    }
    moveCardTo(rowId, fromGroupKey, toGroupKey, position) {
        if (fromGroupKey !== toGroupKey) {
            const columnId = this.columnId;
            const remove = this.groupConfig()?.removeFromGroup ?? (() => undefined);
            const group = fromGroupKey != null ? this.groupMap[fromGroupKey] : undefined;
            let newValue = undefined;
            if (group) {
                newValue = remove(group.value, this.viewManager.cellGetJsonValue(rowId, columnId));
            }
            const addTo = this.groupConfig()?.addToGroup ?? (value => value);
            newValue = addTo(this.groupMap[toGroupKey].value, newValue);
            this.viewManager.cellUpdateValue(rowId, columnId, newValue);
        }
        const rows = this.groupMap[toGroupKey].rows.filter(id => id !== rowId);
        const index = insertPositionToIndex(position, rows, id => id);
        rows.splice(index, 0, rowId);
        this.changeCardSort(toGroupKey, rows);
    }
}
export const sortByManually = (arr, getId, ids) => {
    const map = new Map(arr.map(v => [getId(v), v]));
    const result = [];
    for (const id of ids) {
        const value = map.get(id);
        if (value) {
            map.delete(id);
            result.push(value);
        }
    }
    result.push(...map.values());
    return result;
};
//# sourceMappingURL=helper.js.map