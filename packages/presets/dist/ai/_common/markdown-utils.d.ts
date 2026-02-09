import type { EditorHost } from '@blocksuite/block-std';
import type { BlockModel } from '@blocksuite/store';
import { Job, type Slice } from '@blocksuite/store';
export declare function getMarkdownFromSlice(host: EditorHost, slice: Slice): Promise<string>;
export declare const markdownToSnapshot: (markdown: string, host: EditorHost) => Promise<{
    snapshot: import("@blocksuite/store").SliceSnapshot;
    job: Job;
}>;
export declare function insertFromMarkdown(host: EditorHost, markdown: string, parent?: string, index?: number): Promise<BlockModel<object>[]>;
//# sourceMappingURL=markdown-utils.d.ts.map