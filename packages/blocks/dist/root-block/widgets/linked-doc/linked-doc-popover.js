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
import '../../../_common/components/button.js';
import { WithDisposable } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { html, LitElement } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { cleanSpecifiedTail, createKeydownObserver, } from '../../../_common/components/utils.js';
import { styles } from './styles.js';
let LinkedDocPopover = (() => {
    let _classDecorators = [customElement('affine-linked-doc-popover')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __position_decorators;
    let __position_initializers = [];
    let __position_extraInitializers = [];
    let __query_decorators;
    let __query_initializers = [];
    let __query_extraInitializers = [];
    let __activatedItemIndex_decorators;
    let __activatedItemIndex_initializers = [];
    let __activatedItemIndex_extraInitializers = [];
    let _options_decorators;
    let _options_initializers = [];
    let _options_extraInitializers = [];
    let _triggerKey_decorators;
    let _triggerKey_initializers = [];
    let _triggerKey_extraInitializers = [];
    let _linkedDocElement_decorators;
    let _linkedDocElement_initializers = [];
    let _linkedDocElement_extraInitializers = [];
    var LinkedDocPopover = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __position_decorators = [state()];
            __query_decorators = [state()];
            __activatedItemIndex_decorators = [state()];
            _options_decorators = [property({ attribute: false })];
            _triggerKey_decorators = [property({ attribute: false })];
            _linkedDocElement_decorators = [query('.linked-doc-popover')];
            __esDecorate(this, null, __position_decorators, { kind: "accessor", name: "_position", static: false, private: false, access: { has: obj => "_position" in obj, get: obj => obj._position, set: (obj, value) => { obj._position = value; } }, metadata: _metadata }, __position_initializers, __position_extraInitializers);
            __esDecorate(this, null, __query_decorators, { kind: "accessor", name: "_query", static: false, private: false, access: { has: obj => "_query" in obj, get: obj => obj._query, set: (obj, value) => { obj._query = value; } }, metadata: _metadata }, __query_initializers, __query_extraInitializers);
            __esDecorate(this, null, __activatedItemIndex_decorators, { kind: "accessor", name: "_activatedItemIndex", static: false, private: false, access: { has: obj => "_activatedItemIndex" in obj, get: obj => obj._activatedItemIndex, set: (obj, value) => { obj._activatedItemIndex = value; } }, metadata: _metadata }, __activatedItemIndex_initializers, __activatedItemIndex_extraInitializers);
            __esDecorate(this, null, _options_decorators, { kind: "accessor", name: "options", static: false, private: false, access: { has: obj => "options" in obj, get: obj => obj.options, set: (obj, value) => { obj.options = value; } }, metadata: _metadata }, _options_initializers, _options_extraInitializers);
            __esDecorate(this, null, _triggerKey_decorators, { kind: "accessor", name: "triggerKey", static: false, private: false, access: { has: obj => "triggerKey" in obj, get: obj => obj.triggerKey, set: (obj, value) => { obj.triggerKey = value; } }, metadata: _metadata }, _triggerKey_initializers, _triggerKey_extraInitializers);
            __esDecorate(this, null, _linkedDocElement_decorators, { kind: "accessor", name: "linkedDocElement", static: false, private: false, access: { has: obj => "linkedDocElement" in obj, get: obj => obj.linkedDocElement, set: (obj, value) => { obj.linkedDocElement = value; } }, metadata: _metadata }, _linkedDocElement_initializers, _linkedDocElement_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            LinkedDocPopover = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get _flattenActionList() {
            return this._actionGroup
                .map(group => group.items.map(item => ({ ...item, groupName: group.name })))
                .flat();
        }
        get _doc() {
            return this.editorHost.doc;
        }
        static { this.styles = styles; }
        #_position_accessor_storage;
        get _position() { return this.#_position_accessor_storage; }
        set _position(value) { this.#_position_accessor_storage = value; }
        #_query_accessor_storage;
        get _query() { return this.#_query_accessor_storage; }
        set _query(value) { this.#_query_accessor_storage = value; }
        #_activatedItemIndex_accessor_storage;
        get _activatedItemIndex() { return this.#_activatedItemIndex_accessor_storage; }
        set _activatedItemIndex(value) { this.#_activatedItemIndex_accessor_storage = value; }
        #options_accessor_storage;
        get options() { return this.#options_accessor_storage; }
        set options(value) { this.#options_accessor_storage = value; }
        #triggerKey_accessor_storage;
        get triggerKey() { return this.#triggerKey_accessor_storage; }
        set triggerKey(value) { this.#triggerKey_accessor_storage = value; }
        #linkedDocElement_accessor_storage;
        get linkedDocElement() { return this.#linkedDocElement_accessor_storage; }
        set linkedDocElement(value) { this.#linkedDocElement_accessor_storage = value; }
        constructor(editorHost, inlineEditor, abortController = new AbortController()) {
            super();
            this.editorHost = editorHost;
            this.inlineEditor = inlineEditor;
            this.abortController = abortController;
            this.#_position_accessor_storage = __runInitializers(this, __position_initializers, null);
            this.#_query_accessor_storage = (__runInitializers(this, __position_extraInitializers), __runInitializers(this, __query_initializers, ''));
            this.#_activatedItemIndex_accessor_storage = (__runInitializers(this, __query_extraInitializers), __runInitializers(this, __activatedItemIndex_initializers, 0));
            this._actionGroup = (__runInitializers(this, __activatedItemIndex_extraInitializers), []);
            this.#options_accessor_storage = __runInitializers(this, _options_initializers, void 0);
            this.#triggerKey_accessor_storage = (__runInitializers(this, _options_extraInitializers), __runInitializers(this, _triggerKey_initializers, void 0));
            this.#linkedDocElement_accessor_storage = (__runInitializers(this, _triggerKey_extraInitializers), __runInitializers(this, _linkedDocElement_initializers, null));
            __runInitializers(this, _linkedDocElement_extraInitializers);
            this.editorHost = editorHost;
            this.inlineEditor = inlineEditor;
            this.abortController = abortController;
        }
        _updateActionList() {
            this._actionGroup = this.options.getMenus({
                editorHost: this.editorHost,
                query: this._query,
                inlineEditor: this.inlineEditor,
                docMetas: this._doc.collection.meta.docMetas,
            });
        }
        connectedCallback() {
            super.connectedCallback();
            const inlineEditor = this.inlineEditor;
            assertExists(inlineEditor, 'RichText InlineEditor not found');
            // init
            this._updateActionList();
            this._disposables.add(this._doc.collection.slots.docUpdated.on(() => {
                this._updateActionList();
            }));
            this._disposables.addFromEvent(this, 'mousedown', e => {
                // Prevent input from losing focus
                e.preventDefault();
            });
            createKeydownObserver({
                target: inlineEditor.eventSource,
                inlineEditor,
                onUpdateQuery: str => {
                    this._query = str;
                    this._activatedItemIndex = 0;
                    this._updateActionList();
                },
                abortController: this.abortController,
                onMove: step => {
                    const itemLen = this._flattenActionList.length;
                    this._activatedItemIndex =
                        (itemLen + this._activatedItemIndex + step) % itemLen;
                    // Scroll to the active item
                    const item = this._flattenActionList[this._activatedItemIndex];
                    const shadowRoot = this.shadowRoot;
                    if (!shadowRoot) {
                        console.warn('Failed to find the shadow root!', this);
                        return;
                    }
                    const ele = shadowRoot.querySelector(`icon-button[data-id="${item.key}"]`);
                    if (!ele) {
                        console.warn('Failed to find the active item!', item);
                        return;
                    }
                    ele.scrollIntoView({
                        block: 'nearest',
                    });
                },
                onConfirm: () => {
                    this.abortController.abort();
                    cleanSpecifiedTail(this.editorHost, this.inlineEditor, this.triggerKey + this._query);
                    this._flattenActionList[this._activatedItemIndex]
                        .action()
                        ?.catch(console.error);
                },
                onEsc: () => {
                    this.abortController.abort();
                },
            });
        }
        updatePosition(position) {
            this._position = position;
        }
        render() {
            const MAX_HEIGHT = 396;
            const style = this._position
                ? styleMap({
                    transform: `translate(${this._position.x}, ${this._position.y})`,
                    maxHeight: `${Math.min(this._position.height, MAX_HEIGHT)}px`,
                })
                : styleMap({
                    visibility: 'hidden',
                });
            // XXX This is a side effect
            let accIdx = 0;
            return html `<div class="linked-doc-popover" style="${style}">
      ${this._actionGroup
                .filter(group => group.items.length)
                .map((group, idx) => {
                return html `
            <div class="divider" ?hidden=${idx === 0}></div>
            <div class="group-title">${group.name}</div>
            <div class="group" style=${group.styles ?? ''}>
              ${group.items.map(({ key, name, icon, action }) => {
                    accIdx++;
                    const curIdx = accIdx - 1;
                    return html `<icon-button
                  width="280px"
                  height="32px"
                  data-id=${key}
                  text=${name}
                  ?hover=${this._activatedItemIndex === curIdx}
                  @click=${() => {
                        this.abortController.abort();
                        cleanSpecifiedTail(this.editorHost, this.inlineEditor, this.triggerKey + this._query);
                        action()?.catch(console.error);
                    }}
                  @mousemove=${() => {
                        // Use `mousemove` instead of `mouseover` to avoid navigate conflict with keyboard
                        this._activatedItemIndex = curIdx;
                    }}
                  >${icon}</icon-button
                >`;
                })}
            </div>
          `;
            })}
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return LinkedDocPopover = _classThis;
})();
export { LinkedDocPopover };
//# sourceMappingURL=linked-doc-popover.js.map