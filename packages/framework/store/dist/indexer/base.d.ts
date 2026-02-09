import { Slot } from '@blocksuite/global/utils';
import type { YBlock } from '../store/doc/block.js';
import type { BlockSuiteDoc } from '../yjs/index.js';
type DocId = string;
export type IndexBlockEvent = {
    docId: DocId;
    blockId: string;
    action: 'add' | 'update';
    block: YBlock;
} | {
    docId: DocId;
    blockId: string;
    action: 'delete';
    block?: undefined;
};
export declare class BlockIndexer {
    private readonly _doc;
    private readonly _collectionSlots;
    private _disposables;
    slots: {
        docRemoved: Slot<string>;
        /**
         * Note: sys:children update will not trigger event
         */
        blockUpdated: Slot<IndexBlockEvent>;
        refreshIndex: Slot<void>;
    };
    constructor(doc: BlockSuiteDoc, { immediately, slots, }: {
        readonly slots: {
            docAdded: Slot<string>;
            docRemoved: Slot<string>;
        };
        immediately?: boolean;
    });
    private _initIndex;
    private _indexDoc;
    private _indexBlock;
    private _yDocObserver;
    private _getDoc;
    refreshIndex(): void;
    dispose(): void;
}
export {};
//# sourceMappingURL=base.d.ts.map