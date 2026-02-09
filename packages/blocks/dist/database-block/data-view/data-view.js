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
import './common/group-by/define.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { Slot } from '@blocksuite/global/utils';
import { css, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { keyed } from 'lit/directives/keyed.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { html } from 'lit/static-html.js';
import { dataViewCommonStyle } from './common/css-variable.js';
import { createRecordDetail, popSideDetail } from './common/detail/layout.js';
import { renderUniLit } from './utils/uni-component/index.js';
let DataViewRenderer = (() => {
    let _classDecorators = [customElement('affine-data-view-renderer')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _config_decorators;
    let _config_initializers = [];
    let _config_extraInitializers = [];
    let _currentView_decorators;
    let _currentView_initializers = [];
    let _currentView_extraInitializers = [];
    var DataViewRenderer = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._view = createRef();
            this.viewMap = {};
            this.#config_accessor_storage = __runInitializers(this, _config_initializers, void 0);
            this.#currentView_accessor_storage = (__runInitializers(this, _config_extraInitializers), __runInitializers(this, _currentView_initializers, undefined));
            this.focusFirstCell = (__runInitializers(this, _currentView_extraInitializers), () => {
                this._view.value?.focusFirstCell();
            });
            this.openDetailPanel = (ops) => {
                const openDetailPanel = this.config.detailPanelConfig?.openDetailPanel;
                if (openDetailPanel) {
                    openDetailPanel(this, createRecordDetail({
                        view: ops.view,
                        rowId: ops.rowId,
                    }))
                        .catch(console.error)
                        .finally(ops.onClose);
                }
                else {
                    popSideDetail({
                        target: this.config.detailPanelConfig?.target?.() ?? document.body,
                        view: ops.view,
                        rowId: ops.rowId,
                        onClose: ops.onClose,
                    });
                }
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _config_decorators = [property({ attribute: false })];
            _currentView_decorators = [state()];
            __esDecorate(this, null, _config_decorators, { kind: "accessor", name: "config", static: false, private: false, access: { has: obj => "config" in obj, get: obj => obj.config, set: (obj, value) => { obj.config = value; } }, metadata: _metadata }, _config_initializers, _config_extraInitializers);
            __esDecorate(this, null, _currentView_decorators, { kind: "accessor", name: "currentView", static: false, private: false, access: { has: obj => "currentView" in obj, get: obj => obj.currentView, set: (obj, value) => { obj.currentView = value; } }, metadata: _metadata }, _currentView_initializers, _currentView_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DataViewRenderer = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get expose() {
            return this._view.value;
        }
        static { this.styles = css `
    ${unsafeCSS(dataViewCommonStyle('affine-data-view-renderer'))}
    affine-data-view-renderer {
      background-color: var(--affine-background-primary-color);
      display: contents;
    }
  `; }
        #config_accessor_storage;
        get config() { return this.#config_accessor_storage; }
        set config(value) { this.#config_accessor_storage = value; }
        #currentView_accessor_storage;
        get currentView() { return this.#currentView_accessor_storage; }
        set currentView(value) { this.#currentView_accessor_storage = value; }
        getView(id) {
            if (!this.viewMap[id]) {
                const singleViewSource = this.config.viewSource.viewGet(id);
                const view = new (this.config.viewSource.getViewMeta(singleViewSource.view.mode).model.dataViewManager)();
                view.init(this.config.dataSource, singleViewSource);
                this.viewMap[id] = {
                    view: view,
                    viewUpdated: singleViewSource.updateSlot,
                    selectionUpdated: new Slot(),
                    setSelection: selection => {
                        this.config.setSelection(selection);
                    },
                    handleEvent: (name, handler) => this.config.handleEvent(name, context => {
                        if (this.config.viewSource.currentViewId === id) {
                            return handler(context);
                        }
                    }),
                    bindHotkey: hotkeys => this.config.bindHotkey(Object.fromEntries(Object.entries(hotkeys).map(([key, fn]) => [
                        key,
                        ctx => {
                            if (this.config.viewSource.currentViewId === id) {
                                return fn(ctx);
                            }
                        },
                    ]))),
                };
            }
            return this.viewMap[id];
        }
        renderView(viewData) {
            if (!viewData) {
                return;
            }
            const props = {
                dataViewEle: this,
                view: viewData.view,
                headerWidget: this.config.headerWidget,
                selectionUpdated: viewData.selectionUpdated,
                setSelection: viewData.setSelection,
                bindHotkey: viewData.bindHotkey,
                handleEvent: viewData.handleEvent,
                getFlag: this.config.getFlag,
                onDrag: this.config.onDrag,
                std: this.config.std,
                viewSource: this.config.viewSource,
                dataSource: this.config.dataSource,
            };
            return keyed(viewData.view.id, renderUniLit(this.config.viewSource.getViewMeta(viewData.view.type).renderer.view, props, { ref: this._view }));
        }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.add(this.config.selectionUpdated.on(selection => {
                Object.entries(this.viewMap).forEach(([id, v]) => {
                    if (!selection || selection.viewId !== id) {
                        v.selectionUpdated.emit(undefined);
                        return;
                    }
                    v.selectionUpdated.emit(selection);
                });
            }));
            this.disposables.add(this.config.viewSource.updateSlot.on(() => {
                this.requestUpdate();
            }));
        }
        render() {
            const views = this.config.viewSource.views;
            const viewData = views
                .map(view => this.getView(view.view.id))
                .find(v => v.view.id === this.config.viewSource.currentViewId);
            const containerClass = classMap({
                'toolbar-hover-container': true,
                'data-view-root': true,
            });
            return html `
      <div style="display: contents" class="${containerClass}">
        ${this.renderView(viewData)}
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DataViewRenderer = _classThis;
})();
export { DataViewRenderer };
export class DataView {
    constructor() {
        this._ref = createRef();
    }
    get expose() {
        return this._ref.value?.expose;
    }
    render(props) {
        return html ` <affine-data-view-renderer
      ${ref(this._ref)}
      .config="${props}"
    ></affine-data-view-renderer>`;
    }
}
//# sourceMappingURL=data-view.js.map