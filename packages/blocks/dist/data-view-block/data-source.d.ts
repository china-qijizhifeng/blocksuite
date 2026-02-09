import type { EditorHost } from '@blocksuite/block-std';
import { type Disposable, Slot } from '@blocksuite/global/utils';
import type { Block } from '@blocksuite/store';
import type { Doc } from '@blocksuite/store';
import { BaseDataSource, type ColumnConfig, type ColumnMeta, type DetailSlots, type InsertToPosition } from '../database-block/data-view/index.js';
import type { Column } from '../database-block/index.js';
import { blockMetaMap } from './block-meta/index.js';
import type { DataViewBlockModel } from './data-view-model.js';
export type BlockQueryDataSourceConfig = {
    type: keyof typeof blockMetaMap;
};
export declare class BlockQueryDataSource extends BaseDataSource {
    private host;
    private block;
    get workspace(): import("@blocksuite/store").DocCollection;
    private get blocks();
    get rows(): string[];
    get properties(): string[];
    get addPropertyConfigList(): ColumnConfig<any, any, any>[];
    get detailSlots(): DetailSlots;
    private meta;
    private columnMetaMap;
    docDisposeMap: Map<string, () => void>;
    blockMap: Map<string, Block>;
    slots: {
        update: Slot<void>;
    };
    constructor(host: EditorHost, block: DataViewBlockModel, config: BlockQueryDataSourceConfig);
    private getProperty;
    private newColumnName;
    getViewColumn(id: string): Column<Record<string, unknown>> | undefined;
    listenToDoc(doc: Doc): void;
    cellChangeValue(rowId: string, propertyId: string, value: unknown): void;
    cellGetValue(rowId: string, propertyId: string): unknown;
    propertyChangeData(propertyId: string, data: Record<string, unknown>): void;
    propertyChangeName(propertyId: string, name: string): void;
    propertyChangeType(propertyId: string, toType: string): void;
    propertyDelete(_id: string): void;
    propertyGetData(propertyId: string): Record<string, unknown>;
    propertyGetReadonly(propertyId: string): boolean;
    propertyGetName(propertyId: string): string;
    propertyGetType(propertyId: string): string;
    propertyDuplicate(_columnId: string): string;
    rowAdd(_insertPosition: InsertToPosition | number): string;
    rowDelete(_ids: string[]): void;
    propertyGetDefaultWidth(propertyId: string): number;
    onCellUpdate(rowId: string, propertyId: string, callback: () => void): Disposable;
    getPropertyMeta(type: string): ColumnMeta<any, any, any>;
    rowMove(_rowId: string, _position: InsertToPosition): void;
    propertyAdd(insertToPosition: InsertToPosition, type: string | undefined): string;
}
//# sourceMappingURL=data-source.d.ts.map