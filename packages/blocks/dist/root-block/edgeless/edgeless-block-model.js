import { BlockModel } from '@blocksuite/store';
import { Bound } from '../../surface-block/utils/bound.js';
import { getBoundsWithRotation, getPointsFromBoundsWithRotation, linePolygonIntersects, polygonGetPointTangent, polygonNearestPoint, rotatePoints, } from '../../surface-block/utils/math-utils.js';
import { PointLocation } from '../../surface-block/utils/point-location.js';
export class EdgelessBlockModel extends BlockModel {
    constructor() {
        super(...arguments);
        this._externalXYWH = undefined;
        this.connectable = true;
        this.rotate = 0;
    }
    get externalXYWH() {
        return this._externalXYWH;
    }
    set externalXYWH(xywh) {
        this._externalXYWH = xywh;
    }
    get externalBound() {
        return this._externalXYWH ? Bound.deserialize(this._externalXYWH) : null;
    }
    get elementBound() {
        const bound = Bound.deserialize(this.xywh);
        return Bound.from(getBoundsWithRotation({ ...bound, rotate: this.rotate }));
    }
    get group() {
        const surfaceModel = this.doc.getBlockByFlavour('affine:surface');
        return surfaceModel[0]?.getGroup(this.id) ?? null;
    }
    get groups() {
        const surfaceModel = this.doc.getBlockByFlavour('affine:surface');
        return surfaceModel[0]?.getGroups(this.id) ?? [];
    }
    hitTest(x, y, _, __) {
        const bound = Bound.deserialize(this.xywh);
        return bound.isPointInBound([x, y], 0);
    }
    containedByBounds(bounds) {
        const bound = Bound.deserialize(this.xywh);
        const points = getPointsFromBoundsWithRotation({
            x: bound.x,
            y: bound.y,
            w: bound.w,
            h: bound.h,
            rotate: this.rotate,
        });
        return points.some(point => bounds.containsPoint(point));
    }
    getNearestPoint(point) {
        const bound = Bound.deserialize(this.xywh);
        return polygonNearestPoint(rotatePoints(bound.points, bound.center, this.rotate ?? 0), point);
    }
    intersectWithLine(start, end) {
        const bound = Bound.deserialize(this.xywh);
        return linePolygonIntersects(start, end, rotatePoints(bound.points, bound.center, this.rotate ?? 0));
    }
    getRelativePointLocation(relativePoint) {
        const bound = Bound.deserialize(this.xywh);
        const point = bound.getRelativePoint(relativePoint);
        const rotatePoint = rotatePoints([point], bound.center, this.rotate ?? 0)[0];
        const points = rotatePoints(bound.points, bound.center, this.rotate ?? 0);
        const tangent = polygonGetPointTangent(points, rotatePoint);
        return new PointLocation(rotatePoint, tangent);
    }
    boxSelect(bound) {
        return (this.containedByBounds(bound) ||
            bound.points.some((point, i, points) => this.intersectWithLine(point, points[(i + 1) % points.length])));
    }
}
//# sourceMappingURL=edgeless-block-model.js.map