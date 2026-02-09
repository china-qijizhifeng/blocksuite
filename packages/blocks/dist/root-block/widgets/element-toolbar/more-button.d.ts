import '../../edgeless/components/buttons/tool-icon-button.js';
import '../../edgeless/components/buttons/menu-button.js';
import '../../edgeless/components/toolbar/shape/shape-menu.js';
import { LitElement, nothing, type TemplateResult } from 'lit';
import type { ReorderingType } from '../../../_common/utils/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
type Action = {
    icon: TemplateResult<1>;
    name: string;
    type: 'delete' | 'copy-as-png' | 'create-frame' | 'create-group' | 'turn-into-linked-doc' | 'create-linked-doc' | 'copy' | 'duplicate' | 'reload' | 'open' | 'center-peek' | ReorderingType;
    disabled?: boolean;
};
type FatActions = (Action | typeof nothing)[][];
declare const EdgelessMoreButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessMoreButton extends EdgelessMoreButton_base {
    static styles: import("lit").CSSResult;
    accessor elements: BlockSuite.EdgelessModelType[];
    accessor edgeless: EdgelessRootBlockComponent;
    accessor vertical: boolean;
    get doc(): import("@blocksuite/store").Doc;
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
    get surface(): import("@blocksuite/blocks").SurfaceBlockComponent;
    get view(): import("@blocksuite/block-std").ViewStore;
    private get _blockElement();
    get _Actions(): FatActions;
    get _FrameActions(): FatActions;
    private getOpenActions;
    private getRefreshAction;
    private getLinkedDocAction;
    private _turnIntoLinkedDoc;
    private _createLinkedDoc;
    private _delete;
    private _refreshable;
    private _reload;
    private _runAction;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-more-button': EdgelessMoreButton;
    }
}
export {};
//# sourceMappingURL=more-button.d.ts.map