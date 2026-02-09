import type { FromBlockSnapshotPayload, FromBlockSnapshotResult, FromDocSnapshotPayload, FromDocSnapshotResult, FromSliceSnapshotPayload, FromSliceSnapshotResult } from '@blocksuite/store';
import { type AssetsManager, BaseAdapter, type BlockSnapshot, type DocSnapshot, type SliceSnapshot } from '@blocksuite/store';
export type NotionHtml = string;
type NotionHtmlToSliceSnapshotPayload = {
    file: NotionHtml;
    assets?: AssetsManager;
    blockVersions: Record<string, number>;
    pageVersion: number;
    workspaceVersion: number;
    workspaceId: string;
    pageId: string;
};
type NotionHtmlToDocSnapshotPayload = {
    file: NotionHtml;
    assets?: AssetsManager;
    pageId?: string;
    pageMap?: Map<string, string>;
};
type NotionHtmlToBlockSnapshotPayload = NotionHtmlToDocSnapshotPayload;
export declare class NotionHtmlAdapter extends BaseAdapter<NotionHtml> {
    private _htmlToAst;
    private _traverseNotionHtml;
    private _hastToDeltaSpreaded;
    private _hastToDelta;
    fromDocSnapshot(_payload: FromDocSnapshotPayload): Promise<FromDocSnapshotResult<NotionHtml>>;
    fromBlockSnapshot(_payload: FromBlockSnapshotPayload): Promise<FromBlockSnapshotResult<NotionHtml>>;
    fromSliceSnapshot(_payload: FromSliceSnapshotPayload): Promise<FromSliceSnapshotResult<NotionHtml>>;
    toDocSnapshot(payload: NotionHtmlToDocSnapshotPayload): Promise<DocSnapshot>;
    toDoc(payload: NotionHtmlToDocSnapshotPayload): Promise<import("@blocksuite/store").Doc>;
    toBlockSnapshot(payload: NotionHtmlToBlockSnapshotPayload): Promise<BlockSnapshot>;
    toSliceSnapshot(payload: NotionHtmlToSliceSnapshotPayload): Promise<SliceSnapshot | null>;
}
export {};
//# sourceMappingURL=notion-html.d.ts.map