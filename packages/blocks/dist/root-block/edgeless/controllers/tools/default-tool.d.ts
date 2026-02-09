import type { PointerEventState } from '@blocksuite/block-std';
import type { EdgelessTool } from '../../types.js';
import { EdgelessToolController } from './edgeless-tool.js';
export declare enum DefaultModeDragType {
    /** Moving selected contents */
    ContentMoving = "content-moving",
    /** Expanding the dragging area, select the content covered inside */
    Selecting = "selecting",
    /** Native range dragging inside active note block */
    NativeEditing = "native-editing",
    /** Default void state */
    None = "none",
    /** Dragging preview */
    PreviewDragging = "preview-dragging",
    /** press alt/option key to clone selected  */
    AltCloning = "alt-cloning",
    /** Moving connector label */
    ConnectorLabelMoving = "connector-label-moving"
}
type DefaultTool = {
    type: 'default';
};
export declare class DefaultToolController extends EdgelessToolController<DefaultTool> {
    private _dragStartPos;
    private _dragLastPos;
    private _dragStartModelCoord;
    private _dragLastModelCoord;
    private _lock;
    private _isDoubleClickedOnMask;
    private _alignBound;
    private _selectedBounds;
    private _toBeMoved;
    private _autoPanTimer;
    private _dragging;
    private _wheeling;
    private _disposables;
    private _moveSelectionStartPos;
    private _moveSelectionDragStartTemp;
    private _selectedConnector;
    private _selectedConnectorLabelBounds;
    private _clearMindMapHoverState;
    private _hoveredMindMap;
    private _draggingSingleMindmap;
    readonly tool: DefaultTool;
    enableHover: boolean;
    dragType: DefaultModeDragType;
    get draggingArea(): {
        start: DOMPoint;
        end: DOMPoint;
    } | null;
    get edgelessSelectionManager(): import("../../services/selection-manager.js").EdgelessSelectionManager;
    get zoom(): number;
    get readonly(): boolean;
    private _pick;
    private _addEmptyParagraphBlock;
    private _isDraggable;
    private _determineDragType;
    private _cloneContent;
    private _updateSelectingState;
    private _panViewport;
    private _stopAutoPanning;
    private _clearLastSelection;
    private _clearDisposable;
    private _startAutoPanning;
    private _clearSelectingState;
    private _filterConnectedConnector;
    private initializeDragState;
    private _moveContent;
    private _moveLabel;
    onContainerPointerDown(): void;
    onContainerClick(e: PointerEventState): void;
    onContainerContextMenu(): void;
    onContainerDblClick(e: PointerEventState): void;
    onContainerTripleClick(): void;
    onContainerDragStart(e: PointerEventState): Promise<void>;
    onContainerDragMove(e: PointerEventState): void;
    onContainerDragEnd(): void;
    onContainerMouseMove(): void;
    onContainerMouseOut(_: PointerEventState): void;
    onPressShiftKey(_: boolean): void;
    onPressSpaceBar(_pressed: boolean): void;
    beforeModeSwitch(edgelessTool?: EdgelessTool): void;
    afterModeSwitch(): void;
}
declare global {
    namespace BlockSuite {
        interface EdgelessToolMap {
            default: DefaultToolController;
        }
    }
}
export {};
//# sourceMappingURL=default-tool.d.ts.map