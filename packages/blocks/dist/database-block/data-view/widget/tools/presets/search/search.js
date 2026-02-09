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
import '../../../filter/filter-group.js';
import { baseTheme } from '@toeverything/theme';
import { css, html, unsafeCSS } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { DatabaseSearchClose, DatabaseSearchIcon, } from '../../../../common/icons/index.js';
import { stopPropagation } from '../../../../utils/event.js';
import { WidgetBase } from '../../../widget-base.js';
const styles = css `
  .affine-database-search-container {
    position: relative;
    display: flex;
    align-items: center;
    gap: 8px;
    width: 24px;
    height: 32px;
    border-radius: 8px;
    transition: all 0.3s ease;
    overflow: hidden;
  }
  .affine-database-search-container svg {
    width: 20px;
    height: 20px;
    fill: var(--affine-icon-color);
  }

  .search-container-expand {
    overflow: visible;
    width: 138px;
    background-color: var(--affine-hover-color);
  }

  .search-input-container {
    display: flex;
    align-items: center;
  }

  .close-icon {
    display: flex;
    align-items: center;
    padding-right: 8px;
    height: 100%;
    cursor: pointer;
  }

  .affine-database-search-input-icon {
    position: absolute;
    left: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    cursor: pointer;
    padding: 2px;
    border-radius: 4px;
    height: max-content;
  }
  .affine-database-search-input-icon:hover {
    background: var(--affine-hover-color);
  }

  .search-container-expand .affine-database-search-input-icon {
    left: 4px;
    pointer-events: none;
  }

  .affine-database-search-input {
    flex: 1;
    width: 100%;
    padding: 0 2px 0 30px;
    border: none;
    font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
    font-size: var(--affine-font-sm);
    box-sizing: border-box;
    color: inherit;
    background: transparent;
    outline: none;
  }

  .affine-database-search-input::placeholder {
    color: var(--affine-placeholder-color);
    font-size: var(--affine-font-sm);
  }
`;
let DataViewHeaderToolsSearch = (() => {
    let _classDecorators = [customElement('data-view-header-tools-search')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetBase;
    let __searchInput_decorators;
    let __searchInput_initializers = [];
    let __searchInput_extraInitializers = [];
    let __showSearch_decorators;
    let __showSearch_initializers = [];
    let __showSearch_extraInitializers = [];
    var DataViewHeaderToolsSearch = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_searchInput_accessor_storage = __runInitializers(this, __searchInput_initializers, void 0);
            this.#_showSearch_accessor_storage = (__runInitializers(this, __searchInput_extraInitializers), __runInitializers(this, __showSearch_initializers, false));
            this.#view_accessor_storage = __runInitializers(this, __showSearch_extraInitializers);
            this.preventBlur = false;
            this._onSearch = (event) => {
                const el = event.target;
                const inputValue = el.value.trim();
                this.view.setSearch(inputValue);
            };
            this._onSearchBlur = () => {
                if (this._searchInput.value || this.preventBlur) {
                    return;
                }
                this.showSearch = false;
            };
            this._onSearchKeydown = (event) => {
                if (event.key === 'Escape') {
                    if (this._searchInput.value) {
                        this._searchInput.value = '';
                        this.view.setSearch('');
                    }
                    else {
                        this.showSearch = false;
                    }
                }
            };
            this._clearSearch = () => {
                this._searchInput.value = '';
                this.view.setSearch('');
                this.preventBlur = true;
                setTimeout(() => {
                    this.preventBlur = false;
                });
            };
            this._clickSearch = (e) => {
                e.stopPropagation();
                this.showSearch = true;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __searchInput_decorators = [query('.affine-database-search-input')];
            __showSearch_decorators = [state()];
            __esDecorate(this, null, __searchInput_decorators, { kind: "accessor", name: "_searchInput", static: false, private: false, access: { has: obj => "_searchInput" in obj, get: obj => obj._searchInput, set: (obj, value) => { obj._searchInput = value; } }, metadata: _metadata }, __searchInput_initializers, __searchInput_extraInitializers);
            __esDecorate(this, null, __showSearch_decorators, { kind: "accessor", name: "_showSearch", static: false, private: false, access: { has: obj => "_showSearch" in obj, get: obj => obj._showSearch, set: (obj, value) => { obj._showSearch = value; } }, metadata: _metadata }, __showSearch_initializers, __showSearch_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DataViewHeaderToolsSearch = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get showSearch() {
            return this._showSearch;
        }
        set showSearch(value) {
            this._showSearch = value;
            const tools = this.closest('data-view-header-tools');
            if (tools) {
                tools.showToolBar = value;
            }
        }
        static { this.styles = styles; }
        #_searchInput_accessor_storage;
        get _searchInput() { return this.#_searchInput_accessor_storage; }
        set _searchInput(value) { this.#_searchInput_accessor_storage = value; }
        #_showSearch_accessor_storage;
        get _showSearch() { return this.#_showSearch_accessor_storage; }
        set _showSearch(value) { this.#_showSearch_accessor_storage = value; }
        #view_accessor_storage;
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        render() {
            const searchToolClassMap = classMap({
                'affine-database-search-container': true,
                'search-container-expand': this.showSearch,
            });
            return html `
      <label class="${searchToolClassMap}" @click="${this._clickSearch}">
        <div class="affine-database-search-input-icon dv-icon-20">
          ${DatabaseSearchIcon}
        </div>
        <input
          placeholder="Search..."
          class="affine-database-search-input"
          @input="${this._onSearch}"
          @click="${(event) => event.stopPropagation()}"
          @keydown="${this._onSearchKeydown}"
          @pointerdown="${stopPropagation}"
          @blur="${this._onSearchBlur}"
        />
        <div class="close-icon" @mousedown="${this._clearSearch}">
          ${DatabaseSearchClose}
          <affine-tooltip>
            <span
              style=${styleMap({
                display: 'flex',
                alignItems: 'center',
                boxSizing: 'border-box',
                padding: '2px 6px',
                borderRadius: '4px',
                background: 'var(--affine-white-10)',
            })}
              >Esc</span
            >
            to clear all
          </affine-tooltip>
        </div>
      </label>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DataViewHeaderToolsSearch = _classThis;
})();
export { DataViewHeaderToolsSearch };
//# sourceMappingURL=search.js.map