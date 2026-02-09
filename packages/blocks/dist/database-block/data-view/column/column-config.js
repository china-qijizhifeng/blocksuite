import { createRendererConfig } from './renderer.js';
export class ColumnConfig {
    constructor(type, ops) {
        this.type = type;
        this.ops = ops;
        this.convertMap = new Map();
        this.create = (name, data) => {
            return {
                type: this.type,
                name,
                statCalcOp: 'none',
                data: data ?? this.ops.defaultData(),
            };
        };
        this.registerConvert = (to, convert) => {
            this.convertMap.set(to, convert);
        };
    }
    defaultData() {
        return this.ops.defaultData();
    }
    createWithId(id, name, data) {
        return {
            id,
            type: this.type,
            name,
            data: data ?? this.ops.defaultData(),
        };
    }
    dataType(data) {
        return this.ops.type(data);
    }
    toString(cellData, colData) {
        return this.ops.cellToString(cellData, colData);
    }
    toJson(cellData, colData) {
        return this.ops.cellToJson(cellData, colData);
    }
    formatValue(cellData, colData) {
        return cellData === undefined
            ? undefined
            : this.ops.formatValue?.(cellData, colData) ?? cellData;
    }
    fromString(cellData, colData) {
        return this.ops.cellFromString(cellData, colData);
    }
    convertCell(to, column, cells) {
        return this.convertMap.get(to)?.(column, cells);
    }
    get name() {
        return this.ops.name;
    }
}
export const columnType = (type) => ({
    type: type,
    modelConfig: (ops) => {
        const model = new ColumnConfig(type, ops);
        return {
            type,
            model,
            create: model.create,
            addConvert: model.registerConvert,
            renderConfig: (renderer) => ({
                type,
                model,
                renderer: createRendererConfig({
                    ...renderer,
                    type,
                }),
            }),
        };
    },
});
//# sourceMappingURL=column-config.js.map