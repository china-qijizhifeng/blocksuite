import type { GroupElementModel } from '../../../element-model/group.js';
import { Bound } from '../../../utils/bound.js';
export declare function titleRenderParams(group: GroupElementModel, zoom: number): {
    radius: number;
    font: string;
    bound: Bound;
    text: string;
    titleWidth: number;
    titleHeight: number;
    lineHeight: number;
    padding: number[];
    offset: number;
    titleBound: Bound;
};
export declare function titleBound(group: GroupElementModel, zoom: number): Bound;
//# sourceMappingURL=utils.d.ts.map