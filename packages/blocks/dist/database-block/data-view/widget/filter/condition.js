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
import '../../common/ref/ref.js';
import '../../common/literal/define.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { css, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { popFilterableSimpleMenu } from '../../../../_common/components/index.js';
import { firstFilter, firstFilterByRef, firstFilterInGroup, getRefType, } from '../../common/ast.js';
import { CrossIcon } from '../../common/icons/index.js';
import { popLiteralEdit, renderLiteral } from '../../common/literal/matcher.js';
import { tBoolean } from '../../logical/data-type.js';
import { typesystem } from '../../logical/typesystem.js';
import { filterMatcher } from './matcher/matcher.js';
let FilterConditionView = (() => {
    let _classDecorators = [customElement('filter-condition-view')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _data_decorators;
    let _data_initializers = [];
    let _data_extraInitializers = [];
    let _setData_decorators;
    let _setData_initializers = [];
    let _setData_extraInitializers = [];
    let _vars_decorators;
    let _vars_initializers = [];
    let _vars_extraInitializers = [];
    let _onDelete_decorators;
    let _onDelete_initializers = [];
    let _onDelete_extraInitializers = [];
    var FilterConditionView = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#data_accessor_storage = __runInitializers(this, _data_initializers, void 0);
            this.#setData_accessor_storage = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _setData_initializers, void 0));
            this.#vars_accessor_storage = (__runInitializers(this, _setData_extraInitializers), __runInitializers(this, _vars_initializers, void 0));
            this.#onDelete_accessor_storage = (__runInitializers(this, _vars_extraInitializers), __runInitializers(this, _onDelete_initializers, undefined));
            this._setRef = (__runInitializers(this, _onDelete_extraInitializers), (ref) => {
                this.setData(firstFilterByRef(this.vars, ref));
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _data_decorators = [property({ attribute: false })];
            _setData_decorators = [property({ attribute: false })];
            _vars_decorators = [property({ attribute: false })];
            _onDelete_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _data_decorators, { kind: "accessor", name: "data", static: false, private: false, access: { has: obj => "data" in obj, get: obj => obj.data, set: (obj, value) => { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
            __esDecorate(this, null, _setData_decorators, { kind: "accessor", name: "setData", static: false, private: false, access: { has: obj => "setData" in obj, get: obj => obj.setData, set: (obj, value) => { obj.setData = value; } }, metadata: _metadata }, _setData_initializers, _setData_extraInitializers);
            __esDecorate(this, null, _vars_decorators, { kind: "accessor", name: "vars", static: false, private: false, access: { has: obj => "vars" in obj, get: obj => obj.vars, set: (obj, value) => { obj.vars = value; } }, metadata: _metadata }, _vars_initializers, _vars_extraInitializers);
            __esDecorate(this, null, _onDelete_decorators, { kind: "accessor", name: "onDelete", static: false, private: false, access: { has: obj => "onDelete" in obj, get: obj => obj.onDelete, set: (obj, value) => { obj.onDelete = value; } }, metadata: _metadata }, _onDelete_initializers, _onDelete_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            FilterConditionView = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    filter-condition-view {
      display: flex;
      align-items: center;
      padding: 4px;
      gap: 16px;
      border: 1px solid var(--affine-border-color);
      border-radius: 8px;
      background-color: var(--affine-white);
    }

    .filter-condition-expression {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .filter-condition-delete {
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      height: max-content;
      cursor: pointer;
    }

    .filter-condition-delete:hover {
      background-color: var(--affine-hover-color);
    }

    .filter-condition-delete svg {
      width: 16px;
      height: 16px;
    }

    .filter-condition-function-name {
      font-size: 12px;
      line-height: 20px;
      color: var(--affine-text-secondary-color);
      padding: 2px 8px;
      border-radius: 4px;
      cursor: pointer;
    }

    .filter-condition-function-name:hover {
      background-color: var(--affine-hover-color);
    }

    .filter-condition-arg {
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      padding: 0 4px;
      height: 100%;
      display: flex;
      align-items: center;
    }
  `; }
        #data_accessor_storage;
        get data() { return this.#data_accessor_storage; }
        set data(value) { this.#data_accessor_storage = value; }
        #setData_accessor_storage;
        get setData() { return this.#setData_accessor_storage; }
        set setData(value) { this.#setData_accessor_storage = value; }
        #vars_accessor_storage;
        get vars() { return this.#vars_accessor_storage; }
        set vars(value) { this.#vars_accessor_storage = value; }
        #onDelete_accessor_storage;
        get onDelete() { return this.#onDelete_accessor_storage; }
        set onDelete(value) { this.#onDelete_accessor_storage = value; }
        _filterLabel() {
            return filterMatcher.find(v => v.data.name === this.data.function)?.data
                .label;
        }
        _filterList() {
            const type = getRefType(this.vars, this.data.left);
            if (!type) {
                return [];
            }
            return filterMatcher.allMatchedData(type);
        }
        _selectFilter(e) {
            const target = e.currentTarget;
            const list = this._filterList();
            popFilterableSimpleMenu(target, list.map(v => {
                const selected = v.name === this.data.function;
                return {
                    type: 'action',
                    name: v.label,
                    isSelected: selected,
                    select: () => {
                        this.setData({
                            ...this.data,
                            function: v.name,
                        });
                    },
                };
            }));
        }
        _args() {
            const fn = filterMatcher.find(v => v.data.name === this.data.function);
            if (!fn) {
                return [];
            }
            const refType = getRefType(this.vars, this.data.left);
            if (!refType) {
                return [];
            }
            const type = typesystem.instance({}, [refType], tBoolean.create(), fn.type);
            return type.args.slice(1);
        }
        render() {
            const data = this.data;
            return html `
      <div class="filter-condition-expression">
        <variable-ref-view
          .data="${data.left}"
          .setData="${this._setRef}"
          .vars="${this.vars}"
          style="height: 24px"
        ></variable-ref-view>
        <div
          class="filter-condition-function-name"
          @click="${this._selectFilter}"
        >
          ${this._filterLabel()}
        </div>
        ${repeat(this._args(), (v, i) => {
                const value = this.data.args[i];
                const onChange = (value) => {
                    const newArr = this.data.args.slice();
                    newArr[i] = { type: 'literal', value };
                    this.setData({
                        ...this.data,
                        args: newArr,
                    });
                };
                const click = (e) => {
                    popLiteralEdit(e.currentTarget, v, value?.value, onChange);
                };
                return html ` <div
            class="dv-hover dv-round-4 filter-condition-arg"
            @click="${click}"
          >
            ${renderLiteral(v, value?.value, onChange)}
          </div>`;
            })}
      </div>
      ${this.onDelete
                ? html ` <div
            @click="${this.onDelete}"
            class="dv-icon-16 dv-round-4 dv-pd-4 dv-hover"
            style="display:flex;align-items:center;"
          >
            ${CrossIcon}
          </div>`
                : nothing}
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return FilterConditionView = _classThis;
})();
export { FilterConditionView };
export const popAddNewFilter = (target, props) => {
    popFilterableSimpleMenu(target, [
        {
            type: 'action',
            name: 'Add filter',
            select: () => {
                props.onChange({
                    ...props.value,
                    conditions: [...props.value.conditions, firstFilter(props.vars)],
                });
            },
        },
        {
            type: 'action',
            name: 'Add filter group',
            select: () => {
                props.onChange({
                    ...props.value,
                    conditions: [
                        ...props.value.conditions,
                        firstFilterInGroup(props.vars),
                    ],
                });
            },
        },
    ]);
};
//# sourceMappingURL=condition.js.map