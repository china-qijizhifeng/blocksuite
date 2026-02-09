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
import { WithDisposable } from '@blocksuite/block-std';
import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { AIStarIcon } from '../../../_common/icons/ai.js';
import { SurfaceGroupLikeModel } from '../../../surface-block/element-model/base.js';
import { isFrameBlock } from '../../edgeless/utils/query.js';
let EdgelessCopilotToolbarEntry = (() => {
    let _classDecorators = [customElement('edgeless-copilot-toolbar-entry')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _groups_decorators;
    let _groups_initializers = [];
    let _groups_extraInitializers = [];
    var EdgelessCopilotToolbarEntry = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _host_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            _groups_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _groups_decorators, { kind: "accessor", name: "groups", static: false, private: false, access: { has: obj => "groups" in obj, get: obj => obj.groups, set: (obj, value) => { obj.groups = value; } }, metadata: _metadata }, _groups_initializers, _groups_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessCopilotToolbarEntry = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .copilot-icon-button {
      line-height: 20px;

      .label.medium {
        color: var(--affine-brand-color);
      }
    }
  `; }
        #host_accessor_storage = __runInitializers(this, _host_initializers, void 0);
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #edgeless_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #groups_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _groups_initializers, void 0));
        get groups() { return this.#groups_accessor_storage; }
        set groups(value) { this.#groups_accessor_storage = value; }
        _showCopilotPanel() {
            const selectedElements = this.edgeless.service.selection.selectedElements;
            const toBeSelected = new Set(selectedElements);
            selectedElements.forEach(element => {
                if (isFrameBlock(element)) {
                    this.edgeless.service.frame
                        .getElementsInFrame(element)
                        .forEach(ele => toBeSelected.add(ele));
                }
                else if (element instanceof SurfaceGroupLikeModel) {
                    element.descendants().forEach(ele => toBeSelected.add(ele));
                }
            });
            this.edgeless.service.tool.setEdgelessTool({
                type: 'copilot',
            });
            this.edgeless.tools.controllers['copilot'].updateSelectionWith(Array.from(toBeSelected), 10);
        }
        render() {
            return html `<edgeless-tool-icon-button
      aria-label="Ask AI"
      class="copilot-icon-button"
      @click=${this._showCopilotPanel}
    >
      ${AIStarIcon} <span class="label medium">Ask AI</span>
    </edgeless-tool-icon-button>`;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _groups_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessCopilotToolbarEntry = _classThis;
})();
export { EdgelessCopilotToolbarEntry };
//# sourceMappingURL=toolbar-entry.js.map