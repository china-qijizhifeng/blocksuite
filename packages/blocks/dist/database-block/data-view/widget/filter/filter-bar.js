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
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { createPopup } from '../../../../_common/components/index.js';
import { AddCursorIcon } from '../../../../_common/icons/index.js';
import { CrossIcon, FilterIcon } from '../../common/icons/index.js';
import { popCreateFilter } from '../../common/ref/ref.js';
import { renderTemplate } from '../../utils/uni-component/render-template.js';
import { popFilterModal } from './filter-modal.js';
let FilterBar = (() => {
    let _classDecorators = [customElement('filter-bar')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _data_decorators;
    let _data_initializers = [];
    let _data_extraInitializers = [];
    let _vars_decorators;
    let _vars_initializers = [];
    let _vars_extraInitializers = [];
    let _setData_decorators;
    let _setData_initializers = [];
    let _setData_extraInitializers = [];
    var FilterBar = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#data_accessor_storage = __runInitializers(this, _data_initializers, void 0);
            this.#vars_accessor_storage = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _vars_initializers, void 0));
            this.#setData_accessor_storage = (__runInitializers(this, _vars_extraInitializers), __runInitializers(this, _setData_initializers, void 0));
            this.updateMoreFilterPanel = __runInitializers(this, _setData_extraInitializers);
            this._setFilter = (index, filter) => {
                this.setData({
                    ...this.data,
                    conditions: this.data.conditions.map((v, i) => index === i ? filter : v),
                });
            };
            this.addFilter = (e) => {
                const element = e.target;
                popCreateFilter(element, {
                    vars: this.vars,
                    onSelect: filter => {
                        const index = this.data.conditions.length;
                        this.setData({
                            ...this.data,
                            conditions: [...this.data.conditions, filter],
                        });
                        requestAnimationFrame(() => {
                            this.expandGroup(element, index);
                        });
                    },
                });
            };
            this.expandGroup = (position, i) => {
                const value = this.data.conditions[i];
                if (value.type !== 'group') {
                    return;
                }
                popFilterModal(position, {
                    isRoot: false,
                    vars: this.vars,
                    value: value,
                    onBack: () => {
                        // do nothing
                    },
                    onChange: filter => this._setFilter(i, filter),
                    onDelete: () => {
                        this.deleteFilter(i);
                    },
                });
            };
            this.renderMoreFilter = (count) => {
                return html ` <div
      class="dv-shadow-2 dv-round-8"
      style="padding: 8px;background-color: var(--affine-background-overlay-panel-color);display:flex;flex-direction: column;gap: 8px;"
    >
      ${repeat(this.data.conditions.slice(count), (_, i) => html ` <div style="width: max-content;">
            ${this.renderCondition(i + count)}
          </div>`)}
      <div class="dv-divider-h"></div>
      ${this.renderAddFilter()}
    </div>`;
            };
            this.showMoreFilter = (e, count) => {
                const ins = renderTemplate(() => this.renderMoreFilter(count));
                ins.style.position = 'absolute';
                this.updateMoreFilterPanel = () => {
                    const max = this.data.conditions.length;
                    if (count === max) {
                        close();
                        this.updateMoreFilterPanel = undefined;
                        return;
                    }
                    ins.requestUpdate();
                };
                const close = createPopup(e.target, ins, {
                    onClose: () => {
                        this.updateMoreFilterPanel = undefined;
                    },
                });
            };
            this.renderAddFilter = () => {
                return html ` <div
      style="height: 100%;"
      class="filter-bar-add-filter dv-icon-16 dv-round-4 dv-hover"
      @click="${this.addFilter}"
    >
      ${AddCursorIcon} Add filter
    </div>`;
            };
            this.renderMore = (count) => {
                const max = this.data.conditions.length;
                if (count === max) {
                    return this.renderAddFilter();
                }
                const showMore = (e) => {
                    this.showMoreFilter(e, count);
                };
                return html ` <div
      class="filter-bar-add-filter dv-icon-16 dv-round-4 dv-hover"
      style="height: 100%;"
      @click="${showMore}"
    >
      ${max - count} More
    </div>`;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _data_decorators = [property({ attribute: false })];
            _vars_decorators = [property({ attribute: false })];
            _setData_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _data_decorators, { kind: "accessor", name: "data", static: false, private: false, access: { has: obj => "data" in obj, get: obj => obj.data, set: (obj, value) => { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
            __esDecorate(this, null, _vars_decorators, { kind: "accessor", name: "vars", static: false, private: false, access: { has: obj => "vars" in obj, get: obj => obj.vars, set: (obj, value) => { obj.vars = value; } }, metadata: _metadata }, _vars_initializers, _vars_extraInitializers);
            __esDecorate(this, null, _setData_decorators, { kind: "accessor", name: "setData", static: false, private: false, access: { has: obj => "setData" in obj, get: obj => obj.setData, set: (obj, value) => { obj.setData = value; } }, metadata: _metadata }, _setData_initializers, _setData_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            FilterBar = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    filter-bar {
      margin-top: 8px;
      display: flex;
      gap: 8px;
    }

    .filter-group-tag {
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: 20px;
      display: flex;
      align-items: center;
      padding: 4px;
      background-color: var(--affine-white);
    }

    .filter-bar-add-filter {
      color: var(--affine-text-secondary-color);
      padding: 4px 8px;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    }
  `; }
        #data_accessor_storage;
        get data() { return this.#data_accessor_storage; }
        set data(value) { this.#data_accessor_storage = value; }
        #vars_accessor_storage;
        get vars() { return this.#vars_accessor_storage; }
        set vars(value) { this.#vars_accessor_storage = value; }
        #setData_accessor_storage;
        get setData() { return this.#setData_accessor_storage; }
        set setData(value) { this.#setData_accessor_storage = value; }
        deleteFilter(i) {
            this.setData({
                ...this.data,
                conditions: this.data.conditions.filter((_, index) => index !== i),
            });
        }
        updated() {
            this.updateMoreFilterPanel?.();
        }
        renderCondition(i) {
            const condition = this.data.conditions[i];
            const deleteFilter = () => {
                this.deleteFilter(i);
            };
            if (condition.type === 'filter') {
                return html ` <filter-condition-view
        style="margin-right: 8px;"
        .vars="${this.vars}"
        .data="${condition}"
        .setData="${(v) => this._setFilter(i, v)}"
        .onDelete="${deleteFilter}"
      ></filter-condition-view>`;
            }
            const expandGroup = (e) => {
                this.expandGroup(e.target, i);
            };
            const length = condition.conditions.length;
            const text = length > 1 ? `${length} rules` : `${length} rule`;
            return html ` <div
      style="margin-right: 8px;"
      class="filter-group-tag dv-icon-16 dv-border dv-round-8"
    >
      <div
        class="dv-round-4 dv-hover"
        @click="${expandGroup}"
        style="display:flex;gap: 6px;padding: 0 4px;align-items:center;height: 100%;"
      >
        ${FilterIcon} ${text}
      </div>
      <div
        class="dv-icon-16 dv-round-4 dv-pd-4 dv-hover"
        style="display:flex;align-items:center;margin-left: 16px;"
        @click="${deleteFilter}"
      >
        ${CrossIcon}
      </div>
    </div>`;
        }
        renderFilters() {
            return this.data.conditions.map((_, i) => () => this.renderCondition(i));
        }
        render() {
            return html `
      <component-overflow
        .renderItem="${this.renderFilters()}"
        .renderMore="${this.renderMore}"
      ></component-overflow>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return FilterBar = _classThis;
})();
export { FilterBar };
//# sourceMappingURL=filter-bar.js.map