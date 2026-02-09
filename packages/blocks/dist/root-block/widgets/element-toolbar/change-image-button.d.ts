import '../../edgeless/components/buttons/tool-icon-button.js';
import { LitElement, nothing } from 'lit';
import type { ImageBlockModel } from '../../../image-block/image-model.js';
import type { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
declare const EdgelessChangeImageButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessChangeImageButton extends EdgelessChangeImageButton_base {
    accessor model: ImageBlockModel;
    accessor edgeless: EdgelessRootBlockComponent;
    private get _doc();
    private get _blockElement();
    private _showCaption;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-change-image-button': EdgelessChangeImageButton;
    }
}
export declare function renderChangeImageButton(edgeless: EdgelessRootBlockComponent, images?: ImageBlockModel[]): import("lit").TemplateResult<1> | typeof nothing;
export {};
//# sourceMappingURL=change-image-button.d.ts.map