import './zoom-toolbar.js';
import './zoom-bar-toggle-button.js';
import { WidgetElement } from '@blocksuite/block-std';
import { nothing } from 'lit';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import type { RootBlockModel } from '../../root-model.js';
export declare const AFFINE_EDGELESS_ZOOM_TOOLBAR_WIDGET = "affine-edgeless-zoom-toolbar-widget";
export declare class AffineEdgelessZoomToolbarWidget extends WidgetElement<RootBlockModel, EdgelessRootBlockComponent> {
    static styles: import("lit").CSSResult;
    private accessor _hide;
    get edgeless(): EdgelessRootBlockComponent;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_EDGELESS_ZOOM_TOOLBAR_WIDGET]: AffineEdgelessZoomToolbarWidget;
    }
}
//# sourceMappingURL=index.d.ts.map