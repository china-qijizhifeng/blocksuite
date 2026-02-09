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
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { popMenu } from '../../../../../../_common/components/index.js';
import { ArrowRightSmallIcon, DeleteIcon, DuplicateIcon, MoreHorizontalIcon, } from '../../../../../../_common/icons/index.js';
import { popGroupSetting, popSelectGroupByProperty, } from '../../../../common/group-by/setting.js';
import { FilterIcon, GroupingIcon, InfoIcon, } from '../../../../common/icons/index.js';
import { popPropertiesSetting } from '../../../../common/properties.js';
import { popFilterModal } from '../../../filter/filter-modal.js';
import { WidgetBase } from '../../../widget-base.js';
const styles = css `
  .affine-database-toolbar-item.more-action {
    padding: 2px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    cursor: pointer;
  }

  .affine-database-toolbar-item.more-action:hover {
    background: var(--affine-hover-color);
  }

  .affine-database-toolbar-item.more-action svg {
    width: 20px;
    height: 20px;
    fill: var(--affine-icon-color);
  }

  .more-action.active {
    background: var(--affine-hover-color);
  }
`;
let DataViewHeaderToolsViewOptions = (() => {
    let _classDecorators = [customElement('data-view-header-tools-view-options')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetBase;
    var DataViewHeaderToolsViewOptions = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.openMoreAction = (target) => {
                this.showToolBar(true);
                popViewOptions(target, this.view, () => {
                    this.showToolBar(false);
                });
            };
            this.clickMoreAction = (e) => {
                e.stopPropagation();
                this.openMoreAction(e.target);
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DataViewHeaderToolsViewOptions = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        #view_accessor_storage;
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        showToolBar(show) {
            const tools = this.closest('data-view-header-tools');
            if (tools) {
                tools.showToolBar = show;
            }
        }
        render() {
            if (this.view.readonly) {
                return;
            }
            return html ` <div
      class="affine-database-toolbar-item more-action dv-icon-20"
      @click="${this.clickMoreAction}"
    >
      ${MoreHorizontalIcon}
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DataViewHeaderToolsViewOptions = _classThis;
})();
export { DataViewHeaderToolsViewOptions };
export const popViewOptions = (target, view, onClose) => {
    const reopen = () => {
        popViewOptions(target, view);
    };
    popMenu(target, {
        options: {
            style: 'min-width:300px',
            input: {
                initValue: view.name,
                onComplete: text => {
                    view.updateName(text);
                },
            },
            items: [
                {
                    type: 'action',
                    name: 'Properties',
                    icon: InfoIcon,
                    postfix: ArrowRightSmallIcon,
                    select: () => {
                        requestAnimationFrame(() => {
                            popPropertiesSetting(target, {
                                view: view,
                                onBack: reopen,
                            });
                        });
                    },
                },
                {
                    type: 'action',
                    name: 'Filter',
                    icon: FilterIcon,
                    postfix: ArrowRightSmallIcon,
                    select: () => {
                        popFilterModal(target, {
                            vars: view.vars,
                            value: view.filter,
                            onChange: view.updateFilter.bind(view),
                            isRoot: true,
                            onBack: reopen,
                            onDelete: () => {
                                view.updateFilter({
                                    ...view.filter,
                                    conditions: [],
                                });
                            },
                        });
                    },
                },
                {
                    type: 'action',
                    name: 'Group',
                    icon: GroupingIcon,
                    postfix: ArrowRightSmallIcon,
                    select: () => {
                        const groupBy = view.view.groupBy;
                        if (!groupBy) {
                            popSelectGroupByProperty(target, view);
                        }
                        else {
                            popGroupSetting(target, view, reopen);
                        }
                    },
                },
                {
                    type: 'action',
                    name: 'Duplicate',
                    icon: DuplicateIcon,
                    select: () => {
                        view.duplicateView();
                    },
                },
                {
                    type: 'group',
                    name: '',
                    children: () => [
                        {
                            type: 'action',
                            name: 'Delete View',
                            icon: DeleteIcon,
                            select: () => {
                                view.deleteView();
                            },
                            class: 'delete-item',
                        },
                    ],
                },
            ],
            onClose: onClose,
        },
    });
};
//# sourceMappingURL=view-options.js.map