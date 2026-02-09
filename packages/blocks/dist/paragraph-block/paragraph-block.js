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
import '../_common/components/rich-text/rich-text.js';
import { getInlineRangeProvider } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { html, nothing } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { BlockComponent } from '../_common/components/block-component.js';
import { bindContainerHotkey } from '../_common/components/rich-text/keymap/index.js';
import { BLOCK_CHILDREN_CONTAINER_PADDING_LEFT } from '../_common/consts.js';
import { getViewportElement } from '../_common/utils/query.js';
import { EdgelessTextBlockComponent } from '../edgeless-text/edgeless-text-block.js';
import { EdgelessRootBlockComponent } from '../root-block/edgeless/edgeless-root-block.js';
import { paragraphBlockStyles } from './styles.js';
let ParagraphBlockComponent = (() => {
    let _classDecorators = [customElement('affine-paragraph')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BlockComponent;
    let __richTextElement_decorators;
    let __richTextElement_initializers = [];
    let __richTextElement_extraInitializers = [];
    let __placeholderContainer_decorators;
    let __placeholderContainer_initializers = [];
    let __placeholderContainer_extraInitializers = [];
    var ParagraphBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._inlineRangeProvider = null;
            this.#_richTextElement_accessor_storage = __runInitializers(this, __richTextElement_initializers, null);
            this.#_placeholderContainer_accessor_storage = (__runInitializers(this, __richTextElement_extraInitializers), __runInitializers(this, __placeholderContainer_initializers, null));
            this._currentTextSelection = (__runInitializers(this, __placeholderContainer_extraInitializers), undefined);
            this.#blockContainerStyles_accessor_storage = { margin: '10px 0' };
            //TODO(@Flrande) wrap placeholder in `rich-text` or inline-editor to make it more developer-friendly
            this._updatePlaceholder = () => {
                if (!this._placeholderContainer ||
                    !this._richTextElement ||
                    !this.inlineEditor)
                    return;
                const selection = this._currentTextSelection;
                const isCollapsed = selection?.isCollapsed() ?? false;
                if (this.doc.readonly ||
                    this.inlineEditor.yTextLength > 0 ||
                    this.inlineEditor.isComposing ||
                    !this.selected ||
                    !isCollapsed ||
                    this._isInDatabase()) {
                    this._placeholderContainer.classList.remove('visible');
                }
                else {
                    this._placeholderContainer.classList.add('visible');
                }
            };
            this._isInDatabase = () => {
                let parent = this.parentElement;
                while (parent && parent !== document.body) {
                    if (parent.tagName.toLowerCase() === 'affine-database') {
                        return true;
                    }
                    parent = parent.parentElement;
                }
                return false;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __richTextElement_decorators = [query('rich-text')];
            __placeholderContainer_decorators = [query('.affine-paragraph-placeholder')];
            __esDecorate(this, null, __richTextElement_decorators, { kind: "accessor", name: "_richTextElement", static: false, private: false, access: { has: obj => "_richTextElement" in obj, get: obj => obj._richTextElement, set: (obj, value) => { obj._richTextElement = value; } }, metadata: _metadata }, __richTextElement_initializers, __richTextElement_extraInitializers);
            __esDecorate(this, null, __placeholderContainer_decorators, { kind: "accessor", name: "_placeholderContainer", static: false, private: false, access: { has: obj => "_placeholderContainer" in obj, get: obj => obj._placeholderContainer, set: (obj, value) => { obj._placeholderContainer = value; } }, metadata: _metadata }, __placeholderContainer_initializers, __placeholderContainer_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ParagraphBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get inlineManager() {
            const inlineManager = this.service?.inlineManager;
            assertExists(inlineManager);
            return inlineManager;
        }
        get attributesSchema() {
            return this.inlineManager.getSchema();
        }
        get attributeRenderer() {
            return this.inlineManager.getRenderer();
        }
        get markdownShortcutHandler() {
            return this.inlineManager.markdownShortcutHandler;
        }
        get embedChecker() {
            return this.inlineManager.embedChecker;
        }
        get topContenteditableElement() {
            if (this.rootElement instanceof EdgelessRootBlockComponent) {
                const el = this.closest('affine-note, affine-edgeless-text');
                return el;
            }
            return this.rootElement;
        }
        get inEdgelessText() {
            return this.topContenteditableElement instanceof EdgelessTextBlockComponent;
        }
        get inlineEditor() {
            return this._richTextElement?.inlineEditor;
        }
        static { this.styles = paragraphBlockStyles; }
        #_richTextElement_accessor_storage;
        get _richTextElement() { return this.#_richTextElement_accessor_storage; }
        set _richTextElement(value) { this.#_richTextElement_accessor_storage = value; }
        #_placeholderContainer_accessor_storage;
        get _placeholderContainer() { return this.#_placeholderContainer_accessor_storage; }
        set _placeholderContainer(value) { this.#_placeholderContainer_accessor_storage = value; }
        #blockContainerStyles_accessor_storage;
        get blockContainerStyles() { return this.#blockContainerStyles_accessor_storage; }
        set blockContainerStyles(value) { this.#blockContainerStyles_accessor_storage = value; }
        async getUpdateComplete() {
            const result = await super.getUpdateComplete();
            await this._richTextElement?.updateComplete;
            return result;
        }
        connectedCallback() {
            super.connectedCallback();
            bindContainerHotkey(this);
            this._inlineRangeProvider = getInlineRangeProvider(this);
        }
        firstUpdated() {
            this._disposables.add(this.model.propsUpdated.on(this._updatePlaceholder));
            this._disposables.add(this.host.selection.slots.changed.on(() => {
                const selection = this.host.selection.find('text');
                if (selection === this._currentTextSelection ||
                    (this._currentTextSelection &&
                        selection &&
                        selection.equals(this._currentTextSelection))) {
                    return;
                }
                this._currentTextSelection = selection;
                this._updatePlaceholder();
            }));
            this.updateComplete
                .then(() => {
                this._updatePlaceholder();
                const inlineEditor = this.inlineEditor;
                if (!inlineEditor)
                    return;
                this.disposables.add(inlineEditor.slots.inputting.on(this._updatePlaceholder));
            })
                .catch(console.error);
        }
        renderBlock() {
            const { type } = this.model;
            const children = html `<div
      class="affine-block-children-container"
      style="padding-left: ${BLOCK_CHILDREN_CONTAINER_PADDING_LEFT}px"
    >
      ${this.renderChildren(this.model)}
    </div>`;
            return html `
      <div class="affine-paragraph-block-container">
        <div class="affine-paragraph-rich-text-wrapper ${type}">
          <rich-text
            .yText=${this.model.text.yText}
            .inlineEventSource=${this.topContenteditableElement ?? nothing}
            .undoManager=${this.doc.history}
            .attributesSchema=${this.attributesSchema}
            .attributeRenderer=${this.attributeRenderer}
            .markdownShortcutHandler=${this.markdownShortcutHandler}
            .embedChecker=${this.embedChecker}
            .readonly=${this.doc.readonly}
            .inlineRangeProvider=${this._inlineRangeProvider}
            .enableClipboard=${false}
            .enableUndoRedo=${false}
            .verticalScrollContainerGetter=${() => getViewportElement(this.host)}
          ></rich-text>
          ${this.inEdgelessText
                ? nothing
                : html `
                <div
                  contenteditable="false"
                  class="affine-paragraph-placeholder"
                >
                  ${this.service.placeholderGenerator(this.model)}
                </div>
              `}
        </div>

        ${children}
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ParagraphBlockComponent = _classThis;
})();
export { ParagraphBlockComponent };
//# sourceMappingURL=paragraph-block.js.map