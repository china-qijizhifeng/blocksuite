import type { NavigatorMode } from '../../../../_common/edgeless/frame/consts.js';
import { EdgelessToolController } from './edgeless-tool.js';
type FrameNavigatorTool = {
    type: 'frameNavigator';
    mode?: NavigatorMode;
};
export declare class PresentToolController extends EdgelessToolController<FrameNavigatorTool> {
    readonly tool: FrameNavigatorTool;
    onContainerPointerDown(): void;
    onContainerDragStart(): void;
    onContainerDragMove(): void;
    onContainerDragEnd(): void;
    onContainerClick(): void;
    onContainerDblClick(): void;
    onContainerTripleClick(): void;
    onContainerMouseMove(): void;
    onContainerMouseOut(): void;
    onContainerContextMenu(): void;
    onPressShiftKey(): void;
    onPressSpaceBar(_pressed: boolean): void;
    beforeModeSwitch(): void;
    afterModeSwitch(): void;
}
declare global {
    namespace BlockSuite {
        interface EdgelessToolMap {
            'frame-navigator': PresentToolController;
        }
    }
}
export {};
//# sourceMappingURL=frame-navigator-tool.d.ts.map