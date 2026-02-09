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
import { customElement, property, query } from 'lit/decorators.js';
import { asyncFocusRichText, createDefaultDoc, matchFlavours, } from '../../_common/utils/index.js';
let NoteRenderer = (() => {
    let _classDecorators = [customElement('database-datasource-note-renderer')];
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
    let _model_decorators;
    let _model_initializers = [];
    let _model_extraInitializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _subHost_decorators;
    let _subHost_initializers = [];
    let _subHost_extraInitializers = [];
    var NoteRenderer = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _view_decorators = [property({ attribute: false })];
            _rowId_decorators = [property({ attribute: false })];
            _model_decorators = [property({ attribute: false })];
            _host_decorators = [property({ attribute: false })];
            _subHost_decorators = [query('editor-host')];
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(this, null, _rowId_decorators, { kind: "accessor", name: "rowId", static: false, private: false, access: { has: obj => "rowId" in obj, get: obj => obj.rowId, set: (obj, value) => { obj.rowId = value; } }, metadata: _metadata }, _rowId_initializers, _rowId_extraInitializers);
            __esDecorate(this, null, _model_decorators, { kind: "accessor", name: "model", static: false, private: false, access: { has: obj => "model" in obj, get: obj => obj.model, set: (obj, value) => { obj.model = value; } }, metadata: _metadata }, _model_initializers, _model_extraInitializers);
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _subHost_decorators, { kind: "accessor", name: "subHost", static: false, private: false, access: { has: obj => "subHost" in obj, get: obj => obj.subHost, set: (obj, value) => { obj.subHost = value; } }, metadata: _metadata }, _subHost_initializers, _subHost_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            NoteRenderer = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get databaseBlock() {
            return this.model;
        }
        static { this.styles = css `
    database-datasource-note-renderer {
      width: 100%;
      --affine-editor-side-padding: 0;
      flex: 1;
    }
  `; }
        #view_accessor_storage = __runInitializers(this, _view_initializers, void 0);
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        #rowId_accessor_storage = (__runInitializers(this, _view_extraInitializers), __runInitializers(this, _rowId_initializers, void 0));
        get rowId() { return this.#rowId_accessor_storage; }
        set rowId(value) { this.#rowId_accessor_storage = value; }
        #model_accessor_storage = (__runInitializers(this, _rowId_extraInitializers), __runInitializers(this, _model_initializers, void 0));
        get model() { return this.#model_accessor_storage; }
        set model(value) { this.#model_accessor_storage = value; }
        #host_accessor_storage = (__runInitializers(this, _model_extraInitializers), __runInitializers(this, _host_initializers, void 0));
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #subHost_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _subHost_initializers, void 0));
        get subHost() { return this.#subHost_accessor_storage; }
        set subHost(value) { this.#subHost_accessor_storage = value; }
        render() {
            if (!this.model.doc.awarenessStore.getFlag('enable_database_attachment_note')) {
                return null;
            }
            return html `
      <div
        style="height: 1px;max-width: var(--affine-editor-width);background-color: var(--affine-border-color);margin: auto;margin-bottom: 16px"
      ></div>
      ${this.renderNote()}
    `;
        }
        renderNote() {
            const host = this.host;
            const std = host?.std;
            if (!std || !host) {
                return;
            }
            const pageId = this.databaseBlock.notes?.[this.rowId];
            if (!pageId) {
                return html ` <div>
        <div
          @click="${this.addNote}"
          style="max-width: var(--affine-editor-width);margin: auto;cursor: pointer;color: var(--affine-text-disable-color)"
        >
          Click to add note
        </div>
      </div>`;
            }
            const page = std.collection.getDoc(pageId);
            if (!page) {
                return;
            }
            return html `${host.renderSpecPortal(page, host.specs)} `;
        }
        connectedCallback() {
            super.connectedCallback();
            this.databaseBlock.propsUpdated.on(({ key }) => {
                if (key === 'notes') {
                    this.requestUpdate();
                }
            });
        }
        addNote() {
            const collection = this.host?.std.collection;
            if (!collection) {
                return;
            }
            if (!this.databaseBlock.notes) {
                this.databaseBlock.notes = {};
            }
            const note = createDefaultDoc(collection);
            if (note) {
                this.databaseBlock.notes[this.rowId] = note.id;
                this.requestUpdate();
                requestAnimationFrame(() => {
                    const block = note.root?.children
                        .find(child => child.flavour === 'affine:note')
                        ?.children.find(block => matchFlavours(block, [
                        'affine:paragraph',
                        'affine:list',
                        'affine:code',
                    ]));
                    if (this.subHost && block) {
                        asyncFocusRichText(this.subHost, block.id)?.catch(console.error);
                    }
                });
            }
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _subHost_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return NoteRenderer = _classThis;
})();
export { NoteRenderer };
//# sourceMappingURL=note-renderer.js.map