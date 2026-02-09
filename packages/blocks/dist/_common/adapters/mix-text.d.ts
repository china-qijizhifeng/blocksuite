import type { Job } from '@blocksuite/store';
import type { AssetsManager } from '@blocksuite/store';
import { BaseAdapter, type BlockSnapshot, type DocSnapshot, type FromBlockSnapshotPayload, type FromBlockSnapshotResult, type FromDocSnapshotPayload, type FromDocSnapshotResult, type FromSliceSnapshotPayload, type FromSliceSnapshotResult, type SliceSnapshot, type ToBlockSnapshotPayload, type ToDocSnapshotPayload } from '@blocksuite/store';
export type MixText = string;
type MixTextToSliceSnapshotPayload = {
    file: MixText;
    assets?: AssetsManager;
    blockVersions: Record<string, number>;
    pageVersion: number;
    workspaceVersion: number;
    workspaceId: string;
    pageId: string;
};
export declare class MixTextAdapter extends BaseAdapter<MixText> {
    private _markdownAdapter;
    constructor(job: Job);
    private _traverseSnapshot;
    fromDocSnapshot({ snapshot, assets, }: FromDocSnapshotPayload): Promise<FromDocSnapshotResult<MixText>>;
    fromBlockSnapshot({ snapshot, }: FromBlockSnapshotPayload): Promise<FromBlockSnapshotResult<MixText>>;
    fromSliceSnapshot({ snapshot, }: FromSliceSnapshotPayload): Promise<FromSliceSnapshotResult<MixText>>;
    toDocSnapshot(payload: ToDocSnapshotPayload<MixText>): DocSnapshot;
    toBlockSnapshot(payload: ToBlockSnapshotPayload<MixText>): BlockSnapshot;
    toSliceSnapshot(payload: MixTextToSliceSnapshotPayload): Promise<SliceSnapshot | null>;
}
export {};
//# sourceMappingURL=mix-text.d.ts.map