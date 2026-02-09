export declare function wait(time?: number): Promise<unknown>;
/**
 * simulate click event
 * @param target
 * @param position position relative to the target
 */
export declare function click(target: HTMLElement, position: {
    x: number;
    y: number;
}): void;
/**
 * simulate pointerdown event
 * @param target
 * @param position position relative to the target
 */
export declare function pointerdown(target: HTMLElement, position: {
    x: number;
    y: number;
}): void;
/**
 * simulate pointerup event
 * @param target
 * @param position position relative to the target
 */
export declare function pointerup(target: HTMLElement, position: {
    x: number;
    y: number;
}): void;
/**
 * simulate pointermove event
 * @param target
 * @param position position relative to the target
 */
export declare function pointermove(target: HTMLElement, position: {
    x: number;
    y: number;
}): void;
export declare function drag(target: HTMLElement, start: {
    x: number;
    y: number;
}, end: {
    x: number;
    y: number;
}, step?: number): void;
//# sourceMappingURL=common.d.ts.map