import { ShadowlessElement } from '@blocksuite/block-std';
import type { ImageBlockComponent } from '../image-block.js';
export declare const SURFACE_IMAGE_CARD_WIDTH = 220;
export declare const SURFACE_IMAGE_CARD_HEIGHT = 122;
export declare const NOTE_IMAGE_CARD_WIDTH = 752;
export declare const NOTE_IMAGE_CARD_HEIGHT = 78;
declare const AffineImageCard_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class AffineImageCard extends AffineImageCard_base {
    static styles: import("lit").CSSResult;
    accessor block: ImageBlockComponent;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-image-block-card': AffineImageCard;
    }
}
export {};
//# sourceMappingURL=image-card.d.ts.map