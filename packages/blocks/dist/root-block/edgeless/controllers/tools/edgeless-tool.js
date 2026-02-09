export class EdgelessToolController {
    get draggingArea() {
        return this._draggingArea;
    }
    get _surface() {
        return this._edgeless.surface;
    }
    get _doc() {
        return this._edgeless.doc;
    }
    get _blocks() {
        return this._edgeless.service.blocks;
    }
    constructor(service) {
        this._draggingArea = null;
        this.enableHover = false;
        this._service = service;
    }
    mount(edgeless) {
        this._edgeless = edgeless;
    }
}
//# sourceMappingURL=edgeless-tool.js.map