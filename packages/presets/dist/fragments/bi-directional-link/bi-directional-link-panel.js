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
import { getAffineInlineSpecsWithReference, ReferenceNodeConfig, } from '@blocksuite/blocks';
import { BlocksUtils, InlineManager, RichText } from '@blocksuite/blocks';
import { assertExists, noop } from '@blocksuite/global/utils';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ArrowJumpIcon, ArrowLeftIcon, SmallDeleteIcon, SmallLinkedDocIcon, } from '../_common/icons.js';
import { DOC_BLOCK_CHILD_PADDING } from '../doc-meta-tags/utils.js';
noop(RichText);
const { matchFlavours } = BlocksUtils;
let BiDirectionalLinkPanel = (() => {
    let _classDecorators = [customElement('bi-directional-link-panel')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __show_decorators;
    let __show_initializers = [];
    let __show_extraInitializers = [];
    let __backLinkShow_decorators;
    let __backLinkShow_initializers = [];
    let __backLinkShow_extraInitializers = [];
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _pageRoot_decorators;
    let _pageRoot_initializers = [];
    let _pageRoot_extraInitializers = [];
    var BiDirectionalLinkPanel = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __show_decorators = [state()];
            __backLinkShow_decorators = [state()];
            _doc_decorators = [property({ attribute: false })];
            _pageRoot_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __show_decorators, { kind: "accessor", name: "_show", static: false, private: false, access: { has: obj => "_show" in obj, get: obj => obj._show, set: (obj, value) => { obj._show = value; } }, metadata: _metadata }, __show_initializers, __show_extraInitializers);
            __esDecorate(this, null, __backLinkShow_decorators, { kind: "accessor", name: "_backLinkShow", static: false, private: false, access: { has: obj => "_backLinkShow" in obj, get: obj => obj._backLinkShow, set: (obj, value) => { obj._backLinkShow = value; } }, metadata: _metadata }, __backLinkShow_initializers, __backLinkShow_extraInitializers);
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _pageRoot_decorators, { kind: "accessor", name: "pageRoot", static: false, private: false, access: { has: obj => "pageRoot" in obj, get: obj => obj.pageRoot, set: (obj, value) => { obj.pageRoot = value; } }, metadata: _metadata }, _pageRoot_initializers, _pageRoot_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            BiDirectionalLinkPanel = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get _host() {
            return this.pageRoot.host;
        }
        get _links() {
            const { doc } = this;
            const ids = new Set();
            doc
                .getBlockByFlavour([
                'affine:paragraph',
                'affine:list',
                'affine:embed-linked-doc',
                'affine:embed-synced-doc',
            ])
                .forEach(model => {
                if (model.text) {
                    const deltas = model.text.yText.toDelta();
                    deltas.forEach(delta => {
                        if (delta.attributes?.reference?.pageId)
                            ids.add(delta.attributes.reference.pageId);
                    });
                }
                else if (matchFlavours(model, [
                    'affine:embed-linked-doc',
                    'affine:embed-synced-doc',
                ])) {
                    ids.add(model.pageId);
                }
            });
            return Array.from(ids);
        }
        get _rootService() {
            return this._host.spec.getService('affine:page');
        }
        get _backLinks() {
            const { doc } = this;
            const { collection } = doc;
            const backLinks = new Map();
            collection.indexer.backlink?.getBacklink(doc.id).reduce((map, link) => {
                const { pageId } = link;
                if (map.has(pageId)) {
                    map.get(pageId).push(link.blockId);
                }
                else {
                    map.set(pageId, [link.blockId]);
                }
                return map;
            }, backLinks);
            return backLinks;
        }
        static { this.styles = css `
    :host {
      width: 100%;
      max-width: var(--affine-editor-width);
      margin-left: auto;
      margin-right: auto;
      padding-left: var(
        --affine-editor-side-padding,
        ${DOC_BLOCK_CHILD_PADDING}
      );
      padding-right: var(
        --affine-editor-side-padding,
        ${DOC_BLOCK_CHILD_PADDING}
      );
      font-size: var(--affine-font-base);
    }

    /* Extra small devices (phones, 640px and down) */
    @container viewport (width <= 640px) {
      :host {
        padding-left: ${DOC_BLOCK_CHILD_PADDING}px;
        padding-right: ${DOC_BLOCK_CHILD_PADDING}px;
      }
    }

    .title-line {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .back-links-title,
    .links-title {
      color: var(--affine-text-secondary-color);
      height: 32px;
      line-height: 32px;
    }

    .links,
    .back-links {
      margin-bottom: 16px;
    }

    .back-link-title {
      width: 100%;
      height: 32px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .back-link-title div {
      display: flex;
      align-items: center;
      gap: 4px;
      color: var(--affine-text-primary-color);
    }

    .back-links-container {
      height: auto;
      display: flex;
    }

    .back-links-container-left-divider {
      width: 20px;
      display: flex;
      justify-content: center;
    }
    .back-links-container-left-divider div {
      width: 1px;
      height: 100%;
      background-color: var(--affine-border-color);
    }

    .link {
      width: 100%;
      height: 32px;
      display: flex;
      align-items: center;
      gap: 4px;
      white-space: nowrap;
      cursor: pointer;
    }

    .link svg {
      flex: none;
    }

    .link div {
      width: fit-content;
      height: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 32px;
      border-bottom: 0.5px solid var(--affine-divider-color);
    }

    .link.deleted {
      color: var(--affine-text-disable-color);
      text-decoration: line-through;
      fill: var(--affine-text-disable-color);
    }

    .arrow {
      cursor: pointer;
      transition: transform 0.2s;
    }

    .back-links-blocks-container {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding-left: 8px;
      position: relative;
    }

    .rich-text-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: start;
      cursor: pointer;
      border-radius: 4px;
      padding: 0px 8px;
      padding-top: 8px;
    }

    .rich-text {
      max-width: 96%;
      padding-bottom: 8px;
    }

    .arrow-link {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 4px;
      display: none;
    }

    .rich-text-container:hover {
      background-color: var(--affine-hover-color);
    }

    .rich-text-container:hover .arrow-link {
      display: flex;
    }
    .arrow-link:hover {
      background-color: var(--affine-hover-color);
    }

    .quote {
      padding-left: 24px;
    }
    .quote::after {
      content: '';
      width: 2px;
      height: 24px;
      position: absolute;
      left: 16px;
      background: var(--affine-quote-color);
      border-radius: 18px;
    }

    .linked-doc-container {
      display: flex;
      align-items: center;
      padding-left: 2px;
      gap: 2px;
    }
    .linked-doc-container svg {
      scale: 1.2;
    }
  `; }
        #_show_accessor_storage;
        get _show() { return this.#_show_accessor_storage; }
        set _show(value) { this.#_show_accessor_storage = value; }
        #_backLinkShow_accessor_storage;
        get _backLinkShow() { return this.#_backLinkShow_accessor_storage; }
        set _backLinkShow(value) { this.#_backLinkShow_accessor_storage = value; }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #pageRoot_accessor_storage;
        get pageRoot() { return this.#pageRoot_accessor_storage; }
        set pageRoot(value) { this.#pageRoot_accessor_storage = value; }
        _toggleShow() {
            this._show = !this._show;
            this._rootService.editPropsStore.setItem('showBidirectional', this._show);
        }
        _renderLinks(ids) {
            const { collection } = this.doc;
            return html `<div class="links">
      <div class="links-title">Outgoing links · ${ids.length}</div>
      ${repeat(ids, id => id, id => {
                const doc = collection.getDoc(id);
                const isDeleted = !doc;
                const title = isDeleted
                    ? 'Deleted doc'
                    : !doc.meta
                        ? 'Untitled'
                        : doc.meta.title;
                const icon = isDeleted ? SmallDeleteIcon : SmallLinkedDocIcon;
                return html `<div
            class=${`link ${isDeleted ? 'deleted' : ''}`}
            @click=${(e) => {
                    this._handleLinkClick(e, id);
                }}
          >
            ${icon}
            <div>${title}</div>
          </div>`;
            })}
    </div> `;
        }
        _renderBackLinks(backLinks) {
            const { doc } = this;
            const { collection } = doc;
            const length = backLinks.size;
            return html ` <div class="back-links">
      <div class="back-links-title">${`Backlinks · ${length}`}</div>
      ${repeat(backLinks.keys(), id => id, (docId, index) => {
                const doc = collection.getDoc(docId);
                const blocks = backLinks.get(docId);
                assertExists(doc);
                const show = this._backLinkShow[index] ?? false;
                const listService = this._host.spec.getService('affine:list');
                return html `<style>
              .affine-list-block__prefix{
                display: flex;
                align-items: center;
              }

              .rich-text{
                display: flex;
                align-items: center;
              }

              ${listService.styles.prefix}
              ${listService.styles.toggle}
            </style>
            <div class="back-link">
              <div class="back-link-title">
                <div
                  class="arrow"
                  style=${styleMap({
                    transform: `rotate(${show ? 90 : 0}deg)`,
                })}
                  @click=${() => {
                    this._backLinkShow[index] = !show;
                    this.requestUpdate();
                }}
                >
                  ${ArrowLeftIcon}
                </div>
                <div>
                  ${SmallLinkedDocIcon}${doc.meta?.title
                    ? doc.meta.title
                    : 'Untitled'}
                </div>
              </div>
              <div class="back-links-container">
                <div class="back-links-container-left-divider">
                  <div></div>
                </div>
                <div class="back-links-blocks-container">
                  ${show
                    ? repeat(blocks, blockId => blockId, blockId => {
                        const model = doc.getBlockById(blockId);
                        if (!model)
                            return nothing;
                        return this._backlink(model, docId, blockId);
                    })
                    : nothing}
                </div>
              </div>
            </div>`;
            })}
    </div>`;
        }
        _handleLinkClick(e, docId, blockId) {
            if (e.shiftKey && this._rootService.peekViewService) {
                this._rootService.peekViewService
                    .peek({
                    docId,
                    blockId,
                })
                    .catch(console.error);
            }
            else {
                this.pageRoot.slots.docLinkClicked.emit({
                    docId,
                    blockId,
                });
            }
        }
        _backlink(model, docId, blockId) {
            if (!matchFlavours(model, [
                'affine:paragraph',
                'affine:list',
                'affine:embed-linked-doc',
                'affine:embed-synced-doc',
            ]))
                return nothing;
            let icon = null;
            if (matchFlavours(model, ['affine:list'])) {
                const listService = this._host.spec.getService('affine:list');
                icon = listService.styles.icon(model, false, () => { });
            }
            const type = matchFlavours(model, [
                'affine:embed-linked-doc',
                'affine:embed-synced-doc',
            ])
                ? ''
                : model.type;
            return html ` <div
      class=${`rich-text-container ${type}`}
      @click=${(e) => {
                this._handleLinkClick(e, docId, blockId);
            }}
    >
      <div class="rich-text">
        ${type
                ? html `${icon ?? nothing}
              <rich-text
                .yText=${model.text}
                .readonly=${true}
                .attributesSchema=${this._inlineManager.getSchema()}
                .attributeRenderer=${this._inlineManager.getRenderer()}
              ></rich-text>`
                : html `<div class="linked-doc-container">
              ${SmallLinkedDocIcon}
              ${this.doc.meta?.title ? this.doc.meta?.title : 'Untitled'}
            </div>`}
      </div>

      <div class="arrow-link">${ArrowJumpIcon}</div>
    </div>`;
        }
        _divider(visible) {
            return html `
      <style>
        .divider-container {
          height: 16px;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .divider {
          background: var(--affine-border-color);
          height: 0.5px;
          width: 100%;
        }
      </style>
      <div
        style=${styleMap({
                visibility: visible ? 'visible' : 'hidden',
            })}
        class="divider-container"
      >
        <div class="divider"></div>
      </div>
    `;
        }
        render() {
            const links = this._links;
            const backLinks = this._backLinks;
            if (links.length + backLinks.size === 0)
                return nothing;
            return html `<style>
        .title {
          font-weight: 500;
          font-size: 15px;
          line-height: 24px;
          color: ${this._show
                ? 'var(--affine-text-primary-color)'
                : 'var(--affine-text-disable-color)'};
        }
        .show-button {
          width: 56px;
          height: 28px;
          border-radius: 8px;
          border: 1px solid var(--affine-border-color);
          background-color: var(--affine-white);
          text-align: center;
          font-size: 12px;
          line-height: 28px;
          font-weight: 500;
          color: var(--affine-text-primary-color);
          cursor: pointer;
        }
      </style>
      ${this._divider(!this._show)}
      <div class="title-line">
        <div class="title text">Bi-directional links</div>
        <div class="show-button" @click=${this._toggleShow}>
          ${this._show ? 'Hide' : 'Show'}
        </div>
      </div>
      ${this._divider(this._show)}
      ${this._show
                ? html `${this._renderBackLinks(backLinks)} ${this._renderLinks(links)} `
                : nothing} `;
        }
        connectedCallback() {
            super.connectedCallback();
            const config = new ReferenceNodeConfig();
            config.setInteractable(false);
            config.setDoc(this.doc);
            config.setCustomContent((reference) => {
                const title = reference.doc.meta?.title
                    ? reference.doc.meta.title
                    : 'Untitled';
                return html `<style>
          .custom-reference-content svg {
            position: relative;
            top: 2px;
          }
        </style>
        <span class="custom-reference-content">
          ${SmallLinkedDocIcon} ${title}
        </span> `;
            });
            this._inlineManager.registerSpecs(getAffineInlineSpecsWithReference(config));
            if (this.doc.collection.indexer.backlink) {
                const { _disposables } = this;
                _disposables.add(this.doc.collection.indexer.backlink.slots.indexUpdated.on(() => {
                    this.requestUpdate();
                }));
            }
            this._show =
                !!this._rootService.editPropsStore.getItem('showBidirectional');
        }
        constructor() {
            super(...arguments);
            this.#_show_accessor_storage = __runInitializers(this, __show_initializers, false);
            this.#_backLinkShow_accessor_storage = (__runInitializers(this, __show_extraInitializers), __runInitializers(this, __backLinkShow_initializers, []));
            this._inlineManager = (__runInitializers(this, __backLinkShow_extraInitializers), new InlineManager());
            this.#doc_accessor_storage = __runInitializers(this, _doc_initializers, void 0);
            this.#pageRoot_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _pageRoot_initializers, void 0));
            __runInitializers(this, _pageRoot_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return BiDirectionalLinkPanel = _classThis;
})();
export { BiDirectionalLinkPanel };
//# sourceMappingURL=bi-directional-link-panel.js.map