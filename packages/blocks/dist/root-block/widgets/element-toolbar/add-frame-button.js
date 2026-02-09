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
import '../../edgeless/components/buttons/tool-icon-button.js';
import { WithDisposable } from '@blocksuite/block-std';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { FrameIcon } from '../../../_common/icons/index.js';
import { Bound, MindmapElementModel } from '../../../surface-block/index.js';
let EdgelessAddFrameButton = (() => {
    let _classDecorators = [customElement('edgeless-add-frame-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    var EdgelessAddFrameButton = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#edgeless_accessor_storage = __runInitializers(this, _edgeless_initializers, void 0);
            this._createFrame = (__runInitializers(this, _edgeless_extraInitializers), () => {
                const frame = this.edgeless.service.frame.createFrameOnSelected();
                if (!frame)
                    return;
                this.edgeless.service.telemetryService?.track('CanvasElementAdded', {
                    control: 'context-menu',
                    page: 'whiteboard editor',
                    module: 'toolbar',
                    segment: 'toolbar',
                    type: 'frame',
                });
                this.edgeless.surface.fitToViewport(Bound.deserialize(frame.xywh));
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _edgeless_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessAddFrameButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .label {
      padding-left: 4px;
    }
  `; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        render() {
            return html `
      <edgeless-tool-icon-button
        aria-label="Frame"
        .tooltip=${'Frame'}
        .labelHeight=${'20px'}
        @click=${this._createFrame}
      >
        ${FrameIcon}<span class="label medium">Frame</span>
      </edgeless-tool-icon-button>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessAddFrameButton = _classThis;
})();
export { EdgelessAddFrameButton };
export function renderAddFrameButton(edgeless, elements) {
    if (elements.length < 2)
        return nothing;
    if (elements.some(e => e.group instanceof MindmapElementModel))
        return nothing;
    return html `
    <edgeless-add-frame-button
      .edgeless=${edgeless}
    ></edgeless-add-frame-button>
  `;
}
//# sourceMappingURL=add-frame-button.js.map