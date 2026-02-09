import { BlockService } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { render } from 'lit';
import { matchFlavours } from '../_common/utils/model.js';
import { AFFINE_DRAG_HANDLE_WIDGET, AffineDragHandleWidget, } from '../root-block/widgets/drag-handle/drag-handle.js';
import { captureEventTarget, getDuplicateBlocks, } from '../root-block/widgets/drag-handle/utils.js';
import { focusBlockEnd } from './commands/focus-block-end.js';
import { focusBlockStart } from './commands/focus-block-start.js';
import { registerTextStyleCommands, selectBlock, selectBlocksBetween, updateBlockType, } from './commands/index.js';
import { NoteBlockSchema } from './note-model.js';
export class NoteBlockService extends BlockService {
    constructor() {
        super(...arguments);
        this._dragHandleOption = {
            flavour: NoteBlockSchema.model.flavour,
            edgeless: true,
            onDragStart: ({ state, startDragging, anchorBlockPath, editorHost }) => {
                if (!anchorBlockPath) {
                    return false;
                }
                const element = captureEventTarget(state.raw.target);
                const insideDragHandle = !!element?.closest(AFFINE_DRAG_HANDLE_WIDGET);
                if (!insideDragHandle) {
                    return false;
                }
                const anchorComponent = editorHost.std.view.getBlock(anchorBlockPath);
                if (!anchorComponent ||
                    !matchFlavours(anchorComponent.model, [NoteBlockSchema.model.flavour])) {
                    return false;
                }
                const noteComponent = anchorComponent;
                const notePortal = noteComponent.closest('.edgeless-block-portal-note');
                assertExists(notePortal);
                const dragPreviewEl = notePortal.cloneNode();
                dragPreviewEl.style.transform = '';
                dragPreviewEl.style.left = '0';
                dragPreviewEl.style.top = '0';
                const noteBackground = notePortal.querySelector('.note-background');
                assertExists(noteBackground);
                const noteBackgroundClone = noteBackground.cloneNode();
                dragPreviewEl.append(noteBackgroundClone);
                const container = document.createElement('div');
                container.style.width = '100%';
                container.style.height = '100%';
                container.style.overflow = 'hidden';
                dragPreviewEl.append(container);
                render(noteComponent.host.renderModel(noteComponent.model), container);
                startDragging([noteComponent], state, dragPreviewEl);
                return true;
            },
            onDragEnd: ({ draggingElements, dropBlockId, dropType, state, editorHost, }) => {
                if (draggingElements.length !== 1 ||
                    !matchFlavours(draggingElements[0].model, [
                        NoteBlockSchema.model.flavour,
                    ])) {
                    return false;
                }
                if (dropType === 'in') {
                    return true;
                }
                const noteBlock = draggingElements[0].model;
                const targetBlock = editorHost.doc.getBlockById(dropBlockId);
                const parentBlock = editorHost.doc.getParent(dropBlockId);
                if (!targetBlock || !parentBlock) {
                    return true;
                }
                const altKey = state.raw.altKey;
                if (altKey) {
                    const duplicateBlocks = getDuplicateBlocks(noteBlock.children);
                    const parentIndex = parentBlock.children.indexOf(targetBlock) +
                        (dropType === 'after' ? 1 : 0);
                    editorHost.doc.addBlocks(duplicateBlocks, parentBlock, parentIndex);
                }
                else {
                    editorHost.doc.moveBlocks(noteBlock.children, parentBlock, targetBlock, dropType === 'before');
                    editorHost.doc.deleteBlock(noteBlock);
                    editorHost.selection.setGroup('edgeless', []);
                }
                return true;
            },
        };
    }
    mounted() {
        super.mounted();
        this.std.command
            .add('selectBlocksBetween', selectBlocksBetween)
            .add('selectBlock', selectBlock)
            .add('focusBlockStart', focusBlockStart)
            .add('focusBlockEnd', focusBlockEnd)
            .add('updateBlockType', updateBlockType);
        registerTextStyleCommands(this.std);
        this.disposables.add(AffineDragHandleWidget.registerOption(this._dragHandleOption));
    }
}
//# sourceMappingURL=note-service.js.map