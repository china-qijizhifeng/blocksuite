import { WidgetElement } from '@blocksuite/block-std';
import type { PageRootBlockComponent, RootBlockModel } from '../../index.js';
export declare const AFFINE_VIEWPORT_OVERLAY_WIDGET = "affine-viewport-overlay-widget";
export declare class AffineViewportOverlayWidget extends WidgetElement<RootBlockModel, PageRootBlockComponent> {
    static styles: import("lit").CSSResult;
    private accessor _lockViewport;
    lock(): void;
    unlock(): void;
    toggleLock(): void;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_VIEWPORT_OVERLAY_WIDGET]: AffineViewportOverlayWidget;
    }
}
//# sourceMappingURL=viewport-overlay.d.ts.map