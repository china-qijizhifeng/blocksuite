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
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { EdgelessEraserDarkIcon, EdgelessEraserLightIcon, } from '../../../../../_common/icons/index.js';
import { getTooltipWithShortcut } from '../../utils.js';
import { EdgelessToolbarToolMixin } from '../mixins/tool.mixin.js';
let EdgelessEraserToolButton = (() => {
    let _classDecorators = [customElement('edgeless-eraser-tool-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EdgelessToolbarToolMixin(LitElement);
    var EdgelessEraserToolButton = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.type = 'eraser';
            this.enableActiveBackground = true;
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessEraserToolButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      height: 100%;
      overflow-y: hidden;
    }
    .eraser-button {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      position: relative;
      width: 49px;
      height: 64px;
    }
    #edgeless-eraser-icon {
      transition: transform 0.3s ease-in-out;
      transform: translateY(8px);
    }
    .eraser-button:hover #edgeless-eraser-icon,
    .eraser-button.active #edgeless-eraser-icon {
      transform: translateY(0);
    }
  `; }
        firstUpdated() {
            this.disposables.add(this.edgeless.bindHotKey({
                Escape: () => {
                    if (this.edgelessTool.type === 'eraser') {
                        this.setEdgelessTool({ type: 'default' });
                    }
                },
            }, { global: true }));
        }
        render() {
            const type = this.edgelessTool?.type;
            const { theme } = this;
            const icon = theme === 'dark' ? EdgelessEraserDarkIcon : EdgelessEraserLightIcon;
            return html `
      <edgeless-toolbar-button
        class="edgeless-eraser-button"
        .tooltip=${getTooltipWithShortcut('Eraser', 'E')}
        .tooltipOffset=${4}
        .active=${type === 'eraser'}
        @click=${() => this.setEdgelessTool({ type: 'eraser' })}
      >
        <div class="eraser-button">${icon}</div>
      </edgeless-toolbar-button>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessEraserToolButton = _classThis;
})();
export { EdgelessEraserToolButton };
//# sourceMappingURL=eraser-tool-button.js.map