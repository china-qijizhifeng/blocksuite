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
import './open-ai.js';
import './fal.js';
import './llama2.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { nanoid } from '@blocksuite/store';
import { computePosition } from '@floating-ui/dom';
import { css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { stopPropagation } from '../utils/selection-utils.js';
import { copilotConfig } from './copilot-config.js';
import { falVendor } from './fal.js';
import { llama2Vendor } from './llama2.js';
import { openaiVendor } from './open-ai.js';
import { allKindService, } from './service-base.js';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const allVendor = [openaiVendor, falVendor, llama2Vendor];
let CreateNewService = (() => {
    let _classDecorators = [customElement('create-new-service')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _onSave_decorators;
    let _onSave_initializers = [];
    let _onSave_extraInitializers = [];
    let _key_decorators;
    let _key_initializers = [];
    let _key_extraInitializers = [];
    let _name_decorators;
    let _name_initializers = [];
    let _name_extraInitializers = [];
    let _data_decorators;
    let _data_initializers = [];
    let _data_extraInitializers = [];
    var CreateNewService = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _type_decorators = [property({ attribute: false })];
            _onSave_decorators = [property({ attribute: false })];
            _key_decorators = [state()];
            _name_decorators = [state()];
            _data_decorators = [state()];
            __esDecorate(this, null, _type_decorators, { kind: "accessor", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
            __esDecorate(this, null, _onSave_decorators, { kind: "accessor", name: "onSave", static: false, private: false, access: { has: obj => "onSave" in obj, get: obj => obj.onSave, set: (obj, value) => { obj.onSave = value; } }, metadata: _metadata }, _onSave_initializers, _onSave_extraInitializers);
            __esDecorate(this, null, _key_decorators, { kind: "accessor", name: "key", static: false, private: false, access: { has: obj => "key" in obj, get: obj => obj.key, set: (obj, value) => { obj.key = value; } }, metadata: _metadata }, _key_initializers, _key_extraInitializers);
            __esDecorate(this, null, _name_decorators, { kind: "accessor", name: "name", static: false, private: false, access: { has: obj => "name" in obj, get: obj => obj.name, set: (obj, value) => { obj.name = value; } }, metadata: _metadata }, _name_initializers, _name_extraInitializers);
            __esDecorate(this, null, _data_decorators, { kind: "accessor", name: "data", static: false, private: false, access: { has: obj => "data" in obj, get: obj => obj.data, set: (obj, value) => { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            CreateNewService = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        get serviceKind() {
            return allKindService.find(v => v.type === this.type);
        }
        #type_accessor_storage = __runInitializers(this, _type_initializers, void 0);
        get type() { return this.#type_accessor_storage; }
        set type(value) { this.#type_accessor_storage = value; }
        #onSave_accessor_storage = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _onSave_initializers, void 0));
        get onSave() { return this.#onSave_accessor_storage; }
        set onSave(value) { this.#onSave_accessor_storage = value; }
        #key_accessor_storage = (__runInitializers(this, _onSave_extraInitializers), __runInitializers(this, _key_initializers, ''));
        get key() { return this.#key_accessor_storage; }
        set key(value) { this.#key_accessor_storage = value; }
        #name_accessor_storage = (__runInitializers(this, _key_extraInitializers), __runInitializers(this, _name_initializers, ''));
        get name() { return this.#name_accessor_storage; }
        set name(value) { this.#name_accessor_storage = value; }
        #data_accessor_storage = (__runInitializers(this, _name_extraInitializers), __runInitializers(this, _data_initializers, undefined));
        get data() { return this.#data_accessor_storage; }
        set data(value) { this.#data_accessor_storage = value; }
        render() {
            const list = this.list();
            if (!list) {
                requestAnimationFrame(() => {
                    this.remove();
                });
                return;
            }
            const current = allVendor.find(v => v.key === this.key);
            if (!current) {
                if (!list[0]) {
                    return html ` <div>no vendor</div>`;
                }
                this.changeKey(list[0].key);
                requestAnimationFrame(() => {
                    this.requestUpdate();
                });
                return;
            }
            return html `
      <div
        @click="${this.close}"
        style="position: fixed;left: 0;top: 0;width: 100vw;height: 100vh;background-color: rgba(0,0,0,0.5);display:flex;align-items:center;justify-content:center;"
      >
        <div
          @click="${stopPropagation}"
          style="display:flex;flex-direction: column;background-color: white;border-radius: 8px;padding: 24px;gap: 12px;"
        >
          <div>
            <select .value="${current.key}" @change="${this.changeKeyByEvent}">
              ${repeat(
            // @ts-ignore
            list, item => item.key, item => html ` <option value="${item.key}">${item.key}</option>`)}
            </select>
          </div>
          <div>
            <label>Name: </label>
            <input
              type="text"
              .value="${this.name}"
              @input="${this.changeName}"
            />
          </div>
          <div>
            ${current.renderConfigEditor(this.data, () => this.requestUpdate())}
          </div>
          <div>
            <button @click="${this.save}">保存</button>
          </div>
        </div>
      </div>
    `;
        }
        changeKeyByEvent(e) {
            const select = e.target;
            this.changeKey(select.value);
        }
        changeKey(key) {
            this.key = key;
            this.data = allVendor.find(v => v.key === key)?.initData();
        }
        changeName(e) {
            const input = e.target;
            this.name = input.value;
        }
        save() {
            if (!this.data) {
                return;
            }
            this.onSave({
                id: nanoid(),
                vendorKey: this.key,
                name: this.name,
                data: this.data,
            });
        }
        close() {
            this.remove();
        }
        list() {
            const set = new Set();
            allKindService
                .find(v => v.type === this.type)
                ?.implList.forEach(v => {
                set.add(v.vendor);
            });
            return [...set];
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _data_extraInitializers);
        }
    };
    return CreateNewService = _classThis;
})();
export { CreateNewService };
let VendorServiceSelect = (() => {
    let _classDecorators = [customElement('vendor-service-select')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _featureKey_decorators;
    let _featureKey_initializers = [];
    let _featureKey_extraInitializers = [];
    let _service_decorators;
    let _service_initializers = [];
    let _service_extraInitializers = [];
    var VendorServiceSelect = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _featureKey_decorators = [property({ attribute: false })];
            _service_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _featureKey_decorators, { kind: "accessor", name: "featureKey", static: false, private: false, access: { has: obj => "featureKey" in obj, get: obj => obj.featureKey, set: (obj, value) => { obj.featureKey = value; } }, metadata: _metadata }, _featureKey_initializers, _featureKey_extraInitializers);
            __esDecorate(this, null, _service_decorators, { kind: "accessor", name: "service", static: false, private: false, access: { has: obj => "service" in obj, get: obj => obj.service, set: (obj, value) => { obj.service = value; } }, metadata: _metadata }, _service_initializers, _service_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            VendorServiceSelect = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .vendor-service-select {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      padding: 2px 4px;
      font-size: 12px;
      color: white;
      width: max-content;
      cursor: pointer;
    }
  `; }
        #featureKey_accessor_storage = __runInitializers(this, _featureKey_initializers, void 0);
        get featureKey() { return this.#featureKey_accessor_storage; }
        set featureKey(value) { this.#featureKey_accessor_storage = value; }
        #service_accessor_storage = (__runInitializers(this, _featureKey_extraInitializers), __runInitializers(this, _service_initializers, void 0));
        get service() { return this.#service_accessor_storage; }
        set service(value) { this.#service_accessor_storage = value; }
        render() {
            const list = copilotConfig.getVendorsByService(this.service);
            if (!list) {
                return html ` <div style="font-size: 12px;color: red">no service</div>`;
            }
            const current = copilotConfig.getVendor(this.featureKey, this.service);
            if (!current) {
                return html ` <div style="font-size: 12px;color: red">no vendor</div>`;
            }
            const style = styleMap({
                border: '1px solid',
                borderColor: current.impl.vendor.color,
                color: current.impl.vendor.color,
            });
            return html `
      <div
        @click="${this.changeService}"
        class="vendor-service-select"
        style="${style}"
      >
        ${current.vendor.name} ${current.impl.vendor.key} ${current.impl.name}
      </div>
    `;
        }
        changeService(e) {
            const options = new VendorServiceOptions();
            options.featureKey = this.featureKey;
            options.service = this.service;
            options.close = () => {
                this.requestUpdate();
            };
            const target = e.target;
            document.body.append(options);
            computePosition(target, options)
                .then(pos => {
                options.style.left = `${pos.x}px`;
                options.style.top = `${pos.y}px`;
            })
                .catch(() => {
                options.remove();
            });
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _service_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return VendorServiceSelect = _classThis;
})();
export { VendorServiceSelect };
let VendorServiceOptions = (() => {
    let _classDecorators = [customElement('vendor-service-options')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _featureKey_decorators;
    let _featureKey_initializers = [];
    let _featureKey_extraInitializers = [];
    let _service_decorators;
    let _service_initializers = [];
    let _service_extraInitializers = [];
    let _close_decorators;
    let _close_initializers = [];
    let _close_extraInitializers = [];
    var VendorServiceOptions = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _featureKey_decorators = [property({ attribute: false })];
            _service_decorators = [property({ attribute: false })];
            _close_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _featureKey_decorators, { kind: "accessor", name: "featureKey", static: false, private: false, access: { has: obj => "featureKey" in obj, get: obj => obj.featureKey, set: (obj, value) => { obj.featureKey = value; } }, metadata: _metadata }, _featureKey_initializers, _featureKey_extraInitializers);
            __esDecorate(this, null, _service_decorators, { kind: "accessor", name: "service", static: false, private: false, access: { has: obj => "service" in obj, get: obj => obj.service, set: (obj, value) => { obj.service = value; } }, metadata: _metadata }, _service_initializers, _service_extraInitializers);
            __esDecorate(this, null, _close_decorators, { kind: "accessor", name: "close", static: false, private: false, access: { has: obj => "close" in obj, get: obj => obj.close, set: (obj, value) => { obj.close = value; } }, metadata: _metadata }, _close_initializers, _close_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            VendorServiceOptions = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    vendor-service-options {
      position: fixed;
      font-family: var(--affine-font-family);
    }

    .vendor-service-option {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      padding: 2px 4px;
      font-size: 12px;
      color: white;
      width: max-content;
      cursor: pointer;
    }
  `; }
        #featureKey_accessor_storage = __runInitializers(this, _featureKey_initializers, void 0);
        get featureKey() { return this.#featureKey_accessor_storage; }
        set featureKey(value) { this.#featureKey_accessor_storage = value; }
        #service_accessor_storage = (__runInitializers(this, _featureKey_extraInitializers), __runInitializers(this, _service_initializers, void 0));
        get service() { return this.#service_accessor_storage; }
        set service(value) { this.#service_accessor_storage = value; }
        #close_accessor_storage = (__runInitializers(this, _service_extraInitializers), __runInitializers(this, _close_initializers, void 0));
        get close() { return this.#close_accessor_storage; }
        set close(value) { this.#close_accessor_storage = value; }
        render() {
            const list = copilotConfig.getVendorsByService(this.service);
            return html `
      <div
        style="background-color: var(--affine-background-overlay-panel-color);padding: 12px;display:flex;flex-direction: column;gap: 8px;"
      >
        ${repeat(list, item => {
                const style = styleMap({
                    backgroundColor: item.impl.vendor.color,
                });
                const select = () => {
                    this.select(item.vendor, item.impl);
                };
                return html ` <div
            @click="${select}"
            class="vendor-service-option"
            style="${style}"
          >
            ${item.vendor.name} ${item.impl.vendor.key} ${item.impl.name}
          </div>`;
            })}
      </div>
    `;
        }
        select(vendor, impl) {
            copilotConfig.changeService(this.featureKey, this.service.type, vendor.id, impl.name);
            this.remove();
            this.close();
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _close_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return VendorServiceOptions = _classThis;
})();
export { VendorServiceOptions };
//# sourceMappingURL=index.js.map