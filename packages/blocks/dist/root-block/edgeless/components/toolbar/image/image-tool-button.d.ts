import { LitElement } from 'lit';
import type { EdgelessTool } from '../../../types.js';
declare const EdgelessImageToolButton_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("../mixins/tool.mixin.js").EdgelessToolbarToolClass>;
export declare class EdgelessImageToolButton extends EdgelessImageToolButton_base {
    private accessor _imageLoading;
    type: EdgelessTool['type'];
    private _addImages;
    render(): import("lit").TemplateResult<1>;
}
export {};
//# sourceMappingURL=image-tool-button.d.ts.map