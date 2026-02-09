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
import { BlockViewType } from '@blocksuite/store';
import { nothing, render } from 'lit';
import { property, state } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { when } from 'lit/directives/when.js';
import { html } from 'lit/static-html.js';
import { WithDisposable } from '../utils/with-disposable.js';
import { ShadowlessElement } from './shadowless-element.js';
let BlockElement = (() => {
    let _classSuper = WithDisposable(ShadowlessElement);
    let __renderers_decorators;
    let __renderers_initializers = [];
    let __renderers_extraInitializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _model_decorators;
    let _model_initializers = [];
    let _model_extraInitializers = [];
    let _content_decorators;
    let _content_initializers = [];
    let _content_extraInitializers = [];
    let _viewType_decorators;
    let _viewType_initializers = [];
    let _viewType_extraInitializers = [];
    let _widgets_decorators;
    let _widgets_initializers = [];
    let _widgets_extraInitializers = [];
    let _doc_decorators;
    let _doc_initializers = [];
    let _doc_extraInitializers = [];
    let _dirty_decorators;
    let _dirty_initializers = [];
    let _dirty_extraInitializers = [];
    let _selected_decorators;
    let _selected_initializers = [];
    let _selected_extraInitializers = [];
    return class BlockElement extends _classSuper {
        constructor() {
            super(...arguments);
            this.#_renderers_accessor_storage = __runInitializers(this, __renderers_initializers, [
                this.renderBlock,
                this._renderMismatchBlock,
                this._renderViewType,
            ]);
            this.#host_accessor_storage = (__runInitializers(this, __renderers_extraInitializers), __runInitializers(this, _host_initializers, void 0));
            this.#model_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _model_initializers, void 0));
            this.#content_accessor_storage = (__runInitializers(this, _model_extraInitializers), __runInitializers(this, _content_initializers, null));
            this.#viewType_accessor_storage = (__runInitializers(this, _content_extraInitializers), __runInitializers(this, _viewType_initializers, BlockViewType.Display));
            this.#widgets_accessor_storage = (__runInitializers(this, _viewType_extraInitializers), __runInitializers(this, _widgets_initializers, void 0));
            this.#doc_accessor_storage = (__runInitializers(this, _widgets_extraInitializers), __runInitializers(this, _doc_initializers, void 0));
            this.#dirty_accessor_storage = (__runInitializers(this, _doc_extraInitializers), __runInitializers(this, _dirty_initializers, false));
            this.#selected_accessor_storage = (__runInitializers(this, _dirty_extraInitializers), __runInitializers(this, _selected_initializers, null));
            this.service = __runInitializers(this, _selected_extraInitializers);
            this.handleEvent = (name, handler, options) => {
                assertExists(this.path, 'Cannot bind block level hotkey without path');
                const config = {
                    flavour: options?.global
                        ? undefined
                        : options?.flavour
                            ? this.model.flavour
                            : undefined,
                    path: options?.global || options?.flavour ? undefined : this.path,
                };
                this._disposables.add(this.host.event.add(name, handler, config));
            };
            this.renderChildren = (model) => {
                return this.host.renderChildren(model);
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __renderers_decorators = [state()];
            _host_decorators = [property({ attribute: false })];
            _model_decorators = [property({ attribute: false })];
            _content_decorators = [property({ attribute: false })];
            _viewType_decorators = [property({ attribute: false })];
            _widgets_decorators = [property({
                    attribute: false,
                    hasChanged(value, oldValue) {
                        if (!value || !oldValue) {
                            return value !== oldValue;
                        }
                        // Is empty object
                        if (!Object.keys(value).length && !Object.keys(oldValue).length) {
                            return false;
                        }
                        return value !== oldValue;
                    },
                })];
            _doc_decorators = [property({ attribute: false })];
            _dirty_decorators = [property({ attribute: false })];
            _selected_decorators = [state({
                    hasChanged(value, oldValue) {
                        if (!value || !oldValue) {
                            return value !== oldValue;
                        }
                        return !value?.equals(oldValue);
                    },
                })];
            __esDecorate(this, null, __renderers_decorators, { kind: "accessor", name: "_renderers", static: false, private: false, access: { has: obj => "_renderers" in obj, get: obj => obj._renderers, set: (obj, value) => { obj._renderers = value; } }, metadata: _metadata }, __renderers_initializers, __renderers_extraInitializers);
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _model_decorators, { kind: "accessor", name: "model", static: false, private: false, access: { has: obj => "model" in obj, get: obj => obj.model, set: (obj, value) => { obj.model = value; } }, metadata: _metadata }, _model_initializers, _model_extraInitializers);
            __esDecorate(this, null, _content_decorators, { kind: "accessor", name: "content", static: false, private: false, access: { has: obj => "content" in obj, get: obj => obj.content, set: (obj, value) => { obj.content = value; } }, metadata: _metadata }, _content_initializers, _content_extraInitializers);
            __esDecorate(this, null, _viewType_decorators, { kind: "accessor", name: "viewType", static: false, private: false, access: { has: obj => "viewType" in obj, get: obj => obj.viewType, set: (obj, value) => { obj.viewType = value; } }, metadata: _metadata }, _viewType_initializers, _viewType_extraInitializers);
            __esDecorate(this, null, _widgets_decorators, { kind: "accessor", name: "widgets", static: false, private: false, access: { has: obj => "widgets" in obj, get: obj => obj.widgets, set: (obj, value) => { obj.widgets = value; } }, metadata: _metadata }, _widgets_initializers, _widgets_extraInitializers);
            __esDecorate(this, null, _doc_decorators, { kind: "accessor", name: "doc", static: false, private: false, access: { has: obj => "doc" in obj, get: obj => obj.doc, set: (obj, value) => { obj.doc = value; } }, metadata: _metadata }, _doc_initializers, _doc_extraInitializers);
            __esDecorate(this, null, _dirty_decorators, { kind: "accessor", name: "dirty", static: false, private: false, access: { has: obj => "dirty" in obj, get: obj => obj.dirty, set: (obj, value) => { obj.dirty = value; } }, metadata: _metadata }, _dirty_initializers, _dirty_extraInitializers);
            __esDecorate(this, null, _selected_decorators, { kind: "accessor", name: "selected", static: false, private: false, access: { has: obj => "selected" in obj, get: obj => obj.selected, set: (obj, value) => { obj.selected = value; } }, metadata: _metadata }, _selected_initializers, _selected_extraInitializers);
            if (_metadata) Object.defineProperty(this, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get parentBlockElement() {
            const el = this.parentElement;
            // TODO(mirone/#6534): find a better way to get block element from a node
            return el?.closest('[data-block-id]');
        }
        get childBlockElements() {
            const childModels = this.model.children;
            return childModels
                .map(child => {
                return this.std.view.getBlock(child.id);
            })
                .filter((x) => !!x);
        }
        get rootElement() {
            const rootId = this.doc.root?.id;
            if (!rootId) {
                return null;
            }
            const rootElement = this.host.view.getBlock(rootId);
            return rootElement ?? null;
        }
        get topContenteditableElement() {
            return this.rootElement;
        }
        get flavour() {
            return this.model.flavour;
        }
        get widgetElements() {
            return Object.keys(this.widgets).reduce((mapping, key) => {
                return {
                    ...mapping,
                    [key]: this.host.view.viewFromPath('widget', [...this.path, key]),
                };
            }, {});
        }
        get selection() {
            return this.host.selection;
        }
        get std() {
            return this.host.std;
        }
        get blockId() {
            return this.dataset.blockId;
        }
        get isVersionMismatch() {
            const schema = this.doc.schema.flavourSchemaMap.get(this.model.flavour);
            assertExists(schema, `Cannot find schema for flavour ${this.model.flavour}`);
            const expectedVersion = schema.version;
            const actualVersion = this.model.version;
            if (expectedVersion !== actualVersion) {
                console.warn(`Version mismatch for block ${this.model.id}, expected ${expectedVersion}, actual ${actualVersion}`);
                return true;
            }
            return false;
        }
        #_renderers_accessor_storage;
        get _renderers() { return this.#_renderers_accessor_storage; }
        set _renderers(value) { this.#_renderers_accessor_storage = value; }
        #host_accessor_storage;
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #model_accessor_storage;
        get model() { return this.#model_accessor_storage; }
        set model(value) { this.#model_accessor_storage = value; }
        #content_accessor_storage;
        get content() { return this.#content_accessor_storage; }
        set content(value) { this.#content_accessor_storage = value; }
        #viewType_accessor_storage;
        get viewType() { return this.#viewType_accessor_storage; }
        set viewType(value) { this.#viewType_accessor_storage = value; }
        #widgets_accessor_storage;
        get widgets() { return this.#widgets_accessor_storage; }
        set widgets(value) { this.#widgets_accessor_storage = value; }
        #doc_accessor_storage;
        get doc() { return this.#doc_accessor_storage; }
        set doc(value) { this.#doc_accessor_storage = value; }
        #dirty_accessor_storage;
        get dirty() { return this.#dirty_accessor_storage; }
        set dirty(value) { this.#dirty_accessor_storage = value; }
        #selected_accessor_storage;
        get selected() { return this.#selected_accessor_storage; }
        set selected(value) { this.#selected_accessor_storage = value; }
        _renderViewType(content) {
            return choose(this.viewType, [
                [BlockViewType.Display, () => content],
                [BlockViewType.Hidden, () => nothing],
                [BlockViewType.Bypass, () => this.renderChildren(this.model)],
            ]);
        }
        _renderMismatchBlock(content) {
            return when(this.isVersionMismatch, () => {
                const schema = this.doc.schema.flavourSchemaMap.get(this.model.flavour);
                assertExists(schema, `Cannot find schema for flavour ${this.model.flavour}`);
                const expectedVersion = schema.version;
                const actualVersion = this.model.version;
                return this.renderVersionMismatch(expectedVersion, actualVersion);
            }, () => content);
        }
        async getUpdateComplete() {
            const result = await super.getUpdateComplete();
            await Promise.all(this.childBlockElements.map(el => el.updateComplete));
            return result;
        }
        update(changedProperties) {
            // In some cases, the DOM structure is directly modified, causing Lit to lose synchronization with the DOM structure.
            // We can restore this state through the `dirty` property.
            if (this.dirty) {
                // Here we made some hacks by referring to the source code of Lit.
                // https://github.com/lit/lit/blob/273ad4e23b8ec97f1a5015dbf398104f535f9c34/packages/lit-element/src/lit-element.ts#L162-L163
                // https://github.com/lit/lit/blob/273ad4e23b8ec97f1a5015dbf398104f535f9c34/packages/reactive-element/src/reactive-element.ts#L1586-L1589
                // https://github.com/lit/lit/blob/273ad4e23b8ec97f1a5015dbf398104f535f9c34/packages/reactive-element/src/reactive-element.ts#L1509-L1512
                //@ts-ignore
                this.__reflectingProperties &&= this.__reflectingProperties.forEach(p => 
                //@ts-ignore
                this.__propertyToAttribute(p, this[p]));
                //@ts-ignore
                this._$changedProperties = new Map();
                this.isUpdatePending = false;
                //@ts-ignore
                this.__childPart = render(nothing, this.renderRoot);
                this.updateComplete
                    .then(() => {
                    this.dirty = false;
                })
                    .catch(console.error);
            }
            else {
                super.update(changedProperties);
            }
        }
        bindHotKey(keymap, options) {
            assertExists(this.path, 'Cannot bind block level hotkey without path');
            const config = {
                flavour: options?.global
                    ? undefined
                    : options?.flavour
                        ? this.model.flavour
                        : undefined,
                path: options?.global || options?.flavour ? undefined : this.path,
            };
            const dispose = this.host.event.bindHotkey(keymap, config);
            this._disposables.add(dispose);
            return dispose;
        }
        connectedCallback() {
            super.connectedCallback();
            this.std.view.setBlock(this);
            const disposable = this.std.doc.slots.blockUpdated.on(({ type, id }) => {
                if (id === this.model.id && type === 'delete') {
                    this.std.view.deleteBlock(this);
                    disposable.dispose();
                }
            });
            this.service = this.host.std.spec.getService(this.model.flavour);
            this.path = this.host.view.calculatePath(this.model);
            this._disposables.add(disposable);
            this._disposables.add(this.model.propsUpdated.on(() => {
                this.requestUpdate();
            }));
            this._disposables.add(this.model.childrenUpdated.on(() => {
                this.requestUpdate();
            }));
            this._disposables.add(this.host.selection.slots.changed.on(selections => {
                const selection = selections.find(selection => {
                    return selection.blockId === this.blockId;
                });
                if (!selection) {
                    this.selected = null;
                    return;
                }
                this.selected = selection;
            }));
            this.service.specSlots.viewConnected.emit({
                service: this.service,
                component: this,
            });
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.service.specSlots.viewDisconnected.emit({
                service: this.service,
                component: this,
            });
        }
        renderBlock() {
            return nothing;
        }
        renderVersionMismatch(expectedVersion, actualVersion) {
            return html `
      <dl class="version-mismatch-warning" contenteditable="false">
        <dt>
          <h4>Block Version Mismatched</h4>
        </dt>
        <dd>
          <p>
            We can not render this <var>${this.model.flavour}</var> block
            because the version is mismatched.
          </p>
          <p>Editor version: <var>${expectedVersion}</var></p>
          <p>Data version: <var>${actualVersion}</var></p>
        </dd>
      </dl>
    `;
        }
        addRenderer(renderer) {
            this._renderers.push(renderer);
        }
        render() {
            return this._renderers.reduce((acc, cur) => cur.call(this, acc), nothing);
        }
    };
})();
export { BlockElement };
//# sourceMappingURL=block-element.js.map