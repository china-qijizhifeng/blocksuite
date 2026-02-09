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
import '../../panel/one-row-color-panel.js';
import '../../buttons/tool-icon-button.js';
import '../common/slide-menu.js';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { EdgelessToolbarToolMixin } from '../mixins/tool.mixin.js';
let EdgelessBrushMenu = (() => {
    let _classDecorators = [customElement('edgeless-brush-menu')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EdgelessToolbarToolMixin(LitElement);
    let _color_decorators;
    let _color_initializers = [];
    let _color_extraInitializers = [];
    let _lineWidth_decorators;
    let _lineWidth_initializers = [];
    let _lineWidth_extraInitializers = [];
    let _onChange_decorators;
    let _onChange_initializers = [];
    let _onChange_extraInitializers = [];
    var EdgelessBrushMenu = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _color_decorators = [property({ attribute: false })];
            _lineWidth_decorators = [property({ attribute: false })];
            _onChange_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _color_decorators, { kind: "accessor", name: "color", static: false, private: false, access: { has: obj => "color" in obj, get: obj => obj.color, set: (obj, value) => { obj.color = value; } }, metadata: _metadata }, _color_initializers, _color_extraInitializers);
            __esDecorate(this, null, _lineWidth_decorators, { kind: "accessor", name: "lineWidth", static: false, private: false, access: { has: obj => "lineWidth" in obj, get: obj => obj.lineWidth, set: (obj, value) => { obj.lineWidth = value; } }, metadata: _metadata }, _lineWidth_initializers, _lineWidth_extraInitializers);
            __esDecorate(this, null, _onChange_decorators, { kind: "accessor", name: "onChange", static: false, private: false, access: { has: obj => "onChange" in obj, get: obj => obj.onChange, set: (obj, value) => { obj.onChange = value; } }, metadata: _metadata }, _onChange_initializers, _onChange_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessBrushMenu = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
      position: absolute;
      z-index: -1;
    }

    .menu-content {
      display: flex;
      align-items: center;
    }

    menu-divider {
      height: 24px;
      margin: 0 9px;
    }
  `; }
        #color_accessor_storage;
        get color() { return this.#color_accessor_storage; }
        set color(value) { this.#color_accessor_storage = value; }
        #lineWidth_accessor_storage;
        get lineWidth() { return this.#lineWidth_accessor_storage; }
        set lineWidth(value) { this.#lineWidth_accessor_storage = value; }
        #onChange_accessor_storage;
        get onChange() { return this.#onChange_accessor_storage; }
        set onChange(value) { this.#onChange_accessor_storage = value; }
        render() {
            const { color, lineWidth } = this;
            return html `
      <edgeless-slide-menu>
        <div class="menu-content">
          <edgeless-line-width-panel
            .selectedSize=${lineWidth}
            @select=${(e) => this.onChange({ lineWidth: e.detail })}
          >
          </edgeless-line-width-panel>
          <menu-divider .vertical=${true}></menu-divider>
          <edgeless-one-row-color-panel
            .value=${color}
            @select=${(e) => this.onChange({ color: e.detail })}
          ></edgeless-one-row-color-panel>
        </div>
      </edgeless-slide-menu>
    `;
        }
        constructor() {
            super(...arguments);
            this.type = 'brush';
            this.#color_accessor_storage = __runInitializers(this, _color_initializers, void 0);
            this.#lineWidth_accessor_storage = (__runInitializers(this, _color_extraInitializers), __runInitializers(this, _lineWidth_initializers, void 0));
            this.#onChange_accessor_storage = (__runInitializers(this, _lineWidth_extraInitializers), __runInitializers(this, _onChange_initializers, void 0));
            __runInitializers(this, _onChange_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessBrushMenu = _classThis;
})();
export { EdgelessBrushMenu };
//# sourceMappingURL=brush-menu.js.map