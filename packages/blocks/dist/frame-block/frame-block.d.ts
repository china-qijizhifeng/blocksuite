import { BlockElement } from '@blocksuite/block-std';
import type { EdgelessFrameTitle } from '../root-block/edgeless/components/block-portal/frame/edgeless-frame.js';
import type { FrameBlockModel } from './frame-model.js';
export declare class FrameBlockComponent extends BlockElement<FrameBlockModel> {
    private accessor _isNavigator;
    get titleElement(): EdgelessFrameTitle | null;
    private get _surface();
    private get _edgeless();
    connectedCallback(): void;
    createRenderRoot(): this;
    firstUpdated(): void;
    renderBlock(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-frame': FrameBlockComponent;
    }
}
//# sourceMappingURL=frame-block.d.ts.map