import type { FilterGroup } from '../../../common/ast.js';
import { GroupHelper } from '../../../common/group-by/helper.js';
import type { TType } from '../../../logical/typesystem.js';
import type { InsertToPosition } from '../../../types.js';
import { DataViewColumnManagerBase, DataViewManagerBase } from '../../data-view-manager.js';
import type { KanbanViewData } from './define.js';
export declare class DataViewKanbanManager extends DataViewManagerBase<KanbanViewData> {
    get view(): KanbanViewData;
    get filter(): FilterGroup;
    get id(): string;
    get name(): string;
    get columns(): string[];
    get detailColumns(): string[];
    get columnsWithoutFilter(): string[];
    get readonly(): boolean;
    get groupHelper(): GroupHelper | undefined;
    get type(): string;
    get header(): {
        titleColumn?: string | undefined;
        iconColumn?: string | undefined;
        coverColumn?: string | undefined;
    };
    get isDeleted(): boolean;
    private updateView;
    private syncView;
    updateFilter(filter: FilterGroup): void;
    updateName(name: string): void;
    columnGet(columnId: string): DataViewKanbanColumnManager;
    columnMove(columnId: string, toAfterOfColumn: InsertToPosition): void;
    rowMove(rowId: string, position: InsertToPosition): void;
    isShow(rowId: string): boolean;
    checkGroup(columnId: string, type: TType, target: TType): boolean;
    changeGroup(columnId: string): void;
    addCard(position: InsertToPosition, group: string): string;
    isInHeader(columnId: string): boolean;
    hasHeader(_rowId: string): boolean;
    getHeaderTitle(_rowId: string): DataViewKanbanColumnManager | undefined;
    getHeaderIcon(_rowId: string): DataViewKanbanColumnManager | undefined;
    getHeaderCover(_rowId: string): DataViewKanbanColumnManager | undefined;
    columnUpdateHide(columnId: string, hide: boolean): void;
    columnGetHide(columnId: string): boolean;
    duplicateView(): void;
    deleteView(): void;
}
export declare class DataViewKanbanColumnManager extends DataViewColumnManagerBase {
    dataViewManager: DataViewKanbanManager;
    constructor(propertyId: string, dataViewManager: DataViewKanbanManager);
}
//# sourceMappingURL=kanban-view-manager.d.ts.map