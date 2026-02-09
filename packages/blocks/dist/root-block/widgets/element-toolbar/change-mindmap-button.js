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
import { WithDisposable } from '@blocksuite/block-std';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { MindmapBalanceLayoutIcon, MindmapLeftLayoutIcon, MindmapRightLayoutIcon, MindmapStyleFour, MindmapStyleIcon, MindmapStyleOne, MindmapStyleThree, MindmapStyleTwo, SmallArrowDownIcon, } from '../../../_common/icons/edgeless.js';
import { countBy, maxBy } from '../../../_common/utils/iterable.js';
import { LayoutType } from '../../../surface-block/element-model/utils/mindmap/layout.js';
import { MindmapStyle } from '../../../surface-block/element-model/utils/mindmap/style.js';
const MINDMAP_STYLE_LIST = [
    {
        value: MindmapStyle.ONE,
        icon: MindmapStyleOne,
    },
    {
        value: MindmapStyle.FOUR,
        icon: MindmapStyleFour,
    },
    {
        value: MindmapStyle.THREE,
        icon: MindmapStyleThree,
    },
    {
        value: MindmapStyle.TWO,
        icon: MindmapStyleTwo,
    },
];
const MINDMAP_LAYOUT_LIST = [
    {
        name: 'Left',
        value: LayoutType.LEFT,
        icon: MindmapLeftLayoutIcon,
    },
    {
        name: 'Radial',
        value: LayoutType.BALANCE,
        icon: MindmapBalanceLayoutIcon,
    },
    {
        name: 'Right',
        value: LayoutType.RIGHT,
        icon: MindmapRightLayoutIcon,
    },
];
let EdgelessChangeMindmapStylePanel = (() => {
    let _classDecorators = [customElement('edgeless-change-mindmap-style-panel')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let _mindmapStyle_decorators;
    let _mindmapStyle_initializers = [];
    let _mindmapStyle_extraInitializers = [];
    let _onSelect_decorators;
    let _onSelect_initializers = [];
    let _onSelect_extraInitializers = [];
    var EdgelessChangeMindmapStylePanel = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _mindmapStyle_decorators = [property({ attribute: false })];
            _onSelect_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _mindmapStyle_decorators, { kind: "accessor", name: "mindmapStyle", static: false, private: false, access: { has: obj => "mindmapStyle" in obj, get: obj => obj.mindmapStyle, set: (obj, value) => { obj.mindmapStyle = value; } }, metadata: _metadata }, _mindmapStyle_initializers, _mindmapStyle_extraInitializers);
            __esDecorate(this, null, _onSelect_decorators, { kind: "accessor", name: "onSelect", static: false, private: false, access: { has: obj => "onSelect" in obj, get: obj => obj.onSelect, set: (obj, value) => { obj.onSelect = value; } }, metadata: _metadata }, _onSelect_initializers, _onSelect_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessChangeMindmapStylePanel = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 8px;
      background: var(--affine-background-overlay-panel-color);
    }

    .style-item {
      border-radius: 4px;
    }

    .style-item > svg {
      vertical-align: middle;
    }

    .style-item.active,
    .style-item:hover {
      cursor: pointer;
      background-color: var(--affine-hover-color);
    }
  `; }
        #mindmapStyle_accessor_storage = __runInitializers(this, _mindmapStyle_initializers, void 0);
        get mindmapStyle() { return this.#mindmapStyle_accessor_storage; }
        set mindmapStyle(value) { this.#mindmapStyle_accessor_storage = value; }
        #onSelect_accessor_storage = (__runInitializers(this, _mindmapStyle_extraInitializers), __runInitializers(this, _onSelect_initializers, void 0));
        get onSelect() { return this.#onSelect_accessor_storage; }
        set onSelect(value) { this.#onSelect_accessor_storage = value; }
        render() {
            return repeat(MINDMAP_STYLE_LIST, item => item.value, ({ value, icon }) => html `
        <div
          role="button"
          class="style-item ${value === this.mindmapStyle ? 'active' : ''}"
          @click=${() => this.onSelect(value)}
        >
          ${icon}
        </div>
      `);
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _onSelect_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessChangeMindmapStylePanel = _classThis;
})();
let EdgelessChangeMindmapLayoutPanel = (() => {
    let _classDecorators = [customElement('edgeless-change-mindmap-layout-panel')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let _mindmapLayout_decorators;
    let _mindmapLayout_initializers = [];
    let _mindmapLayout_extraInitializers = [];
    let _onSelect_decorators;
    let _onSelect_initializers = [];
    let _onSelect_extraInitializers = [];
    var EdgelessChangeMindmapLayoutPanel = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _mindmapLayout_decorators = [property({ attribute: false })];
            _onSelect_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _mindmapLayout_decorators, { kind: "accessor", name: "mindmapLayout", static: false, private: false, access: { has: obj => "mindmapLayout" in obj, get: obj => obj.mindmapLayout, set: (obj, value) => { obj.mindmapLayout = value; } }, metadata: _metadata }, _mindmapLayout_initializers, _mindmapLayout_extraInitializers);
            __esDecorate(this, null, _onSelect_decorators, { kind: "accessor", name: "onSelect", static: false, private: false, access: { has: obj => "onSelect" in obj, get: obj => obj.onSelect, set: (obj, value) => { obj.onSelect = value; } }, metadata: _metadata }, _onSelect_initializers, _onSelect_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessChangeMindmapLayoutPanel = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 8px;
    }
  `; }
        #mindmapLayout_accessor_storage = __runInitializers(this, _mindmapLayout_initializers, void 0);
        get mindmapLayout() { return this.#mindmapLayout_accessor_storage; }
        set mindmapLayout(value) { this.#mindmapLayout_accessor_storage = value; }
        #onSelect_accessor_storage = (__runInitializers(this, _mindmapLayout_extraInitializers), __runInitializers(this, _onSelect_initializers, void 0));
        get onSelect() { return this.#onSelect_accessor_storage; }
        set onSelect(value) { this.#onSelect_accessor_storage = value; }
        render() {
            return repeat(MINDMAP_LAYOUT_LIST, item => item.value, ({ name, value, icon }) => html `
        <edgeless-tool-icon-button
          aria-label=${name}
          .tooltip=${name}
          .tipPosition=${'top'}
          .active=${this.mindmapLayout === value}
          .activeMode=${'background'}
          @click=${() => this.onSelect(value)}
        >
          ${icon}
        </edgeless-tool-icon-button>
      `);
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _onSelect_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessChangeMindmapLayoutPanel = _classThis;
})();
let EdgelessChangeMindmapButton = (() => {
    let _classDecorators = [customElement('edgeless-change-mindmap-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _elements_decorators;
    let _elements_initializers = [];
    let _elements_extraInitializers = [];
    let _nodes_decorators;
    let _nodes_initializers = [];
    let _nodes_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _layoutType_decorators;
    let _layoutType_initializers = [];
    let _layoutType_extraInitializers = [];
    var EdgelessChangeMindmapButton = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#elements_accessor_storage = __runInitializers(this, _elements_initializers, void 0);
            this.#nodes_accessor_storage = (__runInitializers(this, _elements_extraInitializers), __runInitializers(this, _nodes_initializers, void 0));
            this.#edgeless_accessor_storage = (__runInitializers(this, _nodes_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
            this.#layoutType_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _layoutType_initializers, void 0));
            this._updateStyle = (__runInitializers(this, _layoutType_extraInitializers), (style) => {
                this._mindmaps.forEach(element => (element.style = style));
            });
            this._updateLayoutType = (layoutType) => {
                this.elements.forEach(element => {
                    element.layoutType = layoutType;
                    element.layout();
                });
                this.layoutType = layoutType;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _elements_decorators = [property({ attribute: false })];
            _nodes_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            _layoutType_decorators = [state()];
            __esDecorate(this, null, _elements_decorators, { kind: "accessor", name: "elements", static: false, private: false, access: { has: obj => "elements" in obj, get: obj => obj.elements, set: (obj, value) => { obj.elements = value; } }, metadata: _metadata }, _elements_initializers, _elements_extraInitializers);
            __esDecorate(this, null, _nodes_decorators, { kind: "accessor", name: "nodes", static: false, private: false, access: { has: obj => "nodes" in obj, get: obj => obj.nodes, set: (obj, value) => { obj.nodes = value; } }, metadata: _metadata }, _nodes_initializers, _nodes_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _layoutType_decorators, { kind: "accessor", name: "layoutType", static: false, private: false, access: { has: obj => "layoutType" in obj, get: obj => obj.layoutType, set: (obj, value) => { obj.layoutType = value; } }, metadata: _metadata }, _layoutType_initializers, _layoutType_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessChangeMindmapButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        #elements_accessor_storage;
        get elements() { return this.#elements_accessor_storage; }
        set elements(value) { this.#elements_accessor_storage = value; }
        #nodes_accessor_storage;
        get nodes() { return this.#nodes_accessor_storage; }
        set nodes(value) { this.#nodes_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #layoutType_accessor_storage;
        get layoutType() { return this.#layoutType_accessor_storage; }
        set layoutType(value) { this.#layoutType_accessor_storage = value; }
        get layout() {
            const layoutType = this.layoutType ?? this._getCommonLayoutType();
            return MINDMAP_LAYOUT_LIST.find(item => item.value === layoutType);
        }
        _getCommonStyle() {
            const values = countBy(this.elements, element => element.style);
            const max = maxBy(Object.entries(values), ([_k, count]) => count);
            return max ? Number(max[0]) : MindmapStyle.ONE;
        }
        _getCommonLayoutType() {
            const values = countBy(this.elements, element => element.layoutType);
            const max = maxBy(Object.entries(values), ([_k, count]) => count);
            return max ? Number(max[0]) : LayoutType.BALANCE;
        }
        get _mindmaps() {
            const mindmaps = new Set();
            return this.elements.reduce((_, el) => {
                mindmaps.add(el);
                return mindmaps;
            }, mindmaps);
        }
        _isSubnode() {
            return (this.nodes.length === 1 &&
                this.nodes[0].group.tree.element !==
                    this.nodes[0]);
        }
        render() {
            return html `
      <edgeless-menu-button
        .contentPadding=${'8px'}
        .button=${html `
          <edgeless-tool-icon-button aria-label="Style" .tooltip=${'Style'}>
            ${MindmapStyleIcon}${SmallArrowDownIcon}
          </edgeless-tool-icon-button>
        `}
      >
        <edgeless-change-mindmap-style-panel
          slot
          .mindmapStyle=${this._getCommonStyle()}
          .onSelect=${this._updateStyle}
        >
        </edgeless-change-mindmap-style-panel>
      </edgeless-menu-button>

      ${this._isSubnode()
                ? nothing
                : html `<edgeless-menu-divider></edgeless-menu-divider>
            <edgeless-menu-button
              .button=${html `
                <edgeless-tool-icon-button
                  aria-label="Layout"
                  .tooltip=${'Layout'}
                >
                  ${this.layout.icon}${SmallArrowDownIcon}
                </edgeless-tool-icon-button>
              `}
            >
              <edgeless-change-mindmap-layout-panel
                slot
                .mindmapLayout=${this.layout.value}
                .onSelect=${this._updateLayoutType}
              >
              </edgeless-change-mindmap-layout-panel>
            </edgeless-menu-button>`}
    `;
        }
    };
    return EdgelessChangeMindmapButton = _classThis;
})();
export { EdgelessChangeMindmapButton };
export function renderMindmapButton(edgeless, elements) {
    if (!elements?.length)
        return nothing;
    const mindmaps = [];
    elements.forEach(e => {
        if (e.type === 'mindmap') {
            mindmaps.push(e);
        }
        const group = edgeless.service.surface.getGroup(e.id);
        if (group?.type === 'mindmap') {
            mindmaps.push(group);
        }
    });
    if (mindmaps.length === 0) {
        return nothing;
    }
    return html `
    <edgeless-change-mindmap-button
      .elements=${mindmaps}
      .nodes=${elements.filter(e => e.type === 'shape')}
      .edgeless=${edgeless}
    >
    </edgeless-change-mindmap-button>
  `;
}
//# sourceMappingURL=change-mindmap-button.js.map