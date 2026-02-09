import '../../panel/one-row-color-panel.js';
import '../../buttons/tool-icon-button.js';
import '../common/slide-menu.js';
import { LitElement, nothing } from 'lit';
import type { EdgelessTool } from '../../../types.js';
declare const EdgelessTextMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessTextMenu extends EdgelessTextMenu_base {
    static styles: import("lit").CSSResult;
    type: EdgelessTool['type'];
    accessor color: string;
    accessor onChange: (props: Record<string, unknown>) => void;
    render(): import("lit").TemplateResult<1> | typeof nothing;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-text-menu': EdgelessTextMenu;
    }
}
export {};
//# sourceMappingURL=text-menu.d.ts.map