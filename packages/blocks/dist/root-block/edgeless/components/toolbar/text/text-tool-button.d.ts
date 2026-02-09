import '../../buttons/toolbar-button.js';
import './text-menu.js';
import { LitElement } from 'lit';
import type { LastProps } from '../../../../../surface-block/managers/edit-session.js';
declare const EdgelessTextToolButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
/**
 * @deprecated not used
 */
export declare class EdgelessTextToolButton extends EdgelessTextToolButton_base {
    static styles: import("lit").CSSResult;
    accessor states: Partial<LastProps['text']>;
    type: "text";
    private _toggleTextMenu;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-text-tool-button': EdgelessTextToolButton;
    }
}
export {};
//# sourceMappingURL=text-tool-button.d.ts.map