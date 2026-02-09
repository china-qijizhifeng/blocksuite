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
import './filter-group.js';
import './filter-root.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createPopup } from '../../../../_common/components/index.js';
let AdvancedFilterModal = (() => {
    let _classDecorators = [customElement('advanced-filter-modal')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _isRoot_decorators;
    let _isRoot_initializers = [];
    let _isRoot_extraInitializers = [];
    let _data_decorators;
    let _data_initializers = [];
    let _data_extraInitializers = [];
    let _vars_decorators;
    let _vars_initializers = [];
    let _vars_extraInitializers = [];
    let _setData_decorators;
    let _setData_initializers = [];
    let _setData_extraInitializers = [];
    let _onDelete_decorators;
    let _onDelete_initializers = [];
    let _onDelete_extraInitializers = [];
    let _onBack_decorators;
    let _onBack_initializers = [];
    let _onBack_extraInitializers = [];
    var AdvancedFilterModal = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _isRoot_decorators = [property({ attribute: false })];
            _data_decorators = [property({ attribute: false })];
            _vars_decorators = [property({ attribute: false })];
            _setData_decorators = [property({ attribute: false })];
            _onDelete_decorators = [property({ attribute: false })];
            _onBack_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _isRoot_decorators, { kind: "accessor", name: "isRoot", static: false, private: false, access: { has: obj => "isRoot" in obj, get: obj => obj.isRoot, set: (obj, value) => { obj.isRoot = value; } }, metadata: _metadata }, _isRoot_initializers, _isRoot_extraInitializers);
            __esDecorate(this, null, _data_decorators, { kind: "accessor", name: "data", static: false, private: false, access: { has: obj => "data" in obj, get: obj => obj.data, set: (obj, value) => { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
            __esDecorate(this, null, _vars_decorators, { kind: "accessor", name: "vars", static: false, private: false, access: { has: obj => "vars" in obj, get: obj => obj.vars, set: (obj, value) => { obj.vars = value; } }, metadata: _metadata }, _vars_initializers, _vars_extraInitializers);
            __esDecorate(this, null, _setData_decorators, { kind: "accessor", name: "setData", static: false, private: false, access: { has: obj => "setData" in obj, get: obj => obj.setData, set: (obj, value) => { obj.setData = value; } }, metadata: _metadata }, _setData_initializers, _setData_extraInitializers);
            __esDecorate(this, null, _onDelete_decorators, { kind: "accessor", name: "onDelete", static: false, private: false, access: { has: obj => "onDelete" in obj, get: obj => obj.onDelete, set: (obj, value) => { obj.onDelete = value; } }, metadata: _metadata }, _onDelete_initializers, _onDelete_extraInitializers);
            __esDecorate(this, null, _onBack_decorators, { kind: "accessor", name: "onBack", static: false, private: false, access: { has: obj => "onBack" in obj, get: obj => obj.onBack, set: (obj, value) => { obj.onBack = value; } }, metadata: _metadata }, _onBack_initializers, _onBack_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AdvancedFilterModal = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    advanced-filter-modal {
      background-color: var(--affine-background-overlay-panel-color);
      position: absolute;
      border-radius: 8px;
      box-shadow: var(--affine-shadow-2);
      min-width: 500px;
    }

    .filter-modal-bottom {
      border-top: 1px solid var(--affine-border-color);
      padding: 8px;
    }

    .filter-modal-button {
      padding: 8px 12px;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      line-height: 22px;
      border-radius: 4px;
      cursor: pointer;
      color: var(--affine-text-secondary-color);
    }

    .filter-modal-button svg {
      fill: var(--affine-text-secondary-color);
      color: var(--affine-text-secondary-color);
      width: 20px;
      height: 20px;
    }

    .filter-modal-button:hover {
      background-color: var(--affine-hover-color);
      color: var(--affine-text-primary-color);
    }
    .filter-modal-button:hover svg {
      fill: var(--affine-text-primary-color);
      color: var(--affine-text-primary-color);
    }

    .filter-delete-button:hover {
      background-color: var(--affine-background-error-color);
      color: var(--affine-error-color);
    }

    .filter-exactly-hover-container {
      transition: background-color 0.2s ease-in-out;
    }

    .filter-exactly-hover-background {
      background-color: var(--affine-hover-color);
    }
  `; }
        #isRoot_accessor_storage = __runInitializers(this, _isRoot_initializers, false);
        get isRoot() { return this.#isRoot_accessor_storage; }
        set isRoot(value) { this.#isRoot_accessor_storage = value; }
        #data_accessor_storage = (__runInitializers(this, _isRoot_extraInitializers), __runInitializers(this, _data_initializers, void 0));
        get data() { return this.#data_accessor_storage; }
        set data(value) { this.#data_accessor_storage = value; }
        #vars_accessor_storage = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _vars_initializers, void 0));
        get vars() { return this.#vars_accessor_storage; }
        set vars(value) { this.#vars_accessor_storage = value; }
        #setData_accessor_storage = (__runInitializers(this, _vars_extraInitializers), __runInitializers(this, _setData_initializers, void 0));
        get setData() { return this.#setData_accessor_storage; }
        set setData(value) { this.#setData_accessor_storage = value; }
        #onDelete_accessor_storage = (__runInitializers(this, _setData_extraInitializers), __runInitializers(this, _onDelete_initializers, void 0));
        get onDelete() { return this.#onDelete_accessor_storage; }
        set onDelete(value) { this.#onDelete_accessor_storage = value; }
        #onBack_accessor_storage = (__runInitializers(this, _onDelete_extraInitializers), __runInitializers(this, _onBack_initializers, void 0));
        get onBack() { return this.#onBack_accessor_storage; }
        set onBack(value) { this.#onBack_accessor_storage = value; }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.addFromEvent(this, 'mouseover', e => {
                let current = e.target;
                while (current && current !== this) {
                    if (current.classList.contains('filter-exactly-hover-container')) {
                        current.classList.add('filter-exactly-hover-background');
                        break;
                    }
                    current = current.parentElement;
                }
            });
            this.disposables.addFromEvent(this, 'mouseout', e => {
                let current = e.target;
                while (current && current !== this) {
                    if (current.classList.contains('filter-exactly-hover-container')) {
                        current.classList.remove('filter-exactly-hover-background');
                        break;
                    }
                    current = current.parentElement;
                }
            });
        }
        render() {
            return html `
      <div class="filter-modal-container">
        ${this.isRoot
                ? html ` <filter-root-view
              .onBack=${this.onBack}
              .vars="${this.vars}"
              .data="${this.data}"
              .setData="${this.setData}"
            ></filter-root-view>`
                : html ` <filter-group-view
              .vars="${this.vars}"
              .data="${this.data}"
              .setData="${this.setData}"
            ></filter-group-view>`}
      </div>
      <div class="filter-modal-bottom">
        <div
          @click=${this.onDelete}
          class="filter-modal-button filter-delete-button"
        >
          Delete
        </div>
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _onBack_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AdvancedFilterModal = _classThis;
})();
export { AdvancedFilterModal };
export const popFilterModal = (target, props) => {
    const filter = new AdvancedFilterModal();
    filter.vars = props.vars;
    filter.data = props.value;
    filter.isRoot = props.isRoot;
    filter.onDelete = () => {
        props.onDelete();
        close();
    };
    filter.onBack = () => {
        props.onBack();
        close();
    };
    filter.setData = group => {
        props.onChange(group);
        filter.data = group;
    };
    const close = createPopup(target, filter);
};
//# sourceMappingURL=filter-modal.js.map