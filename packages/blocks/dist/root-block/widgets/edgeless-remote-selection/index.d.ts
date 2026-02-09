import { WidgetElement } from '@blocksuite/block-std';
import type { EdgelessRootBlockComponent } from '../../../root-block/edgeless/edgeless-root-block.js';
import type { RootBlockModel } from '../../root-model.js';
export declare const AFFINE_EDGELESS_REMOTE_SELECTION_WIDGET = "affine-edgeless-remote-selection-widget";
export declare class EdgelessRemoteSelectionWidget extends WidgetElement<RootBlockModel, EdgelessRootBlockComponent> {
    get edgeless(): EdgelessRootBlockComponent;
    get selection(): import("../../edgeless/services/selection-manager.js").EdgelessSelectionManager;
    get surface(): import("@blocksuite/blocks").SurfaceBlockComponent;
    static styles: import("lit").CSSResult;
    private accessor _remoteRects;
    private accessor _remoteCursors;
    private _remoteColorManager;
    private _updateTransform;
    private _updateRemoteRects;
    private _updateRemoteCursor;
    private _updateOnElementChange;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_EDGELESS_REMOTE_SELECTION_WIDGET]: EdgelessRemoteSelectionWidget;
    }
}
//# sourceMappingURL=index.d.ts.map