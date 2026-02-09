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
import { IS_MAC } from '@blocksuite/global/env';
import { baseTheme } from '@toeverything/theme';
import { css, html, unsafeCSS } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { stopPropagation } from '../../../utils/event.js';
import { createIcon } from '../../../utils/uni-icon.js';
import { BaseCellRenderer } from '../../base-cell.js';
import { createFromBaseCellRenderer } from '../../renderer.js';
import { numberColumnModelConfig } from './define.js';
let NumberCell = (() => {
    let _classDecorators = [customElement('affine-database-number-cell')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseCellRenderer;
    var NumberCell = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            NumberCell = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    affine-database-number-cell {
      display: block;
      width: 100%;
    }

    .affine-database-number {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      padding: 0;
      border: none;
      font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
      font-size: var(--data-view-cell-text-size);
      line-height: var(--data-view-cell-text-line-height);
      color: var(--affine-text-primary-color);
      font-weight: 400;
      background-color: transparent;
    }
  `; }
        render() {
            return html ` <div class="affine-database-number number">
      ${this.value ?? ''}
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return NumberCell = _classThis;
})();
export { NumberCell };
let NumberCellEditing = (() => {
    let _classDecorators = [customElement('affine-database-number-cell-editing')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseCellRenderer;
    let __inputEle_decorators;
    let __inputEle_initializers = [];
    let __inputEle_extraInitializers = [];
    var NumberCellEditing = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_inputEle_accessor_storage = __runInitializers(this, __inputEle_initializers, void 0);
            this._setValue = (__runInitializers(this, __inputEle_extraInitializers), (str = this._inputEle.value) => {
                if (!str) {
                    this.onChange(undefined);
                    return;
                }
                const value = Number.parseFloat(str);
                if (Object.is(value, NaN)) {
                    this._inputEle.value = `${this.value ?? ''}`;
                    return;
                }
                this._inputEle.value = `${this.value ?? ''}`;
                this.onChange(value);
            });
            this._keydown = (e) => {
                const ctrlKey = IS_MAC ? e.metaKey : e.ctrlKey;
                if (e.key.toLowerCase() === 'z' && ctrlKey) {
                    e.stopPropagation();
                    return;
                }
                if (e.key === 'Enter' && !e.isComposing) {
                    requestAnimationFrame(() => {
                        this.selectCurrentCell(false);
                    });
                }
            };
            this.focusEnd = () => {
                const end = this._inputEle.value.length;
                this._inputEle.focus();
                this._inputEle.setSelectionRange(end, end);
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __inputEle_decorators = [query('input')];
            __esDecorate(this, null, __inputEle_decorators, { kind: "accessor", name: "_inputEle", static: false, private: false, access: { has: obj => "_inputEle" in obj, get: obj => obj._inputEle, set: (obj, value) => { obj._inputEle = value; } }, metadata: _metadata }, __inputEle_initializers, __inputEle_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            NumberCellEditing = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    affine-database-number-cell-editing {
      display: block;
      width: 100%;
      cursor: text;
    }

    .affine-database-number {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0;
      border: none;
      font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
      font-size: var(--data-view-cell-text-size);
      line-height: var(--data-view-cell-text-line-height);
      color: var(--affine-text-primary-color);
      font-weight: 400;
      background-color: transparent;
      text-align: right;
    }

    .affine-database-number:focus {
      outline: none;
    }
  `; }
        #_inputEle_accessor_storage;
        get _inputEle() { return this.#_inputEle_accessor_storage; }
        set _inputEle(value) { this.#_inputEle_accessor_storage = value; }
        onExitEditMode() {
            this._setValue();
        }
        firstUpdated() {
            requestAnimationFrame(() => {
                this.focusEnd();
            });
        }
        _blur() {
            this.selectCurrentCell(false);
        }
        _focus() {
            if (!this.isEditing) {
                this.selectCurrentCell(true);
            }
        }
        render() {
            const value = `${this.value ?? ''}`;
            return html `<input
      type="text"
      autocomplete="off"
      .value="${value}"
      @keydown="${this._keydown}"
      @blur="${this._blur}"
      @focus="${this._focus}"
      class="affine-database-number number"
      @pointerdown="${stopPropagation}"
    />`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return NumberCellEditing = _classThis;
})();
export { NumberCellEditing };
export const numberColumnConfig = numberColumnModelConfig.renderConfig({
    icon: createIcon('DatabaseNumber'),
    cellRenderer: {
        view: createFromBaseCellRenderer(NumberCell),
        edit: createFromBaseCellRenderer(NumberCellEditing),
    },
});
//# sourceMappingURL=cell-renderer.js.map