import { noop } from '@blocksuite/global/utils';
import { addText } from '../../utils/text.js';
import { EdgelessToolController } from './edgeless-tool.js';
export class TextToolController extends EdgelessToolController {
    constructor() {
        super(...arguments);
        this.tool = {
            type: 'text',
        };
    }
    onContainerClick(e) {
        const textFlag = this._edgeless.doc.awarenessStore.getFlag('enable_edgeless_text');
        if (textFlag) {
            const [x, y] = this._service.viewport.toModelCoord(e.x, e.y);
            const textService = this._edgeless.host.spec.getService('affine:edgeless-text');
            textService.initEdgelessTextBlock({
                edgeless: this._edgeless,
                x,
                y,
            });
            this._service.tool.setEdgelessTool({
                type: 'default',
            });
        }
        else {
            addText(this._edgeless, e);
        }
        this._service.telemetryService?.track('CanvasElementAdded', {
            control: 'canvas:draw',
            page: 'whiteboard editor',
            module: 'toolbar',
            segment: 'toolbar',
            type: 'text',
        });
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
    onContainerDragStart() {
        noop();
    }
    onContainerDragMove() {
        noop();
    }
    onContainerDragEnd() {
        noop();
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
//# sourceMappingURL=text-tool.js.map