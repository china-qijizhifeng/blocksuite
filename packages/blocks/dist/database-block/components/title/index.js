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
import { assertExists } from '@blocksuite/global/utils';
import { css, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { getViewportElement } from '../../../_common/utils/query.js';
let DatabaseTitle = (() => {
    let _classDecorators = [customElement('affine-database-title')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _richText_decorators;
    let _richText_initializers = [];
    let _richText_extraInitializers = [];
    let _isActive_decorators;
    let _isActive_initializers = [];
    let _isActive_extraInitializers = [];
    let _titleText_decorators;
    let _titleText_initializers = [];
    let _titleText_extraInitializers = [];
    let _readonly_decorators;
    let _readonly_initializers = [];
    let _readonly_extraInitializers = [];
    let _onPressEnterKey_decorators;
    let _onPressEnterKey_initializers = [];
    let _onPressEnterKey_extraInitializers = [];
    let _isComposing_decorators;
    let _isComposing_initializers = [];
    let _isComposing_extraInitializers = [];
    var DatabaseTitle = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#richText_accessor_storage = __runInitializers(this, _richText_initializers, void 0);
            this.#isActive_accessor_storage = (__runInitializers(this, _richText_extraInitializers), __runInitializers(this, _isActive_initializers, false));
            this.#titleText_accessor_storage = (__runInitializers(this, _isActive_extraInitializers), __runInitializers(this, _titleText_initializers, void 0));
            this.#readonly_accessor_storage = (__runInitializers(this, _titleText_extraInitializers), __runInitializers(this, _readonly_initializers, void 0));
            this.#onPressEnterKey_accessor_storage = (__runInitializers(this, _readonly_extraInitializers), __runInitializers(this, _onPressEnterKey_initializers, undefined));
            this.#isComposing_accessor_storage = (__runInitializers(this, _onPressEnterKey_extraInitializers), __runInitializers(this, _isComposing_initializers, false));
            this._onKeyDown = (__runInitializers(this, _isComposing_extraInitializers), (event) => {
                if (event.key === 'Enter' && !event.isComposing) {
                    // prevent insert v-line
                    event.preventDefault();
                    // insert new row
                    this.onPressEnterKey?.();
                    return;
                }
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _richText_decorators = [query('rich-text')];
            _isActive_decorators = [state()];
            _titleText_decorators = [property({ attribute: false })];
            _readonly_decorators = [property({ attribute: false })];
            _onPressEnterKey_decorators = [property({ attribute: false })];
            _isComposing_decorators = [state()];
            __esDecorate(this, null, _richText_decorators, { kind: "accessor", name: "richText", static: false, private: false, access: { has: obj => "richText" in obj, get: obj => obj.richText, set: (obj, value) => { obj.richText = value; } }, metadata: _metadata }, _richText_initializers, _richText_extraInitializers);
            __esDecorate(this, null, _isActive_decorators, { kind: "accessor", name: "isActive", static: false, private: false, access: { has: obj => "isActive" in obj, get: obj => obj.isActive, set: (obj, value) => { obj.isActive = value; } }, metadata: _metadata }, _isActive_initializers, _isActive_extraInitializers);
            __esDecorate(this, null, _titleText_decorators, { kind: "accessor", name: "titleText", static: false, private: false, access: { has: obj => "titleText" in obj, get: obj => obj.titleText, set: (obj, value) => { obj.titleText = value; } }, metadata: _metadata }, _titleText_initializers, _titleText_extraInitializers);
            __esDecorate(this, null, _readonly_decorators, { kind: "accessor", name: "readonly", static: false, private: false, access: { has: obj => "readonly" in obj, get: obj => obj.readonly, set: (obj, value) => { obj.readonly = value; } }, metadata: _metadata }, _readonly_initializers, _readonly_extraInitializers);
            __esDecorate(this, null, _onPressEnterKey_decorators, { kind: "accessor", name: "onPressEnterKey", static: false, private: false, access: { has: obj => "onPressEnterKey" in obj, get: obj => obj.onPressEnterKey, set: (obj, value) => { obj.onPressEnterKey = value; } }, metadata: _metadata }, _onPressEnterKey_initializers, _onPressEnterKey_extraInitializers);
            __esDecorate(this, null, _isComposing_decorators, { kind: "accessor", name: "isComposing", static: false, private: false, access: { has: obj => "isComposing" in obj, get: obj => obj.isComposing, set: (obj, value) => { obj.isComposing = value; } }, metadata: _metadata }, _isComposing_initializers, _isComposing_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DatabaseTitle = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get inlineEditor() {
            assertExists(this.richText.inlineEditor);
            return this.richText.inlineEditor;
        }
        get inlineEditorContainer() {
            return this.inlineEditor.rootElement;
        }
        get topContenteditableElement() {
            const databaseBlock = this.closest('affine-database');
            return databaseBlock?.topContenteditableElement;
        }
        static { this.styles = css `
    .affine-database-title {
      position: relative;
      flex: 1;
    }

    .database-title {
      font-size: 20px;
      font-weight: 600;
      line-height: 28px;
      color: var(--affine-text-primary-color);
      font-family: inherit;
      /* overflow-x: scroll; */
      overflow: hidden;
      cursor: text;
    }

    .database-title [data-v-text='true'] {
      display: block;
      word-break: break-all !important;
    }

    .database-title.ellipsis [data-v-text='true'] {
      white-space: nowrap !important;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .affine-database-title [data-title-empty='true']::before {
      content: 'Untitled';
      position: absolute;
      pointer-events: none;
      color: var(--affine-text-primary-color);
    }

    .affine-database-title [data-title-focus='true']::before {
      color: var(--affine-placeholder-color);
    }
  `; }
        #richText_accessor_storage;
        get richText() { return this.#richText_accessor_storage; }
        set richText(value) { this.#richText_accessor_storage = value; }
        #isActive_accessor_storage;
        get isActive() { return this.#isActive_accessor_storage; }
        set isActive(value) { this.#isActive_accessor_storage = value; }
        #titleText_accessor_storage;
        get titleText() { return this.#titleText_accessor_storage; }
        set titleText(value) { this.#titleText_accessor_storage = value; }
        #readonly_accessor_storage;
        get readonly() { return this.#readonly_accessor_storage; }
        set readonly(value) { this.#readonly_accessor_storage = value; }
        #onPressEnterKey_accessor_storage;
        get onPressEnterKey() { return this.#onPressEnterKey_accessor_storage; }
        set onPressEnterKey(value) { this.#onPressEnterKey_accessor_storage = value; }
        #isComposing_accessor_storage;
        get isComposing() { return this.#isComposing_accessor_storage; }
        set isComposing(value) { this.#isComposing_accessor_storage = value; }
        firstUpdated() {
            // for title placeholder
            this.titleText.yText.observe(() => {
                this.requestUpdate();
            });
            this.updateComplete
                .then(() => {
                this.disposables.add(this.inlineEditor.slots.keydown.on(this._onKeyDown));
                this.disposables.add(this.inlineEditor.slots.inputting.on(() => {
                    this.isComposing = this.inlineEditor.isComposing;
                }));
                let beforeInlineRange = null;
                this.disposables.add(this.inlineEditor.slots.inlineRangeUpdate.on(([inlineRange]) => {
                    if (inlineRange) {
                        if (!beforeInlineRange) {
                            this.isActive = true;
                        }
                    }
                    else {
                        if (beforeInlineRange) {
                            this.isActive = false;
                        }
                    }
                    beforeInlineRange = inlineRange;
                }));
            })
                .catch(console.error);
        }
        async getUpdateComplete() {
            const result = await super.getUpdateComplete();
            await this.richText?.updateComplete;
            return result;
        }
        render() {
            const isEmpty = (!this.titleText || !this.titleText.length) && !this.isComposing;
            const classList = classMap({
                'database-title': true,
                ellipsis: !this.isActive,
            });
            return html `<div class="affine-database-title">
      <rich-text
        .yText=${this.titleText.yText}
        .inlineEventSource=${this.topContenteditableElement}
        .undoManager=${this.topContenteditableElement?.doc.history}
        .enableFormat=${false}
        .readonly=${this.readonly}
        .verticalScrollContainerGetter=${() => this.topContenteditableElement?.host
                ? getViewportElement(this.topContenteditableElement.host)
                : null}
        class="${classList}"
        data-title-empty="${isEmpty}"
        data-title-focus="${this.isActive}"
        data-block-is-database-title="true"
        title="${this.titleText.toString()}"
      ></rich-text>
      <div class="database-title" style="float:left;height: 0;">Untitled</div>
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DatabaseTitle = _classThis;
})();
export { DatabaseTitle };
//# sourceMappingURL=index.js.map