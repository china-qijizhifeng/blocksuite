import type { BlockModel } from '@blocksuite/store';
import { LitElement } from 'lit';
export declare class Loader extends LitElement {
    static styles: import("lit").CSSResult;
    accessor hostModel: BlockModel | null;
    accessor radius: string | number;
    accessor width: string | number;
    constructor();
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'loader-element': Loader;
    }
}
//# sourceMappingURL=loader.d.ts.map