import '../connector/connector-handle.js';
import '../auto-complete/edgeless-auto-complete.js';
import { Slot } from '@blocksuite/global/utils';
import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
import { HandleDirection } from '../resize/resize-handles.js';
import { type ResizeMode } from '../resize/resize-handles.js';
export type SelectedRect = {
    left: number;
    top: number;
    width: number;
    height: number;
    borderWidth: number;
    borderStyle: string;
    rotate: number;
};
declare const EdgelessSelectedRect_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessSelectedRect extends EdgelessSelectedRect_base {
    #private;
    get dragging(): boolean;
    get dragDirection(): HandleDirection;
    get selection(): import("../../services/selection-manager.js").EdgelessSelectionManager;
    get doc(): import("@blocksuite/store").Doc;
    get edgelessSlots(): {
        edgelessToolUpdated: Slot<import("../../controllers/tools/text-tool.js").TextTool | import("../../controllers/tools/connector-tool.js").ConnectorTool | {
            type: "default";
        } | {
            type: "copilot";
        } | {
            type: "brush";
        } | {
            type: "eraser";
        } | {
            type: "frameNavigator";
            mode?: import("@blocksuite/blocks").NavigatorMode | undefined;
        } | {
            type: "frame";
        } | import("../../controllers/tools/lasso-tool.js").LassoTool | {
            type: "mindmap";
        } | import("../../controllers/tools/note-tool.js").NoteTool | {
            type: "pan";
            panning: boolean;
        } | import("../../controllers/tools/shape-tool.js").ShapeTool | {
            type: "template";
        }>;
        pressShiftKeyUpdated: Slot<boolean>;
        cursorUpdated: Slot<string>;
        copyAsPng: Slot<{
            blocks: BlockSuite.EdgelessBlockModelType[];
            shapes: BlockSuite.SurfaceModelType[];
        }>;
        readonlyUpdated: Slot<boolean>;
        draggingAreaUpdated: Slot<void>;
        navigatorSettingUpdated: Slot<{
            hideToolbar?: boolean | undefined;
            blackBackground?: boolean | undefined;
            fillScreen?: boolean | undefined;
        }>;
        navigatorFrameChanged: Slot<import("@blocksuite/blocks").FrameBlockModel>;
        fullScreenToggled: Slot<void>;
        elementResizeStart: Slot<void>;
        elementResizeEnd: Slot<void>;
        toggleNoteSlicer: Slot<void>;
        docLinkClicked: Slot<{
            docId: string;
            blockId?: string | undefined;
        }>;
        tagClicked: Slot<{
            tagId: string;
        }>;
        toolbarLocked: Slot<boolean>;
    };
    get surface(): import("@blocksuite/blocks").SurfaceBlockComponent;
    get zoom(): number;
    get resizeMode(): ResizeMode;
    static enabledWarnings: never[];
    static styles: import("lit").CSSResult;
    private accessor _selectedRect;
    private accessor _isResizing;
    private accessor _mode;
    private accessor _scalePercent;
    private accessor _scaleDirection;
    private accessor _isWidthLimit;
    private accessor _isHeightLimit;
    private accessor _shiftKey;
    private _resizeManager;
    private _cursorRotate;
    private _propDisposables;
    private _dragEndCallback;
    private _updateSelectedRect;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor autoCompleteOff: boolean;
    readonly slots: {
        dragStart: Slot<void>;
        dragMove: Slot<void>;
        dragRotate: Slot<void>;
        dragEnd: Slot<void>;
    };
    constructor();
    private _isProportionalElement;
    private _shouldRenderSelection;
    private _onDragStart;
    private _onDragMove;
    private _onDragRotate;
    private _onDragEnd;
    private _updateMode;
    private _updateCursor;
    /**
     * @param refresh indicate whether to completely refresh the state of resize manager, otherwise only update the position
     */
    private _updateResizeManagerState;
    private _updateOnViewportChange;
    private _initSelectedSlot;
    private _updateOnSelectionChange;
    private _updateOnElementChange;
    private _canAutoComplete;
    private _canRotate;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-selected-rect': EdgelessSelectedRect;
    }
}
export {};
//# sourceMappingURL=edgeless-selected-rect.d.ts.map