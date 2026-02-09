import { IS_MAC } from '@blocksuite/global/env';
import { DisposableGroup } from '@blocksuite/global/utils';
import { isMiddleButtonPressed, isRightButtonPressed, NoteDisplayMode, } from '../../../_common/utils/index.js';
import { CopilotSelectionController } from '../controllers/tools/copilot-tool.js';
import { edgelessElementsBound } from '../utils/bound-utils.js';
import { isNoteBlock } from '../utils/query.js';
export class EdgelessToolsManager {
    get dragging() {
        return this._dragging;
    }
    get selection() {
        return this.service.selection;
    }
    get lastMousePos() {
        return this._lastMousePos;
    }
    get edgelessTool() {
        return this._edgelessTool;
    }
    set edgelessTool(mode) {
        this._edgelessTool = mode;
        // sync mouse mode
        this._controllers[this._edgelessTool.type].tool = this._edgelessTool;
    }
    get currentController() {
        return this._controllers[this.edgelessTool.type];
    }
    get controllers() {
        return this._controllers;
    }
    get draggingArea() {
        if (!this.currentController.draggingArea)
            return null;
        const { start, end } = this.currentController.draggingArea;
        const minX = Math.min(start.x, end.x);
        const minY = Math.min(start.y, end.y);
        const maxX = Math.max(start.x, end.x);
        const maxY = Math.max(start.y, end.y);
        return new DOMRect(minX, minY, maxX - minX, maxY - minY);
    }
    set spaceBar(pressed) {
        this._spaceBar = pressed;
        this.currentController.onPressSpaceBar(pressed);
    }
    get spaceBar() {
        return this._spaceBar;
    }
    set shiftKey(pressed) {
        this._shiftKey = pressed;
        this.currentController.onPressShiftKey(pressed);
    }
    get shiftKey() {
        return this._shiftKey;
    }
    get doc() {
        return this.service.doc;
    }
    get service() {
        return this._service;
    }
    get container() {
        return this._container;
    }
    get dispatcher() {
        return this.container.dispatcher;
    }
    constructor(service) {
        this._edgelessTool = this._getToolFromLocalStorage();
        this._controllers = {};
        this._mounted = false;
        /** Latest mouse position in view coords */
        this._lastMousePos = { x: 0, y: 0 };
        // pressed shift key
        this._shiftKey = false;
        this._spaceBar = false;
        this._dragging = false;
        this._disposables = new DisposableGroup();
        this._add = (name, fn) => {
            this._disposables.add(this.dispatcher.add(name, fn));
        };
        this._onContainerDragStart = (e) => {
            // only allow pan tool in readonly mode
            if (this.doc.readonly && this.edgelessTool.type !== 'pan')
                return;
            // do nothing when holding right-key and not in pan mode
            if (e.button === 2 &&
                this.edgelessTool.type !== 'pan' &&
                this.edgelessTool.type !== 'copilot')
                return;
            return this.currentController.onContainerDragStart(e);
        };
        this._onContainerDragMove = (e) => {
            // only allow pan tool in readonly mode
            if (this.doc.readonly && this.edgelessTool.type !== 'pan')
                return;
            // do nothing when holding right-key and not in pan mode
            if (e.button === 2 &&
                this.edgelessTool.type !== 'pan' &&
                this.edgelessTool.type !== 'copilot')
                return;
            return this.currentController.onContainerDragMove(e);
        };
        this._onContainerDragEnd = (e) => {
            // only allow pan tool in readonly mode
            if (this.doc.readonly && this.edgelessTool.type !== 'pan')
                return;
            // do nothing when holding right-key and not in pan mode
            if (e.button === 2 &&
                this.edgelessTool.type !== 'pan' &&
                this.edgelessTool.type !== 'copilot')
                return;
            return this.currentController.onContainerDragEnd(e);
        };
        this._onContainerClick = (e) => {
            return this.currentController.onContainerClick(e);
        };
        this._onContainerDblClick = (e) => {
            return this.currentController.onContainerDblClick(e);
        };
        this._onContainerTripleClick = (e) => {
            return this.currentController.onContainerTripleClick(e);
        };
        this._onContainerPointerMove = (e) => {
            this._updateLastMousePos(e);
            return this._controllers[this.edgelessTool.type].onContainerMouseMove(e);
        };
        this._onContainerPointerOut = (e) => {
            return this._controllers[this.edgelessTool.type].onContainerMouseOut(e);
        };
        this._onContainerContextMenu = (e) => {
            e.event.preventDefault();
        };
        this._onContainerPointerDown = (e) => {
            const pointEvt = e.raw;
            const metaKeyPressed = IS_MAC ? pointEvt.metaKey : pointEvt.ctrlKey;
            if (isMiddleButtonPressed(pointEvt) ||
                isRightButtonPressed(pointEvt) ||
                metaKeyPressed) {
                const isRightButton = isRightButtonPressed(pointEvt);
                const targetTool = (isRightButton || metaKeyPressed
                    ? {
                        type: 'copilot',
                    }
                    : { type: 'pan', panning: true });
                const prevEdgelessTool = this._edgelessTool;
                const targetButtonRelease = (_e) => (isMiddleButtonPressed(e.raw) && !isMiddleButtonPressed(_e)) ||
                    (isRightButton && !isRightButtonPressed(_e)) ||
                    metaKeyPressed;
                const switchToPreMode = (_e) => {
                    if (targetTool.type === 'copilot')
                        return;
                    if (targetButtonRelease(_e)) {
                        this.setEdgelessTool(prevEdgelessTool, undefined, !isRightButton && !metaKeyPressed);
                        document.removeEventListener('pointerup', switchToPreMode, false);
                        document.removeEventListener('pointerover', switchToPreMode, false);
                    }
                };
                this.dispatcher.disposables.addFromEvent(document, 'pointerup', switchToPreMode);
                this.setEdgelessTool(targetTool);
                return;
            }
            if (this.doc.readonly)
                return;
            return this.currentController.onContainerPointerDown(e);
        };
        this._onContainerPointerUp = (_ev) => { };
        this.setEdgelessTool = (edgelessTool, state = {
            elements: [],
            editing: false,
        }, restoreToLastSelection = true) => {
            const { type } = edgelessTool;
            if (this.doc.readonly && type !== 'pan' && type !== 'frameNavigator') {
                return;
            }
            if (this.edgelessTool === edgelessTool)
                return;
            if (this.currentController instanceof CopilotSelectionController &&
                this.currentController.processing) {
                return;
            }
            const lastType = this.edgelessTool.type;
            this._controllers[lastType].beforeModeSwitch(edgelessTool);
            this._controllers[type].beforeModeSwitch(edgelessTool);
            const isEditing = !Array.isArray(state) && state.editing;
            if (!isEditing) {
                const isDefaultType = type === 'default';
                const isLassoType = type === 'lasso';
                const isLastTypeLasso = lastType === 'lasso';
                const isCopilotType = type === 'copilot';
                const isLastTypeCopilot = lastType === 'copilot';
                const isLastTypeDefault = lastType === 'default';
                const isEmptyState = Array.isArray(state)
                    ? this.selection.isEmpty(state)
                    : state.elements.length === 0;
                const hasLastState = !!this.selection.lastSurfaceSelections;
                const isNotSingleDocOnlyNote = !(this.selection.lastSurfaceSelections &&
                    this.selection.lastSurfaceSelections[0] &&
                    this.selection.lastSurfaceSelections[0].elements.length === 1 &&
                    this._isDocOnlyNote(this.selection.lastSurfaceSelections[0].elements[0]));
                if ((isDefaultType && isLastTypeDefault) ||
                    (isLassoType && isLastTypeDefault) ||
                    (isDefaultType && isLastTypeLasso) ||
                    (isLassoType && isLastTypeLasso) ||
                    (isCopilotType && isLastTypeDefault) ||
                    // (isDefaultType && isLastTypeCopilot) ||
                    (isCopilotType && isLastTypeCopilot)) {
                    // if state is provided, override the selection( if state is empty array, clear all selection )
                    if (!state) {
                        // selection should remain same when switching between default and lasso tool
                        state = this.selection.surfaceSelections;
                    }
                }
                else if (((isDefaultType && !isLastTypeLasso) || isLassoType) &&
                    ((isDefaultType && !isLastTypeCopilot) || isCopilotType) &&
                    isEmptyState &&
                    hasLastState &&
                    isNotSingleDocOnlyNote &&
                    restoreToLastSelection) {
                    state = this.selection.lastSurfaceSelections; // for getting the selection back after going to another tools
                }
            }
            this.selection.set(state);
            this.edgelessTool = edgelessTool;
            this.container.slots.edgelessToolUpdated.emit(edgelessTool);
            this._controllers[lastType].afterModeSwitch(edgelessTool);
            this._controllers[edgelessTool.type].afterModeSwitch(edgelessTool);
        };
        this._service = service;
    }
    _updateLastMousePos(e) {
        this._lastMousePos = {
            x: e.x,
            y: e.y,
        };
    }
    _getToolFromLocalStorage() {
        const type = localStorage.defaultTool;
        if (type === 'pan')
            return { type: 'pan', panning: false };
        return { type: 'default' };
    }
    _initMouseAndWheelEvents() {
        this._add('dragStart', ctx => {
            this._dragging = true;
            const event = ctx.get('pointerState');
            this._onContainerDragStart(event);
        });
        this._add('dragMove', ctx => {
            const event = ctx.get('pointerState');
            this._onContainerDragMove(event);
        });
        this._add('dragEnd', ctx => {
            this._dragging = false;
            const event = ctx.get('pointerState');
            this._onContainerDragEnd(event);
        });
        this._add('click', ctx => {
            const event = ctx.get('pointerState');
            this._onContainerClick(event);
        });
        this._add('doubleClick', ctx => {
            const event = ctx.get('pointerState');
            this._onContainerDblClick(event);
        });
        this._add('tripleClick', ctx => {
            const event = ctx.get('pointerState');
            this._onContainerTripleClick(event);
        });
        this._add('pointerMove', ctx => {
            const event = ctx.get('pointerState');
            this._onContainerPointerMove(event);
        });
        this._add('pointerDown', ctx => {
            const event = ctx.get('pointerState');
            this._onContainerPointerDown(event);
        });
        this._add('pointerUp', ctx => {
            const event = ctx.get('pointerState');
            this._onContainerPointerUp(event);
        });
        this._add('pointerOut', ctx => {
            const event = ctx.get('pointerState');
            this._onContainerPointerOut(event);
        });
        this._add('contextMenu', ctx => {
            const event = ctx.get('defaultState');
            this._onContainerContextMenu(event);
        });
    }
    _isDocOnlyNote(selectedId) {
        const selected = this.service.doc.getBlockById(selectedId);
        if (!selected)
            return false;
        return (isNoteBlock(selected) && selected.displayMode === NoteDisplayMode.DocOnly);
    }
    mount(container) {
        this._container = container;
        this._mounted = true;
        Object.values(this._controllers).forEach(controller => {
            controller.mount(container);
        });
        this._initMouseAndWheelEvents();
    }
    register(Tool) {
        const tool = new Tool(this.service);
        this._controllers[tool.tool.type] = tool;
        if (this._mounted) {
            tool.mount(this.container);
        }
    }
    getHoverState() {
        if (!this.currentController.enableHover) {
            return null;
        }
        const { x, y } = this._lastMousePos;
        const [modelX, modelY] = this.service.viewport.toModelCoord(x, y);
        const hovered = this.service.pickElement(modelX, modelY);
        if (!hovered || this.selection?.editing) {
            return null;
        }
        return {
            rect: this.service.viewport.toViewBound(edgelessElementsBound([hovered])),
            content: hovered,
        };
    }
    switchToDefaultMode(state) {
        this.setEdgelessTool({ type: 'default' }, state);
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    clear() { }
    dispose() {
        this._disposables.dispose();
    }
    static create(service, controllers) {
        const manager = new EdgelessToolsManager(service);
        controllers.forEach(controller => {
            manager.register(controller);
        });
        return manager;
    }
}
//# sourceMappingURL=tools-manager.js.map