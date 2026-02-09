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
import { RangeManager, ShadowlessElement, WithDisposable, } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { DocCollection } from '@blocksuite/store';
import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { getNearestTranslation, isElementOutsideViewport, } from '../../../../_common/edgeless/mindmap/index.js';
import { isCssVariable } from '../../../../_common/theme/css-variables.js';
import { TextResizing } from '../../../../surface-block/consts.js';
import { MindmapElementModel, } from '../../../../surface-block/element-model/index.js';
import { Bound, toRadian, Vec } from '../../../../surface-block/index.js';
import { wrapFontFamily } from '../../../../surface-block/utils/font.js';
import { getSelectedRect } from '../../utils/query.js';
let EdgelessShapeTextEditor = (() => {
    let _classDecorators = [customElement('edgeless-shape-text-editor')];
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
    let _mountEditor_decorators;
    let _mountEditor_initializers = [];
    let _mountEditor_extraInitializers = [];
    var EdgelessShapeTextEditor = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _richText_decorators = [query('rich-text')];
            _element_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            _mountEditor_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _richText_decorators, { kind: "accessor", name: "richText", static: false, private: false, access: { has: obj => "richText" in obj, get: obj => obj.richText, set: (obj, value) => { obj.richText = value; } }, metadata: _metadata }, _richText_initializers, _richText_extraInitializers);
            __esDecorate(this, null, _element_decorators, { kind: "accessor", name: "element", static: false, private: false, access: { has: obj => "element" in obj, get: obj => obj.element, set: (obj, value) => { obj.element = value; } }, metadata: _metadata }, _element_initializers, _element_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _mountEditor_decorators, { kind: "accessor", name: "mountEditor", static: false, private: false, access: { has: obj => "mountEditor" in obj, get: obj => obj.mountEditor, set: (obj, value) => { obj.mountEditor = value; } }, metadata: _metadata }, _mountEditor_initializers, _mountEditor_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessShapeTextEditor = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        get inlineEditor() {
            assertExists(this.richText.inlineEditor);
            return this.richText.inlineEditor;
        }
        get inlineEditorContainer() {
            return this.inlineEditor.rootElement;
        }
        #richText_accessor_storage;
        get richText() { return this.#richText_accessor_storage; }
        set richText(value) { this.#richText_accessor_storage = value; }
        #element_accessor_storage;
        get element() { return this.#element_accessor_storage; }
        set element(value) { this.#element_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #mountEditor_accessor_storage;
        get mountEditor() { return this.#mountEditor_accessor_storage; }
        set mountEditor(value) { this.#mountEditor_accessor_storage = value; }
        _updateElementWH() {
            const bcr = this.richText.getBoundingClientRect();
            const containerHeight = this.richText.offsetHeight;
            const containerWidth = this.richText.offsetWidth;
            const textResizing = this.element.textResizing;
            if (this._lastXYWH !== this.element.xywh) {
                this.requestUpdate();
            }
            if ((containerHeight !== this.element.h &&
                textResizing === TextResizing.AUTO_HEIGHT) ||
                (textResizing === TextResizing.AUTO_WIDTH &&
                    containerWidth !== this.element.w)) {
                const [leftTopX, leftTopY] = Vec.rotWith([this.richText.offsetLeft, this.richText.offsetTop], [bcr.left + bcr.width / 2, bcr.top + bcr.height / 2], toRadian(-this.element.rotate));
                const [modelLeftTopX, modelLeftTopY] = this.edgeless.service.viewport.toModelCoord(leftTopX, leftTopY);
                this.edgeless.service.updateElement(this.element.id, {
                    xywh: new Bound(modelLeftTopX, modelLeftTopY, textResizing === TextResizing.AUTO_WIDTH
                        ? containerWidth
                        : this.element.w, containerHeight).serialize(),
                });
                this.element.group instanceof MindmapElementModel &&
                    this.element.group.layout();
                this.richText.style.minHeight = `${containerHeight}px`;
            }
            this.edgeless.service.selection.set({
                elements: [this.element.id],
                editing: true,
            });
        }
        _unmount() {
            this._resizeObserver?.disconnect();
            this._resizeObserver = null;
            if (this.element.text) {
                const text = this.element.text.toString();
                const trimed = text.trim();
                const len = trimed.length;
                if (len === 0) {
                    this.element.text = undefined;
                }
                else if (len < text.length) {
                    this.element.text = new DocCollection.Y.Text(trimed);
                }
            }
            this.element.textDisplay = true;
            this.element.group instanceof MindmapElementModel &&
                this.element.group.layout();
            this.remove();
            this.edgeless.service.selection.set({
                elements: [],
                editing: false,
            });
        }
        _initMindmapKeyBindings() {
            if (!this.element.surface.isInMindmap(this.element.id)) {
                return;
            }
            const service = this.edgeless.service;
            this._disposables.addFromEvent(this, 'keydown', evt => {
                switch (evt.key) {
                    case 'Enter': {
                        evt.preventDefault();
                        const edgeless = this.edgeless;
                        const element = this.element;
                        const mindmap = this.element.group;
                        const parent = mindmap.getParentNode(element.id) ?? element;
                        const id = mindmap.addNode(parent.id);
                        requestAnimationFrame(() => {
                            this.element = edgeless.service.getElementById(id);
                            const element = this.element;
                            this.mountEditor?.(element, edgeless);
                            if (isElementOutsideViewport(service.viewport, element, [90, 20])) {
                                const [dx, dy] = getNearestTranslation(edgeless.service.viewport, element, [100, 20]);
                                edgeless.service.viewport.smoothTranslate(service.viewport.centerX - dx, service.viewport.centerY + dy);
                            }
                        });
                        this.ownerDocument.activeElement.blur();
                        break;
                    }
                    case 'Tab': {
                        evt.preventDefault();
                        const edgeless = this.edgeless;
                        const element = this.element;
                        const mindmap = this.element.group;
                        const id = mindmap.addNode(element.id);
                        requestAnimationFrame(() => {
                            this.element = edgeless.service.getElementById(id);
                            const element = this.element;
                            this.mountEditor?.(element, edgeless);
                            if (isElementOutsideViewport(service.viewport, element, [90, 20])) {
                                const [dx, dy] = getNearestTranslation(edgeless.service.viewport, element, [100, 20]);
                                edgeless.service.viewport.smoothTranslate(service.viewport.centerX - dx, service.viewport.centerY + dy);
                            }
                        });
                        this.ownerDocument.activeElement.blur();
                        break;
                    }
                    case 'Escape': {
                        const service = this.edgeless.service;
                        const element = this.element;
                        requestAnimationFrame(() => {
                            service.selection.set({
                                elements: [element.id],
                                editing: false,
                            });
                        });
                        this.ownerDocument.activeElement.blur();
                    }
                }
            });
        }
        setKeeping(keeping) {
            this._keeping = keeping;
        }
        connectedCallback() {
            super.connectedCallback();
            this.setAttribute(RangeManager.rangeSyncExcludeAttr, 'true');
        }
        firstUpdated() {
            const dispatcher = this.edgeless.dispatcher;
            assertExists(dispatcher);
            this.element.textDisplay = false;
            this.disposables.add(this.edgeless.service.viewport.viewportUpdated.on(() => {
                this.requestUpdate();
                this.updateComplete
                    .then(() => {
                    this._updateElementWH();
                })
                    .catch(console.error);
            }));
            this.disposables.add(dispatcher.add('click', () => {
                return true;
            }));
            this.disposables.add(dispatcher.add('doubleClick', () => {
                return true;
            }));
            this.updateComplete
                .then(() => {
                if (this.element.group instanceof MindmapElementModel) {
                    this.inlineEditor.selectAll();
                }
                else {
                    this.inlineEditor.focusEnd();
                }
                this.disposables.add(this.inlineEditor.slots.renderComplete.on(() => {
                    this._updateElementWH();
                }));
                this.disposables.addFromEvent(this.inlineEditorContainer, 'blur', () => {
                    if (this._keeping)
                        return;
                    this._unmount();
                });
            })
                .catch(console.error);
            this._initMindmapKeyBindings();
        }
        async getUpdateComplete() {
            const result = await super.getUpdateComplete();
            await this.richText?.updateComplete;
            return result;
        }
        render() {
            if (!this.element.text) {
                throw new Error('Failed to mount shape editor because of no text.');
            }
            const [verticalPadding, horiPadding] = this.element.padding;
            const textResizing = this.element.textResizing;
            const viewport = this.edgeless.service.viewport;
            const zoom = viewport.zoom;
            const rect = getSelectedRect([this.element]);
            const rotate = this.element.rotate;
            const [leftTopX, leftTopY] = Vec.rotWith([rect.left, rect.top], [rect.left + rect.width / 2, rect.top + rect.height / 2], toRadian(rotate));
            const [x, y] = this.edgeless.service.viewport.toViewCoord(leftTopX, leftTopY);
            const autoWidth = textResizing === TextResizing.AUTO_WIDTH;
            const inlineEditorStyle = styleMap({
                position: 'absolute',
                left: x + 'px',
                top: y + 'px',
                width: textResizing > TextResizing.AUTO_WIDTH
                    ? rect.width + 'px'
                    : 'fit-content',
                // override rich-text style (height: 100%)
                height: 'initial',
                minHeight: textResizing === TextResizing.AUTO_WIDTH ? '1em' : `${rect.height}px`,
                maxWidth: textResizing === TextResizing.AUTO_WIDTH
                    ? this.element.maxWidth
                        ? `${this.element.maxWidth}px`
                        : undefined
                    : undefined,
                boxSizing: 'border-box',
                fontSize: this.element.fontSize + 'px',
                fontFamily: wrapFontFamily(this.element.fontFamily),
                fontWeight: this.element.fontWeight,
                lineHeight: 'normal',
                outline: 'none',
                transform: `scale(${zoom}, ${zoom}) rotate(${rotate}deg)`,
                transformOrigin: 'top left',
                color: isCssVariable(this.element.color)
                    ? `var(${this.element.color})`
                    : this.element.color,
                padding: `${verticalPadding}px ${horiPadding}px`,
                textAlign: this.element.textAlign,
                display: 'grid',
                gridTemplateColumns: '100%',
                alignItems: this.element.textVerticalAlign === 'center'
                    ? 'center'
                    : this.element.textVerticalAlign === 'bottom'
                        ? 'end'
                        : 'start',
                alignContent: 'center',
                gap: '0',
                zIndex: '1',
            });
            this._lastXYWH = this.element.xywh;
            return html ` <style>
        edgeless-shape-text-editor v-text [data-v-text] {
          overflow-wrap: ${autoWidth ? 'normal' : 'anywhere'};
          word-break: ${autoWidth ? 'normal' : 'break-word'} !important;
          white-space: ${autoWidth ? 'pre' : 'pre-wrap'} !important;
        }

        edgeless-shape-text-editor .inline-editor {
          min-width: 1px;
        }
      </style>
      <rich-text
        .yText=${this.element.text}
        .enableFormat=${false}
        .enableAutoScrollHorizontally=${false}
        style=${inlineEditorStyle}
      ></rich-text>`;
        }
        constructor() {
            super(...arguments);
            this._lastXYWH = '';
            this._keeping = false;
            this._resizeObserver = null;
            this.#richText_accessor_storage = __runInitializers(this, _richText_initializers, void 0);
            this.#element_accessor_storage = (__runInitializers(this, _richText_extraInitializers), __runInitializers(this, _element_initializers, void 0));
            this.#edgeless_accessor_storage = (__runInitializers(this, _element_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
            this.#mountEditor_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _mountEditor_initializers, undefined));
            __runInitializers(this, _mountEditor_extraInitializers);
        }
    };
    return EdgelessShapeTextEditor = _classThis;
})();
export { EdgelessShapeTextEditor };
//# sourceMappingURL=edgeless-shape-text-editor.js.map