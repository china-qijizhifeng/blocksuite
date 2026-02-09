import { Slot } from '@blocksuite/global/utils';
import { uuidv4 } from 'lib0/random.js';
import * as Y from 'yjs';
import { Text } from '../../reactive/text.js';
import { Space } from '../space.js';
import { DocCRUD } from './crud.js';
import { BlockViewType } from './index.js';
import { Doc } from './index.js';
export const defaultBlockSelector = () => BlockViewType.Display;
export class BlockCollection extends Space {
    get readonly() {
        return this.awarenessStore.isReadonly(this);
    }
    get ready() {
        return this._ready;
    }
    get history() {
        return this._history;
    }
    get crud() {
        return this._docCRUD;
    }
    get collection() {
        return this._collection;
    }
    get docSync() {
        return this.collection.docSync;
    }
    get awarenessSync() {
        return this.collection.awarenessSync;
    }
    get blobSync() {
        return this.collection.blobSync;
    }
    get schema() {
        return this.collection.schema;
    }
    get meta() {
        return this.collection.meta.getDocMeta(this.id);
    }
    get isEmpty() {
        return this._yBlocks.size === 0;
    }
    get canUndo() {
        if (this.readonly) {
            return false;
        }
        return this._history.canUndo();
    }
    get canRedo() {
        if (this.readonly) {
            return false;
        }
        return this._history.canRedo();
    }
    get Text() {
        return Text;
    }
    constructor({ id, collection, doc, awarenessStore, idGenerator = uuidv4, }) {
        super(id, doc, awarenessStore);
        /** Indicate whether the block tree is ready */
        this._ready = false;
        this._shouldTransact = true;
        this._docMap = {
            undefined: new WeakMap(),
            true: new WeakMap(),
            false: new WeakMap(),
        };
        this.slots = {
            historyUpdated: new Slot(),
            yBlockUpdated: new Slot(),
        };
        this._historyObserver = () => {
            this.slots.historyUpdated.emit();
        };
        // Handle all the events that happen at _any_ level (potentially deep inside the structure).
        // So, we apply a listener at the top level for the flat structure of the current
        // doc/space container.
        this._handleYEvents = (events) => {
            events.forEach(event => this._handleYEvent(event));
        };
        this._collection = collection;
        this._idGenerator = idGenerator;
        this._docCRUD = new DocCRUD(this._yBlocks, collection.schema);
    }
    _getReadonlyKey(readonly) {
        return readonly?.toString() ?? 'undefined';
    }
    _initYBlocks() {
        const { _yBlocks } = this;
        _yBlocks.observeDeep(this._handleYEvents);
        this._history = new Y.UndoManager([_yBlocks], {
            trackedOrigins: new Set([this._ySpaceDoc.clientID]),
        });
        this._history.on('stack-cleared', this._historyObserver);
        this._history.on('stack-item-added', this._historyObserver);
        this._history.on('stack-item-popped', this._historyObserver);
        this._history.on('stack-item-updated', this._historyObserver);
    }
    _handleYBlockAdd(id) {
        this.slots.yBlockUpdated.emit({ type: 'add', id });
    }
    _handleYBlockDelete(id) {
        this.slots.yBlockUpdated.emit({ type: 'delete', id });
    }
    _handleYEvent(event) {
        // event on top-level block store
        if (event.target !== this._yBlocks) {
            return;
        }
        event.keys.forEach((value, id) => {
            try {
                if (value.action === 'add') {
                    this._handleYBlockAdd(id);
                    return;
                }
                if (value.action === 'delete') {
                    this._handleYBlockDelete(id);
                    return;
                }
            }
            catch (e) {
                console.error('An error occurred while handling Yjs event:');
                console.error(e);
            }
        });
    }
    _handleVersion() {
        // Initialization from empty yDoc, indicating that the document is new.
        if (!this.collection.meta.hasVersion) {
            this.collection.meta.writeVersion(this.collection);
        }
        else {
            // Initialization from existing yDoc, indicating that the document is loaded from storage.
            if (this.awarenessStore.getFlag('enable_legacy_validation')) {
                this.collection.meta.validateVersion(this.collection);
            }
        }
    }
    getDoc({ selector = defaultBlockSelector, readonly } = {}) {
        const readonlyKey = this._getReadonlyKey(readonly);
        if (this._docMap[readonlyKey].has(selector)) {
            return this._docMap[readonlyKey].get(selector);
        }
        const doc = new Doc({
            blockCollection: this,
            crud: this._docCRUD,
            schema: this.collection.schema,
            selector,
            readonly,
        });
        this._docMap[readonlyKey].set(selector, doc);
        return doc;
    }
    clearSelector(selector, readonly) {
        const readonlyKey = this._getReadonlyKey(readonly);
        this._docMap[readonlyKey].delete(selector);
    }
    withoutTransact(callback) {
        this._shouldTransact = false;
        callback();
        this._shouldTransact = true;
    }
    transact(fn, shouldTransact = this._shouldTransact) {
        super.transact(fn, shouldTransact);
    }
    undo() {
        if (this.readonly) {
            console.error('cannot modify data in readonly mode');
            return;
        }
        this._history.undo();
    }
    redo() {
        if (this.readonly) {
            console.error('cannot modify data in readonly mode');
            return;
        }
        this._history.redo();
    }
    /** Capture current operations to undo stack synchronously. */
    captureSync() {
        this._history.stopCapturing();
    }
    resetHistory() {
        this._history.clear();
    }
    generateBlockId() {
        return this._idGenerator();
    }
    load(initFn) {
        if (this.ready) {
            return this;
        }
        super.load();
        if ((this.collection.meta.docs?.length ?? 0) <= 1) {
            this._handleVersion();
        }
        this._initYBlocks();
        this._yBlocks.forEach((_, id) => {
            this._handleYBlockAdd(id);
        });
        initFn?.();
        this._ready = true;
        return this;
    }
    dispose() {
        this.slots.historyUpdated.dispose();
        if (this.ready) {
            this._yBlocks.unobserveDeep(this._handleYEvents);
            this._yBlocks.clear();
        }
    }
}
//# sourceMappingURL=block-collection.js.map