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
import '../../buttons/tool-icon-button.js';
import './note-menu.js';
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { ArrowUpIcon, NoteIcon } from '../../../../../_common/icons/index.js';
import { getTooltipWithShortcut } from '../../../components/utils.js';
import { createPopper } from '../common/create-popper.js';
import { QuickToolMixin } from '../mixins/quick-tool.mixin.js';
let EdgelessNoteToolButton = (() => {
    let _classDecorators = [customElement('edgeless-note-tool-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = QuickToolMixin(LitElement);
    let _childFlavour_decorators;
    let _childFlavour_initializers = [];
    let _childFlavour_extraInitializers = [];
    let _childType_decorators;
    let _childType_initializers = [];
    let _childType_extraInitializers = [];
    let _tip_decorators;
    let _tip_initializers = [];
    let _tip_extraInitializers = [];
    var EdgelessNoteToolButton = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _childFlavour_decorators = [state()];
            _childType_decorators = [state()];
            _tip_decorators = [state()];
            __esDecorate(this, null, _childFlavour_decorators, { kind: "accessor", name: "childFlavour", static: false, private: false, access: { has: obj => "childFlavour" in obj, get: obj => obj.childFlavour, set: (obj, value) => { obj.childFlavour = value; } }, metadata: _metadata }, _childFlavour_initializers, _childFlavour_extraInitializers);
            __esDecorate(this, null, _childType_decorators, { kind: "accessor", name: "childType", static: false, private: false, access: { has: obj => "childType" in obj, get: obj => obj.childType, set: (obj, value) => { obj.childType = value; } }, metadata: _metadata }, _childType_initializers, _childType_extraInitializers);
            __esDecorate(this, null, _tip_decorators, { kind: "accessor", name: "tip", static: false, private: false, access: { has: obj => "tip" in obj, get: obj => obj.tip, set: (obj, value) => { obj.tip = value; } }, metadata: _metadata }, _tip_initializers, _tip_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessNoteToolButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: flex;
    }

    .arrow-up-icon {
      position: absolute;
      top: 4px;
      right: 2px;
      font-size: 0;
    }
  `; }
        #childFlavour_accessor_storage;
        get childFlavour() { return this.#childFlavour_accessor_storage; }
        set childFlavour(value) { this.#childFlavour_accessor_storage = value; }
        #childType_accessor_storage;
        get childType() { return this.#childType_accessor_storage; }
        set childType(value) { this.#childType_accessor_storage = value; }
        #tip_accessor_storage;
        get tip() { return this.#tip_accessor_storage; }
        set tip(value) { this.#tip_accessor_storage = value; }
        _toggleNoteMenu() {
            if (this._noteMenu) {
                this._disposeMenu();
                this.requestUpdate();
            }
            else {
                this.edgeless.tools.setEdgelessTool({
                    type: 'affine:note',
                    childFlavour: this.childFlavour,
                    childType: this.childType,
                    tip: this.tip,
                });
                this._noteMenu = createPopper('edgeless-note-menu', this);
                this._noteMenu.element.edgeless = this.edgeless;
                this._noteMenu.element.childFlavour = this.childFlavour;
                this._noteMenu.element.childType = this.childType;
                this._noteMenu.element.tip = this.tip;
                this._noteMenu.element.onChange = (props) => {
                    this._states.forEach(key => {
                        if (props[key] != undefined) {
                            Object.assign(this, { [key]: props[key] });
                        }
                    });
                    this.edgeless.tools.setEdgelessTool({
                        type: 'affine:note',
                        childFlavour: this.childFlavour,
                        childType: this.childType,
                        tip: this.tip,
                    });
                };
            }
        }
        _disposeMenu() {
            this._noteMenu?.dispose();
            this._noteMenu = null;
        }
        connectedCallback() {
            super.connectedCallback();
            this._disposables.add(this.edgeless.slots.edgelessToolUpdated.on(newTool => {
                if (newTool.type !== 'affine:note') {
                    this._disposeMenu();
                }
            }));
        }
        disconnectedCallback() {
            this._disposeMenu();
            super.disconnectedCallback();
        }
        render() {
            const { active } = this;
            const arrowColor = active ? 'currentColor' : 'var(--affine-icon-secondary)';
            return html `
      <edgeless-tool-icon-button
        class="edgeless-note-button"
        .tooltip=${this._noteMenu ? '' : getTooltipWithShortcut('Note', 'N')}
        .tooltipOffset=${17}
        .active=${active}
        .iconContainerPadding=${6}
        @click=${() => {
                this._toggleNoteMenu();
            }}
      >
        ${NoteIcon}
        <span class="arrow-up-icon" style=${styleMap({ color: arrowColor })}>
          ${ArrowUpIcon}
        </span>
      </edgeless-tool-icon-button>
    `;
        }
        constructor() {
            super(...arguments);
            this._noteMenu = null;
            this._states = ['childFlavour', 'childType', 'tip'];
            this.type = 'affine:note';
            this.#childFlavour_accessor_storage = __runInitializers(this, _childFlavour_initializers, 'affine:paragraph');
            this.#childType_accessor_storage = (__runInitializers(this, _childFlavour_extraInitializers), __runInitializers(this, _childType_initializers, 'text'));
            this.#tip_accessor_storage = (__runInitializers(this, _childType_extraInitializers), __runInitializers(this, _tip_initializers, 'Text'));
            __runInitializers(this, _tip_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessNoteToolButton = _classThis;
})();
export { EdgelessNoteToolButton };
//# sourceMappingURL=note-tool-button.js.map