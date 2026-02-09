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
import { nanoid } from '@blocksuite/store';
import { autoPlacement, flip, offset } from '@floating-ui/dom';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { html } from 'lit/static-html.js';
import { createPopup, popMenu } from '../../../../_common/components/index.js';
import { rangeWrap } from '../../../../_common/utils/math.js';
import { DatabaseSearchClose, DeleteIcon, MoreHorizontalIcon, PlusIcon, } from '../../common/icons/index.js';
import { stopPropagation } from '../event.js';
import { getTagColor, selectOptionColors } from './colors.js';
import { styles } from './styles.js';
let MultiTagSelect = (() => {
    let _classDecorators = [customElement('affine-multi-tag-select')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let __selectInput_decorators;
    let __selectInput_initializers = [];
    let __selectInput_extraInitializers = [];
    let _text_decorators;
    let _text_initializers = [];
    let _text_extraInitializers = [];
    let _selectedIndex_decorators;
    let _selectedIndex_initializers = [];
    let _selectedIndex_extraInitializers = [];
    let _mode_decorators;
    let _mode_initializers = [];
    let _mode_extraInitializers = [];
    let _options_decorators;
    let _options_initializers = [];
    let _options_extraInitializers = [];
    let _onOptionsChange_decorators;
    let _onOptionsChange_initializers = [];
    let _onOptionsChange_extraInitializers = [];
    let _value_decorators;
    let _value_initializers = [];
    let _value_extraInitializers = [];
    let _onChange_decorators;
    let _onChange_initializers = [];
    let _onChange_extraInitializers = [];
    let _editComplete_decorators;
    let _editComplete_initializers = [];
    let _editComplete_extraInitializers = [];
    var MultiTagSelect = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.filteredOptions = [];
            this.#_selectInput_accessor_storage = __runInitializers(this, __selectInput_initializers, void 0);
            this.#text_accessor_storage = (__runInitializers(this, __selectInput_extraInitializers), __runInitializers(this, _text_initializers, ''));
            this.#selectedIndex_accessor_storage = (__runInitializers(this, _text_extraInitializers), __runInitializers(this, _selectedIndex_initializers, 0));
            this._currentColor = (__runInitializers(this, _selectedIndex_extraInitializers), undefined);
            this.#mode_accessor_storage = __runInitializers(this, _mode_initializers, 'multi');
            this.#options_accessor_storage = (__runInitializers(this, _mode_extraInitializers), __runInitializers(this, _options_initializers, []));
            this.#onOptionsChange_accessor_storage = (__runInitializers(this, _options_extraInitializers), __runInitializers(this, _onOptionsChange_initializers, void 0));
            this.#value_accessor_storage = (__runInitializers(this, _onOptionsChange_extraInitializers), __runInitializers(this, _value_initializers, []));
            this.#onChange_accessor_storage = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _onChange_initializers, void 0));
            this.#editComplete_accessor_storage = (__runInitializers(this, _onChange_extraInitializers), __runInitializers(this, _editComplete_initializers, void 0));
            this._onDeleteSelected = (__runInitializers(this, _editComplete_extraInitializers), (selectedValue, value) => {
                const filteredValue = selectedValue.filter(item => item !== value);
                this.onChange(filteredValue);
            });
            this._onInput = (event) => {
                this.text = event.target.value;
            };
            this._onInputKeydown = (event) => {
                event.stopPropagation();
                const inputValue = this.text.trim();
                if (event.key === 'Backspace' && inputValue === '') {
                    this._onDeleteSelected(this.value, this.value[this.value.length - 1]);
                }
                else if (event.key === 'Enter' && !event.isComposing) {
                    this.selectedTag?.select();
                }
                else if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    this.setSelectedOption(this.selectedIndex - 1);
                }
                else if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    this.setSelectedOption(this.selectedIndex + 1);
                }
                else if (event.key === 'Escape') {
                    this.editComplete();
                }
                else if (event.key === 'Tab') {
                    event.preventDefault();
                    const selectTag = this.selectedTag;
                    if (selectTag) {
                        this.text = this.getTagFullName(selectTag, selectTag.group);
                    }
                }
            };
            this._onSelect = (id) => {
                const isExist = this.value.findIndex(item => item === id) > -1;
                if (isExist) {
                    // this.editComplete();
                    return;
                }
                const isSelected = this.value.indexOf(id) > -1;
                if (!isSelected) {
                    const newValue = this.isSingleMode ? [id] : [...this.value, id];
                    this.onChange(newValue);
                    if (this.isSingleMode) {
                        setTimeout(() => {
                            this.editComplete();
                        }, 4);
                    }
                }
                this.text = '';
            };
            this._createOption = () => {
                const value = this.text.trim();
                if (value === '')
                    return;
                const groupInfo = this.getGroupInfoByFullName(value);
                if (!groupInfo) {
                    return;
                }
                const name = groupInfo.name;
                const tagColor = this.color;
                this.clearColor();
                const newSelect = {
                    id: nanoid(),
                    value: name,
                    color: tagColor,
                    parentId: groupInfo.parent?.id,
                };
                this.newTags([newSelect]);
                const newValue = this.isSingleMode
                    ? [newSelect.id]
                    : [...this.value, newSelect.id];
                this.onChange(newValue);
                this.text = '';
                if (this.isSingleMode) {
                    this.editComplete();
                }
            };
            this._clickItemOption = (e, id) => {
                e.stopPropagation();
                const option = this.options.find(v => v.id === id);
                if (!option) {
                    return;
                }
                popMenu(e.target, {
                    options: {
                        input: {
                            initValue: option.value,
                            onComplete: text => {
                                this.changeTag({
                                    ...option,
                                    value: text,
                                });
                            },
                        },
                        items: [
                            {
                                type: 'action',
                                name: 'Delete',
                                icon: DeleteIcon,
                                class: 'delete-item',
                                select: () => {
                                    this.deleteTag(id);
                                },
                            },
                            {
                                type: 'group',
                                name: 'color',
                                children: () => selectOptionColors.map(item => {
                                    const styles = styleMap({
                                        backgroundColor: item.color,
                                        borderRadius: '50%',
                                        width: '20px',
                                        height: '20px',
                                    });
                                    return {
                                        type: 'action',
                                        name: item.name,
                                        icon: html ` <div style=${styles}></div>`,
                                        isSelected: option.color === item.color,
                                        select: () => {
                                            this.changeTag({
                                                ...option,
                                                color: item.color,
                                            });
                                        },
                                    };
                                }),
                            },
                        ],
                    },
                    middleware: [autoPlacement()],
                });
            };
            this.newTags = (tags) => {
                this.onOptionsChange([...tags, ...this.options]);
            };
            this.deleteTag = (id) => {
                this.onOptionsChange(this.options
                    .filter(v => v.id !== id)
                    .map(v => ({
                    ...v,
                    parentId: v.parentId === id ? undefined : v.parentId,
                })));
            };
            this.changeTag = (tag) => {
                this.onOptionsChange(this.options.map(v => (v.id === tag.id ? tag : v)));
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __selectInput_decorators = [query('.select-input')];
            _text_decorators = [state()];
            _selectedIndex_decorators = [state()];
            _mode_decorators = [property()];
            _options_decorators = [property({ attribute: false })];
            _onOptionsChange_decorators = [property({ attribute: false })];
            _value_decorators = [property({ attribute: false })];
            _onChange_decorators = [property({ attribute: false })];
            _editComplete_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __selectInput_decorators, { kind: "accessor", name: "_selectInput", static: false, private: false, access: { has: obj => "_selectInput" in obj, get: obj => obj._selectInput, set: (obj, value) => { obj._selectInput = value; } }, metadata: _metadata }, __selectInput_initializers, __selectInput_extraInitializers);
            __esDecorate(this, null, _text_decorators, { kind: "accessor", name: "text", static: false, private: false, access: { has: obj => "text" in obj, get: obj => obj.text, set: (obj, value) => { obj.text = value; } }, metadata: _metadata }, _text_initializers, _text_extraInitializers);
            __esDecorate(this, null, _selectedIndex_decorators, { kind: "accessor", name: "selectedIndex", static: false, private: false, access: { has: obj => "selectedIndex" in obj, get: obj => obj.selectedIndex, set: (obj, value) => { obj.selectedIndex = value; } }, metadata: _metadata }, _selectedIndex_initializers, _selectedIndex_extraInitializers);
            __esDecorate(this, null, _mode_decorators, { kind: "accessor", name: "mode", static: false, private: false, access: { has: obj => "mode" in obj, get: obj => obj.mode, set: (obj, value) => { obj.mode = value; } }, metadata: _metadata }, _mode_initializers, _mode_extraInitializers);
            __esDecorate(this, null, _options_decorators, { kind: "accessor", name: "options", static: false, private: false, access: { has: obj => "options" in obj, get: obj => obj.options, set: (obj, value) => { obj.options = value; } }, metadata: _metadata }, _options_initializers, _options_extraInitializers);
            __esDecorate(this, null, _onOptionsChange_decorators, { kind: "accessor", name: "onOptionsChange", static: false, private: false, access: { has: obj => "onOptionsChange" in obj, get: obj => obj.onOptionsChange, set: (obj, value) => { obj.onOptionsChange = value; } }, metadata: _metadata }, _onOptionsChange_initializers, _onOptionsChange_extraInitializers);
            __esDecorate(this, null, _value_decorators, { kind: "accessor", name: "value", static: false, private: false, access: { has: obj => "value" in obj, get: obj => obj.value, set: (obj, value) => { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
            __esDecorate(this, null, _onChange_decorators, { kind: "accessor", name: "onChange", static: false, private: false, access: { has: obj => "onChange" in obj, get: obj => obj.onChange, set: (obj, value) => { obj.onChange = value; } }, metadata: _metadata }, _onChange_initializers, _onChange_extraInitializers);
            __esDecorate(this, null, _editComplete_decorators, { kind: "accessor", name: "editComplete", static: false, private: false, access: { has: obj => "editComplete" in obj, get: obj => obj.editComplete, set: (obj, value) => { obj.editComplete = value; } }, metadata: _metadata }, _editComplete_initializers, _editComplete_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            MultiTagSelect = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get color() {
            if (!this._currentColor) {
                this._currentColor = getTagColor();
            }
            return this._currentColor;
        }
        get isSingleMode() {
            return this.mode === 'single';
        }
        get selectedTag() {
            return this.filteredOptions[this.selectedIndex];
        }
        static { this.styles = styles; }
        #_selectInput_accessor_storage;
        get _selectInput() { return this.#_selectInput_accessor_storage; }
        set _selectInput(value) { this.#_selectInput_accessor_storage = value; }
        #text_accessor_storage;
        get text() { return this.#text_accessor_storage; }
        set text(value) { this.#text_accessor_storage = value; }
        #selectedIndex_accessor_storage;
        get selectedIndex() { return this.#selectedIndex_accessor_storage; }
        set selectedIndex(value) { this.#selectedIndex_accessor_storage = value; }
        #mode_accessor_storage;
        get mode() { return this.#mode_accessor_storage; }
        set mode(value) { this.#mode_accessor_storage = value; }
        #options_accessor_storage;
        get options() { return this.#options_accessor_storage; }
        set options(value) { this.#options_accessor_storage = value; }
        #onOptionsChange_accessor_storage;
        get onOptionsChange() { return this.#onOptionsChange_accessor_storage; }
        set onOptionsChange(value) { this.#onOptionsChange_accessor_storage = value; }
        #value_accessor_storage;
        get value() { return this.#value_accessor_storage; }
        set value(value) { this.#value_accessor_storage = value; }
        #onChange_accessor_storage;
        get onChange() { return this.#onChange_accessor_storage; }
        set onChange(value) { this.#onChange_accessor_storage = value; }
        #editComplete_accessor_storage;
        get editComplete() { return this.#editComplete_accessor_storage; }
        set editComplete(value) { this.#editComplete_accessor_storage = value; }
        clearColor() {
            this._currentColor = undefined;
        }
        optionsIdMap() {
            return Object.fromEntries(this.options.map(v => [v.id, v]));
        }
        getTagGroup(tag, map = this.optionsIdMap()) {
            const result = [];
            let parentId = tag.parentId;
            while (parentId) {
                const parent = map[parentId];
                result.unshift(parent);
                parentId = parent.parentId;
            }
            return result;
        }
        setSelectedOption(index) {
            this.selectedIndex = rangeWrap(index, 0, this.filteredOptions.length);
        }
        getTagFullName(tag, group) {
            return [...group, tag].map(v => v.value).join('/');
        }
        getGroupInfoByFullName(name) {
            const strings = name.split('/');
            const names = strings.slice(0, -1);
            const result = [];
            for (const text of names) {
                const parent = result[result.length - 1];
                const tag = this.options.find(v => v.parentId === parent?.id && v.value === text);
                if (!tag) {
                    return;
                }
                result.push(tag);
            }
            return {
                name: strings[strings.length - 1],
                group: result,
                parent: result[result.length - 1],
            };
        }
        _filterOptions() {
            const map = this.optionsIdMap();
            let matched = false;
            const options = this.options
                .map(v => ({
                ...v,
                group: this.getTagGroup(v, map),
            }))
                .filter(item => {
                if (!this.text) {
                    return true;
                }
                return this.getTagFullName(item, item.group)
                    .toLocaleLowerCase()
                    .includes(this.text.toLocaleLowerCase());
            })
                .map(v => {
                const fullName = this.getTagFullName(v, v.group);
                if (fullName === this.text) {
                    matched = true;
                }
                return {
                    ...v,
                    isCreate: false,
                    select: () => this._onSelect(v.id),
                };
            });
            if (this.text && !matched) {
                options.push({
                    id: 'create',
                    color: this.color,
                    value: this.text,
                    isCreate: true,
                    group: [],
                    select: this._createOption,
                });
            }
            return options;
        }
        firstUpdated() {
            requestAnimationFrame(() => {
                this._selectInput.focus();
            });
            this._disposables.addFromEvent(this, 'click', () => {
                this._selectInput.focus();
            });
            this._disposables.addFromEvent(this._selectInput, 'copy', e => {
                e.stopPropagation();
            });
            this._disposables.addFromEvent(this._selectInput, 'cut', e => {
                e.stopPropagation();
            });
        }
        render() {
            this.filteredOptions = this._filterOptions();
            this.setSelectedOption(this.selectedIndex);
            const selectedTag = this.value;
            const map = new Map(this.options.map(v => [v.id, v]));
            return html `
      <div class="affine-select-cell-select">
        <div class="select-input-container">
          ${selectedTag.map(id => {
                const option = map.get(id);
                if (!option) {
                    return;
                }
                const style = styleMap({
                    backgroundColor: option.color,
                });
                return html ` <div class="select-selected" style=${style}>
              <div class="select-selected-text">${option.value}</div>
              <span
                class="close-icon"
                @click="${() => this._onDeleteSelected(selectedTag, id)}"
                >${DatabaseSearchClose}</span
              >
            </div>`;
            })}
          <input
            class="select-input"
            placeholder="在此输入..."
            .value="${this.text}"
            @input="${this._onInput}"
            @keydown="${this._onInputKeydown}"
            @pointerdown="${stopPropagation}"
          />
        </div>
        <div class="select-option-container">
          <div class="select-option-container-header">
            选择标签或创建新标签
          </div>
          ${repeat(this.filteredOptions, select => select.id, (select, index) => {
                const isSelected = index === this.selectedIndex;
                const mouseenter = () => {
                    this.setSelectedOption(index);
                };
                const classes = classMap({
                    'select-option': true,
                    selected: isSelected,
                });
                const style = styleMap({
                    backgroundColor: select.color,
                });
                const clickOption = (e) => this._clickItemOption(e, select.id);
                return html `
                <div class="${classes}" @mouseenter="${mouseenter}">
                  <div
                    class="select-option-text-container"
                    @click="${select.select}"
                  >
                    ${select.isCreate
                    ? html ` <div class="select-option-new-icon">
                          Create ${PlusIcon}
                        </div>`
                    : ''}
                    <div style="display:flex;flex-direction: column">
                      <div
                        style="display:flex;align-items:center;margin-bottom: 2px;opacity: 0.5;"
                      >
                        ${select.group.map((v, i) => {
                    const style = styleMap({
                        backgroundColor: v.color,
                    });
                    return html `${i === 0
                        ? ''
                        : html `<span style="margin: 0 1px">/</span>`}<span
                              class="select-option-group-name"
                              style=${style}
                              >${v.value}</span
                            >`;
                })}
                      </div>
                      <div style="display:flex;">
                        <div style=${style} class="select-option-name">
                          ${select.value}
                        </div>
                      </div>
                    </div>
                  </div>
                  ${!select.isCreate
                    ? html ` <div
                        class="select-option-icon"
                        @click="${clickOption}"
                      >
                        ${MoreHorizontalIcon}
                      </div>`
                    : null}
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
    return MultiTagSelect = _classThis;
})();
export { MultiTagSelect };
export const popTagSelect = (target, ops) => {
    const component = new MultiTagSelect();
    if (ops.mode) {
        component.mode = ops.mode;
    }
    component.style.width = `${Math.max(ops.minWidth ?? target.offsetWidth, target.offsetWidth)}px`;
    component.value = ops.value;
    component.onChange = tags => {
        ops.onChange(tags);
        component.value = tags;
    };
    component.options = ops.options;
    component.onOptionsChange = options => {
        ops.onOptionsChange(options);
        component.options = options;
    };
    component.editComplete = () => {
        ops.onComplete?.();
        remove();
    };
    const remove = createPopup(target, component, {
        onClose: ops.onComplete,
        middleware: [flip(), offset({ mainAxis: -28, crossAxis: 112 })],
        container: ops.container,
    });
    return remove;
};
//# sourceMappingURL=multi-tag-select.js.map