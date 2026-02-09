import { Slot } from '@blocksuite/store';
import { Bound, getElementsBound } from '../../../../surface-block/index.js';
import { AFFINE_AI_PANEL_WIDGET, } from '../../../widgets/ai-panel/ai-panel.js';
import { EdgelessToolController } from './edgeless-tool.js';
export class CopilotSelectionController extends EdgelessToolController {
    constructor() {
        super(...arguments);
        this._dragging = false;
        this.tool = {
            type: 'copilot',
        };
        this.dragStartPoint = [0, 0];
        this.dragLastPoint = [0, 0];
        this.draggingAreaUpdated = new Slot();
    }
    get selection() {
        return this._edgeless.service.selection;
    }
    get selectedElements() {
        return this.selection.selectedElements;
    }
    get area() {
        const start = new DOMPoint(this.dragStartPoint[0], this.dragStartPoint[1]);
        const end = new DOMPoint(this.dragLastPoint[0], this.dragLastPoint[1]);
        const minX = Math.min(start.x, end.x);
        const minY = Math.min(start.y, end.y);
        const maxX = Math.max(start.x, end.x);
        const maxY = Math.max(start.y, end.y);
        return new DOMRect(minX, minY, maxX - minX, maxY - minY);
    }
    // AI processing
    get processing() {
        const aiPanel = this._edgeless.host.view.getWidget(AFFINE_AI_PANEL_WIDGET, this._edgeless.doc.root.id);
        return aiPanel && aiPanel.state !== 'hidden';
    }
    _initDragState(e) {
        this.dragStartPoint = this._service.viewport.toModelCoord(e.x, e.y);
        this.dragLastPoint = this.dragStartPoint;
    }
    abort() {
        this._dragging = false;
        this.dragStartPoint = [0, 0];
        this.dragLastPoint = [0, 0];
        this._edgeless.tools.setEdgelessTool({ type: 'default' });
    }
    updateDragPointsWith(selectedElements, padding = 0) {
        const bounds = getElementsBound(selectedElements.map(e => e.elementBound)).expand(padding / this._edgeless.service.zoom);
        this.dragStartPoint = bounds.tl;
        this.dragLastPoint = bounds.br;
    }
    updateSelectionWith(selectedElements, padding = 0) {
        const { selection } = this._edgeless.service;
        selection.clear();
        this.updateDragPointsWith(selectedElements, padding);
        selection.set({
            elements: selectedElements.map(e => e.id),
            editing: false,
            inoperable: true,
        });
        this.draggingAreaUpdated.emit(true);
    }
    onContainerDragStart(e) {
        if (this.processing)
            return;
        this._initDragState(e);
        this._dragging = true;
        this.draggingAreaUpdated.emit();
    }
    onContainerDragMove(e) {
        if (!this._dragging)
            return;
        this.dragLastPoint = this._service.viewport.toModelCoord(e.x, e.y);
        const area = this.area;
        const bound = new Bound(area.x, area.y, area.width, area.height);
        if (area.width & area.height) {
            const elements = this._service.pickElementsByBound(bound);
            const set = new Set(elements);
            this.selection.set({
                elements: Array.from(set).map(element => element.id),
                editing: false,
                inoperable: true,
            });
        }
        this.draggingAreaUpdated.emit();
    }
    onContainerDragEnd() {
        if (!this._dragging)
            return;
        this._dragging = false;
        this.draggingAreaUpdated.emit(true);
    }
    onContainerPointerDown(e) {
        if (this.processing) {
            e.raw.stopPropagation();
            return;
        }
        this._edgeless.tools.setEdgelessTool({ type: 'default' });
    }
    onContainerClick() { }
    onContainerContextMenu() { }
    onContainerDblClick() { }
    onContainerTripleClick() { }
    onContainerMouseMove() { }
    onContainerMouseOut() { }
    onPressShiftKey() { }
    onPressSpaceBar() { }
    beforeModeSwitch(edgelessTool) {
        this._service.locked = edgelessTool?.type === 'copilot';
    }
    afterModeSwitch() { }
}
//# sourceMappingURL=copilot-tool.js.map