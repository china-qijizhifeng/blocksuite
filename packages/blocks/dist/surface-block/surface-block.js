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
import '../root-block/edgeless/components/block-portal/edgeless-block-portal.js';
import { BlockElement, RangeManager } from '@blocksuite/block-std';
import { css, html, nothing } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { ThemeObserver } from '../_common/theme/theme-observer.js';
import { isInsideEdgelessEditor } from '../_common/utils/index.js';
import { values } from '../_common/utils/iterable.js';
import { isShape } from '../root-block/edgeless/components/auto-complete/utils.js';
import { FrameOverlay } from '../root-block/edgeless/frame-manager.js';
import { Renderer } from './canvas-renderer/renderer.js';
import { ConnectorElementModel } from './element-model/index.js';
import { ConnectionOverlay } from './managers/connector-manager.js';
import { Bound } from './utils/bound.js';
import { normalizeWheelDeltaY } from './utils/index.js';
let SurfaceBlockComponent = (() => {
    let _classDecorators = [customElement('affine-surface')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BlockElement;
    let __surfaceContainer_decorators;
    let __surfaceContainer_initializers = [];
    let __surfaceContainer_extraInitializers = [];
    let _portal_decorators;
    let _portal_initializers = [];
    let _portal_extraInitializers = [];
    var SurfaceBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._lastTime = 0;
            this._cachedViewport = new Bound();
            this.#_surfaceContainer_accessor_storage = __runInitializers(this, __surfaceContainer_initializers, void 0);
            this.themeObserver = (__runInitializers(this, __surfaceContainer_extraInitializers), new ThemeObserver());
            this.#portal_accessor_storage = __runInitializers(this, _portal_initializers, void 0);
            this._initThemeObserver = (__runInitializers(this, _portal_extraInitializers), () => {
                this.themeObserver.observe(document.documentElement);
                this.themeObserver.on(() => this.requestUpdate());
                this.disposables.add(() => this.themeObserver.dispose());
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __surfaceContainer_decorators = [query('.affine-edgeless-surface-block-container')];
            _portal_decorators = [query('edgeless-block-portal-container')];
            __esDecorate(this, null, __surfaceContainer_decorators, { kind: "accessor", name: "_surfaceContainer", static: false, private: false, access: { has: obj => "_surfaceContainer" in obj, get: obj => obj._surfaceContainer, set: (obj, value) => { obj._surfaceContainer = value; } }, metadata: _metadata }, __surfaceContainer_initializers, __surfaceContainer_extraInitializers);
            __esDecorate(this, null, _portal_decorators, { kind: "accessor", name: "portal", static: false, private: false, access: { has: obj => "portal" in obj, get: obj => obj.portal, set: (obj, value) => { obj.portal = value; } }, metadata: _metadata }, _portal_initializers, _portal_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            SurfaceBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get renderer() {
            return this._renderer;
        }
        get edgeless() {
            return this.parentBlockElement;
        }
        get _isEdgeless() {
            return isInsideEdgelessEditor(this.host);
        }
        static { this.styles = css `
    .affine-edgeless-surface-block-container {
      position: absolute;
      width: 100%;
      height: 100%;
    }

    .affine-edgeless-surface-block-container canvas {
      width: 100%;
      height: 100%;
      position: relative;
      z-index: 1;
      pointer-events: none;
    }

    edgeless-block-portal-container {
      position: relative;
      box-sizing: border-box;
      overflow: hidden;
      display: block;
      height: 100%;
      font-family: var(--affine-font-family);
      font-size: var(--affine-font-base);
      line-height: var(--affine-line-height);
      color: var(--affine-text-primary-color);
      font-weight: 400;
    }

    .affine-block-children-container.edgeless {
      padding-left: 0;
      position: relative;
      overflow: hidden;
      height: 100%;
      /**
       * Fix: pointerEvent stops firing after a short time.
       * When a gesture is started, the browser intersects the touch-action values of the touched element and its ancestors,
       * up to the one that implements the gesture (in other words, the first containing scrolling element)
       * https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action
       */
      touch-action: none;
      background-color: var(--affine-background-primary-color);
      background-image: radial-gradient(
        var(--affine-edgeless-grid-color) 1px,
        var(--affine-background-primary-color) 1px
      );
      z-index: 0;
    }

    .affine-edgeless-block-child {
      position: absolute;
      transform-origin: center;
      box-sizing: border-box;
      border: 2px solid var(--affine-white-10);
      border-radius: 8px;
      box-shadow: var(--affine-shadow-3);
      pointer-events: all;
    }
  `; }
        static { this.isShape = isShape; }
        #_surfaceContainer_accessor_storage;
        get _surfaceContainer() { return this.#_surfaceContainer_accessor_storage; }
        set _surfaceContainer(value) { this.#_surfaceContainer_accessor_storage = value; }
        #portal_accessor_storage;
        get portal() { return this.#portal_accessor_storage; }
        set portal(value) { this.#portal_accessor_storage = value; }
        _initOverlay() {
            this.overlays = {
                connector: new ConnectionOverlay(this.edgeless.service),
                frame: new FrameOverlay(),
            };
            values(this.overlays).forEach(overlay => {
                this._renderer.addOverlay(overlay);
            });
        }
        _initRenderer() {
            const service = this.edgeless.service;
            this._renderer = new Renderer({
                layerManager: service.layer,
                enableStackingCanvas: true,
                provider: {
                    selectedElements: () => service.selection.selectedIds,
                    getVariableColor: (val) => this.themeObserver.getVariableValue(val),
                },
                onStackingCanvasCreated(canvas) {
                    canvas.className = 'indexable-canvas';
                    canvas.style.setProperty('transform-origin', '0 0');
                    canvas.style.setProperty('position', 'absolute');
                    canvas.style.setProperty('pointer-events', 'none');
                },
            });
            this._disposables.add(this.model.elementUpdated.on(payload => {
                // ignore externalXYWH update cause it's updated by the renderer
                if (payload.props['externalXYWH'])
                    return;
                this._renderer.refresh();
            }));
            this._disposables.add(this.model.elementAdded.on(() => {
                this._renderer.refresh();
            }));
            this._disposables.add(this.model.elementRemoved.on(() => {
                this._renderer.refresh();
            }));
            this._disposables.add(this._renderer.sync(this.edgeless.service.viewport));
            this._disposables.add(() => {
                this._renderer.dispose();
            });
            this._disposables.add(this._renderer.stackingCanvasUpdated.on(() => {
                this._emitStackingCanvasUpdate();
            }));
            this._disposables.add(this.std.event.slots.editorHostPanned.on(() => {
                this._renderer.onResize();
            }));
        }
        _emitStackingCanvasUpdate() {
            const evt = new CustomEvent('indexedcanvasupdate', {
                detail: {
                    content: this._renderer.stackingCanvas,
                },
            });
            this.dispatchEvent(evt);
        }
        connectedCallback() {
            super.connectedCallback();
            this.setAttribute(RangeManager.rangeSyncExcludeAttr, 'true');
            if (!this._isEdgeless)
                return;
            this._initThemeObserver();
            this._initRenderer();
            this._initOverlay();
        }
        firstUpdated() {
            if (!this._isEdgeless)
                return;
            this._renderer.attach(this._surfaceContainer);
        }
        refresh() {
            this._renderer.refresh();
        }
        fitToViewport(bound) {
            const { viewport } = this.edgeless.service;
            bound = bound.expand(30);
            if (Date.now() - this._lastTime > 200)
                this._cachedViewport = viewport.viewportBounds;
            this._lastTime = Date.now();
            if (this._cachedViewport.contains(bound))
                return;
            this._cachedViewport = this._cachedViewport.unite(bound);
            viewport.setViewportByBound(this._cachedViewport, [0, 0, 0, 0], true);
        }
        /** @internal Only for testing */
        initDefaultGestureHandler() {
            const { _renderer } = this;
            _renderer.canvas.addEventListener('wheel', e => {
                e.preventDefault();
                // pan
                if (!e.ctrlKey) {
                    const dx = e.deltaX / _renderer.zoom;
                    const dy = e.deltaY / _renderer.zoom;
                    _renderer.setCenter(_renderer.centerX + dx, _renderer.centerY + dy);
                }
                // zoom
                else {
                    const zoom = normalizeWheelDeltaY(e.deltaY);
                    _renderer.setZoom(zoom);
                }
            });
        }
        render() {
            if (!this._isEdgeless)
                return nothing;
            return html `
      <div class="affine-edgeless-surface-block-container">
        <!-- attach canvas later in renderer -->
      </div>
    `;
        }
        static { this.isConnector = (element) => {
            return element instanceof ConnectorElementModel;
        }; }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return SurfaceBlockComponent = _classThis;
})();
export { SurfaceBlockComponent };
//# sourceMappingURL=surface-block.js.map