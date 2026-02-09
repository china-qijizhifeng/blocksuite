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
import { RangeManager, ShadowlessElement, WithDisposable, } from '@blocksuite/block-std';
import { BlockViewType, } from '@blocksuite/store';
import { css, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { html } from 'lit/static-html.js';
import { EDGELESS_BLOCK_CHILD_BORDER_WIDTH, EDGELESS_BLOCK_CHILD_PADDING, } from '../../_common/consts.js';
import { DEFAULT_NOTE_BACKGROUND_COLOR } from '../../_common/edgeless/note/consts.js';
import { NoteDisplayMode } from '../../_common/types.js';
import { SpecProvider } from '../../specs/utils/spec-provider.js';
import { deserializeXYWH } from '../../surface-block/index.js';
let SurfaceRefNotePortal = (() => {
    let _classDecorators = [customElement('surface-ref-note-portal')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _index_decorators;
    let _index_initializers = [];
    let _index_extraInitializers = [];
    let _model_decorators;
    let _model_initializers = [];
    let _model_extraInitializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    var SurfaceRefNotePortal = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#index_accessor_storage = __runInitializers(this, _index_initializers, void 0);
            this.#model_accessor_storage = (__runInitializers(this, _index_extraInitializers), __runInitializers(this, _model_initializers, void 0));
            this.#host_accessor_storage = (__runInitializers(this, _model_extraInitializers), __runInitializers(this, _host_initializers, void 0));
            this.ancestors = (__runInitializers(this, _host_extraInitializers), new Set());
            this.selector = (block, doc) => {
                let currentBlock = block;
                if (this.ancestors.has(block.id)) {
                    return BlockViewType.Display;
                }
                while (currentBlock) {
                    if (currentBlock.id === this.model.id) {
                        return BlockViewType.Display;
                    }
                    currentBlock = doc.getParent(currentBlock.id);
                }
                return BlockViewType.Hidden;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _index_decorators = [property({ attribute: false })];
            _model_decorators = [property({ attribute: false })];
            _host_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _index_decorators, { kind: "accessor", name: "index", static: false, private: false, access: { has: obj => "index" in obj, get: obj => obj.index, set: (obj, value) => { obj.index = value; } }, metadata: _metadata }, _index_initializers, _index_extraInitializers);
            __esDecorate(this, null, _model_decorators, { kind: "accessor", name: "model", static: false, private: false, access: { has: obj => "model" in obj, get: obj => obj.model, set: (obj, value) => { obj.model = value; } }, metadata: _metadata }, _model_initializers, _model_extraInitializers);
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            SurfaceRefNotePortal = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    surface-ref-note-portal {
      position: relative;
    }
  `; }
        #index_accessor_storage;
        get index() { return this.#index_accessor_storage; }
        set index(value) { this.#index_accessor_storage = value; }
        #model_accessor_storage;
        get model() { return this.#model_accessor_storage; }
        set model(value) { this.#model_accessor_storage = value; }
        #host_accessor_storage;
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        renderPreview() {
            const doc = this.model.doc.blockCollection.getDoc({
                selector: this.selector,
                readonly: true,
            });
            const previewSpec = SpecProvider.getInstance().getSpec('page:preview');
            return this.host.renderSpecPortal(doc, previewSpec.value.slice());
        }
        connectedCallback() {
            super.connectedCallback();
            let parent = this.model;
            while (parent) {
                this.ancestors.add(parent.id);
                parent = this.model.doc.getParent(parent.id);
            }
            const doc = this.model.doc;
            this._disposables.add(() => {
                doc.blockCollection.clearSelector(this.selector, true);
            });
        }
        firstUpdated() {
            this.disposables.add(this.model.propsUpdated.on(() => this.requestUpdate()));
        }
        updated() {
            setTimeout(() => {
                const editableElements = Array.from(this.querySelectorAll('[contenteditable]'));
                const blockElements = Array.from(this.querySelectorAll(`[data-block-id]`));
                editableElements.forEach(element => {
                    if (element.contentEditable === 'true')
                        element.contentEditable = 'false';
                });
                blockElements.forEach(element => {
                    element.setAttribute(RangeManager.rangeQueryExcludeAttr, 'true');
                });
            }, 500);
        }
        render() {
            const { model, index } = this;
            const { displayMode, edgeless } = model;
            if (!!displayMode && displayMode === NoteDisplayMode.DocOnly)
                return nothing;
            const { xywh, background } = model;
            const [modelX, modelY, modelW, modelH] = deserializeXYWH(xywh);
            const style = {
                zIndex: `${index}`,
                width: modelW + 'px',
                height: edgeless.collapse && edgeless.collapsedHeight
                    ? edgeless.collapsedHeight + 'px'
                    : undefined,
                transform: `translate(${modelX}px, ${modelY}px)`,
                padding: `${EDGELESS_BLOCK_CHILD_PADDING}px`,
                border: `${EDGELESS_BLOCK_CHILD_BORDER_WIDTH}px none var(--affine-black-10)`,
                background: `var(${background ?? DEFAULT_NOTE_BACKGROUND_COLOR})`,
                boxShadow: 'var(--affine-note-shadow-sticker)',
                position: 'absolute',
                borderRadius: '0px',
                boxSizing: 'border-box',
                pointerEvents: 'none',
                overflow: 'hidden',
                transformOrigin: '0 0',
                userSelect: 'none',
            };
            return html `
      <div
        class="surface-ref-note-portal"
        style=${styleMap(style)}
        data-model-height="${modelH}"
        data-portal-reference-block-id="${model.id}"
      >
        ${this.renderPreview()}
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return SurfaceRefNotePortal = _classThis;
})();
export { SurfaceRefNotePortal };
//# sourceMappingURL=note.js.map