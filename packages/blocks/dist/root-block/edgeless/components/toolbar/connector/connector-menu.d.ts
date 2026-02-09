import '../../panel/one-row-color-panel.js';
import '../common/slide-menu.js';
import { LitElement } from 'lit';
import { ConnectorMode } from '../../../../../surface-block/index.js';
import type { EdgelessTool } from '../../../types.js';
declare const EdgelessConnectorMenu_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessConnectorMenu extends EdgelessConnectorMenu_base {
    static styles: import("lit").CSSResult;
    type: EdgelessTool['type'];
    accessor mode: ConnectorMode;
    accessor stroke: string;
    accessor strokeWidth: number;
    accessor onChange: (props: Record<string, unknown>) => void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-connector-menu': EdgelessConnectorMenu;
    }
}
export {};
//# sourceMappingURL=connector-menu.d.ts.map