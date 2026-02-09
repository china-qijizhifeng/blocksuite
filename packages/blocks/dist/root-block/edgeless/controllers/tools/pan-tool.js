import { noop } from '@blocksuite/global/utils';
import { EdgelessToolController } from './edgeless-tool.js';
export class PanToolController extends EdgelessToolController {
    constructor() {
        super(...arguments);
        this._lastPoint = null;
        this.tool = {
            type: 'pan',
        };
    }
    onContainerClick() {
        noop();
    }
    onContainerContextMenu() {
        noop();
    }
    onContainerPointerDown() {
        noop();
    }
    onContainerDblClick() {
        noop();
    }
    onContainerTripleClick() {
        noop();
    }
    onContainerDragStart(e) {
        this._lastPoint = [e.x, e.y];
        this._edgeless.tools.setEdgelessTool({
            type: 'pan',
            panning: true,
        });
    }
    onContainerDragMove(e) {
        if (!this._lastPoint)
            return;
        const { viewport } = this._service;
        const { zoom } = viewport;
        const [lastX, lastY] = this._lastPoint;
        const deltaX = lastX - e.x;
        const deltaY = lastY - e.y;
        this._lastPoint = [e.x, e.y];
        viewport.applyDeltaCenter(deltaX / zoom, deltaY / zoom);
    }
    onContainerDragEnd() {
        this._lastPoint = null;
        this._edgeless.tools.setEdgelessTool({
            type: 'pan',
            panning: false,
        });
    }
    onContainerMouseMove() {
        noop();
    }
    onContainerMouseOut() {
        noop();
    }
    onPressShiftKey(_) {
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
//# sourceMappingURL=pan-tool.js.map