import { DEFAULT_COLUMN_WIDTH } from '../../view/presets/table/consts.js';
export class BaseDataSource {
    constructor() {
        this.context = new Map();
    }
    get detailSlots() {
        return {};
    }
    setContext(key, value) {
        this.context.set(key, value);
    }
    getContext(key) {
        return this.context.get(key);
    }
    cellChangeRenderValue(rowId, propertyId, value) {
        this.cellChangeValue(rowId, propertyId, value);
    }
    cellGetRenderValue(rowId, propertyId) {
        return this.cellGetValue(rowId, propertyId);
    }
    cellGetExtra(_rowId, _propertyId) {
        return undefined;
    }
    propertyGetReadonly(_propertyId) {
        return false;
    }
    propertyGetDefaultWidth(_propertyId) {
        return DEFAULT_COLUMN_WIDTH;
    }
    onCellUpdate(_rowId, _propertyId, _callback) {
        return {
            dispose: () => {
                //
            },
        };
    }
}
//# sourceMappingURL=base.js.map