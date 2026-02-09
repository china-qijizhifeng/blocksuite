import '../../buttons/tool-icon-button.js';
import './frame-menu.js';
import { LitElement } from 'lit';
import type { EdgelessTool } from '../../../types.js';
declare const EdgelessFrameToolButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/quick-tool.mixin.js").QuickToolMixinClass>;
export declare class EdgelessFrameToolButton extends EdgelessFrameToolButton_base {
    static styles: import("lit").CSSResult;
    type: EdgelessTool['type'];
    private _toggleFrameMenu;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-frame-tool-button': EdgelessFrameToolButton;
    }
}
export {};
//# sourceMappingURL=frame-tool-button.d.ts.map