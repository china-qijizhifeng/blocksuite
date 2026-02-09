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
import { classMap } from 'lit/directives/class-map.js';
import { createRef } from 'lit/directives/ref.js';
import { html } from 'lit/static-html.js';
import { popMenu } from '../../../../_common/components/index.js';
import { renderUniLit } from '../../utils/uni-component/uni-component.js';
import { DatabaseDuplicate, DatabaseMoveLeft, DatabaseMoveRight, DeleteIcon, TextIcon, } from '../icons/index.js';
let RecordField = (() => {
    let _classDecorators = [customElement('affine-data-view-record-field')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _view_decorators;
    let _view_initializers = [];
    let _view_extraInitializers = [];
    let _column_decorators;
    let _column_initializers = [];
    let _column_extraInitializers = [];
    let _rowId_decorators;
    let _rowId_initializers = [];
    let _rowId_extraInitializers = [];
    let _isFocus_decorators;
    let _isFocus_initializers = [];
    let _isFocus_extraInitializers = [];
    let _editing_decorators;
    let _editing_initializers = [];
    let _editing_extraInitializers = [];
    var RecordField = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._cell = createRef();
            this.#view_accessor_storage = __runInitializers(this, _view_initializers, void 0);
            this.#column_accessor_storage = (__runInitializers(this, _view_extraInitializers), __runInitializers(this, _column_initializers, void 0));
            this.#rowId_accessor_storage = (__runInitializers(this, _column_extraInitializers), __runInitializers(this, _rowId_initializers, void 0));
            this.#isFocus_accessor_storage = (__runInitializers(this, _rowId_extraInitializers), __runInitializers(this, _isFocus_initializers, false));
            this.#editing_accessor_storage = (__runInitializers(this, _isFocus_extraInitializers), __runInitializers(this, _editing_initializers, false));
            this.changeEditing = (__runInitializers(this, _editing_extraInitializers), (editing) => {
                const selection = this.closest('affine-data-view-record-detail')?.selection;
                if (selection) {
                    selection.selection = {
                        propertyId: this.column.id,
                        isEditing: editing,
                    };
                }
            });
            this._click = (e) => {
                e.stopPropagation();
                if (this.readonly)
                    return;
                this.changeEditing(true);
            };
            this._clickLeft = (e) => {
                if (this.readonly)
                    return;
                const ele = e.currentTarget;
                const columns = this.view.detailColumns;
                popMenu(ele, {
                    options: {
                        input: {
                            initValue: this.column.name,
                            onComplete: text => {
                                this.column.updateName(text);
                            },
                        },
                        items: [
                            {
                                type: 'sub-menu',
                                name: 'Column Type',
                                icon: TextIcon,
                                hide: () => !this.column.updateType || this.column.type === 'title',
                                options: {
                                    input: {
                                        search: true,
                                    },
                                    items: this.view.allColumnConfig
                                        .filter(v => v.type !== this.column.type)
                                        .map(config => {
                                        return {
                                            type: 'action',
                                            name: config.name,
                                            icon: html ` <uni-lit
                      .uni="${this.view.getIcon(config.type)}"
                    ></uni-lit>`,
                                            select: () => {
                                                this.column.updateType?.(config.type);
                                            },
                                        };
                                    }),
                                },
                            },
                            {
                                type: 'action',
                                name: 'Duplicate Column',
                                icon: DatabaseDuplicate,
                                hide: () => !this.column.duplicate || this.column.type === 'title',
                                select: () => {
                                    this.column.duplicate?.();
                                },
                            },
                            {
                                type: 'action',
                                name: 'Move Up',
                                icon: html ` <div
              style="transform: rotate(90deg);display:flex;align-items:center;"
            >
              ${DatabaseMoveLeft}
            </div>`,
                                hide: () => columns.findIndex(v => v === this.column.id) === 0,
                                select: () => {
                                    const index = columns.findIndex(v => v === this.column.id);
                                    const targetId = columns[index - 1];
                                    if (!targetId) {
                                        return;
                                    }
                                    this.view.columnMove(this.column.id, {
                                        id: targetId,
                                        before: true,
                                    });
                                },
                            },
                            {
                                type: 'action',
                                name: 'Move Down',
                                icon: html ` <div
              style="transform: rotate(90deg);display:flex;align-items:center;"
            >
              ${DatabaseMoveRight}
            </div>`,
                                hide: () => columns.findIndex(v => v === this.column.id) ===
                                    columns.length - 1,
                                select: () => {
                                    const index = columns.findIndex(v => v === this.column.id);
                                    const targetId = columns[index + 1];
                                    if (!targetId) {
                                        return;
                                    }
                                    this.view.columnMove(this.column.id, {
                                        id: targetId,
                                        before: false,
                                    });
                                },
                            },
                            {
                                type: 'group',
                                name: 'operation',
                                children: () => [
                                    {
                                        type: 'action',
                                        name: 'Delete Column',
                                        icon: DeleteIcon,
                                        hide: () => !this.column.delete || this.column.type === 'title',
                                        select: () => {
                                            this.column.delete?.();
                                        },
                                        class: 'delete-item',
                                    },
                                ],
                            },
                        ],
                    },
                });
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _view_decorators = [property({ attribute: false })];
            _column_decorators = [property({ attribute: false })];
            _rowId_decorators = [property({ attribute: false })];
            _isFocus_decorators = [state()];
            _editing_decorators = [state()];
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(this, null, _column_decorators, { kind: "accessor", name: "column", static: false, private: false, access: { has: obj => "column" in obj, get: obj => obj.column, set: (obj, value) => { obj.column = value; } }, metadata: _metadata }, _column_initializers, _column_extraInitializers);
            __esDecorate(this, null, _rowId_decorators, { kind: "accessor", name: "rowId", static: false, private: false, access: { has: obj => "rowId" in obj, get: obj => obj.rowId, set: (obj, value) => { obj.rowId = value; } }, metadata: _metadata }, _rowId_initializers, _rowId_extraInitializers);
            __esDecorate(this, null, _isFocus_decorators, { kind: "accessor", name: "isFocus", static: false, private: false, access: { has: obj => "isFocus" in obj, get: obj => obj.isFocus, set: (obj, value) => { obj.isFocus = value; } }, metadata: _metadata }, _isFocus_initializers, _isFocus_extraInitializers);
            __esDecorate(this, null, _editing_decorators, { kind: "accessor", name: "editing", static: false, private: false, access: { has: obj => "editing" in obj, get: obj => obj.editing, set: (obj, value) => { obj.editing = value; } }, metadata: _metadata }, _editing_initializers, _editing_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            RecordField = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get readonly() {
            return this.view.readonly;
        }
        get cell() {
            return this._cell.value;
        }
        static { this.styles = css `
    affine-data-view-record-field {
      display: flex;
      gap: 12px;
    }

    .field-left {
      padding: 6px;
      display: flex;
      height: max-content;
      align-items: center;
      gap: 6px;
      font-size: var(--data-view-cell-text-size);
      line-height: var(--data-view-cell-text-line-height);
      color: var(--affine-text-secondary-color);
      width: 160px;
      border-radius: 4px;
      cursor: pointer;
      user-select: none;
    }

    .field-left:hover {
      background-color: var(--affine-hover-color);
    }

    affine-data-view-record-field .icon {
      display: flex;
      align-items: center;
      width: 16px;
      height: 16px;
    }

    affine-data-view-record-field .icon svg {
      width: 16px;
      height: 16px;
      fill: var(--affine-icon-color);
    }

    .filed-name {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .field-content {
      padding: 6px 8px;
      border-radius: 4px;
      flex: 1;
      cursor: pointer;
      display: flex;
      align-items: center;
      border: 1px solid transparent;
    }

    .field-content .affine-database-number {
      text-align: left;
      justify-content: start;
    }

    .field-content:hover {
      background-color: var(--affine-hover-color);
    }

    .field-content.is-editing {
      box-shadow: 0px 0px 0px 2px rgba(30, 150, 235, 0.3);
    }

    .field-content.is-focus {
      border: 1px solid var(--affine-primary-color);
    }
    .field-content.empty::before {
      content: 'Empty';
      color: var(--affine-text-disable-color);
      font-size: 14px;
      line-height: 22px;
    }
  `; }
        #view_accessor_storage;
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        #column_accessor_storage;
        get column() { return this.#column_accessor_storage; }
        set column(value) { this.#column_accessor_storage = value; }
        #rowId_accessor_storage;
        get rowId() { return this.#rowId_accessor_storage; }
        set rowId(value) { this.#rowId_accessor_storage = value; }
        #isFocus_accessor_storage;
        get isFocus() { return this.#isFocus_accessor_storage; }
        set isFocus(value) { this.#isFocus_accessor_storage = value; }
        #editing_accessor_storage;
        get editing() { return this.#editing_accessor_storage; }
        set editing(value) { this.#editing_accessor_storage = value; }
        render() {
            const column = this.column;
            const props = {
                view: this.view,
                column: this.column,
                rowId: this.rowId,
                isEditing: this.editing,
                selectCurrentCell: this.changeEditing,
            };
            const { view, edit } = this.column.renderer;
            const contentClass = classMap({
                'field-content': true,
                empty: !this.editing && this.column.isEmpty(this.rowId),
                'is-editing': this.editing,
                'is-focus': this.isFocus,
            });
            return html `
      <div>
        <div class="field-left" @click="${this._clickLeft}">
          <div class="icon">
            <uni-lit .uni="${this.column.icon}"></uni-lit>
          </div>
          <div class="filed-name">${column.name}</div>
        </div>
      </div>
      <div @click="${this._click}" class="${contentClass}">
        ${renderUniLit(this.editing && edit ? edit : view, props, {
                ref: this._cell,
                class: 'kanban-cell',
            })}
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return RecordField = _classThis;
})();
export { RecordField };
//# sourceMappingURL=field.js.map