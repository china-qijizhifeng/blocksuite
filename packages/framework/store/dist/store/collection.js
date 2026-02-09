var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { assertExists, Slot } from '@blocksuite/global/utils';
import * as Y from 'yjs';
import { DocCollectionAddonType, indexer, test } from './addon/index.js';
import { BlockCollection } from './doc/block-collection.js';
import { DocCollectionMeta } from './meta.js';
import { Store } from './store.js';
let DocCollection = (() => {
    let _classDecorators = [indexer, test];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = DocCollectionAddonType;
    var DocCollection = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DocCollection = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get id() {
            return this._store.id;
        }
        get isEmpty() {
            if (this.doc.store.clients.size === 0)
                return true;
            let flag = false;
            if (this.doc.store.clients.size === 1) {
                const items = Array.from(this.doc.store.clients.values())[0];
                // workspaceVersion and pageVersion were set when the collection is initialized
                if (items.length <= 2) {
                    flag = true;
                }
            }
            return flag;
        }
        get store() {
            return this._store;
        }
        get awarenessStore() {
            return this._store.awarenessStore;
        }
        get docs() {
            return this._store.spaces;
        }
        get doc() {
            return this._store.doc;
        }
        get idGenerator() {
            return this._store.idGenerator;
        }
        get schema() {
            return this._schema;
        }
        get docSync() {
            return this.store.docSync;
        }
        get awarenessSync() {
            return this.store.awarenessSync;
        }
        get blobSync() {
            return this.store.blobSync;
        }
        static { this.Y = Y; }
        constructor(options) {
            super();
            this.slots = {
                docAdded: new Slot(),
                docUpdated: new Slot(),
                docRemoved: new Slot(),
            };
            this._schema = options.schema;
            this._store = new Store(options);
            this.meta = new DocCollectionMeta(this.doc);
            this._bindDocMetaEvents();
        }
        _hasDoc(docId) {
            return this.docs.has(docId);
        }
        _bindDocMetaEvents() {
            this.meta.docMetaAdded.on(docId => {
                const doc = new BlockCollection({
                    id: docId,
                    collection: this,
                    doc: this.doc,
                    awarenessStore: this.awarenessStore,
                    idGenerator: this._store.idGenerator,
                });
                this._store.addSpace(doc);
                this.slots.docAdded.emit(doc.id);
            });
            this.meta.docMetaUpdated.on(() => this.slots.docUpdated.emit());
            this.meta.docMetaRemoved.on(id => {
                const space = this.getBlockCollection(id);
                if (!space)
                    return;
                this._store.removeSpace(space);
                space.remove();
                this.slots.docRemoved.emit(id);
            });
        }
        getDoc(docId, options) {
            const collection = this.getBlockCollection(docId);
            return collection?.getDoc(options) ?? null;
        }
        getBlockCollection(docId) {
            const space = this.docs.get(docId);
            return space ?? null;
        }
        /**
         * By default, only an empty doc will be created.
         * If the `init` parameter is passed, a `surface`, `note`, and `paragraph` block
         * will be created in the doc simultaneously.
         */
        createDoc(options = {}) {
            const { id: docId = this.idGenerator(), selector } = options;
            if (this._hasDoc(docId)) {
                throw new Error('doc already exists');
            }
            this.meta.addDocMeta({
                id: docId,
                title: '',
                createDate: Date.now(),
                tags: [],
            });
            return this.getDoc(docId, { selector });
        }
        /** Update doc meta state. Note that this intentionally does not mutate doc state. */
        setDocMeta(docId, 
        // You should not update subDocIds directly.
        props) {
            this.meta.setDocMeta(docId, props);
        }
        removeDoc(docId) {
            const docMeta = this.meta.getDocMeta(docId);
            assertExists(docMeta);
            const blockCollection = this.getBlockCollection(docId);
            if (!blockCollection)
                return;
            blockCollection.dispose();
            this.meta.removeDocMeta(docId);
            this._store.removeSpace(blockCollection);
        }
        /**
         * Start the data sync process
         */
        start() {
            this.docSync.start();
            this.blobSync.start();
            this.awarenessSync.connect();
        }
        /**
         * Verify that all data has been successfully saved to the primary storage.
         * Return true if the data transfer is complete and it is secure to terminate the synchronization operation.
         */
        canGracefulStop() {
            this.docSync.canGracefulStop();
        }
        /**
         * Wait for all data has been successfully saved to the primary storage.
         */
        waitForGracefulStop(abort) {
            return this.docSync.waitForGracefulStop(abort);
        }
        /**
         * Terminate the data sync process forcefully, which may cause data loss.
         * It is advised to invoke `canGracefulStop` before calling this method.
         */
        forceStop() {
            this.docSync.forceStop();
            this.blobSync.stop();
            this.awarenessSync.disconnect();
        }
        waitForSynced() {
            return this.docSync.waitForSynced();
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DocCollection = _classThis;
})();
export { DocCollection };
//# sourceMappingURL=collection.js.map