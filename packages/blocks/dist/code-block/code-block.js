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
import { INLINE_ROOT_ATTR, } from '@blocksuite/inline';
import { Slice } from '@blocksuite/store';
import { html, nothing, render } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { z } from 'zod';
import { bindContainerHotkey } from '../_common/components/rich-text/keymap/index.js';
import { toast } from '../_common/components/toast.js';
import { ThemeObserver } from '../_common/theme/theme-observer.js';
import { getViewportElement } from '../_common/utils/query.js';
import { EdgelessRootBlockComponent } from '../root-block/edgeless/edgeless-root-block.js';
import { BlockComponent } from './../_common/components/block-component.js';
import { CodeClipboardController } from './clipboard/index.js';
import { codeBlockStyles } from './styles.js';
import { getStandardLanguage, isPlaintext } from './utils/code-languages.js';
import { getCodeLineRenderer } from './utils/code-line-renderer.js';
import { DARK_THEME, FALLBACK_LANG, LIGHT_THEME, PLAIN_TEXT_LANG_INFO, } from './utils/consts.js';
import { getHighLighter } from './utils/high-lighter.js';
let CodeBlockComponent = (() => {
    let _classDecorators = [customElement('affine-code')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BlockComponent;
    let __richTextElement_decorators;
    let __richTextElement_initializers = [];
    let __richTextElement_extraInitializers = [];
    var CodeBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._themeObserver = new ThemeObserver();
            this._richTextResizeObserver = new ResizeObserver(() => {
                this._updateLineNumbers();
            });
            /**
             * Given the high cost associated with updating the highlight,
             * it is preferable to do so only when a change in language occurs.
             *
             * The variable is used to store the "current" language info,
             * also known as the "previous" language
             * when a language change occurs and the highlighter is not updated.
             *
             * In most cases, the language will be equal to normalizing the language of the model.
             *
             * See {@link updated}
             */
            this._previousLanguage = PLAIN_TEXT_LANG_INFO;
            this._highlighter = null;
            this._inlineRangeProvider = null;
            this.#_richTextElement_accessor_storage = __runInitializers(this, __richTextElement_initializers, null);
            this.#useCaptionEditor_accessor_storage = (__runInitializers(this, __richTextElement_extraInitializers), true);
            this.#blockContainerStyles_accessor_storage = {
                margin: '24px 0',
            };
            this.clipboardController = new CodeClipboardController(this);
            this.highlightOptionsGetter = null;
            this.attributesSchema = z.object({});
            this.getAttributeRenderer = () => getCodeLineRenderer(() => ({
                lang: getStandardLanguage(this.model.language.toLowerCase())?.id ??
                    'plaintext',
                highlighter: this._highlighter,
            }));
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __richTextElement_decorators = [query('rich-text')];
            __esDecorate(this, null, __richTextElement_decorators, { kind: "accessor", name: "_richTextElement", static: false, private: false, access: { has: obj => "_richTextElement" in obj, get: obj => obj._richTextElement, set: (obj, value) => { obj._richTextElement = value; } }, metadata: _metadata }, __richTextElement_initializers, __richTextElement_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            CodeBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get readonly() {
            return this.doc.readonly;
        }
        get topContenteditableElement() {
            if (this.rootElement instanceof EdgelessRootBlockComponent) {
                const el = this.closest('affine-note, affine-edgeless-text');
                return el;
            }
            return this.rootElement;
        }
        get inlineEditor() {
            const inlineRoot = this.querySelector(`[${INLINE_ROOT_ATTR}]`);
            if (!inlineRoot) {
                throw new Error('Inline editor root not found');
            }
            return inlineRoot.inlineEditor;
        }
        static { this.styles = codeBlockStyles; }
        #_richTextElement_accessor_storage;
        get _richTextElement() { return this.#_richTextElement_accessor_storage; }
        set _richTextElement(value) { this.#_richTextElement_accessor_storage = value; }
        #useCaptionEditor_accessor_storage;
        get useCaptionEditor() { return this.#useCaptionEditor_accessor_storage; }
        set useCaptionEditor(value) { this.#useCaptionEditor_accessor_storage = value; }
        #blockContainerStyles_accessor_storage;
        get blockContainerStyles() { return this.#blockContainerStyles_accessor_storage; }
        set blockContainerStyles(value) { this.#blockContainerStyles_accessor_storage = value; }
        async _startHighlight(lang) {
            if (this._highlighter) {
                const loadedLangs = this._highlighter.getLoadedLanguages();
                if (!isPlaintext(lang.id) && !loadedLangs.includes(lang.id)) {
                    this._highlighter
                        .loadLanguage(lang.id)
                        .then(() => {
                        const richText = this.querySelector('rich-text');
                        const inlineEditor = richText?.inlineEditor;
                        if (inlineEditor) {
                            inlineEditor.requestUpdate();
                        }
                    })
                        .catch(console.error);
                }
                return;
            }
            this._highlighter = await getHighLighter({
                themes: [LIGHT_THEME, DARK_THEME],
                langs: [lang.id],
            });
            const richText = this.querySelector('rich-text');
            const inlineEditor = richText?.inlineEditor;
            if (!inlineEditor)
                return;
            inlineEditor.requestUpdate();
            const range = inlineEditor.getInlineRange();
            if (range) {
                inlineEditor.setInlineRange(range);
            }
        }
        _updateLineNumbers() {
            const lineNumbersContainer = this.querySelector('#line-numbers');
            assertExists(lineNumbersContainer);
            const next = this.model.wrap
                ? generateLineNumberRender()
                : lineNumberRender;
            render(repeat(Array.from(this.querySelectorAll('v-line')), next), lineNumbersContainer);
        }
        async getUpdateComplete() {
            const result = await super.getUpdateComplete();
            await this._richTextElement?.updateComplete;
            return result;
        }
        connectedCallback() {
            super.connectedCallback();
            // set highlight options getter used by "exportToHtml"
            this.clipboardController.hostConnected();
            this.setHighlightOptionsGetter(() => {
                return {
                    lang: this._previousLanguage.id,
                    highlighter: this._highlighter,
                };
            });
            this._themeObserver.observe(document.documentElement);
            this._themeObserver.on(() => {
                if (!this._highlighter)
                    return;
                const richText = this.querySelector('rich-text');
                const inlineEditor = richText?.inlineEditor;
                if (!inlineEditor)
                    return;
                // update code-line theme
                setTimeout(() => {
                    inlineEditor.requestUpdate();
                });
            });
            this.disposables.add(() => this._themeObserver.dispose());
            bindContainerHotkey(this);
            const selectionManager = this.host.selection;
            const INDENT_SYMBOL = '  ';
            const LINE_BREAK_SYMBOL = '\n';
            const allIndexOf = (text, symbol, start = 0, end = text.length) => {
                const indexArr = [];
                let i = start;
                while (i < end) {
                    const index = text.indexOf(symbol, i);
                    if (index === -1 || index > end) {
                        break;
                    }
                    indexArr.push(index);
                    i = index + 1;
                }
                return indexArr;
            };
            this.bindHotKey({
                Backspace: ctx => {
                    const state = ctx.get('keyboardState');
                    const textSelection = selectionManager.find('text');
                    if (!textSelection) {
                        state.raw.preventDefault();
                        return;
                    }
                    const from = textSelection.from;
                    if (from.index === 0 && from.length === 0) {
                        state.raw.preventDefault();
                        selectionManager.setGroup('note', [
                            selectionManager.create('block', { blockId: this.blockId }),
                        ]);
                        return true;
                    }
                    return;
                },
                Tab: ctx => {
                    const state = ctx.get('keyboardState');
                    const event = state.raw;
                    const inlineEditor = this.inlineEditor;
                    const inlineRange = inlineEditor.getInlineRange();
                    if (inlineRange) {
                        event.stopPropagation();
                        event.preventDefault();
                        const text = this.inlineEditor.yText.toString();
                        const index = text.lastIndexOf(LINE_BREAK_SYMBOL, inlineRange.index - 1);
                        const indexArr = allIndexOf(text, LINE_BREAK_SYMBOL, inlineRange.index, inlineRange.index + inlineRange.length)
                            .map(i => i + 1)
                            .reverse();
                        if (index !== -1) {
                            indexArr.push(index + 1);
                        }
                        else {
                            indexArr.push(0);
                        }
                        indexArr.forEach(i => {
                            this.inlineEditor.insertText({
                                index: i,
                                length: 0,
                            }, INDENT_SYMBOL);
                        });
                        this.inlineEditor.setInlineRange({
                            index: inlineRange.index + 2,
                            length: inlineRange.length + (indexArr.length - 1) * INDENT_SYMBOL.length,
                        });
                        return true;
                    }
                    return;
                },
                'Shift-Tab': ctx => {
                    const state = ctx.get('keyboardState');
                    const event = state.raw;
                    const inlineEditor = this.inlineEditor;
                    const inlineRange = inlineEditor.getInlineRange();
                    if (inlineRange) {
                        event.stopPropagation();
                        event.preventDefault();
                        const text = this.inlineEditor.yText.toString();
                        const index = text.lastIndexOf(LINE_BREAK_SYMBOL, inlineRange.index - 1);
                        let indexArr = allIndexOf(text, LINE_BREAK_SYMBOL, inlineRange.index, inlineRange.index + inlineRange.length)
                            .map(i => i + 1)
                            .reverse();
                        if (index !== -1) {
                            indexArr.push(index + 1);
                        }
                        else {
                            indexArr.push(0);
                        }
                        indexArr = indexArr.filter(i => text.slice(i, i + 2) === INDENT_SYMBOL);
                        indexArr.forEach(i => {
                            this.inlineEditor.deleteText({
                                index: i,
                                length: 2,
                            });
                        });
                        if (indexArr.length > 0) {
                            this.inlineEditor.setInlineRange({
                                index: inlineRange.index -
                                    (indexArr[indexArr.length - 1] < inlineRange.index ? 2 : 0),
                                length: inlineRange.length -
                                    (indexArr.length - 1) * INDENT_SYMBOL.length,
                            });
                        }
                        return true;
                    }
                    return;
                },
            });
            this._inlineRangeProvider = getInlineRangeProvider(this);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.clipboardController.hostDisconnected();
            this._richTextResizeObserver.disconnect();
        }
        updated() {
            if (this.model.language !== this._previousLanguage.id) {
                const lang = getStandardLanguage(this.model.language);
                this._previousLanguage = lang ?? PLAIN_TEXT_LANG_INFO;
                if (lang) {
                    this._startHighlight(lang).catch(console.error);
                }
                else {
                    this._highlighter = null;
                }
                const richText = this.querySelector('rich-text');
                const inlineEditor = richText?.inlineEditor;
                if (inlineEditor) {
                    inlineEditor.requestUpdate();
                }
            }
            assertExists(this._richTextElement);
            this._richTextResizeObserver.disconnect();
            this._richTextResizeObserver.observe(this._richTextElement);
        }
        copyCode() {
            const model = this.model;
            const slice = Slice.fromModels(model.doc, [model]);
            this.std.clipboard
                .copySlice(slice)
                .then(() => {
                toast(this.host, 'Copied to clipboard');
            })
                .catch(e => {
                toast(this.host, 'Copied failed, something went wrong');
                console.error(e);
            });
        }
        setHighlightOptionsGetter(fn) {
            this.highlightOptionsGetter = fn;
        }
        setLang(lang) {
            const standardLang = lang ? getStandardLanguage(lang) : null;
            const langName = standardLang?.id ?? FALLBACK_LANG;
            this.doc.updateBlock(this.model, {
                language: langName,
            });
        }
        setWrap(wrap) {
            this.doc.updateBlock(this.model, { wrap });
        }
        renderBlock() {
            return html `
      <div
        class=${classMap({
                'affine-code-block-container': true,
                wrap: this.model.wrap,
            })}
      >
        <div class="rich-text-container">
          <div contenteditable="false" id="line-numbers"></div>
          <rich-text
            .yText=${this.model.text.yText}
            .inlineEventSource=${this.topContenteditableElement ?? nothing}
            .undoManager=${this.doc.history}
            .attributesSchema=${this.attributesSchema}
            .attributeRenderer=${this.getAttributeRenderer()}
            .readonly=${this.doc.readonly}
            .inlineRangeProvider=${this._inlineRangeProvider}
            .enableClipboard=${false}
            .enableUndoRedo=${false}
            .wrapText=${this.model.wrap}
            .verticalScrollContainerGetter=${() => getViewportElement(this.host)}
          >
          </rich-text>
        </div>

        ${this.renderChildren(this.model)} ${Object.values(this.widgets)}
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return CodeBlockComponent = _classThis;
})();
export { CodeBlockComponent };
function generateLineNumberRender(top = 0) {
    return function lineNumberRender(e, index) {
        const style = {
            '--top': `${top}px`,
        };
        top = e.getBoundingClientRect().height;
        return html `<div style=${styleMap(style)}>${index + 1}</div>`;
    };
}
function lineNumberRender(_, index) {
    return html `<div>${index + 1}</div>`;
}
//# sourceMappingURL=code-block.js.map