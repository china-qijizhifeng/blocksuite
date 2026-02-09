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
import '../../edgeless/components/buttons/menu-button.js';
import '../../edgeless/components/panel/font-family-panel.js';
import '../../edgeless/components/panel/size-panel.js';
import '../../edgeless/components/panel/font-weight-and-style-panel.js';
import '../../edgeless/components/panel/align-panel.js';
import { WithDisposable } from '@blocksuite/block-std';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { join } from 'lit/directives/join.js';
import { SmallArrowDownIcon, TextAlignCenterIcon, TextAlignLeftIcon, TextAlignRightIcon, } from '../../../_common/icons/index.js';
import { countBy, maxBy } from '../../../_common/utils/iterable.js';
import { EdgelessTextBlockModel } from '../../../edgeless-text/edgeless-text-model.js';
import { isFontStyleSupported, isFontWeightSupported, } from '../../../surface-block/canvas-renderer/element-renderer/text/utils.js';
import { normalizeTextBound } from '../../../surface-block/canvas-renderer/element-renderer/text/utils.js';
import { FontFamily, FontStyle, FontWeight, TextAlign, } from '../../../surface-block/consts.js';
import { isConnectorWithLabel } from '../../../surface-block/element-model/connector.js';
import { TextElementModel } from '../../../surface-block/element-model/text.js';
import { ConnectorElementModel, ShapeElementModel, } from '../../../surface-block/index.js';
import { Bound, normalizeShapeBound } from '../../../surface-block/index.js';
import { getFontFacesByFontFamily, wrapFontFamily, } from '../../../surface-block/utils/font.js';
import { renderMenuDivider } from '../../edgeless/components/buttons/menu-button.js';
import { GET_DEFAULT_LINE_COLOR, LINE_COLORS, } from '../../edgeless/components/panel/color-panel.js';
const FONT_SIZE_LIST = [
    {
        value: 16,
    },
    {
        value: 24,
    },
    {
        value: 32,
    },
    {
        value: 40,
    },
    {
        value: 64,
    },
    {
        value: 128,
    },
];
const FONT_WEIGHT_CHOOSE = [
    [FontWeight.Light, () => 'Light'],
    [FontWeight.Regular, () => 'Regular'],
    [FontWeight.SemiBold, () => 'Semibold'],
];
const FONT_STYLE_CHOOSE = [
    [FontStyle.Normal, () => nothing],
    [FontStyle.Italic, () => 'Italic'],
];
const TEXT_ALIGN_CHOOSE = [
    [TextAlign.Left, () => TextAlignLeftIcon],
    [TextAlign.Center, () => TextAlignCenterIcon],
    [TextAlign.Right, () => TextAlignRightIcon],
];
function countByField(elements, field) {
    return countBy(elements, element => extractField(element, field));
}
function extractField(element, field) {
    //TODO: It's not a very good handling method.
    //      The edgeless-change-text-menu should be refactored into a widget to allow external registration of its own logic.
    if (element instanceof EdgelessTextBlockModel) {
        return field === 'fontSize'
            ? null
            : element[field];
    }
    return (element instanceof ConnectorElementModel
        ? element.labelStyle[field]
        : element[field]);
}
function getMostCommonValue(elements, field) {
    const values = countByField(elements, field);
    return maxBy(Object.entries(values), ([_k, count]) => count);
}
function getMostCommonAlign(elements) {
    const max = getMostCommonValue(elements, 'textAlign');
    return max ? max[0] : TextAlign.Left;
}
function getMostCommonColor(elements) {
    const max = getMostCommonValue(elements, 'color');
    return max ? max[0] : GET_DEFAULT_LINE_COLOR();
}
function getMostCommonFontFamily(elements) {
    const max = getMostCommonValue(elements, 'fontFamily');
    return max ? max[0] : FontFamily.Inter;
}
function getMostCommonFontSize(elements) {
    const max = getMostCommonValue(elements, 'fontSize');
    return max ? Number(max[0]) : FONT_SIZE_LIST[0].value;
}
function getMostCommonFontStyle(elements) {
    const max = getMostCommonValue(elements, 'fontStyle');
    return max ? max[0] : FontStyle.Normal;
}
function getMostCommonFontWeight(elements) {
    const max = getMostCommonValue(elements, 'fontWeight');
    return max ? max[0] : FontWeight.Regular;
}
function buildProps(element, props) {
    if (element instanceof ConnectorElementModel) {
        return {
            labelStyle: {
                ...element.labelStyle,
                ...props,
            },
        };
    }
    return { ...props };
}
let EdgelessChangeTextMenu = (() => {
    let _classDecorators = [customElement('edgeless-change-text-menu')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _elements_decorators;
    let _elements_initializers = [];
    let _elements_extraInitializers = [];
    let _elementType_decorators;
    let _elementType_initializers = [];
    let _elementType_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    var EdgelessChangeTextMenu = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#elements_accessor_storage = __runInitializers(this, _elements_initializers, void 0);
            this.#elementType_accessor_storage = (__runInitializers(this, _elements_extraInitializers), __runInitializers(this, _elementType_initializers, void 0));
            this.#edgeless_accessor_storage = (__runInitializers(this, _elementType_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
            this._updateElementBound = (__runInitializers(this, _edgeless_extraInitializers), (element) => {
                const elementType = this.elementType;
                if (elementType === 'text' && element instanceof TextElementModel) {
                    // the change of font family will change the bound of the text
                    const { text: yText, fontFamily, fontStyle, fontSize, fontWeight, hasMaxWidth, } = element;
                    const newBound = normalizeTextBound({
                        yText,
                        fontFamily,
                        fontStyle,
                        fontSize,
                        fontWeight,
                        hasMaxWidth,
                    }, Bound.fromXYWH(element.deserializedXYWH));
                    this.service.updateElement(element.id, {
                        xywh: newBound.serialize(),
                    });
                }
                else if (elementType === 'connector' && isConnectorWithLabel(element)) {
                    const { text, labelXYWH, labelStyle: { fontFamily, fontStyle, fontSize, fontWeight }, labelConstraints: { hasMaxWidth, maxWidth }, } = element;
                    const prevBounds = Bound.fromXYWH(labelXYWH || [0, 0, 16, 16]);
                    const center = prevBounds.center;
                    const bounds = normalizeTextBound({
                        yText: text,
                        fontFamily,
                        fontStyle,
                        fontSize,
                        fontWeight,
                        hasMaxWidth,
                        maxWidth,
                    }, prevBounds);
                    bounds.center = center;
                    this.service.updateElement(element.id, {
                        labelXYWH: bounds.toXYWH(),
                    });
                }
                else if (elementType === 'shape' &&
                    element instanceof ShapeElementModel) {
                    const newBound = normalizeShapeBound(element, Bound.fromXYWH(element.deserializedXYWH));
                    this.service.updateElement(element.id, {
                        xywh: newBound.serialize(),
                    });
                }
                // no need to update the bound of edgeless text block, which updates itself using ResizeObserver
            });
            this._setTextColor = ({ detail: color }) => {
                const props = { color };
                this.elements.forEach(element => {
                    this.service.updateElement(element.id, buildProps(element, props));
                });
            };
            this._setTextAlign = (textAlign) => {
                const props = { textAlign };
                this.elements.forEach(element => {
                    this.service.updateElement(element.id, buildProps(element, props));
                });
            };
            this._setFontFamily = (fontFamily) => {
                const currentFontWeight = getMostCommonFontWeight(this.elements);
                const fontWeight = isFontWeightSupported(fontFamily, currentFontWeight)
                    ? currentFontWeight
                    : FontWeight.Regular;
                const currentFontStyle = getMostCommonFontStyle(this.elements);
                const fontStyle = isFontStyleSupported(fontFamily, currentFontStyle)
                    ? currentFontStyle
                    : FontStyle.Normal;
                const props = { fontFamily, fontWeight, fontStyle };
                this.elements.forEach(element => {
                    this.service.updateElement(element.id, buildProps(element, props));
                    this._updateElementBound(element);
                });
            };
            this._setFontSize = (fontSize) => {
                const props = { fontSize };
                this.elements.forEach(element => {
                    this.service.updateElement(element.id, buildProps(element, props));
                    this._updateElementBound(element);
                });
            };
            this._setFontWeightAndStyle = (fontWeight, fontStyle) => {
                const props = { fontWeight, fontStyle };
                this.elements.forEach(element => {
                    this.service.updateElement(element.id, buildProps(element, props));
                    this._updateElementBound(element);
                });
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _elements_decorators = [property({ attribute: false })];
            _elementType_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _elements_decorators, { kind: "accessor", name: "elements", static: false, private: false, access: { has: obj => "elements" in obj, get: obj => obj.elements, set: (obj, value) => { obj.elements = value; } }, metadata: _metadata }, _elements_initializers, _elements_extraInitializers);
            __esDecorate(this, null, _elementType_decorators, { kind: "accessor", name: "elementType", static: false, private: false, access: { has: obj => "elementType" in obj, get: obj => obj.elementType, set: (obj, value) => { obj.elementType = value; } }, metadata: _metadata }, _elementType_initializers, _elementType_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessChangeTextMenu = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: inherit;
      align-items: inherit;
      justify-content: inherit;
      gap: inherit;
      height: 100%;
    }
  `; }
        #elements_accessor_storage;
        get elements() { return this.#elements_accessor_storage; }
        set elements(value) { this.#elements_accessor_storage = value; }
        #elementType_accessor_storage;
        get elementType() { return this.#elementType_accessor_storage; }
        set elementType(value) { this.#elementType_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        get service() {
            return this.edgeless.service;
        }
        render() {
            const elements = this.elements;
            const selectedAlign = getMostCommonAlign(elements);
            const selectedColor = getMostCommonColor(elements);
            const selectedFontFamily = getMostCommonFontFamily(elements);
            const selectedFontSize = Math.trunc(getMostCommonFontSize(elements));
            const selectedFontStyle = getMostCommonFontStyle(elements);
            const selectedFontWeight = getMostCommonFontWeight(elements);
            const matchFontFaces = getFontFacesByFontFamily(selectedFontFamily);
            const fontStyleBtnDisabled = matchFontFaces.length === 1 &&
                matchFontFaces[0].style === selectedFontStyle &&
                matchFontFaces[0].weight === selectedFontWeight;
            return join([
                html `
          <edgeless-menu-button
            .contentPadding=${'8px'}
            .button=${html `
              <edgeless-tool-icon-button
                aria-label="Font"
                .tooltip=${'Font'}
                .justify=${'space-between'}
                .labelHeight=${'20px'}
                .iconContainerWidth=${'40px'}
              >
                <span
                  class="label padding0"
                  style=${`font-family: ${wrapFontFamily(selectedFontFamily)}`}
                  >Aa</span
                >${SmallArrowDownIcon}
              </edgeless-tool-icon-button>
            `}
          >
            <edgeless-font-family-panel
              slot
              .value=${selectedFontFamily}
              .onSelect=${this._setFontFamily}
            ></edgeless-font-family-panel>
          </edgeless-menu-button>
        `,
                html `
          <edgeless-menu-button
            .contentPadding=${'8px'}
            .button=${html `
              <edgeless-tool-icon-button
                aria-label="Text color"
                .tooltip=${'Text color'}
              >
                <edgeless-text-color-icon
                  .color=${selectedColor}
                ></edgeless-text-color-icon>
              </edgeless-tool-icon-button>
            `}
          >
            <edgeless-color-panel
              slot
              .value=${selectedColor}
              .options=${LINE_COLORS}
              @select=${this._setTextColor}
            ></edgeless-color-panel>
          </edgeless-menu-button>
        `,
                html `
          <edgeless-menu-button
            .contentPadding=${'8px'}
            .button=${html `
              <edgeless-tool-icon-button
                aria-label="Font style"
                .tooltip=${'Font style'}
                .justify=${'space-between'}
                .labelHeight=${'20px'}
                .iconContainerWidth=${'90px'}
                .disabled=${fontStyleBtnDisabled}
              >
                <span class="label ellipsis">
                  ${choose(selectedFontWeight, FONT_WEIGHT_CHOOSE)}
                  ${choose(selectedFontStyle, FONT_STYLE_CHOOSE)}
                </span>
                ${SmallArrowDownIcon}
              </edgeless-tool-icon-button>
            `}
          >
            <edgeless-font-weight-and-style-panel
              slot
              .fontFamily=${selectedFontFamily}
              .fontWeight=${selectedFontWeight}
              .fontStyle=${selectedFontStyle}
              .onSelect=${this._setFontWeightAndStyle}
            ></edgeless-font-weight-and-style-panel>
          </edgeless-menu-button>
        `,
                this.elementType === 'edgeless-text'
                    ? nothing
                    : html `
              <edgeless-menu-button
                .contentPadding=${'8px'}
                .button=${html `
                  <edgeless-tool-icon-button
                    aria-label="Font size"
                    .tooltip=${'Font size'}
                    .justify=${'space-between'}
                    .labelHeight=${'20px'}
                    .iconContainerWidth=${'60px'}
                  >
                    <span class="label">${selectedFontSize}</span>
                    ${SmallArrowDownIcon}
                  </edgeless-tool-icon-button>
                `}
              >
                <edgeless-size-panel
                  slot
                  data-type="check"
                  .size=${selectedFontSize}
                  .sizeList=${FONT_SIZE_LIST}
                  .onSelect=${this._setFontSize}
                ></edgeless-size-panel>
              </edgeless-menu-button>
            `,
                html `
          <edgeless-menu-button
            .button=${html `
              <edgeless-tool-icon-button
                aria-label="Alignment"
                .tooltip=${'Alignment'}
              >
                ${choose(selectedAlign, TEXT_ALIGN_CHOOSE)}${SmallArrowDownIcon}
              </edgeless-tool-icon-button>
            `}
          >
            <edgeless-align-panel
              slot
              .value=${selectedAlign}
              .onSelect=${this._setTextAlign}
            ></edgeless-align-panel>
          </edgeless-menu-button>
        `,
            ].filter(b => b !== nothing), renderMenuDivider);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessChangeTextMenu = _classThis;
})();
export { EdgelessChangeTextMenu };
//# sourceMappingURL=change-text-menu.js.map