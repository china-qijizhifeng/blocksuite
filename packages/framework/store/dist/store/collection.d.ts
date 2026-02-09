import { Slot } from '@blocksuite/global/utils';
import * as Y from 'yjs';
import type { Schema } from '../schema/index.js';
import type { AwarenessStore } from '../yjs/index.js';
import { DocCollectionAddonType } from './addon/index.js';
import { BlockCollection, type GetDocOptions } from './doc/block-collection.js';
import type { BlockSelector, Doc } from './doc/index.js';
import { DocCollectionMeta, type DocMeta } from './meta.js';
import { Store, type StoreOptions } from './store.js';
export type DocCollectionOptions = StoreOptions & {
    schema: Schema;
};
export declare class DocCollection extends DocCollectionAddonType {
    get id(): string;
    get isEmpty(): boolean;
    get store(): Store;
    get awarenessStore(): AwarenessStore;
    get docs(): Map<string, BlockCollection>;
    get doc(): import("../yjs/doc.js").BlockSuiteDoc;
    get idGenerator(): import("../index.js").IdGenerator;
    get schema(): Schema;
    get docSync(): import("@blocksuite/sync").DocEngine;
    get awarenessSync(): import("@blocksuite/sync").AwarenessEngine;
    get blobSync(): import("@blocksuite/sync").BlobEngine;
    static Y: typeof Y;
    protected _store: Store;
    protected readonly _schema: Schema;
    meta: DocCollectionMeta;
    slots: {
        docAdded: Slot<string>;
        docUpdated: Slot<void>;
        docRemoved: Slot<string>;
    };
    constructor(options: DocCollectionOptions);
    private _hasDoc;
    private _bindDocMetaEvents;
    getDoc(docId: string, options?: GetDocOptions): Doc | null;
    getBlockCollection(docId: string): BlockCollection | null;
    /**
     * By default, only an empty doc will be created.
     * If the `init` parameter is passed, a `surface`, `note`, and `paragraph` block
     * will be created in the doc simultaneously.
     */
    createDoc(options?: {
        id?: string;
        selector?: BlockSelector;
    }): Doc;
    /** Update doc meta state. Note that this intentionally does not mutate doc state. */
    setDocMeta(docId: string, props: Partial<DocMeta>): void;
    removeDoc(docId: string): void;
    /**
     * Start the data sync process
     */
    start(): void;
    /**
     * Verify that all data has been successfully saved to the primary storage.
     * Return true if the data transfer is complete and it is secure to terminate the synchronization operation.
     */
    canGracefulStop(): void;
    /**
     * Wait for all data has been successfully saved to the primary storage.
     */
    waitForGracefulStop(abort?: AbortSignal): Promise<void>;
    /**
     * Terminate the data sync process forcefully, which may cause data loss.
     * It is advised to invoke `canGracefulStop` before calling this method.
     */
    forceStop(): void;
    waitForSynced(): Promise<unknown>;
}
//# sourceMappingURL=collection.d.ts.map