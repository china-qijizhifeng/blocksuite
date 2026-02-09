import type { PointerEventState } from '@blocksuite/block-std';
import type { EdgelessBlockModel } from '../../edgeless-block-model.js';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
import type { EdgelessRootService } from '../../edgeless-root-service.js';
import type { SelectionArea } from '../../services/tools-manager.js';
import type { EdgelessTool } from '../../types.js';
export declare abstract class EdgelessToolController<Tool extends EdgelessTool = EdgelessTool> {
    get draggingArea(): SelectionArea | null;
    protected get _surface(): import("@blocksuite/blocks").SurfaceBlockComponent;
    protected get _doc(): import("@blocksuite/store").Doc;
    protected get _blocks(): EdgelessBlockModel[];
    protected _edgeless: EdgelessRootBlockComponent;
    protected _draggingArea: SelectionArea | null;
    protected _service: EdgelessRootService;
    enableHover: boolean;
    abstract tool: Tool;
    constructor(service: EdgelessRootService);
    mount(edgeless: EdgelessRootBlockComponent): void;
    abstract onContainerPointerDown(e: PointerEventState): void;
    abstract onContainerDragStart(e: PointerEventState): void;
    abstract onContainerDragMove(e: PointerEventState): void;
    abstract onContainerDragEnd(e: PointerEventState): void;
    abstract onContainerClick(e: PointerEventState): void;
    abstract onContainerDblClick(e: PointerEventState): void;
    abstract onContainerTripleClick(e: PointerEventState): void;
    abstract onContainerMouseMove(e: PointerEventState): void;
    abstract onContainerMouseOut(e: PointerEventState): void;
    abstract onContainerContextMenu(e: PointerEventState): void;
    abstract beforeModeSwitch(prevMode: Tool): void;
    abstract afterModeSwitch(newMode: Tool): void;
    /**
     * @warning Check `!ev.repeat` before calling this function in KeyboardEvents where needed
     */
    abstract onPressShiftKey(pressed: boolean): void;
    /**
     * @warning Check `!ev.repeat` before calling this function in KeyboardEvents where needed
     */
    abstract onPressSpaceBar(pressed: boolean): void;
}
//# sourceMappingURL=edgeless-tool.d.ts.map