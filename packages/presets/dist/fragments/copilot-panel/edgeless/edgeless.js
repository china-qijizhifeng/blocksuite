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
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { FrameBlockModel } from '@blocksuite/blocks';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FastImage2ImageServiceKind, Image2ImageServiceKind, Image2TextServiceKind, Text2ImageServiceKind, } from '../copilot-service/service-base.js';
import { getSurfaceElementFromEditor, stopPropagation, } from '../utils/selection-utils.js';
let CopilotEdgelessPanel = (() => {
    let _classDecorators = [customElement('copilot-edgeless-panel')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _logic_decorators;
    let _logic_initializers = [];
    let _logic_extraInitializers = [];
    var CopilotEdgelessPanel = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _logic_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _logic_decorators, { kind: "accessor", name: "logic", static: false, private: false, access: { has: obj => "logic" in obj, get: obj => obj.logic, set: (obj, value) => { obj.logic = value; } }, metadata: _metadata }, _logic_initializers, _logic_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            CopilotEdgelessPanel = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css ``; }
        #logic_accessor_storage = __runInitializers(this, _logic_initializers, void 0);
        get logic() { return this.#logic_accessor_storage; }
        set logic(value) { this.#logic_accessor_storage = value; }
        get host() {
            return this.logic.getHost();
        }
        render() {
            const frames = getSurfaceElementFromEditor(this.host).model.children.filter(v => v instanceof FrameBlockModel);
            const changeFromFrame = (e) => {
                this.logic.edgeless.fromFrame = e.target.value;
            };
            const toggleAutoGen = () => {
                this.logic.edgeless.toggleAutoGen();
                this.requestUpdate();
            };
            return html `
      <div class="copilot-box">
        <div
          class="copilot-panel-action-button"
          @click="${this.logic.edgeless.makeItReal}"
        >
          Make It Real
        </div>
        <div class="copilot-panel-action-description">
          Select some shapes and text to generate html
        </div>
        <div style="display:flex;gap: 8px;flex-direction: column">
          <div
            style="font-size: 12px;color:var(--affine-text-secondary-color);"
          >
            service:
          </div>
          <vendor-service-select
            .featureKey="${'make it real'}"
            .service="${Image2TextServiceKind}"
          ></vendor-service-select>
        </div>
      </div>
      <div class="copilot-box">
        <div
          class="copilot-panel-action-button"
          @click="${this.logic.edgeless.createImage}"
        >
          Create Image
        </div>
        <input
          id="copilot-panel-create-image-prompt"
          class="copilot-panel-action-prompt"
          type="text"
          @keydown="${stopPropagation}"
          placeholder="Prompt"
        />
        <div class="copilot-panel-action-description">
          Type prompt to create an image.
        </div>
        <div style="display:flex;gap: 8px;flex-direction: column">
          <div
            style="font-size: 12px;color:var(--affine-text-secondary-color);"
          >
            service:
          </div>
          <vendor-service-select
            .featureKey="${'text to image'}"
            .service="${Text2ImageServiceKind}"
          ></vendor-service-select>
        </div>
      </div>
      <div class="copilot-box">
        <div
          class="copilot-panel-action-button"
          @click="${this.logic.edgeless.editImage}"
        >
          Edit Image
        </div>
        <input
          id="copilot-panel-edit-image-prompt"
          class="copilot-panel-action-prompt"
          type="text"
          @keydown="${stopPropagation}"
          placeholder="Prompt"
        />
        <div class="copilot-panel-action-description">
          Select some shapes and type prompt to edit them.
        </div>
        <div style="display:flex;gap: 8px;flex-direction: column">
          <div
            style="font-size: 12px;color:var(--affine-text-secondary-color);"
          >
            service:
          </div>
          <vendor-service-select
            .featureKey="${'edit image'}"
            .service="${Image2ImageServiceKind}"
          ></vendor-service-select>
        </div>
      </div>
      <div class="copilot-box">
        <div
          class="copilot-panel-action-button"
          @click="${this.logic.edgeless.htmlBlockDemo}"
        >
          HTML Block Test
        </div>
        <div class="copilot-panel-action-description">
          Generate a html block
        </div>
      </div>
      <div class="copilot-box">
        <div @click="${toggleAutoGen}" class="copilot-panel-action-button">
          ${this.logic.edgeless.autoGen
                ? 'Stop auto gen image'
                : 'Start auto gen image'}
        </div>
        <div class="copilot-panel-action-description">
          <div>
            Based on the shapes in frame
            <select
              .value="${this.logic.edgeless.fromFrame}"
              @change="${changeFromFrame}"
            >
              <option value="">None</option>
              ${frames.map(v => {
                return html ` <option .value="${v.id}">
                  ${v.title.toString()}
                </option>`;
            })}
            </select>
          </div>
          <div>Generate images to all connected frames</div>
        </div>
        <div style="display:flex;gap: 8px;flex-direction: column">
          <div
            style="font-size: 12px;color:var(--affine-text-secondary-color);"
          >
            service:
          </div>
          <vendor-service-select
            .featureKey="${'real time image to image'}"
            .service="${FastImage2ImageServiceKind}"
          ></vendor-service-select>
        </div>
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _logic_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return CopilotEdgelessPanel = _classThis;
})();
export { CopilotEdgelessPanel };
//# sourceMappingURL=edgeless.js.map