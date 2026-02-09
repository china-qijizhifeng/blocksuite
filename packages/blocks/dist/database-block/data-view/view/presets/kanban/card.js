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
import './cell.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { html } from 'lit/static-html.js';
import { NewEditIcon } from '../../../../../_common/icons/index.js';
import { MoreHorizontalIcon } from '../../../common/icons/index.js';
import { openDetail, popCardMenu } from './menu.js';
const styles = css `
  affine-data-view-kanban-card {
    display: flex;
    position: relative;
    flex-direction: column;
    border: 1px solid var(--affine-border-color);
    box-shadow: 0px 2px 3px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    transition: background-color 100ms ease-in-out;
    background-color: var(--affine-background-kanban-card-color);
  }

  affine-data-view-kanban-card:hover {
    background-color: var(--affine-hover-color);
  }

  affine-data-view-kanban-card .card-header {
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  affine-data-view-kanban-card .card-header-title uni-lit {
    width: 100%;
  }

  .card-header.has-divider {
    border-bottom: 0.5px solid var(--affine-border-color);
  }

  affine-data-view-kanban-card .card-header-title {
    font-size: var(--data-view-cell-text-size);
    line-height: var(--data-view-cell-text-line-height);
  }

  affine-data-view-kanban-card .card-header-icon {
    padding: 4px;
    background-color: var(--affine-background-secondary-color);
    display: flex;
    align-items: center;
    border-radius: 4px;
    width: max-content;
  }

  affine-data-view-kanban-card .card-header-icon svg {
    width: 16px;
    height: 16px;
    fill: var(--affine-icon-color);
    color: var(--affine-icon-color);
  }

  affine-data-view-kanban-card .card-body {
    display: flex;
    flex-direction: column;
    padding: 8px;
    gap: 4px;
  }

  affine-data-view-kanban-card:hover .card-ops {
    visibility: visible;
  }

  .card-ops {
    position: absolute;
    right: 8px;
    top: 8px;
    visibility: hidden;
    display: flex;
    gap: 4px;
    cursor: pointer;
  }

  .card-op {
    display: flex;
    position: relative;
    padding: 4px;
    border-radius: 4px;
    box-shadow: 0px 0px 4px 0px rgba(66, 65, 73, 0.14);
    background-color: var(--affine-background-primary-color);
  }

  .card-op:hover:before {
    content: '';
    border-radius: 4px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: var(--affine-hover-color);
  }

  .card-op svg {
    fill: var(--affine-icon-color);
    color: var(--affine-icon-color);
    width: 16px;
    height: 16px;
  }
`;
let KanbanCard = (() => {
    let _classDecorators = [customElement('affine-data-view-kanban-card')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _dataViewEle_decorators;
    let _dataViewEle_initializers = [];
    let _dataViewEle_extraInitializers = [];
    let _view_decorators;
    let _view_initializers = [];
    let _view_extraInitializers = [];
    let _groupKey_decorators;
    let _groupKey_initializers = [];
    let _groupKey_extraInitializers = [];
    let _cardId_decorators;
    let _cardId_initializers = [];
    let _cardId_extraInitializers = [];
    let _isFocus_decorators;
    let _isFocus_initializers = [];
    let _isFocus_extraInitializers = [];
    var KanbanCard = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#dataViewEle_accessor_storage = __runInitializers(this, _dataViewEle_initializers, void 0);
            this.#view_accessor_storage = (__runInitializers(this, _dataViewEle_extraInitializers), __runInitializers(this, _view_initializers, void 0));
            this.#groupKey_accessor_storage = (__runInitializers(this, _view_extraInitializers), __runInitializers(this, _groupKey_initializers, void 0));
            this.#cardId_accessor_storage = (__runInitializers(this, _groupKey_extraInitializers), __runInitializers(this, _cardId_initializers, void 0));
            this.#isFocus_accessor_storage = (__runInitializers(this, _cardId_extraInitializers), __runInitializers(this, _isFocus_initializers, false));
            this.clickEdit = (__runInitializers(this, _isFocus_extraInitializers), (e) => {
                e.stopPropagation();
                const selection = this.getSelection();
                if (selection) {
                    openDetail(this.dataViewEle, this.cardId, selection);
                }
            });
            this.clickMore = (e) => {
                e.stopPropagation();
                const selection = this.getSelection();
                const ele = e.currentTarget;
                if (selection) {
                    selection.selection = {
                        selectionType: 'card',
                        cards: [
                            {
                                groupKey: this.groupKey,
                                cardId: this.cardId,
                            },
                        ],
                    };
                    popCardMenu(this.dataViewEle, ele, this.cardId, selection);
                }
            };
            this.contextMenu = (e) => {
                e.stopPropagation();
                e.preventDefault();
                const selection = this.getSelection();
                if (selection) {
                    selection.selection = {
                        selectionType: 'card',
                        cards: [
                            {
                                groupKey: this.groupKey,
                                cardId: this.cardId,
                            },
                        ],
                    };
                    popCardMenu(this.dataViewEle, e.target, this.cardId, selection);
                }
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _dataViewEle_decorators = [property({ attribute: false })];
            _view_decorators = [property({ attribute: false })];
            _groupKey_decorators = [property({ attribute: false })];
            _cardId_decorators = [property({ attribute: false })];
            _isFocus_decorators = [state()];
            __esDecorate(this, null, _dataViewEle_decorators, { kind: "accessor", name: "dataViewEle", static: false, private: false, access: { has: obj => "dataViewEle" in obj, get: obj => obj.dataViewEle, set: (obj, value) => { obj.dataViewEle = value; } }, metadata: _metadata }, _dataViewEle_initializers, _dataViewEle_extraInitializers);
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(this, null, _groupKey_decorators, { kind: "accessor", name: "groupKey", static: false, private: false, access: { has: obj => "groupKey" in obj, get: obj => obj.groupKey, set: (obj, value) => { obj.groupKey = value; } }, metadata: _metadata }, _groupKey_initializers, _groupKey_extraInitializers);
            __esDecorate(this, null, _cardId_decorators, { kind: "accessor", name: "cardId", static: false, private: false, access: { has: obj => "cardId" in obj, get: obj => obj.cardId, set: (obj, value) => { obj.cardId = value; } }, metadata: _metadata }, _cardId_initializers, _cardId_extraInitializers);
            __esDecorate(this, null, _isFocus_decorators, { kind: "accessor", name: "isFocus", static: false, private: false, access: { has: obj => "isFocus" in obj, get: obj => obj.isFocus, set: (obj, value) => { obj.isFocus = value; } }, metadata: _metadata }, _isFocus_initializers, _isFocus_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            KanbanCard = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        #dataViewEle_accessor_storage;
        get dataViewEle() { return this.#dataViewEle_accessor_storage; }
        set dataViewEle(value) { this.#dataViewEle_accessor_storage = value; }
        #view_accessor_storage;
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        #groupKey_accessor_storage;
        get groupKey() { return this.#groupKey_accessor_storage; }
        set groupKey(value) { this.#groupKey_accessor_storage = value; }
        #cardId_accessor_storage;
        get cardId() { return this.#cardId_accessor_storage; }
        set cardId(value) { this.#cardId_accessor_storage = value; }
        #isFocus_accessor_storage;
        get isFocus() { return this.#isFocus_accessor_storage; }
        set isFocus(value) { this.#isFocus_accessor_storage = value; }
        renderTitle() {
            const title = this.view.getHeaderTitle(this.cardId);
            if (!title) {
                return;
            }
            return html ` <div class="card-header-title">
      <affine-data-view-kanban-cell
        .contentOnly="${true}"
        data-column-id="${title.id}"
        .view="${this.view}"
        .groupKey="${this.groupKey}"
        .column="${title}"
        .cardId="${this.cardId}"
      ></affine-data-view-kanban-cell>
    </div>`;
        }
        renderIcon() {
            const icon = this.view.getHeaderIcon(this.cardId);
            if (!icon) {
                return;
            }
            return html ` <div class="card-header-icon">
      ${icon.getValue(this.cardId)}
    </div>`;
        }
        renderHeader(columns) {
            if (!this.view.hasHeader(this.cardId)) {
                return '';
            }
            const classList = classMap({
                'card-header': true,
                'has-divider': columns.length > 0,
            });
            return html `
      <div class="${classList}">${this.renderTitle()} ${this.renderIcon()}</div>
    `;
        }
        renderBody(columns) {
            if (columns.length === 0) {
                return '';
            }
            return html ` <div class="card-body">
      ${repeat(columns, v => v.id, column => {
                if (this.view.isInHeader(column.id)) {
                    return '';
                }
                return html ` <affine-data-view-kanban-cell
            .contentOnly="${false}"
            data-column-id="${column.id}"
            .view="${this.view}"
            .groupKey="${this.groupKey}"
            .column="${column}"
            .cardId="${this.cardId}"
          ></affine-data-view-kanban-cell>`;
            })}
    </div>`;
        }
        renderOps() {
            if (this.view.readonly) {
                return;
            }
            return html `
      <div class="card-ops">
        <div class="card-op" @click="${this.clickEdit}">${NewEditIcon}</div>
        <div class="card-op" @click="${this.clickMore}">
          ${MoreHorizontalIcon}
        </div>
      </div>
    `;
        }
        getSelection() {
            return this.closest('affine-data-view-kanban')?.selectionController;
        }
        connectedCallback() {
            super.connectedCallback();
            this._disposables.add(this.view.slots.update.on(() => {
                this.requestUpdate();
            }));
            if (this.view.readonly) {
                return;
            }
            this._disposables.addFromEvent(this, 'contextmenu', e => {
                this.contextMenu(e);
            });
            this._disposables.addFromEvent(this, 'click', e => {
                if (e.shiftKey) {
                    this.getSelection()?.shiftClickCard(e);
                    return;
                }
                const selection = this.getSelection();
                const preSelection = selection?.selection;
                if (preSelection?.selectionType !== 'card')
                    return;
                if (selection) {
                    selection.selection = undefined;
                }
                this.dataViewEle.openDetailPanel({
                    view: this.view,
                    rowId: this.cardId,
                    onClose: () => {
                        if (selection) {
                            selection.selection = preSelection;
                        }
                    },
                });
            });
        }
        render() {
            const columns = this.view.columnManagerList.filter(v => !this.view.isInHeader(v.id));
            this.style.border = this.isFocus
                ? '1px solid var(--affine-primary-color)'
                : '';
            return html `
      ${this.renderHeader(columns)} ${this.renderBody(columns)}
      ${this.renderOps()}
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return KanbanCard = _classThis;
})();
export { KanbanCard };
//# sourceMappingURL=card.js.map