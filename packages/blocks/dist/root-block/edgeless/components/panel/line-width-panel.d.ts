import { LitElement, type PropertyValues } from 'lit';
import { LineWidth } from '../../../../_common/types.js';
export declare class LineWidthEvent extends Event {
    detail: LineWidth;
    constructor(type: string, { detail, composed, bubbles, }: {
        detail: LineWidth;
        composed: boolean;
        bubbles: boolean;
    });
}
declare const EdgelessLineWidthPanel_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class EdgelessLineWidthPanel extends EdgelessLineWidthPanel_base {
    static styles: import("lit").CSSResult;
    private accessor _lineWidthPanel;
    private accessor _lineWidthOverlay;
    private accessor _lineWidthIcons;
    private accessor _bottomLine;
    private accessor _dragHandle;
    private _dragConfig;
    accessor selectedSize: LineWidth;
    accessor hasTooltip: boolean;
    accessor disable: boolean;
    private _updateLineWidthPanel;
    private _updateIconsColor;
    private _getDragHandlePosition;
    private _updateLineWidthPanelByDragHandlePosition;
    private _onSelect;
    private _onPointerDown;
    private _onPointerMove;
    private _onPointerUp;
    private _onPointerOut;
    firstUpdated(): void;
    willUpdate(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-line-width-panel': EdgelessLineWidthPanel;
    }
}
export {};
//# sourceMappingURL=line-width-panel.d.ts.map