import { LitElement } from 'lit';
import type { DeltaInsert } from '../types.js';
import type { BaseTextAttributes } from '../utils/base-attributes.js';
export declare class VElement<T extends BaseTextAttributes = BaseTextAttributes> extends LitElement {
    accessor delta: DeltaInsert<T>;
    accessor selected: boolean;
    render(): import("lit").TemplateResult<1>;
    createRenderRoot(): this;
}
declare global {
    interface HTMLElementTagNameMap {
        'v-element': VElement;
    }
}
//# sourceMappingURL=v-element.d.ts.map