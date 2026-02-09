import type { PointerEventState } from '@blocksuite/block-std';
import { LassoMode } from '../../../../_common/types.js';
import type { EdgelessTool } from '../../types.js';
import { EdgelessToolController } from './edgeless-tool.js';
export type LassoTool = {
    type: 'lasso';
    mode: LassoMode;
};
export declare class LassoToolController extends EdgelessToolController<LassoTool> {
    get selection(): import("../../services/selection-manager.js").EdgelessSelectionManager;
    get isSelecting(): boolean;
    private _overlay;
    private _raf;
    private _lassoPoints;
    private _lastPoint;
    private _isSelecting;
    private _currentSelectionState;
    readonly tool: LassoTool;
    private toModelCoord;
    private _loop;
    private _getElementsInsideLasso;
    private _reset;
    private _clearLastSelection;
    private _setSelectionState;
    private _getSelectionMode;
    private isInsideLassoSelection;
    private _updateSelection;
    abort(): void;
    onContainerDragStart(e: PointerEventState): void;
    onContainerDragMove(e: PointerEventState): void;
    onContainerDragEnd(e: PointerEventState): void;
    onContainerPointerDown(e: PointerEventState): void;
    onContainerMouseMove(e: PointerEventState): void;
    onContainerClick(): void;
    onContainerDblClick(): void;
    onContainerTripleClick(): void;
    onContainerMouseOut(): void;
    onContainerContextMenu(): void;
    beforeModeSwitch(edgelessTool?: EdgelessTool): void;
    afterModeSwitch(newTool?: EdgelessTool): void;
    onPressShiftKey(): void;
    onPressSpaceBar(): void;
}
declare global {
    namespace BlockSuite {
        interface EdgelessToolMap {
            lasso: LassoToolController;
        }
    }
}
//# sourceMappingURL=lasso-tool.d.ts.map