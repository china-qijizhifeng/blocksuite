import { noop } from '@blocksuite/global/utils';
import { EdgelessToolController } from './edgeless-tool.js';
export class TemplateToolController extends EdgelessToolController {
    constructor() {
        super(...arguments);
        this.tool = {
            type: 'template',
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
//# sourceMappingURL=template-tool.js.map