import { UIEventState, UIEventStateContext, } from '../base.js';
import { bindKeymap } from '../keymap.js';
import { KeyboardEventState } from '../state/index.js';
import { EventScopeSourceType, EventSourceState } from '../state/source.js';
export class KeyboardControl {
    constructor(_dispatcher) {
        this._dispatcher = _dispatcher;
        this.composition = false;
        this._down = (event) => {
            const keyboardEventState = new KeyboardEventState({
                event,
                composing: this.composition,
            });
            this._dispatcher.run('keyDown', this._createContext(event, keyboardEventState));
        };
        this._up = (event) => {
            const keyboardEventState = new KeyboardEventState({
                event,
                composing: this.composition,
            });
            this._dispatcher.run('keyUp', this._createContext(event, keyboardEventState));
        };
    }
    _createContext(event, keyboardState) {
        return UIEventStateContext.from(new UIEventState(event), new EventSourceState({
            event,
            sourceType: EventScopeSourceType.Selection,
        }), keyboardState);
    }
    listen() {
        this._dispatcher.disposables.addFromEvent(document, 'keydown', this._down);
        this._dispatcher.disposables.addFromEvent(document, 'keyup', this._up);
        this._dispatcher.disposables.addFromEvent(document, 'compositionstart', () => {
            this.composition = true;
        });
        this._dispatcher.disposables.addFromEvent(document, 'compositionend', () => {
            this.composition = false;
        });
    }
    bindHotkey(keymap, options) {
        return this._dispatcher.add('keyDown', ctx => {
            if (this.composition) {
                return false;
            }
            const binding = bindKeymap(keymap);
            return binding(ctx);
        }, options);
    }
}
//# sourceMappingURL=keyboard.js.map