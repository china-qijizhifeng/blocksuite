import type { Bound } from './bound.js';
import type { IVec } from './vec.js';
export declare class Graph {
    private points;
    private blocks;
    private expandedBlocks;
    private excludedPoints;
    private _xMap;
    private _yMap;
    constructor(points: IVec[], blocks?: Bound[], expandedBlocks?: Bound[], excludedPoints?: IVec[]);
    private _isBlock;
    private _canSkipBlock;
    neighbors(curPoint: IVec): IVec[];
}
//# sourceMappingURL=graph.d.ts.map