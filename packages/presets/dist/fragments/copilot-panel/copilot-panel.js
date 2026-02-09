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
import './chat/chat.js';
import './edgeless/edgeless.js';
import './copilot-service/index.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { copilotConfig } from './copilot-service/copilot-config.js';
import { CreateNewService } from './copilot-service/index.js';
import { allKindService } from './copilot-service/service-base.js';
import { AddCursorIcon, StarIcon } from './icons.js';
import { AILogic } from './logic.js';
import { getSurfaceElementFromEditor } from './utils/selection-utils.js';
let CopilotPanel = (() => {
    let _classDecorators = [customElement('copilot-panel')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _editor_decorators;
    let _editor_initializers = [];
    let _editor_extraInitializers = [];
    let _currentPanel_decorators;
    let _currentPanel_initializers = [];
    let _currentPanel_extraInitializers = [];
    var CopilotPanel = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _editor_decorators = [property({ attribute: false })];
            _currentPanel_decorators = [state()];
            __esDecorate(this, null, _editor_decorators, { kind: "accessor", name: "editor", static: false, private: false, access: { has: obj => "editor" in obj, get: obj => obj.editor, set: (obj, value) => { obj.editor = value; } }, metadata: _metadata }, _editor_initializers, _editor_extraInitializers);
            __esDecorate(this, null, _currentPanel_decorators, { kind: "accessor", name: "currentPanel", static: false, private: false, access: { has: obj => "currentPanel" in obj, get: obj => obj.currentPanel, set: (obj, value) => { obj.currentPanel = value; } }, metadata: _metadata }, _currentPanel_initializers, _currentPanel_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            CopilotPanel = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get host() {
            return this.editor.host;
        }
        get logic() {
            if (!this.aiLogic) {
                this.aiLogic = new AILogic(() => this.host);
            }
            return this.aiLogic;
        }
        static { this.styles = css `
    copilot-panel {
      width: 100%;
      font-family: var(--affine-font-family);
      overflow-y: scroll;
      overflow-x: visible;
    }

    .copilot-panel-setting-title {
      font-size: 14px;
      margin-top: 12px;
      margin-bottom: 4px;
      color: var(--affine-text-secondary-color);
    }

    .copilot-panel-key-input {
      width: 100%;
      border: 1px solid var(--affine-border-color, #e3e2e4);
      border-radius: 4px;
      padding: 8px;
      box-sizing: border-box;
      margin-bottom: 12px;
    }

    .copilot-panel-action-button {
      cursor: pointer;
      user-select: none;
      padding: 4px;
      background-color: var(--affine-primary-color);
      border-radius: 8px;
      color: white;
      height: 32px;
      border: 1px solid var(--affine-border-color, #e3e2e4);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 12px;
    }

    .copilot-panel-action-prompt {
      width: 100%;
      border: 1px solid var(--affine-border-color, #e3e2e4);
      border-radius: 4px;
      padding: 8px;
      box-sizing: border-box;
      margin-top: 8px;
    }

    .copilot-panel-action-description {
      font-size: 14px;
      margin-bottom: 8px;
      margin-top: 4px;
      color: var(--affine-text-secondary-color);
    }

    .copilot-panel-add-vendor-button {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      cursor: pointer;
    }

    .copilot-panel-add-vendor-button:hover {
      background-color: var(--affine-hover-color);
    }

    .copilot-panel-vendor-item {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      padding: 2px 4px;
      border-radius: 4px;
      color: white;
    }
    .copilot-box {
      margin-bottom: 64px;
    }

    .service-provider-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .service-type {
      font-size: 14px;
      color: var(--affine-text-secondary-color);
    }
  `; }
        #editor_accessor_storage;
        get editor() { return this.#editor_accessor_storage; }
        set editor(value) { this.#editor_accessor_storage = value; }
        #currentPanel_accessor_storage;
        get currentPanel() { return this.#currentPanel_accessor_storage; }
        set currentPanel(value) { this.#currentPanel_accessor_storage = value; }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.add(getSurfaceElementFromEditor(this.host).model.childrenUpdated.on(() => {
                this.requestUpdate();
            }));
        }
        render() {
            const panel = this.panels[this.currentPanel];
            return html `
      <div style="display:flex;flex-direction: column;height: 100%">
        <div
          style="display:flex;align-items:center;justify-content:center; padding-top: 17px;"
        >
          <div
            style="display:flex;align-items:center;justify-content:center;cursor: pointer;user-select: none;width: max-content;padding: 4px; background-color: var(--affine-hover-color);border-radius: 12px;"
          >
            ${repeat(Object.keys(this.panels), key => {
                const changePanel = () => {
                    this.currentPanel = key;
                };
                const style = styleMap({
                    'background-color': this.currentPanel === key
                        ? 'var(--affine-hover-color)'
                        : 'transparent',
                    padding: '4px 8px',
                    'border-radius': '8px',
                    width: '91px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 500,
                    color: key === this.currentPanel
                        ? 'var(--affine-text-primary-color)'
                        : 'var(--affine-text-secondary-color)',
                });
                return html ` <div style="${style}" @click="${changePanel}">
                ${key}
              </div>`;
            })}
          </div>
        </div>
        <div style="flex:1;overflow: hidden">${panel.render()}</div>
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            this.#editor_accessor_storage = __runInitializers(this, _editor_initializers, void 0);
            this.editorWithAI = __runInitializers(this, _editor_extraInitializers);
            this.config = () => {
                const createNew = (type) => () => {
                    const panel = new CreateNewService();
                    panel.type = type;
                    panel.onSave = config => {
                        copilotConfig.addVendor(config);
                        this.requestUpdate();
                        panel.remove();
                    };
                    document.body.append(panel);
                };
                return html `
      <div style="display:flex;flex-direction: column;gap: 32px;">
        ${repeat(allKindService, v => {
                    const list = copilotConfig.getVendorsByService(v);
                    return html `
            <div>
              <div
                class="copilot-panel-setting-title"
                style="display:flex;justify-content:space-between;align-items:center;;color: var(--affine-text-primary-color);"
              >
                ${v.title}
                <div
                  @click="${createNew(v.type)}"
                  class="copilot-panel-add-vendor-button"
                >
                  ${AddCursorIcon}
                </div>
              </div>
              <div style="display:flex;flex-wrap: wrap;padding: 4px;gap: 4px">
                ${repeat(list, v => {
                        const style = styleMap({
                            backgroundColor: v.impl.vendor.color,
                        });
                        return html ` <div
                    style="${style}"
                    class="copilot-panel-vendor-item"
                  >
                    ${v.vendor.name} ${v.impl.vendor.key} ${v.impl.name}
                  </div>`;
                    })}
              </div>
            </div>
          `;
                })}
      </div>
    `;
            };
            // eslint-disable-next-line @typescript-eslint/member-ordering
            this.panels = {
                Chat: {
                    render: () => {
                        return html ` <copilot-chat-panel
          .logic="${this.logic}"
        ></copilot-chat-panel>`;
                    },
                },
                Edgeless: {
                    render: () => {
                        return html ` <copilot-edgeless-panel
          .logic="${this.logic}"
        ></copilot-edgeless-panel>`;
                    },
                },
                Config: {
                    render: this.config,
                },
            };
            this.#currentPanel_accessor_storage = __runInitializers(this, _currentPanel_initializers, 'Chat');
            __runInitializers(this, _currentPanel_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return CopilotPanel = _classThis;
})();
export { CopilotPanel };
export const affineFormatBarItemConfig = {
    type: 'custom',
    render() {
        const copilot = document.querySelector('copilot-panel');
        if (!copilot) {
            return null;
        }
        const renderItem = (item) => {
            if (item.type === 'group') {
                return html `
          <sl-menu-item>
            ${item.name}
            <sl-menu slot="submenu">
              ${repeat(item.children, renderItem)}
            </sl-menu>
          </sl-menu-item>
        `;
            }
            return html `
        <sl-menu-item @click="${() => item.action()}"
          >${item.name}</sl-menu-item
        >
      `;
        };
        return html `
      <style>
        .copilot-format-bar-item {
          padding: 4px;
          border-radius: 4px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--affine-icon-color);
        }
        .copilot-format-bar-item:hover {
          background-color: var(--affine-hover-color);
        }
      </style>
      <div class="copilot-format-bar-item">
        <sl-dropdown>
          <div
            slot="trigger"
            style="display:flex;align-items:center;gap: 4px;"
            caret
          >
            ${StarIcon} Ask AI
          </div>
          <sl-menu>
            ${repeat(copilot.aiLogic?.chat.docSelectionActionList ?? [], renderItem)}
          </sl-menu>
        </sl-dropdown>
      </div>
    `;
    },
};
//# sourceMappingURL=copilot-panel.js.map