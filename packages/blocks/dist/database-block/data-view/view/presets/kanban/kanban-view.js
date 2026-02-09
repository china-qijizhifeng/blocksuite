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
import './group.js';
import './header.js';
import './controller/drag.js';
import '../../../common/group-by/define.js';
import { css } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { html } from 'lit/static-html.js';
import Sortable from 'sortablejs';
import { popMenu } from '../../../../../_common/components/index.js';
import { AddCursorIcon } from '../../../../../_common/icons/index.js';
import { renderUniLit } from '../../../utils/uni-component/uni-component.js';
import { DataViewBase } from '../../data-view-base.js';
import { KanbanClipboardController } from './controller/clipboard.js';
import { KanbanDragController } from './controller/drag.js';
import { KanbanHotkeysController } from './controller/hotkeys.js';
import { KanbanSelectionController } from './controller/selection.js';
import { KanbanGroup } from './group.js';
const styles = css `
  affine-data-view-kanban {
    user-select: none;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .affine-data-view-kanban-groups {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 20px;
    width: 100%;
    padding-bottom: 4px;
    overflow-x: scroll;
    overflow-y: hidden;
  }

  .affine-data-view-kanban-groups:hover {
    padding-bottom: 0px;
  }

  .affine-data-view-kanban-groups::-webkit-scrollbar {
    -webkit-appearance: none;
    display: block;
  }

  .affine-data-view-kanban-groups::-webkit-scrollbar:horizontal {
    height: 4px;
  }

  .affine-data-view-kanban-groups::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background-color: transparent;
  }

  .affine-data-view-kanban-groups:hover::-webkit-scrollbar:horizontal {
    height: 8px;
  }

  .affine-data-view-kanban-groups:hover::-webkit-scrollbar-thumb {
    border-radius: 16px;
    background-color: var(--affine-black-30);
  }

  .affine-data-view-kanban-groups:hover::-webkit-scrollbar-track {
    background-color: var(--affine-hover-color);
  }

  .add-group-icon {
    padding: 4px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .add-group-icon:hover {
    background-color: var(--affine-hover-color);
  }

  .add-group-icon svg {
    width: 16px;
    height: 16px;
    fill: var(--affine-icon-color);
    color: var(--affine-icon-color);
  }
`;
let DataViewKanban = (() => {
    let _classDecorators = [customElement('affine-data-view-kanban')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = DataViewBase;
    let _groups_decorators;
    let _groups_initializers = [];
    let _groups_extraInitializers = [];
    var DataViewKanban = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.dragController = new KanbanDragController(this);
            this.selectionController = new KanbanSelectionController(this);
            this.hotkeysController = new KanbanHotkeysController(this);
            this.clipboardController = new KanbanClipboardController(this);
            this.#groups_accessor_storage = __runInitializers(this, _groups_initializers, void 0);
            this.groupHelper = __runInitializers(this, _groups_extraInitializers);
            this.renderAddGroup = () => {
                const addGroup = this.groupHelper?.addGroup;
                if (!addGroup) {
                    return;
                }
                const add = (e) => {
                    const ele = e.currentTarget;
                    popMenu(ele, {
                        options: {
                            input: {
                                onComplete: text => {
                                    const column = this.groupHelper?.column;
                                    if (column) {
                                        column.updateData(() => addGroup(text, column.data));
                                    }
                                },
                            },
                            items: [],
                        },
                    });
                };
                return html ` <div
      style="height: 32px;width: 100px;flex-shrink:0;display:flex;align-items:center;"
      @click="${add}"
    >
      <div class="add-group-icon">${AddCursorIcon}</div>
    </div>`;
            };
            this.onWheel = (event) => {
                if (event.metaKey || event.ctrlKey) {
                    return;
                }
                const ele = event.currentTarget;
                if (ele instanceof HTMLElement) {
                    if (ele.scrollWidth === ele.clientWidth) {
                        return;
                    }
                    event.stopPropagation();
                }
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _groups_decorators = [query('.affine-data-view-kanban-groups')];
            __esDecorate(this, null, _groups_decorators, { kind: "accessor", name: "groups", static: false, private: false, access: { has: obj => "groups" in obj, get: obj => obj.groups, set: (obj, value) => { obj.groups = value; } }, metadata: _metadata }, _groups_initializers, _groups_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DataViewKanban = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        #groups_accessor_storage;
        get groups() { return this.#groups_accessor_storage; }
        set groups(value) { this.#groups_accessor_storage = value; }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.add(this.view.slots.update.on(() => {
                this.requestUpdate();
            }));
            if (this.view.readonly) {
                return;
            }
        }
        firstUpdated() {
            const sortable = Sortable.create(this.groups, {
                group: `kanban-group-drag-${this.view.id}`,
                handle: '.group-header',
                draggable: 'affine-data-view-kanban-group',
                animation: 100,
                onEnd: evt => {
                    if (evt.item instanceof KanbanGroup) {
                        const groups = Array.from(this.groups.querySelectorAll('affine-data-view-kanban-group'));
                        const key = evt.newIndex != null
                            ? groups[evt.newIndex - 1]?.group.key
                            : undefined;
                        this.groupHelper?.moveGroupTo(evt.item.group.key, key
                            ? {
                                before: false,
                                id: key,
                            }
                            : 'start');
                    }
                },
            });
            this._disposables.add({
                dispose: () => {
                    sortable.destroy();
                },
            });
        }
        render() {
            this.groupHelper = this.view.groupHelper;
            const groups = this.groupHelper?.groups;
            if (!groups) {
                return html ``;
            }
            return html `
      ${renderUniLit(this.headerWidget, {
                view: this.view,
                viewMethods: this,
                viewSource: this.viewSource,
                dataSource: this.dataSource,
            })}
      <div class="affine-data-view-kanban-groups" @wheel="${this.onWheel}">
        ${repeat(groups, group => group.key, group => {
                return html ` <affine-data-view-kanban-group
              data-key="${group.key}"
              .dataViewEle="${this.dataViewEle}"
              .view="${this.view}"
              .group="${group}"
            ></affine-data-view-kanban-group>`;
            })}
        ${this.renderAddGroup()}
      </div>
    `;
        }
        focusFirstCell() {
            this.selectionController.focusFirstCell();
        }
        getSelection() {
            return this.selectionController.selection;
        }
        hideIndicator() {
            this.dragController.dropPreview.remove();
        }
        moveTo(id, evt) {
            const position = this.dragController.getInsertPosition(evt);
            if (position) {
                position.group.group.helper.moveCardTo(id, '', position.group.group.key, position.position);
            }
        }
        showIndicator(evt) {
            return this.dragController.shooIndicator(evt, undefined) != null;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DataViewKanban = _classThis;
})();
export { DataViewKanban };
//# sourceMappingURL=kanban-view.js.map