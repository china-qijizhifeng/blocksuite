import type { MindmapElementModel } from '../../mindmap.js';
export declare const NODE_VERTICAL_SPACING = 45;
export declare const NODE_HORIZONTAL_SPACING = 110;
export declare const NODE_FIRST_LEVEL_HORIZONTAL_SPACING = 200;
export type NodeDetail = {
    /**
     * The index of the node, it decides the layout order of the node
     */
    index: string;
    parent?: string;
    /**
     * The preferred layout direction of the node, it only works when the layout type is BALANCE
     * and the node is on the first level
     */
    preferredDir?: LayoutType;
};
export type MindmapNode = {
    id: string;
    detail: NodeDetail;
    element: BlockSuite.SurfaceElementModelType;
    children: MindmapNode[];
    /**
     * This property override the preferredDir or default layout direction.
     * It is used during dragging that would temporary change the layout direction
     */
    overriddenDir?: LayoutType;
};
export type MindmapRoot = MindmapNode & {
    left: MindmapNode[];
    right: MindmapNode[];
};
export declare enum LayoutType {
    RIGHT = 0,
    LEFT = 1,
    BALANCE = 2
}
export declare const layout: (root: MindmapNode, mindmap: MindmapElementModel, layoutDir: LayoutType | null, path: number[]) => void;
//# sourceMappingURL=layout.d.ts.map