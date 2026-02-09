import { type IVec2 } from './vec.js';
export declare class Polyline {
    static len(points: IVec2[]): number;
    static pointAt(points: IVec2[], ratio: number): IVec2 | null;
    static pointAtLen(points: IVec2[], len: number): IVec2 | null;
    static nearestPoint(points: IVec2[], point: IVec2): IVec2;
    static lenAtPoint(points: IVec2[], point: IVec2): number;
}
//# sourceMappingURL=polyline.d.ts.map