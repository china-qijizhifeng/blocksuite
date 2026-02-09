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
import './card.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { html } from 'lit/static-html.js';
import { popFilterableSimpleMenu } from '../../../../../_common/components/index.js';
import { AddCursorIcon } from '../../../../../_common/icons/index.js';
import { GroupTitle } from '../../../common/group-by/group-title.js';
const styles = css `
  affine-data-view-kanban-group {
    width: 260px;
    flex-shrink: 0;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
  }

  .group-header {
    height: 32px;
    padding: 6px 4px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    overflow: hidden;
  }

  .group-header-title {
    overflow: hidden;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: var(--data-view-cell-text-size);
  }

  affine-data-view-kanban-group:hover .group-header-op {
    visibility: visible;
    opacity: 1;
  }

  .group-body {
    margin-top: 4px;
    display: flex;
    flex-direction: column;
    padding: 0 4px;
    gap: 12px;
  }

  .add-card {
    display: flex;
    align-items: center;
    height: 28px;
    padding: 4px;
    border-radius: 4px;
    cursor: pointer;
    font-size: var(--data-view-cell-text-size);
    line-height: var(--data-view-cell-text-line-height);
    visibility: hidden;
    opacity: 0;
    transition: all 150ms cubic-bezier(0.42, 0, 1, 1);
    color: var(--affine-text-secondary-color);
  }

  affine-data-view-kanban-group:hover .add-card {
    visibility: visible;
    opacity: 1;
  }

  affine-data-view-kanban-group .add-card:hover {
    background-color: var(--affine-hover-color);
    color: var(--affine-text-primary-color);
  }

  affine-data-view-kanban-group:has(.add-card:hover) .add-card {
    background-color: var(--affine-hover-color);
    color: var(--affine-text-primary-color);
  }

  .sortable-ghost {
    background-color: var(--affine-hover-color);
    opacity: 0.5;
  }

  .sortable-drag {
    background-color: var(--affine-background-primary-color);
  }
`;
let KanbanGroup = (() => {
    let _classDecorators = [customElement('affine-data-view-kanban-group')];
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
    let _group_decorators;
    let _group_initializers = [];
    let _group_extraInitializers = [];
    var KanbanGroup = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#dataViewEle_accessor_storage = __runInitializers(this, _dataViewEle_initializers, void 0);
            this.#view_accessor_storage = (__runInitializers(this, _dataViewEle_extraInitializers), __runInitializers(this, _view_initializers, void 0));
            this.#group_accessor_storage = (__runInitializers(this, _view_extraInitializers), __runInitializers(this, _group_initializers, void 0));
            this.clickAddCard = (__runInitializers(this, _group_extraInitializers), () => {
                const id = this.view.addCard('end', this.group.key);
                requestAnimationFrame(() => {
                    const kanban = this.closest('affine-data-view-kanban');
                    if (kanban) {
                        kanban.selectionController.selection = {
                            selectionType: 'cell',
                            groupKey: this.group.key,
                            cardId: id,
                            columnId: this.view.header.titleColumn || this.view.columns[0],
                            isEditing: true,
                        };
                    }
                });
            });
            this.clickAddCardInStart = () => {
                const id = this.view.addCard('start', this.group.key);
                requestAnimationFrame(() => {
                    const kanban = this.closest('affine-data-view-kanban');
                    if (kanban) {
                        kanban.selectionController.selection = {
                            selectionType: 'cell',
                            groupKey: this.group.key,
                            cardId: id,
                            columnId: this.view.header.titleColumn || this.view.columns[0],
                            isEditing: true,
                        };
                    }
                });
            };
            this.clickGroupOptions = (e) => {
                const ele = e.currentTarget;
                popFilterableSimpleMenu(ele, [
                    {
                        type: 'action',
                        name: 'Ungroup',
                        hide: () => this.group.value == null,
                        select: () => {
                            this.group.rows.forEach(id => {
                                this.group.helper.removeFromGroup(id, this.group.key);
                            });
                        },
                    },
                    {
                        type: 'action',
                        name: 'Delete Cards',
                        select: () => {
                            this.view.rowDelete(this.group.rows);
                        },
                    },
                ]);
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _dataViewEle_decorators = [property({ attribute: false })];
            _view_decorators = [property({ attribute: false })];
            _group_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _dataViewEle_decorators, { kind: "accessor", name: "dataViewEle", static: false, private: false, access: { has: obj => "dataViewEle" in obj, get: obj => obj.dataViewEle, set: (obj, value) => { obj.dataViewEle = value; } }, metadata: _metadata }, _dataViewEle_initializers, _dataViewEle_extraInitializers);
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(this, null, _group_decorators, { kind: "accessor", name: "group", static: false, private: false, access: { has: obj => "group" in obj, get: obj => obj.group, set: (obj, value) => { obj.group = value; } }, metadata: _metadata }, _group_initializers, _group_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            KanbanGroup = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        #dataViewEle_accessor_storage;
        get dataViewEle() { return this.#dataViewEle_accessor_storage; }
        set dataViewEle(value) { this.#dataViewEle_accessor_storage = value; }
        #view_accessor_storage;
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        #group_accessor_storage;
        get group() { return this.#group_accessor_storage; }
        set group(value) { this.#group_accessor_storage = value; }
        render() {
            const cards = this.group.rows;
            return html `
      <div class="group-header">
        ${GroupTitle(this.group, {
                readonly: this.view.readonly,
                clickAdd: this.clickAddCardInStart,
                clickOps: this.clickGroupOptions,
            })}
      </div>
      <div class="group-body">
        ${repeat(cards, id => id, id => {
                return html `
              <affine-data-view-kanban-card
                data-card-id="${id}"
                .groupKey="${this.group.key}"
                .dataViewEle="${this.dataViewEle}"
                .view="${this.view}"
                .cardId="${id}"
              ></affine-data-view-kanban-card>
            `;
            })}
        ${this.view.readonly
                ? nothing
                : html `<div class="add-card" @click="${this.clickAddCard}">
              <div
                style="margin-right: 4px;width: 16px;height: 16px;display:flex;align-items:center;"
              >
                ${AddCursorIcon}
              </div>
              Add
            </div>`}
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return KanbanGroup = _classThis;
})();
export { KanbanGroup };
//# sourceMappingURL=group.js.map