import type { FromBlockSnapshotPayload, FromBlockSnapshotResult, FromDocSnapshotPayload, FromDocSnapshotResult, FromSliceSnapshotPayload, FromSliceSnapshotResult, ToBlockSnapshotPayload, ToDocSnapshotPayload } from '@blocksuite/store';
import { type AssetsManager, BaseAdapter, type BlockSnapshot, type DocSnapshot, type SliceSnapshot } from '@blocksuite/store';
export type Markdown = string;
type MarkdownToSliceSnapshotPayload = {
    file: Markdown;
    assets?: AssetsManager;
    pageVersion: number;
    workspaceVersion: number;
    workspaceId: string;
    pageId: string;
};
export declare class MarkdownAdapter extends BaseAdapter<Markdown> {
    private _traverseSnapshot;
    private _traverseMarkdown;
    private _astToMarkdown;
    private _markdownToAst;
    private _deltaToMdAST;
    private _mdastToDelta;
    fromDocSnapshot({ snapshot, assets, }: FromDocSnapshotPayload): Promise<FromDocSnapshotResult<Markdown>>;
    fromBlockSnapshot({ snapshot, assets, }: FromBlockSnapshotPayload): Promise<FromBlockSnapshotResult<Markdown>>;
    fromSliceSnapshot({ snapshot, assets, }: FromSliceSnapshotPayload): Promise<FromSliceSnapshotResult<Markdown>>;
    toDocSnapshot(payload: ToDocSnapshotPayload<Markdown>): Promise<DocSnapshot>;
    toBlockSnapshot(payload: ToBlockSnapshotPayload<Markdown>): Promise<BlockSnapshot>;
    toSliceSnapshot(payload: MarkdownToSliceSnapshotPayload): Promise<SliceSnapshot | null>;
}
export {};
//# sourceMappingURL=markdown.d.ts.map