import type { PointerEventState } from '@blocksuite/block-std';
import { EdgelessToolController } from './edgeless-tool.js';
type EraserTool = {
    type: 'eraser';
};
export declare class EraserToolController extends EdgelessToolController<EraserTool> {
    private _overlay;
    private _timestamp;
    private _timer;
    private _eraserPoints;
    private _prevPoint;
    private _prevEraserPoint;
    private _erasables;
    private _eraseTargets;
    readonly tool: EraserTool;
    private _loop;
    private toModelCoord;
    private _reset;
    onContainerPointerDown(): void;
    onContainerDragStart(e: PointerEventState): void;
    onContainerDragMove(e: PointerEventState): void;
    beforeModeSwitch(): void;
    onContainerDragEnd(): void;
    onContainerClick(): void;
    onContainerDblClick(): void;
    onContainerTripleClick(): void;
    onContainerMouseMove(): void;
    onContainerMouseOut(): void;
    onContainerContextMenu(): void;
    onPressShiftKey(_pressed: boolean): void;
    onPressSpaceBar(_pressed: boolean): void;
    afterModeSwitch(_newMode: EraserTool): void;
}
declare global {
    namespace BlockSuite {
        interface EdgelessToolMap {
            eraser: EraserToolController;
        }
    }
}
export {};
//# sourceMappingURL=eraser-tool.d.ts.map