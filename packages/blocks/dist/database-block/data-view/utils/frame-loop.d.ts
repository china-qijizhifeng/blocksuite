export declare const startFrameLoop: (fn: (delta: number) => void) => () => void;
export declare const autoScrollOnBoundary: (container: HTMLElement, ops?: {
    vertical?: boolean;
    horizontal?: boolean;
    boundary?: number | {
        left?: number;
        right?: number;
        top?: number;
        bottom?: number;
    };
    onScroll?: () => void;
}) => () => void;
//# sourceMappingURL=frame-loop.d.ts.map