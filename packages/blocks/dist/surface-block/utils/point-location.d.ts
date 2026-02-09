import { type IVec } from './vec.js';
export declare class PointLocation extends Array<number> implements IVec {
    get tangent(): IVec;
    set tangent(value: IVec);
    get in(): IVec;
    get absIn(): number[];
    set in(value: IVec);
    get out(): IVec;
    get absOut(): number[];
    set out(value: IVec);
    _tangent: IVec;
    _in: IVec;
    _out: IVec;
    constructor(point?: IVec, tangent?: IVec, inVec?: IVec, outVec?: IVec);
    toVec(): IVec;
    setVec(vec: IVec): this;
    clone(): PointLocation;
    static fromVec(vec: IVec): PointLocation;
}
//# sourceMappingURL=point-location.d.ts.map