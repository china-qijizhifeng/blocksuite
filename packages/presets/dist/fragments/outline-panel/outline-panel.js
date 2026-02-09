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
import { DisposableGroup } from '@blocksuite/global/utils';
import { baseTheme } from '@toeverything/theme';
import { css, html, LitElement, unsafeCSS } from 'lit';
import { property, state } from 'lit/decorators.js';
import { OutlineNotice } from './body/outline-notice.js';
import { OutlinePanelBody } from './body/outline-panel-body.js';
import { OutlineNoteCard } from './card/outline-card.js';
import { OutlineBlockPreview } from './card/outline-preview.js';
import { outlineSettingsKey } from './config.js';
import { OutlinePanelHeader } from './header/outline-panel-header.js';
import { OutlineNotePreviewSettingMenu } from './header/outline-setting-menu.js';
const styles = css `
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  .outline-panel-container {
    background-color: var(--affine-background-primary-color);
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: stretch;

    height: 100%;
    font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
    padding-top: 8px;
    position: relative;
  }

  .outline-panel-body {
    flex-grow: 1;
    width: 100%;

    overflow-y: scroll;
  }
  .outline-panel-body::-webkit-scrollbar {
    width: 4px;
  }
  .outline-panel-body::-webkit-scrollbar-thumb {
    border-radius: 2px;
  }
  .outline-panel-body:hover::-webkit-scrollbar-thumb {
    background-color: var(--affine-black-30);
  }
  .outline-panel-body::-webkit-scrollbar-track {
    background-color: transparent;
  }
  .outline-panel-body::-webkit-scrollbar-corner {
    display: none;
  }
`;
let OutlinePanel = (() => {
    let _classSuper = WithDisposable(LitElement);
    let __showPreviewIcon_decorators;
    let __showPreviewIcon_initializers = [];
    let __showPreviewIcon_extraInitializers = [];
    let __enableNotesSorting_decorators;
    let __enableNotesSorting_initializers = [];
    let __enableNotesSorting_extraInitializers = [];
    let __noticeVisible_decorators;
    let __noticeVisible_initializers = [];
    let __noticeVisible_extraInitializers = [];
    let _editor_decorators;
    let _editor_initializers = [];
    let _editor_extraInitializers = [];
    let _fitPadding_decorators;
    let _fitPadding_initializers = [];
    let _fitPadding_extraInitializers = [];
    return class OutlinePanel extends _classSuper {
        constructor() {
            super(...arguments);
            this.#_showPreviewIcon_accessor_storage = __runInitializers(this, __showPreviewIcon_initializers, false);
            this.#_enableNotesSorting_accessor_storage = (__runInitializers(this, __showPreviewIcon_extraInitializers), __runInitializers(this, __enableNotesSorting_initializers, false));
            this.#_noticeVisible_accessor_storage = (__runInitializers(this, __enableNotesSorting_extraInitializers), __runInitializers(this, __noticeVisible_initializers, false));
            this._settings = (__runInitializers(this, __noticeVisible_extraInitializers), {
                showIcons: false,
                enableSorting: false,
            });
            this._editorDisposables = null;
            this.#editor_accessor_storage = __runInitializers(this, _editor_initializers, void 0);
            this.#fitPadding_accessor_storage = (__runInitializers(this, _editor_extraInitializers), __runInitializers(this, _fitPadding_initializers, void 0));
            this._toggleShowPreviewIcon = (__runInitializers(this, _fitPadding_extraInitializers), (on) => {
                this._showPreviewIcon = on;
                this._updateAndSaveSettings({ showIcons: on });
            });
            this._toggleNotesSorting = () => {
                this._enableNotesSorting = !this._enableNotesSorting;
                this._updateAndSaveSettings({ enableSorting: this._enableNotesSorting });
            };
            this._setNoticeVisibility = (visibility) => {
                this._noticeVisible = visibility;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __showPreviewIcon_decorators = [state()];
            __enableNotesSorting_decorators = [state()];
            __noticeVisible_decorators = [state()];
            _editor_decorators = [property({ attribute: false })];
            _fitPadding_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __showPreviewIcon_decorators, { kind: "accessor", name: "_showPreviewIcon", static: false, private: false, access: { has: obj => "_showPreviewIcon" in obj, get: obj => obj._showPreviewIcon, set: (obj, value) => { obj._showPreviewIcon = value; } }, metadata: _metadata }, __showPreviewIcon_initializers, __showPreviewIcon_extraInitializers);
            __esDecorate(this, null, __enableNotesSorting_decorators, { kind: "accessor", name: "_enableNotesSorting", static: false, private: false, access: { has: obj => "_enableNotesSorting" in obj, get: obj => obj._enableNotesSorting, set: (obj, value) => { obj._enableNotesSorting = value; } }, metadata: _metadata }, __enableNotesSorting_initializers, __enableNotesSorting_extraInitializers);
            __esDecorate(this, null, __noticeVisible_decorators, { kind: "accessor", name: "_noticeVisible", static: false, private: false, access: { has: obj => "_noticeVisible" in obj, get: obj => obj._noticeVisible, set: (obj, value) => { obj._noticeVisible = value; } }, metadata: _metadata }, __noticeVisible_initializers, __noticeVisible_extraInitializers);
            __esDecorate(this, null, _editor_decorators, { kind: "accessor", name: "editor", static: false, private: false, access: { has: obj => "editor" in obj, get: obj => obj.editor, set: (obj, value) => { obj.editor = value; } }, metadata: _metadata }, _editor_initializers, _editor_extraInitializers);
            __esDecorate(this, null, _fitPadding_decorators, { kind: "accessor", name: "fitPadding", static: false, private: false, access: { has: obj => "fitPadding" in obj, get: obj => obj.fitPadding, set: (obj, value) => { obj.fitPadding = value; } }, metadata: _metadata }, _fitPadding_initializers, _fitPadding_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get doc() {
            return this.editor.doc;
        }
        get host() {
            return this.editor.host;
        }
        get edgeless() {
            return this.editor.querySelector('affine-edgeless-root');
        }
        get mode() {
            return this.editor.mode;
        }
        static { this.styles = styles; }
        #_showPreviewIcon_accessor_storage;
        get _showPreviewIcon() { return this.#_showPreviewIcon_accessor_storage; }
        set _showPreviewIcon(value) { this.#_showPreviewIcon_accessor_storage = value; }
        #_enableNotesSorting_accessor_storage;
        get _enableNotesSorting() { return this.#_enableNotesSorting_accessor_storage; }
        set _enableNotesSorting(value) { this.#_enableNotesSorting_accessor_storage = value; }
        #_noticeVisible_accessor_storage;
        get _noticeVisible() { return this.#_noticeVisible_accessor_storage; }
        set _noticeVisible(value) { this.#_noticeVisible_accessor_storage = value; }
        #editor_accessor_storage;
        get editor() { return this.#editor_accessor_storage; }
        set editor(value) { this.#editor_accessor_storage = value; }
        #fitPadding_accessor_storage;
        get fitPadding() { return this.#fitPadding_accessor_storage; }
        set fitPadding(value) { this.#fitPadding_accessor_storage = value; }
        _loadSettingsFromLocalStorage() {
            const settings = localStorage.getItem(outlineSettingsKey);
            if (settings) {
                this._settings = JSON.parse(settings);
                this._showPreviewIcon = this._settings.showIcons;
                this._enableNotesSorting = this._settings.enableSorting;
            }
        }
        _saveSettingsToLocalStorage() {
            localStorage.setItem(outlineSettingsKey, JSON.stringify(this._settings));
        }
        _updateAndSaveSettings(newSettings) {
            this._settings = { ...this._settings, ...newSettings };
            this._saveSettingsToLocalStorage();
        }
        _clearEditorDisposables() {
            this._editorDisposables?.dispose();
            this._editorDisposables = null;
        }
        _setEditorDisposables() {
            this._clearEditorDisposables();
            this._editorDisposables = new DisposableGroup();
            this._editorDisposables.add(this.editor.slots.editorModeSwitched.on(() => {
                this.editor.updateComplete
                    .then(() => {
                    this.requestUpdate();
                })
                    .catch(console.error);
            }));
            this._editorDisposables.add(this.editor.slots.docUpdated.on(() => {
                this.editor.updateComplete
                    .then(() => {
                    this.requestUpdate();
                })
                    .catch(console.error);
            }));
        }
        updated(_changedProperties) {
            if (_changedProperties.has('editor')) {
                this._setEditorDisposables();
            }
        }
        connectedCallback() {
            super.connectedCallback();
            this._loadSettingsFromLocalStorage();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._clearEditorDisposables();
        }
        render() {
            return html `
      <div class="outline-panel-container">
        <outline-panel-header
          .showPreviewIcon=${this._showPreviewIcon}
          .enableNotesSorting=${this._enableNotesSorting}
          .toggleShowPreviewIcon=${this._toggleShowPreviewIcon}
          .toggleNotesSorting=${this._toggleNotesSorting}
        ></outline-panel-header>
        <outline-panel-body
          class="outline-panel-body"
          .doc=${this.doc}
          .fitPadding=${this.fitPadding}
          .edgeless=${this.edgeless}
          .editorHost=${this.host}
          .mode=${this.mode}
          .showPreviewIcon=${this._showPreviewIcon}
          .enableNotesSorting=${this._enableNotesSorting}
          .toggleNotesSorting=${this._toggleNotesSorting}
          .noticeVisible=${this._noticeVisible}
          .setNoticeVisibility=${this._setNoticeVisibility}
        >
        </outline-panel-body>
        <outline-notice
          .noticeVisible=${this._noticeVisible}
          .toggleNotesSorting=${this._toggleNotesSorting}
          .setNoticeVisibility=${this._setNoticeVisibility}
        ></outline-notice>
      </div>
    `;
        }
    };
})();
export { OutlinePanel };
const componentsMap = {
    'outline-note-card': OutlineNoteCard,
    'outline-block-preview': OutlineBlockPreview,
    'outline-panel': OutlinePanel,
    'outline-note-preview-setting-menu': OutlineNotePreviewSettingMenu,
    'outline-panel-body': OutlinePanelBody,
    'outline-panel-header': OutlinePanelHeader,
    'outline-notice': OutlineNotice,
};
export function registerOutlinePanelComponents(callback) {
    callback(componentsMap);
}
//# sourceMappingURL=outline-panel.js.map