import { type UIEventHandler } from '../base.js';
import type { EventOptions, UIEventDispatcher } from '../dispatcher.js';
export declare class KeyboardControl {
    private _dispatcher;
    private composition;
    constructor(_dispatcher: UIEventDispatcher);
    private _createContext;
    private _down;
    private _up;
    listen(): void;
    bindHotkey(keymap: Record<string, UIEventHandler>, options?: EventOptions): () => void;
}
//# sourceMappingURL=keyboard.d.ts.map