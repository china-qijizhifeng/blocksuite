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
import '../../buttons/tool-icon-button.js';
import '../../panel/one-row-color-panel.js';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { GeneralStyleIcon, ScribbledStyleIcon, } from '../../../../../_common/icons/index.js';
import { ShapeStyle } from '../../../../../surface-block/index.js';
import { isTransparent } from '../../panel/color-panel.js';
import { LINE_COLOR_PREFIX, SHAPE_COLOR_PREFIX, ShapeComponentConfig, } from './shape-menu-config.js';
let EdgelessShapeMenu = (() => {
    let _classDecorators = [customElement('edgeless-shape-menu')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let _shapeType_decorators;
    let _shapeType_initializers = [];
    let _shapeType_extraInitializers = [];
    let _fillColor_decorators;
    let _fillColor_initializers = [];
    let _fillColor_extraInitializers = [];
    let _shapeStyle_decorators;
    let _shapeStyle_initializers = [];
    let _shapeStyle_extraInitializers = [];
    let _strokeColor_decorators;
    let _strokeColor_initializers = [];
    let _strokeColor_extraInitializers = [];
    let _radius_decorators;
    let _radius_initializers = [];
    let _radius_extraInitializers = [];
    let _onChange_decorators;
    let _onChange_initializers = [];
    let _onChange_extraInitializers = [];
    var EdgelessShapeMenu = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#shapeType_accessor_storage = __runInitializers(this, _shapeType_initializers, void 0);
            this.#fillColor_accessor_storage = (__runInitializers(this, _shapeType_extraInitializers), __runInitializers(this, _fillColor_initializers, void 0));
            this.#shapeStyle_accessor_storage = (__runInitializers(this, _fillColor_extraInitializers), __runInitializers(this, _shapeStyle_initializers, void 0));
            this.#strokeColor_accessor_storage = (__runInitializers(this, _shapeStyle_extraInitializers), __runInitializers(this, _strokeColor_initializers, void 0));
            this.#radius_accessor_storage = (__runInitializers(this, _strokeColor_extraInitializers), __runInitializers(this, _radius_initializers, void 0));
            this.#onChange_accessor_storage = (__runInitializers(this, _radius_extraInitializers), __runInitializers(this, _onChange_initializers, void 0));
            this._setStrokeColor = (__runInitializers(this, _onChange_extraInitializers), (strokeColor) => {
                const props = { strokeColor };
                const fillColor = strokeColor.replace(LINE_COLOR_PREFIX, SHAPE_COLOR_PREFIX);
                const filled = !isTransparent(fillColor);
                props.fillColor = fillColor;
                props.filled = filled;
                this.onChange(props);
            });
            this._setShapeStyle = (shapeStyle) => {
                this.onChange({
                    shapeStyle,
                });
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _shapeType_decorators = [property({ attribute: false })];
            _fillColor_decorators = [property({ attribute: false })];
            _shapeStyle_decorators = [property({ attribute: false })];
            _strokeColor_decorators = [property({ attribute: false })];
            _radius_decorators = [property({ attribute: false })];
            _onChange_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _shapeType_decorators, { kind: "accessor", name: "shapeType", static: false, private: false, access: { has: obj => "shapeType" in obj, get: obj => obj.shapeType, set: (obj, value) => { obj.shapeType = value; } }, metadata: _metadata }, _shapeType_initializers, _shapeType_extraInitializers);
            __esDecorate(this, null, _fillColor_decorators, { kind: "accessor", name: "fillColor", static: false, private: false, access: { has: obj => "fillColor" in obj, get: obj => obj.fillColor, set: (obj, value) => { obj.fillColor = value; } }, metadata: _metadata }, _fillColor_initializers, _fillColor_extraInitializers);
            __esDecorate(this, null, _shapeStyle_decorators, { kind: "accessor", name: "shapeStyle", static: false, private: false, access: { has: obj => "shapeStyle" in obj, get: obj => obj.shapeStyle, set: (obj, value) => { obj.shapeStyle = value; } }, metadata: _metadata }, _shapeStyle_initializers, _shapeStyle_extraInitializers);
            __esDecorate(this, null, _strokeColor_decorators, { kind: "accessor", name: "strokeColor", static: false, private: false, access: { has: obj => "strokeColor" in obj, get: obj => obj.strokeColor, set: (obj, value) => { obj.strokeColor = value; } }, metadata: _metadata }, _strokeColor_initializers, _strokeColor_extraInitializers);
            __esDecorate(this, null, _radius_decorators, { kind: "accessor", name: "radius", static: false, private: false, access: { has: obj => "radius" in obj, get: obj => obj.radius, set: (obj, value) => { obj.radius = value; } }, metadata: _metadata }, _radius_initializers, _radius_extraInitializers);
            __esDecorate(this, null, _onChange_decorators, { kind: "accessor", name: "onChange", static: false, private: false, access: { has: obj => "onChange" in obj, get: obj => obj.onChange, set: (obj, value) => { obj.onChange = value; } }, metadata: _metadata }, _onChange_initializers, _onChange_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessShapeMenu = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
      z-index: -1;
    }
    .menu-content {
      display: flex;
      align-items: center;
    }
    .shape-type-container,
    .shape-style-container {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
    }
    .shape-type-container svg,
    .shape-style-container svg {
      fill: var(--affine-icon-color);
      stroke: none;
    }
    menu-divider {
      height: 24px;
      margin: 0 9px;
    }
  `; }
        #shapeType_accessor_storage;
        get shapeType() { return this.#shapeType_accessor_storage; }
        set shapeType(value) { this.#shapeType_accessor_storage = value; }
        #fillColor_accessor_storage;
        get fillColor() { return this.#fillColor_accessor_storage; }
        set fillColor(value) { this.#fillColor_accessor_storage = value; }
        #shapeStyle_accessor_storage;
        get shapeStyle() { return this.#shapeStyle_accessor_storage; }
        set shapeStyle(value) { this.#shapeStyle_accessor_storage = value; }
        #strokeColor_accessor_storage;
        get strokeColor() { return this.#strokeColor_accessor_storage; }
        set strokeColor(value) { this.#strokeColor_accessor_storage = value; }
        #radius_accessor_storage;
        get radius() { return this.#radius_accessor_storage; }
        set radius(value) { this.#radius_accessor_storage = value; }
        #onChange_accessor_storage;
        get onChange() { return this.#onChange_accessor_storage; }
        set onChange(value) { this.#onChange_accessor_storage = value; }
        render() {
            const { radius, strokeColor, shapeStyle } = this;
            let { shapeType } = this;
            if (shapeType === 'rect' && radius > 0) {
                shapeType = 'roundedRect';
            }
            return html `
      <edgeless-slide-menu>
        <div class="menu-content">
          <div class="shape-style-container">
            <edgeless-tool-icon-button
              .tooltip=${'General'}
              .active=${shapeStyle === ShapeStyle.General}
              .activeMode=${'background'}
              @click=${() => {
                this._setShapeStyle(ShapeStyle.General);
            }}
            >
              ${GeneralStyleIcon}
            </edgeless-tool-icon-button>
            <edgeless-tool-icon-button
              .tooltip=${'Scribbled'}
              .active=${shapeStyle === ShapeStyle.Scribbled}
              .activeMode=${'background'}
              @click=${() => {
                this._setShapeStyle(ShapeStyle.Scribbled);
            }}
            >
              ${ScribbledStyleIcon}
            </edgeless-tool-icon-button>
          </div>
          <menu-divider .vertical=${true}></menu-divider>
          <div class="shape-type-container">
            ${ShapeComponentConfig.map(({ name, generalIcon, scribbledIcon, tooltip, value }) => {
                return html `
                  <edgeless-tool-icon-button
                    .tooltip=${tooltip}
                    .active=${shapeType === name}
                    .activeMode=${'background'}
                    @click=${() => this.onChange(value)}
                  >
                    ${shapeStyle === ShapeStyle.General
                    ? generalIcon
                    : scribbledIcon}
                  </edgeless-tool-icon-button>
                `;
            })}
          </div>
          <menu-divider .vertical=${true}></menu-divider>
          <edgeless-one-row-color-panel
            .value=${strokeColor}
            @select=${(e) => this._setStrokeColor(e.detail)}
          ></edgeless-one-row-color-panel>
        </div>
      </edgeless-slide-menu>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessShapeMenu = _classThis;
})();
export { EdgelessShapeMenu };
//# sourceMappingURL=shape-menu.js.map