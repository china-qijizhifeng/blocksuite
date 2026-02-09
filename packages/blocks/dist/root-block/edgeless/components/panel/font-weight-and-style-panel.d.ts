import { LitElement } from 'lit';
import { FontFamily, FontStyle, FontWeight } from '../../../../surface-block/consts.js';
export declare class EdgelessFontWeightAndStylePanel extends LitElement {
    static styles: import("lit").CSSResult;
    accessor fontFamily: FontFamily;
    accessor fontWeight: FontWeight;
    accessor fontStyle: FontStyle;
    accessor onSelect: ((fontWeight: FontWeight, fontStyle: FontStyle) => void) | undefined;
    private _onSelect;
    private _isDisabled;
    private _isActive;
    render(): Iterable<unknown>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-font-weight-and-style-panel': EdgelessFontWeightAndStylePanel;
    }
}
//# sourceMappingURL=font-weight-and-style-panel.d.ts.map