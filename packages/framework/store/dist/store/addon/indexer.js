import { BacklinkIndexer, BlockIndexer, SearchIndexer, } from '../../indexer/index.js';
import { addOnFactory } from './shared.js';
export const indexer = addOnFactory(originalClass => class extends originalClass {
    constructor(storeOptions) {
        super(storeOptions);
        const blockIndexer = new BlockIndexer(this.doc, { slots: this.slots });
        this.indexer = {
            search: !storeOptions.disableSearchIndex
                ? new SearchIndexer(this.doc)
                : null,
            backlink: new BacklinkIndexer(blockIndexer),
        };
    }
    search(query) {
        return (this.indexer.search?.search(query) ??
            new Map());
    }
});
//# sourceMappingURL=indexer.js.map