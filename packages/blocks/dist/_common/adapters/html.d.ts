import type { FromBlockSnapshotPayload, FromBlockSnapshotResult, FromDocSnapshotPayload, FromDocSnapshotResult, FromSliceSnapshotPayload, FromSliceSnapshotResult, ToBlockSnapshotPayload, ToDocSnapshotPayload } from '@blocksuite/store';
import type { BlockSnapshot, DocSnapshot, SliceSnapshot } from '@blocksuite/store';
import { type AssetsManager } from '@blocksuite/store';
import { BaseAdapter } from '@blocksuite/store';
export type Html = string;
type HtmlToSliceSnapshotPayload = {
    file: Html;
    assets?: AssetsManager;
    blockVersions: Record<string, number>;
    pageVersion: number;
    workspaceVersion: number;
    workspaceId: string;
    pageId: string;
};
export declare class HtmlAdapter extends BaseAdapter<Html> {
    private _astToHtml;
    private _htmlToAst;
    private _traverseSnapshot;
    private _traverseHtml;
    private _deltaToHighlightHasts;
    private _deltaToHast;
    private _hastToDeltaSpreaded;
    private _hastToDelta;
    fromDocSnapshot(payload: FromDocSnapshotPayload): Promise<FromDocSnapshotResult<string>>;
    fromBlockSnapshot(payload: FromBlockSnapshotPayload): Promise<FromBlockSnapshotResult<string>>;
    fromSliceSnapshot(payload: FromSliceSnapshotPayload): Promise<FromSliceSnapshotResult<string>>;
    toDocSnapshot(payload: ToDocSnapshotPayload<string>): Promise<DocSnapshot>;
    toBlockSnapshot(payload: ToBlockSnapshotPayload<string>): Promise<BlockSnapshot>;
    toSliceSnapshot(payload: HtmlToSliceSnapshotPayload): Promise<SliceSnapshot | null>;
}
export {};
//# sourceMappingURL=html.d.ts.map