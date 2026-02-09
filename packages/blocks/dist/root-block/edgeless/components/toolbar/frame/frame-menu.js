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
import { repeat } from 'lit/directives/repeat.js';
import { EdgelessToolbarToolMixin } from '../mixins/tool.mixin.js';
import { FrameConfig } from './config.js';
import { createFrame } from './service.js';
let EdgelessFrameMenu = (() => {
    let _classDecorators = [customElement('edgeless-frame-menu')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EdgelessToolbarToolMixin(LitElement);
    var EdgelessFrameMenu = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.type = 'frame';
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessFrameMenu = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      position: absolute;
      display: flex;
      z-index: -1;
    }
    .menu-content {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
    }

    .frame-add-button {
      width: 40px;
      height: 24px;
      border-radius: 4px;
      border: 1px solid var(--affine-border-color);
      color: var(--affine-text-primary-color);
      line-height: 20px;
      font-weight: 400;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      position: relative;
    }

    .frame-add-button::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      border-radius: 3px;
      background: transparent;
      transition: background-color 0.23s ease;
      pointer-events: none;
    }
    .frame-add-button:hover::before {
      background: var(--affine-hover-color);
    }

    .custom {
      width: 60px;
      background: var(--affine-hover-color);
    }

    .divider {
      width: 1px;
      height: 20px;
      background: var(--affine-border-color);
      transform: scaleX(0.5);
    }
  `; }
        render() {
            const { edgeless } = this;
            return html `
      <edgeless-slide-menu .showNext=${false}>
        <div class="menu-content">
          <div class="frame-add-button custom">Custom</div>
          <div class="divider"></div>
          ${repeat(FrameConfig, item => item.name, (item, index) => html `
              <div
                @click=${() => createFrame(edgeless, item.wh)}
                class="frame-add-button ${index}"
                data-name="${item.name}"
                data-w="${item.wh[0]}"
                data-h="${item.wh[1]}"
              >
                ${item.name}
              </div>
            `)}
        </div>
      </edgeless-slide-menu>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessFrameMenu = _classThis;
})();
export { EdgelessFrameMenu };
//# sourceMappingURL=frame-menu.js.map