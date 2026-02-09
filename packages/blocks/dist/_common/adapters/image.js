import { sha } from '@blocksuite/global/utils';
import { BaseAdapter, nanoid, } from '@blocksuite/store';
export class ImageAdapter extends BaseAdapter {
    fromDocSnapshot(_payload) {
        throw new Error('Method not implemented.');
    }
    fromBlockSnapshot(_payload) {
        throw new Error('Method not implemented.');
    }
    fromSliceSnapshot(payload) {
        const images = [];
        for (const contentSlice of payload.snapshot.content) {
            if (contentSlice.type === 'block') {
                const { flavour, props } = contentSlice;
                if (flavour === 'affine:image') {
                    const { sourceId } = props;
                    const file = payload.assets?.getAssets().get(sourceId);
                    if (file) {
                        images.push(file);
                    }
                }
            }
        }
        return Promise.resolve({ file: images, assetsIds: [] });
    }
    toDocSnapshot(_payload) {
        throw new Error('Method not implemented.');
    }
    toBlockSnapshot(_payload) {
        throw new Error('Method not implemented.');
    }
    async toSliceSnapshot(payload) {
        const content = [];
        for (const item of payload.file) {
            const blobId = await sha(await item.arrayBuffer());
            payload.assets?.getAssets().set(blobId, item);
            await payload.assets?.writeToBlob(blobId);
            content.push({
                type: 'block',
                flavour: 'affine:image',
                id: nanoid(),
                props: {
                    sourceId: blobId,
                },
                children: [],
            });
        }
        if (content.length === 0) {
            return null;
        }
        return {
            type: 'slice',
            content,
            pageVersion: payload.pageVersion,
            workspaceVersion: payload.workspaceVersion,
            workspaceId: payload.workspaceId,
            pageId: payload.pageId,
        };
    }
}
//# sourceMappingURL=image.js.map