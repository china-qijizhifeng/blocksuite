import { BlockComponent } from '../_common/components/block-component.js';
import type { DividerBlockModel } from './divider-model.js';
export declare class DividerBlockComponent extends BlockComponent<DividerBlockModel> {
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    renderBlock(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-divider': DividerBlockComponent;
    }
}
//# sourceMappingURL=divider-block.d.ts.map