import { Slot } from '@blocksuite/global/utils';
import * as Y from 'yjs';
export class Space {
    get yBlocks() {
        return this._yBlocks;
    }
    get loaded() {
        return this._loaded;
    }
    get spaceDoc() {
        return this._ySpaceDoc;
    }
    constructor(id, rootDoc, awarenessStore) {
        this._onLoadSlot = new Slot();
        this._initSubDoc = () => {
            let subDoc = this.rootDoc.spaces.get(this.id);
            if (!subDoc) {
                subDoc = new Y.Doc({
                    guid: this.id,
                });
                this.rootDoc.spaces.set(this.id, subDoc);
                this._loaded = true;
                this._onLoadSlot.emit();
            }
            else {
                this._loaded = false;
                this.rootDoc.on('subdocs', this._onSubdocEvent);
            }
            return subDoc;
        };
        this._onSubdocEvent = ({ loaded }) => {
            const result = Array.from(loaded).find(doc => doc.guid === this._ySpaceDoc.guid);
            if (!result) {
                return;
            }
            this.rootDoc.off('subdocs', this._onSubdocEvent);
            this._loaded = true;
            this._onLoadSlot.emit();
        };
        this.id = id;
        this.rootDoc = rootDoc;
        this.awarenessStore = awarenessStore;
        this._ySpaceDoc = this._initSubDoc();
        this._yBlocks = this._ySpaceDoc.getMap('blocks');
    }
    load() {
        this._ySpaceDoc.load();
        return this;
    }
    remove() {
        this.destroy();
        this.rootDoc.spaces.delete(this.id);
    }
    destroy() {
        this._ySpaceDoc.destroy();
        this._onLoadSlot.dispose();
        this._loaded = false;
    }
    clear() {
        this._yBlocks.clear();
    }
    /**
     * If `shouldTransact` is `false`, the transaction will not be push to the history stack.
     */
    transact(fn, shouldTransact = true) {
        this._ySpaceDoc.transact(() => {
            try {
                fn();
            }
            catch (e) {
                console.error(`An error occurred while Y.doc ${this._ySpaceDoc.guid} transacting:`);
                console.error(e);
            }
        }, shouldTransact ? this.rootDoc.clientID : null);
    }
}
//# sourceMappingURL=space.js.map