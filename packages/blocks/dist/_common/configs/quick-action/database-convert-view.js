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
import { assertExists } from '@blocksuite/global/utils';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { DatabaseSearchClose } from '../../../database-block/data-view/common/icons/index.js';
import { viewPresets } from '../../../database-block/data-view/index.js';
import { databaseViewInitConvert } from '../../../database-block/utils.js';
import { DatabaseKanbanViewIcon, DatabaseTableViewIcon, } from '../../icons/text.js';
const databaseViews = [
    {
        meta: viewPresets.tableViewConfig,
        text: 'Table view',
        icon: DatabaseTableViewIcon,
    },
    {
        meta: viewPresets.kanbanViewConfig,
        text: 'Kanban view',
        icon: DatabaseKanbanViewIcon,
    },
];
export const DATABASE_CONVERT_WHITE_LIST = ['affine:list', 'affine:paragraph'];
let DatabaseConvertView = (() => {
    let _classDecorators = [customElement('database-convert-view')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    var DatabaseConvertView = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _host_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DatabaseConvertView = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      position: fixed;
      inset: 0;
      z-index: var(--affine-z-index-modal);
    }
    .overlay-mask {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.6);
      z-index: var(--affine-z-index-modal);
    }
    .modal-container {
      position: absolute;
      z-index: var(--affine-z-index-modal);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 720px;
      padding: 24px 40px;
      border-radius: 24px;
      background: var(--affine-background-overlay-panel-color);
    }
    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .modal-header-title {
      color: var(--affine-text-primary-color);
      font-size: 20px;
      font-weight: 600;
    }
    .modal-header-close-icon {
      display: flex;
      align-items: center;
      color: var(--affine-icon-color);
      cursor: pointer;
    }
    .modal-header-close-icon svg {
      width: 24px;
      height: 24px;
    }
    .modal-footer {
      color: var(--affine-text-secondary-color);
      font-size: 14px;
      text-align: center;
    }
    .modal-body {
      padding: 24px 0;
    }
    .modal-desc {
      margin-bottom: 38px;
      color: var(--affine-text-primary-color);
      font-size: 14px;
    }
    .modal-view-container {
      display: flex;
      justify-content: center;
      gap: 18px;
    }
    .modal-view-item {
      display: flex;
      flex-direction: column;
      gap: 6px;
      cursor: pointer;
    }
    .modal-view-item.coming-soon {
      cursor: not-allowed;
    }
    .modal-view-item.coming-soon .modal-view-item-content {
      pointer-events: none;
    }
    .modal-view-item-content:hover {
      background: var(--affine-hover-color);
    }
    .modal-view-item-content:hover .modal-view-item-text,
    .modal-view-item-content:hover svg {
      fill: var(--affine-primary-color);
      color: var(--affine-primary-color);
    }
    .modal-view-item-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 18px 0;
      gap: 6px;
      width: 108px;
      border: 2px solid var(--affine-border-color);
      border-radius: 8px;
    }
    .modal-view-item-icon {
      width: 42px;
      height: 42px;
    }
    .modal-view-item-icon svg {
      width: 42px;
      height: 42px;
      fill: var(--affine-black-50);
    }
    .modal-view-item-text {
      font-size: 14px;
      color: var(--affine-black-50);
    }
    .modal-view-item-description {
      font-size: 12px;
      color: var(--affine-text-secondary-color);
      text-align: center;
    }
  `; }
        #host_accessor_storage = __runInitializers(this, _host_initializers, void 0);
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        get doc() {
            return this.host.doc;
        }
        _convertToDatabase(viewMeta) {
            const [_, ctx] = this.host.std.command
                .chain()
                .getSelectedModels({
                types: ['block', 'text'],
            })
                .run();
            const { selectedModels } = ctx;
            if (!selectedModels || selectedModels.length === 0)
                return;
            this.doc.captureSync();
            const parentModel = this.doc.getParent(selectedModels[0]);
            assertExists(parentModel);
            const id = this.doc.addBlock('affine:database', {}, parentModel, parentModel.children.indexOf(selectedModels[0]));
            const databaseModel = this.doc.getBlockById(id);
            assertExists(databaseModel);
            databaseViewInitConvert(databaseModel, viewMeta);
            databaseModel.applyColumnUpdate();
            this.doc.moveBlocks(selectedModels, databaseModel);
            const selectionManager = this.host.selection;
            selectionManager.clear();
            this.remove();
        }
        render() {
            return html `<div>
      <div
        @click="${() => {
                this.remove();
            }}"
        class="overlay-mask"
      ></div>
      <div class="modal-container">
        <div class="modal-header">
          <div class="modal-header-title">Select Database View</div>
          <div class="modal-header-close-icon">${DatabaseSearchClose}</div>
        </div>
        <div class="modal-body">
          <div class="modal-desc">
            Group as Database can quickly convert selected blocks into Database
            for easy structuring of data.
          </div>
          <div class="modal-view-container">
            ${databaseViews.map(view => {
                return html `
                <div
                  class="modal-view-item ${view.meta.type}"
                  @mousedown="${(e) => {
                    // prevent range reset
                    e.preventDefault();
                }}"
                  @click="${() => {
                    this._convertToDatabase(view.meta);
                }}"
                >
                  <div class="modal-view-item-content">
                    <div class="modal-view-item-icon">${view.icon}</div>
                    <div class="modal-view-item-text">${view.text}</div>
                  </div>
                  <div class="modal-view-item-description">
                    ${view.description}
                  </div>
                </div>
              `;
            })}
          </div>
        </div>
        <div class="modal-footer">More views are on the way.</div>
      </div>
    </div>`;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _host_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DatabaseConvertView = _classThis;
})();
export { DatabaseConvertView };
//# sourceMappingURL=database-convert-view.js.map