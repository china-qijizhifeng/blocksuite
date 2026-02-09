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
import { flip, offset } from '@floating-ui/dom';
import { css, html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { popMenu } from '../../_common/components/index.js';
import { SettingsIcon } from '../../_common/icons/edgeless.js';
import { CopyIcon, ExpandCloseIcon } from '../../_common/icons/text.js';
import { DoneIcon } from './../../_common/icons/index.js';
let EmbedHtmlFullscreenToolbar = (() => {
    let _classDecorators = [customElement('embed-html-fullscreen-toolbar')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let __fullScreenToolbarContainer_decorators;
    let __fullScreenToolbarContainer_initializers = [];
    let __fullScreenToolbarContainer_extraInitializers = [];
    let __copied_decorators;
    let __copied_initializers = [];
    let __copied_extraInitializers = [];
    let __popperVisible_decorators;
    let __popperVisible_initializers = [];
    let __popperVisible_extraInitializers = [];
    let _embedHtml_decorators;
    let _embedHtml_initializers = [];
    let _embedHtml_extraInitializers = [];
    var EmbedHtmlFullscreenToolbar = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_fullScreenToolbarContainer_accessor_storage = __runInitializers(this, __fullScreenToolbarContainer_initializers, void 0);
            this.#_copied_accessor_storage = (__runInitializers(this, __fullScreenToolbarContainer_extraInitializers), __runInitializers(this, __copied_initializers, false));
            this.#_popperVisible_accessor_storage = (__runInitializers(this, __copied_extraInitializers), __runInitializers(this, __popperVisible_initializers, false));
            this.#embedHtml_accessor_storage = (__runInitializers(this, __popperVisible_extraInitializers), __runInitializers(this, _embedHtml_initializers, void 0));
            this._popSettings = (__runInitializers(this, _embedHtml_extraInitializers), () => {
                this._popperVisible = true;
                popMenu(this._fullScreenToolbarContainer, {
                    options: {
                        items: [
                            {
                                type: 'custom',
                                render: html `<div class="settings-header">
              <span>Settings</span>
            </div>`,
                            },
                            {
                                type: 'group',
                                name: 'thing',
                                children: () => [
                                    {
                                        type: 'toggle-switch',
                                        name: 'Hide toolbar',
                                        on: this.autoHideToolbar,
                                        onChange: on => {
                                            this.autoHideToolbar = on;
                                        },
                                    },
                                ],
                            },
                        ],
                        onClose: () => {
                            this._popperVisible = false;
                        },
                    },
                    placement: 'top-end',
                    middleware: [flip(), offset({ mainAxis: 4, crossAxis: -40 })],
                    container: this.embedHtml.iframeWrapper,
                });
            });
            this.copyCode = () => {
                if (this._copied)
                    return;
                this.embedHtml.std.clipboard
                    .writeToClipboard(items => {
                    items['text/plain'] = this.embedHtml.model.html ?? '';
                    return items;
                })
                    .then(() => {
                    this._copied = true;
                    setTimeout(() => (this._copied = false), 1500);
                })
                    .catch(console.error);
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __fullScreenToolbarContainer_decorators = [query('.fullscreen-toolbar-container')];
            __copied_decorators = [state()];
            __popperVisible_decorators = [state()];
            _embedHtml_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __fullScreenToolbarContainer_decorators, { kind: "accessor", name: "_fullScreenToolbarContainer", static: false, private: false, access: { has: obj => "_fullScreenToolbarContainer" in obj, get: obj => obj._fullScreenToolbarContainer, set: (obj, value) => { obj._fullScreenToolbarContainer = value; } }, metadata: _metadata }, __fullScreenToolbarContainer_initializers, __fullScreenToolbarContainer_extraInitializers);
            __esDecorate(this, null, __copied_decorators, { kind: "accessor", name: "_copied", static: false, private: false, access: { has: obj => "_copied" in obj, get: obj => obj._copied, set: (obj, value) => { obj._copied = value; } }, metadata: _metadata }, __copied_initializers, __copied_extraInitializers);
            __esDecorate(this, null, __popperVisible_decorators, { kind: "accessor", name: "_popperVisible", static: false, private: false, access: { has: obj => "_popperVisible" in obj, get: obj => obj._popperVisible, set: (obj, value) => { obj._popperVisible = value; } }, metadata: _metadata }, __popperVisible_initializers, __popperVisible_extraInitializers);
            __esDecorate(this, null, _embedHtml_decorators, { kind: "accessor", name: "embedHtml", static: false, private: false, access: { has: obj => "embedHtml" in obj, get: obj => obj.embedHtml, set: (obj, value) => { obj.embedHtml = value; } }, metadata: _metadata }, _embedHtml_initializers, _embedHtml_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EmbedHtmlFullscreenToolbar = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get autoHideToolbar() {
            return (this.embedHtml.edgeless?.service.editPropsStore.getItem('autoHideEmbedHTMLFullScreenToolbar') ?? false);
        }
        set autoHideToolbar(val) {
            this.embedHtml.edgeless?.service.editPropsStore.setItem('autoHideEmbedHTMLFullScreenToolbar', val);
        }
        static { this.styles = css `
    :host {
      box-sizing: border-box;
      position: absolute;
      z-index: 1;
      left: 50%;
      transform: translateX(-50%);
      bottom: 0;
      -webkit-user-select: none;
      user-select: none;
    }

    .toolbar-toggle-control {
      padding-bottom: 20px;
    }

    .toolbar-toggle-control[data-auto-hide='true'] {
      transition: 0.27s ease;
      padding-top: 100px;
      transform: translateY(100px);
    }

    .toolbar-toggle-control[data-auto-hide='true']:hover {
      padding-top: 0;
      transform: translateY(0);
    }

    .fullscreen-toolbar-container {
      background: var(--affine-background-overlay-panel-color);
      box-shadow: var(--affine-menu-shadow);
      border: 1px solid var(--affine-border-color);
      border-radius: 40px;

      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;

      padding: 0 20px;

      height: 64px;
    }

    .short-v-divider {
      display: inline-block;
      background-color: var(--affine-border-color);
      width: 1px;
      height: 36px;
    }
  `; }
        #_fullScreenToolbarContainer_accessor_storage;
        get _fullScreenToolbarContainer() { return this.#_fullScreenToolbarContainer_accessor_storage; }
        set _fullScreenToolbarContainer(value) { this.#_fullScreenToolbarContainer_accessor_storage = value; }
        #_copied_accessor_storage;
        get _copied() { return this.#_copied_accessor_storage; }
        set _copied(value) { this.#_copied_accessor_storage = value; }
        #_popperVisible_accessor_storage;
        get _popperVisible() { return this.#_popperVisible_accessor_storage; }
        set _popperVisible(value) { this.#_popperVisible_accessor_storage = value; }
        #embedHtml_accessor_storage;
        get embedHtml() { return this.#embedHtml_accessor_storage; }
        set embedHtml(value) { this.#embedHtml_accessor_storage = value; }
        render() {
            const hideToolbar = !this._popperVisible && this.autoHideToolbar;
            return html `<div
      data-auto-hide=${hideToolbar}
      class="toolbar-toggle-control"
    >
      <div class="fullscreen-toolbar-container">
        <icon-button @click=${this.embedHtml.close}
          >${ExpandCloseIcon}</icon-button
        >
        <icon-button @click=${this._popSettings} ?hover=${this._popperVisible}
          >${SettingsIcon}</icon-button
        >

        <div class="short-v-divider"></div>

        <icon-button class="copy-button" @click=${this.copyCode}
          >${this._copied ? DoneIcon : CopyIcon}
        </icon-button>
      </div>
    </div> `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EmbedHtmlFullscreenToolbar = _classThis;
})();
export { EmbedHtmlFullscreenToolbar };
//# sourceMappingURL=fullscreen-toolbar.js.map