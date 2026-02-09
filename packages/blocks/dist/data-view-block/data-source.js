import { assertExists, Slot } from '@blocksuite/global/utils';
import { databaseBlockAllColumnMap } from '../database-block/columns/index.js';
import { BaseDataSource, columnPresets, createUniComponentFromWebComponent, insertPositionToIndex, } from '../database-block/data-view/index.js';
import { BlockRenderer } from '../database-block/detail-panel/block-renderer.js';
import { blockMetaMap } from './block-meta/index.js';
import { queryBlockAllColumnMap, queryBlockColumns } from './columns/index.js';
export class BlockQueryDataSource extends BaseDataSource {
    get workspace() {
        return this.host.doc.collection;
    }
    get blocks() {
        return [...this.blockMap.values()];
    }
    get rows() {
        return this.blocks.map(v => v.id);
    }
    get properties() {
        return [
            ...this.meta.properties.map(v => v.key),
            ...this.block.columns.map(v => v.id),
        ];
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get addPropertyConfigList() {
        return queryBlockColumns.map(v => v.model);
    }
    get detailSlots() {
        return {
            ...super.detailSlots,
            header: createUniComponentFromWebComponent(BlockRenderer),
        };
    }
    constructor(host, block, config) {
        super();
        this.host = host;
        this.block = block;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.columnMetaMap = new Map();
        this.docDisposeMap = new Map();
        this.blockMap = new Map();
        this.slots = {
            update: new Slot(),
        };
        this.meta = blockMetaMap[config.type];
        for (const property of this.meta.properties) {
            this.columnMetaMap.set(property.columnMeta.type, property.columnMeta);
        }
        for (const collection of this.workspace.docs.values()) {
            for (const block of collection.getDoc().blocks.values()) {
                if (this.meta.selector(block)) {
                    this.blockMap.set(block.id, block);
                }
            }
        }
        this.workspace.docs.forEach(doc => {
            this.listenToDoc(doc.getDoc());
        });
        this.workspace.slots.docAdded.on(id => {
            const doc = this.workspace.getDoc(id);
            if (doc) {
                this.listenToDoc(doc);
            }
        });
        this.workspace.slots.docRemoved.on(id => {
            this.docDisposeMap.get(id)?.();
        });
    }
    getProperty(propertyId) {
        const property = this.meta.properties.find(v => v.key === propertyId);
        assertExists(property, `property ${propertyId} not found`);
        return property;
    }
    newColumnName() {
        let i = 1;
        while (this.block.columns.some(column => column.name === `Column ${i}`)) {
            i++;
        }
        return `Column ${i}`;
    }
    getViewColumn(id) {
        return this.block.columns.find(v => v.id === id);
    }
    listenToDoc(doc) {
        this.docDisposeMap.set(doc.id, doc.slots.blockUpdated.on(v => {
            if (v.type === 'add') {
                const blockById = doc.getBlock(v.id);
                if (blockById && this.meta.selector(blockById)) {
                    this.blockMap.set(v.id, blockById);
                }
            }
            else if (v.type === 'delete') {
                this.blockMap.delete(v.id);
            }
            this.slots.update.emit();
        }).dispose);
    }
    cellChangeValue(rowId, propertyId, value) {
        const viewColumn = this.getViewColumn(propertyId);
        if (viewColumn) {
            this.block.cells[rowId] = {
                ...this.block.cells[rowId],
                [propertyId]: value,
            };
            return;
        }
        const block = this.blockMap.get(rowId);
        if (block) {
            this.meta.properties
                .find(v => v.key === propertyId)
                ?.set?.(block.model, value);
        }
    }
    cellGetValue(rowId, propertyId) {
        const viewColumn = this.getViewColumn(propertyId);
        if (viewColumn) {
            return this.block.cells[rowId]?.[propertyId];
        }
        const block = this.blockMap.get(rowId);
        if (block) {
            return this.getProperty(propertyId)?.get(block.model);
        }
        return;
    }
    propertyChangeData(propertyId, data) {
        const viewColumn = this.getViewColumn(propertyId);
        if (viewColumn) {
            viewColumn.data = data;
        }
    }
    propertyChangeName(propertyId, name) {
        const viewColumn = this.getViewColumn(propertyId);
        if (viewColumn) {
            viewColumn.name = name;
        }
    }
    propertyChangeType(propertyId, toType) {
        const viewColumn = this.getViewColumn(propertyId);
        if (viewColumn) {
            const currentType = viewColumn.type;
            const currentData = viewColumn.data;
            const rows = this.rows;
            const currentCells = rows.map(rowId => this.cellGetValue(rowId, propertyId));
            const result = databaseBlockAllColumnMap[currentType].model?.convertCell(toType, currentData, currentCells) ?? {
                column: databaseBlockAllColumnMap[toType].model.defaultData(),
                cells: currentCells.map(() => undefined),
            };
            this.block.doc.captureSync();
            viewColumn.type = toType;
            viewColumn.data = result.column;
            currentCells.forEach((value, i) => {
                if (value != null || result.cells[i] != null) {
                    this.block.cells[rows[i]] = {
                        ...this.block.cells[rows[i]],
                        [propertyId]: result.cells[i],
                    };
                }
            });
        }
    }
    propertyDelete(_id) {
        const index = this.block.columns.findIndex(v => v.id === _id);
        if (index >= 0) {
            this.block.columns.splice(index, 1);
        }
    }
    propertyGetData(propertyId) {
        const viewColumn = this.getViewColumn(propertyId);
        if (viewColumn) {
            return viewColumn.data;
        }
        const property = this.getProperty(propertyId);
        return (property.getColumnData?.(this.blocks[0].model) ??
            property.columnMeta.model.defaultData());
    }
    propertyGetReadonly(propertyId) {
        const viewColumn = this.getViewColumn(propertyId);
        if (viewColumn) {
            return false;
        }
        if (propertyId === 'type')
            return true;
        return this.getProperty(propertyId)?.set == null;
    }
    propertyGetName(propertyId) {
        const viewColumn = this.getViewColumn(propertyId);
        if (viewColumn) {
            return viewColumn.name;
        }
        if (propertyId === 'type') {
            return 'Block Type';
        }
        return this.getProperty(propertyId)?.name ?? '';
    }
    propertyGetType(propertyId) {
        const viewColumn = this.getViewColumn(propertyId);
        if (viewColumn) {
            return viewColumn.type;
        }
        if (propertyId === 'type') {
            return 'image';
        }
        return this.getProperty(propertyId).columnMeta.type;
    }
    propertyDuplicate(_columnId) {
        throw new Error('Method not implemented.');
    }
    rowAdd(_insertPosition) {
        throw new Error('Method not implemented.');
    }
    rowDelete(_ids) {
        throw new Error('Method not implemented.');
    }
    propertyGetDefaultWidth(propertyId) {
        if (this.propertyGetType(propertyId) === 'title') {
            return 260;
        }
        return super.propertyGetDefaultWidth(propertyId);
    }
    onCellUpdate(rowId, propertyId, callback) {
        const viewColumn = this.getViewColumn(propertyId);
        if (viewColumn) {
            return this.block.propsUpdated.on(callback);
        }
        const block = this.blockMap.get(rowId);
        assertExists(block, `block ${rowId} not found`);
        return this.getProperty(propertyId).updated(block.model, callback);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getPropertyMeta(type) {
        const meta = this.columnMetaMap.get(type);
        if (meta) {
            return meta;
        }
        return queryBlockAllColumnMap[type];
    }
    rowMove(_rowId, _position) { }
    propertyAdd(insertToPosition, type) {
        const doc = this.block.doc;
        doc.captureSync();
        const column = databaseBlockAllColumnMap[type ?? columnPresets.multiSelectColumnConfig.type].model.create(this.newColumnName());
        const id = doc.generateBlockId();
        if (this.block.columns.some(v => v.id === id)) {
            return id;
        }
        doc.transact(() => {
            const col = {
                ...column,
                id,
            };
            this.block.columns.splice(insertPositionToIndex(insertToPosition, this.block.columns), 0, col);
        });
        return id;
    }
}
//# sourceMappingURL=data-source.js.map