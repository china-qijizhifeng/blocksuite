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
import { WithDisposable } from '@blocksuite/block-std';
import { NoteDisplayMode, } from '@blocksuite/blocks';
import { debounce } from '@blocksuite/global/utils';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { CurrentSelectionIcon, DocIcon, SmallImageIcon, } from '../_common/icons.js';
import { getEdgelessRootFromEditor, getSelectedImagesAsBlobs, getSelectedTextContent, getTextContentFromBlockModels, selectedToCanvas, } from '../utils/selection-utils.js';
const cardsStyles = css `
  .card-wrapper {
    width: 90%;
    max-height: 76px;
    border-radius: 8px;
    border: 1px solid var(--affine-border-color);
    padding: 4px 12px;
    cursor: pointer;

    .card-title {
      display: flex;
      gap: 4px;
      height: 22px;
      margin-bottom: 2px;
      font-weight: 500;
      font-size: 14px;
      color: var(--affine-text-primary-color);
    }

    .second-text {
      font-size: 14px;
      font-weight: 400;
      color: var(--affine-text-secondary-color);
    }
  }
`;
const ChatCardsConfig = [
    {
        name: 'current-selection',
        render: (text, _, __) => {
            if (!text)
                return nothing;
            const lines = text.split('\n');
            return html `<div class="card-wrapper">
        <div class="card-title">
          ${CurrentSelectionIcon}
          <div>Start with current selection</div>
        </div>
        <div class="second-text">
          ${repeat(lines.slice(0, 2), line => line, line => {
                return html `<div
                style=${styleMap({
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                })}
              >
                ${line}
              </div>`;
            })}
        </div>
      </div> `;
        },
        handler: (updateContext, text, markdown, images) => {
            const value = {
                quote: text,
                markdown: markdown,
            };
            if (images) {
                value.images = images;
            }
            updateContext(value);
        },
    },
    {
        name: 'image',
        render: (_, image, caption) => {
            if (!image)
                return nothing;
            return html `<div
        class="card-wrapper"
        style=${styleMap({
                display: 'flex',
                gap: '8px',
                justifyContent: 'space-between',
            })}
      >
        <div
          style=${styleMap({
                display: 'flex',
                flexDirection: 'column',
            })}
        >
          <div class="card-title">
            ${SmallImageIcon}
            <div>Start with this Image</div>
          </div>
          <div class="second-text">${caption ? caption : 'caption'}</div>
        </div>
        <img
          style=${styleMap({
                maxWidth: '72px',
                maxHeight: '46px',
            })}
          src="${URL.createObjectURL(image)}"
        />
      </div>`;
        },
        handler: (updateContext, _, __, images) => {
            const value = {};
            if (images) {
                value.images = images;
            }
            updateContext(value);
        },
    },
    {
        name: 'doc',
        render: () => {
            return html `
        <div class="card-wrapper">
          <div class="card-title">
            ${DocIcon}
            <div>Start with this doc</div>
          </div>
          <div class="second-text">you've chosen within the doc</div>
        </div>
      `;
        },
        handler: (updateContext, text, markdown, images) => {
            const value = {
                quote: text,
                markdown: markdown,
            };
            if (images) {
                value.images = images;
            }
            updateContext(value);
        },
    },
];
let ChatCards = (() => {
    let _classDecorators = [customElement('chat-cards')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _chatContextValue_decorators;
    let _chatContextValue_initializers = [];
    let _chatContextValue_extraInitializers = [];
    let _updateContext_decorators;
    let _updateContext_initializers = [];
    let _updateContext_extraInitializers = [];
    let _selectionValue_decorators;
    let _selectionValue_initializers = [];
    let _selectionValue_extraInitializers = [];
    let _text_decorators;
    let _text_initializers = [];
    let _text_extraInitializers = [];
    let _markdown_decorators;
    let _markdown_initializers = [];
    let _markdown_extraInitializers = [];
    let _images_decorators;
    let _images_initializers = [];
    let _images_extraInitializers = [];
    let _caption_decorators;
    let _caption_initializers = [];
    let _caption_extraInitializers = [];
    var ChatCards = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _host_decorators = [property({ attribute: false })];
            _chatContextValue_decorators = [property({ attribute: false })];
            _updateContext_decorators = [property({ attribute: false })];
            _selectionValue_decorators = [property({ attribute: false })];
            _text_decorators = [state()];
            _markdown_decorators = [state()];
            _images_decorators = [state()];
            _caption_decorators = [state()];
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _chatContextValue_decorators, { kind: "accessor", name: "chatContextValue", static: false, private: false, access: { has: obj => "chatContextValue" in obj, get: obj => obj.chatContextValue, set: (obj, value) => { obj.chatContextValue = value; } }, metadata: _metadata }, _chatContextValue_initializers, _chatContextValue_extraInitializers);
            __esDecorate(this, null, _updateContext_decorators, { kind: "accessor", name: "updateContext", static: false, private: false, access: { has: obj => "updateContext" in obj, get: obj => obj.updateContext, set: (obj, value) => { obj.updateContext = value; } }, metadata: _metadata }, _updateContext_initializers, _updateContext_extraInitializers);
            __esDecorate(this, null, _selectionValue_decorators, { kind: "accessor", name: "selectionValue", static: false, private: false, access: { has: obj => "selectionValue" in obj, get: obj => obj.selectionValue, set: (obj, value) => { obj.selectionValue = value; } }, metadata: _metadata }, _selectionValue_initializers, _selectionValue_extraInitializers);
            __esDecorate(this, null, _text_decorators, { kind: "accessor", name: "text", static: false, private: false, access: { has: obj => "text" in obj, get: obj => obj.text, set: (obj, value) => { obj.text = value; } }, metadata: _metadata }, _text_initializers, _text_extraInitializers);
            __esDecorate(this, null, _markdown_decorators, { kind: "accessor", name: "markdown", static: false, private: false, access: { has: obj => "markdown" in obj, get: obj => obj.markdown, set: (obj, value) => { obj.markdown = value; } }, metadata: _metadata }, _markdown_initializers, _markdown_extraInitializers);
            __esDecorate(this, null, _images_decorators, { kind: "accessor", name: "images", static: false, private: false, access: { has: obj => "images" in obj, get: obj => obj.images, set: (obj, value) => { obj.images = value; } }, metadata: _metadata }, _images_initializers, _images_extraInitializers);
            __esDecorate(this, null, _caption_decorators, { kind: "accessor", name: "caption", static: false, private: false, access: { has: obj => "caption" in obj, get: obj => obj.caption, set: (obj, value) => { obj.caption = value; } }, metadata: _metadata }, _caption_initializers, _caption_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ChatCards = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    ${cardsStyles}
    .cards-container {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
  `; }
        #host_accessor_storage = __runInitializers(this, _host_initializers, void 0);
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #chatContextValue_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _chatContextValue_initializers, void 0));
        get chatContextValue() { return this.#chatContextValue_accessor_storage; }
        set chatContextValue(value) { this.#chatContextValue_accessor_storage = value; }
        #updateContext_accessor_storage = (__runInitializers(this, _chatContextValue_extraInitializers), __runInitializers(this, _updateContext_initializers, void 0));
        get updateContext() { return this.#updateContext_accessor_storage; }
        set updateContext(value) { this.#updateContext_accessor_storage = value; }
        #selectionValue_accessor_storage = (__runInitializers(this, _updateContext_extraInitializers), __runInitializers(this, _selectionValue_initializers, []));
        get selectionValue() { return this.#selectionValue_accessor_storage; }
        set selectionValue(value) { this.#selectionValue_accessor_storage = value; }
        #text_accessor_storage = (__runInitializers(this, _selectionValue_extraInitializers), __runInitializers(this, _text_initializers, ''));
        get text() { return this.#text_accessor_storage; }
        set text(value) { this.#text_accessor_storage = value; }
        #markdown_accessor_storage = (__runInitializers(this, _text_extraInitializers), __runInitializers(this, _markdown_initializers, ''));
        get markdown() { return this.#markdown_accessor_storage; }
        set markdown(value) { this.#markdown_accessor_storage = value; }
        #images_accessor_storage = (__runInitializers(this, _markdown_extraInitializers), __runInitializers(this, _images_initializers, []));
        get images() { return this.#images_accessor_storage; }
        set images(value) { this.#images_accessor_storage = value; }
        #caption_accessor_storage = (__runInitializers(this, _images_extraInitializers), __runInitializers(this, _caption_initializers, ''));
        get caption() { return this.#caption_accessor_storage; }
        set caption(value) { this.#caption_accessor_storage = value; }
        _onEdgelessCopilotAreaUpdated() {
            if (!this.host.closest('edgeless-editor'))
                return;
            const edgeless = getEdgelessRootFromEditor(this.host);
            const copilotSelectionTool = edgeless.tools.controllers
                .copilot;
            this._disposables.add(copilotSelectionTool.draggingAreaUpdated.on(debounce(() => {
                selectedToCanvas(this.host)
                    .then(canvas => {
                    canvas?.toBlob(blob => {
                        if (!blob)
                            return;
                        const file = new File([blob], 'selected.png');
                        this.images = [file];
                    });
                })
                    .catch(console.error);
            }, 300)));
        }
        async _updateState() {
            if (this.selectionValue.some(selection => selection.is('text') || selection.is('image')))
                return;
            this.text = await getSelectedTextContent(this.host, 'plain-text');
            this.markdown = await getSelectedTextContent(this.host, 'markdown');
            this.images = await getSelectedImagesAsBlobs(this.host);
            const [_, data] = this.host.command
                .chain()
                .tryAll(chain => [
                chain.getTextSelection(),
                chain.getBlockSelections(),
                chain.getImageSelections(),
            ])
                .getSelectedBlocks({
                types: ['image'],
            })
                .run();
            if (data.currentBlockSelections?.[0]) {
                this.caption =
                    (this.host.doc.getBlock(data.currentBlockSelections[0].blockId)
                        ?.model).caption ?? '';
            }
        }
        async _handleDocSelection() {
            const notes = this.host.doc
                .getBlocksByFlavour('affine:note')
                .filter(note => note.model.displayMode !==
                NoteDisplayMode.EdgelessOnly)
                .map(note => note.model);
            const selectedModels = notes.reduce((acc, note) => {
                acc.push(...note.children);
                return acc;
            }, []);
            const text = await getTextContentFromBlockModels(this.host, selectedModels, 'plain-text');
            const markdown = await getTextContentFromBlockModels(this.host, selectedModels, 'markdown');
            const blobs = await Promise.all(selectedModels.map(async (s) => {
                if (s.flavour !== 'affine:image')
                    return null;
                const sourceId = s?.sourceId;
                if (!sourceId)
                    return null;
                const blob = await (sourceId
                    ? this.host.doc.blobSync.get(sourceId)
                    : null);
                if (!blob)
                    return null;
                return new File([blob], sourceId);
            }) ?? []);
            const images = blobs.filter((blob) => !!blob);
            this.text = text;
            this.markdown = markdown;
            this.images = images;
        }
        async updated(_changedProperties) {
            if (_changedProperties.has('selectionValue')) {
                await this._updateState();
            }
            if (_changedProperties.has('host')) {
                this._onEdgelessCopilotAreaUpdated();
            }
        }
        render() {
            return html `<div class="cards-container">
      ${repeat(ChatCardsConfig, card => card.name, card => {
                if (card.render(this.text, this.images[0], this.caption) !== nothing) {
                    return html `<div
              @click=${async () => {
                        if (card.name === 'doc') {
                            await this._handleDocSelection();
                        }
                        card.handler(this.updateContext, this.text, this.markdown, this.images);
                    }}
            >
              ${card.render(this.text, this.images[0], this.caption)}
            </div> `;
                }
                return nothing;
            })}
    </div>`;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _caption_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ChatCards = _classThis;
})();
export { ChatCards };
//# sourceMappingURL=chat-cards.js.map