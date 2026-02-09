import { LitElement } from 'lit';
import type { EdgelessTool } from '../../../types.js';
declare const EdgelessDefaultToolButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/quick-tool.mixin.js").QuickToolMixinClass>;
export declare class EdgelessDefaultToolButton extends EdgelessDefaultToolButton_base {
    static styles: import("lit").CSSResult;
    type: EdgelessTool['type'][];
    accessor currentIcon: HTMLInputElement;
    private _fadeOut;
    private _fadeIn;
    private _changeTool;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-default-tool-button': EdgelessDefaultToolButton;
    }
}
export {};
//# sourceMappingURL=default-tool-button.d.ts.map