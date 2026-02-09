import { Slot } from '@blocksuite/global/utils';
import { merge } from 'merge';
export class AwarenessStore {
    constructor(store, awareness, defaultFlags) {
        this.slots = {
            update: new Slot(),
        };
        this._onAwarenessChange = (diff) => {
            const { added, removed, updated } = diff;
            const states = this.awareness.getStates();
            added.forEach(id => {
                this.slots.update.emit({
                    id,
                    type: 'add',
                    state: states.get(id),
                });
            });
            updated.forEach(id => {
                this.slots.update.emit({
                    id,
                    type: 'update',
                    state: states.get(id),
                });
            });
            removed.forEach(id => {
                this.slots.update.emit({
                    id,
                    type: 'remove',
                });
            });
        };
        this.store = store;
        this.awareness = awareness;
        this.awareness.on('change', this._onAwarenessChange);
        this.awareness.setLocalStateField('selectionV2', {});
        this._initFlags(defaultFlags);
    }
    _initFlags(defaultFlags) {
        const upstreamFlags = this.awareness.getLocalState()?.flags;
        const flags = upstreamFlags
            ? merge(true, defaultFlags, upstreamFlags)
            : { ...defaultFlags };
        this.awareness.setLocalStateField('flags', flags);
    }
    setFlag(field, value) {
        const oldFlags = this.awareness.getLocalState()?.flags ?? {};
        this.awareness.setLocalStateField('flags', { ...oldFlags, [field]: value });
    }
    getFlag(field) {
        const flags = this.awareness.getLocalState()?.flags ?? {};
        return flags[field];
    }
    setReadonly(space, value) {
        const flags = this.getFlag('readonly') ?? {};
        this.setFlag('readonly', {
            ...flags,
            [space.id]: value,
        });
    }
    isReadonly(space) {
        const rd = this.getFlag('readonly');
        if (rd && typeof rd === 'object') {
            return Boolean(rd[space.id]);
        }
        else {
            return false;
        }
    }
    setLocalSelection(space, selection) {
        const oldSelection = this.awareness.getLocalState()?.selectionV2 ?? {};
        this.awareness.setLocalStateField('selectionV2', {
            ...oldSelection,
            [space.id]: selection,
        });
    }
    getLocalSelection(space) {
        return (this.awareness.getLocalState()?.selectionV2 ?? {})[space.id] ?? [];
    }
    getStates() {
        return this.awareness.getStates();
    }
    destroy() {
        if (this.awareness) {
            this.awareness.off('change', this._onAwarenessChange);
            this.slots.update.dispose();
        }
    }
}
//# sourceMappingURL=awareness.js.map