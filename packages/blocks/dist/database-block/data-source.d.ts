import type { EditorHost } from '@blocksuite/block-std';
import { type Disposable, Slot } from '@blocksuite/global/utils';
import { BaseDataSource, type ColumnConfig, type ColumnMeta, type DetailSlots, type InsertToPosition } from './data-view/index.js';
export type DatabaseBlockDataSourceConfig = {
    pageId: string;
    blockId: string;
};
export declare class DatabaseBlockDataSource extends BaseDataSource {
    private host;
    get doc(): import("@blocksuite/store").Doc;
    get rows(): string[];
    get properties(): string[];
    get addPropertyConfigList(): ColumnConfig<any, any, any>[];
    get detailSlots(): DetailSlots;
    private readonly _model;
    private _batch;
    slots: {
        update: Slot<void>;
    };
    constructor(host: EditorHost, config: DatabaseBlockDataSourceConfig);
    private _runCapture;
    private getModelById;
    private newColumnName;
    cellChangeValue(rowId: string, propertyId: string, value: unknown): void;
    cellGetValue(rowId: string, propertyId: string): unknown;
    cellGetExtra(rowId: string, propertyId: string): unknown;
    cellGetRenderValue(rowId: string, propertyId: string): unknown;
    propertyAdd(insertToPosition: InsertToPosition, type?: string): string;
    propertyChangeData(propertyId: string, data: Record<string, unknown>): void;
    propertyChangeName(propertyId: string, name: string): void;
    propertyChangeType(propertyId: string, toType: string): void;
    propertyDelete(id: string): void;
    propertyGetData(propertyId: string): Record<string, unknown>;
    propertyGetReadonly(propertyId: string): boolean;
    propertyGetName(propertyId: string): string;
    propertyGetType(propertyId: string): string;
    propertyDuplicate(columnId: string): string;
    rowAdd(insertPosition: InsertToPosition | number): string;
    rowDelete(ids: string[]): void;
    propertyGetDefaultWidth(propertyId: string): number;
    onCellUpdate(rowId: string, propertyId: string, callback: () => void): Disposable;
    getPropertyMeta(type: string): ColumnMeta<any, any, any>;
    rowMove(rowId: string, position: InsertToPosition): void;
}
//# sourceMappingURL=data-source.d.ts.map