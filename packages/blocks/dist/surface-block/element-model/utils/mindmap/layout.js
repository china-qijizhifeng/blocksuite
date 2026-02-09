import { Bound } from '../../../utils/bound.js';
export const NODE_VERTICAL_SPACING = 45;
export const NODE_HORIZONTAL_SPACING = 110;
export const NODE_FIRST_LEVEL_HORIZONTAL_SPACING = 200;
export var LayoutType;
(function (LayoutType) {
    LayoutType[LayoutType["RIGHT"] = 0] = "RIGHT";
    LayoutType[LayoutType["LEFT"] = 1] = "LEFT";
    LayoutType[LayoutType["BALANCE"] = 2] = "BALANCE";
})(LayoutType || (LayoutType = {}));
const calculateNodeSize = (root, firstLevel = false, rootChildren) => {
    const bound = root.element.elementBound;
    const children = [];
    rootChildren = rootChildren ?? root.children;
    if (rootChildren) {
        const childrenBound = rootChildren.reduce((pre, node) => {
            const childSize = calculateNodeSize(node);
            children.push(childSize);
            pre.w = Math.max(pre.w, childSize.bound.w);
            pre.h +=
                pre.h > 0
                    ? NODE_VERTICAL_SPACING + childSize.bound.h
                    : childSize.bound.h;
            return pre;
        }, new Bound(0, 0, 0, 0));
        bound.w +=
            childrenBound.w +
                (firstLevel
                    ? NODE_FIRST_LEVEL_HORIZONTAL_SPACING
                    : NODE_HORIZONTAL_SPACING);
        bound.h = Math.max(bound.h, childrenBound.h);
    }
    return {
        root,
        bound,
        children,
    };
};
const layoutTree = (tree, layoutType, mindmap, path = [0], children) => {
    const firstLevel = path.length === 1;
    const treeHeight = tree.bound.h;
    const currentX = layoutType === LayoutType.RIGHT
        ? tree.root.element.x +
            tree.root.element.w +
            (firstLevel
                ? NODE_FIRST_LEVEL_HORIZONTAL_SPACING
                : NODE_HORIZONTAL_SPACING)
        : tree.root.element.x -
            (firstLevel
                ? NODE_FIRST_LEVEL_HORIZONTAL_SPACING
                : NODE_HORIZONTAL_SPACING);
    let currentY = tree.root.element.y + (tree.root.element.h - treeHeight) / 2;
    if (tree.root.element.h >= treeHeight && tree.children.length) {
        const onlyChild = tree.children[0];
        currentY += (tree.root.element.h - onlyChild.root.element.h) / 2;
    }
    tree.children.forEach((subtree, idx) => {
        const subtreeRootEl = subtree.root.element;
        const subtreeHeight = subtree.bound.h;
        const xywh = `[${layoutType === LayoutType.RIGHT ? currentX : currentX - subtreeRootEl.w},${currentY + (subtreeHeight - subtreeRootEl.h) / 2},${subtreeRootEl.w},${subtreeRootEl.h}]`;
        idx = children ? children.indexOf(subtree) : idx;
        const currentNodePath = [...path, idx];
        subtreeRootEl.xywh = xywh;
        layoutTree(subtree, layoutType, mindmap, currentNodePath);
        currentY += subtreeHeight + NODE_VERTICAL_SPACING;
    });
};
const layoutRight = (root, mindmap, path = [0]) => {
    const rootTree = calculateNodeSize(root, true);
    layoutTree(rootTree, LayoutType.RIGHT, mindmap, path);
};
const layoutLeft = (root, mindmap, path = [0]) => {
    const rootTree = calculateNodeSize(root, true);
    layoutTree(rootTree, LayoutType.LEFT, mindmap, path);
};
const layoutBalance = (root, mindmap, path = [0]) => {
    const rootTree = calculateNodeSize(root, true);
    const leftTree = root.left;
    const rightTree = root.right;
    {
        const leftTreeSize = calculateNodeSize(root, true, leftTree);
        const mockRoot = {
            root: rootTree.root,
            bound: leftTreeSize.bound,
            children: leftTreeSize.children,
        };
        layoutTree(mockRoot, LayoutType.LEFT, mindmap, path, mockRoot.children);
    }
    {
        const rightTreeSize = calculateNodeSize(root, true, rightTree);
        const mockRoot = {
            root: rootTree.root,
            bound: rightTreeSize.bound,
            children: rightTreeSize.children,
        };
        layoutTree(mockRoot, LayoutType.RIGHT, mindmap, [0], mockRoot.children);
    }
};
export const layout = (root, mindmap, layoutDir, path) => {
    layoutDir = layoutDir ?? mindmap.layoutType;
    switch (layoutDir) {
        case LayoutType.RIGHT:
            return layoutRight(root, mindmap, path);
        case LayoutType.LEFT:
            return layoutLeft(root, mindmap, path);
        case LayoutType.BALANCE:
            return layoutBalance(root, mindmap, path);
    }
};
//# sourceMappingURL=layout.js.map