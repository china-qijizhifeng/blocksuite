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
import '../../common/component/overflow/overflow.js';
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { popFilterableSimpleMenu, popMenu, } from '../../../../_common/components/index.js';
import { AddCursorIcon, DuplicateIcon, MoreHorizontalIcon, MoveLeftIcon, MoveRightIcon, } from '../../../../_common/icons/index.js';
import { DeleteIcon } from '../../common/icons/index.js';
import { renderUniLit } from '../../utils/uni-component/index.js';
import { WidgetBase } from '../widget-base.js';
let DataViewHeaderViews = (() => {
    let _classDecorators = [customElement('data-view-header-views')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetBase;
    var DataViewHeaderViews = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._addViewMenu = (event) => {
                popFilterableSimpleMenu(event.target, this.viewSource.allViewMeta.map(v => {
                    return {
                        type: 'action',
                        name: v.model.defaultName,
                        icon: html `<uni-lit .uni=${v.renderer.icon}></uni-lit>`,
                        select: () => {
                            const id = this.viewSource.viewAdd(v.type);
                            this.viewSource.selectView(id);
                        },
                    };
                }));
            };
            this._showMore = (event) => {
                const views = this.viewSource.views;
                popFilterableSimpleMenu(event.target, [
                    ...views.map(v => {
                        const openViewOption = (event) => {
                            event.stopPropagation();
                            this.openViewOption(event.target, v.view.id);
                        };
                        return {
                            type: 'action',
                            icon: html `<uni-lit .uni=${this.getRenderer(v).icon}></uni-lit>`,
                            name: v.view.name,
                            isSelected: this.viewSource.currentViewId === v.view.id,
                            select: () => {
                                this.viewSource.selectView(v.view.id);
                            },
                            postfix: html `<div
            class="dv-hover dv-round-4"
            @click="${openViewOption}"
            style="display:flex;align-items:center;"
          >
            ${MoreHorizontalIcon}
          </div>`,
                        };
                    }),
                    {
                        type: 'group',
                        name: '',
                        hide: () => this.readonly,
                        children: () => this.viewSource.allViewMeta.map(v => {
                            return {
                                type: 'action',
                                name: `Create ${v.model.defaultName}`,
                                icon: html `<uni-lit .uni=${v.renderer.icon}></uni-lit>`,
                                select: () => {
                                    const id = this.viewSource.viewAdd(v.type);
                                    this.viewSource.selectView(id);
                                },
                            };
                        }),
                    },
                ]);
            };
            this.openViewOption = (target, id) => {
                if (this.readonly) {
                    return;
                }
                const views = this.viewSource.views;
                const index = views.findIndex(v => v.view.id === id);
                const view = views[index];
                if (!view) {
                    return;
                }
                popMenu(target, {
                    options: {
                        input: {
                            initValue: view.view.name,
                            onComplete: text => {
                                view.updateView(_data => ({
                                    name: text,
                                }));
                            },
                        },
                        items: [
                            {
                                type: 'action',
                                name: 'Edit View',
                                icon: renderUniLit(this.getRenderer(view).icon, {}),
                                select: () => {
                                    this.closest('affine-data-view-renderer')
                                        ?.querySelector('data-view-header-tools-view-options')
                                        ?.openMoreAction(target);
                                },
                            },
                            {
                                type: 'action',
                                name: 'Move Left',
                                hide: () => index === 0,
                                icon: MoveLeftIcon,
                                select: () => {
                                    const target = views[index - 1];
                                    this.viewSource.moveTo(view.view.id, target ? { before: true, id: target.view.id } : 'start');
                                },
                            },
                            {
                                type: 'action',
                                name: 'Move Right',
                                icon: MoveRightIcon,
                                hide: () => index === views.length - 1,
                                select: () => {
                                    const target = views[index + 1];
                                    this.viewSource.moveTo(view.view.id, target ? { before: false, id: target.view.id } : 'end');
                                },
                            },
                            {
                                type: 'action',
                                name: 'Duplicate',
                                icon: DuplicateIcon,
                                select: () => {
                                    this.viewSource.duplicate(view.view.id);
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
                                            view.delete();
                                        },
                                        class: 'delete-item',
                                    },
                                ],
                            },
                        ],
                    },
                });
            };
            this.renderMore = (count) => {
                const views = this.viewSource.views;
                if (count === views.length) {
                    if (this.readonly) {
                        return;
                    }
                    return html `<div
        class="database-view-button dv-icon-16 dv-hover"
        @click="${this._addViewMenu}"
      >
        ${AddCursorIcon}
      </div>`;
                }
                return html `
      <div class="database-view-button dv-hover" @click="${this._showMore}">
        ${views.length - count} More
      </div>
    `;
            };
            this.renderViews = () => {
                const views = this.viewSource.views;
                return views.map(view => () => {
                    const classList = classMap({
                        'database-view-button': true,
                        'dv-hover': true,
                        active: this.viewSource.currentViewId === view.view.id,
                    });
                    return html `
        <div
          class="${classList}"
          style="margin-right: 4px;"
          @click="${(event) => this._clickView(event, view.view.id)}"
        >
          <uni-lit class="icon" .uni="${this.getRenderer(view).icon}"></uni-lit>
          <div class="name">${view.view.name}</div>
        </div>
      `;
                });
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DataViewHeaderViews = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get readonly() {
            return this.viewSource.readonly;
        }
        static { this.styles = css `
    data-view-header-views {
      height: 32px;
      display: flex;
      user-select: none;
      gap: 4px;
    }
    data-view-header-views::-webkit-scrollbar-thumb {
      width: 1px;
    }

    .database-view-button {
      height: 100%;
      cursor: pointer;
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 14px;
      display: flex;
      align-items: center;
      color: var(--affine-text-secondary-color);
      white-space: nowrap;
    }

    .database-view-button .name {
      align-items: center;
      height: 22px;
      max-width: 100px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .database-view-button .icon {
      margin-right: 6px;
      display: block;
    }

    .database-view-button .icon svg {
      width: 16px;
      height: 16px;
    }

    .database-view-button.active {
      color: var(--affine-text-primary-color);
      background-color: var(--affine-hover-color-filled);
    }
  `; }
        getRenderer(view) {
            return this.viewSource.getViewMeta(view.view.mode).renderer;
        }
        _clickView(event, id) {
            if (this.viewSource.currentViewId !== id) {
                this.viewSource.selectView(id);
                return;
            }
            this.openViewOption(event.target, id);
        }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.add(this.viewSource.updateSlot.on(() => {
                this.requestUpdate();
            }));
        }
        render() {
            return html `
      <component-overflow
        .renderItem="${this.renderViews()}"
        .renderMore="${this.renderMore}"
      ></component-overflow>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DataViewHeaderViews = _classThis;
})();
export { DataViewHeaderViews };
//# sourceMappingURL=views.js.map