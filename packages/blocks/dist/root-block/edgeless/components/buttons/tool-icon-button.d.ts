import type { Placement } from '@floating-ui/dom';
import type { TemplateResult } from 'lit';
import { LitElement } from 'lit';
export declare class EdgelessToolIconButton extends LitElement {
    static styles: import("lit").CSSResult;
    accessor disabled: boolean;
    accessor coming: boolean;
    accessor showTooltip: boolean;
    accessor tooltip: string | TemplateResult<1>;
    accessor tipPosition: Placement;
    accessor arrow: boolean;
    accessor tooltipOffset: number;
    accessor active: boolean;
    accessor activeMode: 'color' | 'background';
    accessor iconContainerWidth: string | undefined;
    accessor iconContainerPadding: number | number[];
    accessor iconSize: string | undefined;
    accessor labelHeight: string | undefined;
    accessor withHover: boolean | undefined;
    accessor justify: string | undefined;
    accessor hover: boolean;
    accessor hoverState: boolean;
    constructor();
    connectedCallback(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'edgeless-tool-icon-button': EdgelessToolIconButton;
    }
}
//# sourceMappingURL=tool-icon-button.d.ts.map