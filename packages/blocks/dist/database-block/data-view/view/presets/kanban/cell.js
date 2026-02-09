// related component
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
import { css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { createRef } from 'lit/directives/ref.js';
import { html } from 'lit/static-html.js';
import { renderUniLit } from '../../../utils/uni-component/uni-component.js';
const styles = css `
  affine-data-view-kanban-cell {
    border-radius: 4px;
    display: flex;
    align-items: center;
    padding: 4px;
    min-height: 20px;
    border: 1px solid transparent;
    box-sizing: border-box;
  }

  affine-data-view-kanban-cell:hover {
    background-color: var(--affine-hover-color);
  }

  affine-data-view-kanban-cell .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: start;
    margin-right: 12px;
    height: var(--data-view-cell-text-line-height);
  }

  affine-data-view-kanban-cell .icon svg {
    width: 16px;
    height: 16px;
    fill: var(--affine-icon-color);
    color: var(--affine-icon-color);
  }

  .kanban-cell {
    flex: 1;
    display: block;
    width: 196px;
  }
`;
let KanbanCell = (() => {
    let _classDecorators = [customElement('affine-data-view-kanban-cell')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _contentOnly_decorators;
    let _contentOnly_initializers = [];
    let _contentOnly_extraInitializers = [];
    let _view_decorators;
    let _view_initializers = [];
    let _view_extraInitializers = [];
    let _groupKey_decorators;
    let _groupKey_initializers = [];
    let _groupKey_extraInitializers = [];
    let _cardId_decorators;
    let _cardId_initializers = [];
    let _cardId_extraInitializers = [];
    let _column_decorators;
    let _column_initializers = [];
    let _column_extraInitializers = [];
    let _isFocus_decorators;
    let _isFocus_initializers = [];
    let _isFocus_extraInitializers = [];
    let _editing_decorators;
    let _editing_initializers = [];
    let _editing_extraInitializers = [];
    var KanbanCell = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._cell = createRef();
            this.#contentOnly_accessor_storage = __runInitializers(this, _contentOnly_initializers, false);
            this.#view_accessor_storage = (__runInitializers(this, _contentOnly_extraInitializers), __runInitializers(this, _view_initializers, void 0));
            this.#groupKey_accessor_storage = (__runInitializers(this, _view_extraInitializers), __runInitializers(this, _groupKey_initializers, void 0));
            this.#cardId_accessor_storage = (__runInitializers(this, _groupKey_extraInitializers), __runInitializers(this, _cardId_initializers, void 0));
            this.#column_accessor_storage = (__runInitializers(this, _cardId_extraInitializers), __runInitializers(this, _column_initializers, void 0));
            this.#isFocus_accessor_storage = (__runInitializers(this, _column_extraInitializers), __runInitializers(this, _isFocus_initializers, false));
            this.#editing_accessor_storage = (__runInitializers(this, _isFocus_extraInitializers), __runInitializers(this, _editing_initializers, false));
            this.selectCurrentCell = (__runInitializers(this, _editing_extraInitializers), (editing) => {
                const selectionElement = this.closest('affine-data-view-kanban')?.selectionController;
                if (!selectionElement)
                    return;
                selectionElement.selection = {
                    selectionType: 'cell',
                    groupKey: this.groupKey,
                    cardId: this.cardId,
                    columnId: this.column.id,
                    isEditing: editing,
                };
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _contentOnly_decorators = [property({ attribute: false })];
            _view_decorators = [property({ attribute: false })];
            _groupKey_decorators = [property({ attribute: false })];
            _cardId_decorators = [property({ attribute: false })];
            _column_decorators = [property({ attribute: false })];
            _isFocus_decorators = [state()];
            _editing_decorators = [state()];
            __esDecorate(this, null, _contentOnly_decorators, { kind: "accessor", name: "contentOnly", static: false, private: false, access: { has: obj => "contentOnly" in obj, get: obj => obj.contentOnly, set: (obj, value) => { obj.contentOnly = value; } }, metadata: _metadata }, _contentOnly_initializers, _contentOnly_extraInitializers);
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(this, null, _groupKey_decorators, { kind: "accessor", name: "groupKey", static: false, private: false, access: { has: obj => "groupKey" in obj, get: obj => obj.groupKey, set: (obj, value) => { obj.groupKey = value; } }, metadata: _metadata }, _groupKey_initializers, _groupKey_extraInitializers);
            __esDecorate(this, null, _cardId_decorators, { kind: "accessor", name: "cardId", static: false, private: false, access: { has: obj => "cardId" in obj, get: obj => obj.cardId, set: (obj, value) => { obj.cardId = value; } }, metadata: _metadata }, _cardId_initializers, _cardId_extraInitializers);
            __esDecorate(this, null, _column_decorators, { kind: "accessor", name: "column", static: false, private: false, access: { has: obj => "column" in obj, get: obj => obj.column, set: (obj, value) => { obj.column = value; } }, metadata: _metadata }, _column_initializers, _column_extraInitializers);
            __esDecorate(this, null, _isFocus_decorators, { kind: "accessor", name: "isFocus", static: false, private: false, access: { has: obj => "isFocus" in obj, get: obj => obj.isFocus, set: (obj, value) => { obj.isFocus = value; } }, metadata: _metadata }, _isFocus_initializers, _isFocus_extraInitializers);
            __esDecorate(this, null, _editing_decorators, { kind: "accessor", name: "editing", static: false, private: false, access: { has: obj => "editing" in obj, get: obj => obj.editing, set: (obj, value) => { obj.editing = value; } }, metadata: _metadata }, _editing_initializers, _editing_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            KanbanCell = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get cell() {
            return this._cell.value;
        }
        get selection() {
            return this.closest('affine-data-view-kanban')?.selectionController;
        }
        static { this.styles = styles; }
        #contentOnly_accessor_storage;
        get contentOnly() { return this.#contentOnly_accessor_storage; }
        set contentOnly(value) { this.#contentOnly_accessor_storage = value; }
        #view_accessor_storage;
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        #groupKey_accessor_storage;
        get groupKey() { return this.#groupKey_accessor_storage; }
        set groupKey(value) { this.#groupKey_accessor_storage = value; }
        #cardId_accessor_storage;
        get cardId() { return this.#cardId_accessor_storage; }
        set cardId(value) { this.#cardId_accessor_storage = value; }
        #column_accessor_storage;
        get column() { return this.#column_accessor_storage; }
        set column(value) { this.#column_accessor_storage = value; }
        #isFocus_accessor_storage;
        get isFocus() { return this.#isFocus_accessor_storage; }
        set isFocus(value) { this.#isFocus_accessor_storage = value; }
        #editing_accessor_storage;
        get editing() { return this.#editing_accessor_storage; }
        set editing(value) { this.#editing_accessor_storage = value; }
        connectedCallback() {
            super.connectedCallback();
            this._disposables.addFromEvent(this, 'click', e => {
                if (e.shiftKey) {
                    return;
                }
                e.stopPropagation();
                const selectionElement = this.closest('affine-data-view-kanban')?.selectionController;
                if (!selectionElement)
                    return;
                if (e.shiftKey)
                    return;
                if (!this.editing) {
                    this.selectCurrentCell(!this.column.readonly);
                }
            });
        }
        renderIcon() {
            if (this.contentOnly) {
                return;
            }
            return html ` <uni-lit class="icon" .uni="${this.column.icon}"></uni-lit>`;
        }
        render() {
            const props = {
                view: this.view,
                column: this.column,
                rowId: this.cardId,
                isEditing: this.editing,
                selectCurrentCell: this.selectCurrentCell,
            };
            const { view, edit } = this.column.renderer;
            this.style.border = this.isFocus
                ? '1px solid var(--affine-primary-color)'
                : '';
            this.style.boxShadow = this.editing
                ? '0px 0px 0px 2px rgba(30, 150, 235, 0.30)'
                : '';
            return html ` ${this.renderIcon()}
    ${renderUniLit(this.editing && edit ? edit : view, props, {
                ref: this._cell,
                class: 'kanban-cell',
                style: { display: 'block', flex: '1', overflow: 'hidden' },
            })}`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return KanbanCell = _classThis;
})();
export { KanbanCell };
//# sourceMappingURL=cell.js.map