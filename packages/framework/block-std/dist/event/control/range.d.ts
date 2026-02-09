import type { UIEventDispatcher } from '../dispatcher.js';
export declare class RangeControl {
    private _dispatcher;
    private _prev;
    constructor(_dispatcher: UIEventDispatcher);
    private _compositionUpdate;
    private _compositionStart;
    private _compositionEnd;
    private _selectionChange;
    private _createContext;
    private _buildScope;
    private _buildEventScopeByNativeRange;
    private _findBlockElementPath;
    listen(): void;
}
//# sourceMappingURL=range.d.ts.map