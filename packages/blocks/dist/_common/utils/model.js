import { minimatch } from 'minimatch';
export function assertFlavours(model, allowed) {
    if (!allowed.includes(model.flavour)) {
        throw new Error(`model flavour ${model.flavour} is not allowed`);
    }
}
export function matchFlavours(model, expected) {
    return (!!model &&
        expected.some(key => minimatch(model.flavour, key)));
}
export function isInsideBlockByFlavour(doc, block, flavour) {
    const parent = doc.getParent(block);
    if (parent === null) {
        return false;
    }
    if (flavour === parent.flavour) {
        return true;
    }
    return isInsideBlockByFlavour(doc, parent, flavour);
}
//# sourceMappingURL=model.js.map