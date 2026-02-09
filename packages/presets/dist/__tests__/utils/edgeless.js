export function getSurface(doc, editor) {
    const surfaceModel = doc.getBlockByFlavour('affine:surface');
    return editor.host.view.viewFromPath('block', [
        doc.root.id,
        surfaceModel[0].id,
    ]);
}
export function getDocRootBlock(doc, editor, _) {
    return editor.host.view.viewFromPath('block', [doc.root.id]);
}
export function addNote(doc, props = {}) {
    const noteId = doc.addBlock('affine:note', {
        xywh: '[0, 0, 800, 100]',
        ...props,
    }, doc.root);
    doc.addBlock('affine:paragraph', {}, noteId);
    return noteId;
}
//# sourceMappingURL=edgeless.js.map