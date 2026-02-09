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
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { INLINE_ROOT_ATTR, ZERO_WIDTH_SPACE } from '../consts.js';
import { EmbedGap } from './embed-gap.js';
let VLine = (() => {
    let _classDecorators = [customElement('v-line')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let _elements_decorators;
    let _elements_initializers = [];
    let _elements_extraInitializers = [];
    var VLine = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _elements_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _elements_decorators, { kind: "accessor", name: "elements", static: false, private: false, access: { has: obj => "elements" in obj, get: obj => obj.elements, set: (obj, value) => { obj.elements = value; } }, metadata: _metadata }, _elements_initializers, _elements_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            VLine = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        get inlineEditor() {
            const rootElement = this.closest(`[${INLINE_ROOT_ATTR}]`);
            assertExists(rootElement, 'v-line must be inside a v-root');
            const inlineEditor = rootElement.inlineEditor;
            assertExists(inlineEditor, 'v-line must be inside a v-root with inline-editor');
            return inlineEditor;
        }
        get vElements() {
            return Array.from(this.querySelectorAll('v-element'));
        }
        // vTexts.length > 0 does not mean the line is not empty,
        // you should use vElements.length or vTextLength because v-element corresponds to the actual delta
        get vTexts() {
            return Array.from(this.querySelectorAll('v-text'));
        }
        get vTextLength() {
            return this.vElements.reduce((acc, el) => acc + el.delta.insert.length, 0);
        }
        get vTextContent() {
            return this.vElements.reduce((acc, el) => acc + el.delta.insert, '');
        }
        #elements_accessor_storage = __runInitializers(this, _elements_initializers, []);
        get elements() { return this.#elements_accessor_storage; }
        set elements(value) { this.#elements_accessor_storage = value; }
        firstUpdated() {
            this.style.display = 'block';
            this.addEventListener('mousedown', e => {
                if (e.detail >= 3) {
                    e.preventDefault();
                    const range = document.createRange();
                    range.selectNodeContents(this);
                    const selection = window.getSelection();
                    assertExists(selection);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
            });
        }
        async getUpdateComplete() {
            const result = await super.getUpdateComplete();
            await Promise.all(this.vElements.map(el => el.updateComplete));
            await Promise.all(this.vTexts.map(el => el.updateComplete));
            return result;
        }
        render() {
            if (this.elements.length === 0) {
                // don't use v-element because it not correspond to the actual delta
                return html `<div><v-text .str=${ZERO_WIDTH_SPACE}></v-text></div>`;
            }
            if (!this.isConnected)
                return;
            const inlineEditor = this.inlineEditor;
            const renderElements = this.elements.flatMap(([template, delta], index) => {
                if (inlineEditor.isEmbed(delta)) {
                    if (delta.insert.length !== 1) {
                        throw new Error(`The length of embed node should only be 1.
            This seems to be an internal issue with inline editor.
            Please go to https://github.com/toeverything/blocksuite/issues
            to report it.`);
                    }
                    // we add `EmbedGap` to make cursor can be placed between embed elements
                    if (index === 0) {
                        const nextDelta = this.elements[index + 1]?.[1];
                        if (!nextDelta || inlineEditor.isEmbed(nextDelta)) {
                            return [EmbedGap, template, EmbedGap];
                        }
                        else {
                            return [EmbedGap, template];
                        }
                    }
                    else {
                        const nextDelta = this.elements[index + 1]?.[1];
                        if (!nextDelta || inlineEditor.isEmbed(nextDelta)) {
                            return [template, EmbedGap];
                        }
                        else {
                            return [template];
                        }
                    }
                }
                return template;
            });
            // prettier will generate \n and cause unexpected space and line break
            // prettier-ignore
            return html `<div style=${styleMap({
                // this padding is used to make cursor can be placed at the
                // start and end of the line when the first and last element is embed element
                padding: '0 0.5px',
                display: 'inline-block',
            })}>${renderElements}</div>`;
        }
        createRenderRoot() {
            return this;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _elements_extraInitializers);
        }
    };
    return VLine = _classThis;
})();
export { VLine };
//# sourceMappingURL=v-line.js.map