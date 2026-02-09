export declare function isPinchEvent(e: WheelEvent): boolean;
export declare enum MOUSE_BUTTONS {
    NO_BUTTON = 0,
    PRIMARY = 1,
    SECONDARY = 2,
    AUXILIARY = 4,
    FORTH = 8,
    FIFTH = 16
}
export declare enum MOUSE_BUTTON {
    MAIN = 0,
    AUXILIARY = 1,
    SECONDARY = 2,
    FORTH = 3,
    FIFTH = 4
}
export declare function isMiddleButtonPressed(e: MouseEvent): boolean;
export declare function isRightButtonPressed(e: MouseEvent): boolean;
export declare function stopPropagation(event: Event): void;
export declare function isControlledKeyboardEvent(e: KeyboardEvent): boolean;
export declare function on<T extends HTMLElement, K extends keyof M, M = HTMLElementEventMap>(element: T, event: K, handler: (ev: M[K]) => void, options?: boolean | AddEventListenerOptions): () => void;
export declare function on<T extends HTMLElement>(element: T, event: string, handler: (ev: Event) => void, options?: boolean | AddEventListenerOptions): () => void;
export declare function on<T extends Document, K extends keyof M, M = DocumentEventMap>(element: T, event: K, handler: (ev: M[K]) => void, options?: boolean | AddEventListenerOptions): () => void;
export declare function once<T extends HTMLElement, K extends keyof M, M = HTMLElementEventMap>(element: T, event: K, handler: (ev: M[K]) => void, options?: boolean | AddEventListenerOptions): () => void;
export declare function once<T extends HTMLElement>(element: T, event: string, handler: (ev: Event) => void, options?: boolean | AddEventListenerOptions): () => void;
export declare function once<T extends Document, K extends keyof M, M = DocumentEventMap>(element: T, event: K, handler: (ev: M[K]) => void, options?: boolean | AddEventListenerOptions): () => void;
export declare function delayCallback(callback: () => void, delay?: number): () => void;
/**
 * A wrapper around `requestAnimationFrame` that only calls the callback if the
 * element is still connected to the DOM.
 */
export declare function requestConnectedFrame(callback: () => void, element?: HTMLElement): number;
/**
 * A wrapper around `requestConnectedFrame` that only calls at most once in one frame
 */
export declare function requestThrottledConnectFrame<T extends (...args: unknown[]) => void>(func: T, element?: HTMLElement): T;
//# sourceMappingURL=event.d.ts.map