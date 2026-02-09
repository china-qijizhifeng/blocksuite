import { DisposableGroup, Slot } from '@blocksuite/global/utils';
import { BlockSelection, CursorSelection, SurfaceSelection, TextSelection, } from './variants/index.js';
export class SelectionManager {
    get _store() {
        return this.std.collection.awarenessStore;
    }
    get value() {
        return this._store
            .getLocalSelection(this.std.doc.blockCollection)
            .map(json => {
            return this._jsonToSelection(json);
        });
    }
    get remoteSelections() {
        const map = new Map();
        this._store.getStates().forEach((state, id) => {
            if (id === this._store.awareness.clientID)
                return;
            const selection = Object.entries(state.selectionV2)
                .filter(([key]) => key === this.std.doc.id)
                .flatMap(([_, selection]) => selection);
            const selections = selection
                .map(json => {
                try {
                    return this._jsonToSelection(json);
                }
                catch (error) {
                    console.error('Parse remote selection failed:', id, json, error);
                    return null;
                }
            })
                .filter((sel) => !!sel);
            map.set(id, selections);
        });
        return map;
    }
    constructor(std) {
        this.std = std;
        this._selectionConstructors = {};
        this.disposables = new DisposableGroup();
        this.slots = {
            changed: new Slot(),
            remoteChanged: new Slot(),
        };
        this._jsonToSelection = (json) => {
            const ctor = this._selectionConstructors[json.type];
            if (!ctor) {
                throw new Error(`Unknown selection type: ${json.type}`);
            }
            return ctor.fromJSON(json);
        };
        this._itemAdded = (event) => {
            event.stackItem.meta.set('selection-state', this.value);
        };
        this._itemPopped = (event) => {
            const selection = event.stackItem.meta.get('selection-state');
            if (selection) {
                this.set(selection);
            }
        };
        this._setupDefaultSelections();
    }
    _setupDefaultSelections() {
        this.register([
            TextSelection,
            BlockSelection,
            SurfaceSelection,
            CursorSelection,
        ]);
    }
    register(ctor) {
        [ctor].flat().forEach(ctor => {
            this._selectionConstructors[ctor.type] = ctor;
        });
        return this;
    }
    create(type, ...args) {
        const ctor = this._selectionConstructors[type];
        if (!ctor) {
            throw new Error(`Unknown selection type: ${type}`);
        }
        return new ctor(...args);
    }
    fromJSON(json) {
        const selections = json.map(json => {
            return this._jsonToSelection(json);
        });
        return this.set(selections);
    }
    set(selections) {
        this._store.setLocalSelection(this.std.doc.blockCollection, selections.map(s => s.toJSON()));
        this.slots.changed.emit(selections);
    }
    setGroup(group, selections) {
        const current = this.value.filter(s => s.group !== group);
        this.set([...current, ...selections]);
    }
    getGroup(group) {
        return this.value.filter(s => s.group === group);
    }
    update(fn) {
        const selections = fn(this.value);
        this.set(selections);
    }
    clear(types) {
        if (types) {
            const values = this.value.filter(selection => !types.includes(selection.type));
            this.set(values);
        }
        else {
            this.set([]);
        }
    }
    find(type) {
        return this.value.find((sel) => sel.is(type));
    }
    filter(type) {
        return this.value.filter((sel) => sel.is(type));
    }
    mount() {
        if (this.disposables.disposed) {
            this.disposables = new DisposableGroup();
        }
        this.std.doc.history.on('stack-item-added', this._itemAdded);
        this.std.doc.history.on('stack-item-popped', this._itemPopped);
        this.disposables.add(this._store.slots.update.on(({ id }) => {
            if (id === this._store.awareness.clientID)
                return;
            this.slots.remoteChanged.emit(this.remoteSelections);
        }));
    }
    unmount() {
        this.std.doc.history.off('stack-item-added', this._itemAdded);
        this.std.doc.history.off('stack-item-popped', this._itemPopped);
        this.slots.changed.dispose();
        this.disposables.dispose();
        this.clear();
    }
    dispose() {
        Object.values(this.slots).forEach(slot => slot.dispose());
        this.disposables.dispose();
    }
}
//# sourceMappingURL=manager.js.map