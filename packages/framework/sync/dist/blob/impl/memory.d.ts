import type { BlobSource } from '../source.js';
export declare class MemoryBlobSource implements BlobSource {
    name: string;
    readonly: boolean;
    readonly map: Map<string, Blob>;
    get(key: string): Promise<Blob | null>;
    set(key: string, value: Blob): Promise<string>;
    delete(key: string): Promise<void>;
    list(): Promise<string[]>;
}
//# sourceMappingURL=memory.d.ts.map