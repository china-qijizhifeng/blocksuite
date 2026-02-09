import { Slot } from '@blocksuite/global/utils';
import { assertExists } from '@blocksuite/global/utils';
import { AssetsManager } from './assets.js';
import { BaseBlockTransformer } from './base.js';
import { toDraftModel } from './draft.js';
import { Slice } from './slice.js';
import { BlockSnapshotSchema, CollectionInfoSnapshotSchema, DocSnapshotSchema, SliceSnapshotSchema, } from './type.js';
export class Job {
    get collection() {
        return this._collection;
    }
    get assetsManager() {
        return this._assetsManager;
    }
    get assets() {
        return this._assetsManager.getAssets();
    }
    get adapterConfigs() {
        return this._adapterConfigs;
    }
    constructor({ collection, middlewares = [] }) {
        this._adapterConfigs = new Map();
        this._slots = {
            beforeImport: new Slot(),
            afterImport: new Slot(),
            beforeExport: new Slot(),
            afterExport: new Slot(),
        };
        this.blockToSnapshot = async (model) => {
            const snapshot = await this._blockToSnapshot(model);
            BlockSnapshotSchema.parse(snapshot);
            return snapshot;
        };
        this.snapshotToModelData = async (snapshot) => {
            const { children, flavour, props, id } = snapshot;
            const schema = this._getSchema(flavour);
            const snapshotLeaf = {
                id,
                flavour,
                props,
            };
            const transformer = this._getTransformer(schema);
            const modelData = await transformer.fromSnapshot({
                json: snapshotLeaf,
                assets: this._assetsManager,
                children,
            });
            return modelData;
        };
        this.walk = (snapshot, callback) => {
            const walk = (block) => {
                callback(block);
                if (block.children) {
                    block.children.forEach(walk);
                }
            };
            walk(snapshot.blocks);
        };
        this.snapshotToBlock = async (snapshot, doc, parent, index) => {
            BlockSnapshotSchema.parse(snapshot);
            const model = await this._snapshotToBlock(snapshot, doc, parent, index);
            return model;
        };
        this.docToSnapshot = async (doc) => {
            this._slots.beforeExport.emit({
                type: 'page',
                page: doc,
            });
            const rootModel = doc.root;
            const meta = this._exportDocMeta(doc);
            assertExists(rootModel, 'Root block not found in doc');
            const blocks = await this.blockToSnapshot(rootModel);
            const docSnapshot = {
                type: 'page',
                meta,
                blocks,
            };
            this._slots.afterExport.emit({
                type: 'page',
                page: doc,
                snapshot: docSnapshot,
            });
            DocSnapshotSchema.parse(docSnapshot);
            return docSnapshot;
        };
        this.snapshotToDoc = async (snapshot) => {
            this._slots.beforeImport.emit({
                type: 'page',
                snapshot,
            });
            DocSnapshotSchema.parse(snapshot);
            const { meta, blocks } = snapshot;
            const doc = this._collection.createDoc({ id: meta.id });
            doc.load();
            await this.snapshotToBlock(blocks, doc);
            this._slots.afterImport.emit({
                type: 'page',
                snapshot,
                page: doc,
            });
            return doc;
        };
        this.collectionInfoToSnapshot = () => {
            this._slots.beforeExport.emit({
                type: 'info',
            });
            const collectionMeta = this._getCollectionMeta();
            const snapshot = {
                type: 'info',
                id: this._collection.id,
                ...collectionMeta,
            };
            this._slots.afterExport.emit({
                type: 'info',
                snapshot,
            });
            CollectionInfoSnapshotSchema.parse(snapshot);
            return snapshot;
        };
        this.sliceToSnapshot = async (slice) => {
            this._slots.beforeExport.emit({
                type: 'slice',
                slice,
            });
            const { content, pageVersion, workspaceVersion, pageId, workspaceId } = slice.data;
            const contentSnapshot = [];
            for (const block of content) {
                contentSnapshot.push(await this.blockToSnapshot(block));
            }
            const snapshot = {
                type: 'slice',
                workspaceId,
                pageId,
                pageVersion,
                workspaceVersion,
                content: contentSnapshot,
            };
            this._slots.afterExport.emit({
                type: 'slice',
                slice,
                snapshot,
            });
            SliceSnapshotSchema.parse(snapshot);
            return snapshot;
        };
        this.snapshotToSlice = async (snapshot, doc, parent, index) => {
            this._slots.beforeImport.emit({
                type: 'slice',
                snapshot,
            });
            SliceSnapshotSchema.parse(snapshot);
            const { content, pageVersion, workspaceVersion, workspaceId, pageId } = snapshot;
            const contentBlocks = [];
            for (const [i, block] of content.entries()) {
                contentBlocks.push(await this._snapshotToBlock(block, doc, parent, (index ?? 0) + i));
            }
            const slice = new Slice({
                content: contentBlocks.map(block => toDraftModel(block)),
                pageVersion,
                workspaceVersion,
                workspaceId,
                pageId,
            });
            this._slots.afterImport.emit({
                type: 'slice',
                snapshot,
                slice,
            });
            return slice;
        };
        this._collection = collection;
        this._assetsManager = new AssetsManager({ blob: collection.blobSync });
        middlewares.forEach(middleware => {
            middleware({
                slots: this._slots,
                assetsManager: this._assetsManager,
                collection: this._collection,
                adapterConfigs: this._adapterConfigs,
            });
        });
    }
    _getSchema(flavour) {
        const schema = this._collection.schema.flavourSchemaMap.get(flavour);
        assertExists(schema, `Flavour schema not found for ${flavour}`);
        return schema;
    }
    _getTransformer(schema) {
        return schema.transformer?.() ?? new BaseBlockTransformer();
    }
    _getCollectionMeta() {
        const { meta } = this._collection;
        const { pageVersion, workspaceVersion, docs } = meta;
        assertExists(pageVersion);
        assertExists(workspaceVersion);
        assertExists(docs);
        return {
            pageVersion,
            workspaceVersion,
            properties: {}, // for backward compatibility
            pages: JSON.parse(JSON.stringify(docs)),
        };
    }
    _exportDocMeta(doc) {
        const docMeta = doc.meta;
        assertExists(docMeta);
        return {
            id: docMeta.id,
            title: docMeta.title,
            createDate: docMeta.createDate,
            tags: [], // for backward compatibility
        };
    }
    async _blockToSnapshot(model) {
        this._slots.beforeExport.emit({
            type: 'block',
            model,
        });
        const schema = this._getSchema(model.flavour);
        const transformer = this._getTransformer(schema);
        const snapshotLeaf = await transformer.toSnapshot({
            model,
            assets: this._assetsManager,
        });
        const children = await Promise.all(model.children.map(child => {
            return this._blockToSnapshot(child);
        }));
        const snapshot = {
            type: 'block',
            ...snapshotLeaf,
            children,
        };
        this._slots.afterExport.emit({
            type: 'block',
            model,
            snapshot,
        });
        return snapshot;
    }
    async _snapshotToBlock(snapshot, doc, parent, index) {
        this._slots.beforeImport.emit({
            type: 'block',
            snapshot,
            parent,
            index,
        });
        const { children, flavour, props, id } = snapshot;
        const schema = this._getSchema(flavour);
        const snapshotLeaf = {
            id,
            flavour,
            props,
        };
        const transformer = this._getTransformer(schema);
        const modelData = await transformer.fromSnapshot({
            json: snapshotLeaf,
            assets: this._assetsManager,
            children,
        });
        doc.addBlock(modelData.flavour, { ...modelData.props, id: modelData.id }, parent, index);
        for (const [index, child] of children.entries()) {
            await this._snapshotToBlock(child, doc, id, index);
        }
        const model = doc.getBlockById(id);
        assertExists(model);
        this._slots.afterImport.emit({
            type: 'block',
            snapshot,
            model,
            parent,
            index,
        });
        return model;
    }
    reset() {
        this._assetsManager.cleanup();
    }
}
//# sourceMappingURL=job.js.map