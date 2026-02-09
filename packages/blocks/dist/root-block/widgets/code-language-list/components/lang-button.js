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
import { noop } from '@blocksuite/global/utils';
import { css, LitElement, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import { bundledLanguagesInfo } from 'shiki';
import { showPopFilterableList, } from '../../../../_common/components/filterable-list/index.js';
import { ArrowDownIcon } from '../../../../_common/icons/text.js';
import { getLanguagePriority, getStandardLanguage, } from '../../../../code-block/utils/code-languages.js';
import { PLAIN_TEXT_LANG_INFO, } from '../../../../code-block/utils/consts.js';
let LanguageListButton = (() => {
    let _classDecorators = [customElement('language-list-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let __currentLanguage_decorators;
    let __currentLanguage_initializers = [];
    let __currentLanguage_extraInitializers = [];
    let __langButton_decorators;
    let __langButton_initializers = [];
    let __langButton_extraInitializers = [];
    let _blockElement_decorators;
    let _blockElement_initializers = [];
    let _blockElement_extraInitializers = [];
    let _onActiveStatusChange_decorators;
    let _onActiveStatusChange_initializers = [];
    let _onActiveStatusChange_extraInitializers = [];
    var LanguageListButton = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_currentLanguage_accessor_storage = __runInitializers(this, __currentLanguage_initializers, PLAIN_TEXT_LANG_INFO);
            this.#_langButton_accessor_storage = (__runInitializers(this, __currentLanguage_extraInitializers), __runInitializers(this, __langButton_initializers, void 0));
            this._abortController = __runInitializers(this, __langButton_extraInitializers);
            this.#blockElement_accessor_storage = __runInitializers(this, _blockElement_initializers, void 0);
            this.#onActiveStatusChange_accessor_storage = (__runInitializers(this, _blockElement_extraInitializers), __runInitializers(this, _onActiveStatusChange_initializers, noop));
            this._clickLangBtn = (__runInitializers(this, _onActiveStatusChange_extraInitializers), () => {
                if (this.blockElement.doc.readonly)
                    return;
                if (this._abortController) {
                    // Close the language list if it's already opened.
                    this._abortController.abort();
                    return;
                }
                this._abortController = new AbortController();
                this._abortController.signal.addEventListener('abort', () => {
                    this.onActiveStatusChange(false);
                    this._abortController = undefined;
                });
                this.onActiveStatusChange(true);
                const languages = [...bundledLanguagesInfo, PLAIN_TEXT_LANG_INFO].map(lang => ({
                    label: lang.name,
                    name: lang.id,
                    aliases: lang.aliases,
                }));
                const options = {
                    placeholder: 'Search for a language',
                    onSelect: item => {
                        this.blockElement.setLang(item.name);
                        this._updateLanguage();
                    },
                    active: item => item.name === this._currentLanguage.id,
                    items: languages,
                };
                showPopFilterableList({
                    options,
                    filter: (a, b) => getLanguagePriority(a.name) -
                        getLanguagePriority(b.name),
                    referenceElement: this._langButton,
                    container: this.blockElement.host,
                    abortController: this._abortController,
                    // stacking-context(editor-host)
                    portalStyles: {
                        zIndex: 'var(--affine-z-index-popover)',
                    },
                });
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __currentLanguage_decorators = [state()];
            __langButton_decorators = [query('.lang-button')];
            _blockElement_decorators = [property({ attribute: false })];
            _onActiveStatusChange_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __currentLanguage_decorators, { kind: "accessor", name: "_currentLanguage", static: false, private: false, access: { has: obj => "_currentLanguage" in obj, get: obj => obj._currentLanguage, set: (obj, value) => { obj._currentLanguage = value; } }, metadata: _metadata }, __currentLanguage_initializers, __currentLanguage_extraInitializers);
            __esDecorate(this, null, __langButton_decorators, { kind: "accessor", name: "_langButton", static: false, private: false, access: { has: obj => "_langButton" in obj, get: obj => obj._langButton, set: (obj, value) => { obj._langButton = value; } }, metadata: _metadata }, __langButton_initializers, __langButton_extraInitializers);
            __esDecorate(this, null, _blockElement_decorators, { kind: "accessor", name: "blockElement", static: false, private: false, access: { has: obj => "blockElement" in obj, get: obj => obj.blockElement, set: (obj, value) => { obj.blockElement = value; } }, metadata: _metadata }, _blockElement_initializers, _blockElement_extraInitializers);
            __esDecorate(this, null, _onActiveStatusChange_decorators, { kind: "accessor", name: "onActiveStatusChange", static: false, private: false, access: { has: obj => "onActiveStatusChange" in obj, get: obj => obj.onActiveStatusChange, set: (obj, value) => { obj.onActiveStatusChange = value; } }, metadata: _metadata }, _onActiveStatusChange_initializers, _onActiveStatusChange_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            LanguageListButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
    }

    .lang-button {
      background-color: var(--affine-background-primary-color);
      box-shadow: var(--affine-shadow-1);
      display: flex;
      gap: 4px;
      padding: 2px 4px;
    }

    .lang-button:hover {
      background: var(--affine-hover-color-filled);
    }

    .lang-button[hover] {
      background: var(--affine-hover-color-filled);
    }
  `; }
        #_currentLanguage_accessor_storage;
        get _currentLanguage() { return this.#_currentLanguage_accessor_storage; }
        set _currentLanguage(value) { this.#_currentLanguage_accessor_storage = value; }
        #_langButton_accessor_storage;
        get _langButton() { return this.#_langButton_accessor_storage; }
        set _langButton(value) { this.#_langButton_accessor_storage = value; }
        #blockElement_accessor_storage;
        get blockElement() { return this.#blockElement_accessor_storage; }
        set blockElement(value) { this.#blockElement_accessor_storage = value; }
        #onActiveStatusChange_accessor_storage;
        get onActiveStatusChange() { return this.#onActiveStatusChange_accessor_storage; }
        set onActiveStatusChange(value) { this.#onActiveStatusChange_accessor_storage = value; }
        _updateLanguage() {
            this._currentLanguage =
                getStandardLanguage(this.blockElement.model.language) ??
                    PLAIN_TEXT_LANG_INFO;
        }
        connectedCallback() {
            super.connectedCallback();
            this._updateLanguage();
        }
        render() {
            return html `<icon-button
      class="lang-button"
      data-testid="lang-button"
      width="auto"
      text=${this._currentLanguage.name ?? this._currentLanguage.id}
      height="24px"
      @click=${this._clickLangBtn}
      ?disabled=${this.blockElement.doc.readonly}
    >
      <span slot="suffix">
        ${!this.blockElement.doc.readonly ? ArrowDownIcon : nothing}
      </span>
    </icon-button> `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return LanguageListButton = _classThis;
})();
export { LanguageListButton };
//# sourceMappingURL=lang-button.js.map