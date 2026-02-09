import type { Doc } from '@blocksuite/store';
declare function exportDoc(doc: Doc): Promise<void>;
type ImportMarkdownOptions = {
    doc: Doc;
    markdown: string;
    noteId: string;
};
declare function importMarkdown({ doc, markdown, noteId, }: ImportMarkdownOptions): Promise<void>;
export declare const MarkdownTransformer: {
    exportDoc: typeof exportDoc;
    importMarkdown: typeof importMarkdown;
};
export {};
//# sourceMappingURL=markdown.d.ts.map