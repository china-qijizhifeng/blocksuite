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
import '../../buttons/toolbar-button.js';
import './brush-menu.js';
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { EdgelessPenDarkIcon, EdgelessPenLightIcon, } from '../../../../../_common/icons/edgeless.js';
import { LineWidth } from '../../../../../_common/utils/index.js';
import { DEFAULT_BRUSH_COLOR } from '../../panel/color-panel.js';
import { getTooltipWithShortcut } from '../../utils.js';
import { applyLastProps, observeLastProps, } from '../common/observe-last-props.js';
import { EdgelessToolbarToolMixin } from '../mixins/tool.mixin.js';
let EdgelessBrushToolButton = (() => {
    let _classDecorators = [customElement('edgeless-brush-tool-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EdgelessToolbarToolMixin(LitElement);
    let _states_decorators;
    let _states_initializers = [];
    let _states_extraInitializers = [];
    var EdgelessBrushToolButton = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _states_decorators = [state()];
            __esDecorate(this, null, _states_decorators, { kind: "accessor", name: "states", static: false, private: false, access: { has: obj => "states" in obj, get: obj => obj.states, set: (obj, value) => { obj.states = value; } }, metadata: _metadata }, _states_initializers, _states_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessBrushToolButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
      height: 100%;
      overflow-y: hidden;
    }
    .edgeless-brush-button {
      height: 100%;
    }
    .pen-wrapper {
      width: 35px;
      height: 64px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
    #edgeless-pen-icon {
      transition: transform 0.3s ease-in-out;
      transform: translateY(8px);
    }
    .edgeless-brush-button:hover #edgeless-pen-icon,
    .pen-wrapper.active #edgeless-pen-icon {
      transform: translateY(0);
    }
  `; }
        #states_accessor_storage;
        get states() { return this.#states_accessor_storage; }
        set states(value) { this.#states_accessor_storage = value; }
        get statesKeys() {
            return Object.keys(this.states);
        }
        _toggleBrushMenu() {
            if (this.tryDisposePopper())
                return;
            !this.active && this.setEdgelessTool({ type: this.type });
            const menu = this.createPopper('edgeless-brush-menu', this);
            Object.assign(menu.element, {
                edgeless: this.edgeless,
                onChange: (props) => {
                    this.edgeless.service.editPropsStore.record('brush', props);
                    this.setEdgelessTool({ type: 'brush' });
                },
            });
            this.updateMenu();
        }
        updateMenu() {
            const { popper } = this;
            if (!popper)
                return;
            Object.assign(popper.element, this.states);
        }
        connectedCallback() {
            super.connectedCallback();
            const { edgeless, states, statesKeys } = this;
            applyLastProps(edgeless.service, 'brush', statesKeys, states);
            this.disposables.add(observeLastProps(edgeless.service, 'brush', statesKeys, states, updates => {
                this.states = { ...this.states, ...updates };
            }));
        }
        updated(changedProperties) {
            if (changedProperties.has('states') && this.popper) {
                this.updateMenu();
            }
        }
        render() {
            const { active, theme } = this;
            const icon = theme === 'dark' ? EdgelessPenDarkIcon : EdgelessPenLightIcon;
            return html `
      <edgeless-toolbar-button
        class="edgeless-brush-button"
        .tooltip=${this.popper ? '' : getTooltipWithShortcut('Pen', 'P')}
        .tooltipOffset=${4}
        .active=${active}
        .withHover=${true}
        @click=${() => {
                this._toggleBrushMenu();
            }}
      >
        <div
          style=${styleMap({ color: `var(${this.states.color})` })}
          class="pen-wrapper"
        >
          ${icon}
        </div>
      </edgeless-toolbar-button>
    `;
        }
        constructor() {
            super(...arguments);
            this.type = 'brush';
            this.enableActiveBackground = true;
            this.#states_accessor_storage = __runInitializers(this, _states_initializers, {
                color: DEFAULT_BRUSH_COLOR,
                lineWidth: LineWidth.Four,
            });
            __runInitializers(this, _states_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessBrushToolButton = _classThis;
})();
export { EdgelessBrushToolButton };
//# sourceMappingURL=brush-tool-button.js.map