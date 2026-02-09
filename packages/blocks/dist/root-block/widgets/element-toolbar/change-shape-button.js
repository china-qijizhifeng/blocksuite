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
import '../../edgeless/components/panel/stroke-style-panel.js';
import '../../edgeless/components/panel/color-panel.js';
import '../../edgeless/components/panel/shape-style-panel.js';
import '../../edgeless/components/panel/shape-panel.js';
import './change-text-menu.js';
import { WithDisposable } from '@blocksuite/block-std';
import { html, LitElement, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { cache } from 'lit/directives/cache.js';
import { choose } from 'lit/directives/choose.js';
import { join } from 'lit/directives/join.js';
import { AddTextIcon, ChangeShapeIcon, GeneralStyleIcon, ScribbledStyleIcon, SmallArrowDownIcon, } from '../../../_common/icons/index.js';
import { LineWidth } from '../../../_common/types.js';
import { countBy, maxBy } from '../../../_common/utils/iterable.js';
import { FontFamily } from '../../../surface-block/consts.js';
import { FILL_COLORS, ShapeType, STROKE_COLORS, } from '../../../surface-block/elements/shape/consts.js';
import { ShapeStyle, StrokeStyle, } from '../../../surface-block/index.js';
import { lineSizeButtonStyles } from '../../edgeless/components/buttons/line-size-button.js';
import { renderMenuDivider } from '../../edgeless/components/buttons/menu-button.js';
import { GET_DEFAULT_LINE_COLOR, isTransparent, } from '../../edgeless/components/panel/color-panel.js';
import { SHAPE_FILL_COLOR_BLACK, SHAPE_TEXT_COLOR_PURE_BLACK, SHAPE_TEXT_COLOR_PURE_WHITE, } from '../../edgeless/utils/consts.js';
import { mountShapeTextEditor } from '../../edgeless/utils/text.js';
function getMostCommonShape(elements) {
    const shapeTypes = countBy(elements, (ele) => {
        return ele.shapeType === 'rect' && ele.radius
            ? 'roundedRect'
            : ele.shapeType;
    });
    const max = maxBy(Object.entries(shapeTypes), ([_k, count]) => count);
    return max ? max[0] : null;
}
function getMostCommonFillColor(elements) {
    const colors = countBy(elements, (ele) => {
        return ele.filled ? ele.fillColor : '--affine-palette-transparent';
    });
    const max = maxBy(Object.entries(colors), ([_k, count]) => count);
    return max ? max[0] : null;
}
function getMostCommonStrokeColor(elements) {
    const colors = countBy(elements, (ele) => {
        return ele.strokeColor;
    });
    const max = maxBy(Object.entries(colors), ([_k, count]) => count);
    return max ? max[0] : null;
}
function getMostCommonLineSize(elements) {
    const sizes = countBy(elements, (ele) => {
        return ele.strokeWidth;
    });
    const max = maxBy(Object.entries(sizes), ([_k, count]) => count);
    return max ? Number(max[0]) : LineWidth.Four;
}
function getMostCommonLineStyle(elements) {
    const sizes = countBy(elements, (ele) => ele.strokeStyle);
    const max = maxBy(Object.entries(sizes), ([_k, count]) => count);
    return max ? max[0] : null;
}
function getMostCommonShapeStyle(elements) {
    const roughnesses = countBy(elements, (ele) => {
        return ele.shapeStyle;
    });
    const max = maxBy(Object.entries(roughnesses), ([_k, count]) => count);
    return max ? max[0] : ShapeStyle.Scribbled;
}
let EdgelessChangeShapeButton = (() => {
    let _classDecorators = [customElement('edgeless-change-shape-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __shapePanel_decorators;
    let __shapePanel_initializers = [];
    let __shapePanel_extraInitializers = [];
    let _elements_decorators;
    let _elements_initializers = [];
    let _elements_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    var EdgelessChangeShapeButton = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __shapePanel_decorators = [query('edgeless-shape-panel')];
            _elements_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __shapePanel_decorators, { kind: "accessor", name: "_shapePanel", static: false, private: false, access: { has: obj => "_shapePanel" in obj, get: obj => obj._shapePanel, set: (obj, value) => { obj._shapePanel = value; } }, metadata: _metadata }, __shapePanel_initializers, __shapePanel_extraInitializers);
            __esDecorate(this, null, _elements_decorators, { kind: "accessor", name: "elements", static: false, private: false, access: { has: obj => "elements" in obj, get: obj => obj.elements, set: (obj, value) => { obj.elements = value; } }, metadata: _metadata }, _elements_initializers, _elements_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessChangeShapeButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get service() {
            return this.edgeless.service;
        }
        static { this.styles = [lineSizeButtonStyles]; }
        #_shapePanel_accessor_storage = __runInitializers(this, __shapePanel_initializers, void 0);
        get _shapePanel() { return this.#_shapePanel_accessor_storage; }
        set _shapePanel(value) { this.#_shapePanel_accessor_storage = value; }
        #elements_accessor_storage = (__runInitializers(this, __shapePanel_extraInitializers), __runInitializers(this, _elements_initializers, []));
        get elements() { return this.#elements_accessor_storage; }
        set elements(value) { this.#elements_accessor_storage = value; }
        #edgeless_accessor_storage = (__runInitializers(this, _elements_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        _getTextColor(fillColor) {
            // When the shape is filled with black color, the text color should be white.
            // When the shape is transparent, the text color should be set according to the theme.
            // Otherwise, the text color should be black.
            const textColor = isTransparent(fillColor)
                ? GET_DEFAULT_LINE_COLOR()
                : fillColor === SHAPE_FILL_COLOR_BLACK
                    ? SHAPE_TEXT_COLOR_PURE_WHITE
                    : SHAPE_TEXT_COLOR_PURE_BLACK;
            return textColor;
        }
        _setShapeFillColor(fillColor) {
            const filled = !isTransparent(fillColor);
            const color = this._getTextColor(fillColor);
            this.elements.forEach(ele => this.service.updateElement(ele.id, { filled, fillColor, color }));
        }
        _setShapeStrokeColor(strokeColor) {
            this.elements.forEach(ele => this.service.updateElement(ele.id, { strokeColor }));
        }
        _setShapeStrokeWidth(strokeWidth) {
            this.elements.forEach(ele => this.service.updateElement(ele.id, { strokeWidth }));
        }
        _setShapeStrokeStyle(strokeStyle) {
            this.elements.forEach(ele => this.service.updateElement(ele.id, { strokeStyle }));
        }
        _setShapeStyles({ type, value }) {
            if (type === 'size') {
                this._setShapeStrokeWidth(value);
                return;
            }
            if (type === 'lineStyle') {
                this._setShapeStrokeStyle(value);
            }
        }
        _setShapeStyle(shapeStyle) {
            const fontFamily = shapeStyle === ShapeStyle.General ? FontFamily.Inter : FontFamily.Kalam;
            this.elements.forEach(ele => {
                this.service.updateElement(ele.id, { shapeStyle, fontFamily });
            });
        }
        _addText() {
            mountShapeTextEditor(this.elements[0], this.edgeless);
        }
        _showAddButtonOrTextMenu() {
            if (this.elements.length === 1 && !this.elements[0].text) {
                return 'button';
            }
            if (!this.elements.some(e => !e.text)) {
                return 'menu';
            }
            return 'nothing';
        }
        firstUpdated(changedProperties) {
            const _disposables = this._disposables;
            _disposables.add(this._shapePanel.slots.select.on(shapeType => {
                const updatedProps = shapeType === 'roundedRect'
                    ? { shapeType: ShapeType.Rect, radius: 0.1 }
                    : { shapeType, radius: 0 };
                this.edgeless.doc.captureSync();
                this.elements.forEach(element => {
                    this.service.updateElement(element.id, updatedProps);
                });
            }));
            super.firstUpdated(changedProperties);
        }
        render() {
            const elements = this.elements;
            const selectedShape = getMostCommonShape(elements);
            const selectedFillColor = getMostCommonFillColor(elements) ?? FILL_COLORS[0];
            const selectedStrokeColor = getMostCommonStrokeColor(elements) ?? STROKE_COLORS[0];
            const selectedLineSize = getMostCommonLineSize(elements) ?? LineWidth.Four;
            const selectedLineStyle = getMostCommonLineStyle(elements) ?? StrokeStyle.Solid;
            const selectedShapeStyle = getMostCommonShapeStyle(elements) ?? ShapeStyle.Scribbled;
            return join([
                html `
          <edgeless-menu-button
            .button=${html `
              <edgeless-tool-icon-button
                aria-label="Switch type"
                .tooltip=${'Switch type'}
              >
                ${ChangeShapeIcon}${SmallArrowDownIcon}
              </edgeless-tool-icon-button>
            `}
          >
            <edgeless-shape-panel
              slot
              .selectedShape=${selectedShape}
              .shapeStyle=${selectedShapeStyle}
            >
            </edgeless-shape-panel>
          </edgeless-menu-button>
        `,
                html `
          <edgeless-menu-button
            .button=${html `
              <edgeless-tool-icon-button aria-label="Style" .tooltip=${'Style'}>
                ${cache(selectedShapeStyle === ShapeStyle.General
                    ? GeneralStyleIcon
                    : ScribbledStyleIcon)}
                ${SmallArrowDownIcon}
              </edgeless-tool-icon-button>
            `}
          >
            <edgeless-shape-style-panel
              slot
              .value=${selectedShapeStyle}
              .onSelect=${(value) => this._setShapeStyle(value)}
            >
            </edgeless-shape-style-panel>
          </edgeless-menu-button>
        `,
                html `
          <edgeless-menu-button
            .contentPadding=${'8px'}
            .button=${html `
              <edgeless-tool-icon-button
                aria-label="Fill color"
                .tooltip=${'Fill color'}
              >
                <edgeless-color-button
                  .color=${selectedFillColor}
                ></edgeless-color-button>
              </edgeless-tool-icon-button>
            `}
          >
            <edgeless-color-panel
              slot
              role="listbox"
              aria-label="Fill colors"
              .value=${selectedFillColor}
              .options=${FILL_COLORS}
              @select=${(e) => this._setShapeFillColor(e.detail)}
            >
            </edgeless-color-panel>
          </edgeless-menu-button>
        `,
                html `
          <edgeless-menu-button
            .contentPadding=${'8px'}
            .button=${html `
              <edgeless-tool-icon-button
                aria-label="Border style"
                .tooltip=${'Border style'}
              >
                <edgeless-color-button
                  .color=${selectedStrokeColor}
                  .hollowCircle=${true}
                ></edgeless-color-button>
              </edgeless-tool-icon-button>
            `}
          >
            <stroke-style-panel
              slot
              .hollowCircle=${true}
              .strokeWidth=${selectedLineSize}
              .strokeStyle=${selectedLineStyle}
              .strokeColor=${selectedStrokeColor}
              .setStrokeStyle=${(e) => this._setShapeStyles(e)}
              .setStrokeColor=${(e) => this._setShapeStrokeColor(e.detail)}
            >
            </stroke-style-panel>
          </edgeless-menu-button>
        `,
                choose(this._showAddButtonOrTextMenu(), [
                    [
                        'button',
                        () => html `
                <edgeless-tool-icon-button
                  aria-label="Add text"
                  .tooltip=${'Add text'}
                  @click=${this._addText}
                >
                  ${AddTextIcon}
                </edgeless-tool-icon-button>
              `,
                    ],
                    [
                        'menu',
                        () => html `
                <edgeless-change-text-menu
                  .elementType=${'shape'}
                  .elements=${elements}
                  .edgeless=${this.edgeless}
                ></edgeless-change-text-menu>
              `,
                    ],
                    ['nothing', () => nothing],
                ]),
            ].filter(button => button !== nothing), renderMenuDivider);
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _edgeless_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessChangeShapeButton = _classThis;
})();
export { EdgelessChangeShapeButton };
export function renderChangeShapeButton(edgeless, elements) {
    if (!elements?.length)
        return nothing;
    if (elements.some(e => edgeless.service.surface.isInMindmap(e.id)))
        return nothing;
    return html `
    <edgeless-change-shape-button .elements=${elements} .edgeless=${edgeless}>
    </edgeless-change-shape-button>
  `;
}
//# sourceMappingURL=change-shape-button.js.map