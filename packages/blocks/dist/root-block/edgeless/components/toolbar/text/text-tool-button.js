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
import './text-menu.js';
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { EdgelessTextIcon } from '../../../../../_common/icons/index.js';
import { GET_DEFAULT_TEXT_COLOR } from '../../panel/color-panel.js';
import { getTooltipWithShortcut } from '../../utils.js';
import { EdgelessToolbarToolMixin } from '../mixins/tool.mixin.js';
/**
 * @deprecated not used
 */
let EdgelessTextToolButton = (() => {
    let _classDecorators = [customElement('edgeless-text-tool-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EdgelessToolbarToolMixin(LitElement);
    let _states_decorators;
    let _states_initializers = [];
    let _states_extraInitializers = [];
    var EdgelessTextToolButton = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#states_accessor_storage = __runInitializers(this, _states_initializers, {
                color: GET_DEFAULT_TEXT_COLOR(),
            });
            this.type = (__runInitializers(this, _states_extraInitializers), 'text');
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _states_decorators = [state()];
            __esDecorate(this, null, _states_decorators, { kind: "accessor", name: "states", static: false, private: false, access: { has: obj => "states" in obj, get: obj => obj.states, set: (obj, value) => { obj.states = value; } }, metadata: _metadata }, _states_initializers, _states_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessTextToolButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
    }
    .edgeless-text-button {
      position: relative;
      width: 54px;
      height: 44px;
      overflow-y: hidden;
    }
  `; }
        #states_accessor_storage;
        get states() { return this.#states_accessor_storage; }
        set states(value) { this.#states_accessor_storage = value; }
        _toggleTextMenu() {
            if (this.popper) {
                this.requestUpdate();
            }
            else {
                this.edgeless.tools.setEdgelessTool({
                    type: this.type,
                });
            }
        }
        render() {
            const { active } = this;
            return html `
      <edgeless-toolbar-button
        class="edgeless-text-button"
        .tooltip=${this.popper ? '' : getTooltipWithShortcut('Text', 'T')}
        .tooltipOffset=${15}
        .active=${active}
        .activeMode=${'background'}
        @click=${() => {
                this._toggleTextMenu();
            }}
      >
        <div class="edgeless-text-button">
          <div class=${active ? 'active-mode' : ''}></div>
          <div style=${styleMap({ color: `var(${this.states.color})` })}>
            ${EdgelessTextIcon}
          </div>
        </div>
      </edgeless-toolbar-button>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessTextToolButton = _classThis;
})();
export { EdgelessTextToolButton };
//# sourceMappingURL=text-tool-button.js.map