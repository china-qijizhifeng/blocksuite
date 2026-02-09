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
import { html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { toast } from '../../toast.js';
import { embedCardModalStyles } from './styles.js';
let EmbedCardEditModal = (() => {
    let _classDecorators = [customElement('embed-card-edit-modal')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let __titleInputValue_decorators;
    let __titleInputValue_initializers = [];
    let __titleInputValue_extraInitializers = [];
    let _model_decorators;
    let _model_initializers = [];
    let _model_extraInitializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _titleInput_decorators;
    let _titleInput_initializers = [];
    let _titleInput_extraInitializers = [];
    let _descInput_decorators;
    let _descInput_initializers = [];
    let _descInput_extraInitializers = [];
    var EmbedCardEditModal = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __titleInputValue_decorators = [state()];
            _model_decorators = [property({ attribute: false })];
            _host_decorators = [property({ attribute: false })];
            _titleInput_decorators = [query('.embed-card-modal-input.title')];
            _descInput_decorators = [query('.embed-card-modal-input.description')];
            __esDecorate(this, null, __titleInputValue_decorators, { kind: "accessor", name: "_titleInputValue", static: false, private: false, access: { has: obj => "_titleInputValue" in obj, get: obj => obj._titleInputValue, set: (obj, value) => { obj._titleInputValue = value; } }, metadata: _metadata }, __titleInputValue_initializers, __titleInputValue_extraInitializers);
            __esDecorate(this, null, _model_decorators, { kind: "accessor", name: "model", static: false, private: false, access: { has: obj => "model" in obj, get: obj => obj.model, set: (obj, value) => { obj.model = value; } }, metadata: _metadata }, _model_initializers, _model_extraInitializers);
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _titleInput_decorators, { kind: "accessor", name: "titleInput", static: false, private: false, access: { has: obj => "titleInput" in obj, get: obj => obj.titleInput, set: (obj, value) => { obj.titleInput = value; } }, metadata: _metadata }, _titleInput_initializers, _titleInput_extraInitializers);
            __esDecorate(this, null, _descInput_decorators, { kind: "accessor", name: "descInput", static: false, private: false, access: { has: obj => "descInput" in obj, get: obj => obj.descInput, set: (obj, value) => { obj.descInput = value; } }, metadata: _metadata }, _descInput_initializers, _descInput_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EmbedCardEditModal = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = embedCardModalStyles; }
        #_titleInputValue_accessor_storage = __runInitializers(this, __titleInputValue_initializers, '');
        get _titleInputValue() { return this.#_titleInputValue_accessor_storage; }
        set _titleInputValue(value) { this.#_titleInputValue_accessor_storage = value; }
        #model_accessor_storage = (__runInitializers(this, __titleInputValue_extraInitializers), __runInitializers(this, _model_initializers, void 0));
        get model() { return this.#model_accessor_storage; }
        set model(value) { this.#model_accessor_storage = value; }
        #host_accessor_storage = (__runInitializers(this, _model_extraInitializers), __runInitializers(this, _host_initializers, void 0));
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #titleInput_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _titleInput_initializers, void 0));
        get titleInput() { return this.#titleInput_accessor_storage; }
        set titleInput(value) { this.#titleInput_accessor_storage = value; }
        #descInput_accessor_storage = (__runInitializers(this, _titleInput_extraInitializers), __runInitializers(this, _descInput_initializers, void 0));
        get descInput() { return this.#descInput_accessor_storage; }
        set descInput(value) { this.#descInput_accessor_storage = value; }
        _handleInput(e) {
            const target = e.target;
            this._titleInputValue = target.value;
        }
        _onDocumentKeydown(e) {
            e.stopPropagation();
            if (e.key === 'Enter' && !e.isComposing) {
                this._onSave();
            }
            if (e.key === 'Escape') {
                this.remove();
            }
        }
        _onSave() {
            const title = this.titleInput.value;
            if (title.length === 0) {
                toast(this.host, 'Link title can not be empty');
                return;
            }
            this.model.doc.updateBlock(this.model, {
                title,
                description: this.descInput.value,
            });
            this.remove();
        }
        connectedCallback() {
            super.connectedCallback();
            this.updateComplete
                .then(() => {
                this.titleInput.focus();
                this.titleInput.setSelectionRange(0, this.titleInput.value.length);
            })
                .catch(console.error);
            this.disposables.addFromEvent(this, 'keydown', this._onDocumentKeydown);
            this._titleInputValue = this.model.title ?? '';
        }
        render() {
            return html `
      <div class="embed-card-modal">
        <div class="embed-card-modal-mask" @click=${() => this.remove()}></div>
        <div class="embed-card-modal-wrapper">
          <div class="embed-card-modal-title">Edit Link</div>

          <div class="embed-card-modal-content">
            <input
              class="embed-card-modal-input title"
              type="text"
              placeholder="Title"
              value=${this._titleInputValue}
              @input=${this._handleInput}
              tabindex="0"
            />

            <textarea
              class="embed-card-modal-input description"
              placeholder="Description"
              .value=${this.model.description ?? ''}
              tabindex="0"
            ></textarea>
          </div>

          <div class="embed-card-modal-action">
            <div
              class="embed-card-modal-button cancel"
              tabindex="0"
              @click=${() => this.remove()}
            >
              Cancel
            </div>

            <div
              class=${classMap({
                'embed-card-modal-button': true,
                save: true,
                disabled: this._titleInputValue.length === 0,
            })}
              tabindex="0"
              @click=${() => this._onSave()}
            >
              Save
            </div>
          </div>
        </div>
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _descInput_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EmbedCardEditModal = _classThis;
})();
export { EmbedCardEditModal };
export function toggleEmbedCardEditModal(host, embedCardModel) {
    host.selection.clear();
    const embedCardEditModal = new EmbedCardEditModal();
    embedCardEditModal.model = embedCardModel;
    embedCardEditModal.host = host;
    document.body.append(embedCardEditModal);
}
//# sourceMappingURL=embed-card-edit-modal.js.map