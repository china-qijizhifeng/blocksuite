import { type Logger } from '@blocksuite/global/utils';
import type { BlobSource } from './source.js';
export interface BlobStatus {
    isStorageOverCapacity: boolean;
}
/**
 * # BlobEngine
 *
 * sync blobs between storages in background.
 *
 * all operations priority use main, then use shadows.
 */
export declare class BlobEngine {
    readonly main: BlobSource;
    readonly shadows: BlobSource[];
    readonly logger: Logger;
    private _abort;
    constructor(main: BlobSource, shadows: BlobSource[], logger: Logger);
    start(): void;
    stop(): void;
    get sources(): BlobSource[];
    sync(): Promise<void>;
    get(key: string): Promise<Blob | null>;
    set(value: Blob): Promise<string>;
    set(key: string, value: Blob): Promise<string>;
    delete(_key: string): Promise<void>;
    list(): Promise<string[]>;
}
//# sourceMappingURL=engine.d.ts.map