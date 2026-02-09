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
import { DisposableGroup } from '@blocksuite/global/utils';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { SmallScissorsIcon } from '../../../../_common/icons/edgeless.js';
import { buildPath, getRectByBlockElement, Point, } from '../../../../_common/utils/index.js';
import { deserializeXYWH, serializeXYWH, } from '../../../../surface-block/utils/xywh.js';
import { DEFAULT_NOTE_HEIGHT } from '../../utils/consts.js';
const DIVIDING_LINE_OFFSET = 4;
const NEW_NOTE_GAP = 40;
const styles = css `
  :host {
    display: flex;
  }

  .note-slicer-container {
    display: flex;
  }

  .note-slicer-button {
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    box-sizing: border-box;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    color: var(--affine-icon-color);
    border: 1px solid var(--affine-border-color);
    background-color: var(--affine-background-overlay-panel-color);
    box-shadow: var(--affine-menu-shadow);
    cursor: pointer;
    width: 24px;
    height: 24px;
    transform-origin: left top;
    z-index: var(--affine-z-index-popover);
    opacity: 0;
    transition: opacity 150ms cubic-bezier(0.25, 0.1, 0.25, 1);
  }

  .note-slicer-dividing-line-container {
    display: flex;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    height: 4px;
    cursor: pointer;
  }

  .note-slicer-dividing-line {
    display: block;
    height: 1px;
    width: 100%;
    z-index: var(--affine-z-index-popover);
    background-image: linear-gradient(
      to right,
      var(--affine-black-10) 50%,
      transparent 50%
    );
    background-size: 4px 100%;
  }
  .note-slicer-dividing-line-container.active .note-slicer-dividing-line {
    background-image: linear-gradient(
      to right,
      var(--affine-black-60) 50%,
      transparent 50%
    );
    animation: slide 0.3s linear infinite;
  }
  @keyframes slide {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -4px 0;
    }
  }
`;
let NoteSlicer = (() => {
    let _classDecorators = [customElement('note-slicer')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __activeSlicerIndex_decorators;
    let __activeSlicerIndex_initializers = [];
    let __activeSlicerIndex_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _anchorNote_decorators;
    let _anchorNote_initializers = [];
    let _anchorNote_extraInitializers = [];
    var NoteSlicer = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __activeSlicerIndex_decorators = [state()];
            _edgeless_decorators = [property({ attribute: false })];
            _anchorNote_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __activeSlicerIndex_decorators, { kind: "accessor", name: "_activeSlicerIndex", static: false, private: false, access: { has: obj => "_activeSlicerIndex" in obj, get: obj => obj._activeSlicerIndex, set: (obj, value) => { obj._activeSlicerIndex = value; } }, metadata: _metadata }, __activeSlicerIndex_initializers, __activeSlicerIndex_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _anchorNote_decorators, { kind: "accessor", name: "anchorNote", static: false, private: false, access: { has: obj => "anchorNote" in obj, get: obj => obj.anchorNote, set: (obj, value) => { obj.anchorNote = value; } }, metadata: _metadata }, _anchorNote_initializers, _anchorNote_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            NoteSlicer = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get _editorHost() {
            return this.edgeless.host;
        }
        get _noteBlockElement() {
            if (!this._editorHost)
                return null;
            const noteBlock = this._editorHost.view.viewFromPath('block', buildPath(this.anchorNote));
            return noteBlock ? noteBlock : null;
        }
        get _notePortalElement() {
            return this._noteBlockElement?.closest('.edgeless-block-portal-note');
        }
        get _viewportOffset() {
            const { viewport } = this.edgeless;
            return {
                left: viewport.left ?? 0,
                top: viewport.top ?? 0,
            };
        }
        get _selection() {
            return this.edgeless.service.selection;
        }
        get _zoom() {
            return this.edgeless.service.viewport.zoom;
        }
        static { this.styles = styles; }
        #_activeSlicerIndex_accessor_storage;
        get _activeSlicerIndex() { return this.#_activeSlicerIndex_accessor_storage; }
        set _activeSlicerIndex(value) { this.#_activeSlicerIndex_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #anchorNote_accessor_storage;
        get anchorNote() { return this.#anchorNote_accessor_storage; }
        set anchorNote(value) { this.#anchorNote_accessor_storage = value; }
        _updateDivingLineAndBlockIds() {
            if (!this.anchorNote || !this._notePortalElement) {
                this._divingLinePositions = [];
                this._noteBlockIds = [];
                return;
            }
            const divingLinePositions = [];
            const noteBlockIds = [];
            const notePortalRect = this._notePortalElement.getBoundingClientRect();
            const notePortalTop = notePortalRect.top;
            const notePortalBottom = notePortalRect.bottom;
            for (let i = 0; i < this.anchorNote.children.length - 1; i++) {
                const child = this.anchorNote.children[i];
                const rect = this.edgeless.host.view
                    .viewFromPath('block', buildPath(child))
                    ?.getBoundingClientRect();
                if (rect &&
                    rect.bottom > notePortalTop &&
                    rect.bottom < notePortalBottom) {
                    const x = rect.x - this._viewportOffset.left;
                    const y = rect.bottom +
                        DIVIDING_LINE_OFFSET * this._zoom -
                        this._viewportOffset.top;
                    divingLinePositions.push(new Point(x, y));
                    noteBlockIds.push(child.id);
                }
            }
            this._divingLinePositions = divingLinePositions;
            this._noteBlockIds = noteBlockIds;
        }
        _updateActiveSlicerIndex(pos) {
            const { _divingLinePositions } = this;
            const curY = pos.y + DIVIDING_LINE_OFFSET * this._zoom;
            let index = -1;
            for (let i = 0; i < _divingLinePositions.length; i++) {
                const currentY = _divingLinePositions[i].y;
                const previousY = i > 0 ? _divingLinePositions[i - 1].y : 0;
                const midY = (currentY + previousY) / 2;
                if (curY < midY) {
                    break;
                }
                index++;
            }
            if (index < 0)
                index = 0;
            this._activeSlicerIndex = index;
        }
        _sliceNote() {
            if (!this.anchorNote || !this._noteBlockIds.length)
                return;
            const doc = this.edgeless.doc;
            const { index: originIndex, xywh, background, children, displayMode, } = this.anchorNote;
            const { collapse: _, collapsedHeight: __, ...restOfEdgeless } = this.anchorNote.edgeless;
            const anchorBlockId = this._noteBlockIds[this._activeSlicerIndex];
            if (!anchorBlockId)
                return;
            const sliceIndex = children.findIndex(block => block.id === anchorBlockId);
            const resetBlocks = children.slice(sliceIndex + 1);
            const [x, , width] = deserializeXYWH(xywh);
            const sliceVerticalPos = this._divingLinePositions[this._activeSlicerIndex].y;
            const newY = this.edgeless.service.viewport.toModelCoord(x, sliceVerticalPos)[1];
            const newNoteId = this.edgeless.service.addBlock('affine:note', {
                background,
                displayMode,
                xywh: serializeXYWH(x, newY + NEW_NOTE_GAP, width, DEFAULT_NOTE_HEIGHT),
                index: originIndex + 1,
                edgeless: restOfEdgeless,
            }, doc.root?.id);
            doc.moveBlocks(resetBlocks, doc.getBlockById(newNoteId));
            this._activeSlicerIndex = 0;
            this._selection.set({
                elements: [newNoteId],
                editing: false,
            });
        }
        updated(_changedProperties) {
            super.updated(_changedProperties);
            if (_changedProperties.has('anchorNote')) {
                this._noteDisposables?.dispose();
                this._noteDisposables = null;
                if (this.anchorNote) {
                    this._noteDisposables = new DisposableGroup();
                    this._noteDisposables.add(this.anchorNote.propsUpdated.on(({ key }) => {
                        if (key === 'children' || key === 'xywh') {
                            this.requestUpdate();
                        }
                    }));
                }
            }
        }
        connectedCallback() {
            super.connectedCallback();
            if (!this.edgeless.service)
                return;
            this._updateDivingLineAndBlockIds();
            const { disposables } = this;
            disposables.add(this.edgeless.service.uiEventDispatcher.add('pointerMove', ctx => {
                if (this._hidden)
                    this._hidden = false;
                const state = ctx.get('pointerState');
                const pos = new Point(state.x, state.y);
                this._updateActiveSlicerIndex(pos);
            }));
            disposables.add(this.edgeless.service.viewport.viewportUpdated.on(() => {
                this._hidden = true;
                this.requestUpdate();
            }));
            const { surface } = this.edgeless;
            requestAnimationFrame(() => {
                if (surface.isConnected && surface.edgeless.dispatcher) {
                    disposables.add(surface.edgeless.dispatcher.add('click', ctx => {
                        const event = ctx.get('pointerState');
                        const { raw } = event;
                        const target = raw.target;
                        if (!target)
                            return false;
                        if (target.closest('note-slicer')) {
                            this._sliceNote();
                            return true;
                        }
                        return false;
                    }));
                }
            });
        }
        firstUpdated() {
            if (!this.edgeless.service)
                return;
            this.disposables.add(this.edgeless.service.uiEventDispatcher.add('wheel', () => {
                this._hidden = true;
                this.requestUpdate();
            }));
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.disposables.dispose();
            this._noteDisposables?.dispose();
            this._noteDisposables = null;
        }
        render() {
            if (!this.anchorNote || this._hidden)
                return nothing;
            this._updateDivingLineAndBlockIds();
            const noteBlockElement = this._noteBlockElement;
            if (!noteBlockElement || !this._divingLinePositions.length)
                return nothing;
            const rect = getRectByBlockElement(noteBlockElement);
            const width = rect.width;
            const buttonPosition = this._divingLinePositions[this._activeSlicerIndex];
            return html `<div class="note-slicer-container">
      <div
        class="note-slicer-button"
        style=${styleMap({
                left: `${buttonPosition.x - 66 * this._zoom}px`,
                top: `${buttonPosition.y}px`,
                opacity: 1,
                scale: `${this._zoom}`,
                transform: 'translateY(-50%)',
            })}
      >
        ${SmallScissorsIcon}
      </div>
      ${this._divingLinePositions.map((pos, idx) => {
                const dividingLineClasses = classMap({
                    'note-slicer-dividing-line-container': true,
                    active: idx === this._activeSlicerIndex,
                });
                return html `<div
          class=${dividingLineClasses}
          style=${styleMap({
                    left: `${pos.x}px`,
                    top: `${pos.y}px`,
                    width: `${width}px`,
                })}
        >
          <span class="note-slicer-dividing-line"></span>
        </div>`;
            })}
    </div> `;
        }
        constructor() {
            super(...arguments);
            this.#_activeSlicerIndex_accessor_storage = __runInitializers(this, __activeSlicerIndex_initializers, 0);
            this._hidden = (__runInitializers(this, __activeSlicerIndex_extraInitializers), false);
            this._divingLinePositions = [];
            this._noteBlockIds = [];
            this._noteDisposables = null;
            this.#edgeless_accessor_storage = __runInitializers(this, _edgeless_initializers, void 0);
            this.#anchorNote_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _anchorNote_initializers, null));
            __runInitializers(this, _anchorNote_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return NoteSlicer = _classThis;
})();
export { NoteSlicer };
//# sourceMappingURL=index.js.map