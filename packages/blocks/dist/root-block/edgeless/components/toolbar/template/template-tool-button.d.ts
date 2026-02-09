import './template-panel.js';
import { LitElement } from 'lit';
import type { EdgelessTool } from '../../../types.js';
declare const EdgelessTemplateButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessTemplateButton extends EdgelessTemplateButton_base {
    static styles: import("lit").CSSResult;
    private accessor _openedPanel;
    private _cleanup;
    private _prevTool;
    type: EdgelessTool['type'];
    enableActiveBackground: boolean;
    private _togglePanel;
    private _closePanel;
    render(): import("lit").TemplateResult<1>;
}
export {};
//# sourceMappingURL=template-tool-button.d.ts.map