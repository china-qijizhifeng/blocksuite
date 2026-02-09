import { LitElement } from 'lit';
import type { Rect } from '../../../../_common/utils/index.js';
export declare class DropIndicator extends LitElement {
    static styles: import("lit").CSSResult;
    accessor rect: Rect | null;
    render(): import("lit").TemplateResult<1> | null;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-drop-indicator': DropIndicator;
    }
}
//# sourceMappingURL=drop-indicator.d.ts.map