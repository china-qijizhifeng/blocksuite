import type { IndexerAddon } from './indexer.js';
import type { TestAddon } from './test.js';
export declare class DocCollectionAddonType implements IndexerAddon, TestAddon {
    indexer: IndexerAddon['indexer'];
    search: IndexerAddon['search'];
    importDocSnapshot: TestAddon['importDocSnapshot'];
    exportJSX: TestAddon['exportJSX'];
}
//# sourceMappingURL=type.d.ts.map