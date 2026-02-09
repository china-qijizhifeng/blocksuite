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
import { assertExists } from '@blocksuite/global/utils';
import { ZERO_WIDTH_SPACE } from '@blocksuite/inline';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getThemeMode } from '../_common/utils/query.js';
import { DARK_THEME, LIGHT_THEME } from './utils/consts.js';
import { highlightCache, } from './utils/highlight-cache.js';
let AffineCodeLine = (() => {
    let _classDecorators = [customElement('affine-code-line')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = ShadowlessElement;
    let _delta_decorators;
    let _delta_initializers = [];
    let _delta_extraInitializers = [];
    let _highlightOptionsGetter_decorators;
    let _highlightOptionsGetter_initializers = [];
    let _highlightOptionsGetter_extraInitializers = [];
    var AffineCodeLine = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _delta_decorators = [property({ type: Object })];
            _highlightOptionsGetter_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _delta_decorators, { kind: "accessor", name: "delta", static: false, private: false, access: { has: obj => "delta" in obj, get: obj => obj.delta, set: (obj, value) => { obj.delta = value; } }, metadata: _metadata }, _delta_initializers, _delta_extraInitializers);
            __esDecorate(this, null, _highlightOptionsGetter_decorators, { kind: "accessor", name: "highlightOptionsGetter", static: false, private: false, access: { has: obj => "highlightOptionsGetter" in obj, get: obj => obj.highlightOptionsGetter, set: (obj, value) => { obj.highlightOptionsGetter = value; } }, metadata: _metadata }, _highlightOptionsGetter_initializers, _highlightOptionsGetter_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineCodeLine = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        #delta_accessor_storage = __runInitializers(this, _delta_initializers, {
            insert: ZERO_WIDTH_SPACE,
        });
        get delta() { return this.#delta_accessor_storage; }
        set delta(value) { this.#delta_accessor_storage = value; }
        #highlightOptionsGetter_accessor_storage = (__runInitializers(this, _delta_extraInitializers), __runInitializers(this, _highlightOptionsGetter_initializers, null));
        get highlightOptionsGetter() { return this.#highlightOptionsGetter_accessor_storage; }
        set highlightOptionsGetter(value) { this.#highlightOptionsGetter_accessor_storage = value; }
        render() {
            assertExists(this.highlightOptionsGetter, 'highlightOptionsGetter is not set');
            const { lang, highlighter } = this.highlightOptionsGetter();
            if (!highlighter || !highlighter.getLoadedLanguages().includes(lang)) {
                return html `<span><v-text .str=${this.delta.insert}></v-text></span>`;
            }
            const mode = getThemeMode();
            const cacheKey = `${this.delta.insert}-${lang}-${mode}`;
            const cache = highlightCache.get(cacheKey);
            let tokens = [
                {
                    content: this.delta.insert,
                },
            ];
            if (cache) {
                tokens = cache;
            }
            else {
                tokens = highlighter.codeToTokensBase(this.delta.insert, {
                    lang,
                    theme: mode === 'dark' ? DARK_THEME : LIGHT_THEME,
                })[0];
                highlightCache.set(cacheKey, tokens);
            }
            const vTexts = tokens.map(token => {
                return html `<v-text
        .str=${token.content}
        .styles=${{
                    color: token.color,
                }}
      ></v-text>`;
            });
            return html `<span>${vTexts}</span>`;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _highlightOptionsGetter_extraInitializers);
        }
    };
    return AffineCodeLine = _classThis;
})();
export { AffineCodeLine };
//# sourceMappingURL=affine-code-line.js.map