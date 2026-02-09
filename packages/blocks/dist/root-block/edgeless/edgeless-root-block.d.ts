import '../../surface-block/surface-block.js';
import './components/block-portal/frame/edgeless-frame.js';
import './components/toolbar/edgeless-toolbar.js';
import { BlockElement } from '@blocksuite/block-std';
import type { BlockModel } from '@blocksuite/store';
import { type IPoint, Point, type Viewport } from '../../_common/utils/index.js';
import type { ImageBlockModel } from '../../image-block/image-model.js';
import { type IBound, type IVec2 } from '../../surface-block/index.js';
import type { SurfaceBlockComponent } from '../../surface-block/surface-block.js';
import type { SurfaceBlockModel } from '../../surface-block/surface-model.js';
import type { FontLoader } from '../font-loader/font-loader.js';
import type { RootBlockModel } from '../root-model.js';
import type { EdgelessRootBlockWidgetName } from '../types.js';
import type { EdgelessBlockPortalContainer } from './components/block-portal/edgeless-block-portal.js';
import { EdgelessToolbar } from './components/toolbar/edgeless-toolbar.js';
import { EdgelessClipboardController } from './controllers/clipboard.js';
import { EdgelessPageKeyboardManager } from './edgeless-keyboard.js';
import type { EdgelessRootService } from './edgeless-root-service.js';
import type { EdgelessTool } from './types.js';
export interface EdgelessViewport {
    left: number;
    top: number;
    scrollLeft: number;
    scrollTop: number;
    scrollWidth: number;
    scrollHeight: number;
    clientWidth: number;
    clientHeight: number;
}
export declare class EdgelessRootBlockComponent extends BlockElement<RootBlockModel, EdgelessRootService, EdgelessRootBlockWidgetName> {
    get tools(): import("./services/tools-manager.js").EdgelessToolsManager;
    get dispatcher(): import("@blocksuite/block-std").UIEventDispatcher;
    get slots(): {
        edgelessToolUpdated: import("@blocksuite/store").Slot<import("./controllers/tools/text-tool.js").TextTool | import("./controllers/tools/connector-tool.js").ConnectorTool | {
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
        pressShiftKeyUpdated: import("@blocksuite/store").Slot<boolean>;
        cursorUpdated: import("@blocksuite/store").Slot<string>;
        copyAsPng: import("@blocksuite/store").Slot<{
            blocks: BlockSuite.EdgelessBlockModelType[];
            shapes: BlockSuite.SurfaceModelType[];
        }>;
        readonlyUpdated: import("@blocksuite/store").Slot<boolean>;
        draggingAreaUpdated: import("@blocksuite/store").Slot<void>;
        navigatorSettingUpdated: import("@blocksuite/store").Slot<{
            hideToolbar?: boolean | undefined;
            blackBackground?: boolean | undefined;
            fillScreen?: boolean | undefined;
        }>;
        navigatorFrameChanged: import("@blocksuite/store").Slot<import("@blocksuite/blocks").FrameBlockModel>;
        fullScreenToggled: import("@blocksuite/store").Slot<void>;
        elementResizeStart: import("@blocksuite/store").Slot<void>;
        elementResizeEnd: import("@blocksuite/store").Slot<void>;
        toggleNoteSlicer: import("@blocksuite/store").Slot<void>;
        docLinkClicked: import("@blocksuite/store").Slot<{
            docId: string;
            blockId?: string | undefined;
        }>;
        tagClicked: import("@blocksuite/store").Slot<{
            tagId: string;
        }>;
        toolbarLocked: import("@blocksuite/store").Slot<boolean>;
    };
    get viewportElement(): HTMLElement;
    get viewport(): Viewport;
    get surfaceBlockModel(): SurfaceBlockModel;
    static styles: import("lit").CSSResult;
    private _viewportElement;
    private readonly _themeObserver;
    private _resizeObserver;
    /**
     * Disable components
     *
     * Toolbar is not allowed to display in `syncd doc block`.
     */
    disableComponents: boolean;
    /**
     * Shared components
     */
    components: {
        toolbar: EdgelessToolbar | null;
    };
    keyboardManager: EdgelessPageKeyboardManager | null;
    mouseRoot: HTMLElement;
    accessor edgelessTool: EdgelessTool;
    accessor rootElementContainer: EdgelessBlockPortalContainer;
    accessor edgelessLayer: HTMLDivElement;
    clipboardController: EdgelessClipboardController;
    accessor surface: SurfaceBlockComponent;
    fontLoader: FontLoader;
    private _handleToolbarFlag;
    private _initSlotEffects;
    private _initResizeEffect;
    private _initPixelRatioChangeEffect;
    private _initFontLoader;
    private _initRemoteCursor;
    private _initSurface;
    private _initViewport;
    private _initTools;
    private _initWheelEvent;
    /**
     * Adds a new note with the given point on the affine-editor-container.
     *
     * @param: point Point
     * @returns: The id of new note
     */
    addNoteWithPoint(point: IPoint, options?: {
        width?: number;
        height?: number;
        parentId?: string;
        noteIndex?: number;
        offsetX?: number;
        offsetY?: number;
        scale?: number;
    }): string;
    /**
     * Adds a new note with the given blocks and point.
     * @param blocks Array\<Partial\<BlockModel\>\>
     * @param point Point
     */
    addNewNote(blocks: Array<Partial<BlockModel>>, point: IPoint, options?: {
        width?: number;
        height?: number;
        parentId?: string;
        noteIndex?: number;
        offsetX?: number;
        offsetY?: number;
    }): {
        noteId: string;
        ids: string[];
    };
    addImage(model: Partial<ImageBlockModel>, point: IPoint): string;
    addImages(files: File[], point?: IVec2, inTopLeft?: boolean): Promise<string[]>;
    addAttachments(files: File[], point?: IVec2): Promise<string[]>;
    setSelection(noteId: string, _active: boolean | undefined, blockId: string, point?: Point): void;
    getElementsBound(): IBound | null;
    firstUpdated(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    renderBlock(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-edgeless-root': EdgelessRootBlockComponent;
    }
}
//# sourceMappingURL=edgeless-root-block.d.ts.map