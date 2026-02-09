import { WidgetElement } from '@blocksuite/block-std';
import type { SurfaceRefBlockComponent, SurfaceRefBlockModel } from '../../../surface-ref-block/index.js';
export declare const AFFINE_SURFACE_REF_TOOLBAR = "affine-surface-ref-toolbar";
export declare class AffineSurfaceRefToolbar extends WidgetElement<SurfaceRefBlockModel, SurfaceRefBlockComponent> {
    private _hoverController;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_SURFACE_REF_TOOLBAR]: AffineSurfaceRefToolbar;
    }
}
//# sourceMappingURL=surface-ref-toolbar.d.ts.map