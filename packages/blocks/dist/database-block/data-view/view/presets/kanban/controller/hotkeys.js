export class KanbanHotkeysController {
    constructor(host) {
        this.host = host;
        this.host.addController(this);
    }
    get hasSelection() {
        return !!this.host.selectionController.selection;
    }
    hostConnected() {
        this.host.disposables.add(this.host.bindHotkey({
            Escape: () => {
                this.host.selectionController.focusOut();
                return true;
            },
            Enter: () => {
                this.host.selectionController.focusIn();
            },
            ArrowUp: context => {
                if (!this.hasSelection)
                    return false;
                this.host.selectionController.focusNext('up');
                context.get('keyboardState').raw.preventDefault();
                return true;
            },
            ArrowDown: context => {
                if (!this.hasSelection)
                    return false;
                this.host.selectionController.focusNext('down');
                context.get('keyboardState').raw.preventDefault();
                return true;
            },
            Tab: context => {
                if (!this.hasSelection)
                    return false;
                this.host.selectionController.focusNext('down');
                context.get('keyboardState').raw.preventDefault();
                return true;
            },
            ArrowLeft: context => {
                if (!this.hasSelection)
                    return false;
                this.host.selectionController.focusNext('left');
                context.get('keyboardState').raw.preventDefault();
                return true;
            },
            ArrowRight: context => {
                if (!this.hasSelection)
                    return false;
                this.host.selectionController.focusNext('right');
                context.get('keyboardState').raw.preventDefault();
                return true;
            },
            Backspace: () => {
                this.host.selectionController.deleteCard();
            },
        }));
    }
}
//# sourceMappingURL=hotkeys.js.map