import { noop } from '@blocksuite/global/utils';
import { EdgelessToolController } from './edgeless-tool.js';
export class PresentToolController extends EdgelessToolController {
    constructor() {
        super(...arguments);
        this.tool = {
            type: 'frameNavigator',
        };
    }
    onContainerPointerDown() {
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
//# sourceMappingURL=frame-navigator-tool.js.map