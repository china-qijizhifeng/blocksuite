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
import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { EdgelessImageIcon } from '../../../../../_common/icons/edgeless.js';
import { getImageFilesFromLocal } from '../../../../../_common/utils/filesys.js';
import { EdgelessToolbarToolMixin } from '../mixins/tool.mixin.js';
let EdgelessImageToolButton = (() => {
    let _classDecorators = [customElement('edgeless-image-tool-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EdgelessToolbarToolMixin(LitElement);
    let __imageLoading_decorators;
    let __imageLoading_initializers = [];
    let __imageLoading_extraInitializers = [];
    var EdgelessImageToolButton = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_imageLoading_accessor_storage = __runInitializers(this, __imageLoading_initializers, false);
            // There is no 'image' type, just use 'default' here, since image has no active state
            this.type = (__runInitializers(this, __imageLoading_extraInitializers), 'default');
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __imageLoading_decorators = [state()];
            __esDecorate(this, null, __imageLoading_decorators, { kind: "accessor", name: "_imageLoading", static: false, private: false, access: { has: obj => "_imageLoading" in obj, get: obj => obj._imageLoading, set: (obj, value) => { obj._imageLoading = value; } }, metadata: _metadata }, __imageLoading_initializers, __imageLoading_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessImageToolButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        #_imageLoading_accessor_storage;
        get _imageLoading() { return this.#_imageLoading_accessor_storage; }
        set _imageLoading(value) { this.#_imageLoading_accessor_storage = value; }
        async _addImages() {
            this._imageLoading = true;
            const imageFiles = await getImageFilesFromLocal();
            await this.edgeless.addImages(imageFiles);
            this._imageLoading = false;
        }
        render() {
            const { _imageLoading, _addImages } = this;
            return html `<edgeless-toolbar-button
      class="transform-button"
      .disabled=${_imageLoading}
      .activeMode=${'background'}
      .tooltip=${'Image'}
      .tooltipOffset=${12}
      @click=${_addImages}
    >
      ${EdgelessImageIcon}
    </edgeless-toolbar-button>`;
        }
    };
    return EdgelessImageToolButton = _classThis;
})();
export { EdgelessImageToolButton };
//# sourceMappingURL=image-tool-button.js.map