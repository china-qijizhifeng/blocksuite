import { asyncFocusRichText, handleNativeRangeAtPoint, } from '../../../_common/utils/index.js';
import { DEFAULT_NOTE_HEIGHT, DEFAULT_NOTE_WIDTH, NOTE_MIN_HEIGHT, } from './consts.js';
export function addNote(edgeless, point, options, width = DEFAULT_NOTE_WIDTH, height = DEFAULT_NOTE_HEIGHT) {
    const noteId = edgeless.addNoteWithPoint(point, {
        width,
        height,
    });
    const doc = edgeless.doc;
    const blockId = doc.addBlock(options.childFlavour, { type: options.childType }, noteId);
    if (options.collapse && height > NOTE_MIN_HEIGHT) {
        const note = doc.getBlockById(noteId);
        doc.updateBlock(note, () => {
            note.edgeless.collapse = true;
            note.edgeless.collapsedHeight = height;
        });
    }
    edgeless.tools.setEdgelessTool({ type: 'default' });
    // Wait for edgelessTool updated
    requestAnimationFrame(() => {
        const blocks = doc.root?.children.filter(child => child.flavour === 'affine:note') ?? [];
        const element = blocks.find(b => b.id === noteId);
        if (element) {
            edgeless.service.selection.set({
                elements: [element.id],
                editing: true,
            });
            // Waiting dom updated, `note mask` is removed
            edgeless.updateComplete
                .then(() => {
                if (blockId) {
                    asyncFocusRichText(edgeless.host, blockId)?.catch(console.error);
                }
                else {
                    // Cannot reuse `handleNativeRangeClick` directly here,
                    // since `retargetClick` will re-target to pervious editor
                    handleNativeRangeAtPoint(point.x, point.y);
                }
            })
                .catch(console.error);
        }
    });
}
//# sourceMappingURL=note.js.map