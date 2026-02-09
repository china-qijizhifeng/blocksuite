import { LitElement } from 'lit';
import { type StyleInfo } from 'lit/directives/style-map.js';
export declare class VText extends LitElement {
    accessor str: string;
    accessor styles: StyleInfo;
    render(): import("lit").TemplateResult<1>;
    createRenderRoot(): this;
}
declare global {
    interface HTMLElementTagNameMap {
        'v-text': VText;
    }
}
//# sourceMappingURL=v-text.d.ts.map