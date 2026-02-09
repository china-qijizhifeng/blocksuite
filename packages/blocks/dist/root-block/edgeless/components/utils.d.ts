import { Bound, type IVec } from '../../../surface-block/index.js';
export declare function generateCursorUrl(angle?: number, fallback?: import("lit").CSSResult): string;
export declare function getCommonRectStyle(rect: DOMRect, active?: boolean, selected?: boolean, rotate?: number): {
    '--affine-border-width': string;
    width: string;
    height: string;
    transform: string;
    backgroundColor: string;
};
export declare function getTooltipWithShortcut(tip: string, shortcut: string, postfix?: string): import("lit").TemplateResult<1>;
export declare function readImageSize(file: File): Promise<{
    width: number;
    height: number;
}>;
export declare function rotateResizeCursor(angle: number): string;
export declare function calcAngle(target: HTMLElement, point: IVec, offset?: number): number;
export declare function calcAngleWithRotation(target: HTMLElement, point: IVec, rect: DOMRect, rotate: number): number;
export declare function calcAngleEdgeWithRotation(target: HTMLElement, rotate: number): number;
export declare function getResizeLabel(target: HTMLElement): string;
export declare function launchIntoFullscreen(element: Element): void;
export declare function calcBoundByOrigin(point: IVec, inTopLeft?: boolean, width?: number, height?: number): Bound;
//# sourceMappingURL=utils.d.ts.map