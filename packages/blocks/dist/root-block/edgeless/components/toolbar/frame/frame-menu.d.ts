import { LitElement } from 'lit';
import type { EdgelessTool } from '../../../types.js';
declare const EdgelessFrameMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessFrameMenu extends EdgelessFrameMenu_base {
    static styles: import("lit").CSSResult;
    type: EdgelessTool['type'];
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-frame-menu': EdgelessFrameMenu;
    }
}
export {};
//# sourceMappingURL=frame-menu.d.ts.map