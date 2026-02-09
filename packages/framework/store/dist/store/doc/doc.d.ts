/// <reference types="@blocksuite/global" />
import { type Disposable, Slot } from '@blocksuite/global/utils';
import type { BlockModel, Schema } from '../../schema/index.js';
import { Block } from './block.js';
import type { BlockCollection, BlockProps } from './block-collection.js';
import type { DocCRUD } from './crud.js';
export declare enum BlockViewType {
    Display = "display",
    Hidden = "hidden",
    Bypass = "bypass"
}
export type BlockSelector = (block: Block, doc: Doc) => BlockViewType;
type DocOptions = {
    schema: Schema;
    blockCollection: BlockCollection;
    crud: DocCRUD;
    selector: BlockSelector;
    readonly?: boolean;
};
export declare class Doc {
    get blockCollection(): BlockCollection;
    get readonly(): boolean;
    get schema(): Schema;
    get ready(): boolean;
    get history(): import("yjs").UndoManager;
    get collection(): import("../collection.js").DocCollection;
    get docSync(): import("@blocksuite/sync").DocEngine;
    get awarenessSync(): import("@blocksuite/sync").AwarenessEngine;
    get blobSync(): import("@blocksuite/sync").BlobEngine;
    get meta(): import("../meta.js").DocMeta | undefined;
    get isEmpty(): boolean;
    get canUndo(): boolean;
    get canRedo(): boolean;
    get undo(): () => void;
    get redo(): () => void;
    get root(): BlockModel<object> | null;
    get id(): string;
    get Text(): typeof import("../../index.js").Text;
    get spaceDoc(): import("yjs").Doc;
    get rootDoc(): import("../../index.js").BlockSuiteDoc;
    get awarenessStore(): import("../../index.js").AwarenessStore<BlockSuiteFlags>;
    get loaded(): boolean;
    get transact(): (fn: () => void, shouldTransact?: boolean) => void;
    get resetHistory(): () => void;
    get captureSync(): () => void;
    get withoutTransact(): (callback: () => void) => void;
    get generateBlockId(): () => string;
    get clear(): () => void;
    get blocks(): Map<string, Block>;
    private get _yBlocks();
    protected readonly _schema: Schema;
    protected readonly _blocks: Map<string, Block>;
    protected readonly _blockCollection: BlockCollection;
    protected readonly _crud: DocCRUD;
    protected readonly _selector: BlockSelector;
    protected readonly _disposeBlockUpdated: Disposable;
    protected readonly _readonly?: boolean;
    readonly slots: BlockCollection['slots'] & {
        /** This is always triggered after `doc.load` is called. */
        ready: Slot;
        /**
         * This fires when the root block is added via API call or has just been initialized from existing ydoc.
         * useful for internal block UI components to start subscribing following up events.
         * Note that at this moment, the whole block tree may not be fully initialized yet.
         */
        rootAdded: Slot<string>;
        rootDeleted: Slot<string>;
        blockUpdated: Slot<{
            type: 'add';
            id: string;
            init: boolean;
            flavour: string;
            model: BlockModel;
        } | {
            type: 'delete';
            id: string;
            flavour: string;
            parent: string;
            model: BlockModel;
        } | {
            type: 'update';
            id: string;
            flavour: string;
            props: {
                key: string;
            };
        }>;
    };
    constructor({ schema, blockCollection, crud, selector, readonly, }: DocOptions);
    private _getSiblings;
    private _onBlockAdded;
    private _onBlockRemoved;
    dispose(): void;
    getSchemaByFlavour(flavour: BlockSuite.Flavour): {
        version: number;
        model: {
            flavour: string;
            role: "root" | "hub" | "content";
            children?: string[] | undefined;
            parent?: string[] | undefined;
            props?: ((args_0: import("../../schema/base.js").InternalPrimitives, ...args_1: unknown[]) => Record<string, any>) | undefined;
            toModel?: ((...args: unknown[]) => BlockModel<object>) | undefined;
        };
        transformer?: ((...args: unknown[]) => import("../../index.js").BaseBlockTransformer<object>) | undefined;
        onUpgrade?: ((args_0: any, args_1: number, args_2: number, ...args_3: unknown[]) => void) | undefined;
    } | undefined;
    load(initFn?: () => void): this;
    hasBlock(id: string): boolean;
    /**
     * @deprecated
     * Use `hasBlock` instead.
     */
    hasBlockById(id: string): boolean;
    getBlock(id: string): Block | undefined;
    /**
     * @deprecated
     * Use `getBlock` instead.
     */
    getBlockById<Model extends BlockModel = BlockModel>(id: string): Model | null;
    /**
     * @deprecated
     * Use `getBlocksByFlavour` instead.
     */
    getBlockByFlavour(blockFlavour: string | string[]): BlockModel<object>[];
    getBlocksByFlavour(blockFlavour: string | string[]): Block[];
    getParent(target: BlockModel | string): BlockModel | null;
    getPrev(block: BlockModel | string): BlockModel<object> | null;
    getPrevs(block: BlockModel | string): BlockModel<object>[];
    getNext(block: BlockModel | string): BlockModel<object> | null;
    getNexts(block: BlockModel | string): BlockModel<object>[];
    getBlocks(): BlockModel<object>[];
    addBlocks(blocks: Array<{
        flavour: string;
        blockProps?: Partial<BlockProps & Omit<BlockProps, 'flavour' | 'id'>>;
    }>, parent?: BlockModel | string | null, parentIndex?: number): string[];
    addBlock<Key extends BlockSuite.Flavour>(flavour: Key, blockProps?: BlockSuite.ModelProps<BlockSuite.BlockModels[Key]>, parent?: BlockModel | string | null, parentIndex?: number): string;
    addBlock(flavour: never, blockProps?: Partial<BlockProps & Omit<BlockProps, 'flavour'>>, parent?: BlockModel | string | null, parentIndex?: number): string;
    moveBlocks(blocksToMove: BlockModel[], newParent: BlockModel, targetSibling?: BlockModel | null, shouldInsertBeforeSibling?: boolean): void;
    updateBlock<T extends Partial<BlockProps>>(model: BlockModel, props: T): void;
    updateBlock(model: BlockModel, callback: () => void): void;
    addSiblingBlocks(targetModel: BlockModel, props: Array<Partial<BlockProps>>, place?: 'after' | 'before'): string[];
    deleteBlock(model: BlockModel, options?: {
        bringChildrenTo?: BlockModel;
        deleteChildren?: boolean;
    }): void;
}
export {};
//# sourceMappingURL=doc.d.ts.map