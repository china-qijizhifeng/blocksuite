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
import { html } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { Bound } from '../../../../surface-block/index.js';
let EdgelessFrameTitleEditor = (() => {
    let _classDecorators = [customElement('edgeless-frame-title-editor')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _richText_decorators;
    let _richText_initializers = [];
    let _richText_extraInitializers = [];
    let _frameModel_decorators;
    let _frameModel_initializers = [];
    let _frameModel_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    var EdgelessFrameTitleEditor = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _richText_decorators = [query('rich-text')];
            _frameModel_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _richText_decorators, { kind: "accessor", name: "richText", static: false, private: false, access: { has: obj => "richText" in obj, get: obj => obj.richText, set: (obj, value) => { obj.richText = value; } }, metadata: _metadata }, _richText_initializers, _richText_extraInitializers);
            __esDecorate(this, null, _frameModel_decorators, { kind: "accessor", name: "frameModel", static: false, private: false, access: { has: obj => "frameModel" in obj, get: obj => obj.frameModel, set: (obj, value) => { obj.frameModel = value; } }, metadata: _metadata }, _frameModel_initializers, _frameModel_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessFrameTitleEditor = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        get editorHost() {
            return this.edgeless.host;
        }
        get inlineEditor() {
            assertExists(this.richText.inlineEditor);
            return this.richText.inlineEditor;
        }
        get inlineEditorContainer() {
            return this.inlineEditor.rootElement;
        }
        get frameBlock() {
            assertExists(this.frameModel.page.root);
            const block = this.editorHost.view.viewFromPath('block', [
                this.frameModel.page.root.id,
                this.frameModel.id,
            ]);
            assertExists(block);
            return block;
        }
        #richText_accessor_storage = __runInitializers(this, _richText_initializers, void 0);
        get richText() { return this.#richText_accessor_storage; }
        set richText(value) { this.#richText_accessor_storage = value; }
        #frameModel_accessor_storage = (__runInitializers(this, _richText_extraInitializers), __runInitializers(this, _frameModel_initializers, void 0));
        get frameModel() { return this.#frameModel_accessor_storage; }
        set frameModel(value) { this.#frameModel_accessor_storage = value; }
        #edgeless_accessor_storage = (__runInitializers(this, _frameModel_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        _unmount() {
            // dispose in advance to avoid execute `this.remove()` twice
            this.disposables.dispose();
            this.edgeless.service.selection.set({
                elements: [],
                editing: false,
            });
            this.remove();
        }
        connectedCallback() {
            super.connectedCallback();
            this.setAttribute(RangeManager.rangeSyncExcludeAttr, 'true');
        }
        async getUpdateComplete() {
            const result = await super.getUpdateComplete();
            await this.richText?.updateComplete;
            return result;
        }
        firstUpdated() {
            const dispatcher = this.edgeless.dispatcher;
            assertExists(dispatcher);
            this.updateComplete
                .then(() => {
                this.inlineEditor.selectAll();
                this.inlineEditor.slots.renderComplete.on(() => {
                    this.requestUpdate();
                });
                this.disposables.add(dispatcher.add('keyDown', ctx => {
                    const state = ctx.get('keyboardState');
                    if (state.raw.key === 'Enter' && !state.raw.isComposing) {
                        this._unmount();
                        return true;
                    }
                    requestAnimationFrame(() => {
                        this.requestUpdate();
                    });
                    return false;
                }));
                this.disposables.add(this.edgeless.service.viewport.viewportUpdated.on(() => {
                    this.requestUpdate();
                }));
                this.disposables.add(dispatcher.add('click', () => true));
                this.disposables.add(dispatcher.add('doubleClick', () => true));
                this.disposables.addFromEvent(this.inlineEditorContainer, 'blur', () => {
                    this._unmount();
                });
            })
                .catch(console.error);
        }
        render() {
            const viewport = this.edgeless.service.viewport;
            const bound = Bound.deserialize(this.frameModel.xywh);
            const [x, y] = viewport.toViewCoord(bound.x, bound.y);
            const isInner = this.edgeless.service.layer.framesGrid.has(this.frameModel.elementBound, true, true, new Set([this.frameModel]));
            const inlineEditorStyle = styleMap({
                transformOrigin: 'top left',
                borderRadius: '4px',
                width: 'fit-content',
                maxHeight: '30px',
                lineHeight: '20px',
                padding: '4px 10px',
                fontSize: '14px',
                position: 'absolute',
                left: (isInner ? x + 8 : x) + 'px',
                top: (isInner ? y + 8 : y - 38) + 'px',
                minWidth: '8px',
                fontFamily: 'var(--affine-font-family)',
                background: isInner
                    ? 'var(--affine-white)'
                    : 'var(--affine-text-primary-color)',
                color: isInner
                    ? 'var(--affine-text-secondary-color)'
                    : 'var(--affine-white)',
                outline: 'none',
                zIndex: '1',
                border: `1px solid
        var(--affine-primary-color)`,
                boxShadow: `0px 0px 0px 2px rgba(30, 150, 235, 0.3)`,
            });
            return html `<rich-text
      .yText=${this.frameModel.title.yText}
      .enableFormat=${false}
      .enableAutoScrollHorizontally=${false}
      style=${inlineEditorStyle}
    ></rich-text>`;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _edgeless_extraInitializers);
        }
    };
    return EdgelessFrameTitleEditor = _classThis;
})();
export { EdgelessFrameTitleEditor };
//# sourceMappingURL=edgeless-frame-title-editor.js.map