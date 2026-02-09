import '../../buttons/toolbar-button.js';
import './connector-menu.js';
import { LitElement } from 'lit';
import type { LastProps } from '../../../../../surface-block/managers/edit-session.js';
declare const EdgelessConnectorToolButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/quick-tool.mixin.js").QuickToolMixinClass>;
export declare class EdgelessConnectorToolButton extends EdgelessConnectorToolButton_base {
    static styles: import("lit").CSSResult;
    type: "connector";
    accessor states: Partial<LastProps['connector']>;
    get stateKeys(): ("mode" | ("stroke" | "strokeWidth" | "strokeStyle" | "rough" | "frontEndpointStyle" | "rearEndpointStyle"))[];
    private _toggleMenu;
    updateMenu(): void;
    connectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-connector-tool-button': EdgelessConnectorToolButton;
    }
}
export {};
//# sourceMappingURL=connector-tool-button.d.ts.map