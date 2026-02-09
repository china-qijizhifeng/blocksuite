import { type Logger, Slot } from '@blocksuite/global/utils';
import type { Doc } from 'yjs';
import { PriorityAsyncQueue, SharedPriorityTarget } from '../utils/async-queue.js';
import { DocPeerStep } from './consts.js';
import type { DocSource } from './source.js';
export interface DocPeerStatus {
    step: DocPeerStep;
    totalDocs: number;
    loadedDocs: number;
    pendingPullUpdates: number;
    pendingPushUpdates: number;
}
/**
 * # DocPeer
 * A DocPeer is responsible for syncing one Storage with one Y.Doc and its subdocs.
 *
 * ```
 *                    ┌─────┐
 *                    │Start│
 *                    └──┬──┘
 *                       │
 *    ┌──────┐     ┌─────▼──────┐        ┌────┐
 *    │listen◄─────┤pull rootdoc│        │peer│
 *    └──┬───┘     └─────┬──────┘        └──┬─┘
 *       │               │ onLoad()         │
 *    ┌──▼───┐     ┌─────▼──────┐      ┌────▼────┐
 *    │listen◄─────┤pull subdocs│      │subscribe│
 *    └──┬───┘     └─────┬──────┘      └────┬────┘
 *       │               │ onReady()        │
 *    ┌──▼──┐      ┌─────▼───────┐       ┌──▼──┐
 *    │queue├──────►apply updates◄───────┤queue│
 *    └─────┘      └─────────────┘       └─────┘
 * ```
 *
 * listen: listen for updates from ydoc, typically from user modifications.
 * subscribe: listen for updates from storage, typically from other users.
 *
 */
export declare class SyncPeer {
    readonly rootDoc: Doc;
    readonly source: DocSource;
    readonly priorityTarget: SharedPriorityTarget;
    readonly logger: Logger;
    get name(): string;
    private set status(value);
    get status(): DocPeerStatus;
    private _status;
    readonly onStatusChange: Slot<DocPeerStatus>;
    readonly abort: AbortController;
    readonly state: {
        connectedDocs: Map<string, Doc>;
        pushUpdatesQueue: PriorityAsyncQueue<{
            id: string;
            data: Uint8Array[];
        }>;
        pushingUpdate: boolean;
        pullUpdatesQueue: PriorityAsyncQueue<{
            id: string;
            data: Uint8Array;
        }>;
        subdocLoading: boolean;
        subdocsLoadQueue: PriorityAsyncQueue<{
            id: string;
            doc: Doc;
        }>;
    };
    constructor(rootDoc: Doc, source: DocSource, priorityTarget: SharedPriorityTarget, logger: Logger);
    /**
     * stop sync
     *
     * DocPeer is one-time use, this peer should be discarded after call stop().
     */
    stop(): void;
    /**
     * auto retry after 5 seconds if sync failed
     */
    syncRetryLoop(abort: AbortSignal): Promise<void>;
    initState(): void;
    /**
     * main synchronization logic
     */
    sync(abortOuter: AbortSignal): Promise<void>;
    connectDoc(doc: Doc, abort: AbortSignal): Promise<void>;
    disconnectDoc(doc: Doc): void;
    handleYDocUpdates: (update: Uint8Array, origin: string, doc: Doc) => void;
    handleSubdocsUpdate: ({ added, removed, }: {
        added: Set<Doc>;
        removed: Set<Doc>;
    }) => void;
    handleStorageUpdates: (id: string, data: Uint8Array) => void;
    updateSyncStatus(): void;
    waitForSynced(abort?: AbortSignal): Promise<unknown>;
    waitForLoaded(abort?: AbortSignal): Promise<unknown>;
}
//# sourceMappingURL=peer.d.ts.map