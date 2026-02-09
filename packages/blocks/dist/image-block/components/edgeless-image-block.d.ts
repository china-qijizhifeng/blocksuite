import { ShadowlessElement } from '@blocksuite/block-std';
declare const ImageBlockEdgelessComponent_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class ImageBlockEdgelessComponent extends ImageBlockEdgelessComponent_base {
    static styles: import("lit").CSSResult;
    accessor url: string | undefined;
    accessor resizeImg: HTMLElement | null;
    private _handleError;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-edgeless-image': ImageBlockEdgelessComponent;
    }
}
export {};
//# sourceMappingURL=edgeless-image-block.d.ts.map