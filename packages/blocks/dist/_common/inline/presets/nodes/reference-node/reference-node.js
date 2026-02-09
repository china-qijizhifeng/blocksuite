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
import { INLINE_ROOT_ATTR, ZERO_WIDTH_NON_JOINER, ZERO_WIDTH_SPACE, } from '@blocksuite/inline';
import { css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';
import { HoverController } from '../../../../components/hover/controller.js';
import { Peekable } from '../../../../components/peekable.js';
import { BLOCK_ID_ATTR } from '../../../../consts.js';
import { FontDocIcon, FontLinkedDocIcon } from '../../../../icons/text.js';
import { getModelByElement, getRootByElement, } from '../../../../utils/query.js';
import { affineTextStyles } from '../affine-text.js';
import { DEFAULT_DOC_NAME, REFERENCE_NODE } from '../consts.js';
import { toggleReferencePopup } from './reference-popup.js';
let AffineReference = (() => {
    let _classDecorators = [customElement('affine-reference'), Peekable({ action: false })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _delta_decorators;
    let _delta_initializers = [];
    let _delta_extraInitializers = [];
    let _selected_decorators;
    let _selected_initializers = [];
    let _selected_extraInitializers = [];
    let _config_decorators;
    let _config_initializers = [];
    let _config_extraInitializers = [];
    let _refMeta_decorators;
    let _refMeta_initializers = [];
    let _refMeta_extraInitializers = [];
    var AffineReference = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._refAttribute = {
                type: 'LinkedPage',
                pageId: '0',
            };
            this._whenHover = new HoverController(this, ({ abortController }) => {
                if (this.doc.readonly) {
                    return null;
                }
                const selection = this.std.selection;
                const textSelection = selection.find('text');
                if (!!textSelection &&
                    (!!textSelection.to || !!textSelection.from.length)) {
                    return null;
                }
                const blockSelections = selection.filter('block');
                if (blockSelections.length) {
                    return null;
                }
                return {
                    template: toggleReferencePopup(this, this.inlineEditor, this.selfInlineRange, this.refMeta?.title ?? DEFAULT_DOC_NAME, abortController),
                };
            }, { enterDelay: 500 });
            this.#delta_accessor_storage = __runInitializers(this, _delta_initializers, {
                insert: ZERO_WIDTH_SPACE,
                attributes: {},
            });
            this.#selected_accessor_storage = (__runInitializers(this, _delta_extraInitializers), __runInitializers(this, _selected_initializers, false));
            this.#config_accessor_storage = (__runInitializers(this, _selected_extraInitializers), __runInitializers(this, _config_initializers, void 0));
            this.#refMeta_accessor_storage = (__runInitializers(this, _config_extraInitializers), __runInitializers(this, _refMeta_initializers, undefined));
            this._updateRefMeta = (__runInitializers(this, _refMeta_extraInitializers), (doc) => {
                const refAttribute = this.delta.attributes?.reference;
                assertExists(refAttribute, 'Failed to get reference attribute!');
                this._refAttribute = refAttribute;
                const refMeta = doc.collection.meta.docMetas.find(doc => doc.id === refAttribute.pageId);
                this.refMeta = refMeta
                    ? {
                        ...refMeta,
                    }
                    : undefined;
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _delta_decorators = [property({ type: Object })];
            _selected_decorators = [property({ type: Boolean })];
            _config_decorators = [property({ attribute: false })];
            _refMeta_decorators = [state()];
            __esDecorate(this, null, _delta_decorators, { kind: "accessor", name: "delta", static: false, private: false, access: { has: obj => "delta" in obj, get: obj => obj.delta, set: (obj, value) => { obj.delta = value; } }, metadata: _metadata }, _delta_initializers, _delta_extraInitializers);
            __esDecorate(this, null, _selected_decorators, { kind: "accessor", name: "selected", static: false, private: false, access: { has: obj => "selected" in obj, get: obj => obj.selected, set: (obj, value) => { obj.selected = value; } }, metadata: _metadata }, _selected_initializers, _selected_extraInitializers);
            __esDecorate(this, null, _config_decorators, { kind: "accessor", name: "config", static: false, private: false, access: { has: obj => "config" in obj, get: obj => obj.config, set: (obj, value) => { obj.config = value; } }, metadata: _metadata }, _config_initializers, _config_extraInitializers);
            __esDecorate(this, null, _refMeta_decorators, { kind: "accessor", name: "refMeta", static: false, private: false, access: { has: obj => "refMeta" in obj, get: obj => obj.refMeta, set: (obj, value) => { obj.refMeta = value; } }, metadata: _metadata }, _refMeta_initializers, _refMeta_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineReference = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get inlineEditor() {
            const inlineRoot = this.closest(`[${INLINE_ROOT_ATTR}]`);
            assertExists(inlineRoot);
            return inlineRoot.inlineEditor;
        }
        get selfInlineRange() {
            const selfInlineRange = this.inlineEditor.getInlineRangeFromElement(this);
            assertExists(selfInlineRange);
            return selfInlineRange;
        }
        get blockElement() {
            const blockElement = this.inlineEditor.rootElement.closest(`[${BLOCK_ID_ATTR}]`);
            assertExists(blockElement);
            return blockElement;
        }
        get std() {
            const std = this.blockElement.std;
            assertExists(std);
            return std;
        }
        get doc() {
            const doc = this.config.doc;
            assertExists(doc, '`reference-node` need `Doc`.');
            return doc;
        }
        get customIcon() {
            return this.config.customIcon;
        }
        get customTitle() {
            return this.config.customTitle;
        }
        get customContent() {
            return this.config.customContent;
        }
        static { this.styles = css `
    .affine-reference {
      white-space: normal;
      word-break: break-word;
      color: var(--affine-text-primary-color);
      fill: var(--affine-icon-color);
      border-radius: 4px;
      text-decoration: none;
      cursor: pointer;
      user-select: none;
      padding: 1px 2px 1px 0;
    }
    .affine-reference:hover {
      background: var(--affine-hover-color);
    }

    .affine-reference[data-selected='true'] {
      background: var(--affine-hover-color);
    }

    .affine-reference-title {
      margin-left: 4px;
      border-bottom: 0.5px solid var(--affine-divider-color);
      transition: border 0.2s ease-out;
    }
    .affine-reference-title:hover {
      border-bottom: 0.5px solid var(--affine-icon-color);
    }
  `; }
        #delta_accessor_storage;
        get delta() { return this.#delta_accessor_storage; }
        set delta(value) { this.#delta_accessor_storage = value; }
        #selected_accessor_storage;
        get selected() { return this.#selected_accessor_storage; }
        set selected(value) { this.#selected_accessor_storage = value; }
        #config_accessor_storage;
        get config() { return this.#config_accessor_storage; }
        set config(value) { this.#config_accessor_storage = value; }
        #refMeta_accessor_storage;
        // Since the linked doc may be deleted, the `_refMeta` could be undefined.
        get refMeta() { return this.#refMeta_accessor_storage; }
        set refMeta(value) { this.#refMeta_accessor_storage = value; }
        _onClick() {
            if (!this.config.interactable)
                return;
            const refMeta = this.refMeta;
            const model = getModelByElement(this);
            if (!refMeta) {
                // The doc is deleted
                console.warn('The doc is deleted', this._refAttribute.pageId);
                return;
            }
            if (refMeta.id === model.doc.id) {
                // the doc is the current doc.
                return;
            }
            const targetDocId = refMeta.id;
            const rootModel = model.doc.root;
            assertExists(rootModel);
            const rootElement = getRootByElement(this);
            assertExists(rootElement);
            rootElement.slots.docLinkClicked.emit({ docId: targetDocId });
        }
        connectedCallback() {
            super.connectedCallback();
            assertExists(this.config, '`reference-node` need `ReferenceNodeConfig`.');
            if (this.delta.insert !== REFERENCE_NODE) {
                console.error(`Reference node must be initialized with '${REFERENCE_NODE}', but got '${this.delta.insert}'`);
            }
            const doc = this.doc;
            this._disposables.add(doc.collection.slots.docUpdated.on(() => this._updateRefMeta(doc)));
            this.updateComplete
                .then(() => {
                // observe yText update
                this.disposables.add(this.inlineEditor.slots.textChange.on(() => this._updateRefMeta(doc)));
            })
                .catch(console.error);
        }
        willUpdate(_changedProperties) {
            super.willUpdate(_changedProperties);
            const doc = this.doc;
            this._updateRefMeta(doc);
        }
        render() {
            const refMeta = this.refMeta;
            const isDeleted = !refMeta;
            const attributes = this.delta.attributes;
            assertExists(attributes, 'Failed to get attributes!');
            const type = attributes.reference?.type;
            assertExists(type, 'Unable to get reference type!');
            const title = this.customTitle
                ? this.customTitle(this)
                : isDeleted
                    ? 'Deleted doc'
                    : refMeta.title.length > 0
                        ? refMeta.title
                        : DEFAULT_DOC_NAME;
            const icon = this.customIcon
                ? this.customIcon(this)
                : type === 'LinkedPage'
                    ? FontLinkedDocIcon
                    : FontDocIcon;
            const style = affineTextStyles(attributes, isDeleted
                ? {
                    color: 'var(--affine-text-disable-color)',
                    textDecoration: 'line-through',
                    fill: 'var(--affine-text-disable-color)',
                }
                : {});
            const content = this.customContent
                ? this.customContent(this)
                : html `${icon}<span data-title=${title} class="affine-reference-title"
            >${title}</span
          >`;
            // we need to add `<v-text .str=${ZERO_WIDTH_NON_JOINER}></v-text>` in an
            // embed element to make sure inline range calculation is correct
            return html `<span
      ${this.config.interactable ? ref(this._whenHover.setReference) : ''}
      data-selected=${this.selected}
      class="affine-reference"
      style=${style}
      @click=${this._onClick}
      >${content}<v-text .str=${ZERO_WIDTH_NON_JOINER}></v-text
    ></span>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineReference = _classThis;
})();
export { AffineReference };
//# sourceMappingURL=reference-node.js.map