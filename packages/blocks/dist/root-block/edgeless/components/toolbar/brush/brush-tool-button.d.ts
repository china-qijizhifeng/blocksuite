import '../../buttons/toolbar-button.js';
import './brush-menu.js';
import { LitElement } from 'lit';
import type { LastProps } from '../../../../../surface-block/managers/edit-session.js';
declare const EdgelessBrushToolButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessBrushToolButton extends EdgelessBrushToolButton_base {
    static styles: import("lit").CSSResult;
    type: "brush";
    enableActiveBackground: boolean;
    accessor states: LastProps['brush'];
    get statesKeys(): ("color" | "lineWidth")[];
    private _toggleBrushMenu;
    updateMenu(): void;
    connectedCallback(): void;
    updated(changedProperties: Map<string, unknown>): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-brush-tool-button': EdgelessBrushToolButton;
    }
}
export {};
//# sourceMappingURL=brush-tool-button.d.ts.map