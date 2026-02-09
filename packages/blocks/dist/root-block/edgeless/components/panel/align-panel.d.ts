import { LitElement } from 'lit';
import { TextAlign } from '../../../../surface-block/consts.js';
export declare class EdgelessAlignPanel extends LitElement {
    static styles: import("lit").CSSResult;
    accessor value: TextAlign;
    accessor onSelect: undefined | ((value: TextAlign) => void);
    private _onSelect;
    render(): unknown;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-align-panel': EdgelessAlignPanel;
    }
}
//# sourceMappingURL=align-panel.d.ts.map