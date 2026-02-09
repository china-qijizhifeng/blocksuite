import type { BlobSource } from '../source.js';
export declare class IndexedDBBlobSource implements BlobSource {
    readonly name: string;
    readonly: boolean;
    readonly store: import("idb-keyval").UseStore;
    readonly mimeTypeStore: import("idb-keyval").UseStore;
    constructor(name: string);
    get(key: string): Promise<Blob | null>;
    set(key: string, value: Blob): Promise<string>;
    delete(key: string): Promise<void>;
    list(): Promise<string[]>;
}
//# sourceMappingURL=indexeddb.d.ts.map