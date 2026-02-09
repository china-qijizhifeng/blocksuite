import { SurfaceGroupLikeModel } from '../element-model/base.js';
export function getLayerEndZIndex(layers, layerIndex) {
    const layer = layers[layerIndex];
    return layer
        ? layer.type === 'block'
            ? layer.zIndex + layer.elements.length - 1
            : layer.zIndex
        : 1;
}
export function updateLayersZIndex(layers, startIdx) {
    const startLayer = layers[startIdx];
    let curIndex = startLayer.zIndex;
    for (let i = startIdx; i < layers.length; ++i) {
        const curLayer = layers[i];
        curLayer.zIndex = curIndex;
        curIndex += curLayer.type === 'block' ? curLayer.elements.length : 1;
    }
}
export function getElementIndex(indexable) {
    const groups = indexable.groups;
    if (groups.length > 1) {
        return (groups
            .map(group => group.index)
            .reverse()
            .slice(1)
            .join('-') + `-${indexable.index}`);
    }
    return indexable.index;
}
export function ungroupIndex(index) {
    return index.split('-')[0];
}
export function insertToOrderedArray(array, element) {
    let idx = 0;
    while (idx < array.length && compare(array[idx], element) < 0) {
        ++idx;
    }
    array.splice(idx, 0, element);
}
export function removeFromOrderedArray(array, element) {
    const idx = array.indexOf(element);
    if (idx !== -1) {
        array.splice(idx, 1);
    }
}
export function isInRange(edges, target) {
    return compare(target, edges[0]) >= 0 && compare(target, edges[1]) < 0;
}
export function renderableInEdgeless(doc, surface, block) {
    const parent = doc.getParent(block);
    return parent === doc.root || parent === surface;
}
export function compare(a, b) {
    if (a instanceof SurfaceGroupLikeModel && a.hasDescendant(b)) {
        return -1;
    }
    else if (b instanceof SurfaceGroupLikeModel && b.hasDescendant(a)) {
        return 1;
    }
    else {
        const aGroups = a.groups;
        const bGroups = b.groups;
        const minGroups = Math.min(aGroups.length, bGroups.length);
        for (let i = 0; i < minGroups; ++i) {
            if (aGroups[i] !== bGroups[i]) {
                const aGroup = aGroups[i] ?? a;
                const bGroup = bGroups[i] ?? b;
                return aGroup.index === bGroup.index
                    ? 0
                    : aGroup.index < bGroup.index
                        ? -1
                        : 1;
            }
        }
        if (a.index < b.index)
            return -1;
        else if (a.index > b.index)
            return 1;
        return 0;
    }
}
//# sourceMappingURL=layer-utils.js.map