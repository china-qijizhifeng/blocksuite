import { LitElement } from 'lit';
import type { EdgelessTool } from '../../../types.js';
declare const EdgelessEraserToolButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessEraserToolButton extends EdgelessEraserToolButton_base {
    static styles: import("lit").CSSResult;
    type: EdgelessTool['type'];
    enableActiveBackground: boolean;
    firstUpdated(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-eraser-tool-button': EdgelessEraserToolButton;
    }
}
export {};
//# sourceMappingURL=eraser-tool-button.d.ts.map