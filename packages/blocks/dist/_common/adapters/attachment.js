import { sha } from '@blocksuite/global/utils';
import { BaseAdapter, nanoid, } from '@blocksuite/store';
export class AttachmentAdapter extends BaseAdapter {
    fromDocSnapshot(_payload) {
        throw new Error('Method not implemented.');
    }
    fromBlockSnapshot(_payload) {
        throw new Error('Method not implemented.');
    }
    fromSliceSnapshot(payload) {
        const attachments = [];
        for (const contentSlice of payload.snapshot.content) {
            if (contentSlice.type === 'block') {
                const { flavour, props } = contentSlice;
                if (flavour === 'affine:attachment') {
                    const { sourceId } = props;
                    const file = payload.assets?.getAssets().get(sourceId);
                    if (file) {
                        attachments.push(file);
                    }
                }
            }
        }
        return Promise.resolve({ file: attachments, assetsIds: [] });
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
                flavour: 'affine:attachment',
                id: nanoid(),
                props: {
                    name: item.name,
                    size: item.size,
                    type: item.type,
                    embed: false,
                    style: 'horizontalThin',
                    index: 'a0',
                    xywh: '[0,0,0,0]',
                    rotate: 0,
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
//# sourceMappingURL=attachment.js.map