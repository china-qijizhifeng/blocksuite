import { ShadowlessElement } from '@blocksuite/block-std';
import { FrameBlockModel } from '../../../../../frame-block/index.js';
import type { EdgelessRootBlockComponent } from '../../../edgeless-root-block.js';
import { EdgelessPortalBase } from '../edgeless-portal-base.js';
declare const EdgelessFrameTitle_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessFrameTitle extends EdgelessFrameTitle_base {
    static styles: import("lit").CSSResult;
    private accessor _editing;
    private accessor _isNavigator;
    private accessor _frameTitleEl;
    private accessor _nestedFrame;
    private accessor _frameTitle;
    private accessor _xywh;
    private _cachedWidth;
    private _cachedHeight;
    accessor frame: FrameBlockModel;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor zoom: number;
    private _updateFrameTitleSize;
    private _isInsideFrame;
    connectedCallback(): void;
    updated(_changedProperties: Map<string, unknown>): void;
    render(): import("lit").TemplateResult<1>;
}
declare class EdgelessBlockPortalFrame extends EdgelessPortalBase<FrameBlockModel> {
    render(): import("lit").TemplateResult<1>;
}
declare const EdgelessFramesContainer_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessFramesContainer extends EdgelessFramesContainer_base {
    static styles: import("lit").CSSResult;
    accessor edgeless: EdgelessRootBlockComponent;
    accessor frames: FrameBlockModel[];
    accessor startIndex: number;
    accessor visibleFrames: Set<FrameBlockModel>;
    protected render(): unknown;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-frames-container': EdgelessFramesContainer;
        'edgeless-block-portal-frame': EdgelessBlockPortalFrame;
        'edgeless-frame-title': EdgelessFrameTitle;
    }
}
export {};
//# sourceMappingURL=edgeless-frame.d.ts.map