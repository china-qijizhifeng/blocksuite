import { LitElement, nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import type { EdgelessTool } from '../../edgeless/types.js';
declare const EdgelessZoomToolbar_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessZoomToolbar extends EdgelessZoomToolbar_base {
    get edgelessTool(): import("../../edgeless/controllers/tools/text-tool.js").TextTool | import("../../edgeless/controllers/tools/connector-tool.js").ConnectorTool | {
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
    };
    get edgelessService(): import("@blocksuite/blocks").EdgelessRootService;
    get zoom(): number;
    get viewport(): import("../../edgeless/utils/viewport.js").Viewport;
    get locked(): boolean;
    static styles: import("lit").CSSResult;
    accessor layout: 'horizontal' | 'vertical';
    accessor edgeless: EdgelessRootBlockComponent;
    constructor(edgeless: EdgelessRootBlockComponent);
    private _isVerticalBar;
    setEdgelessTool: (edgelessTool: EdgelessTool) => void;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-zoom-toolbar': EdgelessZoomToolbar;
    }
}
export {};
//# sourceMappingURL=zoom-toolbar.d.ts.map