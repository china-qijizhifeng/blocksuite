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
import { firstFilter } from '../../common/ast.js';
import { ConvertIcon, DeleteIcon, MoreHorizontalIcon, PlusIcon, } from '../../common/icons/index.js';
import { popAddNewFilter } from './condition.js';
let FilterGroupView = (() => {
    let _classDecorators = [customElement('filter-group-view')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _depth_decorators;
    let _depth_initializers = [];
    let _depth_extraInitializers = [];
    let _data_decorators;
    let _data_initializers = [];
    let _data_extraInitializers = [];
    let _vars_decorators;
    let _vars_initializers = [];
    let _vars_extraInitializers = [];
    let _setData_decorators;
    let _setData_initializers = [];
    let _setData_extraInitializers = [];
    let _containerClass_decorators;
    let _containerClass_initializers = [];
    let _containerClass_extraInitializers = [];
    var FilterGroupView = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.opMap = {
                and: 'And',
                or: 'Or',
            };
            this.#depth_accessor_storage = __runInitializers(this, _depth_initializers, 1);
            this.#data_accessor_storage = (__runInitializers(this, _depth_extraInitializers), __runInitializers(this, _data_initializers, void 0));
            this.#vars_accessor_storage = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _vars_initializers, void 0));
            this.#setData_accessor_storage = (__runInitializers(this, _vars_extraInitializers), __runInitializers(this, _setData_initializers, void 0));
            this.#containerClass_accessor_storage = (__runInitializers(this, _setData_extraInitializers), __runInitializers(this, _containerClass_initializers, undefined));
            this._setFilter = (__runInitializers(this, _containerClass_extraInitializers), (index, filter) => {
                this.setData({
                    ...this.data,
                    conditions: this.data.conditions.map((v, i) => index === i ? filter : v),
                });
            });
            this._addNew = (e) => {
                if (this.isMaxDepth) {
                    this.setData({
                        ...this.data,
                        conditions: [...this.data.conditions, firstFilter(this.vars)],
                    });
                    return;
                }
                popAddNewFilter(e.target, {
                    value: this.data,
                    onChange: this.setData,
                    vars: this.vars,
                });
            };
            this._selectOp = (event) => {
                popFilterableSimpleMenu(event.target, [
                    {
                        type: 'action',
                        name: 'And',
                        select: () => {
                            this.setData({
                                ...this.data,
                                op: 'and',
                            });
                        },
                    },
                    {
                        type: 'action',
                        name: 'Or',
                        select: () => {
                            this.setData({
                                ...this.data,
                                op: 'or',
                            });
                        },
                    },
                ]);
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _depth_decorators = [property({ attribute: false })];
            _data_decorators = [property({ attribute: false })];
            _vars_decorators = [property({ attribute: false })];
            _setData_decorators = [property({ attribute: false })];
            _containerClass_decorators = [state()];
            __esDecorate(this, null, _depth_decorators, { kind: "accessor", name: "depth", static: false, private: false, access: { has: obj => "depth" in obj, get: obj => obj.depth, set: (obj, value) => { obj.depth = value; } }, metadata: _metadata }, _depth_initializers, _depth_extraInitializers);
            __esDecorate(this, null, _data_decorators, { kind: "accessor", name: "data", static: false, private: false, access: { has: obj => "data" in obj, get: obj => obj.data, set: (obj, value) => { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
            __esDecorate(this, null, _vars_decorators, { kind: "accessor", name: "vars", static: false, private: false, access: { has: obj => "vars" in obj, get: obj => obj.vars, set: (obj, value) => { obj.vars = value; } }, metadata: _metadata }, _vars_initializers, _vars_extraInitializers);
            __esDecorate(this, null, _setData_decorators, { kind: "accessor", name: "setData", static: false, private: false, access: { has: obj => "setData" in obj, get: obj => obj.setData, set: (obj, value) => { obj.setData = value; } }, metadata: _metadata }, _setData_initializers, _setData_extraInitializers);
            __esDecorate(this, null, _containerClass_decorators, { kind: "accessor", name: "containerClass", static: false, private: false, access: { has: obj => "containerClass" in obj, get: obj => obj.containerClass, set: (obj, value) => { obj.containerClass = value; } }, metadata: _metadata }, _containerClass_initializers, _containerClass_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            FilterGroupView = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get isMaxDepth() {
            return this.depth === 3;
        }
        static { this.styles = css `
    filter-group-view {
      border-radius: 4px;
      padding: 8px 4px 4px;
      display: flex;
      flex-direction: column;
      user-select: none;
    }

    .filter-group-op {
      width: 60px;
      display: flex;
      justify-content: end;
      padding: 4px;
      height: 34px;
      align-items: center;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      color: var(--affine-text-primary-color);
    }

    .filter-group-op-clickable {
      border-radius: 4px;
      cursor: pointer;
    }

    .filter-group-op-clickable:hover {
      background-color: var(--affine-hover-color);
    }

    .filter-group-container {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .filter-group-button {
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

    .filter-group-button svg {
      fill: var(--affine-text-secondary-color);
      color: var(--affine-text-secondary-color);
      width: 20px;
      height: 20px;
    }

    .filter-group-button:hover {
      background-color: var(--affine-hover-color);
      color: var(--affine-text-primary-color);
    }

    .filter-group-button:hover svg {
      fill: var(--affine-text-primary-color);
      color: var(--affine-text-primary-color);
    }

    .filter-group-item {
      padding: 4px 0;
      display: flex;
      align-items: start;
      gap: 8px;
    }

    .filter-group-item-ops {
      margin-top: 4px;
      padding: 4px;
      border-radius: 4px;
      height: max-content;
      display: flex;
      cursor: pointer;
    }

    .filter-group-item-ops:hover {
      background-color: var(--affine-hover-color);
    }

    .filter-group-item-ops svg {
      fill: var(--affine-text-secondary-color);
      color: var(--affine-text-secondary-color);
      width: 18px;
      height: 18px;
    }

    .filter-group-item-ops:hover svg {
      fill: var(--affine-text-primary-color);
      color: var(--affine-text-primary-color);
    }

    .delete-style {
      background-color: var(--affine-background-error-color);
    }

    .filter-group-border {
      border: 1px dashed var(--affine-border-color);
    }

    .filter-group-bg-1 {
      background-color: var(--affine-background-secondary-color);
      border: 1px solid var(--affine-border-color);
    }

    .filter-group-bg-2 {
      background-color: var(--affine-background-tertiary-color);
      border: 1px solid var(--affine-border-color);
    }
    .hover-style {
      background-color: var(--affine-hover-color);
    }

    .delete-style {
      background-color: var(--affine-background-error-color);
    }
  `; }
        #depth_accessor_storage;
        get depth() { return this.#depth_accessor_storage; }
        set depth(value) { this.#depth_accessor_storage = value; }
        #data_accessor_storage;
        get data() { return this.#data_accessor_storage; }
        set data(value) { this.#data_accessor_storage = value; }
        #vars_accessor_storage;
        get vars() { return this.#vars_accessor_storage; }
        set vars(value) { this.#vars_accessor_storage = value; }
        #setData_accessor_storage;
        get setData() { return this.#setData_accessor_storage; }
        set setData(value) { this.#setData_accessor_storage = value; }
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
                    hide: () => this.depth + getDepth(filter) > 3,
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
      <div class="filter-group-container">
        ${repeat(data.conditions, (filter, i) => {
                const clickOps = (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    this._clickConditionOps(e.target, i);
                };
                let op;
                if (i === 0) {
                    op = html ` <div class="filter-group-op">Where</div>`;
                }
                else {
                    op = html `
              <div
                class="filter-group-op filter-group-op-clickable"
                @click="${this._selectOp}"
              >
                ${this.opMap[data.op]}
              </div>
            `;
                }
                const classList = classMap({
                    'filter-root-item': true,
                    'filter-exactly-hover-container': true,
                    'dv-pd-4 dv-round-4': true,
                    [this.containerClass?.class ?? '']: this.containerClass?.index === i,
                });
                const groupClassList = classMap({
                    [`filter-group-bg-${this.depth}`]: filter.type !== 'filter',
                });
                return html ` <div class="${classList}" @contextmenu="${clickOps}">
            ${op}
            <div
              style="flex:1;display:flex;align-items:start;justify-content: space-between;gap: 8px;"
            >
              ${filter.type === 'filter'
                    ? html `
                    <filter-condition-view
                      .setData="${(v) => this._setFilter(i, v)}"
                      .vars="${this.vars}"
                      .data="${filter}"
                    ></filter-condition-view>
                  `
                    : html `
                    <filter-group-view
                      class="${groupClassList}"
                      style="width: 100%;"
                      .depth="${this.depth + 1}"
                      .setData="${(v) => this._setFilter(i, v)}"
                      .vars="${this.vars}"
                      .data="${filter}"
                    ></filter-group-view>
                  `}
              <div class="filter-group-item-ops" @click="${clickOps}">
                ${MoreHorizontalIcon}
              </div>
            </div>
          </div>`;
            })}
      </div>
      <div class="filter-group-button" @click="${this._addNew}">
        ${PlusIcon} Add ${this.isMaxDepth ? nothing : ArrowDownSmallIcon}
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return FilterGroupView = _classThis;
})();
export { FilterGroupView };
export const getDepth = (filter) => {
    if (filter.type === 'filter') {
        return 1;
    }
    return Math.max(...filter.conditions.map(getDepth)) + 1;
};
//# sourceMappingURL=filter-group.js.map