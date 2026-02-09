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
import { BlockElement } from '@blocksuite/block-std';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import { DatabaseTableViewClose, DatabaseTableViewIcon, } from '../../data-view/common/icons/index.js';
import { fullScreenStyles } from './styles.js';
let DatabaseTableViewFullScreen = (() => {
    let _classDecorators = [customElement('affine-database-table-view-full-screen')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BlockElement;
    let _abortController_decorators;
    let _abortController_initializers = [];
    let _abortController_extraInitializers = [];
    var DatabaseTableViewFullScreen = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#abortController_accessor_storage = __runInitializers(this, _abortController_initializers, void 0);
            this.close = (__runInitializers(this, _abortController_extraInitializers), () => {
                this.abortController.abort();
            });
            this._renderView = () => {
                /* eslint-disable lit/binding-positions, lit/no-invalid-html */
                return html `
      <affine-database
        class="affine-block-element"
        .modalMode=${true}
        .host=${this.host}
        .model=${this.model}
      ></affine-database>
    `;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _abortController_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _abortController_decorators, { kind: "accessor", name: "abortController", static: false, private: false, access: { has: obj => "abortController" in obj, get: obj => obj.abortController, set: (obj, value) => { obj.abortController = value; } }, metadata: _metadata }, _abortController_initializers, _abortController_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DatabaseTableViewFullScreen = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = fullScreenStyles; }
        #abortController_accessor_storage;
        get abortController() { return this.#abortController_accessor_storage; }
        set abortController(value) { this.#abortController_accessor_storage = value; }
        renderBlock() {
            return html `<div class="table-view-full-modal-overlay">
      <div class="table-view-full-modal-container">
        <div class="table-view-full-header">
          <div class="titles">
            <span class="title">${this.doc.meta?.title ?? ''}</span>
            <span class="separator">/</span>
            <span class="title"
              >${DatabaseTableViewIcon}${this.model.title.toString()}</span
            >
          </div>
          <div class="close" @click=${this.close}>
            ${DatabaseTableViewClose}
          </div>
        </div>
        <div class="table-view-full-content">${this._renderView()}</div>
      </div>
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DatabaseTableViewFullScreen = _classThis;
})();
export { DatabaseTableViewFullScreen };
//# sourceMappingURL=table-full-screen-modal.js.map