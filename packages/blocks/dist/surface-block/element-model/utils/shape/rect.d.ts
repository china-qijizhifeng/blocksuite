import { type IBound } from '../../../consts.js';
import { Bound } from '../../../utils/bound.js';
import { PointLocation } from '../../../utils/point-location.js';
import type { IVec2 } from '../../../utils/vec.js';
import type { IHitTestOptions } from '../../base.js';
import type { ShapeElementModel } from '../../shape.js';
export declare const rect: {
    points({ x, y, w, h }: IBound): number[][];
    draw(ctx: CanvasRenderingContext2D, { x, y, w, h, rotate }: IBound): void;
    hitTest(this: ShapeElementModel, x: number, y: number, options: IHitTestOptions): boolean;
    containedByBounds(bounds: Bound, element: ShapeElementModel): boolean;
    getNearestPoint(point: IVec2, element: ShapeElementModel): import("../../../utils/vec.js").IVec;
    intersectWithLine(start: IVec2, end: IVec2, element: ShapeElementModel): PointLocation[] | null;
    getRelativePointLocation(relativePoint: IVec2, element: ShapeElementModel): PointLocation;
};
//# sourceMappingURL=rect.d.ts.map