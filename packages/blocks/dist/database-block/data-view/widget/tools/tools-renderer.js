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
import './presets/search/search.js';
import './presets/filter/filter.js';
import './presets/view-options/view-options.js';
import './presets/table-add-row/add-row.js';
import { css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { renderUniLit } from '../../utils/uni-component/index.js';
import { WidgetBase } from '../widget-base.js';
const styles = css `
  .affine-database-toolbar {
    display: flex;
    align-items: center;
    gap: 6px;
    visibility: hidden;
    opacity: 0;
    transition: opacity 150ms cubic-bezier(0.42, 0, 1, 1);
  }

  .toolbar-hover-container:hover .affine-database-toolbar {
    visibility: visible;
    opacity: 1;
  }

  .show-toolbar {
    visibility: visible;
    opacity: 1;
  }

  @media print {
    .affine-database-toolbar {
      display: none;
    }
  }
`;
let DataViewHeaderTools = (() => {
    let _classDecorators = [customElement('data-view-header-tools')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetBase;
    let _toolsMap_decorators;
    let _toolsMap_initializers = [];
    let _toolsMap_extraInitializers = [];
    let _showToolBar_decorators;
    let _showToolBar_initializers = [];
    let _showToolBar_extraInitializers = [];
    var DataViewHeaderTools = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _toolsMap_decorators = [property({ attribute: false })];
            _showToolBar_decorators = [state()];
            __esDecorate(this, null, _toolsMap_decorators, { kind: "accessor", name: "toolsMap", static: false, private: false, access: { has: obj => "toolsMap" in obj, get: obj => obj.toolsMap, set: (obj, value) => { obj.toolsMap = value; } }, metadata: _metadata }, _toolsMap_initializers, _toolsMap_extraInitializers);
            __esDecorate(this, null, _showToolBar_decorators, { kind: "accessor", name: "showToolBar", static: false, private: false, access: { has: obj => "showToolBar" in obj, get: obj => obj.showToolBar, set: (obj, value) => { obj.showToolBar = value; } }, metadata: _metadata }, _showToolBar_initializers, _showToolBar_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DataViewHeaderTools = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        #toolsMap_accessor_storage = __runInitializers(this, _toolsMap_initializers, void 0);
        get toolsMap() { return this.#toolsMap_accessor_storage; }
        set toolsMap(value) { this.#toolsMap_accessor_storage = value; }
        #showToolBar_accessor_storage = (__runInitializers(this, _toolsMap_extraInitializers), __runInitializers(this, _showToolBar_initializers, false));
        get showToolBar() { return this.#showToolBar_accessor_storage; }
        set showToolBar(value) { this.#showToolBar_accessor_storage = value; }
        render() {
            if (this.view.isDeleted) {
                return;
            }
            const classList = classMap({
                'show-toolbar': this.showToolBar,
                'affine-database-toolbar': true,
            });
            const tools = this.toolsMap[this.view.type];
            return html ` <div class="${classList}">
      ${repeat(tools ?? [], uni => {
                const props = {
                    view: this.view,
                    viewMethods: this.viewMethods,
                    viewSource: this.viewSource,
                    dataSource: this.dataSource,
                };
                return renderUniLit(uni, props);
            })}
    </div>`;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _showToolBar_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DataViewHeaderTools = _classThis;
})();
export { DataViewHeaderTools };
export const renderTools = (view, viewMethods, viewSource) => {
    return html ` <data-view-header-tools
    .viewMethods="${viewMethods}"
    .view="${view}"
    .viewSource="${viewSource}"
  ></data-view-header-tools>`;
};
//# sourceMappingURL=tools-renderer.js.map