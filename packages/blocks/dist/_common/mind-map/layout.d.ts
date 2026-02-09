export type LayoutNode = {
    width: number;
    height: number;
    children: LayoutNode[];
};
export type Connector = {
    direction: 'left' | 'right' | 'top' | 'bottom';
    parentId: string;
} | null;
export type LayoutNodeResult = {
    self: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    children: LayoutNodeResult[];
};
export type LayoutOptions = {
    gapVertical?: number;
    gapHorizontal?: number;
    x?: number;
    y?: number;
};
export type Layout = (node: LayoutNode, options?: LayoutOptions) => LayoutNodeResult;
export declare const layout: {
    right: Layout;
    left: Layout;
    leftRight: Layout;
    top: Layout;
    bottom: Layout;
    topBottom: Layout;
};
//# sourceMappingURL=layout.d.ts.map