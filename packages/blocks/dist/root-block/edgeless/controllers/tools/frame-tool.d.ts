import type { PointerEventState } from '@blocksuite/block-std';
import { EdgelessToolController } from './edgeless-tool.js';
type FrameTool = {
    type: 'frame';
};
export declare class FrameToolController extends EdgelessToolController<FrameTool> {
    private _startPoint;
    private _frame;
    readonly tool: FrameTool;
    private _toModelCoord;
    onContainerPointerDown(): void;
    onContainerDragStart(e: PointerEventState): void;
    onContainerDragMove(e: PointerEventState): void;
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
            frame: FrameToolController;
        }
    }
}
export {};
//# sourceMappingURL=frame-tool.d.ts.map