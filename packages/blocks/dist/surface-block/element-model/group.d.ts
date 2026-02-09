import type { Y } from '@blocksuite/store';
import { Bound } from '../utils/bound.js';
import type { PointLocation } from '../utils/point-location.js';
import type { IVec2 } from '../utils/vec.js';
import type { IBaseProps, SerializedElement } from './base.js';
import { SurfaceGroupLikeModel } from './base.js';
type GroupElementProps = IBaseProps & {
    children: Y.Map<boolean>;
    title: Y.Text;
};
export type SerializedGroupElement = SerializedElement & {
    title: string;
    children: Record<string, boolean>;
};
export declare class GroupElementModel extends SurfaceGroupLikeModel<GroupElementProps> {
    get rotate(): number;
    set rotate(_: number);
    get type(): string;
    accessor children: Y.Map<boolean>;
    accessor title: Y.Text;
    accessor showTitle: boolean;
    serialize(): SerializedGroupElement;
    addChild(element: BlockSuite.EdgelessModelType | string): void;
    removeChild(element: BlockSuite.EdgelessModelType | string): void;
    containedByBounds(bound: Bound): boolean;
    intersectWithLine(start: IVec2, end: IVec2): PointLocation[] | null;
    static propsToY(props: Record<string, unknown>): GroupElementProps;
}
declare global {
    namespace BlockSuite {
        interface SurfaceGroupLikeModelMap {
            group: GroupElementModel;
        }
    }
}
export {};
//# sourceMappingURL=group.d.ts.map