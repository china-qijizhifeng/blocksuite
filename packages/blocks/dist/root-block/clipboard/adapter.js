import { assertExists } from '@blocksuite/global/utils';
import { BaseAdapter } from '@blocksuite/store';
import { decodeClipboardBlobs, encodeClipboardBlobs } from './utils.js';
export class ClipboardAdapter extends BaseAdapter {
    static { this.MIME = 'BLOCKSUITE/SNAPSHOT'; }
    fromDocSnapshot(_payload) {
        throw new Error('not implemented');
    }
    toDocSnapshot(_payload) {
        throw new Error('not implemented');
    }
    fromBlockSnapshot(_payload) {
        throw new Error('not implemented');
    }
    toBlockSnapshot(_payload) {
        throw new Error('not implemented');
    }
    async fromSliceSnapshot(payload) {
        const snapshot = payload.snapshot;
        const assets = payload.assets;
        assertExists(assets);
        const map = assets.getAssets();
        const blobs = await encodeClipboardBlobs(map);
        return {
            file: JSON.stringify({
                snapshot,
                blobs,
            }),
            assetsIds: [],
        };
    }
    toSliceSnapshot(payload) {
        const json = JSON.parse(payload.file);
        const { blobs, snapshot } = json;
        const map = payload.assets?.getAssets();
        decodeClipboardBlobs(blobs, map);
        return Promise.resolve(snapshot);
    }
}
//# sourceMappingURL=adapter.js.map