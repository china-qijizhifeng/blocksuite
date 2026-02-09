import { assertExists, noop } from '@blocksuite/global/utils';
import { hasClassNameInList, Point, } from '../../../../_common/utils/index.js';
import { EXCLUDING_MOUSE_OUT_CLASS_LIST, NOTE_INIT_HEIGHT, NOTE_MIN_WIDTH, } from '../../utils/consts.js';
import { addNote } from '../../utils/note.js';
import { DraggingNoteOverlay, NoteOverlay } from '../../utils/tool-overlay.js';
import { EdgelessToolController } from './edgeless-tool.js';
export class NoteToolController extends EdgelessToolController {
    constructor() {
        super(...arguments);
        this._noteOverlay = null;
        this._draggingNoteOverlay = null;
        this._draggingArea = null;
        this.tool = {
            type: 'affine:note',
            childFlavour: 'affine:paragraph',
            childType: 'text',
            tip: 'Text',
        };
    }
    _resize(shift = false) {
        const { _draggingArea, _draggingNoteOverlay, _edgeless } = this;
        assertExists(_draggingArea);
        assertExists(_draggingNoteOverlay);
        const { viewport } = _edgeless.service;
        const { zoom } = viewport;
        const { start: { x: startX, y: startY }, end, } = _draggingArea;
        let { x: endX, y: endY } = end;
        if (shift) {
            const w = Math.abs(endX - startX);
            const h = Math.abs(endY - startY);
            const m = Math.max(w, h);
            endX = startX + (endX > startX ? m : -m);
            endY = startY + (endY > startY ? m : -m);
        }
        const [x, y] = viewport.toModelCoord(Math.min(startX, endX), Math.min(startY, endY));
        const w = Math.abs(startX - endX) / zoom;
        const h = Math.abs(startY - endY) / zoom;
        _draggingNoteOverlay.slots.draggingNoteUpdated.emit({
            xywh: [x, y, w, h],
        });
    }
    _updateOverlayPosition(x, y) {
        if (!this._noteOverlay)
            return;
        this._noteOverlay.x = x;
        this._noteOverlay.y = y;
        this._edgeless.surface.refresh();
    }
    _disposeOverlay(overlay) {
        if (!overlay)
            return null;
        overlay.dispose();
        this._edgeless.surface.renderer.removeOverlay(overlay);
        return null;
    }
    // Ensure clear overlay before adding a new note
    _clearOverlay() {
        this._noteOverlay = this._disposeOverlay(this._noteOverlay);
        this._draggingNoteOverlay = this._disposeOverlay(this._draggingNoteOverlay);
        this._edgeless.surface.refresh();
    }
    // Should hide overlay when mouse is out of viewport or on menu and toolbar
    _hideOverlay() {
        if (!this._noteOverlay)
            return;
        this._noteOverlay.globalAlpha = 0;
        this._edgeless.surface.refresh();
    }
    onPressShiftKey(pressed) {
        if (!this._draggingNoteOverlay)
            return;
        this._resize(pressed);
    }
    onPressSpaceBar(_pressed) {
        noop();
    }
    onContainerPointerDown() {
        noop();
    }
    onContainerClick(e) {
        this._clearOverlay();
        const { childFlavour, childType } = this.tool;
        const options = {
            childFlavour,
            childType,
            collapse: false,
        };
        const point = new Point(e.point.x, e.point.y);
        addNote(this._edgeless, point, options);
    }
    onContainerContextMenu() {
        noop();
    }
    onContainerDblClick() {
        noop();
    }
    onContainerTripleClick() {
        noop();
    }
    onContainerDragStart(e) {
        this._clearOverlay();
        const attributes = this._edgeless.service.editPropsStore.getLastProps('affine:note');
        const background = attributes.background;
        this._draggingNoteOverlay = new DraggingNoteOverlay(this._edgeless, background);
        this._edgeless.surface.renderer.addOverlay(this._draggingNoteOverlay);
        this._draggingArea = {
            start: new DOMPoint(e.x, e.y),
            end: new DOMPoint(e.x, e.y),
        };
    }
    onContainerDragMove(e) {
        assertExists(this._draggingNoteOverlay);
        assertExists(this._draggingArea);
        this._draggingArea.end = new DOMPoint(e.x, e.y);
        this._resize(e.keys.shift || this._edgeless.tools.shiftKey);
    }
    onContainerDragEnd() {
        if (!this._draggingNoteOverlay)
            return;
        this._draggingArea = null;
        const { x, y, width, height } = this._draggingNoteOverlay;
        this._disposeOverlay(this._draggingNoteOverlay);
        const { childFlavour, childType } = this.tool;
        const options = {
            childFlavour,
            childType,
            collapse: true,
        };
        const [viewX, viewY] = this._edgeless.service.viewport.toViewCoord(x, y);
        const point = new Point(viewX, viewY);
        this._doc.captureSync();
        addNote(this._edgeless, point, options, Math.max(width, NOTE_MIN_WIDTH), Math.max(height, NOTE_INIT_HEIGHT));
    }
    onContainerMouseMove(e) {
        if (!this._noteOverlay)
            return;
        // if mouse is in viewport and move, update overlay pointion and show overlay
        if (this._noteOverlay.globalAlpha === 0)
            this._noteOverlay.globalAlpha = 1;
        const [x, y] = this._service.viewport.toModelCoord(e.x, e.y);
        this._updateOverlayPosition(x, y);
    }
    onContainerMouseOut(e) {
        // should not hide the overlay when pointer on the area of other notes
        if (e.raw.relatedTarget &&
            hasClassNameInList(e.raw.relatedTarget, EXCLUDING_MOUSE_OUT_CLASS_LIST))
            return;
        this._hideOverlay();
    }
    beforeModeSwitch() {
        this._clearOverlay();
    }
    afterModeSwitch(newTool) {
        if (newTool.type !== 'affine:note')
            return;
        const attributes = this._edgeless.service.editPropsStore.getLastProps('affine:note');
        const background = attributes.background;
        this._noteOverlay = new NoteOverlay(this._edgeless, background);
        this._noteOverlay.text = newTool.tip;
        this._edgeless.surface.renderer.addOverlay(this._noteOverlay);
    }
}
//# sourceMappingURL=note-tool.js.map