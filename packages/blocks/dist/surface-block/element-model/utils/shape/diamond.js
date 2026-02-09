import { DEFAULT_CENTRAL_AREA_RATIO } from '../../../consts.js';
import { Bound } from '../../../utils/bound.js';
import { getCenterAreaBounds, getPointsFromBoundsWithRotation, linePolygonIntersects, pointInPolygon, pointOnPolygonStoke, polygonGetPointTangent, polygonNearestPoint, rotatePoints, } from '../../../utils/math-utils.js';
import { PointLocation } from '../../../utils/point-location.js';
export const diamond = {
    points({ x, y, w, h }) {
        return [
            [x, y + h / 2],
            [x + w / 2, y],
            [x + w, y + h / 2],
            [x + w / 2, y + h],
        ];
    },
    draw(ctx, { x, y, w, h, rotate = 0 }) {
        const cx = x + w / 2;
        const cy = y + h / 2;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate((rotate * Math.PI) / 180);
        ctx.translate(-cx, -cy);
        ctx.beginPath();
        ctx.moveTo(x, y + h / 2);
        ctx.lineTo(x + w / 2, y);
        ctx.lineTo(x + w, y + h / 2);
        ctx.lineTo(x + w / 2, y + h);
        ctx.closePath();
        ctx.restore();
    },
    hitTest(x, y, options) {
        const points = getPointsFromBoundsWithRotation(this, diamond.points);
        let hit = pointOnPolygonStoke([x, y], points, (options?.expand ?? 1) / (options.zoom ?? 1));
        if (!hit) {
            if (!options.ignoreTransparent || this.filled) {
                hit = pointInPolygon([x, y], points);
            }
            else {
                // If shape is not filled or transparent
                const text = this.text;
                if (!text || !text.length) {
                    // Check the center area of the shape
                    const centralBounds = getCenterAreaBounds(this, DEFAULT_CENTRAL_AREA_RATIO);
                    const centralPoints = getPointsFromBoundsWithRotation(centralBounds, diamond.points);
                    hit = pointInPolygon([x, y], centralPoints);
                }
                else {
                    hit = this.textBound
                        ? pointInPolygon([x, y], getPointsFromBoundsWithRotation(this.textBound))
                        : false;
                }
            }
        }
        return hit;
    },
    containedByBounds(bounds, element) {
        const points = getPointsFromBoundsWithRotation(element, diamond.points);
        return points.some(point => bounds.containsPoint(point));
    },
    getNearestPoint(point, element) {
        const points = getPointsFromBoundsWithRotation(element, diamond.points);
        return polygonNearestPoint(points, point);
    },
    intersectWithLine(start, end, element) {
        const points = getPointsFromBoundsWithRotation(element, diamond.points);
        return linePolygonIntersects(start, end, points);
    },
    getRelativePointLocation(position, element) {
        const bound = Bound.deserialize(element.xywh);
        const point = bound.getRelativePoint(position);
        let points = diamond.points(bound);
        points.push(point);
        points = rotatePoints(points, bound.center, element.rotate);
        const rotatePoint = points.pop();
        const tangent = polygonGetPointTangent(points, rotatePoint);
        return new PointLocation(rotatePoint, tangent);
    },
};
//# sourceMappingURL=diamond.js.map