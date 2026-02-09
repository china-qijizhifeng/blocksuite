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
import '../common/slide-menu.js';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ConnectorCWithArrowIcon, ConnectorLWithArrowIcon, ConnectorXWithArrowIcon, } from '../../../../../_common/icons/index.js';
import { ConnectorMode } from '../../../../../surface-block/index.js';
import { EdgelessToolbarToolMixin } from '../mixins/tool.mixin.js';
function ConnectorModeButtonGroup(mode, setConnectorMode) {
    /**
     * There is little hacky on rendering tooltip.
     * We don't want either tooltip overlap the top button or tooltip on left.
     * So we put the lower button's tooltip as the first element of the button group container
     */
    return html `
    <div class="connector-mode-button-group">
      <edgeless-tool-icon-button
        .active=${mode === ConnectorMode.Curve}
        .activeMode=${'background'}
        .tooltip=${'Curve'}
        @click=${() => setConnectorMode({ mode: ConnectorMode.Curve })}
      >
        ${ConnectorCWithArrowIcon}
      </edgeless-tool-icon-button>
      <edgeless-tool-icon-button
        .active=${mode === ConnectorMode.Orthogonal}
        .activeMode=${'background'}
        .tooltip=${'Elbowed'}
        @click=${() => setConnectorMode({ mode: ConnectorMode.Orthogonal })}
      >
        ${ConnectorXWithArrowIcon}
      </edgeless-tool-icon-button>
      <edgeless-tool-icon-button
        .active=${mode === ConnectorMode.Straight}
        .activeMode=${'background'}
        .tooltip=${'Straight'}
        @click=${() => setConnectorMode({ mode: ConnectorMode.Straight })}
      >
        ${ConnectorLWithArrowIcon}
      </edgeless-tool-icon-button>
    </div>
  `;
}
let EdgelessConnectorMenu = (() => {
    let _classDecorators = [customElement('edgeless-connector-menu')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EdgelessToolbarToolMixin(LitElement);
    let _mode_decorators;
    let _mode_initializers = [];
    let _mode_extraInitializers = [];
    let _stroke_decorators;
    let _stroke_initializers = [];
    let _stroke_extraInitializers = [];
    let _strokeWidth_decorators;
    let _strokeWidth_initializers = [];
    let _strokeWidth_extraInitializers = [];
    let _onChange_decorators;
    let _onChange_initializers = [];
    let _onChange_extraInitializers = [];
    var EdgelessConnectorMenu = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _mode_decorators = [property({ attribute: false })];
            _stroke_decorators = [property({ attribute: false })];
            _strokeWidth_decorators = [property({ attribute: false })];
            _onChange_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _mode_decorators, { kind: "accessor", name: "mode", static: false, private: false, access: { has: obj => "mode" in obj, get: obj => obj.mode, set: (obj, value) => { obj.mode = value; } }, metadata: _metadata }, _mode_initializers, _mode_extraInitializers);
            __esDecorate(this, null, _stroke_decorators, { kind: "accessor", name: "stroke", static: false, private: false, access: { has: obj => "stroke" in obj, get: obj => obj.stroke, set: (obj, value) => { obj.stroke = value; } }, metadata: _metadata }, _stroke_initializers, _stroke_extraInitializers);
            __esDecorate(this, null, _strokeWidth_decorators, { kind: "accessor", name: "strokeWidth", static: false, private: false, access: { has: obj => "strokeWidth" in obj, get: obj => obj.strokeWidth, set: (obj, value) => { obj.strokeWidth = value; } }, metadata: _metadata }, _strokeWidth_initializers, _strokeWidth_extraInitializers);
            __esDecorate(this, null, _onChange_decorators, { kind: "accessor", name: "onChange", static: false, private: false, access: { has: obj => "onChange" in obj, get: obj => obj.onChange, set: (obj, value) => { obj.onChange = value; } }, metadata: _metadata }, _onChange_initializers, _onChange_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessConnectorMenu = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      position: absolute;
      display: flex;
      z-index: -1;
    }

    .connector-submenu-content {
      display: flex;
      height: 24px;
      align-items: center;
      justify-content: center;
    }

    .connector-mode-button-group {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 14px;
    }

    .connector-mode-button-group > edgeless-tool-icon-button svg {
      fill: var(--affine-icon-color);
    }

    .submenu-divider {
      width: 1px;
      height: 24px;
      margin: 0 16px;
      background-color: var(--affine-border-color);
      display: inline-block;
    }
  `; }
        #mode_accessor_storage;
        get mode() { return this.#mode_accessor_storage; }
        set mode(value) { this.#mode_accessor_storage = value; }
        #stroke_accessor_storage;
        get stroke() { return this.#stroke_accessor_storage; }
        set stroke(value) { this.#stroke_accessor_storage = value; }
        #strokeWidth_accessor_storage;
        get strokeWidth() { return this.#strokeWidth_accessor_storage; }
        set strokeWidth(value) { this.#strokeWidth_accessor_storage = value; }
        #onChange_accessor_storage;
        get onChange() { return this.#onChange_accessor_storage; }
        set onChange(value) { this.#onChange_accessor_storage = value; }
        render() {
            const { stroke, strokeWidth } = this;
            const connectorModeButtonGroup = ConnectorModeButtonGroup(this.mode, this.onChange);
            return html `
      <edgeless-slide-menu>
        <div class="connector-submenu-content">
          ${connectorModeButtonGroup}
          <div class="submenu-divider"></div>
          <edgeless-line-width-panel
            .selectedSize=${strokeWidth}
            @select=${(e) => this.onChange({ strokeWidth: e.detail })}
          >
          </edgeless-line-width-panel>
          <div class="submenu-divider"></div>
          <edgeless-one-row-color-panel
            .value=${stroke}
            @select=${(e) => this.onChange({ stroke: e.detail })}
          ></edgeless-one-row-color-panel>
        </div>
      </edgeless-slide-menu>
    `;
        }
        constructor() {
            super(...arguments);
            this.type = 'connector';
            this.#mode_accessor_storage = __runInitializers(this, _mode_initializers, void 0);
            this.#stroke_accessor_storage = (__runInitializers(this, _mode_extraInitializers), __runInitializers(this, _stroke_initializers, void 0));
            this.#strokeWidth_accessor_storage = (__runInitializers(this, _stroke_extraInitializers), __runInitializers(this, _strokeWidth_initializers, void 0));
            this.#onChange_accessor_storage = (__runInitializers(this, _strokeWidth_extraInitializers), __runInitializers(this, _onChange_initializers, void 0));
            __runInitializers(this, _onChange_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessConnectorMenu = _classThis;
})();
export { EdgelessConnectorMenu };
//# sourceMappingURL=connector-menu.js.map