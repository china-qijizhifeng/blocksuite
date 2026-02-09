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
import '../../edgeless/components/buttons/tool-icon-button.js';
import '../../edgeless/components/buttons/menu-button.js';
import '../../edgeless/components/panel/color-panel.js';
import '../../edgeless/components/panel/line-width-panel.js';
import { WithDisposable } from '@blocksuite/block-std';
import { html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { LineWidth } from '../../../_common/types.js';
import { countBy, maxBy } from '../../../_common/utils/iterable.js';
import { GET_DEFAULT_LINE_COLOR, } from '../../edgeless/components/panel/color-panel.js';
function getMostCommonColor(elements) {
    const colors = countBy(elements, ele => ele.color);
    const max = maxBy(Object.entries(colors), ([_k, count]) => count);
    return max ? max[0] : GET_DEFAULT_LINE_COLOR();
}
function getMostCommonSize(elements) {
    const sizes = countBy(elements, ele => ele.lineWidth);
    const max = maxBy(Object.entries(sizes), ([_k, count]) => count);
    return max ? Number(max[0]) : LineWidth.Four;
}
function notEqual(key, value) {
    return (element) => element[key] !== value;
}
let EdgelessChangeBrushButton = (() => {
    let _classDecorators = [customElement('edgeless-change-brush-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __selectedColor_decorators;
    let __selectedColor_initializers = [];
    let __selectedColor_extraInitializers = [];
    let __selectedSize_decorators;
    let __selectedSize_initializers = [];
    let __selectedSize_extraInitializers = [];
    let _elements_decorators;
    let _elements_initializers = [];
    let _elements_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    var EdgelessChangeBrushButton = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_selectedColor_accessor_storage = __runInitializers(this, __selectedColor_initializers, null);
            this.#_selectedSize_accessor_storage = (__runInitializers(this, __selectedColor_extraInitializers), __runInitializers(this, __selectedSize_initializers, null));
            this.#elements_accessor_storage = (__runInitializers(this, __selectedSize_extraInitializers), __runInitializers(this, _elements_initializers, []));
            this.#edgeless_accessor_storage = (__runInitializers(this, _elements_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
            this._setLineWidth = (__runInitializers(this, _edgeless_extraInitializers), ({ detail: lineWidth }) => {
                this._setBrushProp('lineWidth', lineWidth);
                this._selectedSize = lineWidth;
            });
            this._setBrushColor = ({ detail: color }) => {
                this._setBrushProp('color', color);
                this._selectedColor = color;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __selectedColor_decorators = [state()];
            __selectedSize_decorators = [state()];
            _elements_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __selectedColor_decorators, { kind: "accessor", name: "_selectedColor", static: false, private: false, access: { has: obj => "_selectedColor" in obj, get: obj => obj._selectedColor, set: (obj, value) => { obj._selectedColor = value; } }, metadata: _metadata }, __selectedColor_initializers, __selectedColor_extraInitializers);
            __esDecorate(this, null, __selectedSize_decorators, { kind: "accessor", name: "_selectedSize", static: false, private: false, access: { has: obj => "_selectedSize" in obj, get: obj => obj._selectedSize, set: (obj, value) => { obj._selectedSize = value; } }, metadata: _metadata }, __selectedSize_initializers, __selectedSize_extraInitializers);
            __esDecorate(this, null, _elements_decorators, { kind: "accessor", name: "elements", static: false, private: false, access: { has: obj => "elements" in obj, get: obj => obj.elements, set: (obj, value) => { obj.elements = value; } }, metadata: _metadata }, _elements_initializers, _elements_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessChangeBrushButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        get surface() {
            return this.edgeless.surface;
        }
        get doc() {
            return this.edgeless.doc;
        }
        get service() {
            return this.surface.edgeless.service;
        }
        get selectedColor() {
            return this._selectedColor ?? getMostCommonColor(this.elements);
        }
        get selectedSize() {
            return this._selectedSize ?? getMostCommonSize(this.elements);
        }
        #_selectedColor_accessor_storage;
        get _selectedColor() { return this.#_selectedColor_accessor_storage; }
        set _selectedColor(value) { this.#_selectedColor_accessor_storage = value; }
        #_selectedSize_accessor_storage;
        get _selectedSize() { return this.#_selectedSize_accessor_storage; }
        set _selectedSize(value) { this.#_selectedSize_accessor_storage = value; }
        #elements_accessor_storage;
        get elements() { return this.#elements_accessor_storage; }
        set elements(value) { this.#elements_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        _setBrushProp(key, value) {
            this.doc.captureSync();
            this.elements
                .filter(notEqual(key, value))
                .forEach(element => this.service.updateElement(element.id, { [key]: value }));
        }
        render() {
            const { selectedSize, selectedColor } = this;
            return html `
      <edgeless-line-width-panel
        .selectedSize=${selectedSize}
        @select=${this._setLineWidth}
      >
      </edgeless-line-width-panel>

      <edgeless-menu-divider></edgeless-menu-divider>

      <edgeless-menu-button
        .contentPadding=${'8px'}
        .button=${html `
          <edgeless-tool-icon-button aria-label="Color" .tooltip=${'Color'}>
            <edgeless-color-button
              .color=${selectedColor}
            ></edgeless-color-button>
          </edgeless-tool-icon-button>
        `}
      >
        <edgeless-color-panel
          slot
          .value=${selectedColor}
          @select=${this._setBrushColor}
        >
        </edgeless-color-panel>
      </edgeless-menu-button>
    `;
        }
    };
    return EdgelessChangeBrushButton = _classThis;
})();
export { EdgelessChangeBrushButton };
export function renderChangeBrushButton(edgeless, elements) {
    if (!elements?.length)
        return nothing;
    return html `
    <edgeless-change-brush-button .elements=${elements} .edgeless=${edgeless}>
    </edgeless-change-brush-button>
  `;
}
//# sourceMappingURL=change-brush-button.js.map