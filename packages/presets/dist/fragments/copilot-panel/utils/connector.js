import { SurfaceBlockComponent, } from '@blocksuite/blocks';
import { assertExists } from '@blocksuite/global/utils';
export const getConnectorFromId = (id, surface) => {
    return surface.elements.filter(v => SurfaceBlockComponent.isConnector(v) && v.source.id === id);
};
export const getConnectorToId = (id, surface) => {
    return surface.elements.filter(v => SurfaceBlockComponent.isConnector(v) && v.target.id === id);
};
export const getConnectorPath = (id, surface) => {
    let current = id;
    const set = new Set();
    const result = [];
    while (current) {
        if (set.has(current)) {
            return result;
        }
        set.add(current);
        const connector = getConnectorToId(current, surface);
        if (connector.length !== 1) {
            return result;
        }
        current = connector[0].source.id;
        if (current) {
            result.unshift(current);
        }
    }
    return result;
};
export const findTree = (rootId, surface) => {
    const set = new Set();
    const run = (id) => {
        if (set.has(id)) {
            return;
        }
        set.add(id);
        const children = getConnectorFromId(id, surface);
        return {
            id,
            children: children.flatMap(model => {
                const childId = model.target.id;
                if (childId) {
                    const elementTree = run(childId);
                    if (elementTree) {
                        return [elementTree];
                    }
                }
                return [];
            }),
        };
    };
    const tree = run(rootId);
    assertExists(tree);
    return tree;
};
export const findLeaf = (tree, id) => {
    if (tree.id === id) {
        return tree;
    }
    for (const child of tree.children) {
        const result = findLeaf(child, id);
        if (result) {
            return result;
        }
    }
    return;
};
//# sourceMappingURL=connector.js.map