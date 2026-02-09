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
import { WithDisposable } from '@blocksuite/block-std';
import { assertExists, noop } from '@blocksuite/global/utils';
import { flip, offset } from '@floating-ui/dom';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { createLitPortal } from '../../../../_common/components/index.js';
import { MorePopupMenu } from '../../../../_common/components/more-popup-menu/more-popup-menu.js';
import { MoreVerticalIcon } from '../../../../_common/icons/edgeless.js';
import { CodeToolbarItemRenderer, MoreMenuRenderer } from '../utils.js';
let AffineCodeToolbar = (() => {
    let _classDecorators = [customElement('affine-code-toolbar')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __moreMenuOpen_decorators;
    let __moreMenuOpen_initializers = [];
    let __moreMenuOpen_extraInitializers = [];
    let __moreButton_decorators;
    let __moreButton_initializers = [];
    let __moreButton_extraInitializers = [];
    let _blockElement_decorators;
    let _blockElement_initializers = [];
    let _blockElement_extraInitializers = [];
    let _items_decorators;
    let _items_initializers = [];
    let _items_extraInitializers = [];
    let _moreItems_decorators;
    let _moreItems_initializers = [];
    let _moreItems_extraInitializers = [];
    let _onActiveStatusChange_decorators;
    let _onActiveStatusChange_initializers = [];
    let _onActiveStatusChange_extraInitializers = [];
    var AffineCodeToolbar = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_moreMenuOpen_accessor_storage = __runInitializers(this, __moreMenuOpen_initializers, false);
            this.#_moreButton_accessor_storage = (__runInitializers(this, __moreMenuOpen_extraInitializers), __runInitializers(this, __moreButton_initializers, void 0));
            this._popMenuAbortController = (__runInitializers(this, __moreButton_extraInitializers), null);
            this._currentOpenMenu = null;
            this.#blockElement_accessor_storage = __runInitializers(this, _blockElement_initializers, void 0);
            this.#items_accessor_storage = (__runInitializers(this, _blockElement_extraInitializers), __runInitializers(this, _items_initializers, void 0));
            this.#moreItems_accessor_storage = (__runInitializers(this, _items_extraInitializers), __runInitializers(this, _moreItems_initializers, void 0));
            this.#onActiveStatusChange_accessor_storage = (__runInitializers(this, _moreItems_extraInitializers), __runInitializers(this, _onActiveStatusChange_initializers, noop));
            this.closeCurrentMenu = (__runInitializers(this, _onActiveStatusChange_extraInitializers), () => {
                if (this._currentOpenMenu && !this._currentOpenMenu.signal.aborted) {
                    this._currentOpenMenu.abort();
                    this._currentOpenMenu = null;
                }
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __moreMenuOpen_decorators = [state()];
            __moreButton_decorators = [query('.code-toolbar-button.more-button')];
            _blockElement_decorators = [property({ attribute: false })];
            _items_decorators = [property({ attribute: false })];
            _moreItems_decorators = [property({ attribute: false })];
            _onActiveStatusChange_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __moreMenuOpen_decorators, { kind: "accessor", name: "_moreMenuOpen", static: false, private: false, access: { has: obj => "_moreMenuOpen" in obj, get: obj => obj._moreMenuOpen, set: (obj, value) => { obj._moreMenuOpen = value; } }, metadata: _metadata }, __moreMenuOpen_initializers, __moreMenuOpen_extraInitializers);
            __esDecorate(this, null, __moreButton_decorators, { kind: "accessor", name: "_moreButton", static: false, private: false, access: { has: obj => "_moreButton" in obj, get: obj => obj._moreButton, set: (obj, value) => { obj._moreButton = value; } }, metadata: _metadata }, __moreButton_initializers, __moreButton_extraInitializers);
            __esDecorate(this, null, _blockElement_decorators, { kind: "accessor", name: "blockElement", static: false, private: false, access: { has: obj => "blockElement" in obj, get: obj => obj.blockElement, set: (obj, value) => { obj.blockElement = value; } }, metadata: _metadata }, _blockElement_initializers, _blockElement_extraInitializers);
            __esDecorate(this, null, _items_decorators, { kind: "accessor", name: "items", static: false, private: false, access: { has: obj => "items" in obj, get: obj => obj.items, set: (obj, value) => { obj.items = value; } }, metadata: _metadata }, _items_initializers, _items_extraInitializers);
            __esDecorate(this, null, _moreItems_decorators, { kind: "accessor", name: "moreItems", static: false, private: false, access: { has: obj => "moreItems" in obj, get: obj => obj.moreItems, set: (obj, value) => { obj.moreItems = value; } }, metadata: _metadata }, _moreItems_initializers, _moreItems_extraInitializers);
            __esDecorate(this, null, _onActiveStatusChange_decorators, { kind: "accessor", name: "onActiveStatusChange", static: false, private: false, access: { has: obj => "onActiveStatusChange" in obj, get: obj => obj.onActiveStatusChange, set: (obj, value) => { obj.onActiveStatusChange = value; } }, metadata: _metadata }, _onActiveStatusChange_initializers, _onActiveStatusChange_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineCodeToolbar = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      position: absolute;
      top: 0;
      right: 0;
    }

    .code-toolbar-container {
      display: flex;
      gap: 4px;
      box-sizing: border-box;
      padding: 4px;
    }

    .code-toolbar-button {
      background-color: var(--affine-background-primary-color);
      color: var(--affine-icon-color);
      box-shadow: var(--affine-shadow-1);
      border-radius: 4px;
    }

    .code-toolbar-button:hover {
      background: var(--affine-hover-color-filled);
    }

    .code-toolbar-button[hover] {
      background: var(--affine-hover-color-filled);
    }
  `; }
        #_moreMenuOpen_accessor_storage;
        get _moreMenuOpen() { return this.#_moreMenuOpen_accessor_storage; }
        set _moreMenuOpen(value) { this.#_moreMenuOpen_accessor_storage = value; }
        #_moreButton_accessor_storage;
        get _moreButton() { return this.#_moreButton_accessor_storage; }
        set _moreButton(value) { this.#_moreButton_accessor_storage = value; }
        #blockElement_accessor_storage;
        get blockElement() { return this.#blockElement_accessor_storage; }
        set blockElement(value) { this.#blockElement_accessor_storage = value; }
        #items_accessor_storage;
        get items() { return this.#items_accessor_storage; }
        set items(value) { this.#items_accessor_storage = value; }
        #moreItems_accessor_storage;
        get moreItems() { return this.#moreItems_accessor_storage; }
        set moreItems(value) { this.#moreItems_accessor_storage = value; }
        #onActiveStatusChange_accessor_storage;
        get onActiveStatusChange() { return this.#onActiveStatusChange_accessor_storage; }
        set onActiveStatusChange(value) { this.#onActiveStatusChange_accessor_storage = value; }
        _toggleMoreMenu() {
            if (this._currentOpenMenu &&
                !this._currentOpenMenu.signal.aborted &&
                this._currentOpenMenu === this._popMenuAbortController) {
                this.closeCurrentMenu();
                this._moreMenuOpen = false;
                return;
            }
            this.closeCurrentMenu();
            this._popMenuAbortController = new AbortController();
            this._popMenuAbortController.signal.addEventListener('abort', () => {
                this._moreMenuOpen = false;
                this.onActiveStatusChange(false);
            });
            this.onActiveStatusChange(true);
            this._currentOpenMenu = this._popMenuAbortController;
            const moreMenu = new MorePopupMenu();
            const moreItems = MoreMenuRenderer(this.blockElement, this._popMenuAbortController, this.moreItems);
            moreMenu.items = moreItems;
            assertExists(this._moreButton);
            createLitPortal({
                template: moreMenu,
                // should be greater than block-selection z-index as selection and popover wil share the same stacking context(editor-host)
                portalStyles: {
                    zIndex: 'var(--affine-z-index-popover)',
                },
                container: this.blockElement.host,
                computePosition: {
                    referenceElement: this._moreButton,
                    placement: 'bottom-start',
                    middleware: [flip(), offset(4)],
                    autoUpdate: { animationFrame: true },
                },
                abortController: this._popMenuAbortController,
                closeOnClickAway: true,
            });
            this._moreMenuOpen = true;
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.closeCurrentMenu();
        }
        render() {
            const items = CodeToolbarItemRenderer(this.items, this.blockElement, this.closeCurrentMenu);
            return html `<div class="code-toolbar-container">
      ${items}
      <icon-button
        class="code-toolbar-button more-button"
        data-testid="more-button"
        size="24px"
        ?disabled=${this.blockElement.readonly}
        @click=${() => this._toggleMoreMenu()}
      >
        ${MoreVerticalIcon}
        ${!this._moreMenuOpen
                ? html `<affine-tooltip>More</affine-tooltip>`
                : nothing}
      </icon-button>
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineCodeToolbar = _classThis;
})();
export { AffineCodeToolbar };
//# sourceMappingURL=code-toolbar.js.map