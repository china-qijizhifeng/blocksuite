import type { Bound } from './bound.js';
import type { IVec } from './vec.js';
export declare class AStarRunner {
    private _sp;
    private _ep;
    private _originalSp;
    private _originalEp;
    private _cameFrom;
    private _frontier;
    private _graph;
    private _costSoFar;
    private _diagonalCount;
    private _pointPriority;
    private _current;
    private _complete;
    constructor(points: IVec[], _sp: IVec, _ep: IVec, _originalSp: IVec, _originalEp: IVec, blocks?: Bound[], expandBlocks?: Bound[]);
    private _init;
    private _neighbors;
    step(): void;
    reset(): void;
    run(): void;
    get path(): IVec[];
}
//# sourceMappingURL=a-star.d.ts.map