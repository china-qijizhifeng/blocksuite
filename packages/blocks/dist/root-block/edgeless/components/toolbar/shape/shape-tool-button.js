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
import '../../buttons/toolbar-button.js';
import './shape-menu.js';
import './shape-draggable.js';
import { cssVar } from '@toeverything/theme';
import { css, html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { isTransparent } from '../../../../../_common/theme/css-variables.js';
import { DEFAULT_SHAPE_FILL_COLOR, DEFAULT_SHAPE_STROKE_COLOR, ShapeType, } from '../../../../../surface-block/elements/shape/consts.js';
import { ShapeStyle } from '../../../../../surface-block/index.js';
import { ShapeToolController } from '../../../controllers/tools/shape-tool.js';
import { getTooltipWithShortcut } from '../../utils.js';
import { applyLastProps, observeLastProps, } from '../common/observe-last-props.js';
import { EdgelessToolbarToolMixin } from '../mixins/tool.mixin.js';
import { ShapeComponentConfig } from './shape-menu-config.js';
const { Rect } = ShapeType;
let EdgelessShapeToolButton = (() => {
    let _classDecorators = [customElement('edgeless-shape-tool-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = EdgelessToolbarToolMixin(LitElement);
    let _states_decorators;
    let _states_initializers = [];
    let _states_extraInitializers = [];
    var EdgelessShapeToolButton = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _states_decorators = [state()];
            __esDecorate(this, null, _states_decorators, { kind: "accessor", name: "states", static: false, private: false, access: { has: obj => "states" in obj, get: obj => obj.states, set: (obj, value) => { obj.states = value; } }, metadata: _metadata }, _states_initializers, _states_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessShapeToolButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    :host {
      display: block;
      width: 100%;
      height: 100%;
    }
    edgeless-toolbar-button,
    .shapes {
      width: 100%;
      height: 64px;
    }
  `; }
        #states_accessor_storage;
        get states() { return this.#states_accessor_storage; }
        set states(value) { this.#states_accessor_storage = value; }
        get stateKeys() {
            return Object.keys(this.states);
        }
        _toggleMenu() {
            if (this.tryDisposePopper())
                return;
            this.setEdgelessTool({
                type: this.type,
                shapeType: this.states.shapeType,
            });
            const menu = this.createPopper('edgeless-shape-menu', this);
            Object.assign(menu.element, {
                edgeless: this.edgeless,
                onChange: (props) => {
                    this.edgeless.service.editPropsStore.record('shape', props);
                    this.updateMenu();
                    this._updateOverlay();
                    this.setEdgelessTool({
                        type: 'shape',
                        shapeType: props.shapeType ?? this.states.shapeType,
                    });
                },
            });
            this.updateMenu();
        }
        _updateOverlay() {
            const controller = this.edgeless.tools.currentController;
            if (controller instanceof ShapeToolController) {
                controller.createOverlay();
            }
        }
        _handleShapeClick(shape) {
            const name = shape.name;
            if (name !== this.states.shapeType) {
                const shapeConfig = ShapeComponentConfig.find(s => s.name === name);
                if (!shapeConfig)
                    return;
                this.edgeless.service.editPropsStore.record('shape', shapeConfig?.value);
                this.updateMenu();
            }
            if (!this.popper)
                this._toggleMenu();
        }
        updateMenu() {
            if (!this.popper)
                return;
            Object.assign(this.popper.element, this.states);
        }
        connectedCallback() {
            super.connectedCallback();
            const { edgeless, states, stateKeys, type } = this;
            applyLastProps(edgeless.service, type, stateKeys, states);
            this.disposables.add(observeLastProps(edgeless.service, 'shape', stateKeys, states, updates => {
                this.states = { ...this.states, ...updates };
            }));
        }
        render() {
            const { active, states } = this;
            const { fillColor, strokeColor } = states;
            const shapeColor = isTransparent(fillColor)
                ? cssVar('white60')
                : `var(${fillColor})`;
            const shapeStroke = isTransparent(strokeColor)
                ? cssVar('black10')
                : `var(${strokeColor})`;
            return html `
      <edgeless-toolbar-button
        class="edgeless-shape-button"
        .tooltip=${this.popper ? '' : getTooltipWithShortcut('Shape', 'S')}
        .tooltipOffset=${5}
        .active=${active}
      >
        <edgeless-toolbar-shape-draggable
          .edgeless=${this.edgeless}
          .toolbarContainer=${this.toolbarContainer}
          class="shapes"
          style=${styleMap({
                color: shapeColor,
                stroke: shapeStroke,
            })}
          .color=${shapeColor}
          .stroke=${shapeStroke}
          @click=${this._toggleMenu}
          .onShapeClick=${this._handleShapeClick.bind(this)}
        >
        </edgeless-toolbar-shape-draggable>
      </edgeless-toolbar-button>
    `;
        }
        constructor() {
            super(...arguments);
            this.type = 'shape';
            this.#states_accessor_storage = __runInitializers(this, _states_initializers, {
                shapeStyle: ShapeStyle.Scribbled,
                shapeType: Rect,
                fillColor: DEFAULT_SHAPE_FILL_COLOR,
                strokeColor: DEFAULT_SHAPE_STROKE_COLOR,
                radius: 0,
            });
            __runInitializers(this, _states_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessShapeToolButton = _classThis;
})();
export { EdgelessShapeToolButton };
//# sourceMappingURL=shape-tool-button.js.map