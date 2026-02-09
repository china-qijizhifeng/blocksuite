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
import './condition.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { css, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { popFilterableSimpleMenu } from '../../../../_common/components/index.js';
import { ArrowDownSmallIcon, DuplicateIcon, } from '../../../../_common/icons/index.js';
import { ConvertIcon, DeleteIcon, MoreHorizontalIcon, PlusIcon, } from '../../common/icons/index.js';
import { menuTitle } from '../../utils/menu-title.js';
import { popAddNewFilter } from './condition.js';
import { getDepth } from './filter-group.js';
let FilterRootView = (() => {
    let _classDecorators = [customElement('filter-root-view')];
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
    let _onBack_decorators;
    let _onBack_initializers = [];
    let _onBack_extraInitializers = [];
    let _containerClass_decorators;
    let _containerClass_initializers = [];
    let _containerClass_extraInitializers = [];
    var FilterRootView = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#data_accessor_storage = __runInitializers(this, _data_initializers, void 0);
            this.#vars_accessor_storage = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _vars_initializers, void 0));
            this.#setData_accessor_storage = (__runInitializers(this, _vars_extraInitializers), __runInitializers(this, _setData_initializers, void 0));
            this.#onBack_accessor_storage = (__runInitializers(this, _setData_extraInitializers), __runInitializers(this, _onBack_initializers, void 0));
            this.#containerClass_accessor_storage = (__runInitializers(this, _onBack_extraInitializers), __runInitializers(this, _containerClass_initializers, undefined));
            this._setFilter = (__runInitializers(this, _containerClass_extraInitializers), (index, filter) => {
                this.setData({
                    ...this.data,
                    conditions: this.data.conditions.map((v, i) => index === i ? filter : v),
                });
            });
            this._addNew = (e) => {
                popAddNewFilter(e.target, {
                    value: this.data,
                    onChange: this.setData,
                    vars: this.vars,
                });
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _data_decorators = [property({ attribute: false })];
            _vars_decorators = [property({ attribute: false })];
            _setData_decorators = [property({ attribute: false })];
            _onBack_decorators = [property({ attribute: false })];
            _containerClass_decorators = [state()];
            __esDecorate(this, null, _data_decorators, { kind: "accessor", name: "data", static: false, private: false, access: { has: obj => "data" in obj, get: obj => obj.data, set: (obj, value) => { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
            __esDecorate(this, null, _vars_decorators, { kind: "accessor", name: "vars", static: false, private: false, access: { has: obj => "vars" in obj, get: obj => obj.vars, set: (obj, value) => { obj.vars = value; } }, metadata: _metadata }, _vars_initializers, _vars_extraInitializers);
            __esDecorate(this, null, _setData_decorators, { kind: "accessor", name: "setData", static: false, private: false, access: { has: obj => "setData" in obj, get: obj => obj.setData, set: (obj, value) => { obj.setData = value; } }, metadata: _metadata }, _setData_initializers, _setData_extraInitializers);
            __esDecorate(this, null, _onBack_decorators, { kind: "accessor", name: "onBack", static: false, private: false, access: { has: obj => "onBack" in obj, get: obj => obj.onBack, set: (obj, value) => { obj.onBack = value; } }, metadata: _metadata }, _onBack_initializers, _onBack_extraInitializers);
            __esDecorate(this, null, _containerClass_decorators, { kind: "accessor", name: "containerClass", static: false, private: false, access: { has: obj => "containerClass" in obj, get: obj => obj.containerClass, set: (obj, value) => { obj.containerClass = value; } }, metadata: _metadata }, _containerClass_initializers, _containerClass_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            FilterRootView = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    filter-root-view {
      border-radius: 4px;
      display: flex;
      flex-direction: column;
      user-select: none;
    }

    .filter-root-title {
      padding: 12px;
      font-size: 14px;
      font-weight: 600;
      line-height: 22px;
      color: var(--affine-text-primary-color);
    }

    .filter-root-op {
      width: 60px;
      display: flex;
      justify-content: end;
      padding: 4px;
      height: 34px;
      align-items: center;
    }

    .filter-root-op-clickable {
      border-radius: 4px;
      cursor: pointer;
    }

    .filter-root-op-clickable:hover {
      background-color: var(--affine-hover-color);
    }

    .filter-root-container {
      display: flex;
      flex-direction: column;
      gap: 4px;
      max-height: 400px;
      overflow: auto;
      padding: 0 12px 0 8px;
    }

    .filter-root-button {
      margin: 4px 8px 8px;
      padding: 8px 12px;
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      line-height: 22px;
      border-radius: 4px;
      cursor: pointer;
      color: var(--affine-text-secondary-color);
    }

    .filter-root-button svg {
      fill: var(--affine-text-secondary-color);
      color: var(--affine-text-secondary-color);
      width: 20px;
      height: 20px;
    }

    .filter-root-button:hover {
      background-color: var(--affine-hover-color);
      color: var(--affine-text-primary-color);
    }
    .filter-root-button:hover svg {
      fill: var(--affine-text-primary-color);
      color: var(--affine-text-primary-color);
    }

    .filter-root-item {
      padding: 4px 0;
      display: flex;
      align-items: start;
      gap: 8px;
    }

    .filter-group-title {
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 22px;
      display: flex;
      align-items: center;
      color: var(--affine-text-primary-color);
      gap: 6px;
    }

    .filter-root-item-ops {
      margin-top: 2px;
      padding: 4px;
      border-radius: 4px;
      height: max-content;
      display: flex;
      cursor: pointer;
    }

    .filter-root-item-ops:hover {
      background-color: var(--affine-hover-color);
    }

    .filter-root-item-ops svg {
      fill: var(--affine-text-secondary-color);
      color: var(--affine-text-secondary-color);
      width: 18px;
      height: 18px;
    }
    .filter-root-item-ops:hover svg {
      fill: var(--affine-text-primary-color);
      color: var(--affine-text-primary-color);
    }

    .filter-root-grabber {
      cursor: grab;
      width: 4px;
      height: 12px;
      background-color: var(--affine-placeholder-color);
      border-radius: 1px;
    }

    .divider {
      height: 1px;
      background-color: var(--affine-divider-color);
      flex-shrink: 0;
      margin: 8px 0;
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
        #onBack_accessor_storage;
        get onBack() { return this.#onBack_accessor_storage; }
        set onBack(value) { this.#onBack_accessor_storage = value; }
        #containerClass_accessor_storage;
        get containerClass() { return this.#containerClass_accessor_storage; }
        set containerClass(value) { this.#containerClass_accessor_storage = value; }
        _clickConditionOps(target, i) {
            const filter = this.data.conditions[i];
            popFilterableSimpleMenu(target, [
                {
                    type: 'action',
                    name: filter.type === 'filter' ? 'Turn into group' : 'Wrap in group',
                    icon: ConvertIcon,
                    onHover: hover => {
                        this.containerClass = hover
                            ? { index: i, class: 'hover-style' }
                            : undefined;
                    },
                    hide: () => getDepth(filter) > 3,
                    select: () => {
                        this.setData({ type: 'group', op: 'and', conditions: [this.data] });
                    },
                },
                {
                    type: 'action',
                    name: 'Duplicate',
                    icon: DuplicateIcon,
                    onHover: hover => {
                        this.containerClass = hover
                            ? { index: i, class: 'hover-style' }
                            : undefined;
                    },
                    select: () => {
                        const conditions = [...this.data.conditions];
                        conditions.splice(i + 1, 0, JSON.parse(JSON.stringify(conditions[i])));
                        this.setData({ ...this.data, conditions: conditions });
                    },
                },
                {
                    type: 'group',
                    name: '',
                    children: () => [
                        {
                            type: 'action',
                            name: 'Delete',
                            icon: DeleteIcon,
                            class: 'delete-item',
                            onHover: hover => {
                                this.containerClass = hover
                                    ? { index: i, class: 'delete-style' }
                                    : undefined;
                            },
                            select: () => {
                                const conditions = [...this.data.conditions];
                                conditions.splice(i, 1);
                                this.setData({
                                    ...this.data,
                                    conditions,
                                });
                            },
                        },
                    ],
                },
            ]);
        }
        render() {
            const data = this.data;
            return html `
      <div style="padding: 15px 20px">
        ${menuTitle('FILTER', () => {
                this.onBack?.();
            })}
      </div>
      <div class="filter-root-container">
        ${repeat(data.conditions, (filter, i) => {
                const clickOps = (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    this._clickConditionOps(e.target, i);
                };
                const ops = html `
            <div class="filter-root-item-ops" @click="${clickOps}">
              ${MoreHorizontalIcon}
            </div>
          `;
                const content = filter.type === 'filter'
                    ? html `
                  <div
                    style="display:flex;align-items:center;justify-content: space-between;width: 100%;gap:8px;"
                  >
                    <div style="display:flex;align-items:center;gap:6px;">
                      <div class="filter-root-grabber"></div>
                      <filter-condition-view
                        .setData="${(v) => this._setFilter(i, v)}"
                        .vars="${this.vars}"
                        .data="${filter}"
                      ></filter-condition-view>
                    </div>
                    ${ops}
                  </div>
                `
                    : html `
                  <div style="width: 100%;">
                    <div
                      style="display:flex;align-items:center;justify-content: space-between;gap:8px;padding: 4px 4px 0 4px;"
                    >
                      <div class="filter-group-title">
                        <div class="filter-root-grabber"></div>
                        Filter group
                      </div>
                      ${ops}
                    </div>
                    <div style="width: 100%;padding: 12px 0 0;">
                      <filter-group-view
                        style="padding: 0"
                        .setData="${(v) => this._setFilter(i, v)}"
                        .vars="${this.vars}"
                        .data="${filter}"
                      ></filter-group-view>
                    </div>
                  </div>
                `;
                const classList = classMap({
                    'filter-root-item': true,
                    'filter-exactly-hover-container': true,
                    'dv-pd-4 dv-round-4': true,
                    [this.containerClass?.class ?? '']: this.containerClass?.index === i,
                });
                return html ` ${data.conditions[i - 1]?.type === 'group' ||
                    filter.type === 'group'
                    ? html `<div class="divider"></div>`
                    : nothing}
            <div @contextmenu=${clickOps} class="${classList}">
              ${content}
            </div>`;
            })}
      </div>
      <div class="filter-root-button add-new" @click="${this._addNew}">
        ${PlusIcon} Add ${ArrowDownSmallIcon}
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return FilterRootView = _classThis;
})();
export { FilterRootView };
//# sourceMappingURL=filter-root.js.map