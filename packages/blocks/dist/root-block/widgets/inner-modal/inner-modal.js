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
import { WidgetElement } from '@blocksuite/block-std';
import { autoUpdate, computePosition, size, } from '@floating-ui/dom';
import { nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
export const AFFINE_INNER_MODAL_WIDGET = 'affine-inner-modal-widget';
let AffineInnerModalWidget = (() => {
    let _classDecorators = [customElement(AFFINE_INNER_MODAL_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetElement;
    var AffineInnerModalWidget = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineInnerModalWidget = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        setTarget(fn) {
            this._getTarget = fn;
        }
        get target() {
            if (this._getTarget) {
                return this._getTarget();
            }
            return document.body;
        }
        open(modal, ops) {
            const cancel = autoUpdate(this.target, modal, () => {
                computePosition(this.target, modal, {
                    middleware: [
                        size({
                            apply: ({ rects }) => {
                                Object.assign(modal.style, {
                                    left: `${rects.reference.x}px`,
                                    top: `${rects.reference.y}px`,
                                    width: `${rects.reference.width}px`,
                                    height: `${rects.reference.height}px`,
                                });
                            },
                        }),
                    ],
                }).catch(console.error);
            });
            const close = () => {
                modal.remove();
                ops.onClose?.();
                cancel();
            };
            return { close };
        }
        render() {
            return nothing;
        }
    };
    return AffineInnerModalWidget = _classThis;
})();
export { AffineInnerModalWidget };
//# sourceMappingURL=inner-modal.js.map