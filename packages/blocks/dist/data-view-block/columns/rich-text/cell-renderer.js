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
import { IS_MAC } from '@blocksuite/global/env';
import { assertExists } from '@blocksuite/global/utils';
import { DocCollection, Text } from '@blocksuite/store';
import { css, nothing } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { html } from 'lit/static-html.js';
import { getViewportElement } from '../../../_common/utils/query.js';
import { BaseCellRenderer } from '../../../database-block/data-view/column/index.js';
import { createFromBaseCellRenderer } from '../../../database-block/data-view/column/renderer.js';
import { createIcon } from '../../../database-block/data-view/utils/uni-icon.js';
import { richTextColumnModelConfig } from './define.js';
function toggleStyle(inlineEditor, attrs) {
    const inlineRange = inlineEditor.getInlineRange();
    if (!inlineRange)
        return;
    const root = inlineEditor.rootElement;
    if (!root) {
        return;
    }
    const deltas = inlineEditor.getDeltasByInlineRange(inlineRange);
    let oldAttributes = {};
    for (const [delta] of deltas) {
        const attributes = delta.attributes;
        if (!attributes) {
            continue;
        }
        oldAttributes = { ...attributes };
    }
    const newAttributes = Object.fromEntries(Object.entries(attrs).map(([k, v]) => {
        if (typeof v === 'boolean' &&
            v === oldAttributes[k]) {
            return [k, !v];
        }
        else {
            return [k, v];
        }
    }));
    inlineEditor.formatText(inlineRange, newAttributes, {
        mode: 'merge',
    });
    root.blur();
    inlineEditor.syncInlineRange();
}
let RichTextCell = (() => {
    let _classDecorators = [customElement('affine-data-view-rich-text-cell')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseCellRenderer;
    let __richTextElement_decorators;
    let __richTextElement_initializers = [];
    let __richTextElement_extraInitializers = [];
    var RichTextCell = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_richTextElement_accessor_storage = __runInitializers(this, __richTextElement_initializers, null);
            this._initYText = (__runInitializers(this, __richTextElement_extraInitializers), (text) => {
                const yText = new DocCollection.Y.Text(text);
                this.onChange(yText);
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __richTextElement_decorators = [query('rich-text')];
            __esDecorate(this, null, __richTextElement_decorators, { kind: "accessor", name: "_richTextElement", static: false, private: false, access: { has: obj => "_richTextElement" in obj, get: obj => obj._richTextElement, set: (obj, value) => { obj._richTextElement = value; } }, metadata: _metadata }, __richTextElement_initializers, __richTextElement_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            RichTextCell = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get service() {
            const database = this.closest('affine-data-view');
            return database?.service;
        }
        get inlineManager() {
            return this.service?.inlineManager;
        }
        get attributesSchema() {
            return this.inlineManager?.getSchema();
        }
        get attributeRenderer() {
            return this.inlineManager?.getRenderer();
        }
        get inlineEditor() {
            assertExists(this._richTextElement);
            const inlineEditor = this._richTextElement.inlineEditor;
            assertExists(inlineEditor);
            return inlineEditor;
        }
        get topContenteditableElement() {
            const databaseBlock = this.closest('affine-data-view');
            return databaseBlock?.topContenteditableElement;
        }
        static { this.styles = css `
    affine-data-view-rich-text-cell {
      display: flex;
      align-items: center;
      width: 100%;
      user-select: none;
    }

    .affine-data-view-rich-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      outline: none;
      font-size: var(--data-view-cell-text-size);
      line-height: var(--data-view-cell-text-line-height);
      word-break: break-all;
    }

    .affine-data-view-rich-text v-line {
      display: flex !important;
      align-items: center;
      height: 100%;
      width: 100%;
    }

    .affine-data-view-rich-text v-line > div {
      flex-grow: 1;
    }
  `; }
        #_richTextElement_accessor_storage;
        get _richTextElement() { return this.#_richTextElement_accessor_storage; }
        set _richTextElement(value) { this.#_richTextElement_accessor_storage = value; }
        connectedCallback() {
            super.connectedCallback();
            if (typeof this.value === 'string') {
                this._initYText(this.value);
            }
        }
        render() {
            if (!this.service)
                return nothing;
            if (!this.value) {
                return html `<div class="affine-data-view-rich-text"></div>`;
            }
            return html `<rich-text
      .yText=${this.value}
      .inlineEventSource=${this.topContenteditableElement}
      .attributesSchema=${this.attributesSchema}
      .attributeRenderer=${this.attributeRenderer}
      .embedChecker=${this.inlineManager?.embedChecker}
      .markdownShortcutHandler=${this.inlineManager?.markdownShortcutHandler}
      .readonly=${true}
      class="affine-data-view-rich-text inline-editor"
    ></rich-text>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return RichTextCell = _classThis;
})();
export { RichTextCell };
let RichTextCellEditing = (() => {
    let _classDecorators = [customElement('affine-data-view-rich-text-cell-editing')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseCellRenderer;
    let __richTextElement_decorators;
    let __richTextElement_initializers = [];
    let __richTextElement_extraInitializers = [];
    var RichTextCellEditing = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_richTextElement_accessor_storage = __runInitializers(this, __richTextElement_initializers, null);
            this._initYText = (__runInitializers(this, __richTextElement_extraInitializers), (text) => {
                const yText = new Text(text);
                this.onChange(yText);
            });
            this._handleKeyDown = (event) => {
                if (event.key !== 'Escape') {
                    if (event.key === 'Tab') {
                        event.preventDefault();
                        return;
                    }
                    event.stopPropagation();
                }
                if (event.key === 'Enter' && !event.isComposing) {
                    if (event.shiftKey) {
                        // soft enter
                        this._onSoftEnter();
                    }
                    else {
                        // exit editing
                        this.selectCurrentCell(false);
                    }
                    event.preventDefault();
                    return;
                }
                const inlineEditor = this.inlineEditor;
                switch (event.key) {
                    // bold ctrl+b
                    case 'B':
                    case 'b':
                        if (event.metaKey || event.ctrlKey) {
                            event.preventDefault();
                            toggleStyle(this.inlineEditor, { bold: true });
                        }
                        break;
                    // italic ctrl+i
                    case 'I':
                    case 'i':
                        if (event.metaKey || event.ctrlKey) {
                            event.preventDefault();
                            toggleStyle(this.inlineEditor, { italic: true });
                        }
                        break;
                    // underline ctrl+u
                    case 'U':
                    case 'u':
                        if (event.metaKey || event.ctrlKey) {
                            event.preventDefault();
                            toggleStyle(this.inlineEditor, { underline: true });
                        }
                        break;
                    // strikethrough ctrl+shift+s
                    case 'S':
                    case 's':
                        if ((event.metaKey || event.ctrlKey) && event.shiftKey) {
                            event.preventDefault();
                            toggleStyle(inlineEditor, { strike: true });
                        }
                        break;
                    // inline code ctrl+shift+e
                    case 'E':
                    case 'e':
                        if ((event.metaKey || event.ctrlKey) && event.shiftKey) {
                            event.preventDefault();
                            toggleStyle(inlineEditor, { code: true });
                        }
                        break;
                    default:
                        break;
                }
            };
            this._onSoftEnter = () => {
                if (this.value && this.inlineEditor) {
                    const inlineRange = this.inlineEditor.getInlineRange();
                    assertExists(inlineRange);
                    const text = new Text(this.inlineEditor.yText);
                    text.replace(inlineRange.index, inlineRange.length, '\n');
                    this.inlineEditor.setInlineRange({
                        index: inlineRange.index + 1,
                        length: 0,
                    });
                }
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __richTextElement_decorators = [query('rich-text')];
            __esDecorate(this, null, __richTextElement_decorators, { kind: "accessor", name: "_richTextElement", static: false, private: false, access: { has: obj => "_richTextElement" in obj, get: obj => obj._richTextElement, set: (obj, value) => { obj._richTextElement = value; } }, metadata: _metadata }, __richTextElement_initializers, __richTextElement_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            RichTextCellEditing = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get service() {
            const database = this.closest('affine-data-view');
            return database?.service;
        }
        get inlineManager() {
            return this.service?.inlineManager;
        }
        get attributesSchema() {
            return this.inlineManager?.getSchema();
        }
        get attributeRenderer() {
            return this.inlineManager?.getRenderer();
        }
        get inlineEditor() {
            assertExists(this._richTextElement);
            const inlineEditor = this._richTextElement.inlineEditor;
            assertExists(inlineEditor);
            return inlineEditor;
        }
        get topContenteditableElement() {
            const databaseBlock = this.closest('affine-data-view');
            return databaseBlock?.topContenteditableElement;
        }
        static { this.styles = css `
    affine-data-view-rich-text-cell-editing {
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 1px;
      cursor: text;
    }

    .affine-data-view-rich-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100%;
      outline: none;
    }

    .affine-data-view-rich-text v-line {
      display: flex !important;
      align-items: center;
      height: 100%;
      width: 100%;
    }

    .affine-data-view-rich-text v-line > div {
      flex-grow: 1;
    }
  `; }
        #_richTextElement_accessor_storage;
        get _richTextElement() { return this.#_richTextElement_accessor_storage; }
        set _richTextElement(value) { this.#_richTextElement_accessor_storage = value; }
        connectedCallback() {
            super.connectedCallback();
            if (!this.value || typeof this.value === 'string') {
                this._initYText(this.value);
            }
            const selectAll = (e) => {
                if (e.key === 'a' && (IS_MAC ? e.metaKey : e.ctrlKey)) {
                    e.stopPropagation();
                    e.preventDefault();
                    this.inlineEditor.selectAll();
                }
            };
            this.disposables.addFromEvent(this, 'keydown', selectAll);
        }
        firstUpdated() {
            this._richTextElement?.updateComplete
                .then(() => {
                this.disposables.add(this.inlineEditor.slots.keydown.on(this._handleKeyDown));
                this.inlineEditor.focusEnd();
            })
                .catch(console.error);
        }
        render() {
            if (!this.service)
                return nothing;
            return html `<rich-text
      .yText=${this.value}
      .inlineEventSource=${this.topContenteditableElement}
      .attributesSchema=${this.attributesSchema}
      .attributeRenderer=${this.attributeRenderer}
      .embedChecker=${this.inlineManager?.embedChecker}
      .markdownShortcutHandler=${this.inlineManager?.markdownShortcutHandler}
      .verticalScrollContainerGetter=${() => this.topContenteditableElement?.host
                ? getViewportElement(this.topContenteditableElement.host)
                : null}
      class="affine-data-view-rich-text inline-editor"
    ></rich-text>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return RichTextCellEditing = _classThis;
})();
export { RichTextCellEditing };
export const richTextColumnConfig = richTextColumnModelConfig.renderConfig({
    icon: createIcon('TextIcon'),
    cellRenderer: {
        view: createFromBaseCellRenderer(RichTextCell),
        edit: createFromBaseCellRenderer(RichTextCellEditing),
    },
});
//# sourceMappingURL=cell-renderer.js.map