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
import { assertExists } from '@blocksuite/global/utils';
import { html, render } from 'lit';
import { query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { AFFINE_DRAG_HANDLE_WIDGET, AffineDragHandleWidget, } from '../../root-block/widgets/drag-handle/drag-handle.js';
import { captureEventTarget, convertDragPreviewDocToEdgeless, convertDragPreviewEdgelessToDoc, } from '../../root-block/widgets/drag-handle/utils.js';
import { Bound } from '../../surface-block/index.js';
import { BlockComponent } from '../components/block-component.js';
import { EMBED_CARD_HEIGHT, EMBED_CARD_WIDTH } from '../consts.js';
import { getThemeMode, matchFlavours, } from '../utils/index.js';
import { styles } from './styles.js';
let EmbedBlockElement = (() => {
    let _classSuper = BlockComponent;
    let _embedBlock_decorators;
    let _embedBlock_initializers = [];
    let _embedBlock_extraInitializers = [];
    return class EmbedBlockElement extends _classSuper {
        constructor() {
            super(...arguments);
            this.#embedBlock_accessor_storage = __runInitializers(this, _embedBlock_initializers, void 0);
            this._isInSurface = (__runInitializers(this, _embedBlock_extraInitializers), false);
            this._fetchAbortController = new AbortController();
            this._dragHandleOption = {
                flavour: /affine:embed-*/,
                edgeless: true,
                onDragStart: ({ state, startDragging, anchorBlockPath, editorHost }) => {
                    if (!anchorBlockPath)
                        return false;
                    const anchorComponent = editorHost.std.view.getBlock(anchorBlockPath);
                    if (!anchorComponent ||
                        !matchFlavours(anchorComponent.model, [
                            this.flavour,
                        ]))
                        return false;
                    const blockComponent = anchorComponent;
                    const element = captureEventTarget(state.raw.target);
                    const isDraggingByDragHandle = !!element?.closest(AFFINE_DRAG_HANDLE_WIDGET);
                    const isDraggingByComponent = blockComponent.contains(element);
                    const isInSurface = blockComponent.isInSurface;
                    if (!isInSurface && (isDraggingByDragHandle || isDraggingByComponent)) {
                        editorHost.selection.setGroup('note', [
                            editorHost.selection.create('block', {
                                blockId: blockComponent.blockId,
                            }),
                        ]);
                        startDragging([blockComponent], state);
                        return true;
                    }
                    else if (isInSurface && isDraggingByDragHandle) {
                        const embedPortal = blockComponent.closest('.edgeless-block-portal-embed');
                        assertExists(embedPortal);
                        const dragPreviewEl = embedPortal.cloneNode();
                        dragPreviewEl.style.transform = '';
                        dragPreviewEl.style.left = '0';
                        dragPreviewEl.style.top = '0';
                        render(blockComponent.host.renderModel(blockComponent.model), dragPreviewEl);
                        startDragging([blockComponent], state, dragPreviewEl);
                        return true;
                    }
                    return false;
                },
                onDragEnd: props => {
                    const { state, draggingElements } = props;
                    if (draggingElements.length !== 1 ||
                        !matchFlavours(draggingElements[0].model, [
                            this.flavour,
                        ]))
                        return false;
                    const blockComponent = draggingElements[0];
                    const isInSurface = blockComponent.isInSurface;
                    const target = captureEventTarget(state.raw.target);
                    const isTargetEdgelessContainer = target?.classList.contains('edgeless') &&
                        target?.classList.contains('affine-block-children-container');
                    if (isInSurface) {
                        const style = blockComponent._cardStyle;
                        const targetStyle = style === 'vertical' || style === 'cube' ? 'horizontal' : style;
                        return convertDragPreviewEdgelessToDoc({
                            blockComponent,
                            style: targetStyle,
                            ...props,
                        });
                    }
                    else if (isTargetEdgelessContainer) {
                        const style = blockComponent._cardStyle;
                        return convertDragPreviewDocToEdgeless({
                            blockComponent,
                            cssSelector: '.embed-block-container',
                            width: EMBED_CARD_WIDTH[style],
                            height: EMBED_CARD_HEIGHT[style],
                            ...props,
                        });
                    }
                    return false;
                },
            };
            this._cardStyle = 'horizontal';
            this._width = EMBED_CARD_WIDTH.horizontal;
            this._height = EMBED_CARD_HEIGHT.horizontal;
            this.#useCaptionEditor_accessor_storage = true;
            this.#showBlockSelection_accessor_storage = false;
            this.renderEmbed = (children) => {
                const theme = getThemeMode();
                const isSelected = !!this.selected?.is('block');
                if (!this.isInSurface) {
                    return html `
        <div
          class=${classMap({
                        'embed-block-container': true,
                        [theme]: true,
                        selected: isSelected,
                    })}
          style=${styleMap({
                        position: 'relative',
                        width: '100%',
                    })}
        >
          ${children()}
        </div>
      `;
                }
                const surface = this.surface;
                assertExists(surface);
                const width = this._width;
                const height = this._height;
                const bound = Bound.deserialize((this.edgeless?.service.getElementById(this.model.id) ?? this.model).xywh);
                const scaleX = bound.w / width;
                const scaleY = bound.h / height;
                return html `
      <div
        class="embed-block-container"
        style=${styleMap({
                    width: `${width}px`,
                    height: `${height}px`,
                    transform: `scale(${scaleX}, ${scaleY})`,
                    transformOrigin: '0 0',
                })}
      >
        ${children()}
      </div>
    `;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _embedBlock_decorators = [query('.embed-block-container')];
            __esDecorate(this, null, _embedBlock_decorators, { kind: "accessor", name: "embedBlock", static: false, private: false, access: { has: obj => "embedBlock" in obj, get: obj => obj.embedBlock, set: (obj, value) => { obj.embedBlock = value; } }, metadata: _metadata }, _embedBlock_initializers, _embedBlock_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get isInSurface() {
            return this._isInSurface;
        }
        get edgeless() {
            if (!this._isInSurface) {
                return null;
            }
            return this.host.querySelector('affine-edgeless-root');
        }
        get surface() {
            if (!this.isInSurface)
                return null;
            return this.host.querySelector('affine-surface');
        }
        get bound() {
            return Bound.deserialize((this.edgeless?.service.getElementById(this.model.id) ?? this.model).xywh);
        }
        #embedBlock_accessor_storage;
        get embedBlock() { return this.#embedBlock_accessor_storage; }
        set embedBlock(value) { this.#embedBlock_accessor_storage = value; }
        static { this.styles = styles; }
        get fetchAbortController() {
            return this._fetchAbortController;
        }
        #useCaptionEditor_accessor_storage;
        get useCaptionEditor() { return this.#useCaptionEditor_accessor_storage; }
        set useCaptionEditor(value) { this.#useCaptionEditor_accessor_storage = value; }
        #showBlockSelection_accessor_storage;
        get showBlockSelection() { return this.#showBlockSelection_accessor_storage; }
        set showBlockSelection(value) { this.#showBlockSelection_accessor_storage = value; }
        connectedCallback() {
            super.connectedCallback();
            if (this._fetchAbortController.signal.aborted)
                this._fetchAbortController = new AbortController();
            this.contentEditable = 'false';
            const parent = this.host.doc.getParent(this.model);
            this._isInSurface = parent?.flavour === 'affine:surface';
            this.blockContainerStyles = this.isInSurface
                ? undefined
                : { margin: '18px 0' };
            this.disposables.add(AffineDragHandleWidget.registerOption(this._dragHandleOption));
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._fetchAbortController.abort();
        }
    };
})();
export { EmbedBlockElement };
//# sourceMappingURL=embed-block-element.js.map