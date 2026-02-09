/**
 * @internal just for test
 */
export declare class MemoryBlobCRUD {
    private readonly _map;
    get(key: string): Blob | null;
    set(value: Blob): Promise<string>;
    set(key: string, value: Blob): Promise<string>;
    delete(key: string): void;
    list(): string[];
}
export declare const mimeExtMap: Map<string, string>;
export declare const extMimeMap: Map<string, string>;
export declare function getAssetName(assets: Map<string, Blob>, blobId: string): string;
//# sourceMappingURL=assets.d.ts.map