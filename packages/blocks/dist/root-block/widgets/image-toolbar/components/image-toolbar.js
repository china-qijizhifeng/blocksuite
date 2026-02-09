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
import { assertExists, noop } from '@blocksuite/global/utils';
import { flip, offset } from '@floating-ui/dom';
import { html, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { MorePopupMenu } from '../../../../_common/components/more-popup-menu/more-popup-menu.js';
import { createLitPortal } from '../../../../_common/components/portal.js';
import { MoreVerticalIcon } from '../../../../_common/icons/edgeless.js';
import { stopPropagation } from '../../../../_common/utils/event.js';
import { styles } from '../styles.js';
import { ConfigRenderer, MoreMenuRenderer } from '../utils.js';
let AffineImageToolbar = (() => {
    let _classDecorators = [customElement('affine-image-toolbar')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let __moreButton_decorators;
    let __moreButton_initializers = [];
    let __moreButton_extraInitializers = [];
    let __moreMenuOpen_decorators;
    let __moreMenuOpen_initializers = [];
    let __moreMenuOpen_extraInitializers = [];
    let _blockElement_decorators;
    let _blockElement_initializers = [];
    let _blockElement_extraInitializers = [];
    let _abortController_decorators;
    let _abortController_initializers = [];
    let _abortController_extraInitializers = [];
    let _config_decorators;
    let _config_initializers = [];
    let _config_extraInitializers = [];
    let _moreMenuConfig_decorators;
    let _moreMenuConfig_initializers = [];
    let _moreMenuConfig_extraInitializers = [];
    let _onActiveStatusChange_decorators;
    let _onActiveStatusChange_initializers = [];
    let _onActiveStatusChange_extraInitializers = [];
    var AffineImageToolbar = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_moreButton_accessor_storage = __runInitializers(this, __moreButton_initializers, void 0);
            this.#_moreMenuOpen_accessor_storage = (__runInitializers(this, __moreButton_extraInitializers), __runInitializers(this, __moreMenuOpen_initializers, false));
            this._popMenuAbortController = (__runInitializers(this, __moreMenuOpen_extraInitializers), null);
            this._currentOpenMenu = null;
            this.#blockElement_accessor_storage = __runInitializers(this, _blockElement_initializers, void 0);
            this.#abortController_accessor_storage = (__runInitializers(this, _blockElement_extraInitializers), __runInitializers(this, _abortController_initializers, void 0));
            this.#config_accessor_storage = (__runInitializers(this, _abortController_extraInitializers), __runInitializers(this, _config_initializers, void 0));
            this.#moreMenuConfig_accessor_storage = (__runInitializers(this, _config_extraInitializers), __runInitializers(this, _moreMenuConfig_initializers, void 0));
            this.#onActiveStatusChange_accessor_storage = (__runInitializers(this, _moreMenuConfig_extraInitializers), __runInitializers(this, _onActiveStatusChange_initializers, noop));
            this.closeCurrentMenu = (__runInitializers(this, _onActiveStatusChange_extraInitializers), () => {
                if (this._currentOpenMenu && !this._currentOpenMenu.signal.aborted) {
                    this._currentOpenMenu.abort();
                    this._currentOpenMenu = null;
                }
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __moreButton_decorators = [query('.image-toolbar-button.more')];
            __moreMenuOpen_decorators = [state()];
            _blockElement_decorators = [property({ attribute: false })];
            _abortController_decorators = [property({ attribute: false })];
            _config_decorators = [property({ attribute: false })];
            _moreMenuConfig_decorators = [property({ attribute: false })];
            _onActiveStatusChange_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __moreButton_decorators, { kind: "accessor", name: "_moreButton", static: false, private: false, access: { has: obj => "_moreButton" in obj, get: obj => obj._moreButton, set: (obj, value) => { obj._moreButton = value; } }, metadata: _metadata }, __moreButton_initializers, __moreButton_extraInitializers);
            __esDecorate(this, null, __moreMenuOpen_decorators, { kind: "accessor", name: "_moreMenuOpen", static: false, private: false, access: { has: obj => "_moreMenuOpen" in obj, get: obj => obj._moreMenuOpen, set: (obj, value) => { obj._moreMenuOpen = value; } }, metadata: _metadata }, __moreMenuOpen_initializers, __moreMenuOpen_extraInitializers);
            __esDecorate(this, null, _blockElement_decorators, { kind: "accessor", name: "blockElement", static: false, private: false, access: { has: obj => "blockElement" in obj, get: obj => obj.blockElement, set: (obj, value) => { obj.blockElement = value; } }, metadata: _metadata }, _blockElement_initializers, _blockElement_extraInitializers);
            __esDecorate(this, null, _abortController_decorators, { kind: "accessor", name: "abortController", static: false, private: false, access: { has: obj => "abortController" in obj, get: obj => obj.abortController, set: (obj, value) => { obj.abortController = value; } }, metadata: _metadata }, _abortController_initializers, _abortController_extraInitializers);
            __esDecorate(this, null, _config_decorators, { kind: "accessor", name: "config", static: false, private: false, access: { has: obj => "config" in obj, get: obj => obj.config, set: (obj, value) => { obj.config = value; } }, metadata: _metadata }, _config_initializers, _config_extraInitializers);
            __esDecorate(this, null, _moreMenuConfig_decorators, { kind: "accessor", name: "moreMenuConfig", static: false, private: false, access: { has: obj => "moreMenuConfig" in obj, get: obj => obj.moreMenuConfig, set: (obj, value) => { obj.moreMenuConfig = value; } }, metadata: _metadata }, _moreMenuConfig_initializers, _moreMenuConfig_extraInitializers);
            __esDecorate(this, null, _onActiveStatusChange_decorators, { kind: "accessor", name: "onActiveStatusChange", static: false, private: false, access: { has: obj => "onActiveStatusChange" in obj, get: obj => obj.onActiveStatusChange, set: (obj, value) => { obj.onActiveStatusChange = value; } }, metadata: _metadata }, _onActiveStatusChange_initializers, _onActiveStatusChange_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineImageToolbar = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get _items() {
            return ConfigRenderer(this.blockElement, this.abortController, this.config, this.closeCurrentMenu);
        }
        static { this.styles = styles; }
        #_moreButton_accessor_storage;
        get _moreButton() { return this.#_moreButton_accessor_storage; }
        set _moreButton(value) { this.#_moreButton_accessor_storage = value; }
        #_moreMenuOpen_accessor_storage;
        get _moreMenuOpen() { return this.#_moreMenuOpen_accessor_storage; }
        set _moreMenuOpen(value) { this.#_moreMenuOpen_accessor_storage = value; }
        #blockElement_accessor_storage;
        get blockElement() { return this.#blockElement_accessor_storage; }
        set blockElement(value) { this.#blockElement_accessor_storage = value; }
        #abortController_accessor_storage;
        get abortController() { return this.#abortController_accessor_storage; }
        set abortController(value) { this.#abortController_accessor_storage = value; }
        #config_accessor_storage;
        get config() { return this.#config_accessor_storage; }
        set config(value) { this.#config_accessor_storage = value; }
        #moreMenuConfig_accessor_storage;
        get moreMenuConfig() { return this.#moreMenuConfig_accessor_storage; }
        set moreMenuConfig(value) { this.#moreMenuConfig_accessor_storage = value; }
        #onActiveStatusChange_accessor_storage;
        get onActiveStatusChange() { return this.#onActiveStatusChange_accessor_storage; }
        set onActiveStatusChange(value) { this.#onActiveStatusChange_accessor_storage = value; }
        _clearPopMenu() {
            if (this._popMenuAbortController) {
                this._popMenuAbortController.abort();
                this._popMenuAbortController = null;
            }
        }
        _toggleMoreMenu() {
            // If the menu we're trying to open is already open, return
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
            const moreItems = MoreMenuRenderer(this.blockElement, this._popMenuAbortController, this.moreMenuConfig);
            moreMenu.items = moreItems;
            assertExists(this._moreButton);
            createLitPortal({
                template: moreMenu,
                container: this.blockElement.host,
                // stacking-context(editor-host)
                portalStyles: {
                    zIndex: 'var(--affine-z-index-popover)',
                },
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
            this._clearPopMenu();
        }
        render() {
            return html `
      <div
        class="affine-image-toolbar-container"
        @pointerdown=${stopPropagation}
      >
        ${this._items}
        <icon-button
          class="image-toolbar-button more"
          size="24px"
          @click=${() => this._toggleMoreMenu()}
        >
          ${MoreVerticalIcon}
          ${!this._moreMenuOpen
                ? html `<affine-tooltip>More</affine-tooltip>`
                : nothing}
        </icon-button>
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineImageToolbar = _classThis;
})();
export { AffineImageToolbar };
//# sourceMappingURL=image-toolbar.js.map