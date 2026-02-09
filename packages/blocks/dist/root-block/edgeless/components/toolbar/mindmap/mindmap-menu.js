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
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { getTooltipWithShortcut } from '../../utils.js';
import { EdgelessDraggableElementController } from '../common/draggable/draggable-element.controller.js';
import { EdgelessToolbarToolMixin } from '../mixins/tool.mixin.js';
import { getMindMaps } from './assets.js';
import { textRender } from './basket-elements.js';
import { textIcon } from './icons.js';
const textItem = { type: 'text', icon: textIcon, render: textRender };
let EdgelessMindmapMenu = (() => {
    let _classDecorators = [customElement('edgeless-mindmap-menu')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EdgelessToolbarToolMixin(LitElement);
    let _activeStyle_decorators;
    let _activeStyle_initializers = [];
    let _activeStyle_extraInitializers = [];
    let _onActiveStyleChange_decorators;
    let _onActiveStyleChange_initializers = [];
    let _onActiveStyleChange_extraInitializers = [];
    var EdgelessMindmapMenu = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _activeStyle_decorators = [property({ attribute: false })];
            _onActiveStyleChange_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _activeStyle_decorators, { kind: "accessor", name: "activeStyle", static: false, private: false, access: { has: obj => "activeStyle" in obj, get: obj => obj.activeStyle, set: (obj, value) => { obj.activeStyle = value; } }, metadata: _metadata }, _activeStyle_initializers, _activeStyle_extraInitializers);
            __esDecorate(this, null, _onActiveStyleChange_decorators, { kind: "accessor", name: "onActiveStyleChange", static: false, private: false, access: { has: obj => "onActiveStyleChange" in obj, get: obj => obj.onActiveStyleChange, set: (obj, value) => { obj.onActiveStyleChange = value; } }, metadata: _metadata }, _onActiveStyleChange_initializers, _onActiveStyleChange_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessMindmapMenu = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get mindMaps() {
            return getMindMaps(this.theme);
        }
        static { this.styles = css `
    :host {
      display: flex;
      z-index: -1;
      justify-content: flex-end;
    }
    .text-and-mindmap {
      display: flex;
      gap: 10px;
      padding: 8px 0px;
      box-sizing: border-box;
    }
    .thin-divider {
      width: 1px;
      transform: scaleX(0.5);
      height: 48px;
      background: var(--affine-border-color);
    }
    .text-item {
      width: 60px;
    }
    .mindmap-item {
      width: 64px;
    }

    .text-item,
    .mindmap-item {
      border-radius: 4px;
      height: 48px;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .text-item > button,
    .mindmap-item > button {
      position: absolute;
      border-radius: inherit;
      border: none;
      background: none;
      cursor: grab;
      padding: 0;
    }
    .text-item:hover,
    .mindmap-item:hover {
      background: var(--affine-hover-color);
    }
    .text-item > button.next,
    .mindmap-item > button.next {
      transition: transform 0.3s ease-in-out;
    }
  `; }
        #activeStyle_accessor_storage;
        get activeStyle() { return this.#activeStyle_accessor_storage; }
        set activeStyle(value) { this.#activeStyle_accessor_storage = value; }
        #onActiveStyleChange_accessor_storage;
        get onActiveStyleChange() { return this.#onActiveStyleChange_accessor_storage; }
        set onActiveStyleChange(value) { this.#onActiveStyleChange_accessor_storage = value; }
        initDragController() {
            if (this.draggableController || !this.edgeless)
                return;
            this.draggableController = new EdgelessDraggableElementController(this, {
                service: this.edgeless.service,
                edgeless: this.edgeless,
                scopeElement: this,
                clickToDrag: true,
                onOverlayCreated: () => {
                    // a workaround to active mindmap, so that menu cannot be closed by `Escape`
                    this.setEdgelessTool({ type: 'mindmap' });
                },
                onDrop: (element, bound) => {
                    const id = element.data.render(bound, this.edgeless.service, this.edgeless);
                    if (element.data.type === 'mindmap') {
                        this.onActiveStyleChange?.(element.data.style);
                        this.setEdgelessTool({ type: 'default' }, { elements: [id], editing: false });
                    }
                },
            });
        }
        updated(changedProperties) {
            if (!changedProperties.has('edgeless'))
                return;
            this.initDragController();
        }
        render() {
            const { cancelled, draggingElement, dragOut } = this.draggableController?.states || {};
            const isDraggingText = draggingElement?.data?.type === 'text';
            const showNextText = dragOut && !cancelled;
            return html `<edgeless-slide-menu .height=${'64px'}>
      <div class="text-and-mindmap">
        <div class="text-item">
          ${isDraggingText
                ? html `<button
                class="next"
                style="transform: translateY(${showNextText ? 0 : 64}px)"
              >
                ${textItem.icon}
              </button>`
                : nothing}
          <button
            style="opacity: ${isDraggingText ? 0 : 1}"
            @mousedown=${(e) => this.draggableController.onMouseDown(e, {
                preview: textItem.icon,
                data: textItem,
            })}
            @touchstart=${(e) => this.draggableController.onTouchStart(e, {
                preview: textItem.icon,
                data: textItem,
            })}
          >
            ${textItem.icon}
          </button>
          <affine-tooltip tip-position="top" .offset=${12}>
            ${getTooltipWithShortcut('Edgeless Text', 'T')}
          </affine-tooltip>
        </div>
        <div class="thin-divider"></div>
        <!-- mind map -->
        ${repeat(this.mindMaps, mindMap => {
                const isDraggingMindMap = draggingElement?.data?.type !== 'text';
                const draggingEle = draggingElement?.data;
                const isBeingDragged = isDraggingMindMap && draggingEle?.style === mindMap.style;
                const showNext = dragOut && !cancelled;
                return html `
            <div class="mindmap-item">
              ${isBeingDragged
                    ? html `<button
                    style="transform: translateY(${showNext ? 0 : 64}px)"
                    class="next"
                  >
                    ${mindMap.icon}
                  </button>`
                    : nothing}
              <button
                style="opacity: ${isBeingDragged ? 0 : 1}"
                @mousedown=${(e) => {
                    this.draggableController.onMouseDown(e, {
                        preview: mindMap.icon,
                        data: mindMap,
                        standardWidth: 350,
                    });
                }}
                @touchstart=${(e) => {
                    this.draggableController.onTouchStart(e, {
                        preview: mindMap.icon,
                        data: mindMap,
                        standardWidth: 350,
                    });
                }}
                @click=${() => this.onActiveStyleChange?.(mindMap.style)}
              >
                ${mindMap.icon}
              </button>
              <affine-tooltip tip-position="top" .offset=${12}>
                ${getTooltipWithShortcut('Mind Map', 'M')}
              </affine-tooltip>
            </div>
          `;
            })}
      </div>
    </edgeless-slide-menu>`;
        }
        constructor() {
            super(...arguments);
            this.type = 'mindmap';
            this.#activeStyle_accessor_storage = __runInitializers(this, _activeStyle_initializers, void 0);
            this.#onActiveStyleChange_accessor_storage = (__runInitializers(this, _activeStyle_extraInitializers), __runInitializers(this, _onActiveStyleChange_initializers, void 0));
            __runInitializers(this, _onActiveStyleChange_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessMindmapMenu = _classThis;
})();
export { EdgelessMindmapMenu };
//# sourceMappingURL=mindmap-menu.js.map