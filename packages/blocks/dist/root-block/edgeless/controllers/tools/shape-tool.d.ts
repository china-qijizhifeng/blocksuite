import type { PointerEventState } from '@blocksuite/block-std';
import type { ShapeType } from '../../../../surface-block/index.js';
import type { SelectionArea } from '../../services/tools-manager.js';
import type { EdgelessTool } from '../../types.js';
import { EdgelessToolController } from './edgeless-tool.js';
export type ShapeTool = {
    type: 'shape';
    shapeType: ShapeType | 'roundedRect';
};
export declare class ShapeToolController extends EdgelessToolController<ShapeTool> {
    private _draggingElement;
    private _draggingElementId;
    private _shapeOverlay;
    private _moveWithSpaceStartPos;
    private _moveWithSpaceShapePosTemp;
    private _disableOverlay;
    protected _draggingArea: SelectionArea | null;
    readonly tool: ShapeTool;
    private _addNewShape;
    private _move;
    private _resize;
    private _updateOverlayPosition;
    private _hideOverlay;
    setDisableOverlay(disable: boolean): void;
    onContainerClick(e: PointerEventState): void;
    onContainerContextMenu(): void;
    onContainerPointerDown(): void;
    onContainerDblClick(): void;
    onContainerTripleClick(): void;
    onContainerDragStart(e: PointerEventState): void;
    onContainerDragMove(e: PointerEventState): void;
    onContainerDragEnd(): void;
    onPressShiftKey(pressed: boolean): void;
    onPressSpaceBar(pressed: boolean): void;
    clearOverlay(): void;
    onContainerMouseMove(e: PointerEventState): void;
    onContainerMouseOut(e: PointerEventState): void;
    beforeModeSwitch(): void;
    afterModeSwitch(newTool: EdgelessTool): void;
    createOverlay(): void;
}
declare global {
    namespace BlockSuite {
        interface EdgelessToolMap {
            shape: ShapeToolController;
        }
    }
}
//# sourceMappingURL=shape-tool.d.ts.map