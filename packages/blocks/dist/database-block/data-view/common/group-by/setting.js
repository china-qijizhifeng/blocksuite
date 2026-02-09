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
import { css, html, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import Sortable from 'sortablejs';
import { popMenu, } from '../../../../_common/components/index.js';
import { ArrowRightSmallIcon } from '../../../../_common/icons/index.js';
import { menuTitleItem } from '../../utils/menu-title.js';
import { renderUniLit } from '../../utils/uni-component/uni-component.js';
import { DataViewKanbanManager } from '../../view/presets/kanban/kanban-view-manager.js';
import { DataViewTableManager } from '../../view/presets/table/table-view-manager.js';
import { dataViewCssVariable } from '../css-variable.js';
import { DeleteIcon } from '../icons/index.js';
import { groupByMatcher } from './matcher.js';
let GroupSetting = (() => {
    let _classDecorators = [customElement('data-view-group-setting')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _view_decorators;
    let _view_initializers = [];
    let _view_extraInitializers = [];
    let _groupContainer_decorators;
    let _groupContainer_initializers = [];
    let _groupContainer_extraInitializers = [];
    var GroupSetting = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _view_decorators = [property({ attribute: false })];
            _groupContainer_decorators = [query('.group-sort-setting')];
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(this, null, _groupContainer_decorators, { kind: "accessor", name: "groupContainer", static: false, private: false, access: { has: obj => "groupContainer" in obj, get: obj => obj.groupContainer, set: (obj, value) => { obj.groupContainer = value; } }, metadata: _metadata }, _groupContainer_initializers, _groupContainer_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            GroupSetting = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    data-view-group-setting {
      display: flex;
      flex-direction: column;
      gap: 4px;
      ${unsafeCSS(dataViewCssVariable())};
    }
    .group-item {
      display: flex;
      padding: 4px 12px;
      position: relative;
      cursor: grab;
    }

    .group-item-drag-bar {
      width: 4px;
      height: 12px;
      border-radius: 1px;
      background-color: #efeff0;
      position: absolute;
      left: 4px;
      top: 0;
      bottom: 0;
      margin: auto;
    }

    .group-item:hover .group-item-drag-bar {
      background-color: #c0bfc1;
    }
  `; }
        #view_accessor_storage = __runInitializers(this, _view_initializers, void 0);
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        #groupContainer_accessor_storage = (__runInitializers(this, _view_extraInitializers), __runInitializers(this, _groupContainer_initializers, void 0));
        get groupContainer() { return this.#groupContainer_accessor_storage; }
        set groupContainer(value) { this.#groupContainer_accessor_storage = value; }
        firstUpdated(_changedProperties) {
            super.firstUpdated(_changedProperties);
            const sortable = new Sortable(this.groupContainer, {
                animation: 150,
                group: `group-sort-${this.view.id}`,
                onEnd: evt => {
                    const groupHelper = this.view.groupHelper;
                    if (!groupHelper) {
                        return;
                    }
                    const groups = [...groupHelper.groups];
                    const index = evt.oldIndex ?? -1;
                    const from = groups[index];
                    groups.splice(index, 1);
                    const to = groups[evt.newIndex ?? -1];
                    groupHelper.moveGroupTo(from.key, to
                        ? {
                            before: true,
                            id: to.key,
                        }
                        : 'end');
                },
            });
            this._disposables.add({
                dispose: () => sortable.destroy(),
            });
        }
        render() {
            const helper = this.view.groupHelper;
            if (!helper) {
                return;
            }
            return html `
      <div style="padding: 7px 12px;">
        <div
          style="padding: 0 4px; font-size: 12px;color: var(--affine-text-secondary-color);line-height: 20px;"
        >
          Groups
        </div>
        <div></div>
      </div>
      <div
        style="display:flex;flex-direction: column;gap: 4px;"
        class="group-sort-setting"
      >
        ${repeat(helper.groups, group => group.key, group => {
                const props = {
                    value: group.value,
                    data: group.helper.data,
                    readonly: true,
                };
                const config = group.helper.groupConfig();
                return html ` <div class="dv-hover dv-round-4 group-item">
              <div class="group-item-drag-bar"></div>
              <div style="padding: 0 4px;position:relative;">
                ${renderUniLit(config?.view, props)}
                <div
                  style="position:absolute;left: 0;top: 0;right: 0;bottom: 0;"
                ></div>
              </div>
            </div>`;
            })}
      </div>
    `;
        }
        connectedCallback() {
            super.connectedCallback();
            this._disposables.add(this.view.slots.update.on(() => {
                this.requestUpdate();
            }));
            this._disposables.addFromEvent(this, 'pointerdown', e => {
                e.stopPropagation();
            });
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _groupContainer_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return GroupSetting = _classThis;
})();
export { GroupSetting };
export const selectGroupByProperty = (view, onClose) => {
    return {
        onClose,
        input: {
            search: true,
            placeholder: 'Search',
        },
        items: [
            ...view.columnsWithoutFilter
                .filter(id => {
                if (view.columnGet(id).type === 'title') {
                    return false;
                }
                return !!groupByMatcher.match(view.columnGet(id).dataType);
            })
                .map(id => {
                const column = view.columnGet(id);
                return {
                    type: 'action',
                    name: column.name,
                    isSelected: view.view.groupBy?.columnId === id,
                    icon: html ` <uni-lit .uni="${column.icon}"></uni-lit>`,
                    select: () => {
                        view.changeGroup(id);
                    },
                };
            }),
            {
                type: 'group',
                name: '',
                hide: () => view instanceof DataViewKanbanManager || view.view.groupBy == null,
                children: () => [
                    {
                        type: 'action',
                        icon: DeleteIcon,
                        class: 'delete-item',
                        name: 'Remove Grouping',
                        select: () => {
                            if (view instanceof DataViewTableManager) {
                                view.changeGroup(undefined);
                            }
                        },
                    },
                ],
            },
        ],
    };
};
export const popSelectGroupByProperty = (target, view, onClose) => {
    popMenu(target, {
        options: selectGroupByProperty(view, onClose),
    });
};
export const popGroupSetting = (target, view, onBack) => {
    const groupBy = view.view.groupBy;
    if (groupBy == null) {
        return;
    }
    const reopen = () => {
        popGroupSetting(target, view, onBack);
    };
    const type = view.columnGetType(groupBy.columnId);
    const icon = view.getIcon(type);
    const menuHandler = popMenu(target, {
        options: {
            input: {
                search: true,
            },
            items: [
                menuTitleItem('GROUP', () => {
                    onBack();
                    menuHandler.close();
                }),
                {
                    type: 'group',
                    name: '',
                    children: () => [
                        {
                            type: 'sub-menu',
                            name: 'Group By',
                            postfix: html `
                <div
                  style="display:flex;align-items:center;gap: 4px;font-size: 12px;line-height: 20px;color: var(--affine-text-secondary-color);margin-right: 4px;margin-left: 8px;"
                  class="dv-icon-16"
                >
                  ${renderUniLit(icon, {})}
                  ${view.columnGetName(groupBy.columnId)}
                </div>
                ${ArrowRightSmallIcon}
              `,
                            options: selectGroupByProperty(view, reopen),
                        },
                    ],
                },
                {
                    type: 'group',
                    name: '',
                    children: () => [
                        {
                            type: 'custom',
                            render: html ` <data-view-group-setting
                .view="${view}"
                .columnId="${groupBy.columnId}"
              ></data-view-group-setting>`,
                        },
                    ],
                },
            ],
        },
    });
};
//# sourceMappingURL=setting.js.map