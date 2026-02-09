import '../../edgeless/components/buttons/tool-icon-button.js';
import '../../edgeless/components/buttons/menu-button.js';
import './more-button.js';
import { WidgetElement } from '@blocksuite/block-std';
import { nothing, type TemplateResult } from 'lit';
import type { FrameBlockModel } from '../../../frame-block/frame-model.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import type { RootBlockModel } from '../../root-model.js';
type CustomEntry = {
    render: (edgeless: EdgelessRootBlockComponent) => TemplateResult | null;
    when: (model: BlockSuite.EdgelessModelType[]) => boolean;
};
export declare const EDGELESS_ELEMENT_TOOLBAR_WIDGET = "edgeless-element-toolbar-widget";
export declare class EdgelessElementToolbarWidget extends WidgetElement<RootBlockModel, EdgelessRootBlockComponent> {
    get edgeless(): EdgelessRootBlockComponent;
    get selection(): import("../../edgeless/services/selection-manager.js").EdgelessSelectionManager;
    get slots(): {
        edgelessToolUpdated: import("@blocksuite/store").Slot<import("../../edgeless/controllers/tools/text-tool.js").TextTool | import("../../edgeless/controllers/tools/connector-tool.js").ConnectorTool | {
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
        } | import("../../edgeless/controllers/tools/lasso-tool.js").LassoTool | {
            type: "mindmap";
        } | import("../../edgeless/controllers/tools/note-tool.js").NoteTool | {
            type: "pan";
            panning: boolean;
        } | import("../../edgeless/controllers/tools/shape-tool.js").ShapeTool | {
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
        navigatorFrameChanged: import("@blocksuite/store").Slot<FrameBlockModel>;
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
    get surface(): import("@blocksuite/blocks").SurfaceBlockComponent;
    static styles: import("lit").CSSResult;
    private accessor _dragging;
    private accessor _registeredEntries;
    accessor enableNoteSlicer: boolean;
    accessor toolbarVisible: boolean;
    accessor selectedIds: string[];
    private _groupSelected;
    private _updateOnSelectedChange;
    private _recalculatePosition;
    private _quickConnect;
    private _renderQuickConnectButton;
    protected firstUpdated(): void;
    registerEntry(entry: CustomEntry): void;
    render(): TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-element-toolbar-widget': EdgelessElementToolbarWidget;
    }
}
export {};
//# sourceMappingURL=index.d.ts.map