import type { UIEventDispatcher } from '../dispatcher.js';
export declare class PointerControl {
    private _dispatcher;
    private get _rect();
    private _lastPointerDownEvent;
    private _startDragState;
    private _lastDragState;
    private _pointerDownCount;
    private _dragging;
    private _startX;
    private _startY;
    constructor(_dispatcher: UIEventDispatcher);
    private _reset;
    private _createContext;
    private _down;
    private _up;
    private _move;
    private _moveOn;
    private _out;
    listen(): void;
}
//# sourceMappingURL=pointer.d.ts.map