import type { PointerEventState } from '@blocksuite/block-std';
import { Slot } from '@blocksuite/store';
import type { EdgelessTool } from '../../types.js';
import { EdgelessToolController } from './edgeless-tool.js';
type CopilotSelectionTool = {
    type: 'copilot';
};
export declare class CopilotSelectionController extends EdgelessToolController<CopilotSelectionTool> {
    private _dragging;
    readonly tool: CopilotSelectionTool;
    dragStartPoint: [number, number];
    dragLastPoint: [number, number];
    draggingAreaUpdated: Slot<boolean | void>;
    get selection(): import("../../services/selection-manager.js").EdgelessSelectionManager;
    get selectedElements(): BlockSuite.EdgelessModelType[];
    get area(): DOMRect;
    get processing(): boolean;
    private _initDragState;
    abort(): void;
    updateDragPointsWith(selectedElements: BlockSuite.EdgelessModelType[], padding?: number): void;
    updateSelectionWith(selectedElements: BlockSuite.EdgelessModelType[], padding?: number): void;
    onContainerDragStart(e: PointerEventState): void;
    onContainerDragMove(e: PointerEventState): void;
    onContainerDragEnd(): void;
    onContainerPointerDown(e: PointerEventState): void;
    onContainerClick(): void;
    onContainerContextMenu(): void;
    onContainerDblClick(): void;
    onContainerTripleClick(): void;
    onContainerMouseMove(): void;
    onContainerMouseOut(): void;
    onPressShiftKey(): void;
    onPressSpaceBar(): void;
    beforeModeSwitch(edgelessTool?: EdgelessTool): void;
    afterModeSwitch(): void;
}
declare global {
    namespace BlockSuite {
        interface EdgelessToolMap {
            'copilot-selection': CopilotSelectionController;
        }
    }
}
export {};
//# sourceMappingURL=copilot-tool.d.ts.map