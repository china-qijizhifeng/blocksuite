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
import { property } from 'lit/decorators.js';
let WidgetBase = (() => {
    let _classSuper = WithDisposable(ShadowlessElement);
    let _view_decorators;
    let _view_initializers = [];
    let _view_extraInitializers = [];
    let _viewMethods_decorators;
    let _viewMethods_initializers = [];
    let _viewMethods_extraInitializers = [];
    let _viewSource_decorators;
    let _viewSource_initializers = [];
    let _viewSource_extraInitializers = [];
    let _dataSource_decorators;
    let _dataSource_initializers = [];
    let _dataSource_extraInitializers = [];
    return class WidgetBase extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _view_decorators = [property({ attribute: false })];
            _viewMethods_decorators = [property({ attribute: false })];
            _viewSource_decorators = [property({ attribute: false })];
            _dataSource_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(this, null, _viewMethods_decorators, { kind: "accessor", name: "viewMethods", static: false, private: false, access: { has: obj => "viewMethods" in obj, get: obj => obj.viewMethods, set: (obj, value) => { obj.viewMethods = value; } }, metadata: _metadata }, _viewMethods_initializers, _viewMethods_extraInitializers);
            __esDecorate(this, null, _viewSource_decorators, { kind: "accessor", name: "viewSource", static: false, private: false, access: { has: obj => "viewSource" in obj, get: obj => obj.viewSource, set: (obj, value) => { obj.viewSource = value; } }, metadata: _metadata }, _viewSource_initializers, _viewSource_extraInitializers);
            __esDecorate(this, null, _dataSource_decorators, { kind: "accessor", name: "dataSource", static: false, private: false, access: { has: obj => "dataSource" in obj, get: obj => obj.dataSource, set: (obj, value) => { obj.dataSource = value; } }, metadata: _metadata }, _dataSource_initializers, _dataSource_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #view_accessor_storage = __runInitializers(this, _view_initializers, void 0);
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        #viewMethods_accessor_storage = (__runInitializers(this, _view_extraInitializers), __runInitializers(this, _viewMethods_initializers, void 0));
        get viewMethods() { return this.#viewMethods_accessor_storage; }
        set viewMethods(value) { this.#viewMethods_accessor_storage = value; }
        #viewSource_accessor_storage = (__runInitializers(this, _viewMethods_extraInitializers), __runInitializers(this, _viewSource_initializers, void 0));
        get viewSource() { return this.#viewSource_accessor_storage; }
        set viewSource(value) { this.#viewSource_accessor_storage = value; }
        #dataSource_accessor_storage = (__runInitializers(this, _viewSource_extraInitializers), __runInitializers(this, _dataSource_initializers, void 0));
        get dataSource() { return this.#dataSource_accessor_storage; }
        set dataSource(value) { this.#dataSource_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _dataSource_extraInitializers);
        }
    };
})();
export { WidgetBase };
//# sourceMappingURL=widget-base.js.map