import { assertExists } from '@blocksuite/global/utils';
import { UIEventState, UIEventStateContext } from '../base.js';
import { PointerEventState } from '../state/index.js';
import { EventScopeSourceType, EventSourceState } from '../state/source.js';
import { isFarEnough } from '../utils.js';
export class PointerControl {
    get _rect() {
        return this._dispatcher.host.getBoundingClientRect();
    }
    constructor(_dispatcher) {
        this._dispatcher = _dispatcher;
        this._lastPointerDownEvent = null;
        this._startDragState = null;
        this._lastDragState = null;
        this._pointerDownCount = 0;
        this._dragging = false;
        this._startX = -Infinity;
        this._startY = -Infinity;
        this._reset = () => {
            this._startX = -Infinity;
            this._startY = -Infinity;
            this._lastDragState = null;
            this._dragging = false;
        };
        this._down = (event) => {
            if (this._lastPointerDownEvent &&
                event.timeStamp - this._lastPointerDownEvent.timeStamp < 500 &&
                !isFarEnough(event, this._lastPointerDownEvent)) {
                this._pointerDownCount++;
            }
            else {
                this._pointerDownCount = 1;
            }
            const pointerEventState = new PointerEventState({
                event,
                rect: this._rect,
                startX: this._startX,
                startY: this._startY,
                last: null,
            });
            this._startX = pointerEventState.point.x;
            this._startY = pointerEventState.point.y;
            this._startDragState = pointerEventState;
            this._lastDragState = pointerEventState;
            this._lastPointerDownEvent = event;
            this._dispatcher.run('pointerDown', this._createContext(event, pointerEventState));
            this._dispatcher.disposables.addFromEvent(document, 'pointermove', this._move);
            this._dispatcher.disposables.addFromEvent(document, 'pointerup', this._up);
        };
        this._up = (event) => {
            const pointerEventState = new PointerEventState({
                event,
                rect: this._rect,
                startX: this._startX,
                startY: this._startY,
                last: this._lastDragState,
            });
            const context = this._createContext(event, pointerEventState);
            const run = () => {
                if (this._dragging) {
                    this._dispatcher.run('dragEnd', context);
                    return;
                }
                this._dispatcher.run('click', context);
                if (this._pointerDownCount === 2) {
                    this._dispatcher.run('doubleClick', context);
                }
                if (this._pointerDownCount === 3) {
                    this._dispatcher.run('tripleClick', context);
                }
            };
            run();
            this._dispatcher.run('pointerUp', context);
            this._reset();
            document.removeEventListener('pointermove', this._move);
            document.removeEventListener('pointerup', this._up);
        };
        this._move = (event) => {
            const last = this._lastDragState;
            const state = new PointerEventState({
                event,
                rect: this._rect,
                startX: this._startX,
                startY: this._startY,
                last,
            });
            this._lastDragState = state;
            assertExists(this._startDragState);
            if (!this._dragging && isFarEnough(this._startDragState.raw, state.raw)) {
                this._dragging = true;
                this._dispatcher.run('dragStart', this._createContext(event, this._startDragState));
            }
            if (this._dragging) {
                this._dispatcher.run('dragMove', this._createContext(event, state));
            }
        };
        this._moveOn = (event) => {
            const state = new PointerEventState({
                event,
                rect: this._rect,
                startX: this._startX,
                startY: this._startY,
                last: this._lastDragState,
            });
            this._dispatcher.run('pointerMove', this._createContext(event, state));
        };
        this._out = (event) => {
            const state = new PointerEventState({
                event,
                rect: this._rect,
                startX: -Infinity,
                startY: -Infinity,
                last: null,
            });
            this._dispatcher.run('pointerOut', this._createContext(event, state));
        };
    }
    _createContext(event, pointerState) {
        return UIEventStateContext.from(new UIEventState(event), new EventSourceState({
            event,
            sourceType: EventScopeSourceType.Target,
        }), pointerState);
    }
    listen() {
        this._dispatcher.disposables.addFromEvent(this._dispatcher.host, 'pointerdown', this._down);
        this._dispatcher.disposables.addFromEvent(this._dispatcher.host, 'pointermove', this._moveOn);
        this._dispatcher.disposables.addFromEvent(this._dispatcher.host, 'pointerout', this._out);
    }
}
//# sourceMappingURL=pointer.js.map