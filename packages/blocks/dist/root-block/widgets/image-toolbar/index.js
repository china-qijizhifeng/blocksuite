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
import './components/image-toolbar.js';
import { WidgetElement } from '@blocksuite/block-std';
import { limitShift, shift } from '@floating-ui/dom';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { HoverController } from '../../../_common/components/hover/controller.js';
import { PAGE_HEADER_HEIGHT } from '../../../_common/consts.js';
import { commonConfig, moreMenuConfig } from './config.js';
export const AFFINE_IMAGE_TOOLBAR_WIDGET = 'affine-image-toolbar-widget';
let AffineImageToolbarWidget = (() => {
    let _classDecorators = [customElement(AFFINE_IMAGE_TOOLBAR_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetElement;
    var AffineImageToolbarWidget = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._hoverController = null;
            this._isActivated = false;
            this.config = [];
            this.moreMenuConfig = [];
            this._setHoverController = () => {
                this._hoverController = null;
                this._hoverController = new HoverController(this, ({ abortController }) => {
                    const imageBlock = this.blockElement;
                    const selection = this.host.selection;
                    const textSelection = selection.find('text');
                    if (!!textSelection &&
                        (!!textSelection.to || !!textSelection.from.length)) {
                        return null;
                    }
                    const blockSelections = selection.filter('block');
                    if (blockSelections.length > 1 ||
                        (blockSelections.length === 1 &&
                            blockSelections[0].blockId !== imageBlock.blockId)) {
                        return null;
                    }
                    const imageContainer = imageBlock.resizeImg ?? imageBlock.imageCard;
                    if (!imageContainer) {
                        return null;
                    }
                    return {
                        template: html `<affine-image-toolbar
            .blockElement=${imageBlock}
            .abortController=${abortController}
            .config=${this.config}
            .moreMenuConfig=${this.moreMenuConfig}
            .onActiveStatusChange=${(active) => {
                            this._isActivated = active;
                            if (!active && !this._hoverController?.isHovering) {
                                this._hoverController?.abort();
                            }
                        }}
          ></affine-image-toolbar>`,
                        container: this.blockElement,
                        computePosition: {
                            referenceElement: imageContainer,
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
                const imageBlock = this.blockElement;
                this._hoverController.setReference(imageBlock);
                this._hoverController.onAbort = () => {
                    // If the more menu is opened, don't close it.
                    if (this._isActivated)
                        return;
                    this._hoverController?.abort();
                    return;
                };
            };
            this.clearConfig = () => {
                this.config = [];
                this.moreMenuConfig = [];
                return this;
            };
            this.addConfigItems = (item, index) => {
                if (index === undefined) {
                    this.config.push(...item);
                    return this;
                }
                this.config.splice(index, 0, ...item);
                return this;
            };
            this.addMoreMenuItems = (item, index) => {
                if (index === undefined) {
                    this.moreMenuConfig.push(...item);
                    return this;
                }
                this.moreMenuConfig.splice(index, 0, ...item);
                return this;
            };
            this.buildDefaultConfig = () => {
                this.clearConfig()
                    .addConfigItems(commonConfig)
                    .addMoreMenuItems(moreMenuConfig);
                return this;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineImageToolbarWidget = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        firstUpdated() {
            if (!this.config.length || !this.moreMenuConfig.length) {
                this.buildDefaultConfig();
            }
            this._setHoverController();
        }
    };
    return AffineImageToolbarWidget = _classThis;
})();
export { AffineImageToolbarWidget };
//# sourceMappingURL=index.js.map