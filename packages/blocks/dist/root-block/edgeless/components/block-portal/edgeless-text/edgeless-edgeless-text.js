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
import '../../../../../edgeless-text/edgeless-text-block.js';
import { css, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { matchFlavours } from '../../../../../_common/utils/model.js';
import { EDGELESS_TEXT_BLOCK_MIN_HEIGHT, EDGELESS_TEXT_BLOCK_MIN_WIDTH, } from '../../../../../edgeless-text/edgeless-text-block.js';
import { Bound } from '../../../../../surface-block/utils/bound.js';
import { HandleDirection } from '../../resize/resize-handles.js';
import { EdgelessPortalBase } from '../edgeless-portal-base.js';
let EdgelessBlockPortalEdgelessText = (() => {
    let _classDecorators = [customElement('edgeless-block-portal-edgeless-text')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EdgelessPortalBase;
    let __textContainer_decorators;
    let __textContainer_initializers = [];
    let __textContainer_extraInitializers = [];
    let __edgelessText_decorators;
    let __edgelessText_initializers = [];
    let __edgelessText_extraInitializers = [];
    let __editing_decorators;
    let __editing_initializers = [];
    let __editing_extraInitializers = [];
    var EdgelessBlockPortalEdgelessText = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_textContainer_accessor_storage = __runInitializers(this, __textContainer_initializers, void 0);
            this.#_edgelessText_accessor_storage = (__runInitializers(this, __textContainer_extraInitializers), __runInitializers(this, __edgelessText_initializers, void 0));
            this.#_editing_accessor_storage = (__runInitializers(this, __edgelessText_extraInitializers), __runInitializers(this, __editing_initializers, false));
            this._horizontalResizing = (__runInitializers(this, __editing_extraInitializers), false);
            this._resizeObserver = new ResizeObserver(() => {
                const rect = this._textContainer.getBoundingClientRect();
                const bound = Bound.deserialize(this.model.xywh);
                if ((this._editing && !this.model.hasMaxWidth) ||
                    rect.width > bound.w * this.edgeless.service.zoom) {
                    this._updateW();
                }
                this._updateH();
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __textContainer_decorators = [query('.edgeless-text-block-container')];
            __edgelessText_decorators = [query('affine-edgeless-text')];
            __editing_decorators = [state()];
            __esDecorate(this, null, __textContainer_decorators, { kind: "accessor", name: "_textContainer", static: false, private: false, access: { has: obj => "_textContainer" in obj, get: obj => obj._textContainer, set: (obj, value) => { obj._textContainer = value; } }, metadata: _metadata }, __textContainer_initializers, __textContainer_extraInitializers);
            __esDecorate(this, null, __edgelessText_decorators, { kind: "accessor", name: "_edgelessText", static: false, private: false, access: { has: obj => "_edgelessText" in obj, get: obj => obj._edgelessText, set: (obj, value) => { obj._edgelessText = value; } }, metadata: _metadata }, __edgelessText_initializers, __edgelessText_extraInitializers);
            __esDecorate(this, null, __editing_decorators, { kind: "accessor", name: "_editing", static: false, private: false, access: { has: obj => "_editing" in obj, get: obj => obj._editing, set: (obj, value) => { obj._editing = value; } }, metadata: _metadata }, __editing_initializers, __editing_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessBlockPortalEdgelessText = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .edgeless-text-block-container[data-max-width='false'] .inline-editor span {
      word-break: normal !important;
      overflow-wrap: normal !important;
    }
  `; }
        #_textContainer_accessor_storage;
        get _textContainer() { return this.#_textContainer_accessor_storage; }
        set _textContainer(value) { this.#_textContainer_accessor_storage = value; }
        #_edgelessText_accessor_storage;
        get _edgelessText() { return this.#_edgelessText_accessor_storage; }
        set _edgelessText(value) { this.#_edgelessText_accessor_storage = value; }
        #_editing_accessor_storage;
        get _editing() { return this.#_editing_accessor_storage; }
        set _editing(value) { this.#_editing_accessor_storage = value; }
        _updateH() {
            const bound = Bound.deserialize(this.model.xywh);
            const rect = this._textContainer.getBoundingClientRect();
            bound.h = Math.max(rect.height / this.edgeless.service.zoom, EDGELESS_TEXT_BLOCK_MIN_HEIGHT * this.edgeless.service.zoom);
            this.edgeless.doc.updateBlock(this.model, {
                xywh: bound.serialize(),
            });
        }
        _updateW() {
            const bound = Bound.deserialize(this.model.xywh);
            const rect = this._textContainer.getBoundingClientRect();
            bound.w = Math.max(rect.width / this.edgeless.service.zoom, EDGELESS_TEXT_BLOCK_MIN_WIDTH * this.edgeless.service.zoom);
            this.edgeless.doc.updateBlock(this.model, {
                xywh: bound.serialize(),
            });
        }
        checkWidthOverflow(width) {
            let wValid = true;
            const oldWidthStr = this._textContainer.style.width;
            this._textContainer.style.width = `${width}px`;
            if (this._edgelessText.childrenContainer.scrollWidth >
                this._edgelessText.childrenContainer.offsetWidth) {
                wValid = false;
            }
            this._textContainer.style.width = oldWidthStr;
            return wValid;
        }
        firstUpdated(props) {
            super.firstUpdated(props);
            const { disposables, edgeless } = this;
            const edgelessSelection = edgeless.service.selection;
            const selectedRect = this.portalContainer.selectedRect;
            disposables.add(selectedRect.slots.dragStart
                .filter(() => edgelessSelection.selectedElements.includes(this.model))
                .on(() => {
                if (selectedRect.dragDirection === HandleDirection.Left ||
                    selectedRect.dragDirection === HandleDirection.Right) {
                    this._horizontalResizing = true;
                }
            }));
            disposables.add(selectedRect.slots.dragEnd
                .filter(() => edgelessSelection.selectedElements.includes(this.model))
                .on(() => {
                if (selectedRect.dragDirection === HandleDirection.Left ||
                    selectedRect.dragDirection === HandleDirection.Right) {
                    this._horizontalResizing = false;
                }
            }));
            disposables.add(edgelessSelection.slots.updated.on(() => {
                if (edgelessSelection.has(this.model.id) && edgelessSelection.editing) {
                    this._editing = true;
                }
                else {
                    this._editing = false;
                }
            }));
            this._resizeObserver.observe(this._textContainer);
            this.model.deleted.on(() => {
                this._resizeObserver.disconnect();
            });
            disposables.addFromEvent(this._textContainer, 'click', e => {
                if (!this._editing)
                    return;
                const containerRect = this._textContainer.getBoundingClientRect();
                const isTop = e.clientY < containerRect.top + containerRect.height / 2;
                let newParagraphId = null;
                if (isTop) {
                    const firstChild = this._edgelessText.model.firstChild();
                    if (!firstChild ||
                        !matchFlavours(firstChild, ['affine:list', 'affine:paragraph'])) {
                        newParagraphId = this.edgeless.doc.addBlock('affine:paragraph', {}, this.model.id, 0);
                    }
                }
                else {
                    const lastChild = this._edgelessText.model.lastChild();
                    if (!lastChild ||
                        !matchFlavours(lastChild, ['affine:list', 'affine:paragraph'])) {
                        newParagraphId = this.edgeless.doc.addBlock('affine:paragraph', {}, this.model.id);
                    }
                }
                if (newParagraphId) {
                    this.edgeless.selection.setGroup('note', [
                        this.edgeless.selection.create('text', {
                            from: {
                                blockId: newParagraphId,
                                index: 0,
                                length: 0,
                            },
                            to: null,
                        }),
                    ]);
                }
            });
            disposables.addFromEvent(this._textContainer, 'focusout', () => {
                if (!this._editing)
                    return;
                this.edgeless.selection.clear();
            });
        }
        render() {
            const { model, index } = this;
            const { xywh, scale, rotate, hasMaxWidth } = model;
            const bound = Bound.deserialize(xywh);
            const containerStyle = {
                transform: `rotate(${rotate}deg)`,
                transformOrigin: 'center',
                padding: '5px 10px',
                border: `1px solid ${this._editing ? 'var(--affine—primary—color, #1e96eb)' : 'transparent'}`,
                borderRadius: '4px',
                boxSizing: 'border-box',
                boxShadow: this._editing
                    ? '0px 0px 0px 2px rgba(30, 150, 235, 0.3)'
                    : 'none',
            };
            if (hasMaxWidth || this._horizontalResizing) {
                containerStyle.width = `${bound.w / scale}px`;
            }
            return html `
      <div
        style=${styleMap({
                position: 'absolute',
                zIndex: `${index}`,
                left: `${bound.x}px`,
                top: `${bound.y}px`,
                transform: `scale(${scale})`,
                transformOrigin: '0 0',
            })}
        data-scale="${scale}"
      >
        <div
          class="edgeless-text-block-container"
          data-max-width="${hasMaxWidth}"
          style=${styleMap(containerStyle)}
        >
          <div
            style=${styleMap({
                position: 'absolute',
                top: '0',
                left: '0',
                bottom: '0',
                right: '0',
                display: this._editing ? 'none' : 'block',
            })}
          ></div>
          <div
            style=${styleMap({
                pointerEvents: this._editing ? 'auto' : 'none',
            })}
          >
            ${this.renderModel(model)}
          </div>
        </div>
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessBlockPortalEdgelessText = _classThis;
})();
export { EdgelessBlockPortalEdgelessText };
//# sourceMappingURL=edgeless-edgeless-text.js.map