import { Slot } from '@blocksuite/global/utils';
import type { BlockIndexer } from './base.js';
type DocId = string;
type BlockId = string;
type LinkedNode = {
    type: 'LinkedPage' | 'Subpage';
    pageId: DocId;
    blockId: BlockId;
};
export type IndexUpdatedEvent = {
    action: 'delete';
    docId: DocId;
    blockId?: BlockId;
} | {
    action: 'add' | 'update';
    docId: DocId;
    blockId: BlockId;
};
export declare class BacklinkIndexer {
    get linkIndexMap(): Record<string, Record<string, LinkedNode[]>>;
    private _disposables;
    private _linkIndexMap;
    private _backlinkIndexMapCache;
    slots: {
        /**
         * Note: sys:children update will not trigger event
         */
        indexUpdated: Slot<IndexUpdatedEvent>;
    };
    constructor(blockIndexer: BlockIndexer);
    private _onRefreshIndex;
    private _onDocRemoved;
    private _onBlockUpdated;
    private _indexDelta;
    private _removeIndex;
    /**
     * Get the list of backlinks for a given doc
     */
    getBacklink(targetDocId: DocId): LinkedNode[];
    dispose(): void;
}
export {};
//# sourceMappingURL=backlink.d.ts.map