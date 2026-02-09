import { type Logger, Slot } from '@blocksuite/global/utils';
import type { Doc } from 'yjs';
import { SharedPriorityTarget } from '../utils/async-queue.js';
import { DocEngineStep } from './consts.js';
import { type DocPeerStatus, SyncPeer } from './peer.js';
import type { DocSource } from './source.js';
export interface DocEngineStatus {
    step: DocEngineStep;
    main: DocPeerStatus | null;
    shadows: (DocPeerStatus | null)[];
    retrying: boolean;
}
/**
 * # DocEngine
 *
 * ```
 *                    ┌────────────┐
 *                    │  DocEngine │
 *                    └─────┬──────┘
 *                          │
 *                          ▼
 *                    ┌────────────┐
 *                    │   DocPeer  │
 *          ┌─────────┤    main    ├─────────┐
 *          │         └─────┬──────┘         │
 *          │               │                │
 *          ▼               ▼                ▼
 *   ┌────────────┐   ┌────────────┐   ┌────────────┐
 *   │   DocPeer  │   │   DocPeer  │   │   DocPeer  │
 *   │   shadow   │   │   shadow   │   │   shadow   │
 *   └────────────┘   └────────────┘   └────────────┘
 * ```
 *
 * doc engine manage doc peers
 *
 * Sync steps:
 * 1. start main sync
 * 2. wait for main sync complete
 * 3. start shadow sync
 * 4. continuously sync main and shadows
 */
export declare class DocEngine {
    readonly rootDoc: Doc;
    readonly main: DocSource;
    readonly shadows: DocSource[];
    readonly logger: Logger;
    get rootDocId(): string;
    get status(): DocEngineStatus;
    private _status;
    private _abort;
    readonly onStatusChange: Slot<DocEngineStatus>;
    readonly priorityTarget: SharedPriorityTarget;
    constructor(rootDoc: Doc, main: DocSource, shadows: DocSource[], logger: Logger);
    private setStatus;
    start(): void;
    canGracefulStop(): boolean;
    waitForGracefulStop(abort?: AbortSignal): Promise<void>;
    forceStop(): void;
    sync(signal: AbortSignal): Promise<void>;
    updateSyncingState(local: SyncPeer | null, shadows: (SyncPeer | null)[]): void;
    waitForSynced(abort?: AbortSignal): Promise<unknown>;
    waitForLoadedRootDoc(abort?: AbortSignal): Promise<unknown>;
    setPriorityRule(target: ((id: string) => boolean) | null): void;
}
//# sourceMappingURL=engine.d.ts.map