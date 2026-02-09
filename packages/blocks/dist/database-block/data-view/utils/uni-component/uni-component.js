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
import { ShadowlessElement } from '@blocksuite/block-std';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
export const renderUniLit = (uni, props, options) => {
    return html ` <uni-lit
    .uni="${uni}"
    .props="${props}"
    .ref="${options?.ref}"
    style=${options?.style ? styleMap(options?.style) : ''}
  ></uni-lit>`;
};
let UniLit = (() => {
    let _classDecorators = [customElement('uni-lit')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = ShadowlessElement;
    let _uni_decorators;
    let _uni_initializers = [];
    let _uni_extraInitializers = [];
    let _props_decorators;
    let _props_initializers = [];
    let _props_extraInitializers = [];
    let _ref_decorators;
    let _ref_initializers = [];
    let _ref_extraInitializers = [];
    var UniLit = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#uni_accessor_storage = __runInitializers(this, _uni_initializers, undefined);
            this.#props_accessor_storage = (__runInitializers(this, _uni_extraInitializers), __runInitializers(this, _props_initializers, void 0));
            this.#ref_accessor_storage = (__runInitializers(this, _props_extraInitializers), __runInitializers(this, _ref_initializers, undefined));
            this.uniReturn = __runInitializers(this, _ref_extraInitializers);
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _uni_decorators = [property({ attribute: false })];
            _props_decorators = [property({ attribute: false })];
            _ref_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _uni_decorators, { kind: "accessor", name: "uni", static: false, private: false, access: { has: obj => "uni" in obj, get: obj => obj.uni, set: (obj, value) => { obj.uni = value; } }, metadata: _metadata }, _uni_initializers, _uni_extraInitializers);
            __esDecorate(this, null, _props_decorators, { kind: "accessor", name: "props", static: false, private: false, access: { has: obj => "props" in obj, get: obj => obj.props, set: (obj, value) => { obj.props = value; } }, metadata: _metadata }, _props_initializers, _props_extraInitializers);
            __esDecorate(this, null, _ref_decorators, { kind: "accessor", name: "ref", static: false, private: false, access: { has: obj => "ref" in obj, get: obj => obj.ref, set: (obj, value) => { obj.ref = value; } }, metadata: _metadata }, _ref_initializers, _ref_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            UniLit = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get expose() {
            return this.uniReturn?.expose;
        }
        static { this.styles = css `
    uni-lit {
      display: contents;
    }
  `; }
        #uni_accessor_storage;
        get uni() { return this.#uni_accessor_storage; }
        set uni(value) { this.#uni_accessor_storage = value; }
        #props_accessor_storage;
        get props() { return this.#props_accessor_storage; }
        set props(value) { this.#props_accessor_storage = value; }
        #ref_accessor_storage;
        get ref() { return this.#ref_accessor_storage; }
        set ref(value) { this.#ref_accessor_storage = value; }
        mount() {
            this.uniReturn = this.uni?.(this, this.props);
            if (this.ref) {
                // @ts-expect-error
                this.ref.value = this.uniReturn?.expose;
            }
        }
        unmount() {
            this.uniReturn?.unmount();
        }
        updated(_changedProperties) {
            super.updated(_changedProperties);
            if (_changedProperties.has('uni')) {
                this.unmount();
                this.mount();
            }
            else if (_changedProperties.has('props')) {
                this.uniReturn?.update(this.props);
            }
        }
        render() {
            return html ``;
        }
        connectedCallback() {
            super.connectedCallback();
            this.mount();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this.unmount();
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return UniLit = _classThis;
})();
export { UniLit };
export const createUniComponentFromWebComponent = (component) => {
    return (ele, props) => {
        const ins = new component();
        Object.assign(ins, props);
        ele.append(ins);
        return {
            update: props => {
                Object.assign(ins, props);
            },
            unmount: () => {
                ins.remove();
            },
            expose: ins,
        };
    };
};
let UniAnyRender = (() => {
    let _classDecorators = [customElement('uni-any-render')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = ShadowlessElement;
    let _props_decorators;
    let _props_initializers = [];
    let _props_extraInitializers = [];
    let _expose_decorators;
    let _expose_initializers = [];
    let _expose_extraInitializers = [];
    let _renderTemplate_decorators;
    let _renderTemplate_initializers = [];
    let _renderTemplate_extraInitializers = [];
    var UniAnyRender = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _props_decorators = [property({ attribute: false })];
            _expose_decorators = [property({ attribute: false })];
            _renderTemplate_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _props_decorators, { kind: "accessor", name: "props", static: false, private: false, access: { has: obj => "props" in obj, get: obj => obj.props, set: (obj, value) => { obj.props = value; } }, metadata: _metadata }, _props_initializers, _props_extraInitializers);
            __esDecorate(this, null, _expose_decorators, { kind: "accessor", name: "expose", static: false, private: false, access: { has: obj => "expose" in obj, get: obj => obj.expose, set: (obj, value) => { obj.expose = value; } }, metadata: _metadata }, _expose_initializers, _expose_extraInitializers);
            __esDecorate(this, null, _renderTemplate_decorators, { kind: "accessor", name: "renderTemplate", static: false, private: false, access: { has: obj => "renderTemplate" in obj, get: obj => obj.renderTemplate, set: (obj, value) => { obj.renderTemplate = value; } }, metadata: _metadata }, _renderTemplate_initializers, _renderTemplate_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            UniAnyRender = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        #props_accessor_storage = __runInitializers(this, _props_initializers, void 0);
        get props() { return this.#props_accessor_storage; }
        set props(value) { this.#props_accessor_storage = value; }
        #expose_accessor_storage = (__runInitializers(this, _props_extraInitializers), __runInitializers(this, _expose_initializers, void 0));
        get expose() { return this.#expose_accessor_storage; }
        set expose(value) { this.#expose_accessor_storage = value; }
        #renderTemplate_accessor_storage = (__runInitializers(this, _expose_extraInitializers), __runInitializers(this, _renderTemplate_initializers, void 0));
        get renderTemplate() { return this.#renderTemplate_accessor_storage; }
        set renderTemplate(value) { this.#renderTemplate_accessor_storage = value; }
        render() {
            return this.renderTemplate(this.props, this.expose);
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _renderTemplate_extraInitializers);
        }
    };
    return UniAnyRender = _classThis;
})();
export const defineUniComponent = (renderTemplate) => {
    return (ele, props) => {
        const ins = new UniAnyRender();
        ins.props = props;
        ins.expose = {};
        ins.renderTemplate = renderTemplate;
        ele.append(ins);
        return {
            update: props => {
                ins.props = props;
            },
            unmount: () => {
                ins.remove();
            },
            expose: ins.expose,
        };
    };
};
//# sourceMappingURL=uni-component.js.map