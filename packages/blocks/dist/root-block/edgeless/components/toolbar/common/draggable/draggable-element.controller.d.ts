import { type ReactiveController, type ReactiveControllerHost } from 'lit';
import { type DraggingInfo } from './overlay-factory.js';
import { type EdgelessDraggableElementHost, type EdgelessDraggableElementOptions, type ElementInfo, type OverlayLayer } from './types.js';
interface ReactiveState<T> {
    cancelled: boolean;
    draggingElement: ElementInfo<T> | null;
    dragOut: boolean | null;
}
interface EventCache {
    onMouseUp?: (e: MouseEvent) => void;
    onMouseMove?: (e: MouseEvent) => void;
    onTouchMove?: (e: TouchEvent) => void;
    onTouchEnd?: (e: TouchEvent) => void;
}
export declare class EdgelessDraggableElementController<T> implements ReactiveController {
    host: EdgelessDraggableElementHost & ReactiveControllerHost;
    options: EdgelessDraggableElementOptions<T>;
    overlay: OverlayLayer | null;
    info: DraggingInfo<T>;
    clearTimeout: ReturnType<typeof setTimeout> | null;
    states: ReactiveState<T>;
    events: EventCache;
    constructor(host: EdgelessDraggableElementHost & ReactiveControllerHost, options: EdgelessDraggableElementOptions<T>);
    /**
     * @internal
     */
    private _updateState;
    private _updateStates;
    private _onDragStart;
    private _onDragMove;
    private _onDragEnd;
    private _createOverlay;
    /**
     * Update overlay shape scale according to the current zoom level
     */
    private _updateOverlayScale;
    /**
     * let overlay shape animate back to the original position
     */
    private _animateCancelDrop;
    onMouseDown(e: MouseEvent, elementInfo: ElementInfo<T>): void;
    onTouchStart(e: TouchEvent, elementInfo: ElementInfo<T>): void;
    /**
     * Cancel the current dragging & animate even if dragOut
     */
    cancel(): void;
    /**
     * Same as {@link cancel} but without animation
     */
    cancelWithoutAnimation(): void;
    reset(): void;
    removeAllEvents(): void;
    hostConnected(): void;
    hostDisconnected(): void;
    /**
     * A workaround to apply click event manually
     */
    clickToDrag(target: HTMLElement, startPos: {
        x: number;
        y: number;
    }): void;
    updateElementInfo(elementInfo: Partial<ElementInfo<T>>): void;
}
export {};
//# sourceMappingURL=draggable-element.controller.d.ts.map