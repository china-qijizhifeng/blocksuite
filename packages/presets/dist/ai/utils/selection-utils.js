import { ImageBlockModel, } from '@blocksuite/blocks';
import { BlocksUtils, EdgelessRootService } from '@blocksuite/blocks';
import { assertExists } from '@blocksuite/global/utils';
import { Slice, toDraftModel } from '@blocksuite/store';
import { getEdgelessCopilotWidget, getService } from './edgeless.js';
import { getContentFromSlice } from './markdown-utils.js';
export const getRootService = (host) => {
    return host.std.spec.getService('affine:page');
};
export function getEdgelessRootFromEditor(editor) {
    const edgelessRoot = editor.getElementsByTagName('affine-edgeless-root')[0];
    if (!edgelessRoot) {
        alert('Please switch to edgeless mode');
        throw new Error('Please open switch to edgeless mode');
    }
    return edgelessRoot;
}
export function getEdgelessService(editor) {
    const rootService = editor.std.spec.getService('affine:page');
    if (rootService instanceof EdgelessRootService) {
        return rootService;
    }
    alert('Please switch to edgeless mode');
    throw new Error('Please open switch to edgeless mode');
}
export async function selectedToCanvas(editor) {
    const edgelessRoot = getEdgelessRootFromEditor(editor);
    const { notes, frames, shapes, images } = BlocksUtils.splitElements(edgelessRoot.service.selection.selectedElements);
    if (notes.length + frames.length + images.length + shapes.length === 0) {
        return;
    }
    const canvas = await edgelessRoot.clipboardController.toCanvas([...notes, ...frames, ...images], shapes);
    if (!canvas) {
        return;
    }
    return canvas;
}
export async function frameToCanvas(frame, editor) {
    const edgelessRoot = getEdgelessRootFromEditor(editor);
    const { notes, frames, shapes, images } = BlocksUtils.splitElements(edgelessRoot.service.frame.getElementsInFrame(frame, true));
    if (notes.length + frames.length + images.length + shapes.length === 0) {
        return;
    }
    const canvas = await edgelessRoot.clipboardController.toCanvas([...notes, ...frames, ...images], shapes);
    if (!canvas) {
        return;
    }
    return canvas;
}
export async function selectedToPng(editor) {
    return (await selectedToCanvas(editor))?.toDataURL('image/png');
}
export function getSelectedModels(editorHost) {
    const chain = editorHost.std.command.chain();
    const [_, ctx] = chain
        .getSelectedModels({
        types: ['block', 'text'],
    })
        .run();
    const { selectedModels } = ctx;
    return selectedModels;
}
function traverse(model, drafts) {
    const isDatabase = model.flavour === 'affine:database';
    const children = isDatabase
        ? model.children
        : model.children.filter(child => {
            const idx = drafts.findIndex(m => m.id === child.id);
            return idx >= 0;
        });
    children.forEach(child => {
        const idx = drafts.findIndex(m => m.id === child.id);
        if (idx >= 0) {
            drafts.splice(idx, 1);
        }
        traverse(child, drafts);
    });
    model.children = children;
}
export async function getTextContentFromBlockModels(editorHost, models, type = 'markdown') {
    // Currently only filter out images and databases
    const selectedTextModels = models.filter(model => !BlocksUtils.matchFlavours(model, ['affine:image', 'affine:database']));
    const drafts = selectedTextModels.map(toDraftModel);
    drafts.forEach(draft => traverse(draft, drafts));
    const slice = Slice.fromModels(editorHost.std.doc, drafts);
    return getContentFromSlice(editorHost, slice, type);
}
export async function getSelectedTextContent(editorHost, type = 'markdown') {
    const selectedModels = getSelectedModels(editorHost);
    assertExists(selectedModels);
    return getTextContentFromBlockModels(editorHost, selectedModels, type);
}
export async function selectAboveBlocks(editorHost, num = 10) {
    let selectedModels = getSelectedModels(editorHost);
    assertExists(selectedModels);
    const lastLeafModel = selectedModels[selectedModels.length - 1];
    let noteModel = lastLeafModel;
    let lastRootModel = null;
    while (noteModel && noteModel.flavour !== 'affine:note') {
        lastRootModel = noteModel;
        noteModel = editorHost.doc.getParent(noteModel);
    }
    assertExists(noteModel);
    assertExists(lastRootModel);
    const endIndex = noteModel.children.indexOf(lastRootModel) + 1;
    const startIndex = Math.max(0, endIndex - num);
    const startBlock = noteModel.children[startIndex];
    selectedModels = [];
    let stop = false;
    const traverse = (model) => {
        if (stop)
            return;
        selectedModels.push(model);
        if (model === lastLeafModel) {
            stop = true;
            return;
        }
        model.children.forEach(child => traverse(child));
    };
    noteModel.children.slice(startIndex, endIndex).forEach(traverse);
    const { selection } = editorHost;
    selection.set([
        selection.create('text', {
            from: {
                blockId: startBlock.id,
                index: 0,
                length: startBlock.text?.length ?? 0,
            },
            to: {
                blockId: lastLeafModel.id,
                index: 0,
                length: selection.find('text')?.from.index ?? 0,
            },
        }),
    ]);
    return getTextContentFromBlockModels(editorHost, selectedModels);
}
export const stopPropagation = (e) => {
    e.stopPropagation();
};
export function getSurfaceElementFromEditor(editor) {
    const { doc } = editor;
    const surfaceModel = doc.getBlockByFlavour('affine:surface')[0];
    assertExists(surfaceModel);
    const surfaceId = surfaceModel.id;
    const surfaceElement = editor.querySelector(`affine-surface[data-block-id="${surfaceId}"]`);
    assertExists(surfaceElement);
    return surfaceElement;
}
export const getFirstImageInFrame = (frame, editor) => {
    const edgelessRoot = getEdgelessRootFromEditor(editor);
    const elements = edgelessRoot.service.frame.getElementsInFrame(frame, false);
    const image = elements.find(ele => {
        if (!BlocksUtils.isCanvasElement(ele)) {
            return ele.flavour === 'affine:image';
        }
        return false;
    });
    return image?.id;
};
export const getSelections = (host, mode = 'flat') => {
    const [_, data] = host.command
        .chain()
        .tryAll(chain => [
        chain.getTextSelection(),
        chain.getBlockSelections(),
        chain.getImageSelections(),
    ])
        .getSelectedBlocks({ types: ['text', 'block', 'image'], mode })
        .run();
    return data;
};
export const getSelectedImagesAsBlobs = async (host) => {
    const [_, data] = host.command
        .chain()
        .tryAll(chain => [
        chain.getTextSelection(),
        chain.getBlockSelections(),
        chain.getImageSelections(),
    ])
        .getSelectedBlocks({
        types: ['image'],
    })
        .run();
    const blobs = await Promise.all(data.selectedBlocks?.map(async (b) => {
        const sourceId = b.model.sourceId;
        if (!sourceId)
            return null;
        const blob = await (sourceId ? host.doc.blobSync.get(sourceId) : null);
        if (!blob)
            return null;
        return new File([blob], sourceId);
    }) ?? []);
    return blobs.filter((blob) => !!blob);
};
export const getSelectedNoteAnchor = (host, id) => {
    return host.querySelector(`[data-portal-block-id="${id}"] .note-background`);
};
export function getCopilotSelectedElems(host) {
    const service = getService(host);
    const copilotWidget = getEdgelessCopilotWidget(host);
    if (copilotWidget.visible) {
        return service.tool.controllers['copilot']
            .selectedElements;
    }
    return service.selection.selectedElements;
}
export const imageCustomInput = async (host) => {
    const selectedElements = getCopilotSelectedElems(host);
    if (selectedElements.length !== 1)
        return;
    const imageBlock = selectedElements[0];
    if (!(imageBlock instanceof ImageBlockModel))
        return;
    if (!imageBlock.sourceId)
        return;
    const blob = await host.doc.blobSync.get(imageBlock.sourceId);
    if (!blob)
        return;
    return {
        attachments: [blob],
    };
};
//# sourceMappingURL=selection-utils.js.map