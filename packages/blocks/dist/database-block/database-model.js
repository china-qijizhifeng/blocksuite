import { BlockModel, defineBlockSchema, nanoid } from '@blocksuite/store';
import { arrayMove, insertPositionToIndex } from './data-view/utils/insert.js';
export class DatabaseBlockModel extends BlockModel {
    getViewList() {
        return this.views;
    }
    duplicateView(id) {
        const newId = this.doc.generateBlockId();
        this.doc.transact(() => {
            const index = this.views.findIndex(v => v.id === id);
            const view = this.views[index];
            if (view) {
                this.views.splice(index + 1, 0, JSON.parse(JSON.stringify({ ...view, id: newId })));
            }
        });
        return newId;
    }
    deleteView(id) {
        this.doc.captureSync();
        this.doc.transact(() => {
            this.views = this.views.filter(v => v.id !== id);
        });
    }
    updateView(id, update) {
        this.doc.transact(() => {
            this.views = this.views.map(v => {
                if (v.id !== id) {
                    return v;
                }
                return { ...v, ...update(v) };
            });
        });
        this.applyViewsUpdate();
    }
    moveViewTo(id, position) {
        this.doc.transact(() => {
            this.views = arrayMove(this.views, v => v.id === id, arr => insertPositionToIndex(position, arr));
        });
        this.applyViewsUpdate();
    }
    applyViewsUpdate() {
        this.doc.updateBlock(this, {
            views: this.views,
        });
    }
    applyColumnUpdate() {
        this.doc.updateBlock(this, {
            columns: this.columns,
        });
    }
    findColumnIndex(id) {
        return this.columns.findIndex(v => v.id === id);
    }
    getColumn(id) {
        return this.columns.find(v => v.id === id);
    }
    addColumn(position, column) {
        const id = column.id ?? this.doc.generateBlockId();
        if (this.columns.some(v => v.id === id)) {
            return id;
        }
        this.doc.transact(() => {
            const col = {
                ...column,
                id,
            };
            this.columns.splice(insertPositionToIndex(position, this.columns), 0, col);
        });
        return id;
    }
    updateColumn(id, updater) {
        const index = this.columns.findIndex(v => v.id === id);
        if (index == null) {
            return;
        }
        this.doc.transact(() => {
            const column = this.columns[index];
            this.columns[index] = { ...column, ...updater(column) };
        });
        return id;
    }
    deleteColumn(columnId) {
        const index = this.findColumnIndex(columnId);
        if (index < 0)
            return;
        this.doc.transact(() => {
            this.columns.splice(index, 1);
        });
    }
    getCell(rowId, columnId) {
        if (columnId === 'title') {
            return {
                columnId: 'title',
                value: rowId,
            };
        }
        const yRow = this.cells[rowId];
        const yCell = yRow?.[columnId] ?? null;
        if (!yCell)
            return null;
        return {
            columnId: yCell.columnId,
            value: yCell.value,
        };
    }
    updateCell(rowId, cell) {
        const hasRow = rowId in this.cells;
        if (!hasRow) {
            this.cells[rowId] = Object.create(null);
        }
        this.doc.transact(() => {
            this.cells[rowId][cell.columnId] = {
                columnId: cell.columnId,
                value: cell.value,
            };
        });
    }
    deleteRows(rowIds) {
        this.doc.transact(() => {
            for (const rowId of rowIds) {
                delete this.cells[rowId];
            }
        });
    }
    copyCellsByColumn(fromId, toId) {
        this.doc.transact(() => {
            Object.keys(this.cells).forEach(rowId => {
                const cell = this.cells[rowId][fromId];
                if (cell) {
                    this.cells[rowId][toId] = {
                        ...cell,
                        columnId: toId,
                    };
                }
            });
        });
    }
    updateCells(columnId, cells) {
        this.doc.transact(() => {
            Object.entries(cells).forEach(([rowId, value]) => {
                this.cells[rowId][columnId] = {
                    columnId,
                    value,
                };
            });
        });
    }
}
const migration = {
    toV3: data => {
        const id = nanoid();
        // @ts-expect-error
        const title = data['titleColumnName'];
        // @ts-expect-error
        const width = data['titleColumnWidth'];
        // @ts-expect-error
        delete data['titleColumnName'];
        // @ts-expect-error
        delete data['titleColumnWidth'];
        data.columns.unshift({
            id,
            type: 'title',
            name: title,
            data: {},
        });
        data.views.forEach(view => {
            if (view.mode === 'table') {
                view.columns.unshift({
                    id,
                    width,
                    statCalcType: 'none',
                });
            }
        });
    },
};
export const DatabaseBlockSchema = defineBlockSchema({
    flavour: 'affine:database',
    props: (internal) => ({
        views: [],
        title: internal.Text(),
        cells: Object.create(null),
        columns: [],
    }),
    metadata: {
        role: 'hub',
        version: 3,
        parent: ['affine:note'],
        children: ['affine:paragraph', 'affine:list'],
    },
    toModel: () => new DatabaseBlockModel(),
    onUpgrade: (data, previousVersion, latestVersion) => {
        if (previousVersion < 3 && latestVersion >= 3) {
            migration.toV3(data);
        }
    },
});
//# sourceMappingURL=database-model.js.map