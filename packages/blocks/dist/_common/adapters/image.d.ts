import type { AssetsManager } from '@blocksuite/store';
import { BaseAdapter, type BlockSnapshot, type DocSnapshot, type FromBlockSnapshotPayload, type FromBlockSnapshotResult, type FromDocSnapshotPayload, type FromDocSnapshotResult, type FromSliceSnapshotPayload, type FromSliceSnapshotResult, type SliceSnapshot, type ToBlockSnapshotPayload, type ToDocSnapshotPayload } from '@blocksuite/store';
export type Image = File[];
type ImageToSliceSnapshotPayload = {
    file: Image;
    assets?: AssetsManager;
    blockVersions: Record<string, number>;
    pageVersion: number;
    workspaceVersion: number;
    workspaceId: string;
    pageId: string;
};
export declare class ImageAdapter extends BaseAdapter<Image> {
    fromDocSnapshot(_payload: FromDocSnapshotPayload): Promise<FromDocSnapshotResult<Image>>;
    fromBlockSnapshot(_payload: FromBlockSnapshotPayload): Promise<FromBlockSnapshotResult<Image>>;
    fromSliceSnapshot(payload: FromSliceSnapshotPayload): Promise<FromSliceSnapshotResult<Image>>;
    toDocSnapshot(_payload: ToDocSnapshotPayload<Image>): Promise<DocSnapshot>;
    toBlockSnapshot(_payload: ToBlockSnapshotPayload<Image>): Promise<BlockSnapshot>;
    toSliceSnapshot(payload: ImageToSliceSnapshotPayload): Promise<SliceSnapshot | null>;
}
export {};
//# sourceMappingURL=image.d.ts.map