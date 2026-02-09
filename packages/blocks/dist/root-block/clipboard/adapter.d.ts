import type { FromBlockSnapshotPayload, FromBlockSnapshotResult, FromDocSnapshotPayload, FromDocSnapshotResult, FromSliceSnapshotPayload, FromSliceSnapshotResult, ToBlockSnapshotPayload, ToDocSnapshotPayload, ToSliceSnapshotPayload } from '@blocksuite/store';
import type { BlockSnapshot, DocSnapshot, SliceSnapshot } from '@blocksuite/store';
import { BaseAdapter } from '@blocksuite/store';
export type FileSnapshot = {
    name: string;
    type: string;
    content: string;
};
export declare class ClipboardAdapter extends BaseAdapter<string> {
    static MIME: string;
    fromDocSnapshot(_payload: FromDocSnapshotPayload): Promise<FromDocSnapshotResult<string>>;
    toDocSnapshot(_payload: ToDocSnapshotPayload<string>): Promise<DocSnapshot>;
    fromBlockSnapshot(_payload: FromBlockSnapshotPayload): Promise<FromBlockSnapshotResult<string>>;
    toBlockSnapshot(_payload: ToBlockSnapshotPayload<string>): Promise<BlockSnapshot>;
    fromSliceSnapshot(payload: FromSliceSnapshotPayload): Promise<FromSliceSnapshotResult<string>>;
    toSliceSnapshot(payload: ToSliceSnapshotPayload<string>): Promise<SliceSnapshot>;
}
//# sourceMappingURL=adapter.d.ts.map