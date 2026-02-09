import { DisposableGroup } from '@blocksuite/global/utils';
export class BlockService {
    constructor(options) {
        this.disposables = new DisposableGroup();
        this.flavour = options.flavour;
        this.std = options.std;
        this.specSlots = options.slots;
    }
    get collection() {
        return this.std.collection;
    }
    get doc() {
        return this.std.doc;
    }
    get host() {
        return this.std.host;
    }
    get selectionManager() {
        return this.std.selection;
    }
    get uiEventDispatcher() {
        return this.std.event;
    }
    // life cycle start
    dispose() {
        this.disposables.dispose();
    }
    mounted() {
        this.specSlots.mounted.emit({ service: this });
    }
    unmounted() {
        this.specSlots.unmounted.emit({ service: this });
    }
    // life cycle end
    // event handlers start
    handleEvent(name, fn, options) {
        this.disposables.add(this.uiEventDispatcher.add(name, fn, {
            flavour: options?.global ? undefined : this.flavour,
        }));
    }
    bindHotKey(keymap, options) {
        this.disposables.add(this.uiEventDispatcher.bindHotkey(keymap, {
            flavour: options?.global ? undefined : this.flavour,
        }));
    }
}
//# sourceMappingURL=index.js.map