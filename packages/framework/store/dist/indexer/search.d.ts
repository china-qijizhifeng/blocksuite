import type { DocumentSearchOptions } from 'flexsearch';
import type { Doc } from 'yjs';
import type { BlockSuiteDoc } from '../yjs/index.js';
export type QueryContent = string | Partial<DocumentSearchOptions<boolean>>;
export declare class SearchIndexer {
    private readonly _doc;
    private readonly _indexer;
    private _reindexMap;
    constructor(doc: BlockSuiteDoc, locale?: string);
    private _reindex;
    private _search;
    private _handleDocIndexing;
    private _refreshIndex;
    private _toContent;
    private _getDoc;
    search(query: QueryContent): Map<string, {
        space: string;
        content: string;
    }>;
    refreshDocIndex(docId: string, doc: Doc): void;
}
//# sourceMappingURL=search.d.ts.map