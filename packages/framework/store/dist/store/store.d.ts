/// <reference types="@blocksuite/global" />
import { type Logger } from '@blocksuite/global/utils';
import { AwarenessEngine, type AwarenessSource, BlobEngine, type BlobSource, DocEngine, type DocSource } from '@blocksuite/sync';
import type { IdGenerator } from '../utils/id-generator.js';
import { AwarenessStore } from '../yjs/awareness.js';
import { BlockSuiteDoc } from '../yjs/index.js';
import type { Space } from './space.js';
export type SerializedStore = Record<string, Record<string, unknown>>;
export declare enum Generator {
    /**
     * Default mode, generator for the unpredictable id
     */
    NanoID = "nanoID",
    UUIDv4 = "uuidV4",
    /**
     * This generator is trying to fix the real-time collaboration on debug mode.
     * This will make generator predictable and won't make conflict
     * @link https://docs.yjs.dev/api/faq#i-get-a-new-clientid-for-every-session-is-there-a-way-to-make-it-static-for-a-peer-accessing-the-doc
     */
    AutoIncrementByClientId = "autoIncrementByClientId",
    /**
     * **Warning**: This generator mode will crash the collaborative feature
     *  if multiple clients are adding new blocks.
     * Use this mode only if you know what you're doing.
     */
    AutoIncrement = "autoIncrement"
}
export interface StoreOptions<Flags extends Record<string, unknown> = BlockSuiteFlags> {
    id?: string;
    idGenerator?: Generator | IdGenerator;
    defaultFlags?: Partial<Flags>;
    logger?: Logger;
    docSources?: {
        main: DocSource;
        shadows?: DocSource[];
    };
    blobSources?: {
        main: BlobSource;
        shadows?: BlobSource[];
    };
    awarenessSources?: AwarenessSource[];
    disableSearchIndex?: boolean;
    disableBacklinkIndex?: boolean;
}
export declare class Store {
    readonly id: string;
    readonly doc: BlockSuiteDoc;
    readonly spaces: Map<string, Space<Record<string, any>>>;
    readonly awarenessStore: AwarenessStore;
    readonly idGenerator: IdGenerator;
    readonly docSync: DocEngine;
    readonly awarenessSync: AwarenessEngine;
    readonly blobSync: BlobEngine;
    constructor({ id, idGenerator, defaultFlags, awarenessSources, docSources, blobSources, logger, }?: StoreOptions);
    addSpace(space: Space): void;
    removeSpace(space: Space): void;
}
//# sourceMappingURL=store.d.ts.map