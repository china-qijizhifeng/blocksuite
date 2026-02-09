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
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { CheckIcon } from '../../../../_common/icons/edgeless.js';
import { FontFamily, FontFamilyList, } from '../../../../surface-block/consts.js';
import { wrapFontFamily } from '../../../../surface-block/utils/font.js';
let EdgelessFontFamilyPanel = (() => {
    let _classDecorators = [customElement('edgeless-font-family-panel')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let _value_decorators;
    let _value_initializers = [];
    let _value_extraInitializers = [];
    let _onSelect_decorators;
    let _onSelect_initializers = [];
    let _onSelect_extraInitializers = [];
    var EdgelessFontFamilyPanel = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _value_decorators = [property({ attribute: false })];
            _onSelect_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _value_decorators, { kind: "accessor", name: "value", static: false, private: false, access: { has: obj => "value" in obj, get: obj => obj.value, set: (obj, value) => { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
            __esDecorate(this, null, _onSelect_decorators, { kind: "accessor", name: "onSelect", static: false, private: false, access: { has: obj => "onSelect" in obj, get: obj => obj.onSelect, set: (obj, value) => { obj.onSelect = value; } }, metadata: _metadata }, _onSelect_initializers, _onSelect_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessFontFamilyPanel = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
      align-items: start;
      flex-direction: column;
      min-width: 136px;
    }

    edgeless-tool-icon-button {
      width: 100%;
    }
  `; }
        #value_accessor_storage = __runInitializers(this, _value_initializers, FontFamily.Inter);
        get value() { return this.#value_accessor_storage; }
        set value(value) { this.#value_accessor_storage = value; }
        #onSelect_accessor_storage = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _onSelect_initializers, undefined));
        get onSelect() { return this.#onSelect_accessor_storage; }
        set onSelect(value) { this.#onSelect_accessor_storage = value; }
        _onSelect(value) {
            this.value = value;
            if (this.onSelect) {
                this.onSelect(value);
            }
        }
        render() {
            return repeat(FontFamilyList, item => item[0], ([font, name]) => {
                const active = this.value === font;
                return html `
          <edgeless-tool-icon-button
            data-font="${name}"
            style="font-family: ${wrapFontFamily(font)}"
            .iconContainerPadding=${[4, 8]}
            .justify=${'space-between'}
            .active=${active}
            @click=${() => this._onSelect(font)}
          >
            ${name} ${active ? CheckIcon : nothing}
          </edgeless-tool-icon-button>
        `;
            });
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _onSelect_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessFontFamilyPanel = _classThis;
})();
export { EdgelessFontFamilyPanel };
//# sourceMappingURL=font-family-panel.js.map