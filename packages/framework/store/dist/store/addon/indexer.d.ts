import type { QueryContent } from '../../indexer/index.js';
import { BacklinkIndexer, SearchIndexer } from '../../indexer/index.js';
type Indexer = {
    search: SearchIndexer | null;
    backlink: BacklinkIndexer | null;
};
export interface IndexerAddon {
    indexer: Indexer;
    search: (query: QueryContent) => Map<string, string>;
}
export declare const indexer: import("./shared.js").AddOnReturn<keyof IndexerAddon>;
export {};
//# sourceMappingURL=indexer.d.ts.map