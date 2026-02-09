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
import { INLINE_ROOT_ATTR, ZERO_WIDTH_SPACE, } from '@blocksuite/inline';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ref } from 'lit/directives/ref.js';
import { styleMap } from 'lit/directives/style-map.js';
import { HoverController } from '../../../../components/hover/index.js';
import { BLOCK_ID_ATTR } from '../../../../consts.js';
import { affineTextStyles } from '../affine-text.js';
import { toggleLinkPopup } from './link-popup/toggle-link-popup.js';
let AffineLink = (() => {
    let _classDecorators = [customElement('affine-link')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = ShadowlessElement;
    let _delta_decorators;
    let _delta_initializers = [];
    let _delta_extraInitializers = [];
    var AffineLink = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _delta_decorators = [property({ type: Object })];
            __esDecorate(this, null, _delta_decorators, { kind: "accessor", name: "delta", static: false, private: false, access: { has: obj => "delta" in obj, get: obj => obj.delta, set: (obj, value) => { obj.delta = value; } }, metadata: _metadata }, _delta_initializers, _delta_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineLink = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get link() {
            const link = this.delta.attributes?.link;
            if (!link) {
                return '';
            }
            return link;
        }
        get inlineEditor() {
            const inlineRoot = this.closest(`[${INLINE_ROOT_ATTR}]`);
            assertExists(inlineRoot);
            return inlineRoot.inlineEditor;
        }
        get selfInlineRange() {
            const selfInlineRange = this.inlineEditor.getInlineRangeFromElement(this);
            assertExists(selfInlineRange);
            return selfInlineRange;
        }
        get blockElement() {
            const blockElement = this.inlineEditor.rootElement.closest(`[${BLOCK_ID_ATTR}]`);
            assertExists(blockElement);
            return blockElement;
        }
        get std() {
            const std = this.blockElement.std;
            assertExists(std);
            return std;
        }
        static { this.styles = css `
    affine-link > a:hover [data-v-text='true'] {
      text-decoration: underline;
    }
  `; }
        #delta_accessor_storage;
        get delta() { return this.#delta_accessor_storage; }
        set delta(value) { this.#delta_accessor_storage = value; }
        // Workaround for links not working in contenteditable div
        // see also https://stackoverflow.com/questions/12059211/how-to-make-clickable-anchor-in-contenteditable-div
        //
        // Note: We cannot use JS to directly open a new page as this may be blocked by the browser.
        //
        // Please also note that when readonly mode active,
        // this workaround is not necessary and links work normally.
        // see https://github.com/toeverything/AFFiNE/issues/1540
        _onMouseUp() {
            const anchorElement = this.querySelector('a');
            assertExists(anchorElement);
            if (!anchorElement.isContentEditable)
                return;
            anchorElement.contentEditable = 'false';
            setTimeout(() => {
                anchorElement.removeAttribute('contenteditable');
            }, 0);
        }
        render() {
            const style = this.delta.attributes
                ? affineTextStyles(this.delta.attributes, {
                    color: 'var(--affine-link-color)',
                    fill: 'var(--affine-link-color)',
                    'text-decoration': 'none',
                    cursor: 'pointer',
                })
                : styleMap({});
            return html `<a
      ${ref(this._whenHover.setReference)}
      href=${this.link}
      rel="noopener noreferrer"
      target="_blank"
      style=${style}
      @mouseup=${this._onMouseUp}
      ><v-text .str=${this.delta.insert}></v-text
    ></a>`;
        }
        constructor() {
            super(...arguments);
            this._whenHover = new HoverController(this, ({ abortController }) => {
                if (this.blockElement.doc.readonly) {
                    return null;
                }
                const selection = this.std.selection;
                const textSelection = selection.find('text');
                if (!!textSelection &&
                    (!!textSelection.to || !!textSelection.from.length)) {
                    return null;
                }
                const blockSelections = selection.filter('block');
                if (blockSelections.length) {
                    return null;
                }
                return {
                    template: toggleLinkPopup(this.inlineEditor, 'view', this.selfInlineRange, abortController),
                };
            }, { enterDelay: 500 });
            this.#delta_accessor_storage = __runInitializers(this, _delta_initializers, {
                insert: ZERO_WIDTH_SPACE,
            });
            __runInitializers(this, _delta_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineLink = _classThis;
})();
export { AffineLink };
//# sourceMappingURL=affine-link.js.map