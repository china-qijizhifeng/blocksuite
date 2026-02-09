import { LitElement } from 'lit';
import { PieNode } from '../node.js';
export declare class PieNodeCenter extends LitElement {
    static styles: import("lit").CSSResult[];
    accessor isActive: boolean;
    accessor hoveredNode: PieNode | null;
    accessor node: PieNode;
    accessor onMouseEnter: (ev: MouseEvent) => void;
    accessor rotatorAngle: number | null;
    protected render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pie-node-center': PieNodeCenter;
    }
}
//# sourceMappingURL=pie-node-center.d.ts.map