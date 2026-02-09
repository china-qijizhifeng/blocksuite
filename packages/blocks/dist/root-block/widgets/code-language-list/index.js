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
import './components/lang-button.js';
import { WidgetElement } from '@blocksuite/block-std';
import { sleep } from '@blocksuite/global/utils';
import { offset } from '@floating-ui/dom';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { HoverController } from '../../../_common/components/index.js';
export const AFFINE_CODE_LANGUAGE_LIST_WIDGET = 'affine-code-language-list-widget';
let AffineCodeLanguageListWidget = (() => {
    let _classDecorators = [customElement(AFFINE_CODE_LANGUAGE_LIST_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetElement;
    var AffineCodeLanguageListWidget = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._isActivated = false;
            this._hoverController = new HoverController(this, () => {
                const codeBlock = this.blockElement;
                const selection = this.host.selection;
                const textSelection = selection.find('text');
                if (!!textSelection &&
                    (!!textSelection.to || !!textSelection.from.length)) {
                    return null;
                }
                const blockSelections = selection.filter('block');
                if (blockSelections.length > 1 ||
                    (blockSelections.length === 1 &&
                        blockSelections[0].blockId !== codeBlock.blockId)) {
                    return null;
                }
                return {
                    template: html `<language-list-button
          .blockElement=${this.blockElement}
          .onActiveStatusChange=${async (active) => {
                        this._isActivated = active;
                        if (!active) {
                            // Wait a moment for the user to see the result.
                            // This is to prevent the language list from closing immediately.
                            //
                            // This snippet is not perfect, it only checks the hover status at the moment.
                            if (this._hoverController.isHovering)
                                return;
                            await sleep(1000);
                            if (this._hoverController.isHovering || this._isActivated)
                                return;
                            this._hoverController.abort();
                        }
                    }}
        >
        </language-list-button>`,
                    // stacking-context(editor-host)
                    portalStyles: {
                        zIndex: 'var(--affine-z-index-popover)',
                    },
                    container: this.blockElement,
                    computePosition: {
                        referenceElement: this.blockElement,
                        placement: 'left-start',
                        middleware: [offset({ mainAxis: -5, crossAxis: 5 })],
                        autoUpdate: true,
                    },
                };
            }, {
                allowMultiple: true,
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineCodeLanguageListWidget = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        connectedCallback() {
            super.connectedCallback();
            this._hoverController.setReference(this.blockElement);
            this._hoverController.onAbort = () => {
                // If the language list is opened, don't close it.
                if (this._isActivated)
                    return;
                this._hoverController.abort();
                return;
            };
        }
    };
    return AffineCodeLanguageListWidget = _classThis;
})();
export { AffineCodeLanguageListWidget };
//# sourceMappingURL=index.js.map