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
import { css, html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
let ImageBlockEdgelessComponent = (() => {
    let _classDecorators = [customElement('affine-edgeless-image')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _url_decorators;
    let _url_initializers = [];
    let _url_extraInitializers = [];
    let _resizeImg_decorators;
    let _resizeImg_initializers = [];
    let _resizeImg_extraInitializers = [];
    var ImageBlockEdgelessComponent = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _url_decorators = [property({ attribute: false })];
            _resizeImg_decorators = [query('.resizable-img')];
            __esDecorate(this, null, _url_decorators, { kind: "accessor", name: "url", static: false, private: false, access: { has: obj => "url" in obj, get: obj => obj.url, set: (obj, value) => { obj.url = value; } }, metadata: _metadata }, _url_initializers, _url_extraInitializers);
            __esDecorate(this, null, _resizeImg_decorators, { kind: "accessor", name: "resizeImg", static: false, private: false, access: { has: obj => "resizeImg" in obj, get: obj => obj.resizeImg, set: (obj, value) => { obj.resizeImg = value; } }, metadata: _metadata }, _resizeImg_initializers, _resizeImg_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ImageBlockEdgelessComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    affine-edgeless-image .resizable-img,
    affine-edgeless-image .resizable-img img {
      width: 100%;
      height: 100%;
    }
  `; }
        #url_accessor_storage = __runInitializers(this, _url_initializers, undefined);
        get url() { return this.#url_accessor_storage; }
        set url(value) { this.#url_accessor_storage = value; }
        #resizeImg_accessor_storage = (__runInitializers(this, _url_extraInitializers), __runInitializers(this, _resizeImg_initializers, null));
        get resizeImg() { return this.#resizeImg_accessor_storage; }
        set resizeImg(value) { this.#resizeImg_accessor_storage = value; }
        _handleError(error) {
            this.dispatchEvent(new CustomEvent('error', { detail: error }));
        }
        render() {
            return html `<div class="resizable-img">
      <img
        class="drag-target"
        src=${this.url ?? ''}
        draggable="false"
        @error=${this._handleError}
      />
    </div>`;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _resizeImg_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ImageBlockEdgelessComponent = _classThis;
})();
export { ImageBlockEdgelessComponent };
//# sourceMappingURL=edgeless-image-block.js.map