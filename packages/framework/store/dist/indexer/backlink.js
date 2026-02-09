import { DisposableGroup, Slot } from '@blocksuite/global/utils';
import { Text } from 'yjs';
/**
 * Returns an object with four arrays: add, remove and unchanged.
 *
 * add: elements in after that are not in before
 * remove: elements in before that are not in after
 * unchanged: elements in both before and after
 */
function diffArray(before, after, compare = (a, b) => a === b) {
    const add = [];
    const remove = [];
    const unchanged = [];
    // Find elements in before that are not in after
    for (const elem of before) {
        if (!after.some(afterElem => compare(afterElem, elem))) {
            remove.push(elem);
        }
        else {
            unchanged.push(elem);
        }
    }
    // Find elements in after that are not in before
    for (const elem of after) {
        if (!before.some(beforeElem => compare(beforeElem, elem))) {
            add.push(elem);
        }
    }
    return { changed: add.length || remove.length, add, remove, unchanged };
}
export class BacklinkIndexer {
    get linkIndexMap() {
        return this._linkIndexMap;
    }
    constructor(blockIndexer) {
        this._disposables = new DisposableGroup();
        this._linkIndexMap = {};
        // TODO use inverted index
        this._backlinkIndexMapCache = null;
        this.slots = {
            /**
             * Note: sys:children update will not trigger event
             */
            indexUpdated: new Slot(),
        };
        this._disposables.add(blockIndexer.slots.refreshIndex.on(() => this._onRefreshIndex()));
        this._disposables.add(blockIndexer.slots.docRemoved.on(docId => this._onDocRemoved(docId)));
        this._disposables.add(blockIndexer.slots.blockUpdated.on(e => this._onBlockUpdated(e)));
        this.slots.indexUpdated.on(() => {
            this._backlinkIndexMapCache = null;
        });
    }
    _onRefreshIndex() {
        this._linkIndexMap = {};
    }
    _onDocRemoved(docId) {
        if (!this._linkIndexMap[docId]) {
            return;
        }
        this._linkIndexMap[docId] = {};
        this.slots.indexUpdated.emit({ action: 'delete', docId });
    }
    _onBlockUpdated({ action, docId, block, blockId }) {
        switch (action) {
            case 'add':
            case 'update': {
                let links = [];
                const text = block.get('prop:text');
                if (text) {
                    if (text instanceof Text) {
                        const deltas = text.toDelta();
                        links = [
                            ...links,
                            ...deltas
                                .filter(delta => delta.attributes && delta.attributes.reference)
                                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                                .map(delta => ({ ...delta.attributes.reference, blockId })),
                        ];
                    }
                    else {
                        console.warn('Unexpected prop:text type', text);
                    }
                }
                const flavour = block.get('sys:flavour');
                if (flavour === 'affine:embed-linked-doc' ||
                    flavour === 'affine:embed-synced-doc') {
                    const pageId = block.get('prop:pageId');
                    if (typeof pageId === 'string') {
                        links = [...links, { pageId, blockId, type: 'LinkedPage' }];
                    }
                    else {
                        console.warn('Unexpected prop:pageId type', pageId);
                    }
                }
                this._indexDelta({ action, docId, blockId, links });
                return;
            }
            case 'delete': {
                this._removeIndex(docId, blockId);
                break;
            }
        }
    }
    _indexDelta({ action, docId, blockId, links, }) {
        const before = this._linkIndexMap[docId]?.[blockId] ?? [];
        const diff = diffArray(before, links);
        if (!diff.changed)
            return;
        this._linkIndexMap[docId] = {
            ...this._linkIndexMap[docId],
            [blockId]: links,
        };
        this.slots.indexUpdated.emit({ action, docId, blockId });
    }
    _removeIndex(docId, blockId) {
        if (!this._linkIndexMap[docId] || !this._linkIndexMap[docId][blockId]) {
            return;
        }
        const previousLink = this._linkIndexMap[docId][blockId];
        delete this._linkIndexMap[docId][blockId];
        if (previousLink.length) {
            this.slots.indexUpdated.emit({
                action: 'delete',
                docId,
                blockId,
            });
        }
    }
    /**
     * Get the list of backlinks for a given doc
     */
    getBacklink(targetDocId) {
        if (this._backlinkIndexMapCache) {
            return this._backlinkIndexMapCache[targetDocId] ?? [];
        }
        const backlinkIndexMapCache = {};
        for (const [fromDocId, blockMap] of Object.entries(this._linkIndexMap)) {
            for (const [fromBlockId, links] of Object.entries(blockMap)) {
                links.forEach(({ pageId, type }) => {
                    if (!(pageId in backlinkIndexMapCache)) {
                        backlinkIndexMapCache[pageId] = [];
                    }
                    backlinkIndexMapCache[pageId].push({
                        pageId: fromDocId,
                        blockId: fromBlockId,
                        type,
                    });
                });
            }
        }
        this._backlinkIndexMapCache = backlinkIndexMapCache;
        return this._backlinkIndexMapCache[targetDocId] ?? [];
    }
    dispose() {
        this._disposables.dispose();
    }
}
//# sourceMappingURL=backlink.js.map