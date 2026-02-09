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
import './surface-ref-portal.js';
import { PathFinder } from '@blocksuite/block-std';
import { BlockElement } from '@blocksuite/block-std';
import { assertExists, noop } from '@blocksuite/global/utils';
import { css, html, nothing, } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { Peekable } from '../_common/components/peekable.js';
import { EdgelessModeIcon, FrameIcon, MoreDeleteIcon, } from '../_common/icons/index.js';
import { requestConnectedFrame } from '../_common/utils/event.js';
import { getBackgroundGrid } from '../root-block/edgeless/utils/query.js';
import { Bound } from '../surface-block/utils/bound.js';
import { deserializeXYWH } from '../surface-block/utils/xywh.js';
import { SurfaceRefPortal } from './surface-ref-portal.js';
import { noContentPlaceholder } from './utils.js';
noop(SurfaceRefPortal);
const REF_LABEL_ICON = {
    'affine:frame': FrameIcon,
    DEFAULT_NOTE_HEIGHT: EdgelessModeIcon,
};
const NO_CONTENT_TITLE = {
    'affine:frame': 'Frame',
    group: 'Group',
    DEFAULT: 'Content',
};
const NO_CONTENT_REASON = {
    group: 'This content was ungrouped or deleted on edgeless mode',
    DEFAULT: 'This content was deleted on edgeless mode',
};
let SurfaceRefBlockComponent = (() => {
    let _classDecorators = [customElement('affine-surface-ref'), Peekable()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BlockElement;
    let __surfaceModel_decorators;
    let __surfaceModel_initializers = [];
    let __surfaceModel_extraInitializers = [];
    let __focused_decorators;
    let __focused_initializers = [];
    let __focused_extraInitializers = [];
    let _container_decorators;
    let _container_initializers = [];
    let _container_extraInitializers = [];
    let _portal_decorators;
    let _portal_initializers = [];
    let _portal_extraInitializers = [];
    let _captionElement_decorators;
    let _captionElement_initializers = [];
    let _captionElement_extraInitializers = [];
    var SurfaceRefBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __surfaceModel_decorators = [state()];
            __focused_decorators = [state()];
            _container_decorators = [query('.ref-canvas-container')];
            _portal_decorators = [query('surface-ref-portal')];
            _captionElement_decorators = [query('affine-surface-ref > block-caption-editor')];
            __esDecorate(this, null, __surfaceModel_decorators, { kind: "accessor", name: "_surfaceModel", static: false, private: false, access: { has: obj => "_surfaceModel" in obj, get: obj => obj._surfaceModel, set: (obj, value) => { obj._surfaceModel = value; } }, metadata: _metadata }, __surfaceModel_initializers, __surfaceModel_extraInitializers);
            __esDecorate(this, null, __focused_decorators, { kind: "accessor", name: "_focused", static: false, private: false, access: { has: obj => "_focused" in obj, get: obj => obj._focused, set: (obj, value) => { obj._focused = value; } }, metadata: _metadata }, __focused_initializers, __focused_extraInitializers);
            __esDecorate(this, null, _container_decorators, { kind: "accessor", name: "container", static: false, private: false, access: { has: obj => "container" in obj, get: obj => obj.container, set: (obj, value) => { obj.container = value; } }, metadata: _metadata }, _container_initializers, _container_extraInitializers);
            __esDecorate(this, null, _portal_decorators, { kind: "accessor", name: "portal", static: false, private: false, access: { has: obj => "portal" in obj, get: obj => obj.portal, set: (obj, value) => { obj.portal = value; } }, metadata: _metadata }, _portal_initializers, _portal_extraInitializers);
            __esDecorate(this, null, _captionElement_decorators, { kind: "accessor", name: "captionElement", static: false, private: false, access: { has: obj => "captionElement" in obj, get: obj => obj.captionElement, set: (obj, value) => { obj.captionElement = value; } }, metadata: _metadata }, _captionElement_initializers, _captionElement_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            SurfaceRefBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get isInSurface() {
            return this._isInSurface;
        }
        get _shouldRender() {
            return (this.isConnected &&
                this.parentElement &&
                !this.parentBlockElement.closest('affine-surface-ref'));
        }
        get surfaceRenderer() {
            return this._surfaceRefRenderer.surfaceRenderer;
        }
        get referenceModel() {
            return this._referencedModel;
        }
        static { this.styles = css `
    .affine-surface-ref {
      position: relative;
      user-select: none;
      margin: 10px 0;
    }

    .ref-placeholder {
      padding: 26px 0px 0px;
    }

    .placeholder-image {
      margin: 0 auto;
      text-align: center;
    }

    .placeholder-text {
      margin: 12px auto 0;
      text-align: center;
      font-size: 28px;
      font-weight: 600;
      line-height: 36px;
      font-family: var(--affine-font-family);
    }

    .placeholder-action {
      margin: 32px auto 0;
      text-align: center;
    }

    .delete-button {
      width: 204px;
      padding: 4px 18px;

      display: inline-flex;
      justify-content: center;
      align-items: center;
      gap: 4px;

      border-radius: 8px;
      border: 1px solid var(--affine-border-color);

      font-family: var(--affine-font-family);
      font-size: 12px;
      font-weight: 500;
      line-height: 20px;

      background-color: transparent;
      cursor: pointer;
    }

    .delete-button > .icon > svg {
      color: var(--affine-icon-color);
      width: 16px;
      height: 16px;
      display: block;
    }

    .placeholder-reason {
      margin: 72px auto 0;
      padding: 10px;

      text-align: center;
      font-size: 12px;
      font-family: var(--affine-font-family);
      line-height: 20px;

      color: var(--affine-warning-color);
      background-color: var(--affine-background-error-color);
    }

    .ref-content {
      position: relative;
      padding: 20px;
      background-color: var(--affine-background-primary-color);
      background: radial-gradient(
        var(--affine-edgeless-grid-color) 1px,
        var(--affine-background-primary-color) 1px
      );
    }

    .ref-viewport {
      max-width: 100%;
      margin: 0 auto;
      position: relative;
      overflow: hidden;
      pointer-events: none;
      user-select: none;
    }

    .ref-viewport.frame {
      border-radius: 2px;
      border: 1px solid var(--affine-black-30);
    }

    .ref-canvas-container {
      height: 100%;
      width: 100%;
      position: relative;
    }

    .surface-ref-mask {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }

    .surface-ref-mask:hover {
      background-color: rgba(211, 211, 211, 0.1);
    }

    .surface-ref-mask:hover .ref-label {
      display: block;
    }

    .ref-label {
      display: none;
      user-select: none;
    }

    .ref-label {
      position: absolute;
      left: 0;
      bottom: 0;

      width: 100%;
      padding: 8px 16px;
      border: 1px solid var(--affine-border-color);
      gap: 14px;

      background: var(--affine-background-primary-color);

      font-size: 12px;

      user-select: none;
    }

    .ref-label .title {
      display: inline-block;
      font-weight: 600;
      font-family: var(--affine-font-family);
      line-height: 20px;

      color: var(--affine-text-secondary-color);
    }

    .ref-label .title > svg {
      color: var(--affine-icon-secondary);
      display: inline-block;
      vertical-align: baseline;
      width: 20px;
      height: 20px;
      vertical-align: bottom;
    }

    .ref-label .suffix {
      display: inline-block;
      font-weight: 400;
      color: var(--affine-text-disable-color);
      line-height: 20px;
    }
  `; }
        #_surfaceModel_accessor_storage;
        get _surfaceModel() { return this.#_surfaceModel_accessor_storage; }
        set _surfaceModel(value) { this.#_surfaceModel_accessor_storage = value; }
        #_focused_accessor_storage;
        get _focused() { return this.#_focused_accessor_storage; }
        set _focused(value) { this.#_focused_accessor_storage = value; }
        #container_accessor_storage;
        get container() { return this.#container_accessor_storage; }
        set container(value) { this.#container_accessor_storage = value; }
        #portal_accessor_storage;
        get portal() { return this.#portal_accessor_storage; }
        set portal(value) { this.#portal_accessor_storage = value; }
        #captionElement_accessor_storage;
        get captionElement() { return this.#captionElement_accessor_storage; }
        set captionElement(value) { this.#captionElement_accessor_storage = value; }
        _attachRenderer() {
            if (this._surfaceRefRenderer?.surfaceRenderer.canvas.isConnected ||
                !this.container ||
                !this.portal)
                return;
            this.surfaceRenderer.attach(this.container);
            if (this.portal.isUpdatePending) {
                this.portal.updateComplete
                    .then(() => {
                    this.portal.setStackingCanvas(this._surfaceRefRenderer.surfaceRenderer.stackingCanvas);
                })
                    .catch(console.error);
            }
            else {
                this.portal.setStackingCanvas(this._surfaceRefRenderer.surfaceRenderer.stackingCanvas);
            }
        }
        _initHotkey() {
            const selection = this.host.selection;
            const addParagraph = () => {
                if (!this.doc.getParent(this.model))
                    return;
                const [paragraphId] = this.doc.addSiblingBlocks(this.model, [
                    {
                        flavour: 'affine:paragraph',
                    },
                ]);
                const model = this.doc.getBlockById(paragraphId);
                assertExists(model, `Failed to add paragraph block.`);
                requestConnectedFrame(() => {
                    selection.update(selList => {
                        return selList
                            .filter(sel => !sel.is('block'))
                            .concat(selection.create('text', {
                            from: {
                                blockId: model.id,
                                index: 0,
                                length: 0,
                            },
                            to: null,
                        }));
                    });
                }, this);
            };
            this.bindHotKey({
                Enter: () => {
                    if (!this._focused)
                        return;
                    addParagraph();
                    return true;
                },
            });
        }
        _initReferencedModel() {
            let refWatcher = null;
            const init = () => {
                refWatcher?.dispose();
                const referencedModel = this._surfaceRefRenderer.getModel(this.model.reference);
                this._referencedModel =
                    referencedModel && 'xywh' in referencedModel ? referencedModel : null;
                if (!referencedModel)
                    return;
                if ('propsUpdated' in referencedModel) {
                    refWatcher = referencedModel.propsUpdated.on(() => {
                        if (referencedModel.flavour !== this.model.refFlavour) {
                            this.doc.updateBlock(this.model, {
                                refFlavour: referencedModel.flavour,
                            });
                        }
                        this.updateComplete
                            .then(() => {
                            this._refreshViewport();
                        })
                            .catch(console.error);
                    });
                }
                this._refreshViewport();
            };
            init();
            this._disposables.add(() => {
                this.doc.slots.blockUpdated.on(({ type, id }) => {
                    if (type === 'delete' && id === this.model.reference) {
                        init();
                    }
                });
            });
            this._disposables.add(() => {
                this.model.propsUpdated.on(() => {
                    if (this.model.reference !== this._referencedModel?.id) {
                        init();
                    }
                });
            });
            this._disposables.add(() => {
                refWatcher?.dispose();
            });
        }
        _initSelection() {
            const selection = this.host.selection;
            this._disposables.add(selection.slots.changed.on(selList => {
                this._focused = selList.some(sel => sel.blockId === this.blockId && sel.is('block'));
            }));
        }
        _refreshViewport() {
            if (!this._referencedModel) {
                return;
            }
            const referencedModel = this._referencedModel;
            // trigger a rerender to update element's size
            // and set viewport after element's size has been updated
            this.requestUpdate();
            this.updateComplete
                .then(() => {
                this.surfaceRenderer.onResize();
                this.surfaceRenderer.setViewportByBound(Bound.fromXYWH(deserializeXYWH(referencedModel.xywh)));
                // update portal transform
                this.portal?.setViewport(this.surfaceRenderer);
            })
                .catch(console.error);
        }
        _deleteThis() {
            this.doc.deleteBlock(this.model);
        }
        _focusBlock() {
            this.selection.update(() => {
                return [this.selection.create('block', { blockId: this.blockId })];
            });
        }
        _renderMask(referencedModel, flavourOrType) {
            const title = 'title' in referencedModel ? referencedModel.title : '';
            return html `
      <div class="surface-ref-mask">
        <div class="ref-label">
          <div class="title">
            ${REF_LABEL_ICON[flavourOrType ?? 'DEFAULT'] ??
                REF_LABEL_ICON.DEFAULT}
            <span>${title}</span>
          </div>
          <div class="suffix">from edgeless mode</div>
        </div>
      </div>
    `;
        }
        _renderRefPlaceholder(model) {
            return html `<div class="ref-placeholder">
      <div class="placeholder-image">${noContentPlaceholder}</div>
      <div class="placeholder-text">
        No Such
        ${NO_CONTENT_TITLE[model.refFlavour ?? 'DEFAULT'] ??
                NO_CONTENT_TITLE.DEFAULT}
      </div>
      <div class="placeholder-action">
        <button class="delete-button" type="button" @click=${this._deleteThis}>
          <span class="icon">${MoreDeleteIcon}</span
          ><span>Delete this block</span>
        </button>
      </div>
      <div class="placeholder-reason">
        ${NO_CONTENT_REASON[model.refFlavour ?? 'DEFAULT'] ??
                NO_CONTENT_REASON.DEFAULT}
      </div>
    </div>`;
        }
        _renderRefContent(referencedModel, renderer) {
            const [, , w, h] = deserializeXYWH(referencedModel.xywh);
            const { zoom } = renderer;
            const { gap } = getBackgroundGrid(zoom, true);
            const flavourOrType = 'flavour' in referencedModel
                ? referencedModel.flavour
                : referencedModel.type;
            const edgelessBlocks = flavourOrType === 'affine:frame' || flavourOrType === 'group'
                ? html `<surface-ref-portal
            .doc=${this.doc}
            .host=${this.host}
            .refModel=${referencedModel}
            .renderModel=${this.host.renderModel}
          ></surface-ref-portal>`
                : nothing;
            return html `<div
      class="ref-content"
      style=${styleMap({
                backgroundSize: `${gap}px ${gap}px`,
            })}
    >
      <div
        class="ref-viewport ${flavourOrType === 'affine:frame' ? 'frame' : ''}"
        style=${styleMap({
                width: `${w}px`,
                aspectRatio: `${w} / ${h}`,
            })}
      >
        ${edgelessBlocks}
        <div class="ref-canvas-container">
          <!-- attach canvas here -->
        </div>
      </div>
      ${this._renderMask(referencedModel, flavourOrType)}
    </div>`;
        }
        requestUpdate(name, oldValue, options) {
            super.requestUpdate(name, oldValue, options);
            this._surfaceRefRenderer?.surfaceRenderer?.refresh();
            this.portal?.requestUpdate();
        }
        connectedCallback() {
            super.connectedCallback();
            this.contentEditable = 'false';
            const parent = this.host.doc.getParent(this.model);
            this._isInSurface = parent?.flavour === 'affine:surface';
            if (!this._shouldRender)
                return;
            const service = this.service;
            assertExists(service, `Surface ref block must run with its service.`);
            this._surfaceRefRenderer = service.getRenderer(PathFinder.id(this.path), this.doc, true);
            this._disposables.add(() => {
                this.service?.removeRenderer(this._surfaceRefRenderer.id);
            });
            this._disposables.add(this._surfaceRefRenderer.slots.surfaceModelChanged.on(model => {
                this._surfaceModel = model;
            }));
            this._disposables.add(this._surfaceRefRenderer.slots.surfaceRendererRefresh.on(() => {
                this.requestUpdate();
            }));
            this._disposables.add(this._surfaceRefRenderer.slots.surfaceRendererInit.on(() => {
                let lastWidth = 0;
                const observer = new ResizeObserver(entries => {
                    if (entries[0].contentRect.width !== lastWidth) {
                        lastWidth = entries[0].contentRect.width;
                        this._refreshViewport();
                    }
                });
                observer.observe(this);
                this._disposables.add(() => observer.disconnect());
            }));
            this._disposables.add(this._surfaceRefRenderer.surfaceService.layer.slots.layerUpdated.on(() => {
                this.portal.setStackingCanvas(this._surfaceRefRenderer.surfaceRenderer.stackingCanvas);
            }));
            this._surfaceRefRenderer.mount();
            this._initHotkey();
            this._initReferencedModel();
            this._initSelection();
        }
        updated() {
            if (!this._shouldRender)
                return;
            this._attachRenderer();
        }
        viewInEdgeless() {
            if (!this._referencedModel)
                return;
            const viewport = {
                xywh: this._referencedModel.xywh,
                padding: [60, 20, 20, 20],
            };
            const pageService = this.std.spec.getService('affine:page');
            pageService.editPropsStore.setItem('viewport', viewport);
            pageService.docModeService.setMode('edgeless');
        }
        render() {
            if (!this._shouldRender)
                return;
            const { _surfaceModel, _referencedModel, surfaceRenderer, model } = this;
            const isEmpty = !_surfaceModel || !_referencedModel || !_referencedModel.xywh;
            const content = isEmpty
                ? this._renderRefPlaceholder(model)
                : this._renderRefContent(_referencedModel, surfaceRenderer);
            return html `
      <div
        class="affine-surface-ref"
        @click=${this._focusBlock}
        style=${styleMap({
                outline: this._focused
                    ? '2px solid var(--affine-primary-color)'
                    : undefined,
            })}
      >
        ${content}
      </div>

      <block-caption-editor .block=${this}></block-caption-editor>

      ${Object.values(this.widgets)}
    `;
        }
        constructor() {
            super(...arguments);
            this.#_surfaceModel_accessor_storage = __runInitializers(this, __surfaceModel_initializers, null);
            this.#_focused_accessor_storage = (__runInitializers(this, __surfaceModel_extraInitializers), __runInitializers(this, __focused_initializers, false));
            this._surfaceRefRenderer = __runInitializers(this, __focused_extraInitializers);
            this._referencedModel = null;
            this._isInSurface = false;
            this.#container_accessor_storage = __runInitializers(this, _container_initializers, void 0);
            this.#portal_accessor_storage = (__runInitializers(this, _container_extraInitializers), __runInitializers(this, _portal_initializers, void 0));
            this.#captionElement_accessor_storage = (__runInitializers(this, _portal_extraInitializers), __runInitializers(this, _captionElement_initializers, void 0));
            __runInitializers(this, _captionElement_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return SurfaceRefBlockComponent = _classThis;
})();
export { SurfaceRefBlockComponent };
//# sourceMappingURL=surface-ref-block.js.map