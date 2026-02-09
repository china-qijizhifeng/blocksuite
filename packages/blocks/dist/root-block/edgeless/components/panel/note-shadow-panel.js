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
import '../buttons/tool-icon-button.js';
import { WithDisposable } from '@blocksuite/block-std';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { NOTE_SHADOWS } from '../../../../_common/edgeless/note/consts.js';
import { NoteNoShadowIcon, NoteShadowSampleIcon, } from '../../../../_common/icons/edgeless.js';
import { getThemeMode } from '../../../../_common/utils/query.js';
const TOOLBAR_SHADOWS_LIGHT = [
    '',
    '0px 0.2px 4.8px 0px rgba(66, 65, 73, 0.2), 0px 0px 1.6px 0px rgba(66, 65, 73, 0.2)',
    '0px 9.6px 10.4px -4px rgba(66, 65, 73, 0.07), 0px 10.4px 7.2px -8px rgba(66, 65, 73, 0.22)',
    '0px 0px 0px 4px rgba(255, 255, 255, 1), 0px 1.2px 2.4px 4.8px rgba(66, 65, 73, 0.16)',
    '0px 5.2px 12px 0px rgba(66, 65, 73, 0.13), 0px 0px 0.4px 1px rgba(0, 0, 0, 0.06)',
    '0px 0px 0px 1.4px rgba(0, 0, 0, 1), 2.4px 2.4px 0px 1px rgba(0, 0, 0, 1)',
];
const TOOLBAR_SHADOWS_DARK = [
    '',
    '0px 0.2px 6px 0px rgba(0, 0, 0, 0.44), 0px 0px 2px 0px rgba(0, 0, 0, 0.66)',
    '0px 9.6px 10.4px -4px rgba(0, 0, 0, 0.66), 0px 10.4px 7.2px -8px rgba(0, 0, 0, 0.44)',
    '0px 1.2px 2.4px 4.8px rgba(0, 0, 0, 0.36), 0px 0px 0px 3.4px rgba(75, 75, 75, 1)',
    '0px 5.2px 12px 0px rgba(0, 0, 0, 0.66), 0px 0px 0.4px 1px rgba(0, 0, 0, 0.44)',
    '0px 0px 0px 1.4px rgba(178, 178, 178, 1), 2.4px 2.4px 0px 1px rgba(178, 178, 178, 1)',
];
const TOOLTIPS = [
    'No shadow',
    'Box shadow',
    'Sticker shadow',
    'Paper shadow',
    'Floation shadow',
    'Film shadow',
];
let EdgelessNoteShadowPanel = (() => {
    let _classDecorators = [customElement('edgeless-note-shadow-panel')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _value_decorators;
    let _value_initializers = [];
    let _value_extraInitializers = [];
    let _background_decorators;
    let _background_initializers = [];
    let _background_extraInitializers = [];
    let _onSelect_decorators;
    let _onSelect_initializers = [];
    let _onSelect_extraInitializers = [];
    var EdgelessNoteShadowPanel = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _value_decorators = [property({ attribute: false })];
            _background_decorators = [property({ attribute: false })];
            _onSelect_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _value_decorators, { kind: "accessor", name: "value", static: false, private: false, access: { has: obj => "value" in obj, get: obj => obj.value, set: (obj, value) => { obj.value = value; } }, metadata: _metadata }, _value_initializers, _value_extraInitializers);
            __esDecorate(this, null, _background_decorators, { kind: "accessor", name: "background", static: false, private: false, access: { has: obj => "background" in obj, get: obj => obj.background, set: (obj, value) => { obj.background = value; } }, metadata: _metadata }, _background_initializers, _background_extraInitializers);
            __esDecorate(this, null, _onSelect_decorators, { kind: "accessor", name: "onSelect", static: false, private: false, access: { has: obj => "onSelect" in obj, get: obj => obj.onSelect, set: (obj, value) => { obj.onSelect = value; } }, metadata: _metadata }, _onSelect_initializers, _onSelect_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessNoteShadowPanel = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
    }

    .item {
      padding: 8px;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .item-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .item:hover {
      background-color: var(--affine-hover-color);
    }
  `; }
        #value_accessor_storage = __runInitializers(this, _value_initializers, void 0);
        get value() { return this.#value_accessor_storage; }
        set value(value) { this.#value_accessor_storage = value; }
        #background_accessor_storage = (__runInitializers(this, _value_extraInitializers), __runInitializers(this, _background_initializers, void 0));
        get background() { return this.#background_accessor_storage; }
        set background(value) { this.#background_accessor_storage = value; }
        #onSelect_accessor_storage = (__runInitializers(this, _background_extraInitializers), __runInitializers(this, _onSelect_initializers, void 0));
        get onSelect() { return this.#onSelect_accessor_storage; }
        set onSelect(value) { this.#onSelect_accessor_storage = value; }
        render() {
            const mode = getThemeMode();
            const SHADOWS = mode === 'dark' ? TOOLBAR_SHADOWS_DARK : TOOLBAR_SHADOWS_LIGHT;
            return repeat(NOTE_SHADOWS, shadow => shadow, (shadow, index) => html `<style>
            .item-icon svg rect:first-of-type {
              fill: var(${this.background});
            }
          </style>
          <div
            class="item"
            @click=${() => this.onSelect(shadow)}
            style=${styleMap({
                border: this.value === shadow
                    ? '1px solid var(--affine-brand-color)'
                    : 'none',
            })}
          >
            <edgeless-tool-icon-button
              class="item-icon"
              .tooltip=${TOOLTIPS[index]}
              .tipPosition=${'bottom'}
              .iconContainerPadding=${0}
              style=${styleMap({
                boxShadow: `${SHADOWS[index]}`,
            })}
            >
              ${index === 0 ? NoteNoShadowIcon : NoteShadowSampleIcon}
            </edgeless-tool-icon-button>
          </div>`);
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _onSelect_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessNoteShadowPanel = _classThis;
})();
export { EdgelessNoteShadowPanel };
//# sourceMappingURL=note-shadow-panel.js.map