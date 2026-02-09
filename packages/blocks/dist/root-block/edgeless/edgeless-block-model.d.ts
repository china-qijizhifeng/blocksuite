import type { EditorHost } from '@blocksuite/block-std';
import { BlockModel } from '@blocksuite/store';
import type { EdgelessSelectableProps } from '../../_common/edgeless/mixin/edgeless-selectable.js';
import type { IEdgelessElement, IHitTestOptions } from '../../surface-block/element-model/base.js';
import { Bound } from '../../surface-block/utils/bound.js';
import { PointLocation } from '../../surface-block/utils/point-location.js';
import type { IVec } from '../../surface-block/utils/vec.js';
import type { SerializedXYWH } from '../../surface-block/utils/xywh.js';
export declare class EdgelessBlockModel<Props extends EdgelessSelectableProps = EdgelessSelectableProps> extends BlockModel<Props> implements IEdgelessElement {
    get externalXYWH(): SerializedXYWH | undefined;
    set externalXYWH(xywh: SerializedXYWH | undefined);
    get externalBound(): Bound | null;
    get elementBound(): Bound;
    get group(): IEdgelessElement['group'];
    get groups(): import("../../surface-block/element-model/base.js").SurfaceGroupLikeModel<import("../../surface-block/element-model/base.js").IBaseProps>[];
    private _externalXYWH;
    connectable: boolean;
    rotate: number;
    hitTest(x: number, y: number, _: IHitTestOptions, __: EditorHost): boolean;
    containedByBounds(bounds: Bound): boolean;
    getNearestPoint(point: IVec): IVec;
    intersectWithLine(start: IVec, end: IVec): PointLocation[] | null;
    getRelativePointLocation(relativePoint: IVec): PointLocation;
    boxSelect(bound: Bound): boolean;
}
//# sourceMappingURL=edgeless-block-model.d.ts.map