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
import './connector-menu.js';
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ArrowUpIcon, ConnectorIcon, } from '../../../../../_common/icons/index.js';
import { LineWidth } from '../../../../../_common/utils/index.js';
import { getConnectorModeName } from '../../../../../surface-block/element-model/connector.js';
import { ConnectorMode } from '../../../../../surface-block/index.js';
import { DEFAULT_CONNECTOR_COLOR } from '../../panel/color-panel.js';
import { getTooltipWithShortcut } from '../../utils.js';
import { applyLastProps, observeLastProps, } from '../common/observe-last-props.js';
import { QuickToolMixin } from '../mixins/quick-tool.mixin.js';
let EdgelessConnectorToolButton = (() => {
    let _classDecorators = [customElement('edgeless-connector-tool-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = QuickToolMixin(LitElement);
    let _states_decorators;
    let _states_initializers = [];
    let _states_extraInitializers = [];
    var EdgelessConnectorToolButton = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _states_decorators = [state()];
            __esDecorate(this, null, _states_decorators, { kind: "accessor", name: "states", static: false, private: false, access: { has: obj => "states" in obj, get: obj => obj.states, set: (obj, value) => { obj.states = value; } }, metadata: _metadata }, _states_initializers, _states_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessConnectorToolButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
    }
    .edgeless-connector-button {
      display: flex;
      position: relative;
    }
    .arrow-up-icon {
      position: absolute;
      top: 4px;
      right: 2px;
      font-size: 0;
    }
  `; }
        #states_accessor_storage;
        get states() { return this.#states_accessor_storage; }
        set states(value) { this.#states_accessor_storage = value; }
        get stateKeys() {
            return Object.keys(this.states);
        }
        _toggleMenu() {
            if (this.tryDisposePopper())
                return;
            const menu = this.createPopper('edgeless-connector-menu', this);
            menu.element.edgeless = this.edgeless;
            menu.element.onChange = (props) => {
                this.edgeless.service.editPropsStore.record(this.type, props);
                this.updateMenu();
                this.setEdgelessTool({
                    type: this.type,
                    mode: this.states.mode,
                });
            };
            this.updateMenu();
        }
        updateMenu() {
            if (!this.popper)
                return;
            Object.assign(this.popper.element, this.states);
        }
        connectedCallback() {
            super.connectedCallback();
            const { edgeless, states, stateKeys, type } = this;
            applyLastProps(edgeless.service, type, stateKeys, states);
            this.disposables.add(observeLastProps(edgeless.service, type, stateKeys, states, updates => (this.states = { ...this.states, ...updates })));
        }
        render() {
            const { active } = this;
            const arrowColor = active ? 'currentColor' : 'var(--affine-icon-secondary)';
            return html `
      <edgeless-tool-icon-button
        .tooltip=${this.popper
                ? ''
                : getTooltipWithShortcut(getConnectorModeName(this.states.mode), 'C')}
        .tooltipOffset=${17}
        .active=${active}
        .iconContainerPadding=${6}
        class="edgeless-connector-button"
        @click=${() => {
                // don't update tool before toggling menu
                this._toggleMenu();
                this.edgeless.tools.setEdgelessTool({
                    type: 'connector',
                    mode: this.states.mode,
                });
            }}
      >
        ${ConnectorIcon}
        <span class="arrow-up-icon" style=${styleMap({ color: arrowColor })}>
          ${ArrowUpIcon}
        </span>
      </edgeless-tool-icon-button>
    `;
        }
        constructor() {
            super(...arguments);
            this.type = 'connector';
            this.#states_accessor_storage = __runInitializers(this, _states_initializers, {
                mode: ConnectorMode.Curve,
                stroke: DEFAULT_CONNECTOR_COLOR,
                strokeWidth: LineWidth.Two,
            });
            __runInitializers(this, _states_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessConnectorToolButton = _classThis;
})();
export { EdgelessConnectorToolButton };
//# sourceMappingURL=connector-tool-button.js.map