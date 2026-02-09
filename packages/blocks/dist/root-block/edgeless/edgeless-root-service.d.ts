import type { EditorHost } from '@blocksuite/block-std';
import { type BlockModel, Slot } from '@blocksuite/store';
import type { FrameBlockModel } from '../../frame-block/index.js';
import type { IBound } from '../../surface-block/consts.js';
import { type IHitTestOptions } from '../../surface-block/element-model/base.js';
import type { ConnectorElementModel } from '../../surface-block/element-model/index.js';
import type { GroupElementModel, SurfaceBlockModel } from '../../surface-block/index.js';
import type { ReorderingDirection } from '../../surface-block/managers/layer-manager.js';
import { LayerManager } from '../../surface-block/managers/layer-manager.js';
import { Bound } from '../../surface-block/utils/bound.js';
import { RootService, type TelemetryEvent } from '../root-service.js';
import { EdgelessBlockModel } from './edgeless-block-model.js';
import { EdgelessFrameManager } from './frame-manager.js';
import { EdgelessSelectionManager } from './services/selection-manager.js';
import { TemplateJob } from './services/template.js';
import type { EdgelessToolConstructor } from './services/tools-manager.js';
import { EdgelessToolsManager } from './services/tools-manager.js';
import { EdgelessSnapManager } from './utils/snap-manager.js';
import { Viewport, type ZoomAction } from './utils/viewport.js';
export type ElementCreationSource = 'shortcut' | 'toolbar:general' | 'toolbar:dnd' | 'canvas:drop' | 'canvas:draw' | 'canvas:dbclick' | 'canvas:paste' | 'context-menu' | 'ai' | 'internal';
declare module '@blocksuite/blocks' {
    interface ElementCreationEvent extends TelemetryEvent {
        segment?: 'toolbar';
        page: 'whiteboard editor';
        module?: 'toolbar';
        control?: ElementCreationSource;
    }
    interface TelemetryEventMap {
        CanvasElementAdded: ElementCreationEvent;
    }
}
export declare class EdgelessRootService extends RootService {
    get tool(): EdgelessToolsManager;
    get surface(): SurfaceBlockModel;
    get layer(): LayerManager;
    get selection(): EdgelessSelectionManager;
    get viewport(): Viewport;
    get frame(): EdgelessFrameManager;
    get snap(): EdgelessSnapManager;
    /**
     * sorted canvas elements
     */
    get elements(): import("../../surface-block/index.js").SurfaceElementModel<import("../../surface-block/element-model/base.js").IBaseProps>[];
    /**
     * sorted edgeless elements
     */
    get edgelessElements(): (import("../../surface-block/index.js").SurfaceElementModel<import("../../surface-block/element-model/base.js").IBaseProps> | EdgelessBlockModel<import("../../_common/edgeless/mixin/edgeless-selectable.js").EdgelessSelectableProps>)[];
    get frames(): FrameBlockModel[];
    get blocks(): EdgelessBlockModel<import("../../_common/edgeless/mixin/edgeless-selectable.js").EdgelessSelectableProps>[];
    get zoom(): number;
    get locked(): boolean;
    set locked(locked: boolean);
    get host(): EditorHost;
    private _surface;
    private _layer;
    private _frame;
    private _snap;
    private _selection;
    private _viewport;
    private _tool;
    TemplateJob: typeof TemplateJob;
    slots: {
        edgelessToolUpdated: Slot<import("./controllers/tools/text-tool.js").TextTool | import("./controllers/tools/connector-tool.js").ConnectorTool | {
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
        } | import("./controllers/tools/lasso-tool.js").LassoTool | {
            type: "mindmap";
        } | import("./controllers/tools/note-tool.js").NoteTool | {
            type: "pan";
            panning: boolean;
        } | import("./controllers/tools/shape-tool.js").ShapeTool | {
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
        navigatorFrameChanged: Slot<FrameBlockModel>;
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
    private _initSlotEffects;
    private _initReadonlyListener;
    mounted(): void;
    unmounted(): void;
    generateIndex(type: string): string;
    addElement<T = Record<string, unknown>>(type: string, props: T): string;
    addBlock(flavour: string, props: Record<string, unknown>, parent?: string | BlockModel, parentIndex?: number): string;
    getElementsByType<K extends Parameters<SurfaceBlockModel['getElementsByType']>[0]>(type: K): import("../../surface-block/element-model/index.js").ElementModelMap[K][];
    updateElement(id: string, props: Record<string, unknown>): void;
    removeElement(id: string | BlockSuite.EdgelessModelType): void;
    getElementById(id: string): BlockSuite.EdgelessModelType | null;
    pickElement(x: number, y: number, options: {
        all: true;
        expand?: number;
    }): BlockSuite.EdgelessModelType[];
    pickElement(x: number, y: number, options?: {
        all: false;
        expand?: number;
    }): BlockSuite.EdgelessModelType | null;
    /**
     * Pick the elements in the given area
     * @param bound
     * @param type By default, it will pick all elements, but you can specify the type to pick only you need.
     */
    pickElementsByBound(bound: IBound | Bound, type?: 'all'): BlockSuite.EdgelessModelType[];
    pickElementsByBound(bound: IBound | Bound, type: 'blocks' | 'frame'): EdgelessBlockModel[];
    pickElementsByBound(bound: IBound | Bound, type: 'canvas'): BlockSuite.SurfaceElementModelType[];
    /**
     * This method is used to pick element in group, if the picked element is in a
     * group, we will pick the group instead. If that picked group is currently selected, then
     * we will pick the element itself.
     */
    pickElementInGroup(x: number, y: number, options?: IHitTestOptions): BlockSuite.EdgelessModelType | null;
    reorderElement(element: BlockSuite.EdgelessModelType, direction: ReorderingDirection): void;
    createGroup(elements: BlockSuite.EdgelessModelType[] | string[]): string;
    createGroupFromSelected(): string | undefined;
    ungroup(group: GroupElementModel): void;
    registerTool(Tool: EdgelessToolConstructor): void;
    getConnectors(element: BlockSuite.EdgelessModelType | string): ConnectorElementModel[];
    createTemplateJob(type: 'template' | 'sticker'): TemplateJob;
    setZoomByStep(step: number): void;
    zoomToFit(): void;
    getFitToScreenData(padding?: [number, number, number, number], inputBounds?: Bound[]): {
        zoom: number;
        centerX: number;
        centerY: number;
    };
    setZoomByAction(action: ZoomAction): void;
}
//# sourceMappingURL=edgeless-root-service.d.ts.map