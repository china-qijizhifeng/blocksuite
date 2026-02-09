import { LitElement, type PropertyValues } from 'lit';
import type { PieNode } from '../node.js';
export declare class PieNodeContent extends LitElement {
    static styles: import("lit").CSSResult;
    private accessor _nodeContentElement;
    accessor node: PieNode;
    accessor isActive: boolean;
    accessor hoveredNode: PieNode | null;
    private _renderCenterNodeContent;
    private _renderChildNodeContent;
    protected updated(changedProperties: PropertyValues): void;
    protected render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pie-node-content': PieNodeContent;
    }
}
//# sourceMappingURL=pie-node-content.d.ts.map