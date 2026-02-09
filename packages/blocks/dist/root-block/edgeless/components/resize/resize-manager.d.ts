import type { IPoint } from '../../../../_common/types.js';
import { Bound, type PointLocation } from '../../../../surface-block/index.js';
import type { SelectableProps } from '../../utils/query.js';
import { HandleDirection, type ResizeMode } from './resize-handles.js';
type DragStartHandler = () => void;
type DragEndHandler = () => void;
type ResizeMoveHandler = (bounds: Map<string, {
    bound: Bound;
    path?: PointLocation[];
    matrix?: DOMMatrix;
}>, direction: HandleDirection) => void;
type RotateMoveHandler = (point: IPoint, rotate: number) => void;
export declare class HandleResizeManager {
    get dragDirection(): HandleDirection;
    get dragging(): boolean;
    get rotation(): boolean;
    get currentRect(): DOMRect;
    get originalRect(): DOMRect;
    get bounds(): Map<string, {
        bound: Bound;
        rotate: number;
    }>;
    private _onDragStart;
    private _onResizeMove;
    private _onRotateMove;
    private _onDragEnd;
    private _dragDirection;
    private _dragPos;
    private _rotate;
    /**
     * Record inital rect of selected elements
     */
    private _originalRect;
    /**
     * Current rect of selected elements, it may change during resizing or moving
     */
    private _currentRect;
    private _origin;
    private _resizeMode;
    private _zoom;
    private _bounds;
    private _aspectRatio;
    private _locked;
    private _proportion;
    private _shiftKey;
    private _proportional;
    private _rotation;
    private _target;
    private _dragging;
    constructor(onDragStart: DragStartHandler, onResizeMove: ResizeMoveHandler, onRotateMove: RotateMoveHandler, onDragEnd: DragEndHandler);
    private _onResize;
    private _onRotate;
    updateState(resizeMode: ResizeMode, rotate: number, zoom: number, position?: {
        x: number;
        y: number;
    }, originalRect?: DOMRect, proportion?: boolean): void;
    updateRectPosition(delta: {
        x: number;
        y: number;
    }): DOMRect;
    updateBounds(bounds: Map<string, SelectableProps>): void;
    onPointerDown: (e: PointerEvent, direction: HandleDirection, proportional?: boolean) => void;
    onPressShiftKey(pressed: boolean): void;
}
export {};
//# sourceMappingURL=resize-manager.d.ts.map