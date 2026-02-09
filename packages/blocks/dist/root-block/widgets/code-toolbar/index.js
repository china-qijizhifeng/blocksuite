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
import './components/code-toolbar.js';
import { WidgetElement } from '@blocksuite/block-std';
import { limitShift, shift } from '@floating-ui/dom';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { HoverController } from '../../../_common/components/hover/controller.js';
import { PAGE_HEADER_HEIGHT } from '../../../_common/consts.js';
import { defaultItems, defaultMoreItems } from './config.js';
export const AFFINE_CODE_TOOLBAR_WIDGET = 'affine-code-toolbar-widget';
let AffineCodeToolbarWidget = (() => {
    let _classDecorators = [customElement(AFFINE_CODE_TOOLBAR_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetElement;
    var AffineCodeToolbarWidget = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._hoverController = null;
            this._isActivated = false;
            this.items = [];
            this.moreItems = [];
            this._setHoverController = () => {
                this._hoverController = null;
                this._hoverController = new HoverController(this, ({ abortController }) => {
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
                        template: html `<affine-code-toolbar
            .blockElement=${codeBlock}
            .abortController=${abortController}
            .items=${this.items}
            .moreItems=${this.moreItems}
            .onActiveStatusChange=${(active) => {
                            this._isActivated = active;
                            if (!active && !this._hoverController?.isHovering) {
                                this._hoverController?.abort();
                            }
                        }}
          ></affine-code-toolbar>`,
                        container: this.blockElement,
                        // stacking-context(editor-host)
                        portalStyles: {
                            zIndex: 'var(--affine-z-index-popover)',
                        },
                        computePosition: {
                            referenceElement: codeBlock,
                            placement: 'right-start',
                            middleware: [
                                shift({
                                    crossAxis: true,
                                    padding: {
                                        top: PAGE_HEADER_HEIGHT + 12,
                                        bottom: 12,
                                        right: 12,
                                    },
                                    limiter: limitShift(),
                                }),
                            ],
                            autoUpdate: true,
                        },
                    };
                }, { allowMultiple: true });
                const codeBlock = this.blockElement;
                this._hoverController.setReference(codeBlock);
                this._hoverController.onAbort = () => {
                    // If the more menu is opened, don't close it.
                    if (this._isActivated)
                        return;
                    this._hoverController?.abort();
                    return;
                };
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineCodeToolbarWidget = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        clearConfig() {
            this.items = [];
            this.moreItems = [];
            return this;
        }
        addItems(items, index) {
            if (index === undefined) {
                this.items.push(...items);
            }
            else {
                this.items.splice(index, 0, ...items);
            }
            return this;
        }
        addMoreItems(menuItemsBuilder, index) {
            if (index === undefined) {
                this.moreItems.push(...menuItemsBuilder);
            }
            else {
                this.moreItems.splice(index, 0, ...menuItemsBuilder);
            }
            return this;
        }
        setupDefaultConfig() {
            this.clearConfig().addItems(defaultItems).addMoreItems(defaultMoreItems);
            return this;
        }
        firstUpdated() {
            if (!this.items.length || !this.moreItems.length) {
                this.setupDefaultConfig();
            }
            this._setHoverController();
        }
    };
    return AffineCodeToolbarWidget = _classThis;
})();
export { AffineCodeToolbarWidget };
//# sourceMappingURL=index.js.map