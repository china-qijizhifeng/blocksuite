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
import { autoUpdate, computePosition, flip, offset, shift, } from '@floating-ui/dom';
import { css, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { checkboxChecked, checkboxUnchecked, } from '../../../list-block/utils/icons.js';
import { ArrowRightSmallIcon, DoneIcon } from '../../icons/index.js';
import { rangeWrap } from '../../utils/math.js';
const isSelectableItem = (item) => {
    return item.type === 'select';
};
let MenuComponent = (() => {
    let _classDecorators = [customElement('affine-menu')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let __text_decorators;
    let __text_initializers = [];
    let __text_extraInitializers = [];
    let __selectedIndex_decorators;
    let __selectedIndex_initializers = [];
    let __selectedIndex_extraInitializers = [];
    let _options_decorators;
    let _options_initializers = [];
    let _options_extraInitializers = [];
    var MenuComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_text_accessor_storage = __runInitializers(this, __text_initializers, undefined);
            this.#_selectedIndex_accessor_storage = (__runInitializers(this, __text_extraInitializers), __runInitializers(this, __selectedIndex_initializers, undefined));
            this.subMenu = __runInitializers(this, __selectedIndex_extraInitializers);
            this.inputRef = createRef();
            this.allItems = [];
            this._checked = {};
            this.processMap = {
                action: menu => {
                    const icon = menu.icon
                        ? html ` <div class="icon">${menu.icon}</div>`
                        : nothing;
                    const postfixIcon = menu.postfix ?? (menu.isSelected ? DoneIcon : undefined);
                    const postfix = postfixIcon
                        ? html ` <div class="icon">${postfixIcon}</div>`
                        : nothing;
                    return [
                        {
                            type: 'select',
                            label: html `
            ${icon}
            <div class="affine-menu-action-text">
              ${menu.label ?? menu.name}
            </div>
            ${postfix}
          `,
                            onHover: menu.onHover,
                            select: () => {
                                menu.select();
                                this._complete();
                            },
                            class: menu.class ?? (menu.isSelected ? 'selected-item' : ''),
                        },
                    ];
                },
                checkbox: menu => {
                    const postfix = menu.postfix
                        ? html ` <div class="icon">${menu.postfix}</div>`
                        : nothing;
                    const checked = this.getChecked(menu.name) ?? menu.checked;
                    return [
                        {
                            type: 'select',
                            label: html `
            <div class="icon">
              ${checked ? checkboxChecked() : checkboxUnchecked()}
            </div>
            <div class="affine-menu-action-text">
              ${menu.label ?? menu.name}
            </div>
            ${postfix}
          `,
                            select: () => {
                                this.setChecked(menu.name, menu.select(checked));
                            },
                            class: menu.class ?? '',
                        },
                    ];
                },
                'toggle-switch': menu => {
                    const postfix = menu.postfix
                        ? html ` <div class="icon">${menu.postfix}</div>`
                        : nothing;
                    const onChange = (on) => {
                        menu.onChange(on);
                    };
                    return [
                        {
                            type: 'normal',
                            label: html `
            <div class="affine-menu-action-text">
              ${menu.label ?? menu.name}
            </div>

            <toggle-switch .on=${menu.on} .onChange=${onChange}></toggle-switch>
            ${postfix}
          `,
                            class: menu.class ?? '',
                        },
                    ];
                },
                group: menu => {
                    const items = menu.children().flatMap(menu => this.process(menu));
                    if (items[0]) {
                        items[0].upDivider = true;
                    }
                    if (items[items.length - 1]) {
                        items[items.length - 1].downDivider = true;
                    }
                    return items;
                },
                'sub-menu': menu => {
                    const openSubMenu = () => {
                        this.subMenu?.remove();
                        setTimeout(() => {
                            const subMenu = new MenuComponent();
                            const options = menu.options;
                            subMenu.options = {
                                ...options,
                                onClose: () => {
                                    options.onClose?.();
                                    this.clearSubMenu();
                                },
                                onComplete: () => {
                                    this._complete();
                                },
                            };
                            this.append(subMenu);
                            computePosition(this, subMenu, {
                                placement: 'right-start',
                                middleware: [
                                    flip({
                                        fallbackPlacements: ['left-start', 'right-end', 'left-end'],
                                    }),
                                    offset(4),
                                ],
                            })
                                .then(({ x, y }) => {
                                Object.assign(subMenu.style, {
                                    left: `${x}px`,
                                    top: `${y}px`,
                                });
                            })
                                .catch(console.error);
                            this.subMenu = subMenu;
                        });
                    };
                    const select = () => {
                        menu.select?.();
                        menu.select ? this._complete() : openSubMenu();
                    };
                    const postfix = html ` <div class="icon">
        ${menu.postfix ?? ArrowRightSmallIcon}
      </div>`;
                    return [
                        {
                            type: 'select',
                            label: html `${menu.icon
                                ? html ` <div class="icon">${menu.icon}</div>`
                                : nothing}
            <div class="affine-menu-action-text">
              ${menu.label ?? menu.name}
            </div>
            ${postfix}`,
                            mouseEnter: openSubMenu,
                            select,
                            class: menu.isSelected ? 'selected-item' : '',
                        },
                    ];
                },
                custom: menu => {
                    return [
                        {
                            type: 'ui',
                            render: menu.render,
                        },
                    ];
                },
            };
            this.initTime = 0;
            this.#options_accessor_storage = __runInitializers(this, _options_initializers, void 0);
            this._inputText = (__runInitializers(this, _options_extraInitializers), (e) => {
                const target = e.target;
                this.text = target.value;
            });
            this._complete = () => {
                this.options.onComplete?.();
                this.close();
            };
            this._clickContainer = (e) => {
                e.stopPropagation();
                this.focusInput();
            };
            this._mouseEnter = (index) => {
                if (this._isConsciousChoice()) {
                    return;
                }
                if (index !== this.selectedIndex) {
                    this.selectedIndex = index;
                    this.clearSubMenu();
                    this.selectedItem?.mouseEnter?.();
                }
            };
            this.mouseEnterHeader = () => {
                if (this.isSearchMode) {
                    return;
                }
                this._mouseEnter(-1);
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __text_decorators = [state()];
            __selectedIndex_decorators = [state()];
            _options_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __text_decorators, { kind: "accessor", name: "_text", static: false, private: false, access: { has: obj => "_text" in obj, get: obj => obj._text, set: (obj, value) => { obj._text = value; } }, metadata: _metadata }, __text_initializers, __text_extraInitializers);
            __esDecorate(this, null, __selectedIndex_decorators, { kind: "accessor", name: "_selectedIndex", static: false, private: false, access: { has: obj => "_selectedIndex" in obj, get: obj => obj._selectedIndex, set: (obj, value) => { obj._selectedIndex = value; } }, metadata: _metadata }, __selectedIndex_initializers, __selectedIndex_extraInitializers);
            __esDecorate(this, null, _options_decorators, { kind: "accessor", name: "options", static: false, private: false, access: { has: obj => "options" in obj, get: obj => obj.options, set: (obj, value) => { obj.options = value; } }, metadata: _metadata }, _options_initializers, _options_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            MenuComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get minIndex() {
            return this.isSearchMode ? 0 : -1;
        }
        get selectedIndex() {
            return this._selectedIndex;
        }
        set selectedIndex(index) {
            const old = this._selectedIndex != null
                ? this.selectableItems[this._selectedIndex]
                : undefined;
            old?.onHover?.(false);
            if (index == null) {
                this._selectedIndex = index;
                return;
            }
            const newIndex = rangeWrap(index ?? this.minIndex, this.minIndex, this.selectableItems.length);
            this._selectedIndex = newIndex;
            this.selectableItems[newIndex]?.onHover?.(true);
        }
        get text() {
            return this._text ?? this.options.input?.initValue ?? '';
        }
        set text(value) {
            this._text = value;
        }
        get selectedItem() {
            return this.selectedIndex != null
                ? this.selectableItems[this.selectedIndex]
                : undefined;
        }
        get isSearchMode() {
            return this.options.input?.search;
        }
        static { this.styles = css `
    affine-menu {
      font-family: var(--affine-font-family);
      display: flex;
      flex-direction: column;
      user-select: none;
      min-width: 200px;
      box-shadow: var(--affine-shadow-2);
      border-radius: 8px;
      background-color: var(--affine-background-overlay-panel-color);
      padding: 8px;
      position: absolute;
      z-index: 999;
    }

    affine-menu * {
      box-sizing: border-box;
    }

    .affine-menu-body {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .affine-menu-header input {
      width: 100%;
      border-radius: 4px;
      outline: none;
      font-size: 14px;
      line-height: 22px;
      padding: 5px 12px;
      border: 1px solid var(--affine-border-color);
    }

    .affine-menu-header input::placeholder {
      color: var(--affine-placeholder-color);
    }

    .affine-menu-header input:focus {
      border: 1px solid var(--affine-primary-color);
    }

    .affine-menu-action {
      padding: 4px 12px;
      cursor: pointer;
      display: flex;
      gap: 4px;
      border-radius: 4px;
    }

    .affine-menu-action svg {
      width: 20px;
      height: 20px;
      color: var(--affine-icon-color);
      fill: var(--affine-icon-color);
    }

    .affine-menu-action .icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .affine-menu-action .content {
      border-radius: 4px;
      cursor: pointer;
      white-space: nowrap;
      justify-content: space-between;
      display: flex;
      align-items: center;
      font-size: 14px;
      line-height: 22px;
      flex: 1;
      gap: 8px;
    }

    .affine-menu-action.selected {
      background-color: var(--affine-hover-color);
    }

    .affine-menu-action.selected.delete-item {
      background-color: var(--affine-background-error-color);
      color: var(--affine-error-color);
    }

    .affine-menu-action.selected.delete-item .icon > svg {
      color: var(--affine-error-color);
    }

    .affine-menu-action.selected-item {
      color: var(--affine-text-emphasis-color);
    }

    .affine-menu-action.selected-item svg {
      color: var(--affine-text-emphasis-color);
      fill: currentColor;
    }

    .database-menu-component-action-button:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }

    .no-results {
      font-size: 12px;
      line-height: 20px;
      color: var(--affine-text-secondary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 8px;
    }

    .affine-menu-action-text {
      flex: 1;
      padding: 0 4px;
    }
  `; }
        #_text_accessor_storage;
        get _text() { return this.#_text_accessor_storage; }
        set _text(value) { this.#_text_accessor_storage = value; }
        #_selectedIndex_accessor_storage;
        get _selectedIndex() { return this.#_selectedIndex_accessor_storage; }
        set _selectedIndex(value) { this.#_selectedIndex_accessor_storage = value; }
        #options_accessor_storage;
        get options() { return this.#options_accessor_storage; }
        set options(value) { this.#options_accessor_storage = value; }
        setChecked(name, checked) {
            this._checked[name] = checked;
            this.requestUpdate();
        }
        getChecked(name) {
            return this._checked[name];
        }
        close() {
            this.options.onClose?.();
        }
        show(item) {
            if (this.isSearchMode) {
                if (item.type === 'group') {
                    return !item.hide?.();
                }
                if (item.type === 'custom') {
                    return this.text.length === 0;
                }
                if (!item.name.toLowerCase().includes(this.text.toLowerCase())) {
                    return false;
                }
            }
            return !item.hide?.();
        }
        process(menu) {
            if (this.show(menu)) {
                return this.processMap[menu.type](menu);
            }
            else {
                return [];
            }
        }
        focusInput() {
            this.inputRef.value?.focus();
        }
        _isConsciousChoice() {
            return Date.now() < this.initTime + 100;
        }
        clearSubMenu() {
            this.subMenu?.remove();
            this.subMenu = undefined;
            this.focusInput();
        }
        showHeader() {
            return !this.isSearchMode || !!this.text;
        }
        firstUpdated() {
            this.initTime = Date.now();
            const input = this.inputRef.value;
            if (input) {
                requestAnimationFrame(() => {
                    this.focusInput();
                });
                const length = input.value.length;
                input.setSelectionRange(length, length);
                this._disposables.addFromEvent(input, 'keydown', e => {
                    e.stopPropagation();
                    if (e.key === 'Escape') {
                        this.close();
                        return;
                    }
                    if (e.key === 'Enter' && !e.isComposing) {
                        const selectedItem = this.selectedItem;
                        if (selectedItem) {
                            selectedItem.select();
                        }
                        else {
                            this.options.input?.onComplete?.(this.text);
                            this._complete();
                        }
                        return;
                    }
                    if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        this.selectedIndex =
                            this.selectedIndex != null ? this.selectedIndex - 1 : this.minIndex;
                        return;
                    }
                    if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        this.selectedIndex =
                            this.selectedIndex != null ? this.selectedIndex + 1 : this.minIndex;
                        return;
                    }
                });
                this._disposables.addFromEvent(input, 'copy', e => {
                    e.stopPropagation();
                });
                this._disposables.addFromEvent(input, 'cut', e => {
                    e.stopPropagation();
                });
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.selectedItem?.onHover?.(false);
        }
        processItems() {
            this.allItems = [];
            this.selectableItems = [];
            this.options.items
                .flatMap(item => this.process(item))
                .forEach(item => {
                const isSelectable = isSelectableItem(item);
                this.allItems.push({
                    ...item,
                    index: isSelectable ? this.selectableItems.length : undefined,
                });
                if (isSelectable) {
                    this.selectableItems.push(item);
                }
            });
        }
        render() {
            this.processItems();
            this.selectedIndex = this._selectedIndex;
            const showHeader = this.showHeader();
            const headerStyle = styleMap({
                opacity: showHeader ? '1' : '0',
                height: showHeader ? undefined : '0',
                overflow: showHeader ? undefined : 'hidden',
            });
            const showHeaderDivider = this.selectableItems.length > 0 && showHeader;
            return html `
      <div
        class="affine-menu"
        style=${ifDefined(this.options.style)}
        @click="${this._clickContainer}"
      >
        ${this.options.input
                ? html ` <div
                class="affine-menu-header"
                style=${headerStyle}
                @mouseenter="${this.mouseEnterHeader}"
              >
                <input
                  autocomplete="off"
                  data-1p-ignore
                  ${ref(this.inputRef)}
                  type="text"
                  placeholder="${this.options.input?.placeholder ?? ''}"
                  value="${this.text ?? this.options.input?.initValue ?? ''}"
                  @input="${this._inputText}"
                />
              </div>
              ${showHeaderDivider ? html `<menu-divider></menu-divider>` : null}`
                : null}
        <div class="affine-menu-body">
          ${this.selectableItems.length === 0 && this.isSearchMode
                ? html ` <div class="no-results">No Results</div>`
                : ''}
          ${repeat(this.allItems, (menu, index) => {
                const i = menu.index;
                const hideDividerWhenHeaderDividerIsShow = i === 0 && showHeaderDivider;
                const divider = menu.upDivider || this.allItems[index - 1]?.downDivider;
                const mouseEnter = () => {
                    this._mouseEnter(i);
                };
                if (menu.type === 'ui') {
                    return html `
                ${divider ? html `<menu-divider></menu-divider>` : null}
                <div @mouseenter=${mouseEnter}>${menu.render}</div>
              `;
                }
                const itemClass = menu.class || 'affine-menu-item';
                const classes = classMap({
                    'affine-menu-action': true,
                    selected: menu.type === 'select' && this._selectedIndex === i,
                    [itemClass]: true,
                });
                const select = () => {
                    if (!isSelectableItem(menu))
                        return;
                    menu.select();
                };
                return html `
              ${divider && !hideDividerWhenHeaderDividerIsShow
                    ? html `<menu-divider></menu-divider>`
                    : null}
              <div
                class="${classes}"
                @click=${select}
                @mouseenter=${mouseEnter}
              >
                <div class="content">${menu.label}</div>
              </div>
            `;
            })}
        </div>
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return MenuComponent = _classThis;
})();
export { MenuComponent };
export const getDefaultModalRoot = (ele) => {
    const host = ele.closest('editor-host') ?? ele.closest('.data-view-popup-container');
    if (host) {
        return host;
    }
    return document.body;
};
export const createModal = (container = document.body) => {
    const div = document.createElement('div');
    div.style.pointerEvents = 'auto';
    div.style.position = 'absolute';
    div.style.left = '0';
    div.style.top = '0';
    div.style.width = '100%';
    div.style.height = '100%';
    div.style.zIndex = '1001';
    div.style.fontFamily = 'var(--affine-font-family)';
    container.append(div);
    return div;
};
export const positionToVRect = (x, y) => {
    return {
        getBoundingClientRect() {
            return {
                x: x,
                y: y,
                width: 0,
                height: 0,
                top: y,
                bottom: y,
                left: x,
                right: x,
            };
        },
    };
};
export const createPopup = (target, content, options) => {
    const modal = createModal(options?.container ?? getDefaultModalRoot(target));
    autoUpdate(target, content, () => {
        computePosition(target, content, {
            placement: options?.placement,
            middleware: options?.middleware ?? [shift({ crossAxis: true })],
        })
            .then(({ x, y }) => {
            Object.assign(content.style, {
                left: `${x}px`,
                top: `${y}px`,
            });
        })
            .catch(console.error);
    });
    modal.append(content);
    modal.onmousedown = ev => {
        if (ev.target === modal) {
            modal.remove();
            options?.onClose?.();
        }
    };
    modal.oncontextmenu = ev => {
        ev.preventDefault();
        if (ev.target === modal) {
            modal.remove();
            options?.onClose?.();
        }
    };
    return () => modal.remove();
};
export const popMenu = (target, props) => {
    const menu = new MenuComponent();
    menu.options = {
        ...props.options,
        onClose: () => {
            props.options.onClose?.();
            close();
        },
    };
    const close = createPopup(target, menu, {
        onClose: props.options.onClose,
        middleware: props.middleware,
        container: props.container,
        placement: props.placement,
    });
    return {
        close,
    };
};
export const popFilterableSimpleMenu = (target, options, onClose) => {
    popMenu(target, {
        options: {
            input: {
                placeholder: 'Search',
                search: true,
            },
            items: options,
            onClose,
        },
    });
};
//# sourceMappingURL=menu.js.map