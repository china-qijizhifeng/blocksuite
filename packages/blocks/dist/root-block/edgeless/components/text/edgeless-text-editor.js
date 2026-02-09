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
import '../../../../_common/components/rich-text/rich-text.js';
import { RangeManager, ShadowlessElement, WithDisposable, } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { css, html, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { isCssVariable } from '../../../../_common/theme/css-variables.js';
import { getLineHeight } from '../../../../surface-block/canvas-renderer/element-renderer/text/utils.js';
import { Bound, toRadian, Vec } from '../../../../surface-block/index.js';
import { wrapFontFamily } from '../../../../surface-block/utils/font.js';
import { deleteElements } from '../../utils/crud.js';
import { getSelectedRect } from '../../utils/query.js';
let EdgelessTextEditor = (() => {
    let _classDecorators = [customElement('edgeless-text-editor')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _richText_decorators;
    let _richText_initializers = [];
    let _richText_extraInitializers = [];
    let _element_decorators;
    let _element_initializers = [];
    let _element_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    var EdgelessTextEditor = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._keeping = false;
            this._isComposition = false;
            this.#richText_accessor_storage = __runInitializers(this, _richText_initializers, void 0);
            this.#element_accessor_storage = (__runInitializers(this, _richText_extraInitializers), __runInitializers(this, _element_initializers, void 0));
            this.#edgeless_accessor_storage = (__runInitializers(this, _element_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
            this._updateRect = (__runInitializers(this, _edgeless_extraInitializers), () => {
                const edgeless = this.edgeless;
                const element = this.element;
                if (!edgeless || !element)
                    return;
                const newWidth = this.inlineEditorContainer.scrollWidth;
                const newHeight = this.inlineEditorContainer.scrollHeight;
                const bound = new Bound(element.x, element.y, newWidth, newHeight);
                const { x, y, w, h, rotate } = element;
                switch (element.textAlign) {
                    case 'left':
                        {
                            const newPos = this.getCoordsOnLeftAlign({
                                x,
                                y,
                                w,
                                h,
                                r: toRadian(rotate),
                            }, newWidth, newHeight);
                            bound.x = newPos.x;
                            bound.y = newPos.y;
                        }
                        break;
                    case 'center':
                        {
                            const newPos = this.getCoordsOnCenterAlign({
                                x,
                                y,
                                w,
                                h,
                                r: toRadian(rotate),
                            }, newWidth, newHeight);
                            bound.x = newPos.x;
                            bound.y = newPos.y;
                        }
                        break;
                    case 'right':
                        {
                            const newPos = this.getCoordsOnRightAlign({
                                x,
                                y,
                                w,
                                h,
                                r: toRadian(rotate),
                            }, newWidth, newHeight);
                            bound.x = newPos.x;
                            bound.y = newPos.y;
                        }
                        break;
                }
                edgeless.service.updateElement(element.id, {
                    xywh: bound.serialize(),
                });
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _richText_decorators = [query('rich-text')];
            _element_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _richText_decorators, { kind: "accessor", name: "richText", static: false, private: false, access: { has: obj => "richText" in obj, get: obj => obj.richText, set: (obj, value) => { obj.richText = value; } }, metadata: _metadata }, _richText_initializers, _richText_extraInitializers);
            __esDecorate(this, null, _element_decorators, { kind: "accessor", name: "element", static: false, private: false, access: { has: obj => "element" in obj, get: obj => obj.element, set: (obj, value) => { obj.element = value; } }, metadata: _metadata }, _element_initializers, _element_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessTextEditor = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get inlineEditor() {
            assertExists(this.richText.inlineEditor);
            return this.richText.inlineEditor;
        }
        get inlineEditorContainer() {
            return this.inlineEditor.rootElement;
        }
        static { this.PLACEHOLDER_TEXT = 'Type from here'; }
        static { this.HORIZONTAL_PADDING = 10; }
        static { this.VERTICAL_PADDING = 6; }
        static { this.BORDER_WIDTH = 1; }
        static { this.styles = css `
    .edgeless-text-editor {
      position: absolute;
      left: 0;
      top: 0;
      z-index: 10;
      transform-origin: left top;
      font-kerning: none;
      border: ${EdgelessTextEditor.BORDER_WIDTH}px solid
        var(--affine-primary-color, #1e96eb);
      border-radius: 4px;
      box-shadow: 0px 0px 0px 2px rgba(30, 150, 235, 0.3);
      padding: ${EdgelessTextEditor.VERTICAL_PADDING}px
        ${EdgelessTextEditor.HORIZONTAL_PADDING}px;
      overflow: visible;
    }

    .edgeless-text-editor .inline-editor {
      white-space: pre-wrap !important;
      outline: none;
    }

    .edgeless-text-editor .inline-editor span {
      word-break: normal !important;
      overflow-wrap: anywhere !important;
    }

    .edgeless-text-editor-placeholder {
      pointer-events: none;
      color: var(--affine-text-disable-color);
      white-space: nowrap;
    }
  `; }
        #richText_accessor_storage;
        get richText() { return this.#richText_accessor_storage; }
        set richText(value) { this.#richText_accessor_storage = value; }
        #element_accessor_storage;
        get element() { return this.#element_accessor_storage; }
        set element(value) { this.#element_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        setKeeping(keeping) {
            this._keeping = keeping;
        }
        getCoordsOnRightAlign(rect, w1, h1) {
            const centerX = rect.x + rect.w / 2;
            const centerY = rect.y + rect.h / 2;
            let deltaXPrime = (rect.w / 2) * Math.cos(rect.r) - (-rect.h / 2) * Math.sin(rect.r);
            let deltaYPrime = (rect.w / 2) * Math.sin(rect.r) + (-rect.h / 2) * Math.cos(rect.r);
            const vX = centerX + deltaXPrime;
            const vY = centerY + deltaYPrime;
            deltaXPrime = (w1 / 2) * Math.cos(rect.r) - (-h1 / 2) * Math.sin(rect.r);
            deltaYPrime = (w1 / 2) * Math.sin(rect.r) + (-h1 / 2) * Math.cos(rect.r);
            const newCenterX = vX - deltaXPrime;
            const newCenterY = vY - deltaYPrime;
            return { x: newCenterX - w1 / 2, y: newCenterY - h1 / 2 };
        }
        getCoordsOnCenterAlign(rect, w1, h1) {
            const centerX = rect.x + rect.w / 2;
            const centerY = rect.y + rect.h / 2;
            let deltaXPrime = 0;
            let deltaYPrime = (-rect.h / 2) * Math.cos(rect.r);
            const vX = centerX + deltaXPrime;
            const vY = centerY + deltaYPrime;
            deltaXPrime = 0;
            deltaYPrime = (-h1 / 2) * Math.cos(rect.r);
            const newCenterX = vX - deltaXPrime;
            const newCenterY = vY - deltaYPrime;
            return { x: newCenterX - w1 / 2, y: newCenterY - h1 / 2 };
        }
        getCoordsOnLeftAlign(rect, w1, h1) {
            const cX = rect.x + rect.w / 2;
            const cY = rect.y + rect.h / 2;
            let deltaXPrime = (-rect.w / 2) * Math.cos(rect.r) + (rect.h / 2) * Math.sin(rect.r);
            let deltaYPrime = (-rect.w / 2) * Math.sin(rect.r) - (rect.h / 2) * Math.cos(rect.r);
            const vX = cX + deltaXPrime;
            const vY = cY + deltaYPrime;
            deltaXPrime = (-w1 / 2) * Math.cos(rect.r) + (h1 / 2) * Math.sin(rect.r);
            deltaYPrime = (-w1 / 2) * Math.sin(rect.r) - (h1 / 2) * Math.cos(rect.r);
            const newCenterX = vX - deltaXPrime;
            const newCenterY = vY - deltaYPrime;
            return { x: newCenterX - w1 / 2, y: newCenterY - h1 / 2 };
        }
        getVisualPosition(element) {
            const { x, y, w, h, rotate } = element;
            return Vec.rotWith([x, y], [x + w / 2, y + h / 2], toRadian(rotate));
        }
        getContainerOffset() {
            const { VERTICAL_PADDING, HORIZONTAL_PADDING, BORDER_WIDTH } = EdgelessTextEditor;
            return `-${HORIZONTAL_PADDING + BORDER_WIDTH}px, -${VERTICAL_PADDING + BORDER_WIDTH}px`;
        }
        connectedCallback() {
            super.connectedCallback();
            if (!this.edgeless) {
                throw new Error('edgeless is not set.');
            }
            if (!this.element) {
                throw new Error('text element is not set.');
            }
            this.setAttribute(RangeManager.rangeSyncExcludeAttr, 'true');
        }
        firstUpdated() {
            const edgeless = this.edgeless;
            const element = this.element;
            const { dispatcher } = this.edgeless;
            assertExists(dispatcher);
            this.updateComplete
                .then(() => {
                this.inlineEditor.slots.renderComplete.on(() => {
                    this._updateRect();
                    this.requestUpdate();
                });
                this.disposables.add(edgeless.service.surface.elementUpdated.on(({ id }) => {
                    if (id === element.id)
                        this.requestUpdate();
                }));
                this.disposables.add(edgeless.service.viewport.viewportUpdated.on(() => {
                    this.requestUpdate();
                }));
                this.disposables.add(dispatcher.add('click', () => true));
                this.disposables.add(dispatcher.add('doubleClick', () => true));
                this.disposables.add(() => {
                    element.display = true;
                    if (element.text.length === 0) {
                        deleteElements(edgeless.surface, [element]);
                    }
                    edgeless.service.selection.set({
                        elements: [],
                        editing: false,
                    });
                });
                this.disposables.addFromEvent(this.inlineEditorContainer, 'blur', () => !this._keeping && this.remove());
                this.disposables.addFromEvent(this.inlineEditorContainer, 'compositionstart', () => {
                    this._isComposition = true;
                    this.requestUpdate();
                });
                this.disposables.addFromEvent(this.inlineEditorContainer, 'compositionend', () => {
                    this._isComposition = false;
                    this.requestUpdate();
                });
                element.display = false;
            })
                .catch(console.error);
        }
        async getUpdateComplete() {
            const result = await super.getUpdateComplete();
            await this.richText?.updateComplete;
            return result;
        }
        render() {
            const { text, fontFamily, fontSize, fontWeight, fontStyle, color, textAlign, rotate, hasMaxWidth, w, } = this.element;
            const lineHeight = getLineHeight(fontFamily, fontSize, fontWeight);
            const rect = getSelectedRect([this.element]);
            const { translateX, translateY, zoom } = this.edgeless.service.viewport;
            const [visualX, visualY] = this.getVisualPosition(this.element);
            const containerOffset = this.getContainerOffset();
            const transformOperation = [
                `translate(${translateX}px, ${translateY}px)`,
                `translate(${visualX * zoom}px, ${visualY * zoom}px)`,
                `scale(${zoom})`,
                `rotate(${rotate}deg)`,
                `translate(${containerOffset})`,
            ];
            const isEmpty = !text.length && !this._isComposition;
            return html `<div
      style=${styleMap({
                transform: transformOperation.join(' '),
                minWidth: hasMaxWidth ? `${rect.width}px` : 'none',
                maxWidth: hasMaxWidth ? `${w}px` : 'none',
                fontFamily: wrapFontFamily(fontFamily),
                fontSize: `${fontSize}px`,
                fontWeight,
                fontStyle,
                color: isCssVariable(color) ? `var(${color})` : color,
                textAlign,
                lineHeight: `${lineHeight}px`,
                boxSizing: 'content-box',
            })}
      class="edgeless-text-editor"
    >
      <rich-text
        .yText=${text}
        .enableFormat=${false}
        .enableAutoScrollHorizontally=${false}
        style=${isEmpty
                ? styleMap({
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    padding: `${EdgelessTextEditor.VERTICAL_PADDING}px
        ${EdgelessTextEditor.HORIZONTAL_PADDING}px`,
                })
                : nothing}
      ></rich-text>
      ${isEmpty
                ? html `<span class="edgeless-text-editor-placeholder">
            Type from here
          </span>`
                : nothing}
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessTextEditor = _classThis;
})();
export { EdgelessTextEditor };
//# sourceMappingURL=edgeless-text-editor.js.map