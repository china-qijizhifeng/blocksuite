var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
import { WidgetElement } from '@blocksuite/block-std';
import { autoUpdate, computePosition, flip, offset, shift, size, } from '@floating-ui/dom';
import { css, html, nothing } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { MOUSE_BUTTON, requestConnectedFrame, } from '../../../_common/utils/event.js';
import { Bound, getElementsBound } from '../../../surface-block/index.js';
import { AFFINE_AI_PANEL_WIDGET } from '../ai-panel/ai-panel.js';
import { EdgelessCopilotPanel } from '../edgeless-copilot-panel/index.js';
export const AFFINE_EDGELESS_COPILOT_WIDGET = 'affine-edgeless-copilot-widget';
let EdgelessCopilotWidget = (() => {
    let _classDecorators = [customElement(AFFINE_EDGELESS_COPILOT_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetElement;
    let __selectionRect_decorators;
    let __selectionRect_initializers = [];
    let __selectionRect_extraInitializers = [];
    let __visible_decorators;
    let __visible_initializers = [];
    let __visible_extraInitializers = [];
    let _selectionElem_decorators;
    let _selectionElem_initializers = [];
    let _selectionElem_extraInitializers = [];
    var EdgelessCopilotWidget = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_selectionRect_accessor_storage = __runInitializers(this, __selectionRect_initializers, { x: 0, y: 0, width: 0, height: 0 });
            this.#_visible_accessor_storage = (__runInitializers(this, __selectionRect_extraInitializers), __runInitializers(this, __visible_initializers, false));
            this._selectionModelRect = __runInitializers(this, __visible_extraInitializers);
            this._clickOutsideOff = null;
            this._listenClickOutsideId = null;
            this.#selectionElem_accessor_storage = __runInitializers(this, _selectionElem_initializers, void 0);
            this.groups = (__runInitializers(this, _selectionElem_extraInitializers), []);
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __selectionRect_decorators = [state()];
            __visible_decorators = [state()];
            _selectionElem_decorators = [query('.copilot-selection-rect')];
            __esDecorate(this, null, __selectionRect_decorators, { kind: "accessor", name: "_selectionRect", static: false, private: false, access: { has: obj => "_selectionRect" in obj, get: obj => obj._selectionRect, set: (obj, value) => { obj._selectionRect = value; } }, metadata: _metadata }, __selectionRect_initializers, __selectionRect_extraInitializers);
            __esDecorate(this, null, __visible_decorators, { kind: "accessor", name: "_visible", static: false, private: false, access: { has: obj => "_visible" in obj, get: obj => obj._visible, set: (obj, value) => { obj._visible = value; } }, metadata: _metadata }, __visible_initializers, __visible_extraInitializers);
            __esDecorate(this, null, _selectionElem_decorators, { kind: "accessor", name: "selectionElem", static: false, private: false, access: { has: obj => "selectionElem" in obj, get: obj => obj.selectionElem, set: (obj, value) => { obj.selectionElem = value; } }, metadata: _metadata }, _selectionElem_initializers, _selectionElem_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessCopilotWidget = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get visible() {
            return !!(this._visible &&
                this._selectionRect.width &&
                this._selectionRect.height);
        }
        get selectionRect() {
            return this._selectionRect;
        }
        get selectionModelRect() {
            return this._selectionModelRect;
        }
        get edgeless() {
            return this.blockElement;
        }
        set visible(visible) {
            this._visible = visible;
        }
        static { this.styles = css `
    .copilot-selection-rect {
      position: absolute;
      box-sizing: border-box;
      border-radius: 4px;
      border: 2px dashed var(--affine-brand-color, #1e96eb);
    }
  `; }
        #_selectionRect_accessor_storage;
        get _selectionRect() { return this.#_selectionRect_accessor_storage; }
        set _selectionRect(value) { this.#_selectionRect_accessor_storage = value; }
        #_visible_accessor_storage;
        get _visible() { return this.#_visible_accessor_storage; }
        set _visible(value) { this.#_visible_accessor_storage = value; }
        #selectionElem_accessor_storage;
        get selectionElem() { return this.#selectionElem_accessor_storage; }
        set selectionElem(value) { this.#selectionElem_accessor_storage = value; }
        _updateSelection(rect) {
            this._selectionModelRect = rect;
            const zoom = this.edgeless.service.viewport.zoom;
            const [x, y] = this.edgeless.service.viewport.toViewCoord(rect.left, rect.top);
            const [width, height] = [rect.width * zoom, rect.height * zoom];
            this._selectionRect = { x, y, width, height };
        }
        _watchClickOutside() {
            this._clickOutsideOff?.();
            const { width, height } = this._selectionRect;
            if (width && height) {
                this._listenClickOutsideId &&
                    cancelAnimationFrame(this._listenClickOutsideId);
                this._listenClickOutsideId = requestConnectedFrame(() => {
                    if (!this.isConnected) {
                        return;
                    }
                    const off = this.blockElement.dispatcher.add('pointerDown', ctx => {
                        const e = ctx.get('pointerState').raw;
                        const aiPanel = this.host.view.getWidget(AFFINE_AI_PANEL_WIDGET, this.doc.root.id);
                        if (e.button === MOUSE_BUTTON.MAIN &&
                            !this.contains(e.target) &&
                            (!aiPanel || aiPanel.state === 'hidden')) {
                            off();
                            this._visible = false;
                            this.hideCopilotPanel();
                        }
                    });
                    this._listenClickOutsideId = null;
                    this._clickOutsideOff = off;
                }, this);
            }
        }
        _showCopilotPanel() {
            requestConnectedFrame(() => {
                if (!this._copilotPanel) {
                    const panel = new EdgelessCopilotPanel();
                    panel.host = this.host;
                    panel.groups = this.groups;
                    panel.edgeless = this.edgeless;
                    this.renderRoot.append(panel);
                    this._copilotPanel = panel;
                }
                const referenceElement = this.selectionElem;
                const panel = this._copilotPanel;
                // @TODO: optimize
                const viewport = this.edgeless.service.viewport;
                if (!referenceElement || !referenceElement.isConnected)
                    return;
                autoUpdate(referenceElement, panel, () => {
                    computePosition(referenceElement, panel, {
                        placement: 'right-start',
                        middleware: [
                            offset({
                                mainAxis: 16,
                            }),
                            flip({
                                mainAxis: true,
                                crossAxis: true,
                                flipAlignment: true,
                            }),
                            shift(() => {
                                const { left, top, width, height } = viewport;
                                return {
                                    padding: 20,
                                    crossAxis: true,
                                    rootBoundary: {
                                        x: left,
                                        y: top,
                                        width,
                                        height: height - 100,
                                    },
                                };
                            }),
                            size({
                                apply: ({ elements }) => {
                                    const { height } = viewport;
                                    elements.floating.style.maxHeight = `${height - 140}px`;
                                },
                            }),
                        ],
                    })
                        .then(({ x, y }) => {
                        panel.style.left = `${x}px`;
                        panel.style.top = `${y}px`;
                    })
                        .catch(e => {
                        console.warn("Can't compute EdgelessCopilotPanel position", e);
                    });
                });
            }, this);
        }
        determineInsertionBounds(width = 800, height = 95) {
            const elements = this.edgeless.service.selection.selectedElements;
            const offsetY = 20 / this.edgeless.service.viewport.zoom;
            const bounds = new Bound(0, 0, width, height);
            if (elements.length) {
                const { x, y, h } = getElementsBound(elements.map(ele => ele.elementBound));
                bounds.x = x;
                bounds.y = y + h + offsetY;
            }
            else {
                const { x, y, height: h } = this.selectionModelRect;
                bounds.x = x;
                bounds.y = y + h + offsetY;
            }
            return bounds;
        }
        hideCopilotPanel() {
            this._copilotPanel?.hide();
            this._copilotPanel = null;
            this._clickOutsideOff = null;
        }
        lockToolbar(disabled) {
            this.edgeless.slots.toolbarLocked.emit(disabled);
        }
        connectedCallback() {
            super.connectedCallback();
            const CopilotSelectionTool = this.edgeless.tools.controllers['copilot'];
            this._disposables.add(CopilotSelectionTool.draggingAreaUpdated.on(shouldShowPanel => {
                this._visible = true;
                this._updateSelection(CopilotSelectionTool.area);
                if (shouldShowPanel) {
                    this._showCopilotPanel();
                    this._watchClickOutside();
                }
                else {
                    this.hideCopilotPanel();
                }
            }));
            this._disposables.add(this.edgeless.service.viewport.viewportUpdated.on(() => {
                if (!this._visible)
                    return;
                this._updateSelection(CopilotSelectionTool.area);
            }));
            this._disposables.add(this.edgeless.slots.edgelessToolUpdated.on(({ type }) => {
                if (!this._visible || type === 'copilot')
                    return;
                this._visible = false;
                this._clickOutsideOff = null;
                this._copilotPanel?.remove();
                this._copilotPanel = null;
            }));
        }
        render() {
            if (!this._visible)
                return nothing;
            const rect = this._selectionRect;
            return html `<div class="affine-edgeless-ai">
      <div
        class="copilot-selection-rect"
        style=${styleMap({
                left: `${rect.x}px`,
                top: `${rect.y}px`,
                width: `${rect.width}px`,
                height: `${rect.height}px`,
            })}
      ></div>
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessCopilotWidget = _classThis;
})();
export { EdgelessCopilotWidget };
//# sourceMappingURL=index.js.map