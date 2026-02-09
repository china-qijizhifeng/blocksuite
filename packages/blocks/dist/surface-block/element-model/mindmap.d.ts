import { type Y } from '@blocksuite/store';
import { z } from 'zod';
import { ConnectorPathGenerator } from '../managers/connector-manager.js';
import type { SurfaceBlockModel } from '../surface-model.js';
import { type SerializedXYWH, type XYWH } from '../utils/xywh.js';
import { type IBaseProps, type SerializedElement, SurfaceGroupLikeModel } from './base.js';
import { LocalConnectorElementModel } from './connector.js';
import type { MindmapNode, MindmapRoot, NodeDetail } from './utils/mindmap/layout.js';
import { LayoutType } from './utils/mindmap/layout.js';
import type { ConnectorStyle, MindmapStyleGetter } from './utils/mindmap/style.js';
import { MindmapStyle } from './utils/mindmap/style.js';
export { MindmapStyle } from './utils/mindmap/style.js';
declare const baseNodeSchema: z.ZodObject<{
    text: z.ZodString;
    xywh: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    text: string;
    xywh?: string | undefined;
}, {
    text: string;
    xywh?: string | undefined;
}>;
type Node = z.infer<typeof baseNodeSchema> & {
    children?: Node[];
};
declare const nodeSchema: z.ZodType<Node>;
type NodeType = z.infer<typeof nodeSchema>;
export type SerializedMindmapElement = SerializedElement & {
    children: Record<string, NodeDetail>;
};
type MindmapElementProps = IBaseProps & {
    children: Y.Map<NodeDetail>;
};
export declare class MindmapElementModel extends SurfaceGroupLikeModel<MindmapElementProps> {
    get type(): string;
    get tree(): MindmapRoot;
    get nodeMap(): Map<string, MindmapNode>;
    get rotate(): number;
    set rotate(_: number);
    get styleGetter(): MindmapStyleGetter;
    private _tree;
    private _nodeMap;
    private _queueBuildTree;
    private _queued;
    pathGenerator: ConnectorPathGenerator;
    accessor children: Y.Map<NodeDetail>;
    accessor layoutType: LayoutType;
    accessor style: MindmapStyle;
    connectors: Map<string, LocalConnectorElementModel>;
    extraConnectors: Map<string, LocalConnectorElementModel>;
    private _cfgBalanceLayoutDir;
    private _isConnectorOutdated;
    protected requestBuildTree(): void;
    protected buildTree(): void;
    protected addConnector(from: MindmapNode, to: MindmapNode, layout: LayoutType, connectorStyle: ConnectorStyle, extra?: boolean): LocalConnectorElementModel;
    onCreated(): void;
    serialize(): SerializedMindmapElement;
    getParentNode(id: string): MindmapNode | null;
    getNode(id: string): MindmapNode | null;
    /**
     * Path is an array of indexes that represent the path from the root node to the target node.
     * The first element of the array is always 0, which represents the root node.
     * @param element
     * @returns
     *
     * @example
     * ```ts
     * const path = mindmap.getPath('nodeId');
     * // [0, 1, 2]
     * ```
     */
    getPath(element: string | MindmapNode): number[];
    traverse(callback: (node: MindmapNode, parent: MindmapNode | null) => void): void;
    addNode(
    /**
     * The parent node id of the new node. If it's null, the node will be the root node
     */
    parent: string | MindmapNode | null, sibling?: string | number, position?: 'before' | 'after', props?: Record<string, unknown>, 
    /**
     * Force the layout direction of the node.
     * It only works on the first level node with the layout type of BALANCE
     */
    direction?: LayoutType.LEFT | LayoutType.RIGHT): string;
    moveTree(tree: MindmapNode, parent: string | MindmapNode, siblingIndex: number, layout?: LayoutType): MindmapNode | undefined;
    addTree(parent: string | MindmapNode, tree: NodeType | MindmapNode, 
    /**
     * `sibling` indicates where to insert a subtree among peer elements.
     * If it's a string, it represents a peer element's ID;
     * if it's a number, it represents its index.
     * The subtree will be inserted before the sibling element.
     */
    sibling?: string | number, 
    /**
     * Preferred layout direction, only works when parent is root and layout type is BALANCE
     */
    layout?: LayoutType): MindmapNode | null | undefined;
    stashTree(node: MindmapNode | string): (() => void) | undefined;
    removeChild(id: string): void;
    layout(tree?: MindmapNode | MindmapRoot, applyStyle?: boolean, layoutType?: LayoutType): void;
    getConnector(from: MindmapNode, to: MindmapNode): LocalConnectorElementModel | null;
    getLayoutDir(node: string | MindmapNode): LayoutType | null;
    requestLayout(): void;
    applyStyle(fitContent?: boolean): void;
    moveTo(targetXYWH: SerializedXYWH | XYWH): void;
    getSiblingNode(id: string, direction?: 'prev' | 'next', 
    /**
     * The subtree of which that the sibling node belongs to,
     * this is used when the layout type is BALANCED.
     */
    subtree?: 'left' | 'right'): MindmapNode | null;
    /**
     *
     * @param subtree The subtree of root, this only take effects when the layout type is BALANCED.
     * @returns
     */
    getChildNodes(id: string, subtree?: 'left' | 'right'): MindmapNode[];
    /**
     * Detach a mindmap. It is similar to `removeChild` but
     * it does not delete the node.
     *
     * So the node can be used to create a new mind map or merge into other mind map
     */
    detach(subtree: string | MindmapNode): MindmapNode | undefined;
    static propsToY(props: Record<string, unknown>): MindmapElementProps;
    static createFromTree(tree: MindmapNode, style: MindmapStyle, layoutType: LayoutType, surface: SurfaceBlockModel): MindmapElementModel;
}
declare global {
    namespace BlockSuite {
        interface SurfaceGroupLikeModelMap {
            mindmap: MindmapElementModel;
        }
    }
}
//# sourceMappingURL=mindmap.d.ts.map