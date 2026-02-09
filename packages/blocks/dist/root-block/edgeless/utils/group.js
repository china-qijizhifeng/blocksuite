import { GroupElementModel } from '../../../surface-block/index.js';
export function getElementsWithoutGroup(elements) {
    const set = new Set();
    elements.forEach(element => {
        if (element instanceof GroupElementModel) {
            element.descendants().forEach(child => set.add(child));
        }
        else {
            set.add(element);
        }
    });
    return Array.from(set);
}
//# sourceMappingURL=group.js.map