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
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { Bound } from '../../../../surface-block/index.js';
let EdgelessNavigatorBlackBackground = (() => {
    let _classDecorators = [customElement('edgeless-navigator-black-background')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _frame_decorators;
    let _frame_initializers = [];
    let _frame_extraInitializers = [];
    let _show_decorators;
    let _show_initializers = [];
    let _show_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    var EdgelessNavigatorBlackBackground = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _frame_decorators = [state()];
            _show_decorators = [state()];
            _edgeless_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _frame_decorators, { kind: "accessor", name: "frame", static: false, private: false, access: { has: obj => "frame" in obj, get: obj => obj.frame, set: (obj, value) => { obj.frame = value; } }, metadata: _metadata }, _frame_initializers, _frame_extraInitializers);
            __esDecorate(this, null, _show_decorators, { kind: "accessor", name: "show", static: false, private: false, access: { has: obj => "show" in obj, get: obj => obj.show, set: (obj, value) => { obj.show = value; } }, metadata: _metadata }, _show_initializers, _show_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessNavigatorBlackBackground = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .edgeless-navigator-black-background {
      background-color: black;
      position: absolute;
      z-index: 1;
      background-color: transparent;
      box-shadow: 0 0 0 5000px black;
    }
  `; }
        #frame_accessor_storage;
        get frame() { return this.#frame_accessor_storage; }
        set frame(value) { this.#frame_accessor_storage = value; }
        #show_accessor_storage;
        get show() { return this.#show_accessor_storage; }
        set show(value) { this.#show_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        _tryLoadBlackBackground() {
            const value = this.edgeless.service.editPropsStore.getItem('presentBlackBackground');
            this._blackBackground = value ?? true;
        }
        firstUpdated() {
            const { _disposables, edgeless } = this;
            _disposables.add(edgeless.slots.navigatorFrameChanged.on(frame => {
                this.frame = frame;
            }));
            _disposables.add(edgeless.slots.navigatorSettingUpdated.on(({ blackBackground }) => {
                if (blackBackground !== undefined) {
                    this.edgeless.service.editPropsStore.setItem('presentBlackBackground', blackBackground);
                    this._blackBackground = blackBackground;
                    this.show =
                        blackBackground && edgeless.edgelessTool.type === 'frameNavigator';
                }
            }));
            _disposables.add(edgeless.slots.edgelessToolUpdated.on(tool => {
                if (tool.type !== 'frameNavigator') {
                    this.show = false;
                }
                else {
                    this.show = this._blackBackground;
                }
            }));
            _disposables.add(edgeless.slots.fullScreenToggled.on(() => setTimeout(() => {
                this.requestUpdate();
            }, 500) // wait for full screen animation
            ));
            this._tryLoadBlackBackground();
        }
        render() {
            const { edgeless, frame, show } = this;
            if (!show || !frame)
                return nothing;
            const bound = Bound.deserialize(frame.xywh);
            const zoom = edgeless.service.viewport.zoom;
            const width = bound.w * zoom;
            const height = bound.h * zoom;
            const [x, y] = edgeless.service.viewport.toViewCoord(bound.x, bound.y);
            return html ` <style>
        .edgeless-navigator-black-background {
          width: ${width}px;
          height: ${height}px;
          top: ${y}px;
          left: ${x}px;
        }
      </style>
      <div class="edgeless-navigator-black-background"></div>`;
        }
        constructor() {
            super(...arguments);
            this.#frame_accessor_storage = __runInitializers(this, _frame_initializers, undefined);
            this.#show_accessor_storage = (__runInitializers(this, _frame_extraInitializers), __runInitializers(this, _show_initializers, false));
            this._blackBackground = (__runInitializers(this, _show_extraInitializers), false);
            this.#edgeless_accessor_storage = __runInitializers(this, _edgeless_initializers, void 0);
            __runInitializers(this, _edgeless_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessNavigatorBlackBackground = _classThis;
})();
export { EdgelessNavigatorBlackBackground };
//# sourceMappingURL=edgeless-navigator-black-background.js.map