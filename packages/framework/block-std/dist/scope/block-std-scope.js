import { Clipboard } from '../clipboard/index.js';
import { CommandManager } from '../command/index.js';
import { UIEventDispatcher } from '../event/index.js';
import { SelectionManager } from '../selection/index.js';
import { SpecStore } from '../spec/index.js';
import { ViewStore } from '../view/index.js';
export class BlockStdScope {
    constructor(options) {
        this.host = options.host;
        this.collection = options.doc.collection;
        this.doc = options.doc;
        this.event = new UIEventDispatcher(this);
        this.selection = new SelectionManager(this);
        this.command = new CommandManager(this);
        this.spec = new SpecStore(this);
        this.view = new ViewStore(this);
        this.clipboard = new Clipboard(this);
    }
    mount() {
        this.selection.mount();
        this.event.mount();
        this.view.mount();
        this.spec.mount();
    }
    unmount() {
        this.event.unmount();
        this.selection.unmount();
        this.view.unmount();
        this.spec.unmount();
    }
}
//# sourceMappingURL=block-std-scope.js.map