import { assertExists, DisposableGroup, Slot } from '@blocksuite/global/utils';
import { YArrayEvent, YMapEvent, YTextEvent } from 'yjs';
export class BlockIndexer {
    constructor(doc, { immediately = false, slots, }) {
        this._disposables = new DisposableGroup();
        this.slots = {
            docRemoved: new Slot(),
            /**
             * Note: sys:children update will not trigger event
             */
            blockUpdated: new Slot(),
            refreshIndex: new Slot(),
        };
        this._yDocObserver = (events, _transaction, { docId, yDoc }) => {
            events.forEach(e => {
                if (e instanceof YArrayEvent) {
                    // sys:children
                    return;
                }
                if (e instanceof YMapEvent) {
                    if (e.target !== e.currentTarget) {
                        // add 'elements' to 'affine:surface' or add 'prop:xywh' to 'affine:note'
                        if (e.keysChanged.has('prop:text')) {
                            // update block text by `doc.updateBlock(paragraph, { text: new doc.Text() })` API
                            const blockId = e.path[0];
                            const block = yDoc.get(blockId);
                            assertExists(block);
                            this._indexBlock({
                                action: 'update',
                                docId,
                                blockId,
                                block,
                            });
                        }
                        return;
                    }
                    Array.from(e.changes.keys.entries()).forEach(([blockId, { action }]) => {
                        if (action === 'delete') {
                            this._indexBlock({
                                action,
                                docId,
                                blockId,
                            });
                            return;
                        }
                        // add or update
                        const block = yDoc.get(blockId);
                        assertExists(block);
                        this._indexBlock({
                            action,
                            docId,
                            blockId,
                            block,
                        });
                    });
                    return;
                }
                if (e instanceof YTextEvent) {
                    const blockId = e.path[0];
                    if (!blockId || typeof blockId !== 'string') {
                        throw new Error('Failed to update index! Unexpected YText Event!');
                    }
                    const block = yDoc.get(blockId);
                    assertExists(block);
                    this._indexBlock({
                        action: 'update',
                        docId,
                        blockId,
                        block,
                    });
                    return;
                }
            });
        };
        this._doc = doc;
        this._collectionSlots = slots;
        if (immediately) {
            this._initIndex();
            return;
        }
        // lazy init
        setTimeout(() => {
            this._initIndex();
        }, 0);
    }
    _initIndex() {
        const doc = this._doc;
        const share = doc.share;
        if (!share.has('meta')) {
            throw new Error('Failed to initialize indexer: collection meta not found');
        }
        let disposeMap = {};
        this._disposables.add(() => {
            Object.values(disposeMap).forEach(fn => fn?.());
            disposeMap = {};
        });
        Array.from(doc.spaces.keys())
            .map(docId => ({ docId, doc: this._getDoc(docId) }))
            .forEach(({ docId, doc }) => {
            assertExists(doc, `Failed to find doc '${docId}'`);
            if (disposeMap[docId]) {
                console.warn(`Duplicated docAdded event! ${docId} already observed`, disposeMap);
                return;
            }
            const dispose = this._indexDoc(docId, doc);
            disposeMap[docId] = dispose;
        });
        this._collectionSlots.docAdded.on(docId => {
            const doc = this._getDoc(docId);
            assertExists(doc, `Failed to find doc '${docId}'`);
            if (disposeMap[docId]) {
                // It's possible because the `docAdded` event is emitted once a new block is added to the doc
                return;
            }
            const dispose = this._indexDoc(docId, doc);
            disposeMap[docId] = dispose;
        });
        this._collectionSlots.docRemoved.on(docId => {
            disposeMap[docId]?.();
            disposeMap[docId] = null;
            this.slots.docRemoved.emit(docId);
        });
    }
    _indexDoc(docId, yDoc) {
        const yBlocks = yDoc.getMap('blocks');
        yBlocks.forEach((block, blockId) => {
            this._indexBlock({ action: 'add', docId, blockId, block });
        });
        const observer = (events, transaction) => this._yDocObserver(events, transaction, { docId, yDoc: yBlocks });
        yBlocks.observeDeep(observer);
        return () => {
            yBlocks.unobserveDeep(observer);
        };
    }
    _indexBlock(indexEvent) {
        this.slots.blockUpdated.emit(indexEvent);
    }
    _getDoc(docId) {
        return this._doc.spaces.get(docId);
    }
    refreshIndex() {
        this.slots.refreshIndex.emit();
        this._initIndex();
    }
    dispose() {
        this._disposables.dispose();
    }
}
//# sourceMappingURL=base.js.map