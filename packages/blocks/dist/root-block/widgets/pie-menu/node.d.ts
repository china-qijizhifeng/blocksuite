import { LitElement } from 'lit';
import type { IVec } from '../../../surface-block/index.js';
import type { PieNodeModel } from './base.js';
import type { PieMenu } from './menu.js';
declare const PieNode_base: typeof LitElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
export declare class PieNode extends PieNode_base {
    get icon(): import("lit").TemplateResult | undefined;
    static styles: import("lit").CSSResult;
    private accessor _isHovering;
    private _rotatorAngle;
    accessor model: PieNodeModel;
    accessor angle: number;
    accessor index: number;
    accessor startAngle: number;
    accessor endAngle: number;
    accessor position: IVec;
    accessor containerNode: PieNode | null;
    accessor menu: PieMenu;
    private _setupEvents;
    private _renderCenterNode;
    private _renderChildNode;
    private _handleGoBack;
    private _handleChildNodeClick;
    private _onPointerAngleUpdated;
    protected render(): import("lit").TemplateResult<1>;
    select(): void;
    isCenterNode(): boolean;
    isActive(): boolean;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'pie-node': PieNode;
    }
}
export {};
//# sourceMappingURL=node.d.ts.map