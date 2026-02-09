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
import { WithDisposable } from '@blocksuite/block-std';
import { baseTheme } from '@toeverything/theme';
import { css, html, LitElement, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { MinusIcon, PlusIcon, ViewBarIcon, } from '../../../_common/icons/edgeless.js';
import { stopPropagation } from '../../../_common/utils/event.js';
import { ZOOM_STEP } from '../../edgeless/utils/viewport.js';
let EdgelessZoomToolbar = (() => {
    let _classDecorators = [customElement('edgeless-zoom-toolbar')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _layout_decorators;
    let _layout_initializers = [];
    let _layout_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    var EdgelessZoomToolbar = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _layout_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _layout_decorators, { kind: "accessor", name: "layout", static: false, private: false, access: { has: obj => "layout" in obj, get: obj => obj.layout, set: (obj, value) => { obj.layout = value; } }, metadata: _metadata }, _layout_initializers, _layout_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessZoomToolbar = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get edgelessTool() {
            return this.edgeless.edgelessTool;
        }
        get edgelessService() {
            return this.edgeless.service;
        }
        get zoom() {
            return this.viewport.zoom;
        }
        get viewport() {
            return this.edgelessService.viewport;
        }
        get locked() {
            return this.edgelessService.locked;
        }
        static { this.styles = css `
    :host {
      display: flex;
    }

    .edgeless-zoom-toolbar-container {
      display: flex;
      align-items: center;
      background: transparent;
      border-radius: 8px;
      fill: currentcolor;
      padding: 4px;
    }

    .edgeless-zoom-toolbar-container.horizantal {
      flex-direction: row;
    }

    .edgeless-zoom-toolbar-container.vertical {
      flex-direction: column;
      width: 40px;
      background-color: var(--affine-background-overlay-panel-color);
      box-shadow: var(--affine-shadow-2);
      border: 1px solid var(--affine-border-color);
      border-radius: 8px;
    }

    .edgeless-zoom-toolbar-container[level='second'] {
      position: absolute;
      bottom: 8px;
      transform: translateY(-100%);
    }

    .edgeless-zoom-toolbar-container[hidden] {
      display: none;
    }

    .zoom-percent {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 32px;
      border: none;
      box-sizing: border-box;
      padding: 4px;
      color: var(--affine-icon-color);
      background-color: transparent;
      border-radius: 4px;
      cursor: pointer;
      white-space: nowrap;
      font-size: 12px;
      font-weight: 500;
      text-align: center;
      font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
    }

    .zoom-percent:hover {
      color: var(--affine-primary-color);
      background-color: var(--affine-hover-color);
    }

    .zoom-percent[disabled] {
      pointer-events: none;
      cursor: not-allowed;
      color: var(--affine-text-disable-color);
    }
  `; }
        #layout_accessor_storage;
        get layout() { return this.#layout_accessor_storage; }
        set layout(value) { this.#layout_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        constructor(edgeless) {
            super();
            this.#layout_accessor_storage = __runInitializers(this, _layout_initializers, 'horizontal');
            this.#edgeless_accessor_storage = (__runInitializers(this, _layout_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
            this.setEdgelessTool = (__runInitializers(this, _edgeless_extraInitializers), (edgelessTool) => {
                this.edgeless.tools.setEdgelessTool(edgelessTool);
            });
            this.edgeless = edgeless;
        }
        _isVerticalBar() {
            return this.layout === 'vertical';
        }
        firstUpdated() {
            const { disposables } = this;
            disposables.add(this.edgeless.service.viewport.viewportUpdated.on(() => this.requestUpdate()));
            disposables.add(this.edgeless.slots.edgelessToolUpdated.on(() => this.requestUpdate()));
            disposables.add(this.edgeless.slots.readonlyUpdated.on(() => {
                this.requestUpdate();
            }));
        }
        render() {
            if (this.edgeless.doc.readonly) {
                return nothing;
            }
            const formattedZoom = `${Math.round(this.zoom * 100)}%`;
            const classes = `edgeless-zoom-toolbar-container ${this.layout}`;
            const locked = this.locked;
            return html `
      <div
        class=${classes}
        @dblclick=${stopPropagation}
        @mousedown=${stopPropagation}
        @mouseup=${stopPropagation}
        @pointerdown=${stopPropagation}
      >
        <edgeless-tool-icon-button
          .tooltip=${'Fit to screen'}
          .tipPosition=${this._isVerticalBar() ? 'right' : 'top-end'}
          .arrow=${!this._isVerticalBar()}
          @click=${() => this.edgelessService.zoomToFit()}
          .iconContainerPadding=${4}
          .disabled=${locked}
        >
          ${ViewBarIcon}
        </edgeless-tool-icon-button>
        <edgeless-tool-icon-button
          .tooltip=${'Zoom out'}
          .tipPosition=${this._isVerticalBar() ? 'right' : 'top'}
          .arrow=${!this._isVerticalBar()}
          @click=${() => this.edgelessService.setZoomByStep(-ZOOM_STEP)}
          .iconContainerPadding=${4}
          .disabled=${locked}
        >
          ${MinusIcon}
        </edgeless-tool-icon-button>
        <button
          class="zoom-percent"
          @click=${() => this.viewport.smoothZoom(1)}
          .disabled=${locked}
        >
          ${formattedZoom}
        </button>
        <edgeless-tool-icon-button
          .tooltip=${'Zoom in'}
          .tipPosition=${this._isVerticalBar() ? 'right' : 'top'}
          .arrow=${!this._isVerticalBar()}
          @click=${() => this.edgelessService.setZoomByStep(ZOOM_STEP)}
          .iconContainerPadding=${4}
          .disabled=${locked}
        >
          ${PlusIcon}
        </edgeless-tool-icon-button>
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessZoomToolbar = _classThis;
})();
export { EdgelessZoomToolbar };
//# sourceMappingURL=zoom-toolbar.js.map