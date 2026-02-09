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
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
let BlockRenderer = (() => {
    let _classDecorators = [customElement('database-datasource-block-renderer')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _view_decorators;
    let _view_initializers = [];
    let _view_extraInitializers = [];
    let _rowId_decorators;
    let _rowId_initializers = [];
    let _rowId_extraInitializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    var BlockRenderer = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _view_decorators = [property({ attribute: false })];
            _rowId_decorators = [property({ attribute: false })];
            _host_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(this, null, _rowId_decorators, { kind: "accessor", name: "rowId", static: false, private: false, access: { has: obj => "rowId" in obj, get: obj => obj.rowId, set: (obj, value) => { obj.rowId = value; } }, metadata: _metadata }, _rowId_initializers, _rowId_extraInitializers);
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            BlockRenderer = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get model() {
            return this.host?.doc.getBlock(this.rowId)?.model;
        }
        get service() {
            return this.host.std.spec.getService('affine:database');
        }
        get inlineManager() {
            return this.service.inlineManager;
        }
        get attributesSchema() {
            return this.inlineManager.getSchema();
        }
        get attributeRenderer() {
            return this.inlineManager.getRenderer();
        }
        static { this.styles = css `
    database-datasource-block-renderer {
      padding-bottom: 16px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-bottom: 12px;
      border-bottom: 1px solid var(--affine-border-color);
      font-size: var(--affine-font-base);
      line-height: var(--affine-line-height);
    }

    database-datasource-block-renderer .tips-placeholder {
      display: none;
    }

    .database-block-detail-header-icon {
      width: 20px;
      height: 20px;
      padding: 2px;
      border-radius: 4px;
      background-color: var(--affine-background-secondary-color);
    }

    .database-block-detail-header-icon svg {
      width: 16px;
      height: 16px;
    }
  `; }
        #view_accessor_storage = __runInitializers(this, _view_initializers, void 0);
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        #rowId_accessor_storage = (__runInitializers(this, _view_extraInitializers), __runInitializers(this, _rowId_initializers, void 0));
        get rowId() { return this.#rowId_accessor_storage; }
        set rowId(value) { this.#rowId_accessor_storage = value; }
        #host_accessor_storage = (__runInitializers(this, _rowId_extraInitializers), __runInitializers(this, _host_initializers, void 0));
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        render() {
            const model = this.model;
            if (!model) {
                return;
            }
            return html `
      ${this.renderIcon()}
      <rich-text
        .yText=${model.text}
        .attributesSchema=${this.attributesSchema}
        .attributeRenderer=${this.attributeRenderer}
        .embedChecker=${this.inlineManager.embedChecker}
        .markdownShortcutHandler=${this.inlineManager.markdownShortcutHandler}
        class="inline-editor"
      ></rich-text>
    `;
        }
        connectedCallback() {
            super.connectedCallback();
            this._disposables.addFromEvent(this, 'keydown', e => {
                if (e.key === 'Enter' && !e.shiftKey && !e.isComposing) {
                    e.stopPropagation();
                    e.preventDefault();
                    return;
                }
                if (e.key === 'Backspace' &&
                    !e.shiftKey &&
                    !e.metaKey &&
                    this.model?.text?.length === 0) {
                    e.stopPropagation();
                    e.preventDefault();
                    return;
                }
            }, true);
        }
        renderIcon() {
            const iconColumn = this.view.header.iconColumn;
            if (!iconColumn) {
                return;
            }
            return html ` <div class="database-block-detail-header-icon">
      ${this.view.cellGetValue(this.rowId, iconColumn)}
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
    return BlockRenderer = _classThis;
})();
export { BlockRenderer };
//# sourceMappingURL=block-renderer.js.map