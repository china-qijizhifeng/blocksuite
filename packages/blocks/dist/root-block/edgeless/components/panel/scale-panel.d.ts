import '../buttons/tool-icon-button.js';
import { LitElement } from 'lit';
export declare class EdgelessScalePanel extends LitElement {
    static styles: import("lit").CSSResult;
    accessor scale: number;
    accessor scaleList: readonly number[];
    accessor onSelect: ((size: number) => void) | undefined;
    accessor onPopperCose: (() => void) | undefined;
    accessor minScale: number;
    accessor maxScale: number;
    private _onSelect;
    private _onPopperClose;
    private _onKeydown;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-scale-panel': EdgelessScalePanel;
    }
}
//# sourceMappingURL=scale-panel.d.ts.map