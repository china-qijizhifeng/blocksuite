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
import { ArrowDownSmallIcon, DocIcon, DualLinkIcon16, LinkedDocIcon, PlusIcon, popTagSelect, TagsIcon, } from '@blocksuite/blocks';
import { assertExists } from '@blocksuite/global/utils';
import { baseTheme } from '@toeverything/theme';
import { css, html, LitElement, nothing, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { BacklinkButton } from './backlink-popover.js';
import { DEFAULT_DOC_NAME, DOC_BLOCK_CHILD_PADDING, } from './utils.js';
let DocMetaTags = (() => {
    let _classDecorators = [customElement('doc-meta-tags')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _backlinkList_decorators;
    let _backlinkList_initializers = [];
    let _backlinkList_extraInitializers = [];
    let _showSelect_decorators;
    let _showSelect_initializers = [];
    let _showSelect_extraInitializers = [];
    let _expanded_decorators;
    let _expanded_initializers = [];
    let _expanded_extraInitializers = [];
    var DocMetaTags = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#doc_accessor_storage = __runInitializers(this, _doc_initializers, void 0);
            this.#backlinkList_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _backlinkList_initializers, void 0));
            this.#showSelect_accessor_storage = (__runInitializers(this, _backlinkList_extraInitializers), __runInitializers(this, _showSelect_initializers, false));
            this.#expanded_accessor_storage = (__runInitializers(this, _showSelect_extraInitializers), __runInitializers(this, _expanded_initializers, false));
            this._listenBacklinkList = (__runInitializers(this, _expanded_extraInitializers), () => {
                const metaMap = Object.fromEntries(this.doc.collection.meta.docMetas.map(v => [v.id, v]));
                const toData = (backlink) => {
                    const docMeta = metaMap[backlink.pageId];
                    if (!docMeta) {
                        console.warn('Unexpected doc meta not found', backlink.pageId);
                    }
                    return {
                        ...backlink,
                        ...docMeta,
                        icon: backlink.type === 'LinkedPage' ? LinkedDocIcon : DocIcon,
                        jump: () => {
                            if (backlink.pageId === this.doc.id)
                                return;
                            this.pageRoot.slots.docLinkClicked.emit({
                                docId: backlink.pageId,
                                blockId: backlink.blockId,
                            });
                        },
                    };
                };
                const backlinkIndexer = this.doc.collection.indexer.backlink;
                if (backlinkIndexer) {
                    const getList = () => {
                        return backlinkIndexer
                            .getBacklink(this.doc.id)
                            .filter(v => v.type === 'LinkedPage')
                            .map(toData);
                    };
                    this.backlinkList = getList();
                    this._disposables.add(backlinkIndexer.slots.indexUpdated.on(() => {
                        this.backlinkList = getList();
                    }));
                }
            });
            this._toggle = () => {
                this.expanded = !this.expanded;
            };
            this._selectTags = () => {
                this._disposables.add({
                    dispose: popTagSelect(this.shadowRoot?.querySelector('.tags') ?? this, {
                        value: this.tags,
                        onChange: tags => (this.tags = tags),
                        options: this.options,
                        onOptionsChange: options => (this.options = options),
                    }),
                });
            };
            this._renderTagsInline = () => {
                const tags = this.tags;
                const optionMap = Object.fromEntries(this.options.map(v => [v.id, v]));
                return html ` <div class="tags-inline">
      ${TagsIcon}
      ${tags.length > 0
                    ? html ` <div class="tag-list">
            ${repeat(tags.slice(0, 3), id => id, (id, i) => {
                        const tag = optionMap[id];
                        if (!tag) {
                            return null;
                        }
                        return html ` <div>${i !== 0 ? html `,&nbsp;` : ''}</div>
                  <div class="tag-inline">${tag.value}</div>`;
                    })}
            ${tags.length > 3 ? html `, and ${tags.length - 3} more` : ''}
          </div>`
                    : 'Tags'}
    </div>`;
            };
            this._renderBacklinkInline = () => {
                const backlinkButton = new BacklinkButton(this.backlinkList);
                return backlinkButton;
            };
            this._renderBacklinkExpanded = () => {
                const backlinkList = this.backlinkList;
                if (!backlinkList.length) {
                    return null;
                }
                const renderLink = (link) => {
                    return html ` <div @click=${link.jump} class="link">
        ${link.icon}
        <div class="link-title">${link.title || DEFAULT_DOC_NAME}</div>
      </div>`;
                };
                return html `<div class="meta-data-expanded-column-item">
      <div class="backlink-title">
        ${DualLinkIcon16}
        <span class="title">Linked to this doc</span>
      </div>
      <div class="backlinks">
        ${repeat(backlinkList, v => v.pageId, renderLink)}
      </div>
    </div>`;
            };
            this._renderTagsExpanded = () => {
                const optionMap = Object.fromEntries(this.options.map(v => [v.id, v]));
                return html ` <div class="meta-data-expanded-item">
      <div class="type">${TagsIcon}</div>
      <div class="value">
        <div class="tags">
          ${repeat(this.tags, id => id, id => {
                    const tag = optionMap[id];
                    if (!tag) {
                        return null;
                    }
                    const style = styleMap({
                        backgroundColor: tag.color,
                    });
                    const click = () => {
                        this.pageRoot.slots.tagClicked.emit({ tagId: tag.id });
                    };
                    return html ` <div class="tag" @click=${click} style=${style}>
                ${tag.value}
              </div>`;
                })}
          ${this.doc.readonly
                    ? nothing
                    : html `<div class="add-tag" @click="${this._selectTags}">
                ${PlusIcon}
              </div>`}
        </div>
      </div>
    </div>`;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _doc_decorators = [property({ attribute: false })];
            _backlinkList_decorators = [state()];
            _showSelect_decorators = [state()];
            _expanded_decorators = [state()];
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _backlinkList_decorators, { kind: "accessor", name: "backlinkList", static: false, private: false, access: { has: obj => "backlinkList" in obj, get: obj => obj.backlinkList, set: (obj, value) => { obj.backlinkList = value; } }, metadata: _metadata }, _backlinkList_initializers, _backlinkList_extraInitializers);
            __esDecorate(this, null, _showSelect_decorators, { kind: "accessor", name: "showSelect", static: false, private: false, access: { has: obj => "showSelect" in obj, get: obj => obj.showSelect, set: (obj, value) => { obj.showSelect = value; } }, metadata: _metadata }, _showSelect_initializers, _showSelect_extraInitializers);
            __esDecorate(this, null, _expanded_decorators, { kind: "accessor", name: "expanded", static: false, private: false, access: { has: obj => "expanded" in obj, get: obj => obj.expanded, set: (obj, value) => { obj.expanded = value; } }, metadata: _metadata }, _expanded_initializers, _expanded_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DocMetaTags = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get pageRoot() {
            const pageViewport = this.closest('.affine-page-viewport');
            assertExists(pageViewport);
            const pageRoot = pageViewport.querySelector('affine-page-root');
            assertExists(pageRoot);
            return pageRoot;
        }
        get meta() {
            return this.doc.collection.meta;
        }
        get options() {
            return this.meta.properties.tags?.options ?? [];
        }
        set options(tags) {
            this.tags = this.tags.filter(v => tags.find(x => x.id === v));
            this.doc.collection.meta.setProperties({
                ...this.meta.properties,
                tags: {
                    ...this.meta.properties.tags,
                    options: tags,
                },
            });
        }
        get tags() {
            return this.doc.meta?.tags ?? [];
        }
        set tags(tags) {
            assertExists(this.doc.meta);
            this.doc.meta.tags = tags;
        }
        static { this.styles = css `
    .doc-meta-container {
      font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
      font-size: var(--affine-font-base);
      line-height: var(--affine-line-height);
      color: var(--affine-text-primary-color);
      display: block;
      box-sizing: border-box;
      max-width: var(--affine-editor-width);
      margin-left: auto;
      margin-right: auto;
      padding-left: var(
        --affine-editor-side-padding,
        ${DOC_BLOCK_CHILD_PADDING}px
      );
      padding-right: var(
        --affine-editor-side-padding,
        ${DOC_BLOCK_CHILD_PADDING}px
      );
    }

    /* Extra small devices (phones, 640px and down) */
    @container viewport (width <= 640px) {
      .doc-meta-container {
        padding-left: ${DOC_BLOCK_CHILD_PADDING}px;
        padding-right: ${DOC_BLOCK_CHILD_PADDING}px;
      }
    }

    .meta-data {
      border-radius: 8px;
      display: flex;
      align-items: center;
      height: 30px;
      cursor: pointer;
      justify-content: space-between;
      margin: 0 -12px;
    }

    .meta-data-content {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--affine-text-secondary-color);
    }

    .meta-data:hover {
      background-color: var(--affine-hover-color);
    }

    .tags-inline {
      display: flex;
      align-items: center;
      gap: 4px;
      font-size: 14px;
    }

    .tags-inline .tag-list {
      display: flex;
      align-items: center;
    }

    .tag-inline {
      max-width: 100px;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .expand {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 12px;
    }

    .expand svg {
      color: var(--affine-icon-color);
    }

    .meta-data-expanded {
      padding: 10px 12px 24px;
      margin: 0 -24px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      background-color: var(--affine-hover-color-filled);
      border-radius: 8px;
    }

    .meta-data-expanded-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 12px;
      font-weight: 600;
      font-size: 14px;
      color: var(--affine-text-secondary-color);
      border-radius: 4px;
      cursor: pointer;
    }

    .meta-data-expanded-title:hover {
      background-color: var(--affine-hover-color);
    }

    .meta-data-expanded-title .close {
      transform: rotate(180deg);
      border-radius: 4px;
      display: flex;
      align-items: center;
    }

    @media print {
      .meta-data-expanded-title .close {
        display: none;
      }

      .expand {
        display: none;
      }
    }

    .meta-data-expanded-title .close:hover {
      background-color: var(--affine-hover-color);
    }

    .meta-data-expanded-content {
      display: flex;
      flex-direction: column;
      gap: 24px;
      padding: 0 12px;
    }

    .meta-data-expanded-column-item {
      display: flex;
      flex-direction: column;
    }

    .meta-data-expanded-column-item .backlink-title {
      display: flex;
      align-items: center;
      gap: 8px;
      fill: var(--affine-icon-color);
    }

    .meta-data-expanded-column-item .backlinks {
      margin-left: 24px;
    }

    .meta-data-expanded-item {
      display: flex;
      gap: 8px;
    }

    .meta-data-expanded-item .value {
      flex: 1;
    }

    .add-tag {
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .add-tag svg {
      width: 16px;
      height: 16px;
      border-radius: 4px;
      fill: var(--affine-icon-color);
    }

    .add-tag:hover svg {
      background-color: var(--affine-hover-color);
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }

    .tag {
      padding: 4px 10px;
      border-radius: 8px;
      color: var(--affine-text-primary-color);
      font-size: 13px;
      line-height: 13px;
      display: flex;
      align-items: center;
      font-weight: 400;
      cursor: pointer;
    }

    .backlinks {
      display: flex;
      gap: 8px;
      flex-direction: column;
    }

    .backlinks .title {
      height: 28px;
      color: var(--affine-text-secondary-color);
      font-size: var(--affine-font-sm);
    }

    .backlinks .link {
      display: flex;
      align-items: center;
      gap: 5px;
      font-size: 15px;
      cursor: pointer;
      width: max-content;
      border-radius: 4px;
      padding: 0 8px 0 4px;
      margin: 0 -8px 0 -4px;
    }

    .backlinks .link:hover {
      background-color: var(--affine-hover-color);
    }

    .backlinks .link svg {
      fill: var(--affine-icon-color);
    }

    .link-title {
      border-bottom: 0.5px solid var(--affine-divider-color);
    }

    .backlinks .link:hover .link-title {
      border-bottom-color: transparent;
    }
  `; }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #backlinkList_accessor_storage;
        get backlinkList() { return this.#backlinkList_accessor_storage; }
        set backlinkList(value) { this.#backlinkList_accessor_storage = value; }
        #showSelect_accessor_storage;
        get showSelect() { return this.#showSelect_accessor_storage; }
        set showSelect(value) { this.#showSelect_accessor_storage = value; }
        #expanded_accessor_storage;
        get expanded() { return this.#expanded_accessor_storage; }
        set expanded(value) { this.#expanded_accessor_storage = value; }
        connectedCallback() {
            super.connectedCallback();
            this._listenBacklinkList();
            this._disposables.add(this.meta.docMetaUpdated.on(() => {
                this.requestUpdate();
            }));
        }
        render() {
            if (!this.expanded) {
                return html `
        <div class="doc-meta-container caret-ignore">
          <div class="meta-data caret-ignore" @click="${this._toggle}">
            <div class="meta-data-content">
              ${this._renderBacklinkInline()} ${this._renderTagsInline()}
            </div>
            <div class="expand">${ArrowDownSmallIcon}</div>
          </div>
        </div>
      `;
            }
            return html `
      <div class="doc-meta-container caret-ignore">
        <div class="meta-data-expanded caret-ignore">
          <div class="meta-data-expanded-title" @click="${this._toggle}">
            <div>文档信息</div>
            <div class="close">${ArrowDownSmallIcon}</div>
          </div>
          <div class="meta-data-expanded-content">
            ${this._renderBacklinkExpanded()} ${this._renderTagsExpanded()}
          </div>
        </div>
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DocMetaTags = _classThis;
})();
export { DocMetaTags };
//# sourceMappingURL=doc-meta-tags.js.map