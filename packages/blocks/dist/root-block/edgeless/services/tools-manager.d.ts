import type { SurfaceSelection } from '@blocksuite/block-std';
import { DisposableGroup } from '@blocksuite/global/utils';
import type { Bound } from '../../../surface-block/utils/bound.js';
import type { EdgelessToolController } from '../controllers/tools/index.js';
import type { EdgelessRootBlockComponent } from '../edgeless-root-block.js';
import type { EdgelessRootService } from '../edgeless-root-service.js';
import type { EdgelessTool } from '../types.js';
import type { EdgelessSelectionState } from './selection-manager.js';
type Constructor<T = object> = new (...args: any[]) => T;
type AbstractClassConstructor<T = object> = Constructor<T> & {
    prototype: T;
};
export type EdgelessToolConstructor = AbstractClassConstructor<EdgelessToolController>;
export interface EdgelessHoverState {
    rect: Bound;
    content: BlockSuite.EdgelessModelType;
}
export interface SelectionArea {
    start: DOMPoint;
    end: DOMPoint;
}
export declare class EdgelessToolsManager {
    get dragging(): boolean;
    get selection(): import("./selection-manager.js").EdgelessSelectionManager;
    get lastMousePos(): {
        x: number;
        y: number;
    };
    get edgelessTool(): EdgelessTool;
    set edgelessTool(mode: EdgelessTool);
    get currentController(): EdgelessToolController<import("../controllers/tools/text-tool.js").TextTool | import("../controllers/tools/connector-tool.js").ConnectorTool | {
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
    } | import("../controllers/tools/lasso-tool.js").LassoTool | {
        type: "mindmap";
    } | import("../controllers/tools/note-tool.js").NoteTool | {
        type: "pan";
        panning: boolean;
    } | import("../controllers/tools/shape-tool.js").ShapeTool | {
        type: "template";
    }>;
    get controllers(): Record<string, EdgelessToolController<import("../controllers/tools/text-tool.js").TextTool | import("../controllers/tools/connector-tool.js").ConnectorTool | {
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
    } | import("../controllers/tools/lasso-tool.js").LassoTool | {
        type: "mindmap";
    } | import("../controllers/tools/note-tool.js").NoteTool | {
        type: "pan";
        panning: boolean;
    } | import("../controllers/tools/shape-tool.js").ShapeTool | {
        type: "template";
    }>>;
    get draggingArea(): DOMRect | null;
    set spaceBar(pressed: boolean);
    get spaceBar(): boolean;
    set shiftKey(pressed: boolean);
    get shiftKey(): boolean;
    get doc(): import("@blocksuite/store").Doc;
    get service(): EdgelessRootService;
    get container(): EdgelessRootBlockComponent;
    get dispatcher(): import("@blocksuite/block-std").UIEventDispatcher;
    private _edgelessTool;
    private _container;
    private _service;
    private _controllers;
    private _mounted;
    /** Latest mouse position in view coords */
    private _lastMousePos;
    private _shiftKey;
    private _spaceBar;
    private _dragging;
    protected readonly _disposables: DisposableGroup;
    constructor(service: EdgelessRootService);
    private _updateLastMousePos;
    private _getToolFromLocalStorage;
    private _initMouseAndWheelEvents;
    private _add;
    private _onContainerDragStart;
    private _onContainerDragMove;
    private _onContainerDragEnd;
    private _onContainerClick;
    private _onContainerDblClick;
    private _onContainerTripleClick;
    private _onContainerPointerMove;
    private _onContainerPointerOut;
    private _onContainerContextMenu;
    private _onContainerPointerDown;
    private _onContainerPointerUp;
    private _isDocOnlyNote;
    mount(container: EdgelessRootBlockComponent): void;
    register(Tool: EdgelessToolConstructor): void;
    getHoverState(): EdgelessHoverState | null;
    setEdgelessTool: (edgelessTool: EdgelessTool, state?: EdgelessSelectionState | SurfaceSelection[], restoreToLastSelection?: boolean) => void;
    switchToDefaultMode(state: EdgelessSelectionState): void;
    clear(): void;
    dispose(): void;
    static create(service: EdgelessRootService, controllers: AbstractClassConstructor<EdgelessToolController>[]): EdgelessToolsManager;
}
export {};
//# sourceMappingURL=tools-manager.d.ts.map