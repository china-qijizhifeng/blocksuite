/* eslint-disable lit/binding-positions, lit/no-invalid-html */
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
import { handleError } from '@blocksuite/global/exceptions';
import { assertExists, Slot } from '@blocksuite/global/utils';
import { BlockViewType } from '@blocksuite/store';
import { css, LitElement, nothing, } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { html, unsafeStatic } from 'lit/static-html.js';
import { BlockStdScope } from '../../scope/index.js';
import { RangeManager } from '../utils/range-manager.js';
import { WithDisposable } from '../utils/with-disposable.js';
import { ShadowlessElement } from './shadowless-element.js';
let EditorHost = (() => {
    let _classDecorators = [customElement('editor-host')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _specs_decorators;
    let _specs_initializers = [];
    let _specs_extraInitializers = [];
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _blockIdAttr_decorators;
    let _blockIdAttr_initializers = [];
    let _blockIdAttr_extraInitializers = [];
    let _widgetIdAttr_decorators;
    let _widgetIdAttr_initializers = [];
    let _widgetIdAttr_extraInitializers = [];
    var EditorHost = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#specs_accessor_storage = __runInitializers(this, _specs_initializers, void 0);
            this.#doc_accessor_storage = (__runInitializers(this, _specs_extraInitializers), __runInitializers(this, _doc_initializers, void 0));
            this.#blockIdAttr_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _blockIdAttr_initializers, 'data-block-id'));
            this.#widgetIdAttr_accessor_storage = (__runInitializers(this, _blockIdAttr_extraInitializers), __runInitializers(this, _widgetIdAttr_initializers, 'data-widget-id'));
            this.std = __runInitializers(this, _widgetIdAttr_extraInitializers);
            this.rangeManager = null;
            this.slots = {
                unmounted: new Slot(),
            };
            this._renderModel = (model) => {
                const { flavour } = model;
                const block = this.doc.getBlock(model.id);
                if (block?.blockViewType === BlockViewType.Hidden) {
                    return html ``;
                }
                const schema = this.doc.schema.flavourSchemaMap.get(flavour);
                const view = this.std.spec.getView(flavour);
                if (!schema || !block || !view) {
                    console.warn(`Cannot find render flavour ${flavour}.`);
                    return html `${nothing}`;
                }
                const tag = view.component;
                const widgets = view.widgets
                    ? Object.entries(view.widgets).reduce((mapping, [key, tag]) => {
                        const template = html `<${tag}
            ${unsafeStatic(this.widgetIdAttr)}=${key}
            .host=${this}
            .model=${model}
            .doc=${this.doc}></${tag}>`;
                        return {
                            ...mapping,
                            [key]: template,
                        };
                    }, {})
                    : {};
                return html `<${tag}
      ${unsafeStatic(this.blockIdAttr)}=${model.id}
      .host=${this}
      .doc=${this.doc}
      .model=${model}
      .widgets=${widgets}
      .viewType=${block.blockViewType}
    ></${tag}>`;
            };
            /**
             * @deprecated
             *
             * This method is deprecated. Use `renderSpecPortal` instead.
             */
            this.renderModel = (model) => {
                return this._renderModel(model);
            };
            this.renderSpecPortal = (doc, specs) => {
                return html `
      <editor-host
        .doc=${doc}
        .specs=${specs}
        contenteditable="false"
      ></editor-host>
    `;
            };
            this.renderChildren = (model) => {
                return html `${repeat(model.children, child => child.id, child => this._renderModel(child))}`;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _specs_decorators = [property({ attribute: false })];
            _doc_decorators = [property({ attribute: false })];
            _blockIdAttr_decorators = [property({ attribute: false })];
            _widgetIdAttr_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _specs_decorators, { kind: "accessor", name: "specs", static: false, private: false, access: { has: obj => "specs" in obj, get: obj => obj.specs, set: (obj, value) => { obj.specs = value; } }, metadata: _metadata }, _specs_initializers, _specs_extraInitializers);
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _blockIdAttr_decorators, { kind: "accessor", name: "blockIdAttr", static: false, private: false, access: { has: obj => "blockIdAttr" in obj, get: obj => obj.blockIdAttr, set: (obj, value) => { obj.blockIdAttr = value; } }, metadata: _metadata }, _blockIdAttr_initializers, _blockIdAttr_extraInitializers);
            __esDecorate(this, null, _widgetIdAttr_decorators, { kind: "accessor", name: "widgetIdAttr", static: false, private: false, access: { has: obj => "widgetIdAttr" in obj, get: obj => obj.widgetIdAttr, set: (obj, value) => { obj.widgetIdAttr = value; } }, metadata: _metadata }, _widgetIdAttr_initializers, _widgetIdAttr_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EditorHost = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get command() {
            return this.std.command;
        }
        get event() {
            return this.std.event;
        }
        get selection() {
            return this.std.selection;
        }
        get view() {
            return this.std.view;
        }
        get spec() {
            return this.std.spec;
        }
        static { this.styles = css `
    editor-host {
      outline: none;
      isolation: isolate;
    }
  `; }
        #specs_accessor_storage;
        get specs() { return this.#specs_accessor_storage; }
        set specs(value) { this.#specs_accessor_storage = value; }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #blockIdAttr_accessor_storage;
        get blockIdAttr() { return this.#blockIdAttr_accessor_storage; }
        set blockIdAttr(value) { this.#blockIdAttr_accessor_storage = value; }
        #widgetIdAttr_accessor_storage;
        get widgetIdAttr() { return this.#widgetIdAttr_accessor_storage; }
        set widgetIdAttr(value) { this.#widgetIdAttr_accessor_storage = value; }
        willUpdate(changedProperties) {
            if (changedProperties.has('specs')) {
                this.std.spec.applySpecs(this.specs);
            }
            super.willUpdate(changedProperties);
        }
        async getUpdateComplete() {
            try {
                const result = await super.getUpdateComplete();
                const rootModel = this.doc.root;
                assertExists(rootModel);
                const view = this.std.spec.getView(rootModel.flavour);
                assertExists(view);
                const widgetTags = Object.values(view.widgets ?? {});
                const elementsTags = [view.component, ...widgetTags];
                await Promise.all(elementsTags.map(tag => {
                    const element = this.renderRoot.querySelector(tag._$litStatic$);
                    if (element instanceof LitElement) {
                        return element.updateComplete;
                    }
                    return;
                }));
                return result;
            }
            catch (e) {
                if (e instanceof Error) {
                    handleError(e);
                }
                else {
                    console.error(e);
                }
                return true;
            }
        }
        connectedCallback() {
            super.connectedCallback();
            if (!this.doc.root) {
                throw new Error('This doc is missing root block. Please initialize the default block structure before connecting the editor to DOM.');
            }
            this.std = new BlockStdScope({
                host: this,
                doc: this.doc,
            });
            this.std.mount();
            this.std.spec.applySpecs(this.specs);
            this.rangeManager = new RangeManager(this);
            this.tabIndex = 0;
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.std.unmount();
            this.rangeManager = null;
            this.slots.unmounted.emit();
        }
        render() {
            const { root } = this.doc;
            if (!root)
                return nothing;
            return this._renderModel(root);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EditorHost = _classThis;
})();
export { EditorHost };
//# sourceMappingURL=lit-host.js.map