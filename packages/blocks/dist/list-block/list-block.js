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
/// <reference types="vite/client" />
import '../_common/components/rich-text/rich-text.js';
import { getInlineRangeProvider } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { html, nothing } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { BlockComponent } from '../_common/components/block-component.js';
import { bindContainerHotkey } from '../_common/components/rich-text/keymap/index.js';
import { BLOCK_CHILDREN_CONTAINER_PADDING_LEFT } from '../_common/consts.js';
import { getViewportElement } from '../_common/utils/query.js';
import { EdgelessRootBlockComponent } from '../root-block/edgeless/edgeless-root-block.js';
import { listBlockStyles } from './styles.js';
import { ListIcon } from './utils/get-list-icon.js';
import { playCheckAnimation, toggleDown, toggleRight } from './utils/icons.js';
let ListBlockComponent = (() => {
    let _classDecorators = [customElement('affine-list')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BlockComponent;
    let __isCollapsedWhenReadOnly_decorators;
    let __isCollapsedWhenReadOnly_initializers = [];
    let __isCollapsedWhenReadOnly_extraInitializers = [];
    let __richTextElement_decorators;
    let __richTextElement_initializers = [];
    let __richTextElement_extraInitializers = [];
    var ListBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_isCollapsedWhenReadOnly_accessor_storage = __runInitializers(this, __isCollapsedWhenReadOnly_initializers, !!this.model?.collapsed);
            this.#_richTextElement_accessor_storage = (__runInitializers(this, __isCollapsedWhenReadOnly_extraInitializers), __runInitializers(this, __richTextElement_initializers, null));
            this._inlineRangeProvider = (__runInitializers(this, __richTextElement_extraInitializers), null);
            this.#blockContainerStyles_accessor_storage = {
                margin: '10px 0',
            };
            this._onClickIcon = (e) => {
                e.stopPropagation();
                if (this.model.type === 'toggle') {
                    this._toggleChildren();
                    return;
                }
                else if (this.model.type === 'todo') {
                    this.doc.captureSync();
                    const checkedPropObj = { checked: !this.model.checked };
                    this.doc.updateBlock(this.model, checkedPropObj);
                    if (this.model.checked) {
                        const checkEl = this.querySelector('.affine-list-block__todo-prefix');
                        assertExists(checkEl);
                        playCheckAnimation(checkEl).catch(console.error);
                    }
                    return;
                }
                this._select();
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __isCollapsedWhenReadOnly_decorators = [state()];
            __richTextElement_decorators = [query('rich-text')];
            __esDecorate(this, null, __isCollapsedWhenReadOnly_decorators, { kind: "accessor", name: "_isCollapsedWhenReadOnly", static: false, private: false, access: { has: obj => "_isCollapsedWhenReadOnly" in obj, get: obj => obj._isCollapsedWhenReadOnly, set: (obj, value) => { obj._isCollapsedWhenReadOnly = value; } }, metadata: _metadata }, __isCollapsedWhenReadOnly_initializers, __isCollapsedWhenReadOnly_extraInitializers);
            __esDecorate(this, null, __richTextElement_decorators, { kind: "accessor", name: "_richTextElement", static: false, private: false, access: { has: obj => "_richTextElement" in obj, get: obj => obj._richTextElement, set: (obj, value) => { obj._richTextElement = value; } }, metadata: _metadata }, __richTextElement_initializers, __richTextElement_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ListBlockComponent = _classThis = _classDescriptor.value;
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
        static { this.styles = listBlockStyles; }
        #_isCollapsedWhenReadOnly_accessor_storage;
        get _isCollapsedWhenReadOnly() { return this.#_isCollapsedWhenReadOnly_accessor_storage; }
        set _isCollapsedWhenReadOnly(value) { this.#_isCollapsedWhenReadOnly_accessor_storage = value; }
        #_richTextElement_accessor_storage;
        get _richTextElement() { return this.#_richTextElement_accessor_storage; }
        set _richTextElement(value) { this.#_richTextElement_accessor_storage = value; }
        #blockContainerStyles_accessor_storage;
        get blockContainerStyles() { return this.#blockContainerStyles_accessor_storage; }
        set blockContainerStyles(value) { this.#blockContainerStyles_accessor_storage = value; }
        _select() {
            const selection = this.host.selection;
            selection.update(selList => {
                return selList
                    .filter(sel => !sel.is('text') && !sel.is('block'))
                    .concat(selection.create('block', { blockId: this.blockId }));
            });
        }
        _updateFollowingListSiblings() {
            this.updateComplete
                .then(() => {
                let current = this;
                while (current?.tagName == 'AFFINE-LIST') {
                    current.requestUpdate();
                    const next = this.std.doc.getNext(current.model);
                    const id = next?.id;
                    current = id ? this.std.view.getBlock(id) : null;
                }
            })
                .catch(console.error);
        }
        _toggleChildren() {
            if (this.doc.readonly) {
                this._isCollapsedWhenReadOnly = !this._isCollapsedWhenReadOnly;
                return;
            }
            const newCollapsedState = !this.model.collapsed;
            this._isCollapsedWhenReadOnly = newCollapsedState;
            this.doc.captureSync();
            this.doc.updateBlock(this.model, {
                collapsed: newCollapsedState,
            });
        }
        _toggleTemplate(isCollapsed) {
            const noChildren = this.model.children.length === 0;
            if (noChildren)
                return nothing;
            const toggleDownTemplate = html `<div
      contenteditable="false"
      class="toggle-icon"
      @click=${this._toggleChildren}
    >
      ${toggleDown}
    </div>`;
            const toggleRightTemplate = html `<div
      contenteditable="false"
      class="toggle-icon toggle-icon__collapsed"
      @click=${this._toggleChildren}
    >
      ${toggleRight}
    </div>`;
            return isCollapsed ? toggleRightTemplate : toggleDownTemplate;
        }
        async getUpdateComplete() {
            const result = await super.getUpdateComplete();
            await this._richTextElement?.updateComplete;
            return result;
        }
        connectedCallback() {
            super.connectedCallback();
            bindContainerHotkey(this);
            this._inlineRangeProvider = getInlineRangeProvider(this);
            this._updateFollowingListSiblings();
            this.disposables.add(this.model.childrenUpdated.on(() => {
                this._updateFollowingListSiblings();
            }));
            this.disposables.add(this.host.std.doc.slots.blockUpdated.on(e => {
                if (e.type !== 'delete')
                    return;
                const deletedBlock = this.std.view.getBlock(e.id);
                if (!deletedBlock)
                    return;
                if (this !== deletedBlock.nextElementSibling)
                    return;
                this._updateFollowingListSiblings();
                return;
            }));
        }
        renderBlock() {
            const { model, _onClickIcon } = this;
            const collapsed = this.doc.readonly
                ? this._isCollapsedWhenReadOnly
                : !!model.collapsed;
            const listIcon = ListIcon(model, !collapsed, _onClickIcon);
            const checked = this.model.type === 'todo' && this.model.checked
                ? 'affine-list--checked'
                : '';
            const children = html `<div
      class="affine-block-children-container"
      style="padding-left: ${BLOCK_CHILDREN_CONTAINER_PADDING_LEFT}px"
    >
      ${this.renderChildren(this.model)}
    </div>`;
            return html `
      <div class=${'affine-list-block-container'}>
        <div class=${`affine-list-rich-text-wrapper ${checked}`}>
          ${this._toggleTemplate(collapsed)} ${listIcon}
          <rich-text
            .yText=${this.model.text.yText}
            .inlineEventSource=${this.topContenteditableElement ?? nothing}
            .undoManager=${this.doc.history}
            .attributeRenderer=${this.attributeRenderer}
            .attributesSchema=${this.attributesSchema}
            .markdownShortcutHandler=${this.markdownShortcutHandler}
            .embedChecker=${this.embedChecker}
            .readonly=${this.doc.readonly}
            .inlineRangeProvider=${this._inlineRangeProvider}
            .enableClipboard=${false}
            .enableUndoRedo=${false}
            .verticalScrollContainerGetter=${() => getViewportElement(this.host)}
          ></rich-text>
        </div>

        ${collapsed ? nothing : children}
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ListBlockComponent = _classThis;
})();
export { ListBlockComponent };
//# sourceMappingURL=list-block.js.map