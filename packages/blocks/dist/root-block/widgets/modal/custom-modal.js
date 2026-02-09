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
import { css, html, LitElement, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';
import { repeat } from 'lit/directives/repeat.js';
let AffineCustomModal = (() => {
    let _classDecorators = [customElement('affine-custom-modal')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    var AffineCustomModal = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineCustomModal = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      z-index: calc(var(--affine-z-index-modal) + 3);
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
    }

    .modal-background {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      align-items: center;
      background-color: var(--affine-background-modal-color);
      justify-content: center;
      display: flex;
    }

    .modal-window {
      width: 70%;
      min-width: 500px;
      height: 80%;
      overflow-y: scroll;
      background-color: var(--affine-background-overlay-panel-color);
      border-radius: 12px;
      box-shadow: var(--affine-shadow-3);
      position: relative;
    }

    .modal-main {
      height: 100%;
    }

    .modal-footer {
      display: flex;
      justify-content: flex-end;
      gap: 20px;
      padding: 24px;
      position: absolute;
      box-sizing: border-box;
      bottom: 0;
      right: 0;
    }

    .modal-footer .button {
      align-items: center;
      background: var(--affine-white);
      border: 1px solid;
      border-color: var(--affine-border-color);
      border-radius: 8px;
      color: var(--affine-text-primary-color);
      cursor: pointer;
      display: inline-flex;
      font-size: var(--affine-font-sm);
      font-weight: 500;
      justify-content: center;
      outline: 0;
      padding: 12px 18px;
      touch-action: manipulation;
      transition: all 0.3s;
      user-select: none;
    }

    .modal-footer .primary {
      background: var(--affine-primary-color);
      border-color: var(--affine-black-10);
      box-shadow: var(--affine-button-inner-shadow);
      color: var(--affine-pure-white);
    }
  `; }
        close() {
            this.remove();
        }
        modalRef(modal) {
            if (modal)
                this.onOpen?.(modal);
        }
        render() {
            const { options } = this;
            return html `<div class="modal-background">
      <div class="modal-window">
        <div class="modal-main" ${ref(this.modalRef)}></div>
        <div class="modal-footer">
          ${options.footer
                ? repeat(options.footer, button => button.text, button => html `
                  <button
                    class="button ${button.type ?? ''}"
                    @click=${button.onClick}
                  >
                    ${button.text}
                  </button>
                `)
                : nothing}
        </div>
      </div>
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineCustomModal = _classThis;
})();
export { AffineCustomModal };
export function createCustomModal(options, container = document.body) {
    const modal = new AffineCustomModal();
    modal.onOpen = options.entry;
    modal.options = options;
    container.append(modal);
    return modal;
}
//# sourceMappingURL=custom-modal.js.map