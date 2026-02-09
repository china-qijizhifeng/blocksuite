import { assertExists } from '@blocksuite/global/utils';
export class AssetsManager {
    constructor(options) {
        this._assetsMap = new Map();
        this._blob = options.blob;
    }
    getAssets() {
        return this._assetsMap;
    }
    isEmpty() {
        return this._assetsMap.size === 0;
    }
    cleanup() {
        this._assetsMap.clear();
    }
    async readFromBlob(blobId) {
        const blob = await this._blob.get(blobId);
        assertExists(blob, `Blob ${blobId} not found in blob manager`);
        this._assetsMap.set(blobId, blob);
    }
    async writeToBlob(blobId) {
        const blob = this._assetsMap.get(blobId);
        assertExists(blob);
        const exists = (await this._blob.get(blobId)) !== null;
        if (exists) {
            return;
        }
        await this._blob.set(blobId, blob);
    }
}
//# sourceMappingURL=assets.js.map