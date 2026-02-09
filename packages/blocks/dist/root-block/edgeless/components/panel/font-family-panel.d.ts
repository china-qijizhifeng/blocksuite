import { LitElement } from 'lit';
import { FontFamily } from '../../../../surface-block/consts.js';
export declare class EdgelessFontFamilyPanel extends LitElement {
    static styles: import("lit").CSSResult;
    accessor value: FontFamily;
    accessor onSelect: ((value: FontFamily) => void) | undefined;
    private _onSelect;
    render(): unknown;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-font-family-panel': EdgelessFontFamilyPanel;
    }
}
//# sourceMappingURL=font-family-panel.d.ts.map