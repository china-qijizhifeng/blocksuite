import { isConnectable, isNoteBlock } from './query.js';
export function deleteElements(surface, elements) {
    const set = new Set(elements);
    const service = surface.edgeless.service;
    elements.forEach(element => {
        if (isConnectable(element)) {
            const connectors = service.getConnectors(element);
            connectors.forEach(connector => set.add(connector));
        }
    });
    set.forEach(element => {
        if (isNoteBlock(element)) {
            const children = surface.doc.root?.children ?? [];
            // FIXME: should always keep at least 1 note
            if (children.length > 1) {
                surface.doc.deleteBlock(element);
            }
        }
        else {
            service.removeElement(element.id);
        }
    });
}
//# sourceMappingURL=crud.js.map