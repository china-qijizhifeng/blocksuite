import { LitElement } from 'lit';
import { ShapeStyle } from '../../../../surface-block/index.js';
export declare class EdgelessShapeStylePanel extends LitElement {
    static styles: import("lit").CSSResult;
    accessor value: ShapeStyle;
    accessor onSelect: undefined | ((value: ShapeStyle) => void);
    private _onSelect;
    render(): unknown;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-shape-style-panel': EdgelessShapeStylePanel;
    }
}
//# sourceMappingURL=shape-style-panel.d.ts.map