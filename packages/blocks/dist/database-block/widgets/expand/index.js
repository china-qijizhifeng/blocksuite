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
import { assertExists, Slot } from '@blocksuite/global/utils';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createModal } from '../../../_common/components/index.js';
import { CrossIcon, ExpandWideIcon } from '../../../_common/icons/index.js';
import { DatabaseSelection } from '../../data-view/common/selection.js';
import { renderTemplate } from '../../data-view/utils/uni-component/render-template.js';
import { WidgetBase } from '../../data-view/widget/widget-base.js';
export function showDatabasePreviewModal(database) {
    const viewComponent = new DatabaseBlockModalPreview();
    viewComponent.database = database;
    const editorHost = document.querySelector('editor-host');
    assertExists(editorHost);
    const modal = createModal(editorHost);
    const close = () => {
        modal.remove();
    };
    const container = renderTemplate(() => {
        return html `
      <style>
        .database-block-preview-container {
          position: absolute;
          display: flex;
          padding: 24px 53px;
          border-radius: 8px;
          left: 0;
          right: 0;
          margin: 20px auto auto;
          width: calc(100% - 300px);
          max-height: calc(100% - 40px);
          box-shadow: var(--affine-shadow-1);
          background-color: var(--affine-background-primary-color);
        }
        .database-block-preview-close {
          position: absolute;
          right: -48px;
          top: 0;
          padding: 10px;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          background-color: var(--affine-background-primary-color);
        }
        .database-block-preview-close svg {
          color: var(--affine-icon-color);
          width: 16px;
          height: 16px;
        }
        .database-block-preview-close:hover {
          background-color: var(--affine-hover-color-filled);
        }
      </style>
      <div class="database-block-preview-container">
        <database-block-modal-preview
          .database="${database}"
        ></database-block-modal-preview>
        <div @click="${close}" class="database-block-preview-close">
          ${CrossIcon}
        </div>
      </div>
    `;
    });
    container.onclick = e => {
        e.stopPropagation();
    };
    modal.onclick = close;
    modal.style.backgroundColor = 'var(--affine-black-60)';
    modal.append(container);
}
let ExpandDatabaseBlockModal = (() => {
    let _classDecorators = [customElement('expand-database-block-modal')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetBase;
    var ExpandDatabaseBlockModal = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.expandDatabase = () => {
                const database = this.closest('affine-database');
                if (database) {
                    showDatabasePreviewModal(database);
                }
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ExpandDatabaseBlockModal = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        get database() {
            return this.closest('affine-database');
        }
        render() {
            if (this.closest('database-block-modal-preview') ||
                !this.database?.doc.awarenessStore.getFlag('enable_expand_database_block')) {
                return;
            }
            return html ` <div
      @click="${this.expandDatabase}"
      class="dv-icon-20 dv-pd-2 dv-hover dv-round-4"
      style="display:flex;"
    >
      ${ExpandWideIcon}
    </div>`;
        }
    };
    return ExpandDatabaseBlockModal = _classThis;
})();
export { ExpandDatabaseBlockModal };
let DatabaseBlockModalPreview = (() => {
    let _classDecorators = [customElement('database-block-modal-preview')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _database_decorators;
    let _database_initializers = [];
    let _database_extraInitializers = [];
    var DatabaseBlockModalPreview = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.blockId = 'database-modal-preview';
            this.#database_accessor_storage = __runInitializers(this, _database_initializers, void 0);
            this.selectionUpdated = (__runInitializers(this, _database_extraInitializers), new Slot());
            this.setSelection = selection => {
                this.database.host.selection.set(selection
                    ? [
                        new DatabaseSelection({
                            blockId: this.blockId,
                            viewSelection: selection,
                        }),
                    ]
                    : []);
            };
            this.bindHotkey = hotkeys => {
                return {
                    dispose: this.database.host.event.bindHotkey(hotkeys, {
                        path: [],
                    }),
                };
            };
            this.handleEvent = (name, handler) => {
                return {
                    dispose: this.database.host.event.add(name, handler, {
                        path: [],
                    }),
                };
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _database_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _database_decorators, { kind: "accessor", name: "database", static: false, private: false, access: { has: obj => "database" in obj, get: obj => obj.database, set: (obj, value) => { obj.database = value; } }, metadata: _metadata }, _database_initializers, _database_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DatabaseBlockModalPreview = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    database-block-modal-preview {
      display: flex;
      flex-direction: column;
      flex: 1;
      overflow: hidden;
    }
  `; }
        #database_accessor_storage;
        get database() { return this.#database_accessor_storage; }
        set database(value) { this.#database_accessor_storage = value; }
        firstUpdated(_changedProperties) {
            super.firstUpdated(_changedProperties);
            requestAnimationFrame(() => {
                this.querySelector('affine-data-view-renderer')?.focusFirstCell();
            });
        }
        render() {
            const config = {
                bindHotkey: this.bindHotkey,
                handleEvent: this.handleEvent,
                getFlag: this.database.getFlag,
                selectionUpdated: this.selectionUpdated,
                setSelection: this.setSelection,
                dataSource: this.database.dataSource,
                viewSource: this.database.viewSource,
                headerWidget: this.database.headerWidget,
                std: this.database.std,
            };
            return html `
      <affine-data-view-renderer
        .config="${config}"
      ></affine-data-view-renderer>
    `;
        }
        connectedCallback() {
            super.connectedCallback();
            this.database.selection.slots.changed.on(selections => {
                const selection = selections.find(v => {
                    return v.blockId === this.blockId;
                });
                if (selection && selection instanceof DatabaseSelection) {
                    this.selectionUpdated.emit(selection.viewSelection);
                }
                else {
                    this.selectionUpdated.emit(undefined);
                }
            });
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DatabaseBlockModalPreview = _classThis;
})();
export { DatabaseBlockModalPreview };
//# sourceMappingURL=index.js.map