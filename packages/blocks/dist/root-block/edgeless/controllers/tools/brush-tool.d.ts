import type { PointerEventState } from '@blocksuite/block-std';
import { EdgelessToolController } from './edgeless-tool.js';
type BrushTool = {
    type: 'brush';
};
export declare class BrushToolController extends EdgelessToolController<BrushTool> {
    static BRUSH_POP_GAP: number;
    private _draggingElement;
    private _draggingElementId;
    private _lastPoint;
    private _straightLineType;
    private _pressureSupportedPointerIds;
    private _lastPopLength;
    protected _draggingPathPoints: number[][] | null;
    protected _draggingPathPressures: number[] | null;
    readonly tool: BrushTool;
    private _getStraightLineType;
    private _tryGetPressurePoints;
    onContainerPointerDown(): void;
    onContainerClick(): void;
    onContainerContextMenu(): void;
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
            brush: BrushToolController;
        }
    }
}
export {};
//# sourceMappingURL=brush-tool.d.ts.map