import { Bound } from '../utils/bound.js';
import { PointLocation } from '../utils/point-location.js';
import type { IVec2 } from '../utils/vec.js';
import type { SerializedXYWH } from '../utils/xywh.js';
import { type IBaseProps, type IHitTestOptions, SurfaceElementModel } from './base.js';
export type BrushProps = IBaseProps & {
    /**
     * [[x0,y0,pressure0?],[x1,y1,pressure1?]...]
     * pressure is optional and exsits when pressure sensitivity is supported, otherwise not.
     */
    points: number[][];
    color: string;
    lineWidth: number;
};
export declare class BrushElementModel extends SurfaceElementModel<BrushProps> {
    /**
     * The SVG path commands for the brush.
     */
    get commands(): string;
    get connectable(): boolean;
    get type(): string;
    accessor points: number[][];
    accessor xywh: SerializedXYWH;
    accessor rotate: number;
    accessor color: string;
    accessor lineWidth: number;
    hitTest(px: number, py: number, options?: IHitTestOptions): boolean;
    containedByBounds(bounds: Bound): boolean;
    getNearestPoint(point: IVec2): IVec2;
    intersectWithLine(start: IVec2, end: IVec2): PointLocation[] | null;
    getRelativePointLocation(position: IVec2): PointLocation;
    static propsToY(props: BrushProps): BrushProps;
}
declare global {
    namespace BlockSuite {
        interface SurfaceElementModelMap {
            brush: BrushElementModel;
        }
    }
}
//# sourceMappingURL=brush.d.ts.map