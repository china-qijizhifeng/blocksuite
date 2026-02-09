import type { PointerEventState } from '@blocksuite/block-std';
import { EdgelessToolController } from './edgeless-tool.js';
type PanTool = {
    type: 'pan';
    panning: boolean;
};
export declare class PanToolController extends EdgelessToolController<PanTool> {
    private _lastPoint;
    readonly tool: PanTool;
    onContainerClick(): void;
    onContainerContextMenu(): void;
    onContainerPointerDown(): void;
    onContainerDblClick(): void;
    onContainerTripleClick(): void;
    onContainerDragStart(e: PointerEventState): void;
    onContainerDragMove(e: PointerEventState): void;
    onContainerDragEnd(): void;
    onContainerMouseMove(): void;
    onContainerMouseOut(): void;
    onPressShiftKey(_: boolean): void;
    onPressSpaceBar(_pressed: boolean): void;
    beforeModeSwitch(): void;
    afterModeSwitch(): void;
}
declare global {
    namespace BlockSuite {
        interface EdgelessToolMap {
            pan: PanToolController;
        }
    }
}
export {};
//# sourceMappingURL=pan-tool.d.ts.map