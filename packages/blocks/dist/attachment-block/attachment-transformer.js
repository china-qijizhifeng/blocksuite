import { BaseBlockTransformer } from '@blocksuite/store';
export class AttachmentBlockTransformer extends BaseBlockTransformer {
    async toSnapshot(payload) {
        const snapshot = super.toSnapshot(payload);
        const sourceId = payload.model.sourceId;
        if (sourceId)
            await payload.assets.readFromBlob(sourceId);
        return snapshot;
    }
    async fromSnapshot(payload) {
        const snapshotRet = await super.fromSnapshot(payload);
        const sourceId = snapshotRet.props.sourceId;
        if (!payload.assets.isEmpty() && sourceId)
            await payload.assets.writeToBlob(sourceId);
        return snapshotRet;
    }
}
//# sourceMappingURL=attachment-transformer.js.map