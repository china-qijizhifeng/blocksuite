import type { AssetsManager } from '@blocksuite/store';
import { BaseAdapter, type BlockSnapshot, type DocSnapshot, type FromBlockSnapshotPayload, type FromBlockSnapshotResult, type FromDocSnapshotPayload, type FromDocSnapshotResult, type FromSliceSnapshotPayload, type FromSliceSnapshotResult, type SliceSnapshot, type ToBlockSnapshotPayload, type ToDocSnapshotPayload } from '@blocksuite/store';
export type Attachment = File[];
type AttachmentToSliceSnapshotPayload = {
    file: Attachment;
    assets?: AssetsManager;
    blockVersions: Record<string, number>;
    pageVersion: number;
    workspaceVersion: number;
    workspaceId: string;
    pageId: string;
};
export declare class AttachmentAdapter extends BaseAdapter<Attachment> {
    fromDocSnapshot(_payload: FromDocSnapshotPayload): Promise<FromDocSnapshotResult<Attachment>>;
    fromBlockSnapshot(_payload: FromBlockSnapshotPayload): Promise<FromBlockSnapshotResult<Attachment>>;
    fromSliceSnapshot(payload: FromSliceSnapshotPayload): Promise<FromSliceSnapshotResult<Attachment>>;
    toDocSnapshot(_payload: ToDocSnapshotPayload<Attachment>): Promise<DocSnapshot>;
    toBlockSnapshot(_payload: ToBlockSnapshotPayload<Attachment>): Promise<BlockSnapshot>;
    toSliceSnapshot(payload: AttachmentToSliceSnapshotPayload): Promise<SliceSnapshot | null>;
}
export {};
//# sourceMappingURL=attachment.d.ts.map