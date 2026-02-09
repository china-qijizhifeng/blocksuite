import { LitElement } from 'lit';
import type { Rect } from '../../_common/utils/index.js';
export declare class DragIndicator extends LitElement {
    static styles: import("lit").CSSResult;
    accessor rect: Rect | null;
    render(): import("lit").TemplateResult<1> | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-drag-indicator': DragIndicator;
    }
}
//# sourceMappingURL=drag-indicator.d.ts.map