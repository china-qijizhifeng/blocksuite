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
import '../../note-slicer/index.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { css, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { EDGELESS_BLOCK_CHILD_PADDING } from '../../../../../_common/consts.js';
import { DEFAULT_NOTE_BACKGROUND_COLOR } from '../../../../../_common/edgeless/note/consts.js';
import { MoreIndicatorIcon } from '../../../../../_common/icons/edgeless.js';
import { NoteDisplayMode } from '../../../../../_common/types.js';
import { almostEqual, clamp } from '../../../../../_common/utils/math.js';
import { matchFlavours } from '../../../../../_common/utils/model.js';
import { getClosestBlockElementByPoint } from '../../../../../_common/utils/query.js';
import { Point } from '../../../../../_common/utils/rect.js';
import { handleNativeRangeAtPoint } from '../../../../../_common/utils/selection.js';
import { Bound, StrokeStyle } from '../../../../../surface-block/index.js';
import { EdgelessPortalBase } from '../edgeless-portal-base.js';
const ACTIVE_NOTE_EXTRA_PADDING = 20;
let EdgelessNoteMask = (() => {
    let _classDecorators = [customElement('edgeless-note-mask')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _surface_decorators;
    let _surface_initializers = [];
    let _surface_extraInitializers = [];
    let _model_decorators;
    let _model_initializers = [];
    let _model_extraInitializers = [];
    let _display_decorators;
    let _display_initializers = [];
    let _display_extraInitializers = [];
    var EdgelessNoteMask = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _surface_decorators = [property({ attribute: false })];
            _model_decorators = [property({ attribute: false })];
            _display_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _surface_decorators, { kind: "accessor", name: "surface", static: false, private: false, access: { has: obj => "surface" in obj, get: obj => obj.surface, set: (obj, value) => { obj.surface = value; } }, metadata: _metadata }, _surface_initializers, _surface_extraInitializers);
            __esDecorate(this, null, _model_decorators, { kind: "accessor", name: "model", static: false, private: false, access: { has: obj => "model" in obj, get: obj => obj.model, set: (obj, value) => { obj.model = value; } }, metadata: _metadata }, _model_initializers, _model_extraInitializers);
            __esDecorate(this, null, _display_decorators, { kind: "accessor", name: "display", static: false, private: false, access: { has: obj => "display" in obj, get: obj => obj.display, set: (obj, value) => { obj.display = value; } }, metadata: _metadata }, _display_initializers, _display_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessNoteMask = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .affine-note-mask:hover {
      background-color: var(--affine-hover-color);
    }
  `; }
        #surface_accessor_storage = __runInitializers(this, _surface_initializers, void 0);
        get surface() { return this.#surface_accessor_storage; }
        set surface(value) { this.#surface_accessor_storage = value; }
        #model_accessor_storage = (__runInitializers(this, _surface_extraInitializers), __runInitializers(this, _model_initializers, void 0));
        get model() { return this.#model_accessor_storage; }
        set model(value) { this.#model_accessor_storage = value; }
        #display_accessor_storage = (__runInitializers(this, _model_extraInitializers), __runInitializers(this, _display_initializers, void 0));
        get display() { return this.#display_accessor_storage; }
        set display(value) { this.#display_accessor_storage = value; }
        get edgeless() {
            return this.surface.edgeless;
        }
        firstUpdated() {
            const maskDOM = this.renderRoot.querySelector('.affine-note-mask');
            const observer = new ResizeObserver(entries => {
                for (const entry of entries) {
                    if (!this.model.edgeless.collapse) {
                        const bound = Bound.deserialize(this.model.xywh);
                        const scale = this.model.edgeless.scale ?? 1;
                        const height = entry.contentRect.height * scale;
                        if (!height || almostEqual(bound.h, height)) {
                            return;
                        }
                        bound.h = height;
                        this.model.stash('xywh');
                        this.model.xywh = bound.serialize();
                    }
                }
            });
            observer.observe(maskDOM);
            this._disposables.add(() => {
                // check if model still exist
                if (this.model.doc.getBlockById(this.model.id)) {
                    this.model.pop('xywh');
                }
                observer.disconnect();
            });
        }
        render() {
            return html `
      <div
        class="affine-note-mask"
        style=${styleMap({
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
                zIndex: '1',
                pointerEvents: this.display ? 'auto' : 'none',
                borderRadius: `${this.model.edgeless.style.borderRadius *
                    this.edgeless.service.viewport.zoom}px`,
            })}
      ></div>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _display_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessNoteMask = _classThis;
})();
export { EdgelessNoteMask };
let EdgelessBlockPortalNote = (() => {
    let _classDecorators = [customElement('edgeless-block-portal-note')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EdgelessPortalBase;
    let __isSelected_decorators;
    let __isSelected_initializers = [];
    let __isSelected_extraInitializers = [];
    let __editing_decorators;
    let __editing_initializers = [];
    let __editing_extraInitializers = [];
    let __isResizing_decorators;
    let __isResizing_initializers = [];
    let __isResizing_extraInitializers = [];
    let __isHover_decorators;
    let __isHover_initializers = [];
    let __isHover_extraInitializers = [];
    let __noteFullHeight_decorators;
    let __noteFullHeight_initializers = [];
    let __noteFullHeight_extraInitializers = [];
    let __affineNote_decorators;
    let __affineNote_initializers = [];
    let __affineNote_extraInitializers = [];
    var EdgelessBlockPortalNote = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __isSelected_decorators = [state()];
            __editing_decorators = [state()];
            __isResizing_decorators = [state()];
            __isHover_decorators = [state()];
            __noteFullHeight_decorators = [state()];
            __affineNote_decorators = [query('affine-note')];
            __esDecorate(this, null, __isSelected_decorators, { kind: "accessor", name: "_isSelected", static: false, private: false, access: { has: obj => "_isSelected" in obj, get: obj => obj._isSelected, set: (obj, value) => { obj._isSelected = value; } }, metadata: _metadata }, __isSelected_initializers, __isSelected_extraInitializers);
            __esDecorate(this, null, __editing_decorators, { kind: "accessor", name: "_editing", static: false, private: false, access: { has: obj => "_editing" in obj, get: obj => obj._editing, set: (obj, value) => { obj._editing = value; } }, metadata: _metadata }, __editing_initializers, __editing_extraInitializers);
            __esDecorate(this, null, __isResizing_decorators, { kind: "accessor", name: "_isResizing", static: false, private: false, access: { has: obj => "_isResizing" in obj, get: obj => obj._isResizing, set: (obj, value) => { obj._isResizing = value; } }, metadata: _metadata }, __isResizing_initializers, __isResizing_extraInitializers);
            __esDecorate(this, null, __isHover_decorators, { kind: "accessor", name: "_isHover", static: false, private: false, access: { has: obj => "_isHover" in obj, get: obj => obj._isHover, set: (obj, value) => { obj._isHover = value; } }, metadata: _metadata }, __isHover_initializers, __isHover_extraInitializers);
            __esDecorate(this, null, __noteFullHeight_decorators, { kind: "accessor", name: "_noteFullHeight", static: false, private: false, access: { has: obj => "_noteFullHeight" in obj, get: obj => obj._noteFullHeight, set: (obj, value) => { obj._noteFullHeight = value; } }, metadata: _metadata }, __noteFullHeight_initializers, __noteFullHeight_extraInitializers);
            __esDecorate(this, null, __affineNote_decorators, { kind: "accessor", name: "_affineNote", static: false, private: false, access: { has: obj => "_affineNote" in obj, get: obj => obj._affineNote, set: (obj, value) => { obj._affineNote = value; } }, metadata: _metadata }, __affineNote_initializers, __affineNote_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessBlockPortalNote = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .edgeless-note-collapse-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 28px;
      height: 28px;
      z-index: 2;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      opacity: 0.2;
      transition: opacity 0.3s;
    }
    .edgeless-note-collapse-button:hover {
      opacity: 1;
    }
    .edgeless-note-collapse-button.flip {
      transform: translateX(-50%) rotate(180deg);
    }
    .edgeless-note-collapse-button.hide {
      display: none;
    }

    .edgeless-block-portal-note:has(.edgeless-note-collapse-button:hover) {
      .affine-note-mask {
        background-color: var(--affine-hover-color);
      }
    }

    .edgeless-block-portal-note:has(.affine-embed-synced-doc-container.editing)
      > .note-background {
      left: ${-ACTIVE_NOTE_EXTRA_PADDING}px !important;
      top: ${-ACTIVE_NOTE_EXTRA_PADDING}px !important;
      width: calc(100% + ${ACTIVE_NOTE_EXTRA_PADDING * 2}px) !important;
      height: calc(100% + ${ACTIVE_NOTE_EXTRA_PADDING * 2}px) !important;
    }

    .edgeless-block-portal-note:has(.affine-embed-synced-doc-container.editing)
      > edgeless-note-mask {
      display: none;
    }
  `; }
        #_isSelected_accessor_storage = __runInitializers(this, __isSelected_initializers, false);
        get _isSelected() { return this.#_isSelected_accessor_storage; }
        set _isSelected(value) { this.#_isSelected_accessor_storage = value; }
        #_editing_accessor_storage = (__runInitializers(this, __isSelected_extraInitializers), __runInitializers(this, __editing_initializers, false));
        get _editing() { return this.#_editing_accessor_storage; }
        set _editing(value) { this.#_editing_accessor_storage = value; }
        #_isResizing_accessor_storage = (__runInitializers(this, __editing_extraInitializers), __runInitializers(this, __isResizing_initializers, false));
        get _isResizing() { return this.#_isResizing_accessor_storage; }
        set _isResizing(value) { this.#_isResizing_accessor_storage = value; }
        #_isHover_accessor_storage = (__runInitializers(this, __isResizing_extraInitializers), __runInitializers(this, __isHover_initializers, false));
        get _isHover() { return this.#_isHover_accessor_storage; }
        set _isHover(value) { this.#_isHover_accessor_storage = value; }
        #_noteFullHeight_accessor_storage = (__runInitializers(this, __isHover_extraInitializers), __runInitializers(this, __noteFullHeight_initializers, 0));
        get _noteFullHeight() { return this.#_noteFullHeight_accessor_storage; }
        set _noteFullHeight(value) { this.#_noteFullHeight_accessor_storage = value; }
        #_affineNote_accessor_storage = (__runInitializers(this, __noteFullHeight_extraInitializers), __runInitializers(this, __affineNote_initializers, void 0));
        get _affineNote() { return this.#_affineNote_accessor_storage; }
        set _affineNote(value) { this.#_affineNote_accessor_storage = value; }
        get _zoom() {
            return this.edgeless.service.viewport.zoom;
        }
        get _isShowCollapsedContent() {
            return this.model.edgeless.collapse && (this._isResizing || this._isHover);
        }
        _hovered() {
            if (!this._isHover && this.edgeless.service.selection.has(this.model.id)) {
                this._isHover = true;
            }
        }
        _leaved() {
            if (this._isHover) {
                this._isHover = false;
            }
        }
        _handleClickAtBackground(e) {
            e.stopPropagation();
            if (!this._affineNote || !this._editing)
                return;
            const rect = this._affineNote.getBoundingClientRect();
            const offsetY = 16 * this._zoom;
            const offsetX = 2 * this._zoom;
            const x = clamp(e.x, rect.left + offsetX, rect.right - offsetX);
            const y = clamp(e.y, rect.top + offsetY, rect.bottom - offsetY);
            handleNativeRangeAtPoint(x, y);
            if (this.surface.doc.readonly)
                return;
            this._tryAddParagraph(x, y);
        }
        _tryAddParagraph(x, y) {
            const nearest = getClosestBlockElementByPoint(new Point(x, y));
            if (!nearest)
                return;
            const nearestBBox = nearest.getBoundingClientRect();
            const yRel = y - nearestBBox.top;
            const insertPos = yRel < nearestBBox.height / 2 ? 'before' : 'after';
            const nearestModel = nearest.model;
            const nearestModelIdx = this.model.children.indexOf(nearestModel);
            const children = this.model.children;
            const siblingModel = children[clamp(nearestModelIdx + (insertPos === 'before' ? -1 : 1), 0, children.length)];
            if ((!nearestModel.text ||
                !matchFlavours(nearestModel, ['affine:paragraph', 'affine:list'])) &&
                (!siblingModel ||
                    !siblingModel.text ||
                    !matchFlavours(siblingModel, ['affine:paragraph', 'affine:list']))) {
                const [pId] = this.surface.doc.addSiblingBlocks(nearestModel, [{ flavour: 'affine:paragraph' }], insertPos);
                this.updateComplete
                    .then(() => {
                    this.surface.selection.setGroup('note', [
                        this.surface.selection.create('text', {
                            from: {
                                blockId: pId,
                                index: 0,
                                length: 0,
                            },
                            to: null,
                        }),
                    ]);
                })
                    .catch(console.error);
            }
        }
        _setCollapse(event) {
            event.stopImmediatePropagation();
            const { collapse, collapsedHeight } = this.model.edgeless;
            if (collapse) {
                this.model.doc.updateBlock(this.model, () => {
                    this.model.edgeless.collapse = false;
                });
            }
            else if (collapsedHeight) {
                const { xywh, edgeless } = this.model;
                const bound = Bound.deserialize(xywh);
                bound.h = collapsedHeight * (edgeless.scale ?? 1);
                this.model.doc.updateBlock(this.model, () => {
                    this.model.edgeless.collapse = true;
                    this.model.xywh = bound.serialize();
                });
            }
            this.edgeless.service.selection.clear();
        }
        _collapsedContent() {
            if (!this._isShowCollapsedContent || !this._affineNote) {
                return nothing;
            }
            const { xywh, edgeless } = this.model;
            const bound = Bound.deserialize(xywh);
            const scale = edgeless.scale ?? 1;
            const width = bound.w / scale;
            const height = bound.h / scale;
            const rect = this._affineNote.getBoundingClientRect();
            const zoom = this.edgeless.service.viewport.zoom;
            this._noteFullHeight =
                rect.height / scale / zoom + 2 * EDGELESS_BLOCK_CHILD_PADDING;
            if (height >= this._noteFullHeight) {
                return nothing;
            }
            return html `
      <div
        style=${styleMap({
                width: `${width}px`,
                height: `${this._noteFullHeight - height}px`,
                position: 'absolute',
                left: '0px',
                top: `${height}px`,
                background: 'var(--affine-white)',
                opacity: 0.5,
                pointerEvents: 'none',
                borderLeft: '2px var(--affine-blue) solid',
                borderBottom: '2px var(--affine-blue) solid',
                borderRight: '2px var(--affine-blue) solid',
                borderRadius: '0 0 8px 8px',
            })}
      ></div>
    `;
        }
        firstUpdated() {
            const { _disposables, edgeless } = this;
            const selection = this.edgeless.service.selection;
            _disposables.add(edgeless.slots.elementResizeStart.on(() => {
                if (selection.selectedElements.includes(this.model)) {
                    this._isResizing = true;
                }
            }));
            _disposables.add(edgeless.slots.elementResizeEnd.on(() => {
                this._isResizing = false;
            }));
            const observer = new MutationObserver(() => {
                const affineNote = this._affineNote;
                if (!this._affineNote)
                    return;
                const rect = affineNote.getBoundingClientRect();
                const zoom = this.edgeless.service.viewport.zoom;
                const scale = this.model.edgeless.scale ?? 1;
                this._noteFullHeight =
                    rect.height / scale / zoom + 2 * EDGELESS_BLOCK_CHILD_PADDING;
            });
            observer.observe(this, { childList: true, subtree: true });
            _disposables.add(() => observer.disconnect());
        }
        connectedCallback() {
            super.connectedCallback();
            const selection = this.edgeless.service.selection;
            this._editing = selection.has(this.model.id) && selection.editing;
            this._disposables.add(selection.slots.updated.on(() => {
                if (selection.has(this.model.id) && selection.editing) {
                    this._editing = true;
                }
                else {
                    this._editing = false;
                }
            }));
        }
        render() {
            const { model, surface, index } = this;
            const { displayMode } = model;
            if (!!displayMode && displayMode === NoteDisplayMode.DocOnly)
                return nothing;
            const { xywh, background, edgeless } = model;
            const { borderRadius, borderSize, borderStyle, shadowType } = edgeless.style;
            const { collapse, collapsedHeight, scale = 1 } = edgeless;
            const bound = Bound.deserialize(xywh);
            const width = bound.w / scale;
            const height = bound.h / scale;
            const style = {
                position: 'absolute',
                zIndex: `${index}`,
                width: `${width}px`,
                height: collapse ? `${height}px` : 'inherit',
                left: `${bound.x}px`,
                top: `${bound.y}px`,
                padding: `${EDGELESS_BLOCK_CHILD_PADDING}px`,
                boxSizing: 'border-box',
                borderRadius: borderRadius + 'px',
                pointerEvents: 'all',
                transformOrigin: '0 0',
                transform: `scale(${scale})`,
            };
            const extra = this._editing ? ACTIVE_NOTE_EXTRA_PADDING : 0;
            const backgroundStyle = {
                position: 'absolute',
                left: `${-extra}px`,
                top: `${-extra}px`,
                width: `${width + extra * 2}px`,
                height: `calc(100% + ${extra * 2}px)`,
                borderRadius: borderRadius + 'px',
                transition: this._editing
                    ? 'left 0.3s, top 0.3s, width 0.3s, height 0.3s'
                    : 'none',
                background: `var(${background ?? DEFAULT_NOTE_BACKGROUND_COLOR})`,
                border: `${borderSize}px ${borderStyle === StrokeStyle.Dash ? 'dashed' : borderStyle} var(--affine-black-10)`,
                boxShadow: this._editing
                    ? 'var(--affine-active-shadow)'
                    : !shadowType
                        ? 'none'
                        : `var(${shadowType})`,
            };
            const isCollapsable = collapse != null &&
                collapsedHeight != null &&
                collapsedHeight !== this._noteFullHeight;
            const isCollapseArrowUp = collapse
                ? this._noteFullHeight < height
                : !!collapsedHeight && collapsedHeight < height;
            return html `
      <div
        class="edgeless-block-portal-note"
        style=${styleMap(style)}
        data-model-height="${bound.h}"
        @mouseleave=${this._leaved}
        @mousemove=${this._hovered}
        data-scale="${scale}"
      >
        <div
          class="note-background"
          style=${styleMap(backgroundStyle)}
          @pointerdown=${(e) => e.stopPropagation()}
          @click=${this._handleClickAtBackground}
        ></div>

        <div
          style=${styleMap({
                width: '100%',
                height: '100%',
                'overflow-y': this._isShowCollapsedContent ? 'initial' : 'clip',
            })}
        >
          ${surface.host.renderModel(model)}
        </div>

        ${isCollapsable
                ? html `<div
              class="${classMap({
                    'edgeless-note-collapse-button': true,
                    flip: isCollapseArrowUp,
                    hide: this._isSelected,
                })}"
              @mousedown=${(e) => e.stopPropagation()}
              @mouseup=${(e) => e.stopPropagation()}
              @click=${this._setCollapse}
            >
              ${MoreIndicatorIcon}
            </div>`
                : nothing}
        ${this._collapsedContent()}

        <edgeless-note-mask
          .display=${!this._editing}
          .surface=${surface}
          .model=${this.model}
        ></edgeless-note-mask>
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, __affineNote_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessBlockPortalNote = _classThis;
})();
export { EdgelessBlockPortalNote };
//# sourceMappingURL=edgeless-note.js.map