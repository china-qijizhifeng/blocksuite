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
import '../../../filter/filter-group.js';
import { css, html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { FilterIcon } from '../../../../common/icons/index.js';
import { popCreateFilter } from '../../../../common/ref/ref.js';
import { WidgetBase } from '../../../widget-base.js';
const styles = css `
  .affine-database-filter-button {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    line-height: 20px;
    padding: 2px 4px;
    border-radius: 4px;
    cursor: pointer;
  }

  .affine-database-filter-button:hover {
    background-color: var(--affine-hover-color);
  }

  .affine-database-filter-button svg {
    width: 20px;
    height: 20px;
  }
`;
let DataViewHeaderToolsFilter = (() => {
    let _classDecorators = [customElement('data-view-header-tools-filter')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetBase;
    var DataViewHeaderToolsFilter = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DataViewHeaderToolsFilter = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get readonly() {
            return this.view.readonly;
        }
        get _filter() {
            return this.view.filter;
        }
        set _filter(filter) {
            this.view.updateFilter(filter);
        }
        static { this.styles = styles; }
        addFilter(event) {
            if (!this._filter.conditions.length && !this.view.filterVisible) {
                this.showToolBar(true);
                popCreateFilter(event.target, {
                    vars: this.view.vars,
                    onSelect: filter => {
                        this._filter = {
                            ...this._filter,
                            conditions: [filter],
                        };
                        this.view.filterSetVisible(true);
                    },
                    onClose: () => {
                        this.showToolBar(false);
                    },
                });
                return;
            }
            this.view.filterSetVisible(!this.view.filterVisible);
        }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.add(this.view.slots.update.on(() => {
                this.requestUpdate();
            }));
        }
        showToolBar(show) {
            const tools = this.closest('data-view-header-tools');
            if (tools) {
                tools.showToolBar = show;
            }
        }
        render() {
            if (this.readonly)
                return nothing;
            return html `<div
      @click="${this.addFilter}"
      class="affine-database-filter-button dv-icon-20"
    >
      ${FilterIcon} Filter
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DataViewHeaderToolsFilter = _classThis;
})();
export { DataViewHeaderToolsFilter };
//# sourceMappingURL=filter.js.map