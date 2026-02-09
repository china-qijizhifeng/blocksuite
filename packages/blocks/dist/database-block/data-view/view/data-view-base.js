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
let DataViewBase = (() => {
    let _classSuper = WithDisposable(ShadowlessElement);
    let _std_decorators;
    let _std_initializers = [];
    let _std_extraInitializers = [];
    let _headerWidget_decorators;
    let _headerWidget_initializers = [];
    let _headerWidget_extraInitializers = [];
    let _dataViewEle_decorators;
    let _dataViewEle_initializers = [];
    let _dataViewEle_extraInitializers = [];
    let _view_decorators;
    let _view_initializers = [];
    let _view_extraInitializers = [];
    let _viewSource_decorators;
    let _viewSource_initializers = [];
    let _viewSource_extraInitializers = [];
    let _dataSource_decorators;
    let _dataSource_initializers = [];
    let _dataSource_extraInitializers = [];
    let _bindHotkey_decorators;
    let _bindHotkey_initializers = [];
    let _bindHotkey_extraInitializers = [];
    let _handleEvent_decorators;
    let _handleEvent_initializers = [];
    let _handleEvent_extraInitializers = [];
    let _modalMode_decorators;
    let _modalMode_initializers = [];
    let _modalMode_extraInitializers = [];
    let _setSelection_decorators;
    let _setSelection_initializers = [];
    let _setSelection_extraInitializers = [];
    let _selectionUpdated_decorators;
    let _selectionUpdated_initializers = [];
    let _selectionUpdated_extraInitializers = [];
    let _onDrag_decorators;
    let _onDrag_initializers = [];
    let _onDrag_extraInitializers = [];
    let _getFlag_decorators;
    let _getFlag_initializers = [];
    let _getFlag_extraInitializers = [];
    return class DataViewBase extends _classSuper {
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _std_decorators = [property({ attribute: false })];
            _headerWidget_decorators = [property({ attribute: false })];
            _dataViewEle_decorators = [property({ attribute: false })];
            _view_decorators = [property({ attribute: false })];
            _viewSource_decorators = [property({ attribute: false })];
            _dataSource_decorators = [property({ attribute: false })];
            _bindHotkey_decorators = [property({ attribute: false })];
            _handleEvent_decorators = [property({ attribute: false })];
            _modalMode_decorators = [property({ attribute: false })];
            _setSelection_decorators = [property({ attribute: false })];
            _selectionUpdated_decorators = [property({ attribute: false })];
            _onDrag_decorators = [property({ attribute: false })];
            _getFlag_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _std_decorators, { kind: "accessor", name: "std", static: false, private: false, access: { has: obj => "std" in obj, get: obj => obj.std, set: (obj, value) => { obj.std = value; } }, metadata: _metadata }, _std_initializers, _std_extraInitializers);
            __esDecorate(this, null, _headerWidget_decorators, { kind: "accessor", name: "headerWidget", static: false, private: false, access: { has: obj => "headerWidget" in obj, get: obj => obj.headerWidget, set: (obj, value) => { obj.headerWidget = value; } }, metadata: _metadata }, _headerWidget_initializers, _headerWidget_extraInitializers);
            __esDecorate(this, null, _dataViewEle_decorators, { kind: "accessor", name: "dataViewEle", static: false, private: false, access: { has: obj => "dataViewEle" in obj, get: obj => obj.dataViewEle, set: (obj, value) => { obj.dataViewEle = value; } }, metadata: _metadata }, _dataViewEle_initializers, _dataViewEle_extraInitializers);
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(this, null, _viewSource_decorators, { kind: "accessor", name: "viewSource", static: false, private: false, access: { has: obj => "viewSource" in obj, get: obj => obj.viewSource, set: (obj, value) => { obj.viewSource = value; } }, metadata: _metadata }, _viewSource_initializers, _viewSource_extraInitializers);
            __esDecorate(this, null, _dataSource_decorators, { kind: "accessor", name: "dataSource", static: false, private: false, access: { has: obj => "dataSource" in obj, get: obj => obj.dataSource, set: (obj, value) => { obj.dataSource = value; } }, metadata: _metadata }, _dataSource_initializers, _dataSource_extraInitializers);
            __esDecorate(this, null, _bindHotkey_decorators, { kind: "accessor", name: "bindHotkey", static: false, private: false, access: { has: obj => "bindHotkey" in obj, get: obj => obj.bindHotkey, set: (obj, value) => { obj.bindHotkey = value; } }, metadata: _metadata }, _bindHotkey_initializers, _bindHotkey_extraInitializers);
            __esDecorate(this, null, _handleEvent_decorators, { kind: "accessor", name: "handleEvent", static: false, private: false, access: { has: obj => "handleEvent" in obj, get: obj => obj.handleEvent, set: (obj, value) => { obj.handleEvent = value; } }, metadata: _metadata }, _handleEvent_initializers, _handleEvent_extraInitializers);
            __esDecorate(this, null, _modalMode_decorators, { kind: "accessor", name: "modalMode", static: false, private: false, access: { has: obj => "modalMode" in obj, get: obj => obj.modalMode, set: (obj, value) => { obj.modalMode = value; } }, metadata: _metadata }, _modalMode_initializers, _modalMode_extraInitializers);
            __esDecorate(this, null, _setSelection_decorators, { kind: "accessor", name: "setSelection", static: false, private: false, access: { has: obj => "setSelection" in obj, get: obj => obj.setSelection, set: (obj, value) => { obj.setSelection = value; } }, metadata: _metadata }, _setSelection_initializers, _setSelection_extraInitializers);
            __esDecorate(this, null, _selectionUpdated_decorators, { kind: "accessor", name: "selectionUpdated", static: false, private: false, access: { has: obj => "selectionUpdated" in obj, get: obj => obj.selectionUpdated, set: (obj, value) => { obj.selectionUpdated = value; } }, metadata: _metadata }, _selectionUpdated_initializers, _selectionUpdated_extraInitializers);
            __esDecorate(this, null, _onDrag_decorators, { kind: "accessor", name: "onDrag", static: false, private: false, access: { has: obj => "onDrag" in obj, get: obj => obj.onDrag, set: (obj, value) => { obj.onDrag = value; } }, metadata: _metadata }, _onDrag_initializers, _onDrag_extraInitializers);
            __esDecorate(this, null, _getFlag_decorators, { kind: "accessor", name: "getFlag", static: false, private: false, access: { has: obj => "getFlag" in obj, get: obj => obj.getFlag, set: (obj, value) => { obj.getFlag = value; } }, metadata: _metadata }, _getFlag_initializers, _getFlag_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        #std_accessor_storage = __runInitializers(this, _std_initializers, void 0);
        get std() { return this.#std_accessor_storage; }
        set std(value) { this.#std_accessor_storage = value; }
        #headerWidget_accessor_storage = (__runInitializers(this, _std_extraInitializers), __runInitializers(this, _headerWidget_initializers, void 0));
        get headerWidget() { return this.#headerWidget_accessor_storage; }
        set headerWidget(value) { this.#headerWidget_accessor_storage = value; }
        #dataViewEle_accessor_storage = (__runInitializers(this, _headerWidget_extraInitializers), __runInitializers(this, _dataViewEle_initializers, void 0));
        get dataViewEle() { return this.#dataViewEle_accessor_storage; }
        set dataViewEle(value) { this.#dataViewEle_accessor_storage = value; }
        #view_accessor_storage = (__runInitializers(this, _dataViewEle_extraInitializers), __runInitializers(this, _view_initializers, void 0));
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        #viewSource_accessor_storage = (__runInitializers(this, _view_extraInitializers), __runInitializers(this, _viewSource_initializers, void 0));
        get viewSource() { return this.#viewSource_accessor_storage; }
        set viewSource(value) { this.#viewSource_accessor_storage = value; }
        #dataSource_accessor_storage = (__runInitializers(this, _viewSource_extraInitializers), __runInitializers(this, _dataSource_initializers, void 0));
        get dataSource() { return this.#dataSource_accessor_storage; }
        set dataSource(value) { this.#dataSource_accessor_storage = value; }
        #bindHotkey_accessor_storage = (__runInitializers(this, _dataSource_extraInitializers), __runInitializers(this, _bindHotkey_initializers, void 0));
        get bindHotkey() { return this.#bindHotkey_accessor_storage; }
        set bindHotkey(value) { this.#bindHotkey_accessor_storage = value; }
        #handleEvent_accessor_storage = (__runInitializers(this, _bindHotkey_extraInitializers), __runInitializers(this, _handleEvent_initializers, void 0));
        get handleEvent() { return this.#handleEvent_accessor_storage; }
        set handleEvent(value) { this.#handleEvent_accessor_storage = value; }
        #modalMode_accessor_storage = (__runInitializers(this, _handleEvent_extraInitializers), __runInitializers(this, _modalMode_initializers, undefined));
        get modalMode() { return this.#modalMode_accessor_storage; }
        set modalMode(value) { this.#modalMode_accessor_storage = value; }
        #setSelection_accessor_storage = (__runInitializers(this, _modalMode_extraInitializers), __runInitializers(this, _setSelection_initializers, void 0));
        get setSelection() { return this.#setSelection_accessor_storage; }
        set setSelection(value) { this.#setSelection_accessor_storage = value; }
        #selectionUpdated_accessor_storage = (__runInitializers(this, _setSelection_extraInitializers), __runInitializers(this, _selectionUpdated_initializers, void 0));
        get selectionUpdated() { return this.#selectionUpdated_accessor_storage; }
        set selectionUpdated(value) { this.#selectionUpdated_accessor_storage = value; }
        #onDrag_accessor_storage = (__runInitializers(this, _selectionUpdated_extraInitializers), __runInitializers(this, _onDrag_initializers, undefined));
        get onDrag() { return this.#onDrag_accessor_storage; }
        set onDrag(value) { this.#onDrag_accessor_storage = value; }
        #getFlag_accessor_storage = (__runInitializers(this, _onDrag_extraInitializers), __runInitializers(this, _getFlag_initializers, void 0));
        get getFlag() { return this.#getFlag_accessor_storage; }
        set getFlag(value) { this.#getFlag_accessor_storage = value; }
        constructor() {
            super(...arguments);
            __runInitializers(this, _getFlag_extraInitializers);
        }
    };
})();
export { DataViewBase };
//# sourceMappingURL=data-view-base.js.map