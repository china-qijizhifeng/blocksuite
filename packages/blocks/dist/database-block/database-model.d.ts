import type { Text } from '@blocksuite/store';
import { BlockModel } from '@blocksuite/store';
import type { InsertToPosition } from './data-view/types.js';
import type { DataViewDataType } from './data-view/view/data-view.js';
import type { Cell, Column, ColumnUpdater } from './types.js';
export type DatabaseBlockProps = {
    views: DataViewDataType[];
    title: Text;
    cells: SerializedCells;
    columns: Array<Column>;
    notes?: Record<string, string>;
};
export type SerializedCells = Record<string, Record<string, Cell>>;
export declare class DatabaseBlockModel extends BlockModel<DatabaseBlockProps> {
    getViewList(): (import("./data-view/view/data-view.js").BasicViewDataType<"table", {
        columns: import("./data-view/view/presets/table/define.js").TableViewColumn[];
        filter: import("./data-view/common/ast.js").FilterGroup;
        groupBy?: import("./data-view/common/types.js").GroupBy | undefined;
        groupProperties?: import("./data-view/common/types.js").GroupProperty[] | undefined;
        sort?: import("./data-view/common/types.js").Sort | undefined;
        header?: {
            titleColumn?: string | undefined;
            iconColumn?: string | undefined;
            imageColumn?: string | undefined;
        } | undefined;
    }> | import("./data-view/view/data-view.js").BasicViewDataType<"kanban", {
        columns: import("./data-view/view/presets/kanban/define.js").KanbanViewColumn[];
        filter: import("./data-view/common/ast.js").FilterGroup;
        groupBy?: import("./data-view/common/types.js").GroupBy | undefined;
        sort?: import("./data-view/common/types.js").Sort | undefined;
        header: {
            titleColumn?: string | undefined;
            iconColumn?: string | undefined;
            coverColumn?: string | undefined;
        };
        groupProperties: import("./data-view/common/types.js").GroupProperty[];
    }>)[];
    duplicateView(id: string): string;
    deleteView(id: string): void;
    updateView(id: string, update: (data: DataViewDataType) => Partial<DataViewDataType>): void;
    moveViewTo(id: string, position: InsertToPosition): void;
    applyViewsUpdate(): void;
    applyColumnUpdate(): void;
    findColumnIndex(id: Column['id']): number;
    getColumn(id: Column['id']): Column | undefined;
    addColumn(position: InsertToPosition, column: Omit<Column, 'id'> & {
        id?: string;
    }): string;
    updateColumn(id: string, updater: ColumnUpdater): string | undefined;
    deleteColumn(columnId: Column['id']): void;
    getCell(rowId: BlockModel['id'], columnId: Column['id']): Cell | null;
    updateCell(rowId: string, cell: Cell): void;
    deleteRows(rowIds: string[]): void;
    copyCellsByColumn(fromId: Column['id'], toId: Column['id']): void;
    updateCells(columnId: string, cells: Record<string, unknown>): void;
}
export declare const DatabaseBlockSchema: {
    version: number;
    model: {
        props: import("@blocksuite/store").PropsGetter<DatabaseBlockProps>;
        flavour: "affine:database";
    } & {
        role: "hub";
        version: number;
        parent: string[];
        children: string[];
    };
    onUpgrade?: ((data: DatabaseBlockProps, previousVersion: number, latestVersion: number) => void) | undefined;
    transformer?: (() => import("@blocksuite/store").BaseBlockTransformer<DatabaseBlockProps>) | undefined;
};
//# sourceMappingURL=database-model.d.ts.map