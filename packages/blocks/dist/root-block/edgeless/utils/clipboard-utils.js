import { groupBy } from '../../../_common/utils/iterable.js';
import { edgelessElementsBound } from './bound-utils.js';
import { getCloneElements, prepareCloneData } from './clone-utils.js';
import { getElementsWithoutGroup } from './group.js';
import { isEdgelessTextBlock, isEmbedSyncedDocBlock, isFrameBlock, isImageBlock, isNoteBlock, } from './query.js';
const offset = 10;
export async function duplicate(edgeless, elements, select = true) {
    const { clipboardController } = edgeless;
    const copyElements = getCloneElements(elements, edgeless.surface.edgeless.service.frame);
    const totalBound = edgelessElementsBound(copyElements);
    totalBound.x += totalBound.w + offset;
    const snapshot = await prepareCloneData(copyElements, edgeless.std);
    const { canvasElements, blockModels } = await clipboardController.createElementsFromClipboardData(snapshot, totalBound.center);
    const newElements = [...canvasElements, ...blockModels];
    edgeless.surface.fitToViewport(totalBound);
    if (select) {
        edgeless.service.selection.set({
            elements: newElements.map(e => e.id),
            editing: false,
        });
    }
}
export const splitElements = (elements) => {
    const { notes, frames, shapes, images, edgelessTexts, embedSyncedDocs } = groupBy(getElementsWithoutGroup(elements), element => {
        if (isNoteBlock(element)) {
            return 'notes';
        }
        else if (isFrameBlock(element)) {
            return 'frames';
        }
        else if (isImageBlock(element)) {
            return 'images';
        }
        else if (isEdgelessTextBlock(element)) {
            return 'edgelessTexts';
        }
        else if (isEmbedSyncedDocBlock(element)) {
            return 'embedSyncedDocs';
        }
        return 'shapes';
    });
    return {
        notes: notes ?? [],
        shapes: shapes ?? [],
        frames: frames ?? [],
        images: images ?? [],
        edgelessTexts: edgelessTexts ?? [],
        embedSyncedDocs: embedSyncedDocs ?? [],
    };
};
//# sourceMappingURL=clipboard-utils.js.map