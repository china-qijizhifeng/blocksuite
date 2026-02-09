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
import { requestConnectedFrame } from '../../../../_common/utils/event.js';
let EdgelessPortalBase = (() => {
    let _classSuper = WithDisposable(ShadowlessElement);
    let _index_decorators;
    let _index_initializers = [];
    let _index_extraInitializers = [];
    let _model_decorators;
    let _model_initializers = [];
    let _model_extraInitializers = [];
    let _surface_decorators;
    let _surface_initializers = [];
    let _surface_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _updatingSet_decorators;
    let _updatingSet_initializers = [];
    let _updatingSet_extraInitializers = [];
    let _concurrentUpdatingCount_decorators;
    let _concurrentUpdatingCount_initializers = [];
    let _concurrentUpdatingCount_extraInitializers = [];
    let _portalContainer_decorators;
    let _portalContainer_initializers = [];
    let _portalContainer_extraInitializers = [];
    return class EdgelessPortalBase extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _index_decorators = [property({ attribute: false })];
            _model_decorators = [property({ attribute: false })];
            _surface_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            _updatingSet_decorators = [property({ attribute: false })];
            _concurrentUpdatingCount_decorators = [property({ attribute: false })];
            _portalContainer_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _index_decorators, { kind: "accessor", name: "index", static: false, private: false, access: { has: obj => "index" in obj, get: obj => obj.index, set: (obj, value) => { obj.index = value; } }, metadata: _metadata }, _index_initializers, _index_extraInitializers);
            __esDecorate(this, null, _model_decorators, { kind: "accessor", name: "model", static: false, private: false, access: { has: obj => "model" in obj, get: obj => obj.model, set: (obj, value) => { obj.model = value; } }, metadata: _metadata }, _model_initializers, _model_extraInitializers);
            __esDecorate(this, null, _surface_decorators, { kind: "accessor", name: "surface", static: false, private: false, access: { has: obj => "surface" in obj, get: obj => obj.surface, set: (obj, value) => { obj.surface = value; } }, metadata: _metadata }, _surface_initializers, _surface_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _updatingSet_decorators, { kind: "accessor", name: "updatingSet", static: false, private: false, access: { has: obj => "updatingSet" in obj, get: obj => obj.updatingSet, set: (obj, value) => { obj.updatingSet = value; } }, metadata: _metadata }, _updatingSet_initializers, _updatingSet_extraInitializers);
            __esDecorate(this, null, _concurrentUpdatingCount_decorators, { kind: "accessor", name: "concurrentUpdatingCount", static: false, private: false, access: { has: obj => "concurrentUpdatingCount" in obj, get: obj => obj.concurrentUpdatingCount, set: (obj, value) => { obj.concurrentUpdatingCount = value; } }, metadata: _metadata }, _concurrentUpdatingCount_initializers, _concurrentUpdatingCount_extraInitializers);
            __esDecorate(this, null, _portalContainer_decorators, { kind: "accessor", name: "portalContainer", static: false, private: false, access: { has: obj => "portalContainer" in obj, get: obj => obj.portalContainer, set: (obj, value) => { obj.portalContainer = value; } }, metadata: _metadata }, _portalContainer_initializers, _portalContainer_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #index_accessor_storage = __runInitializers(this, _index_initializers, void 0);
        get index() { return this.#index_accessor_storage; }
        set index(value) { this.#index_accessor_storage = value; }
        #model_accessor_storage = (__runInitializers(this, _index_extraInitializers), __runInitializers(this, _model_initializers, void 0));
        get model() { return this.#model_accessor_storage; }
        set model(value) { this.#model_accessor_storage = value; }
        #surface_accessor_storage = (__runInitializers(this, _model_extraInitializers), __runInitializers(this, _surface_initializers, void 0));
        get surface() { return this.#surface_accessor_storage; }
        set surface(value) { this.#surface_accessor_storage = value; }
        #edgeless_accessor_storage = (__runInitializers(this, _surface_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #updatingSet_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _updatingSet_initializers, void 0));
        get updatingSet() { return this.#updatingSet_accessor_storage; }
        set updatingSet(value) { this.#updatingSet_accessor_storage = value; }
        #concurrentUpdatingCount_accessor_storage = (__runInitializers(this, _updatingSet_extraInitializers), __runInitializers(this, _concurrentUpdatingCount_initializers, void 0));
        get concurrentUpdatingCount() { return this.#concurrentUpdatingCount_accessor_storage; }
        set concurrentUpdatingCount(value) { this.#concurrentUpdatingCount_accessor_storage = value; }
        #portalContainer_accessor_storage = (__runInitializers(this, _concurrentUpdatingCount_extraInitializers), __runInitializers(this, _portalContainer_initializers, void 0));
        get portalContainer() { return this.#portalContainer_accessor_storage; }
        set portalContainer(value) { this.#portalContainer_accessor_storage = value; }
        renderModel(model) {
            return this.surface.host.renderModel(model);
        }
        scheduleUpdate() {
            const { promise, resolve } = Promise.withResolvers();
            const detect = () => {
                if (this.updatingSet.size < this.concurrentUpdatingCount) {
                    this.updatingSet.add(this.model.id);
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    super.scheduleUpdate();
                    requestConnectedFrame(() => {
                        this.updatingSet.delete(this.model.id);
                    }, this);
                    resolve();
                }
                else {
                    requestConnectedFrame(detect, this);
                }
            };
            detect();
            return promise;
        }
        connectedCallback() {
            super.connectedCallback();
            this._disposables.add(this.model.propsUpdated.on(() => {
                if (this.hasUpdated)
                    this.requestUpdate();
            }));
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _portalContainer_extraInitializers);
        }
    };
})();
export { EdgelessPortalBase };
//# sourceMappingURL=edgeless-portal-base.js.map