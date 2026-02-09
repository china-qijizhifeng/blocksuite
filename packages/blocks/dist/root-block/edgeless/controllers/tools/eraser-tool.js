import { noop } from '@blocksuite/global/utils';
import { buildPath } from '../../../../_common/utils/index.js';
import { Bound, getStroke, getSvgPathFromStroke, linePolygonIntersects, Overlay, } from '../../../../surface-block/index.js';
import { deleteElements } from '../../utils/crud.js';
import { isTopLevelBlock } from '../../utils/query.js';
import { EdgelessToolController } from './edgeless-tool.js';
class EraserOverlay extends Overlay {
    constructor() {
        super(...arguments);
        this.d = '';
    }
    render(ctx) {
        ctx.globalAlpha = 0.33;
        const path = new Path2D(this.d);
        ctx.fillStyle = '#aaa';
        ctx.fill(path);
    }
}
export class EraserToolController extends EdgelessToolController {
    constructor() {
        super(...arguments);
        this._overlay = new EraserOverlay();
        this._timestamp = 0;
        this._timer = 0;
        this._eraserPoints = [];
        this._prevPoint = [];
        this._prevEraserPoint = [];
        this._erasables = new Set();
        this._eraseTargets = new Set();
        this.tool = {
            type: 'eraser',
        };
        this._loop = () => {
            const now = Date.now();
            const elapsed = now - this._timestamp;
            let didUpdate = false;
            if (this._prevEraserPoint !== this._prevPoint) {
                didUpdate = true;
                this._eraserPoints.push(this._prevPoint);
                this._prevEraserPoint = this._prevPoint;
            }
            if (elapsed > 32) {
                if (this._eraserPoints.length > 1) {
                    didUpdate = true;
                    this._eraserPoints.splice(0, Math.ceil(this._eraserPoints.length * 0.1));
                    this._timestamp = now;
                }
            }
            if (didUpdate) {
                const zoom = this._service.viewport.zoom;
                const d = getSvgPathFromStroke(getStroke(this._eraserPoints, {
                    size: 16 / zoom,
                    start: { taper: true },
                }));
                this._overlay.d = d;
                this._edgeless.surface.refresh();
            }
            this._timer = requestAnimationFrame(this._loop);
        };
    }
    toModelCoord(p) {
        return this._service.viewport.toModelCoord(p.x, p.y);
    }
    _reset() {
        cancelAnimationFrame(this._timer);
        this._edgeless.surface.renderer.removeOverlay(this._overlay);
        this._erasables.clear();
        this._eraseTargets.clear();
    }
    onContainerPointerDown() {
        noop();
    }
    onContainerDragStart(e) {
        this._doc.captureSync();
        const { point } = e;
        const [x, y] = this.toModelCoord(point);
        this._eraserPoints = [[x, y]];
        this._prevPoint = [x, y];
        this._erasables = new Set([
            ...this._service.elements,
            ...this._service.blocks,
        ]);
        this._loop();
        this._edgeless.surface.renderer.addOverlay(this._overlay);
    }
    onContainerDragMove(e) {
        const currentPoint = this.toModelCoord(e.point);
        this._erasables.forEach(erasable => {
            if (this._eraseTargets.has(erasable))
                return;
            if (isTopLevelBlock(erasable)) {
                const bound = Bound.deserialize(erasable.xywh);
                if (linePolygonIntersects(this._prevPoint, currentPoint, bound.points)) {
                    this._eraseTargets.add(erasable);
                    const ele = this._edgeless.host.view.viewFromPath('block', buildPath(erasable));
                    ele && (ele.style.opacity = '0.3');
                }
            }
            else {
                if (erasable.intersectWithLine(this._prevPoint, currentPoint)) {
                    this._eraseTargets.add(erasable);
                    erasable.opacity = 0.3;
                }
            }
        });
        this._prevPoint = currentPoint;
    }
    beforeModeSwitch() {
        this._eraseTargets.forEach(erasable => {
            if (isTopLevelBlock(erasable)) {
                const ele = this._edgeless.host.view.viewFromPath('block', buildPath(erasable));
                ele && (ele.style.opacity = '1');
            }
            else {
                erasable.opacity = 1;
            }
        });
        this._reset();
    }
    onContainerDragEnd() {
        deleteElements(this._surface, Array.from(this._eraseTargets));
        this._reset();
        this._doc.captureSync();
    }
    onContainerClick() {
        noop();
    }
    onContainerDblClick() {
        noop();
    }
    onContainerTripleClick() {
        noop();
    }
    onContainerMouseMove() {
        noop();
    }
    onContainerMouseOut() {
        noop();
    }
    onContainerContextMenu() {
        noop();
    }
    onPressShiftKey(_pressed) {
        noop();
    }
    onPressSpaceBar(_pressed) {
        noop();
    }
    afterModeSwitch(_newMode) {
        noop();
    }
}
//# sourceMappingURL=eraser-tool.js.map