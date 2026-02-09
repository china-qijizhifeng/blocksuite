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
import './change-text-menu.js';
import { WithDisposable } from '@blocksuite/block-std';
import { html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { join } from 'lit/directives/join.js';
import { repeat } from 'lit/directives/repeat.js';
import { AddTextIcon, ConnectorCWithArrowIcon, ConnectorEndpointNoneIcon, ConnectorLWithArrowIcon, ConnectorXWithArrowIcon, FlipDirectionIcon, FrontEndpointArrowIcon, FrontEndpointCircleIcon, FrontEndpointDiamondIcon, FrontEndpointTriangleIcon, GeneralStyleIcon, RearEndpointArrowIcon, RearEndpointCircleIcon, RearEndpointDiamondIcon, RearEndpointTriangleIcon, ScribbledStyleIcon, SmallArrowDownIcon, } from '../../../_common/icons/index.js';
import { LineWidth } from '../../../_common/types.js';
import { countBy, maxBy } from '../../../_common/utils/iterable.js';
import { ConnectorEndpoint, ConnectorMode, DEFAULT_FRONT_END_POINT_STYLE, DEFAULT_REAR_END_POINT_STYLE, } from '../../../surface-block/index.js';
import { renderMenuDivider } from '../../edgeless/components/buttons/menu-button.js';
import { GET_DEFAULT_LINE_COLOR, } from '../../edgeless/components/panel/color-panel.js';
import { mountConnectorLabelEditor } from '../../edgeless/utils/text.js';
function getMostCommonColor(elements) {
    const colors = countBy(elements, ele => ele.stroke);
    const max = maxBy(Object.entries(colors), ([_k, count]) => count);
    return max ? max[0] : GET_DEFAULT_LINE_COLOR();
}
function getMostCommonMode(elements) {
    const modes = countBy(elements, ele => ele.mode);
    const max = maxBy(Object.entries(modes), ([_k, count]) => count);
    return max ? Number(max[0]) : null;
}
function getMostCommonLineWidth(elements) {
    const sizes = countBy(elements, ele => ele.strokeWidth);
    const max = maxBy(Object.entries(sizes), ([_k, count]) => count);
    return max ? Number(max[0]) : LineWidth.Four;
}
export function getMostCommonLineStyle(elements) {
    const sizes = countBy(elements, ele => ele.strokeStyle);
    const max = maxBy(Object.entries(sizes), ([_k, count]) => count);
    return max ? max[0] : null;
}
function getMostCommonRough(elements) {
    const { trueCount, falseCount } = elements.reduce((counts, ele) => {
        if (ele.rough) {
            counts.trueCount++;
        }
        else {
            counts.falseCount++;
        }
        return counts;
    }, { trueCount: 0, falseCount: 0 });
    return trueCount > falseCount;
}
function getMostCommonEndpointStyle(elements, endpoint) {
    const field = endpoint === ConnectorEndpoint.Front
        ? 'frontEndpointStyle'
        : 'rearEndpointStyle';
    const modes = countBy(elements, ele => ele[field]);
    const max = maxBy(Object.entries(modes), ([_k, count]) => count);
    return max ? max[0] : null;
}
function notEqual(key, value) {
    return (element) => element[key] !== value;
}
const STYLE_LIST = [
    {
        name: 'General',
        value: false,
        icon: GeneralStyleIcon,
    },
    {
        name: 'Scribbled',
        value: true,
        icon: ScribbledStyleIcon,
    },
];
const STYLE_CHOOSE = [
    [false, () => GeneralStyleIcon],
    [true, () => ScribbledStyleIcon],
];
const FRONT_ENDPOINT_STYLE_LIST = [
    {
        value: 'None',
        icon: ConnectorEndpointNoneIcon,
    },
    {
        value: 'Arrow',
        icon: FrontEndpointArrowIcon,
    },
    {
        value: 'Triangle',
        icon: FrontEndpointTriangleIcon,
    },
    {
        value: 'Circle',
        icon: FrontEndpointCircleIcon,
    },
    {
        value: 'Diamond',
        icon: FrontEndpointDiamondIcon,
    },
];
const REAR_ENDPOINT_STYLE_LIST = [
    {
        value: 'Diamond',
        icon: RearEndpointDiamondIcon,
    },
    {
        value: 'Circle',
        icon: RearEndpointCircleIcon,
    },
    {
        value: 'Triangle',
        icon: RearEndpointTriangleIcon,
    },
    {
        value: 'Arrow',
        icon: RearEndpointArrowIcon,
    },
    {
        value: 'None',
        icon: ConnectorEndpointNoneIcon,
    },
];
const MODE_LIST = [
    {
        name: 'Curve',
        icon: ConnectorCWithArrowIcon,
        value: ConnectorMode.Curve,
    },
    {
        name: 'Elbowed',
        icon: ConnectorXWithArrowIcon,
        value: ConnectorMode.Orthogonal,
    },
    {
        name: 'Straight',
        icon: ConnectorLWithArrowIcon,
        value: ConnectorMode.Straight,
    },
];
const MODE_CHOOSE = [
    [ConnectorMode.Curve, () => ConnectorCWithArrowIcon],
    [ConnectorMode.Orthogonal, () => ConnectorXWithArrowIcon],
    [ConnectorMode.Straight, () => ConnectorLWithArrowIcon],
];
let EdgelessChangeConnectorButton = (() => {
    let _classDecorators = [customElement('edgeless-change-connector-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _elements_decorators;
    let _elements_initializers = [];
    let _elements_extraInitializers = [];
    var EdgelessChangeConnectorButton = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _edgeless_decorators = [property({ attribute: false })];
            _elements_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _elements_decorators, { kind: "accessor", name: "elements", static: false, private: false, access: { has: obj => "elements" in obj, get: obj => obj.elements, set: (obj, value) => { obj.elements = value; } }, metadata: _metadata }, _elements_initializers, _elements_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessChangeConnectorButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        #edgeless_accessor_storage = __runInitializers(this, _edgeless_initializers, void 0);
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #elements_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _elements_initializers, []));
        get elements() { return this.#elements_accessor_storage; }
        set elements(value) { this.#elements_accessor_storage = value; }
        get doc() {
            return this.edgeless.doc;
        }
        get service() {
            return this.edgeless.service;
        }
        _setConnectorProp(key, value) {
            this.doc.captureSync();
            this.elements
                .filter(notEqual(key, value))
                .forEach(element => this.service.updateElement(element.id, { [key]: value }));
        }
        _setConnectorMode(mode) {
            this._setConnectorProp('mode', mode);
        }
        _setConnectorRough(rough) {
            this._setConnectorProp('rough', rough);
        }
        _setConnectorColor(stroke) {
            this._setConnectorProp('stroke', stroke);
        }
        _setConnectorStrokeWidth(strokeWidth) {
            this._setConnectorProp('strokeWidth', strokeWidth);
        }
        _setConnectorStrokeStyle(strokeStyle) {
            this._setConnectorProp('strokeStyle', strokeStyle);
        }
        _setConnectorStorke({ type, value }) {
            if (type === 'size') {
                this._setConnectorStrokeWidth(value);
                return;
            }
            this._setConnectorStrokeStyle(value);
        }
        _setConnectorPointStyle(end, style) {
            const props = {
                [end === ConnectorEndpoint.Front
                    ? 'frontEndpointStyle'
                    : 'rearEndpointStyle']: style,
            };
            this.elements.forEach(element => this.service.updateElement(element.id, { ...props }));
        }
        _flipEndpointStyle(frontEndpointStyle, rearEndpointStyle) {
            if (frontEndpointStyle === rearEndpointStyle)
                return;
            this.elements.forEach(element => this.service.updateElement(element.id, {
                frontEndpointStyle: rearEndpointStyle,
                rearEndpointStyle: frontEndpointStyle,
            }));
        }
        _getEndpointIcon(list, style) {
            return (list.find(({ value }) => value === style)?.icon ||
                ConnectorEndpointNoneIcon);
        }
        _addLabel() {
            mountConnectorLabelEditor(this.elements[0], this.edgeless);
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
        render() {
            const selectedColor = getMostCommonColor(this.elements);
            const selectedMode = getMostCommonMode(this.elements);
            const selectedLineSize = getMostCommonLineWidth(this.elements) ?? LineWidth.Four;
            const selectedRough = getMostCommonRough(this.elements);
            const selectedLineStyle = getMostCommonLineStyle(this.elements);
            const selectedStartPointStyle = getMostCommonEndpointStyle(this.elements, ConnectorEndpoint.Front) ??
                DEFAULT_FRONT_END_POINT_STYLE;
            const selectedEndPointStyle = getMostCommonEndpointStyle(this.elements, ConnectorEndpoint.Rear) ??
                DEFAULT_REAR_END_POINT_STYLE;
            return join([
                html `
          <edgeless-menu-button
            .contentPadding=${'8px'}
            .button=${html `
              <edgeless-tool-icon-button
                aria-label="Stroke style"
                .tooltip=${'Stroke style'}
              >
                <edgeless-color-button
                  .color=${selectedColor}
                ></edgeless-color-button>
              </edgeless-tool-icon-button>
            `}
          >
            <stroke-style-panel
              slot
              .strokeWidth=${selectedLineSize}
              .strokeStyle=${selectedLineStyle}
              .strokeColor=${selectedColor}
              .setStrokeStyle=${(e) => this._setConnectorStorke(e)}
              .setStrokeColor=${(e) => this._setConnectorColor(e.detail)}
            >
            </stroke-style-panel>
          </edgeless-menu-button>
        `,
                html `
          <edgeless-menu-button
            .button=${html `
              <edgeless-tool-icon-button aria-label="Style" .tooltip=${'Style'}>
                ${choose(selectedRough, STYLE_CHOOSE)}${SmallArrowDownIcon}
              </edgeless-tool-icon-button>
            `}
          >
            <div slot data-orientation="horizontal">
              ${repeat(STYLE_LIST, item => item.name, ({ name, value, icon }) => html `
                  <edgeless-tool-icon-button
                    aria-label=${name}
                    .tooltip=${name}
                    .active=${selectedRough === value}
                    .activeMode=${'background'}
                    @click=${() => this._setConnectorRough(value)}
                  >
                    ${icon}
                  </edgeless-tool-icon-button>
                `)}
            </div>
          </edgeless-menu-button>
        `,
                html `
          <edgeless-menu-button
            .button=${html `
              <edgeless-tool-icon-button
                aria-label="Start point style"
                .tooltip=${'Start point style'}
              >
                ${this._getEndpointIcon(FRONT_ENDPOINT_STYLE_LIST, selectedStartPointStyle)}${SmallArrowDownIcon}
              </edgeless-tool-icon-button>
            `}
          >
            <div slot data-orientation="horizontal">
              ${repeat(FRONT_ENDPOINT_STYLE_LIST, item => item.value, ({ value, icon }) => html `
                  <edgeless-tool-icon-button
                    aria-label=${value}
                    .tooltip=${value}
                    .active=${selectedStartPointStyle === value}
                    .activeMode=${'background'}
                    @click=${() => this._setConnectorPointStyle(ConnectorEndpoint.Front, value)}
                  >
                    ${icon}
                  </edgeless-tool-icon-button>
                `)}
            </div>
          </edgeless-menu-button>

          <edgeless-tool-icon-button
            aria-label="Flip direction"
            .tooltip=${'Flip direction'}
            .disabled=${false}
            @click=${() => this._flipEndpointStyle(selectedStartPointStyle, selectedEndPointStyle)}
          >
            ${FlipDirectionIcon}
          </edgeless-tool-icon-button>

          <edgeless-menu-button
            .button=${html `
              <edgeless-tool-icon-button
                aria-label="End point style"
                .tooltip=${'End point style'}
              >
                ${this._getEndpointIcon(REAR_ENDPOINT_STYLE_LIST, selectedEndPointStyle)}${SmallArrowDownIcon}
              </edgeless-tool-icon-button>
            `}
          >
            <div slot data-orientation="horizontal">
              ${repeat(REAR_ENDPOINT_STYLE_LIST, item => item.value, ({ value, icon }) => html `
                  <edgeless-tool-icon-button
                    aria-label=${value}
                    .tooltip=${value}
                    .active=${selectedEndPointStyle === value}
                    .activeMode=${'background'}
                    @click=${() => this._setConnectorPointStyle(ConnectorEndpoint.Rear, value)}
                  >
                    ${icon}
                  </edgeless-tool-icon-button>
                `)}
            </div>
          </edgeless-menu-button>

          <edgeless-menu-button
            .button=${html `
              <edgeless-tool-icon-button
                aria-label="Shape"
                .tooltip=${'Connector shape'}
              >
                ${choose(selectedMode, MODE_CHOOSE)}${SmallArrowDownIcon}
              </edgeless-tool-icon-button>
            `}
          >
            <div slot data-orientation="horizontal">
              ${repeat(MODE_LIST, item => item.name, ({ name, value, icon }) => html `
                  <edgeless-tool-icon-button
                    aria-label=${name}
                    .tooltip=${name}
                    .active=${selectedMode === value}
                    .activeMode=${'background'}
                    @click=${() => this._setConnectorMode(value)}
                  >
                    ${icon}
                  </edgeless-tool-icon-button>
                `)}
            </div>
          </edgeless-menu-button>
        `,
                choose(this._showAddButtonOrTextMenu(), [
                    [
                        'button',
                        () => html `
                <edgeless-tool-icon-button
                  aria-label="Add text"
                  .tooltip=${'Add text'}
                  @click=${this._addLabel}
                >
                  ${AddTextIcon}
                </edgeless-tool-icon-button>
              `,
                    ],
                    [
                        'menu',
                        () => html `
                <edgeless-change-text-menu
                  .elementType=${'connector'}
                  .elements=${this.elements}
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
            __runInitializers(this, _elements_extraInitializers);
        }
    };
    return EdgelessChangeConnectorButton = _classThis;
})();
export { EdgelessChangeConnectorButton };
export function renderConnectorButton(edgeless, elements) {
    if (!elements?.length)
        return nothing;
    return html `
    <edgeless-change-connector-button
      .elements=${elements}
      .edgeless=${edgeless}
    >
    </edgeless-change-connector-button>
  `;
}
//# sourceMappingURL=change-connector-button.js.map