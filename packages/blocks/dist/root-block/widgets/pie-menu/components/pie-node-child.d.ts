import { LitElement } from 'lit';
import { PieNode } from '../node.js';
export declare class PieNodeChild extends LitElement {
    static styles: import("lit").CSSResult[];
    accessor visible: boolean;
    accessor hovering: boolean;
    accessor node: PieNode;
    accessor onClick: (ev: MouseEvent) => void;
    protected render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'pie-node-child': PieNodeChild;
    }
}
//# sourceMappingURL=pie-node-child.d.ts.map