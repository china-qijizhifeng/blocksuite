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
import { popFilterableSimpleMenu } from '../../../../_common/components/index.js';
import { AddCursorIcon } from '../../../../_common/icons/index.js';
import { renderUniLit } from '../../utils/uni-component/uni-component.js';
import { firstFilterByRef, firstFilterInGroup } from '../ast.js';
let VariableRefView = (() => {
    let _classDecorators = [customElement('variable-ref-view')];
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
    var VariableRefView = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _data_decorators = [property({ attribute: false })];
            _setData_decorators = [property({ attribute: false })];
            _vars_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _data_decorators, { kind: "accessor", name: "data", static: false, private: false, access: { has: obj => "data" in obj, get: obj => obj.data, set: (obj, value) => { obj.data = value; } }, metadata: _metadata }, _data_initializers, _data_extraInitializers);
            __esDecorate(this, null, _setData_decorators, { kind: "accessor", name: "setData", static: false, private: false, access: { has: obj => "setData" in obj, get: obj => obj.setData, set: (obj, value) => { obj.setData = value; } }, metadata: _metadata }, _setData_initializers, _setData_extraInitializers);
            __esDecorate(this, null, _vars_decorators, { kind: "accessor", name: "vars", static: false, private: false, access: { has: obj => "vars" in obj, get: obj => obj.vars, set: (obj, value) => { obj.vars = value; } }, metadata: _metadata }, _vars_initializers, _vars_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            VariableRefView = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    variable-ref-view {
      font-size: 12px;
      line-height: 20px;
      display: flex;
      align-items: center;
      gap: 6px;
      padding: 0 4px;
      border-radius: 4px;
      cursor: pointer;
    }

    variable-ref-view:hover {
      background-color: var(--affine-hover-color);
    }

    variable-ref-view svg {
      width: 16px;
      height: 16px;
      fill: var(--affine-icon-color);
      color: var(--affine-icon-color);
    }
  `; }
        #data_accessor_storage = __runInitializers(this, _data_initializers, undefined);
        get data() { return this.#data_accessor_storage; }
        set data(value) { this.#data_accessor_storage = value; }
        #setData_accessor_storage = (__runInitializers(this, _data_extraInitializers), __runInitializers(this, _setData_initializers, void 0));
        get setData() { return this.#setData_accessor_storage; }
        set setData(value) { this.#setData_accessor_storage = value; }
        #vars_accessor_storage = (__runInitializers(this, _setData_extraInitializers), __runInitializers(this, _vars_initializers, void 0));
        get vars() { return this.#vars_accessor_storage; }
        set vars(value) { this.#vars_accessor_storage = value; }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.addFromEvent(this, 'click', e => {
                popFilterableSimpleMenu(e.target, this.vars.map(v => ({
                    type: 'action',
                    name: v.name,
                    icon: renderUniLit(v.icon, {}),
                    select: () => {
                        this.setData({
                            type: 'ref',
                            name: v.id,
                        });
                    },
                })));
            });
        }
        get field() {
            if (!this.data) {
                return;
            }
            if (this.data.type === 'ref') {
                return this.data.name;
            }
            return this.data.ref.name;
        }
        get fieldData() {
            const id = this.field;
            if (!id) {
                return;
            }
            return this.vars.find(v => v.id === id);
        }
        get property() {
            if (!this.data) {
                return;
            }
            if (this.data.type === 'ref') {
                return;
            }
            return this.data.propertyFuncName;
        }
        render() {
            const data = this.fieldData;
            return html ` ${renderUniLit(data?.icon, {})} ${data?.name} `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _vars_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return VariableRefView = _classThis;
})();
export { VariableRefView };
export const popCreateFilter = (target, props) => {
    popFilterableSimpleMenu(target, [
        ...props.vars.map(v => ({
            type: 'action',
            name: v.name,
            icon: renderUniLit(v.icon, {}),
            select: () => {
                props.onSelect(firstFilterByRef(props.vars, {
                    type: 'ref',
                    name: v.id,
                }));
            },
        })),
        {
            type: 'group',
            name: '',
            children: () => [
                {
                    type: 'action',
                    name: 'Add filter group',
                    icon: AddCursorIcon,
                    select: () => {
                        props.onSelect(firstFilterInGroup(props.vars));
                    },
                },
            ],
        },
    ], props.onClose);
};
//# sourceMappingURL=ref.js.map