import { LitElement } from 'lit';
import type { EdgelessTool } from '../../../types.js';
declare const EdgelessPresentButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass> & import("@blocksuite/global/utils").Constructor<import("../mixins/quick-tool.mixin.js").QuickToolMixinClass>;
export declare class EdgelessPresentButton extends EdgelessPresentButton_base {
    static styles: import("lit").CSSResult;
    type: EdgelessTool['type'];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-present-button': EdgelessPresentButton;
    }
}
export {};
//# sourceMappingURL=present-button.d.ts.map