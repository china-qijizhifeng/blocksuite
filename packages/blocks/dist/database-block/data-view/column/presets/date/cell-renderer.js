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
import { flip, offset } from '@floating-ui/dom';
import { baseTheme } from '@toeverything/theme';
import { format } from 'date-fns/format';
import { css, html, unsafeCSS } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { DatePicker } from '../../../../../_common/components/date-picker/index.js';
import { createLitPortal } from '../../../../../_common/components/portal.js';
import { createIcon } from '../../../utils/uni-icon.js';
import { BaseCellRenderer } from '../../base-cell.js';
import { createFromBaseCellRenderer } from '../../renderer.js';
import { dateColumnModelConfig } from './define.js';
let DateCell = (() => {
    let _classDecorators = [customElement('affine-database-date-cell')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseCellRenderer;
    var DateCell = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DateCell = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    affine-database-date-cell {
      width: 100%;
    }

    .affine-database-date {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 0;
      border: none;
      font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
      color: var(--affine-text-primary-color);
      font-weight: 400;
      background-color: transparent;
      font-size: var(--data-view-cell-text-size);
      line-height: var(--data-view-cell-text-line-height);
      height: var(--data-view-cell-text-line-height);
    }

    input.affine-database-date[type='date']::-webkit-calendar-picker-indicator {
      display: none;
    }
  `; }
        render() {
            const value = this.value ? format(new Date(this.value), 'yyyy-MM-dd') : '';
            if (!value) {
                return '';
            }
            return html ` <input
      type="date"
      value="${value}"
      class="affine-database-date date"
    />`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DateCell = _classThis;
})();
export { DateCell };
let DateCellEditing = (() => {
    let _classDecorators = [customElement('affine-database-date-cell-editing')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseCellRenderer;
    let __inputEle_decorators;
    let __inputEle_initializers = [];
    let __inputEle_extraInitializers = [];
    var DateCellEditing = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_inputEle_accessor_storage = __runInitializers(this, __inputEle_initializers, void 0);
            this._prevPortalAbortController = (__runInitializers(this, __inputEle_extraInitializers), null);
            this._datePicker = null;
            this._setValue = (str = this._inputEle.value) => {
                if (str === '') {
                    this.onChange(undefined);
                    this._inputEle.value = '';
                    return;
                }
                const date = new Date(str);
                const value = format(date, 'yyyy-MM-dd');
                this.onChange(date.getTime());
                this._inputEle.value = `${value ?? ''}`;
            };
            this._onFocus = () => {
                if (this._prevPortalAbortController &&
                    !this._prevPortalAbortController.signal.aborted)
                    return;
                // this._inputEle.showPicker();
                this._prevPortalAbortController?.abort();
                const abortController = new AbortController();
                this._prevPortalAbortController = abortController;
                abortController.signal.addEventListener('abort', () => (this._datePicker = null), { once: true });
                const root = createLitPortal({
                    abortController,
                    closeOnClickAway: true,
                    computePosition: {
                        referenceElement: this._inputEle,
                        placement: 'bottom',
                        middleware: [offset(10), flip()],
                    },
                    template: () => {
                        const datePicker = new DatePicker();
                        datePicker.value = this.value ?? Date.now();
                        datePicker.onChange = (date) => {
                            this._setValue(date.toISOString());
                        };
                        setTimeout(() => datePicker.focusDateCell());
                        this._datePicker = datePicker;
                        return datePicker;
                    },
                });
                // TODO: use z-index from variable,
                //       for now the slide-layout-modal's z-index is `1001`
                //       the z-index of popover should be higher than it
                // root.style.zIndex = 'var(--affine-z-index-popover)';
                root.style.zIndex = '1002';
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __inputEle_decorators = [query('input')];
            __esDecorate(this, null, __inputEle_decorators, { kind: "accessor", name: "_inputEle", static: false, private: false, access: { has: obj => "_inputEle" in obj, get: obj => obj._inputEle, set: (obj, value) => { obj._inputEle = value; } }, metadata: _metadata }, __inputEle_initializers, __inputEle_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DateCellEditing = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    affine-database-date-cell-editing {
      width: 100%;
      cursor: text;
    }

    .affine-database-date:focus {
      outline: none;
    }
  `; }
        #_inputEle_accessor_storage;
        get _inputEle() { return this.#_inputEle_accessor_storage; }
        set _inputEle(value) { this.#_inputEle_accessor_storage = value; }
        _onInput(e) {
            if (!this._datePicker)
                return;
            const v = e.target.value;
            this._datePicker.value = v ? new Date(v).getTime() : undefined;
        }
        onExitEditMode() {
            this._setValue();
            this._prevPortalAbortController?.abort();
        }
        firstUpdated() {
            this._inputEle.focus();
        }
        render() {
            const value = this.value ? format(this.value, 'yyyy-MM-dd') : '';
            return html `<input
      type="date"
      class="affine-database-date date"
      .value="${value}"
      @focus=${this._onFocus}
      @input=${this._onInput}
    />`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DateCellEditing = _classThis;
})();
export { DateCellEditing };
export const dateColumnConfig = dateColumnModelConfig.renderConfig({
    icon: createIcon('DateTime'),
    cellRenderer: {
        view: createFromBaseCellRenderer(DateCell),
        edit: createFromBaseCellRenderer(DateCellEditing),
    },
});
//# sourceMappingURL=cell-renderer.js.map