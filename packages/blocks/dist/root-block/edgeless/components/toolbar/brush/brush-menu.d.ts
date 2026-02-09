import '../../panel/one-row-color-panel.js';
import '../../buttons/tool-icon-button.js';
import '../common/slide-menu.js';
import { LitElement } from 'lit';
import type { EdgelessTool } from '../../../types.js';
declare const EdgelessBrushMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessBrushMenu extends EdgelessBrushMenu_base {
    static styles: import("lit").CSSResult;
    type: EdgelessTool['type'];
    accessor color: string;
    accessor lineWidth: number;
    accessor onChange: (props: Record<string, unknown>) => void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-brush-menu': EdgelessBrushMenu;
    }
}
export {};
//# sourceMappingURL=brush-menu.d.ts.map