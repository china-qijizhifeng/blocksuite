import type { PointerEventState } from '@blocksuite/block-std';
import { type NoteChildrenFlavour } from '../../../../_common/utils/index.js';
import type { SelectionArea } from '../../services/tools-manager.js';
import type { EdgelessTool } from '../../types.js';
import { EdgelessToolController } from './edgeless-tool.js';
export type NoteTool = {
    type: 'affine:note';
    childFlavour: NoteChildrenFlavour;
    childType: string | null;
    tip: string;
};
export declare class NoteToolController extends EdgelessToolController<NoteTool> {
    private _noteOverlay;
    private _draggingNoteOverlay;
    protected _draggingArea: SelectionArea | null;
    readonly tool: NoteTool;
    private _resize;
    private _updateOverlayPosition;
    private _disposeOverlay;
    private _clearOverlay;
    private _hideOverlay;
    onPressShiftKey(pressed: boolean): void;
    onPressSpaceBar(_pressed: boolean): void;
    onContainerPointerDown(): void;
    onContainerClick(e: PointerEventState): void;
    onContainerContextMenu(): void;
    onContainerDblClick(): void;
    onContainerTripleClick(): void;
    onContainerDragStart(e: PointerEventState): void;
    onContainerDragMove(e: PointerEventState): void;
    onContainerDragEnd(): void;
    onContainerMouseMove(e: PointerEventState): void;
    onContainerMouseOut(e: PointerEventState): void;
    beforeModeSwitch(): void;
    afterModeSwitch(newTool: EdgelessTool): void;
}
declare global {
    namespace BlockSuite {
        interface EdgelessToolMap {
            note: NoteToolController;
        }
    }
}
//# sourceMappingURL=note-tool.d.ts.map