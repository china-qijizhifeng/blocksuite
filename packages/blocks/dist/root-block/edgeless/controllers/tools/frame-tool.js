import { assertExists, noop } from '@blocksuite/global/utils';
import { DocCollection } from '@blocksuite/store';
import { Bound, Vec } from '../../../../surface-block/index.js';
import { EdgelessToolController } from './edgeless-tool.js';
export class FrameToolController extends EdgelessToolController {
    constructor() {
        super(...arguments);
        this._startPoint = null;
        this._frame = null;
        this.tool = {
            type: 'frame',
        };
    }
    _toModelCoord(p) {
        return this._service.viewport.toModelCoord(p.x, p.y);
    }
    onContainerPointerDown() {
        noop();
    }
    onContainerDragStart(e) {
        this._doc.captureSync();
        const { point } = e;
        this._startPoint = this._toModelCoord(point);
    }
    onContainerDragMove(e) {
        const currentPoint = this._toModelCoord(e.point);
        assertExists(this._startPoint);
        if (Vec.dist(this._startPoint, currentPoint) < 8 && !this._frame)
            return;
        if (!this._frame) {
            const frames = this._service.frames;
            const id = this._service.addBlock('affine:frame', {
                title: new DocCollection.Y.Text(`Frame ${frames.length + 1}`),
                xywh: Bound.fromPoints([this._startPoint, currentPoint]).serialize(),
            }, this._service.surface);
            this._service.telemetryService?.track('CanvasElementAdded', {
                control: 'canvas:draw',
                page: 'whiteboard editor',
                module: 'toolbar',
                segment: 'toolbar',
                type: 'frame',
            });
            this._frame = this._service.getElementById(id);
            this._frame.stash('xywh');
            return;
        }
        assertExists(this._frame);
        this._service.updateElement(this._frame.id, {
            xywh: Bound.fromPoints([this._startPoint, currentPoint]).serialize(),
        });
    }
    onContainerDragEnd() {
        if (this._frame) {
            const frame = this._frame;
            this._doc.transact(() => {
                frame.pop('xywh');
            });
            this._edgeless.tools.setEdgelessTool({ type: 'default' });
            this._edgeless.service.selection.set({
                elements: [this._frame.id],
                editing: false,
            });
            this._doc.captureSync();
        }
        this._frame = null;
        this._startPoint = null;
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
    onPressShiftKey() {
        noop();
    }
    onPressSpaceBar(_pressed) {
        noop();
    }
    beforeModeSwitch() {
        noop();
    }
    afterModeSwitch() {
        noop();
    }
}
//# sourceMappingURL=frame-tool.js.map