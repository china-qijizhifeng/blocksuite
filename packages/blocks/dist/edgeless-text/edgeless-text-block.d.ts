import { BlockElement } from '@blocksuite/block-std';
import type { EdgelessTextBlockModel } from './edgeless-text-model.js';
export declare const EDGELESS_TEXT_BLOCK_MIN_WIDTH = 50;
export declare const EDGELESS_TEXT_BLOCK_MIN_HEIGHT = 50;
export declare class EdgelessTextBlockComponent extends BlockElement<EdgelessTextBlockModel> {
    tryFocusEnd(): void;
    accessor childrenContainer: HTMLDivElement;
    connectedCallback(): void;
    renderBlock(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-edgeless-text': EdgelessTextBlockComponent;
    }
}
//# sourceMappingURL=edgeless-text-block.d.ts.map