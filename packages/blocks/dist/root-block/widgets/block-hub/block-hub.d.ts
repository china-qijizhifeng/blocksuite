import { WidgetElement } from '@blocksuite/block-std';
export declare const AFFINE_BLOCK_HUB_WIDGET = "affine-block-hub-widget";
export declare class BlockHubWidget extends WidgetElement {
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        [AFFINE_BLOCK_HUB_WIDGET]: BlockHubWidget;
    }
}
//# sourceMappingURL=block-hub.d.ts.map