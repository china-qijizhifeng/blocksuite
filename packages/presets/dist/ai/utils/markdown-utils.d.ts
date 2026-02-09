import type { EditorHost } from '@blocksuite/block-std';
import type { BlockModel, Doc, SliceSnapshot } from '@blocksuite/store';
import { Job, type Slice } from '@blocksuite/store';
export declare function getContentFromSlice(host: EditorHost, slice: Slice, type?: 'markdown' | 'plain-text'): Promise<string>;
export declare function getPlainTextFromSlice(host: EditorHost, slice: Slice): Promise<string>;
export declare const markdownToSnapshot: (markdown: string, host: EditorHost) => Promise<{
    snapshot: SliceSnapshot;
    job: Job;
}>;
export declare function insertFromMarkdown(host: EditorHost, markdown: string, parent?: string, index?: number): Promise<BlockModel<object>[]>;
export declare function replaceFromMarkdown(host: EditorHost, markdown: string, parent?: string, index?: number): Promise<void>;
export declare function markDownToDoc(host: EditorHost, answer: string): Promise<Doc>;
//# sourceMappingURL=markdown-utils.d.ts.map