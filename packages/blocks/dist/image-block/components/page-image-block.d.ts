import { ShadowlessElement } from '@blocksuite/block-std';
import { type PropertyValues } from 'lit';
import type { ImageBlockComponent } from '../image-block.js';
declare const ImageBlockPageComponent_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ImageBlockPageComponent extends ImageBlockPageComponent_base {
    private get _host();
    private get _doc();
    private get _model();
    static styles: import("lit").CSSResult;
    private _isDragging;
    accessor block: ImageBlockComponent;
    accessor _isSelected: boolean;
    accessor resizeImg: HTMLElement;
    private _bindKeyMap;
    private _handleSelection;
    private _observeDrag;
    private _handleError;
    private _normalizeImageSize;
    connectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-page-image': ImageBlockPageComponent;
    }
}
export {};
//# sourceMappingURL=page-image-block.d.ts.map