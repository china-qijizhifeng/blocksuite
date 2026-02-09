import { assertExists, Slot } from '@blocksuite/global/utils';
export class DataViewManagerBase {
    constructor() {
        this.searchString = '';
        this.slots = {
            update: new Slot(),
        };
    }
    get dataSource() {
        assertExists(this._dataSource, 'data source is not set');
        return this._dataSource;
    }
    get viewSource() {
        assertExists(this._viewSource, 'view source is not set');
        return this._viewSource;
    }
    get rows() {
        return this.filteredRows(this.searchString);
    }
    get columnManagerList() {
        return this.columns.map(id => this.columnGet(id));
    }
    get readonly() {
        return false;
    }
    get allColumnConfig() {
        return this.dataSource.addPropertyConfigList;
    }
    get detailSlots() {
        return this.dataSource.detailSlots;
    }
    get vars() {
        return this.columnsWithoutFilter.map(id => {
            const v = this.columnGet(id);
            const propertyMeta = this.dataSource.getPropertyMeta(v.type);
            return {
                id: v.id,
                name: v.name,
                type: propertyMeta.model.dataType(v.data),
                icon: v.icon,
            };
        });
    }
    get filterVisible() {
        return this._filterVisible ?? this.filter.conditions.length > 0;
    }
    filteredRows(searchString) {
        return this.dataSource.rows.filter(id => {
            if (searchString) {
                const containsSearchString = this.columns.some(columnId => {
                    return this.cellGetStringValue(id, columnId)
                        ?.toLowerCase()
                        .includes(searchString?.toLowerCase());
                });
                if (!containsSearchString) {
                    return false;
                }
            }
            return this.isShow(id);
        });
    }
    getContext(key) {
        return this.dataSource.getContext(key);
    }
    init(dataSource, viewSource) {
        this._dataSource = dataSource;
        this._viewSource = viewSource;
        this._dataSource.slots.update
            .flatMap(() => ({ viewId: this.id }))
            .pipe(this.slots.update);
        this._viewSource.updateSlot.pipe(this.slots.update);
    }
    setSearch(str) {
        this.searchString = str;
        this.slots.update.emit({ viewId: this.id });
    }
    onCellUpdate(rowId, columnId, callback) {
        return this.dataSource.onCellUpdate(rowId, columnId, callback);
    }
    cellGetValue(rowId, columnId) {
        return this.dataSource
            .getPropertyMeta(this.columnGetType(columnId))
            .model.formatValue(this.dataSource.cellGetValue(rowId, columnId), this.columnGetData(columnId));
    }
    cellGetJsonValue(rowId, columnId) {
        return this.dataSource
            .getPropertyMeta(this.columnGetType(columnId))
            .model.toJson(this.dataSource.cellGetValue(rowId, columnId), this.columnGetData(columnId));
    }
    cellGetRenderValue(rowId, columnId) {
        return this.dataSource.cellGetRenderValue(rowId, columnId);
    }
    cellGetStringValue(rowId, columnId) {
        return (this.dataSource
            .getPropertyMeta(this.columnGetType(columnId))
            .model.toString(this.dataSource.cellGetValue(rowId, columnId), this.columnGetData(columnId)) ?? '');
    }
    cellGetExtra(rowId, columnId) {
        return this.dataSource.cellGetExtra(rowId, columnId);
    }
    cellSetValueFromString(columnId, cellData) {
        return (this.dataSource
            .getPropertyMeta(this.columnGetType(columnId))
            .model.fromString(cellData, this.columnGetData(columnId)) ?? '');
    }
    cellUpdateRenderValue(rowId, columnId, value) {
        this.dataSource.cellChangeValue(rowId, columnId, value);
    }
    cellUpdateValue(rowId, columnId, value) {
        this.dataSource.cellChangeValue(rowId, columnId, value);
    }
    columnAdd(position, type) {
        const id = this.dataSource.propertyAdd(position, type);
        this.columnMove(id, position);
        return id;
    }
    columnDelete(columnId) {
        this.dataSource.propertyDelete(columnId);
    }
    columnDuplicate(columnId) {
        const id = this.dataSource.propertyDuplicate(columnId);
        this.columnMove(id, {
            before: false,
            id: columnId,
        });
    }
    columnGetMeta(type) {
        return this.dataSource.getPropertyMeta(type);
    }
    columnGetData(columnId) {
        return this.dataSource.propertyGetData(columnId);
    }
    columnGetDataType(columnId) {
        return this.dataSource
            .getPropertyMeta(this.columnGetType(columnId))
            .model.dataType(this.columnGetData(columnId));
    }
    columnGetIdByIndex(index) {
        return this.columns[index];
    }
    columnGetReadonly(columnId) {
        return this.dataSource.propertyGetReadonly(columnId);
    }
    columnGetIndex(columnId) {
        return this.columns.indexOf(columnId);
    }
    columnGetName(columnId) {
        return this.dataSource.propertyGetName(columnId);
    }
    columnGetNextColumn(columnId) {
        return this.columnGet(this.columnGetIdByIndex(this.columnGetIndex(columnId) + 1));
    }
    columnGetPreColumn(columnId) {
        return this.columnGet(this.columnGetIdByIndex(this.columnGetIndex(columnId) - 1));
    }
    columnGetType(columnId) {
        return this.dataSource.propertyGetType(columnId);
    }
    columnUpdateData(columnId, data) {
        this.dataSource.propertyChangeData(columnId, data);
    }
    columnUpdateName(columnId, name) {
        this.dataSource.propertyChangeName(columnId, name);
    }
    columnUpdateType(columnId, type) {
        this.dataSource.propertyChangeType(columnId, type);
    }
    rowAdd(insertPosition) {
        return this.dataSource.rowAdd(insertPosition);
    }
    rowDelete(ids) {
        this.dataSource.rowDelete(ids);
    }
    getIcon(type) {
        return this.dataSource.getPropertyMeta(type).renderer.icon;
    }
    filterSetVisible(visible) {
        this._filterVisible = visible;
        this.slots.update.emit({ viewId: this.id });
    }
    rowMove(rowId, position) {
        this.dataSource.rowMove(rowId, position);
    }
}
export class DataViewColumnManagerBase {
    constructor(propertyId, dataViewManager) {
        this.propertyId = propertyId;
        this.dataViewManager = dataViewManager;
    }
    get index() {
        return this.dataViewManager.columnGetIndex(this.id);
    }
    get data() {
        return this.dataViewManager.columnGetData(this.id);
    }
    get hide() {
        return this.dataViewManager.columnGetHide(this.id);
    }
    get id() {
        return this.propertyId;
    }
    get isFirst() {
        return this.dataViewManager.columnGetIndex(this.id) === 0;
    }
    get isLast() {
        return (this.dataViewManager.columnGetIndex(this.id) ===
            this.dataViewManager.columnManagerList.length - 1);
    }
    get name() {
        return this.dataViewManager.columnGetName(this.id);
    }
    get renderer() {
        return this.dataViewManager.columnGetMeta(this.type).renderer.cellRenderer;
    }
    get detailRenderer() {
        return (this.dataViewManager.columnGetMeta(this.type).renderer
            .detailCellRenderer ?? this.renderer);
    }
    get type() {
        return this.dataViewManager.columnGetType(this.id);
    }
    get dataType() {
        return this.dataViewManager.columnGetDataType(this.id);
    }
    isEmpty(rowId) {
        return this.dataViewManager
            .columnGetMeta(this.type)
            .model.ops.isEmpty(this.getValue(rowId));
    }
    getValue(rowId) {
        return this.dataViewManager.cellGetRenderValue(rowId, this.id);
    }
    getExtra(rowId) {
        return this.dataViewManager.cellGetExtra(rowId, this.id);
    }
    setValue(rowId, value) {
        this.dataViewManager.cellUpdateRenderValue(rowId, this.id, value);
    }
    updateData(updater) {
        const data = this.dataViewManager.columnGetData(this.id);
        this.dataViewManager.columnUpdateData(this.id, {
            ...data,
            ...updater(data),
        });
    }
    updateHide(hide) {
        this.dataViewManager.columnUpdateHide(this.id, hide);
    }
    updateName(name) {
        this.dataViewManager.columnUpdateName(this.id, name);
    }
    get delete() {
        return () => this.dataViewManager.columnDelete(this.id);
    }
    get duplicate() {
        return () => this.dataViewManager.columnDuplicate(this.id);
    }
    get updateType() {
        return type => this.dataViewManager.columnUpdateType(this.id, type);
    }
    get readonly() {
        return (this.dataViewManager.readonly ||
            this.dataViewManager.columnGetReadonly(this.id));
    }
    getJsonValue(rowId) {
        return this.dataViewManager.cellGetJsonValue(rowId, this.id);
    }
    getStringValue(rowId) {
        return this.dataViewManager.cellGetStringValue(rowId, this.id);
    }
    setValueFromString(value) {
        const result = this.dataViewManager.cellSetValueFromString(this.id, value);
        if (result.data) {
            this.dataViewManager.columnUpdateData(this.id, result.data);
        }
        return result.value;
    }
    get icon() {
        if (!this.type)
            return undefined;
        return this.dataViewManager.getIcon(this.type);
    }
    onCellUpdate(rowId, callback) {
        return this.dataViewManager.onCellUpdate(rowId, this.id, callback);
    }
}
//# sourceMappingURL=data-view-manager.js.map