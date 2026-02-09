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
import '../card/frame-card.js';
import { ShadowlessElement, WithDisposable, } from '@blocksuite/block-std';
import { Bound, generateKeyBetween, } from '@blocksuite/blocks';
import { DisposableGroup } from '@blocksuite/global/utils';
import { css, html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { startDragging } from '../utils/drag.js';
const styles = css `
  .frame-list-container {
    display: flex;
    align-items: start;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    gap: 16px;
    position: relative;
    margin: 0 8px;
  }

  .no-frame-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 300px;
  }

  .no-frame-placeholder {
    margin-top: 240px;
    align-self: center;
    width: 230px;
    height: 48px;
    color: var(--affine-text-secondary-color, #8e8d91);
    text-align: center;

    /* light/base */
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }

  .insert-indicator {
    height: 2px;
    border-radius: 1px;
    background-color: var(--affine-blue-600);
    position: absolute;
    contain: layout size;
    width: 284px;
    left: 0;
  }
`;
let FramePanelBody = (() => {
    let _classSuper = WithDisposable(ShadowlessElement);
    let __selected_decorators;
    let __selected_initializers = [];
    let __selected_extraInitializers = [];
    let __dragging_decorators;
    let __dragging_initializers = [];
    let __dragging_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _editorHost_decorators;
    let _editorHost_initializers = [];
    let _editorHost_extraInitializers = [];
    let _insertIndex_decorators;
    let _insertIndex_initializers = [];
    let _insertIndex_extraInitializers = [];
    let _fitPadding_decorators;
    let _fitPadding_initializers = [];
    let _fitPadding_extraInitializers = [];
    let _domHost_decorators;
    let _domHost_initializers = [];
    let _domHost_extraInitializers = [];
    let _frameListContainer_decorators;
    let _frameListContainer_initializers = [];
    let _frameListContainer_extraInitializers = [];
    return class FramePanelBody extends _classSuper {
        constructor() {
            super(...arguments);
            this.#_selected_accessor_storage = __runInitializers(this, __selected_initializers, []);
            this.#_dragging_accessor_storage = (__runInitializers(this, __selected_extraInitializers), __runInitializers(this, __dragging_initializers, false));
            this._frameItems = (__runInitializers(this, __dragging_extraInitializers), []);
            this._frameElementHeight = 0;
            this._indicatorTranslateY = 0;
            this._docDisposables = null;
            this._lastEdgelessRootId = '';
            this.#edgeless_accessor_storage = __runInitializers(this, _edgeless_initializers, null);
            this.#doc_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _doc_initializers, void 0));
            this.#editorHost_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _editorHost_initializers, void 0));
            this.#insertIndex_accessor_storage = (__runInitializers(this, _editorHost_extraInitializers), __runInitializers(this, _insertIndex_initializers, undefined));
            this.#fitPadding_accessor_storage = (__runInitializers(this, _insertIndex_extraInitializers), __runInitializers(this, _fitPadding_initializers, void 0));
            this.#domHost_accessor_storage = (__runInitializers(this, _fitPadding_extraInitializers), __runInitializers(this, _domHost_initializers, void 0));
            this.#frameListContainer_accessor_storage = (__runInitializers(this, _domHost_extraInitializers), __runInitializers(this, _frameListContainer_initializers, void 0));
            this._clearDocDisposables = (__runInitializers(this, _frameListContainer_extraInitializers), () => {
                this._docDisposables?.dispose();
                this._docDisposables = null;
            });
            this._selectFrame = (e) => {
                const { selected, id, multiselect } = e.detail;
                if (!selected) {
                    // de-select frame
                    this._selected = this._selected.filter(frameId => frameId !== id);
                }
                else if (multiselect) {
                    this._selected = [...this._selected, id];
                }
                else {
                    this._selected = [id];
                }
                this.edgeless?.service.selection.set({
                    elements: this._selected,
                    editing: false,
                });
            };
            /**
             * click at blank area to clear selection
             */
            this._clickBlank = (e) => {
                e.stopPropagation();
                // check if click at frame-card, if not, set this._selected to empty
                if (e.target.closest('frame-card') ||
                    this._selected.length === 0) {
                    return;
                }
                this._selected = [];
                this.edgeless?.service.selection.set({
                    elements: this._selected,
                    editing: false,
                });
            };
            this._updateFrameItems = () => {
                this._frameItems = this.frames.map((frame, idx) => ({
                    frame,
                    frameIndex: frame.index,
                    cardIndex: idx,
                }));
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __selected_decorators = [state()];
            __dragging_decorators = [state()];
            _edgeless_decorators = [property({ attribute: false })];
            _doc_decorators = [property({ attribute: false })];
            _editorHost_decorators = [property({ attribute: false })];
            _insertIndex_decorators = [property({ attribute: false })];
            _fitPadding_decorators = [property({ attribute: false })];
            _domHost_decorators = [property({ attribute: false })];
            _frameListContainer_decorators = [query('.frame-list-container')];
            __esDecorate(this, null, __selected_decorators, { kind: "accessor", name: "_selected", static: false, private: false, access: { has: obj => "_selected" in obj, get: obj => obj._selected, set: (obj, value) => { obj._selected = value; } }, metadata: _metadata }, __selected_initializers, __selected_extraInitializers);
            __esDecorate(this, null, __dragging_decorators, { kind: "accessor", name: "_dragging", static: false, private: false, access: { has: obj => "_dragging" in obj, get: obj => obj._dragging, set: (obj, value) => { obj._dragging = value; } }, metadata: _metadata }, __dragging_initializers, __dragging_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _editorHost_decorators, { kind: "accessor", name: "editorHost", static: false, private: false, access: { has: obj => "editorHost" in obj, get: obj => obj.editorHost, set: (obj, value) => { obj.editorHost = value; } }, metadata: _metadata }, _editorHost_initializers, _editorHost_extraInitializers);
            __esDecorate(this, null, _insertIndex_decorators, { kind: "accessor", name: "insertIndex", static: false, private: false, access: { has: obj => "insertIndex" in obj, get: obj => obj.insertIndex, set: (obj, value) => { obj.insertIndex = value; } }, metadata: _metadata }, _insertIndex_initializers, _insertIndex_extraInitializers);
            __esDecorate(this, null, _fitPadding_decorators, { kind: "accessor", name: "fitPadding", static: false, private: false, access: { has: obj => "fitPadding" in obj, get: obj => obj.fitPadding, set: (obj, value) => { obj.fitPadding = value; } }, metadata: _metadata }, _fitPadding_initializers, _fitPadding_extraInitializers);
            __esDecorate(this, null, _domHost_decorators, { kind: "accessor", name: "domHost", static: false, private: false, access: { has: obj => "domHost" in obj, get: obj => obj.domHost, set: (obj, value) => { obj.domHost = value; } }, metadata: _metadata }, _domHost_initializers, _domHost_extraInitializers);
            __esDecorate(this, null, _frameListContainer_decorators, { kind: "accessor", name: "frameListContainer", static: false, private: false, access: { has: obj => "frameListContainer" in obj, get: obj => obj.frameListContainer, set: (obj, value) => { obj.frameListContainer = value; } }, metadata: _metadata }, _frameListContainer_initializers, _frameListContainer_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get frames() {
            const frames = this.doc.getBlockByFlavour('affine:frame');
            return frames.sort(this.compare);
        }
        get viewportPadding() {
            return this.fitPadding
                ? [0, 0, 0, 0].map((val, idx) => Number.isFinite(this.fitPadding[idx]) ? this.fitPadding[idx] : val)
                : [0, 0, 0, 0];
        }
        static { this.styles = styles; }
        #_selected_accessor_storage;
        // Store the ids of the selected frames
        get _selected() { return this.#_selected_accessor_storage; }
        set _selected(value) { this.#_selected_accessor_storage = value; }
        #_dragging_accessor_storage;
        get _dragging() { return this.#_dragging_accessor_storage; }
        set _dragging(value) { this.#_dragging_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #editorHost_accessor_storage;
        get editorHost() { return this.#editorHost_accessor_storage; }
        set editorHost(value) { this.#editorHost_accessor_storage = value; }
        #insertIndex_accessor_storage;
        get insertIndex() { return this.#insertIndex_accessor_storage; }
        set insertIndex(value) { this.#insertIndex_accessor_storage = value; }
        #fitPadding_accessor_storage;
        get fitPadding() { return this.#fitPadding_accessor_storage; }
        set fitPadding(value) { this.#fitPadding_accessor_storage = value; }
        #domHost_accessor_storage;
        get domHost() { return this.#domHost_accessor_storage; }
        set domHost(value) { this.#domHost_accessor_storage = value; }
        #frameListContainer_accessor_storage;
        get frameListContainer() { return this.#frameListContainer_accessor_storage; }
        set frameListContainer(value) { this.#frameListContainer_accessor_storage = value; }
        _setDocDisposables(doc) {
            this._clearDocDisposables();
            this._docDisposables = new DisposableGroup();
            this._docDisposables.add(doc.slots.blockUpdated.on(({ flavour }) => {
                if (flavour === 'affine:frame') {
                    requestAnimationFrame(() => {
                        this._updateFrames();
                    });
                }
            }));
        }
        _updateFrames() {
            if (this._dragging)
                return;
            if (!this.frames.length) {
                this._selected = [];
                this._frameItems = [];
                return;
            }
            const frameItems = [];
            const oldSelectedSet = new Set(this._selected);
            const newSelected = [];
            const frames = this.frames.sort(this.compare);
            frames.forEach((frame, idx) => {
                const frameItem = {
                    frame,
                    frameIndex: frame.index,
                    cardIndex: idx,
                };
                frameItems.push(frameItem);
                if (oldSelectedSet.has(frame.id)) {
                    newSelected.push(frame.id);
                }
            });
            this._frameItems = frameItems;
            this._selected = newSelected;
            this.requestUpdate();
        }
        _reorderFrames(selected, framesMap, insertIndex) {
            if (insertIndex >= 0 && insertIndex <= this._frameItems.length) {
                const frames = Array.from(framesMap.values()).map(frameItem => frameItem.frame);
                const selectedFrames = selected
                    .map(id => framesMap.get(id))
                    .map(frameItem => frameItem.frame)
                    .sort(this.compare);
                // update selected frames index
                // make the indexes larger than the frame before and smaller than the frame after
                let before = frames[insertIndex - 1]?.index || null;
                const after = frames[insertIndex]?.index || null;
                selectedFrames.forEach(frame => {
                    const newIndex = generateKeyBetween(before, after);
                    frame.doc.updateBlock(frame, {
                        index: newIndex,
                    });
                    before = newIndex;
                });
                this.doc.captureSync();
                this._updateFrames();
            }
        }
        _fitToElement(e) {
            const { block } = e.detail;
            const bound = Bound.deserialize(block.xywh);
            if (!this.edgeless) {
                // When click frame card in page mode
                // Should switch to edgeless mode and set viewport to the frame
                const viewport = {
                    xywh: block.xywh,
                    referenceId: block.id,
                    padding: this.viewportPadding,
                };
                const rootService = this.editorHost.spec.getService('affine:page');
                rootService.editPropsStore.setItem('viewport', viewport);
                rootService.docModeService.setMode('edgeless');
            }
            else {
                this.edgeless.service.viewport.setViewportByBound(bound, this.viewportPadding, true);
            }
        }
        _drag(e) {
            if (!this._selected.length)
                return;
            this._dragging = true;
            const framesMap = this._frameItems.reduce((map, frame) => {
                map.set(frame.frame.id, {
                    ...frame,
                });
                return map;
            }, new Map());
            const selected = this._selected.slice();
            const draggedFramesInfo = selected.map(id => {
                const frame = framesMap.get(id);
                return {
                    frame: frame.frame,
                    element: this.renderRoot.querySelector(`[data-frame-id="${frame.frame.id}"]`),
                    cardIndex: frame.cardIndex,
                    frameIndex: frame.frameIndex,
                };
            });
            const width = draggedFramesInfo[0].element.clientWidth;
            this._frameElementHeight = draggedFramesInfo[0].element.offsetHeight;
            startDragging(draggedFramesInfo, {
                width,
                container: this,
                document: this.ownerDocument,
                domHost: this.domHost ?? this.ownerDocument,
                start: {
                    x: e.detail.clientX,
                    y: e.detail.clientY,
                },
                framePanelBody: this,
                frameListContainer: this.frameListContainer,
                frameElementHeight: this._frameElementHeight,
                edgeless: this.edgeless,
                doc: this.doc,
                editorHost: this.editorHost,
                onDragEnd: insertIdx => {
                    this._dragging = false;
                    this.insertIndex = undefined;
                    if (insertIdx === undefined)
                        return;
                    this._reorderFrames(selected, framesMap, insertIdx);
                },
                onDragMove: (idx, indicatorTranslateY) => {
                    this.insertIndex = idx;
                    this._indicatorTranslateY = indicatorTranslateY ?? 0;
                },
            });
        }
        _renderEmptyContent() {
            const emptyContent = html ` <div class="no-frame-container">
      <div class="no-frame-placeholder">
        Add frames to organize and present your Edgeless
      </div>
    </div>`;
            return emptyContent;
        }
        _renderFrameList() {
            const selectedFrames = new Set(this._selected);
            const frameCards = html `${repeat(this._frameItems, frameItem => [frameItem.frame.id, frameItem.cardIndex].join('-'), frameItem => {
                const { frame, frameIndex, cardIndex } = frameItem;
                return html `<frame-card
          data-frame-id=${frame.id}
          .edgeless=${this.edgeless}
          .doc=${this.doc}
          .host=${this.editorHost}
          .frame=${frame}
          .cardIndex=${cardIndex}
          .frameIndex=${frameIndex}
          .status=${selectedFrames.has(frame.id)
                    ? this._dragging
                        ? 'placeholder'
                        : 'selected'
                    : 'none'}
          @select=${this._selectFrame}
          @fitview=${this._fitToElement}
          @drag=${this._drag}
        ></frame-card>`;
            })}`;
            const frameList = html ` <div class="frame-list-container">
      ${this.insertIndex !== undefined
                ? html `<div
            class="insert-indicator"
            style=${`transform: translateY(${this._indicatorTranslateY}px)`}
          ></div>`
                : nothing}
      ${frameCards}
    </div>`;
            return frameList;
        }
        compare(a, b) {
            if (a.index < b.index)
                return -1;
            else if (a.index > b.index)
                return 1;
            return 0;
        }
        firstUpdated() {
            const disposables = this.disposables;
            disposables.addFromEvent(this, 'click', this._clickBlank);
        }
        updated(_changedProperties) {
            if (_changedProperties.has('doc') || _changedProperties.has('edgeless')) {
                this._setDocDisposables(this.doc);
            }
            if (_changedProperties.has('edgeless') && this.edgeless) {
                // after switch to edgeless mode, should update the selection
                if (this.edgeless.model.id === this._lastEdgelessRootId) {
                    this.edgeless.service.selection.set({
                        elements: this._selected,
                        editing: false,
                    });
                }
                else {
                    this._selected = [];
                }
                this._lastEdgelessRootId = this.edgeless.model.id;
            }
        }
        connectedCallback() {
            super.connectedCallback();
            this._updateFrameItems();
            if (this.edgeless) {
                this._lastEdgelessRootId = this.edgeless.model.id;
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._clearDocDisposables();
        }
        render() {
            this._updateFrameItems();
            return html ` ${this._frameItems.length
                ? this._renderFrameList()
                : this._renderEmptyContent()}`;
        }
    };
})();
export { FramePanelBody };
//# sourceMappingURL=frame-panel-body.js.map