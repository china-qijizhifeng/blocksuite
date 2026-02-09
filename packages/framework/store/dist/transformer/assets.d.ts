interface BlobCRUD {
    get: (key: string) => Promise<Blob | null> | Blob | null;
    set: (key: string, value: Blob) => Promise<string> | string;
    delete: (key: string) => Promise<void> | void;
    list: () => Promise<string[]> | string[];
}
type AssetsManagerConfig = {
    blob: BlobCRUD;
};
export declare class AssetsManager {
    private readonly _assetsMap;
    private readonly _blob;
    constructor(options: AssetsManagerConfig);
    getAssets(): Map<string, Blob>;
    isEmpty(): boolean;
    cleanup(): void;
    readFromBlob(blobId: string): Promise<void>;
    writeToBlob(blobId: string): Promise<void>;
}
export {};
//# sourceMappingURL=assets.d.ts.map