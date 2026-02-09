import type { IVec } from '../../../surface-block/index.js';
import { EdgelessRootBlockComponent } from '../../edgeless/edgeless-root-block.js';
import type { EdgelessTool } from '../../edgeless/types.js';
import type { ActionFunction, IPieNodeWithAction, PieColorNodeModel, PieCommandNodeModel, PieMenuContext, PieNodeModel, PieNonRootNode, PieRootNodeModel, PieSubmenuNodeModel } from './base.js';
export declare function updateShapeOverlay(rootElement: EdgelessRootBlockComponent): void;
export declare function getActiveShapeColor(type: 'fill' | 'stroke'): ({ rootElement }: PieMenuContext) => "" | "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white" | "--affine-palette-shape-yellow" | "--affine-palette-shape-orange" | "--affine-palette-shape-red" | "--affine-palette-shape-magenta" | "--affine-palette-shape-purple" | "--affine-palette-shape-blue" | "--affine-palette-shape-teal" | "--affine-palette-shape-green" | "--affine-palette-shape-black" | "--affine-palette-shape-grey" | "--affine-palette-shape-white";
export declare function getActiveConnectorStrokeColor({ rootElement }: PieMenuContext): "" | "--affine-palette-transparent" | "--affine-palette-line-yellow" | "--affine-palette-line-orange" | "--affine-palette-line-red" | "--affine-palette-line-magenta" | "--affine-palette-line-purple" | "--affine-palette-line-blue" | "--affine-palette-line-teal" | "--affine-palette-line-green" | "--affine-palette-line-black" | "--affine-palette-line-grey" | "--affine-palette-line-white";
export declare function setEdgelessToolAction(tool: EdgelessTool): ActionFunction;
export declare function getPosition(angleRad: number, v: IVec): IVec;
export declare function isNodeWithChildren(node: PieNodeModel): node is PieNodeModel & {
    children: PieNonRootNode[];
};
export declare function isRootNode(model: PieNodeModel): model is PieRootNodeModel;
export declare function isSubmenuNode(model: PieNodeModel): model is PieSubmenuNodeModel;
export declare function isCommandNode(model: PieNodeModel): model is PieCommandNodeModel;
export declare function isColorNode(model: PieNodeModel): model is PieColorNodeModel;
export declare function isNodeWithAction(node: PieNodeModel): node is IPieNodeWithAction;
export declare function calcNodeAngles(node: {
    angle?: number;
}[], parentAngle?: number): number[];
export declare function calcNodeWedges(nodeAngles: number[], parentAngle?: number): {
    start: number;
    end: number;
}[];
export declare function isAngleBetween(angle: number, start: number, end: number): boolean;
//# sourceMappingURL=utils.d.ts.map