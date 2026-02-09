import { assertExists, Slot } from '@blocksuite/global/utils';
import { COLLECTION_VERSION, PAGE_VERSION } from '../consts.js';
export class DocCollectionMeta {
    get yDocs() {
        return this._yMap.get('pages');
    }
    get docs() {
        return this._proxy.pages;
    }
    get name() {
        return this._proxy.name;
    }
    get avatar() {
        return this._proxy.avatar;
    }
    get blockVersions() {
        return this._proxy.blockVersions;
    }
    get workspaceVersion() {
        return this._proxy.workspaceVersion;
    }
    get pageVersion() {
        return this._proxy.pageVersion;
    }
    get docMetas() {
        if (!this._proxy.pages) {
            return [];
        }
        return this._proxy.pages;
    }
    get hasVersion() {
        if (!this.blockVersions || !this.pageVersion || !this.workspaceVersion) {
            return false;
        }
        return Object.keys(this.blockVersions).length > 0;
    }
    get properties() {
        const meta = this._proxy.properties;
        if (!meta) {
            return {
                tags: {
                    options: [],
                },
            };
        }
        return meta;
    }
    constructor(doc) {
        this._prevDocs = new Set();
        this.id = 'meta';
        this.docMetaAdded = new Slot();
        this.docMetaRemoved = new Slot();
        this.docMetaUpdated = new Slot();
        this.commonFieldsUpdated = new Slot();
        this._handleDocCollectionMetaEvents = (events) => {
            events.forEach(e => {
                const hasKey = (k) => e.target === this._yMap && e.changes.keys.has(k);
                if (e.target === this.yDocs ||
                    e.target.parent === this.yDocs ||
                    hasKey('pages')) {
                    this._handleDocMetaEvent();
                }
                if (hasKey('name') || hasKey('avatar')) {
                    this._handleCommonFieldsEvent();
                }
            });
        };
        this.doc = doc;
        this._yMap = doc.getMap(this.id);
        this._proxy = doc.getMapProxy(this.id);
        this._yMap.observeDeep(this._handleDocCollectionMetaEvents);
    }
    _handleDocMetaEvent() {
        const { docMetas, _prevDocs } = this;
        const newDocs = new Set();
        docMetas.forEach(docMeta => {
            if (!_prevDocs.has(docMeta.id)) {
                this.docMetaAdded.emit(docMeta.id);
            }
            newDocs.add(docMeta.id);
        });
        _prevDocs.forEach(prevDocId => {
            const isRemoved = newDocs.has(prevDocId) === false;
            if (isRemoved) {
                this.docMetaRemoved.emit(prevDocId);
            }
        });
        this._prevDocs = newDocs;
        this.docMetaUpdated.emit();
    }
    _handleCommonFieldsEvent() {
        this.commonFieldsUpdated.emit();
    }
    initialize() {
        if (!this._proxy.pages) {
            this._proxy.pages = [];
        }
    }
    setName(name) {
        this.doc.transact(() => {
            this._proxy.name = name;
        }, this.doc.clientID);
    }
    setAvatar(avatar) {
        this.doc.transact(() => {
            this._proxy.avatar = avatar;
        }, this.doc.clientID);
    }
    getDocMeta(id) {
        return this.docMetas.find(doc => doc.id === id);
    }
    addDocMeta(doc, index) {
        this.doc.transact(() => {
            if (!this.docs) {
                return;
            }
            const docs = this.docs;
            if (index === undefined) {
                docs.push(doc);
            }
            else {
                docs.splice(index, 0, doc);
            }
        }, this.doc.clientID);
    }
    /**
     * @internal Use {@link DocCollection.setDocMeta} instead
     */
    setDocMeta(id, props) {
        const docs = this.docs ?? [];
        const index = docs.findIndex((doc) => id === doc.id);
        this.doc.transact(() => {
            if (!this.docs) {
                return;
            }
            if (index === -1)
                return;
            assertExists(this.docs);
            const doc = this.docs[index];
            Object.entries(props).forEach(([key, value]) => {
                doc[key] = value;
            });
        }, this.doc.clientID);
    }
    removeDocMeta(id) {
        // you cannot delete a doc if there's no doc
        assertExists(this.docs);
        const docMeta = this.docMetas;
        const index = docMeta.findIndex((doc) => id === doc.id);
        if (index === -1) {
            return;
        }
        this.doc.transact(() => {
            assertExists(this.docs);
            this.docs.splice(index, 1);
        }, this.doc.clientID);
    }
    /**
     * @internal Only for doc initialization
     */
    writeVersion(collection) {
        const { blockVersions, pageVersion, workspaceVersion } = this._proxy;
        if (!workspaceVersion) {
            this._proxy.workspaceVersion = COLLECTION_VERSION;
        }
        else {
            console.error('Workspace version is already set');
        }
        if (!pageVersion) {
            this._proxy.pageVersion = PAGE_VERSION;
        }
        else {
            console.error('Doc version is already set');
        }
        if (!blockVersions) {
            const _versions = {};
            collection.schema.flavourSchemaMap.forEach((schema, flavour) => {
                _versions[flavour] = schema.version;
            });
            this._proxy.blockVersions = _versions;
        }
        else {
            console.error('Block versions is already set');
        }
    }
    updateVersion(collection) {
        this._proxy.workspaceVersion = COLLECTION_VERSION;
        this._proxy.pageVersion = PAGE_VERSION;
        const _versions = {};
        collection.schema.flavourSchemaMap.forEach((schema, flavour) => {
            _versions[flavour] = schema.version;
        });
        this._proxy.blockVersions = _versions;
    }
    /**
     * @deprecated Only used for legacy doc version validation
     */
    validateVersion(collection) {
        const workspaceVersion = this._proxy.workspaceVersion;
        if (!workspaceVersion) {
            throw new Error('Invalid workspace data, workspace version is missing. Please make sure the data is valid.');
        }
        if (workspaceVersion < COLLECTION_VERSION) {
            throw new Error(`Workspace version ${workspaceVersion} is outdated. Please upgrade the editor.`);
        }
        const pageVersion = this._proxy.pageVersion;
        if (!pageVersion) {
            throw new Error('Invalid workspace data, page version is missing. Please make sure the data is valid.');
        }
        if (pageVersion < PAGE_VERSION) {
            throw new Error(`Doc version ${pageVersion} is outdated. Please upgrade the editor.`);
        }
        const blockVersions = { ...this._proxy.blockVersions };
        if (!blockVersions) {
            throw new Error('Invalid workspace data, versions data is missing. Please make sure the data is valid');
        }
        const dataFlavours = Object.keys(blockVersions);
        if (dataFlavours.length === 0) {
            throw new Error('Invalid workspace data, missing versions field. Please make sure the data is valid.');
        }
        dataFlavours.forEach(dataFlavour => {
            const dataVersion = blockVersions[dataFlavour];
            const editorVersion = collection.schema.flavourSchemaMap.get(dataFlavour)?.version;
            if (!editorVersion) {
                throw new Error(`Editor missing ${dataFlavour} flavour. Please make sure this block flavour is registered.`);
            }
            else if (dataVersion > editorVersion) {
                throw new Error(`Editor doesn't support ${dataFlavour}@${dataVersion}. Please upgrade the editor.`);
            }
            else if (dataVersion < editorVersion) {
                throw new Error(`In workspace data, the block flavour ${dataFlavour}@${dataVersion} is outdated. Please downgrade the editor or try data migration.`);
            }
        });
    }
    setProperties(meta) {
        this._proxy.properties = meta;
        this.docMetaUpdated.emit();
    }
}
//# sourceMappingURL=meta.js.map