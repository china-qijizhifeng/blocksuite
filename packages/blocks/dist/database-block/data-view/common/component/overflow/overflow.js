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
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { css, html } from 'lit';
import { customElement, property, query, queryAll, state, } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
let Overflow = (() => {
    let _classDecorators = [customElement('component-overflow')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _renderItem_decorators;
    let _renderItem_initializers = [];
    let _renderItem_extraInitializers = [];
    let _renderMore_decorators;
    let _renderMore_initializers = [];
    let _renderMore_extraInitializers = [];
    let _renderCount_decorators;
    let _renderCount_initializers = [];
    let _renderCount_extraInitializers = [];
    let _items_decorators;
    let _items_initializers = [];
    let _items_extraInitializers = [];
    let _more_decorators;
    let _more_initializers = [];
    let _more_extraInitializers = [];
    var Overflow = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _renderItem_decorators = [property({ attribute: false })];
            _renderMore_decorators = [property({ attribute: false })];
            _renderCount_decorators = [state()];
            _items_decorators = [queryAll(':scope > .component-overflow-item')];
            _more_decorators = [query(':scope > .component-overflow-more')];
            __esDecorate(this, null, _renderItem_decorators, { kind: "accessor", name: "renderItem", static: false, private: false, access: { has: obj => "renderItem" in obj, get: obj => obj.renderItem, set: (obj, value) => { obj.renderItem = value; } }, metadata: _metadata }, _renderItem_initializers, _renderItem_extraInitializers);
            __esDecorate(this, null, _renderMore_decorators, { kind: "accessor", name: "renderMore", static: false, private: false, access: { has: obj => "renderMore" in obj, get: obj => obj.renderMore, set: (obj, value) => { obj.renderMore = value; } }, metadata: _metadata }, _renderMore_initializers, _renderMore_extraInitializers);
            __esDecorate(this, null, _renderCount_decorators, { kind: "accessor", name: "renderCount", static: false, private: false, access: { has: obj => "renderCount" in obj, get: obj => obj.renderCount, set: (obj, value) => { obj.renderCount = value; } }, metadata: _metadata }, _renderCount_initializers, _renderCount_extraInitializers);
            __esDecorate(this, null, _items_decorators, { kind: "accessor", name: "items", static: false, private: false, access: { has: obj => "items" in obj, get: obj => obj.items, set: (obj, value) => { obj.items = value; } }, metadata: _metadata }, _items_initializers, _items_extraInitializers);
            __esDecorate(this, null, _more_decorators, { kind: "accessor", name: "more", static: false, private: false, access: { has: obj => "more" in obj, get: obj => obj.more, set: (obj, value) => { obj.more = value; } }, metadata: _metadata }, _more_initializers, _more_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Overflow = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    component-overflow {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      position: relative;
    }

    .component-overflow-item {
    }
    .component-overflow-item.hidden {
      opacity: 0;
      pointer-events: none;
      position: absolute;
    }
  `; }
        #renderItem_accessor_storage = __runInitializers(this, _renderItem_initializers, void 0);
        get renderItem() { return this.#renderItem_accessor_storage; }
        set renderItem(value) { this.#renderItem_accessor_storage = value; }
        #renderMore_accessor_storage = (__runInitializers(this, _renderItem_extraInitializers), __runInitializers(this, _renderMore_initializers, void 0));
        get renderMore() { return this.#renderMore_accessor_storage; }
        set renderMore(value) { this.#renderMore_accessor_storage = value; }
        #renderCount_accessor_storage = (__runInitializers(this, _renderMore_extraInitializers), __runInitializers(this, _renderCount_initializers, 0));
        get renderCount() { return this.#renderCount_accessor_storage; }
        set renderCount(value) { this.#renderCount_accessor_storage = value; }
        #items_accessor_storage = (__runInitializers(this, _renderCount_extraInitializers), __runInitializers(this, _items_initializers, void 0));
        get items() { return this.#items_accessor_storage; }
        set items(value) { this.#items_accessor_storage = value; }
        #more_accessor_storage = (__runInitializers(this, _items_extraInitializers), __runInitializers(this, _more_initializers, void 0));
        get more() { return this.#more_accessor_storage; }
        set more(value) { this.#more_accessor_storage = value; }
        updated(_changedProperties) {
            super.updated(_changedProperties);
            requestAnimationFrame(() => {
                this.adjustStyle();
            });
        }
        connectedCallback() {
            super.connectedCallback();
            const resize = new ResizeObserver(() => {
                this.adjustStyle();
            });
            resize.observe(this);
            this.disposables.add(() => {
                resize.unobserve(this);
            });
        }
        adjustStyle() {
            let maxWidth = this.getBoundingClientRect().width -
                this.more.getBoundingClientRect().width;
            for (let i = 0; i < this.items.length; i++) {
                const width = this.items[i].getBoundingClientRect().width;
                maxWidth -= width;
                if (maxWidth < 0) {
                    this.renderCount = i;
                    return;
                }
            }
            this.renderCount = this.items.length;
        }
        render() {
            return html `
      ${repeat(this.renderItem, (render, index) => {
                const className = classMap({
                    'component-overflow-item': true,
                    hidden: index >= this.renderCount,
                });
                return html `<div class="${className}">${render()}</div>`;
            })}
      <div class="component-overflow-more">
        ${this.renderMore(this.renderCount)}
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _more_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return Overflow = _classThis;
})();
export { Overflow };
//# sourceMappingURL=overflow.js.map