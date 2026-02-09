import { PageKeyboardManager } from '../keyboard/keyboard-manager.js';
import type { EdgelessRootBlockComponent } from './edgeless-root-block.js';
export declare class EdgelessPageKeyboardManager extends PageKeyboardManager {
    rootElement: EdgelessRootBlockComponent;
    constructor(rootElement: EdgelessRootBlockComponent);
    private _bindShiftKey;
    private _bindToggleHand;
    private _space;
    private _shift;
    private _delete;
    private _setEdgelessTool;
    private _move;
}
//# sourceMappingURL=edgeless-keyboard.d.ts.map