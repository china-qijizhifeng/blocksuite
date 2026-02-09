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
import './page-editor.js';
import './edgeless-editor.js';
import '../fragments/doc-title/doc-title.js';
import '../fragments/doc-meta-tags/doc-meta-tags.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { EdgelessEditorBlockSpecs, PageEditorBlockSpecs, ThemeObserver, } from '@blocksuite/blocks';
import { assertExists, Slot } from '@blocksuite/global/utils';
import { css, html, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { keyed } from 'lit/directives/keyed.js';
/**
 * @deprecated need to refactor
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function forwardSlot(from, to) {
    Object.entries(from).forEach(([key, slot]) => {
        const target = to[key];
        if (target) {
            slot.pipe(target);
        }
    });
}
let AffineEditorContainer = (() => {
    let _classDecorators = [customElement('affine-editor-container')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let __pageEditor_decorators;
    let __pageEditor_initializers = [];
    let __pageEditor_extraInitializers = [];
    let __edgelessEditor_decorators;
    let __edgelessEditor_initializers = [];
    let __edgelessEditor_extraInitializers = [];
    let __pageRoot_decorators;
    let __pageRoot_initializers = [];
    let __pageRoot_extraInitializers = [];
    let __edgelessRoot_decorators;
    let __edgelessRoot_initializers = [];
    let __edgelessRoot_extraInitializers = [];
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _mode_decorators;
    let _mode_initializers = [];
    let _mode_extraInitializers = [];
    let _pageSpecs_decorators;
    let _pageSpecs_initializers = [];
    let _pageSpecs_extraInitializers = [];
    let _edgelessSpecs_decorators;
    let _edgelessSpecs_initializers = [];
    let _edgelessSpecs_extraInitializers = [];
    let _autofocus_decorators;
    let _autofocus_initializers = [];
    let _autofocus_extraInitializers = [];
    var AffineEditorContainer = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_pageEditor_accessor_storage = __runInitializers(this, __pageEditor_initializers, null);
            this.#_edgelessEditor_accessor_storage = (__runInitializers(this, __pageEditor_extraInitializers), __runInitializers(this, __edgelessEditor_initializers, null));
            this.#_pageRoot_accessor_storage = (__runInitializers(this, __edgelessEditor_extraInitializers), __runInitializers(this, __pageRoot_initializers, null));
            this.#_edgelessRoot_accessor_storage = (__runInitializers(this, __pageRoot_extraInitializers), __runInitializers(this, __edgelessRoot_initializers, null));
            this.#doc_accessor_storage = (__runInitializers(this, __edgelessRoot_extraInitializers), __runInitializers(this, _doc_initializers, void 0));
            this.#mode_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _mode_initializers, 'page'));
            this.#pageSpecs_accessor_storage = (__runInitializers(this, _mode_extraInitializers), __runInitializers(this, _pageSpecs_initializers, PageEditorBlockSpecs));
            this.#edgelessSpecs_accessor_storage = (__runInitializers(this, _pageSpecs_extraInitializers), __runInitializers(this, _edgelessSpecs_initializers, EdgelessEditorBlockSpecs));
            this.#autofocus_accessor_storage = (__runInitializers(this, _edgelessSpecs_extraInitializers), __runInitializers(this, _autofocus_initializers, false));
            /**
             * @deprecated need to refactor
             */
            this.themeObserver = (__runInitializers(this, _autofocus_extraInitializers), new ThemeObserver());
            /**
             * @deprecated need to refactor
             */
            this.slots = {
                docLinkClicked: new Slot(),
                editorModeSwitched: new Slot(),
                docUpdated: new Slot(),
                tagClicked: new Slot(),
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __pageEditor_decorators = [query('page-editor')];
            __edgelessEditor_decorators = [query('edgeless-editor')];
            __pageRoot_decorators = [query('affine-page-root')];
            __edgelessRoot_decorators = [query('affine-edgeless-root')];
            _doc_decorators = [property({ attribute: false })];
            _mode_decorators = [property({ attribute: false })];
            _pageSpecs_decorators = [property({ attribute: false })];
            _edgelessSpecs_decorators = [property({ attribute: false })];
            _autofocus_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __pageEditor_decorators, { kind: "accessor", name: "_pageEditor", static: false, private: false, access: { has: obj => "_pageEditor" in obj, get: obj => obj._pageEditor, set: (obj, value) => { obj._pageEditor = value; } }, metadata: _metadata }, __pageEditor_initializers, __pageEditor_extraInitializers);
            __esDecorate(this, null, __edgelessEditor_decorators, { kind: "accessor", name: "_edgelessEditor", static: false, private: false, access: { has: obj => "_edgelessEditor" in obj, get: obj => obj._edgelessEditor, set: (obj, value) => { obj._edgelessEditor = value; } }, metadata: _metadata }, __edgelessEditor_initializers, __edgelessEditor_extraInitializers);
            __esDecorate(this, null, __pageRoot_decorators, { kind: "accessor", name: "_pageRoot", static: false, private: false, access: { has: obj => "_pageRoot" in obj, get: obj => obj._pageRoot, set: (obj, value) => { obj._pageRoot = value; } }, metadata: _metadata }, __pageRoot_initializers, __pageRoot_extraInitializers);
            __esDecorate(this, null, __edgelessRoot_decorators, { kind: "accessor", name: "_edgelessRoot", static: false, private: false, access: { has: obj => "_edgelessRoot" in obj, get: obj => obj._edgelessRoot, set: (obj, value) => { obj._edgelessRoot = value; } }, metadata: _metadata }, __edgelessRoot_initializers, __edgelessRoot_extraInitializers);
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _mode_decorators, { kind: "accessor", name: "mode", static: false, private: false, access: { has: obj => "mode" in obj, get: obj => obj.mode, set: (obj, value) => { obj.mode = value; } }, metadata: _metadata }, _mode_initializers, _mode_extraInitializers);
            __esDecorate(this, null, _pageSpecs_decorators, { kind: "accessor", name: "pageSpecs", static: false, private: false, access: { has: obj => "pageSpecs" in obj, get: obj => obj.pageSpecs, set: (obj, value) => { obj.pageSpecs = value; } }, metadata: _metadata }, _pageSpecs_initializers, _pageSpecs_extraInitializers);
            __esDecorate(this, null, _edgelessSpecs_decorators, { kind: "accessor", name: "edgelessSpecs", static: false, private: false, access: { has: obj => "edgelessSpecs" in obj, get: obj => obj.edgelessSpecs, set: (obj, value) => { obj.edgelessSpecs = value; } }, metadata: _metadata }, _edgelessSpecs_initializers, _edgelessSpecs_extraInitializers);
            __esDecorate(this, null, _autofocus_decorators, { kind: "accessor", name: "autofocus", static: false, private: false, access: { has: obj => "autofocus" in obj, get: obj => obj.autofocus, set: (obj, value) => { obj.autofocus = value; } }, metadata: _metadata }, _autofocus_initializers, _autofocus_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineEditorContainer = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get _pageSpecs() {
            return [...this.pageSpecs].map(spec => {
                if (spec.schema.model.flavour === 'affine:page') {
                    const setup = spec.setup;
                    spec = {
                        ...spec,
                        setup: (slots, disposable) => {
                            setup?.(slots, disposable);
                            slots.mounted.once(({ service }) => {
                                const { docModeService } = service;
                                disposable.add(docModeService.onModeChange(this.switchEditor.bind(this)));
                            });
                        },
                    };
                }
                return spec;
            });
        }
        get _edgelessSpecs() {
            return [...this.edgelessSpecs].map(spec => {
                if (spec.schema.model.flavour === 'affine:page') {
                    const setup = spec.setup;
                    spec = {
                        ...spec,
                        setup: (slots, disposable) => {
                            setup?.(slots, disposable);
                            slots.mounted.once(({ service }) => {
                                const { docModeService } = service;
                                disposable.add(docModeService.onModeChange(this.switchEditor.bind(this)));
                            });
                        },
                    };
                }
                return spec;
            });
        }
        get editor() {
            const editor = this.mode === 'page' ? this._pageEditor : this._edgelessEditor;
            assertExists(editor);
            return editor;
        }
        get host() {
            assertExists(this.editor);
            return this.editor.host;
        }
        get rootModel() {
            return this.doc.root;
        }
        static { this.styles = css `
    .affine-page-viewport {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      container-name: viewport;
      container-type: inline-size;
      font-family: var(--affine-font-family);
    }
    .affine-page-viewport * {
      box-sizing: border-box;
    }

    @media print {
      .affine-page-viewport {
        height: auto;
      }
    }

    page-editor {
      flex-grow: 1;
    }
  `; }
        #_pageEditor_accessor_storage;
        get _pageEditor() { return this.#_pageEditor_accessor_storage; }
        set _pageEditor(value) { this.#_pageEditor_accessor_storage = value; }
        #_edgelessEditor_accessor_storage;
        get _edgelessEditor() { return this.#_edgelessEditor_accessor_storage; }
        set _edgelessEditor(value) { this.#_edgelessEditor_accessor_storage = value; }
        #_pageRoot_accessor_storage;
        /** @deprecated unreliable since pageSpecs can be overridden */
        get _pageRoot() { return this.#_pageRoot_accessor_storage; }
        set _pageRoot(value) { this.#_pageRoot_accessor_storage = value; }
        #_edgelessRoot_accessor_storage;
        /** @deprecated unreliable since edgelessSpecs can be overridden */
        get _edgelessRoot() { return this.#_edgelessRoot_accessor_storage; }
        set _edgelessRoot(value) { this.#_edgelessRoot_accessor_storage = value; }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #mode_accessor_storage;
        get mode() { return this.#mode_accessor_storage; }
        set mode(value) { this.#mode_accessor_storage = value; }
        #pageSpecs_accessor_storage;
        get pageSpecs() { return this.#pageSpecs_accessor_storage; }
        set pageSpecs(value) { this.#pageSpecs_accessor_storage = value; }
        #edgelessSpecs_accessor_storage;
        get edgelessSpecs() { return this.#edgelessSpecs_accessor_storage; }
        set edgelessSpecs(value) { this.#edgelessSpecs_accessor_storage = value; }
        #autofocus_accessor_storage;
        get autofocus() { return this.#autofocus_accessor_storage; }
        set autofocus(value) { this.#autofocus_accessor_storage = value; }
        switchEditor(mode) {
            this.mode = mode;
        }
        async getUpdateComplete() {
            const result = await super.getUpdateComplete();
            const editor = this.editor;
            assertExists(editor);
            await editor.updateComplete;
            return result;
        }
        firstUpdated() {
            if (this.mode === 'page') {
                setTimeout(() => {
                    if (this.autofocus) {
                        const richText = this.querySelector('rich-text');
                        assertExists(richText);
                        const inlineEditor = richText.inlineEditor;
                        assertExists(inlineEditor);
                        inlineEditor.focusEnd();
                    }
                });
            }
        }
        /**
         * @deprecated need to refactor
         */
        connectedCallback() {
            super.connectedCallback();
            this.themeObserver.observe(document.documentElement);
            this._disposables.add(this.themeObserver);
            this._disposables.add(this.doc.slots.rootAdded.on(() => this.requestUpdate()));
        }
        /**
         * @deprecated need to refactor
         */
        updated(changedProperties) {
            if (changedProperties.has('mode')) {
                this.slots.editorModeSwitched.emit(this.mode);
            }
            if (changedProperties.has('doc')) {
                this.slots.docUpdated.emit({ newDocId: this.doc.id });
            }
            if (!changedProperties.has('doc') && !changedProperties.has('mode')) {
                return;
            }
            requestAnimationFrame(() => {
                if (this._pageRoot)
                    forwardSlot(this._pageRoot.slots, this.slots);
                if (this._edgelessRoot)
                    forwardSlot(this._edgelessRoot.slots, this.slots);
            });
        }
        render() {
            if (!this.rootModel)
                return nothing;
            return html `${keyed(this.rootModel.id, this.mode === 'page'
                ? html `
            <div class="affine-page-viewport">
              <doc-title .doc=${this.doc}></doc-title>

              <doc-meta-tags .doc=${this.doc}></doc-meta-tags>

              <page-editor
                .doc=${this.doc}
                .specs=${this._pageSpecs}
                .hasViewport=${false}
              ></page-editor>
            </div>
          `
                : html `
            <edgeless-editor
              .doc=${this.doc}
              .specs=${this._edgelessSpecs}
            ></edgeless-editor>
          `)}`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineEditorContainer = _classThis;
})();
export { AffineEditorContainer };
//# sourceMappingURL=editor-container.js.map