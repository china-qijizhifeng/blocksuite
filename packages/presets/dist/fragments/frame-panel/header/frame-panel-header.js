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
import './frames-setting-menu.js';
import { WithDisposable } from '@blocksuite/block-std';
import { createButtonPopper } from '@blocksuite/blocks';
import { DisposableGroup } from '@blocksuite/global/utils';
import { css, html, LitElement } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { SettingsIcon, SmallFrameNavigatorIcon } from '../../_common/icons.js';
const styles = css `
  :host {
    display: flex;
    width: 100%;
    justify-content: start;
  }

  .frame-panel-header {
    display: flex;
    width: 100%;
    height: 36px;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 8px;
  }

  .all-frames-setting {
    display: flex;
    align-items: center;
    gap: 8px;
    width: 100px;
    height: 24px;
    margin: 8px 4px;
  }

  .all-frames-setting-button svg {
    color: var(--affine-icon-secondary);
  }

  .all-frames-setting-button:hover svg,
  .all-frames-setting-button.active svg {
    color: var(--affine-icon-color);
  }

  .all-frames-setting-label {
    width: 68px;
    height: 22px;
    font-size: var(--affine-font-sm);
    font-weight: 500;
    line-height: 22px;
    color: var(--light-text-color-text-secondary-color, #8e8d91);
  }

  .frames-setting-container {
    display: none;
    justify-content: center;
    align-items: center;
    background: var(--affine-background-overlay-panel-color);
    box-shadow: var(--affine-shadow-2);
    border-radius: 8px;
  }

  .frames-setting-container[data-show] {
    display: flex;
  }

  .presentation-button {
    display: flex;
    align-items: center;
    gap: 4px;
    box-sizing: border-box;
    width: 117px;
    height: 28px;
    padding: 4px 8px;
    border-radius: 8px;
    margin: 4px 0;
    border: 1px solid var(--affine-border-color);
    background: var(--affine-white);
  }

  .presentation-button:hover {
    background: var(--affine-hover-color);
    cursor: pointer;
  }

  .presentation-button svg {
    fill: var(--affine-icon-color);
    margin-right: 4px;
  }

  .presentation-button-label {
    font-size: 12px;
    font-weight: 500;
    line-height: 20px;
  }
`;
let FramePanelHeader = (() => {
    let _classSuper = WithDisposable(LitElement);
    let __settingPopperShow_decorators;
    let __settingPopperShow_initializers = [];
    let __settingPopperShow_extraInitializers = [];
    let __frameSettingButton_decorators;
    let __frameSettingButton_initializers = [];
    let __frameSettingButton_extraInitializers = [];
    let __frameSettingMenu_decorators;
    let __frameSettingMenu_initializers = [];
    let __frameSettingMenu_extraInitializers = [];
    let _editorHost_decorators;
    let _editorHost_initializers = [];
    let _editorHost_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    return class FramePanelHeader extends _classSuper {
        constructor() {
            super(...arguments);
            this.#_settingPopperShow_accessor_storage = __runInitializers(this, __settingPopperShow_initializers, false);
            this.#_frameSettingButton_accessor_storage = (__runInitializers(this, __settingPopperShow_extraInitializers), __runInitializers(this, __frameSettingButton_initializers, void 0));
            this.#_frameSettingMenu_accessor_storage = (__runInitializers(this, __frameSettingButton_extraInitializers), __runInitializers(this, __frameSettingMenu_initializers, void 0));
            this._framesSettingMenuPopper = (__runInitializers(this, __frameSettingMenu_extraInitializers), null);
            this._navigatorMode = 'fit';
            this._edgelessDisposables = null;
            this.#editorHost_accessor_storage = __runInitializers(this, _editorHost_initializers, void 0);
            this.#edgeless_accessor_storage = (__runInitializers(this, _editorHost_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
            this._enterPresentationMode = (__runInitializers(this, _edgeless_extraInitializers), () => {
                if (!this.edgeless) {
                    this.rootService.docModeService.setMode('edgeless');
                }
                setTimeout(() => {
                    this.edgeless?.updateComplete
                        .then(() => {
                        this.edgeless?.tools.setEdgelessTool({
                            type: 'frameNavigator',
                            mode: this._navigatorMode,
                        });
                    })
                        .catch(console.error);
                }, 100);
            });
            this._clearEdgelessDisposables = () => {
                this._edgelessDisposables?.dispose();
                this._edgelessDisposables = null;
            };
            this._setEdgelessDisposables = () => {
                if (!this.edgeless)
                    return;
                this._clearEdgelessDisposables();
                this._edgelessDisposables = new DisposableGroup();
                this._edgelessDisposables.add(this.edgeless.slots.navigatorSettingUpdated.on(({ fillScreen }) => {
                    this._navigatorMode = fillScreen ? 'fill' : 'fit';
                }));
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __settingPopperShow_decorators = [state()];
            __frameSettingButton_decorators = [query('.all-frames-setting-button')];
            __frameSettingMenu_decorators = [query('.frames-setting-container')];
            _editorHost_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __settingPopperShow_decorators, { kind: "accessor", name: "_settingPopperShow", static: false, private: false, access: { has: obj => "_settingPopperShow" in obj, get: obj => obj._settingPopperShow, set: (obj, value) => { obj._settingPopperShow = value; } }, metadata: _metadata }, __settingPopperShow_initializers, __settingPopperShow_extraInitializers);
            __esDecorate(this, null, __frameSettingButton_decorators, { kind: "accessor", name: "_frameSettingButton", static: false, private: false, access: { has: obj => "_frameSettingButton" in obj, get: obj => obj._frameSettingButton, set: (obj, value) => { obj._frameSettingButton = value; } }, metadata: _metadata }, __frameSettingButton_initializers, __frameSettingButton_extraInitializers);
            __esDecorate(this, null, __frameSettingMenu_decorators, { kind: "accessor", name: "_frameSettingMenu", static: false, private: false, access: { has: obj => "_frameSettingMenu" in obj, get: obj => obj._frameSettingMenu, set: (obj, value) => { obj._frameSettingMenu = value; } }, metadata: _metadata }, __frameSettingMenu_initializers, __frameSettingMenu_extraInitializers);
            __esDecorate(this, null, _editorHost_decorators, { kind: "accessor", name: "editorHost", static: false, private: false, access: { has: obj => "editorHost" in obj, get: obj => obj.editorHost, set: (obj, value) => { obj.editorHost = value; } }, metadata: _metadata }, _editorHost_initializers, _editorHost_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get rootService() {
            return this.editorHost.spec.getService('affine:page');
        }
        static { this.styles = styles; }
        #_settingPopperShow_accessor_storage;
        get _settingPopperShow() { return this.#_settingPopperShow_accessor_storage; }
        set _settingPopperShow(value) { this.#_settingPopperShow_accessor_storage = value; }
        #_frameSettingButton_accessor_storage;
        get _frameSettingButton() { return this.#_frameSettingButton_accessor_storage; }
        set _frameSettingButton(value) { this.#_frameSettingButton_accessor_storage = value; }
        #_frameSettingMenu_accessor_storage;
        get _frameSettingMenu() { return this.#_frameSettingMenu_accessor_storage; }
        set _frameSettingMenu(value) { this.#_frameSettingMenu_accessor_storage = value; }
        #editorHost_accessor_storage;
        get editorHost() { return this.#editorHost_accessor_storage; }
        set editorHost(value) { this.#editorHost_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        _tryLoadNavigatorStateLocalRecord() {
            this._navigatorMode = this.editorHost.spec
                .getService('affine:page')
                .editPropsStore.getItem('presentFillScreen')
                ? 'fill'
                : 'fit';
        }
        connectedCallback() {
            super.connectedCallback();
            this._tryLoadNavigatorStateLocalRecord();
        }
        firstUpdated() {
            const disposables = this.disposables;
            this._framesSettingMenuPopper = createButtonPopper(this._frameSettingButton, this._frameSettingMenu, ({ display }) => {
                this._settingPopperShow = display === 'show';
            }, 14, -100);
            disposables.add(this._framesSettingMenuPopper);
        }
        updated(_changedProperties) {
            if (_changedProperties.has('edgeless')) {
                if (this.edgeless) {
                    this._setEdgelessDisposables();
                }
                else {
                    this._clearEdgelessDisposables();
                }
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            if (this._edgelessDisposables) {
                this._clearEdgelessDisposables();
            }
        }
        render() {
            return html `<div class="frame-panel-header">
      <div class="all-frames-setting">
        <span class="all-frames-setting-label">All frames</span>
        <edgeless-tool-icon-button
          class="all-frames-setting-button ${this._settingPopperShow
                ? 'active'
                : ''}"
          .tooltip=${this._settingPopperShow ? '' : 'All Frames Settings'}
          .tipPosition=${'top'}
          .active=${this._settingPopperShow}
          .activeMode=${'background'}
          @click=${() => this._framesSettingMenuPopper?.toggle()}
        >
          ${SettingsIcon}
        </edgeless-tool-icon-button>
      </div>
      <div class="frames-setting-container">
        <frames-setting-menu
          .edgeless=${this.edgeless}
          .editorHost=${this.editorHost}
        ></frames-setting-menu>
      </div>
      <div class="presentation-button" @click=${this._enterPresentationMode}>
        ${SmallFrameNavigatorIcon}<span class="presentation-button-label"
          >Presentation</span
        >
      </div>
    </div>`;
        }
    };
})();
export { FramePanelHeader };
//# sourceMappingURL=frame-panel-header.js.map