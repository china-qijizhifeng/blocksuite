import { Slot } from '@blocksuite/global/utils';
import * as Y from 'yjs';
import { Text } from '../../reactive/text.js';
import type { BlockModel } from '../../schema/base.js';
import type { IdGenerator } from '../../utils/id-generator.js';
import type { AwarenessStore, BlockSuiteDoc } from '../../yjs/index.js';
import type { DocCollection } from '../collection.js';
import { Space } from '../space.js';
import { DocCRUD } from './crud.js';
import { type BlockSelector, BlockViewType, type YBlock } from './index.js';
import { Doc } from './index.js';
export type YBlocks = Y.Map<YBlock>;
type FlatBlockMap = Record<string, YBlock>;
/** JSON-serializable properties of a block */
export type BlockSysProps = {
    id: string;
    flavour: string;
    children?: BlockModel[];
};
export type BlockProps = BlockSysProps & Record<string, unknown>;
type DocOptions = {
    id: string;
    collection: DocCollection;
    doc: BlockSuiteDoc;
    awarenessStore: AwarenessStore;
    idGenerator?: IdGenerator;
};
export declare const defaultBlockSelector: () => BlockViewType;
export type GetDocOptions = {
    selector?: BlockSelector;
    readonly?: boolean;
};
export declare class BlockCollection extends Space<FlatBlockMap> {
    get readonly(): boolean;
    get ready(): boolean;
    get history(): Y.UndoManager;
    get crud(): DocCRUD;
    get collection(): DocCollection;
    get docSync(): import("@blocksuite/sync").DocEngine;
    get awarenessSync(): import("@blocksuite/sync").AwarenessEngine;
    get blobSync(): import("@blocksuite/sync").BlobEngine;
    get schema(): import("../../index.js").Schema;
    get meta(): import("../meta.js").DocMeta | undefined;
    get isEmpty(): boolean;
    get canUndo(): boolean;
    get canRedo(): boolean;
    get Text(): typeof Text;
    private readonly _collection;
    private readonly _idGenerator;
    private readonly _docCRUD;
    private _history;
    /** Indicate whether the block tree is ready */
    private _ready;
    private _shouldTransact;
    private _docMap;
    readonly slots: {
        historyUpdated: Slot<void>;
        yBlockUpdated: Slot<{
            type: 'add';
            id: string;
        } | {
            type: 'delete';
            id: string;
        }>;
    };
    constructor({ id, collection, doc, awarenessStore, idGenerator, }: DocOptions);
    private _getReadonlyKey;
    private _initYBlocks;
    private _historyObserver;
    private _handleYBlockAdd;
    private _handleYBlockDelete;
    private _handleYEvent;
    private _handleYEvents;
    private _handleVersion;
    getDoc({ selector, readonly }?: GetDocOptions): Doc;
    clearSelector(selector: BlockSelector, readonly?: boolean): void;
    withoutTransact(callback: () => void): void;
    transact(fn: () => void, shouldTransact?: boolean): void;
    undo(): void;
    redo(): void;
    /** Capture current operations to undo stack synchronously. */
    captureSync(): void;
    resetHistory(): void;
    generateBlockId(): string;
    load(initFn?: () => void): this;
    dispose(): void;
}
declare global {
    namespace BlockSuite {
        interface BlockModels {
        }
        type Flavour = string & keyof BlockModels;
        type ModelProps<Model> = Partial<Model extends BlockModel<infer U> ? U : never>;
    }
}
export {};
//# sourceMappingURL=block-collection.d.ts.map