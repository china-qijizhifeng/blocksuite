import { UIEventState } from '../base.js';
type PointerEventStateOptions = {
    event: PointerEvent;
    rect: DOMRect;
    startX: number;
    startY: number;
    last: PointerEventState | null;
};
type Point = {
    x: number;
    y: number;
};
export declare class PointerEventState extends UIEventState {
    type: string;
    raw: PointerEvent;
    point: Point;
    containerOffset: Point;
    start: Point;
    delta: Point;
    keys: {
        shift: boolean;
        cmd: boolean;
        alt: boolean;
    };
    button: number;
    dragging: boolean;
    pressure: number;
    get x(): number;
    get y(): number;
    constructor({ event, rect, startX, startY, last }: PointerEventStateOptions);
}
declare global {
    interface BlockSuiteUIEventState {
        pointerState: PointerEventState;
    }
}
export {};
//# sourceMappingURL=pointer.d.ts.map