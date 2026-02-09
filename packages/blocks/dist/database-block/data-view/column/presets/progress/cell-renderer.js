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
import { css, html } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { startDrag } from '../../../utils/drag.js';
import { createIcon } from '../../../utils/uni-icon.js';
import { BaseCellRenderer } from '../../base-cell.js';
import { createFromBaseCellRenderer } from '../../renderer.js';
import { progressColumnModelConfig } from './define.js';
const styles = css `
  affine-database-progress-cell-editing {
    display: block;
    width: 100%;
    padding: 0 4px;
  }

  affine-database-progress-cell {
    display: block;
    width: 100%;
    padding: 0 4px;
  }

  .affine-database-progress {
    display: flex;
    align-items: center;
    height: var(--data-view-cell-text-line-height);
    gap: 4px;
  }

  .affine-database-progress-bar {
    position: relative;
    width: 104px;
  }

  .affine-database-progress-bg {
    overflow: hidden;
    width: 100%;
    height: 10px;
    border-radius: 22px;
  }

  .affine-database-progress-fg {
    height: 100%;
  }

  .affine-database-progress-drag-handle {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0px, -1px);
    width: 6px;
    height: 12px;
    border-radius: 2px;
    opacity: 1;
    cursor: ew-resize;
    background: var(--affine-primary-color);
    transition: opacity 0.2s ease-in-out;
  }

  .progress-number {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 18px;
    width: 25px;
    color: var(--affine-text-secondary-color);
    font-size: 14px;
  }
`;
const progressColors = {
    empty: 'var(--affine-black-10)',
    processing: 'var(--affine-processing-color)',
    success: 'var(--affine-success-color)',
};
let ProgressCell = (() => {
    let _classDecorators = [customElement('affine-database-progress-cell')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseCellRenderer;
    var ProgressCell = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ProgressCell = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = styles; }
        render() {
            const progress = this.value ?? 0;
            let backgroundColor = progressColors.processing;
            if (progress === 100) {
                backgroundColor = progressColors.success;
            }
            const fgStyles = styleMap({
                width: `${progress}%`,
                backgroundColor,
            });
            const bgStyles = styleMap({
                backgroundColor: progress === 0 ? progressColors.empty : 'var(--affine-hover-color)',
            });
            return html ` <div class="affine-database-progress">
      <div class="affine-database-progress-bar">
        <div
          class="affine-database-progress-bg"
          @click="${this._bgClick}"
          style=${bgStyles}
        >
          <div class="affine-database-progress-fg" style=${fgStyles}></div>
        </div>
      </div>
      <div class="progress-number progress">${progress}</div>
    </div>`;
        }
        _bgClick(e) {
            if (this.column.readonly) {
                return;
            }
            this.onChange(Math.round((e.offsetX * 100) / e.currentTarget.offsetWidth));
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ProgressCell = _classThis;
})();
export { ProgressCell };
let ProgressCellEditing = (() => {
    let _classDecorators = [customElement('affine-database-progress-cell-editing')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseCellRenderer;
    let _tempValue_decorators;
    let _tempValue_initializers = [];
    let _tempValue_extraInitializers = [];
    let __progressBg_decorators;
    let __progressBg_initializers = [];
    let __progressBg_extraInitializers = [];
    var ProgressCellEditing = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#tempValue_accessor_storage = __runInitializers(this, _tempValue_initializers, undefined);
            this.#_progressBg_accessor_storage = (__runInitializers(this, _tempValue_extraInitializers), __runInitializers(this, __progressBg_initializers, void 0));
            this.startDrag = (__runInitializers(this, __progressBg_extraInitializers), (event) => {
                const bgRect = this._progressBg.getBoundingClientRect();
                const min = bgRect.left;
                const max = bgRect.right;
                const setValue = (x) => {
                    this.tempValue = Math.round(((Math.min(max, Math.max(min, x)) - min) / (max - min)) * 100);
                };
                startDrag(event, {
                    onDrag: ({ x }) => {
                        setValue(x);
                        return;
                    },
                    onMove: ({ x }) => {
                        setValue(x);
                        return;
                    },
                    onDrop: () => {
                        //
                    },
                    onClear: () => {
                        //
                    },
                });
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _tempValue_decorators = [state()];
            __progressBg_decorators = [query('.affine-database-progress-bg')];
            __esDecorate(this, null, _tempValue_decorators, { kind: "accessor", name: "tempValue", static: false, private: false, access: { has: obj => "tempValue" in obj, get: obj => obj.tempValue, set: (obj, value) => { obj.tempValue = value; } }, metadata: _metadata }, _tempValue_initializers, _tempValue_extraInitializers);
            __esDecorate(this, null, __progressBg_decorators, { kind: "accessor", name: "_progressBg", static: false, private: false, access: { has: obj => "_progressBg" in obj, get: obj => obj._progressBg, set: (obj, value) => { obj._progressBg = value; } }, metadata: _metadata }, __progressBg_initializers, __progressBg_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            ProgressCellEditing = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get _value() {
            return this.tempValue ?? this.value ?? 0;
        }
        static { this.styles = styles; }
        #tempValue_accessor_storage;
        get tempValue() { return this.#tempValue_accessor_storage; }
        set tempValue(value) { this.#tempValue_accessor_storage = value; }
        #_progressBg_accessor_storage;
        get _progressBg() { return this.#_progressBg_accessor_storage; }
        set _progressBg(value) { this.#_progressBg_accessor_storage = value; }
        render() {
            const progress = this._value;
            let backgroundColor = progressColors.processing;
            if (progress === 100) {
                backgroundColor = progressColors.success;
            }
            const fgStyles = styleMap({
                width: `${progress}%`,
                backgroundColor,
            });
            const bgStyles = styleMap({
                backgroundColor: progress === 0 ? progressColors.empty : 'var(--affine-hover-color)',
            });
            const handleStyles = styleMap({
                left: `calc(${progress}% - 3px)`,
            });
            return html ` <div class="affine-database-progress">
      <div class="affine-database-progress-bar">
        <div class="affine-database-progress-bg" style=${bgStyles}>
          <div class="affine-database-progress-fg" style=${fgStyles}></div>
          <div
            class="affine-database-progress-drag-handle"
            style=${handleStyles}
          ></div>
        </div>
      </div>
      <div class="progress-number progress">${progress}</div>
    </div>`;
        }
        onExitEditMode() {
            this.onChange(this._value);
        }
        _onChange(value) {
            this.tempValue = value;
        }
        firstUpdated() {
            const disposables = this._disposables;
            disposables.addFromEvent(this._progressBg, 'pointerdown', this.startDrag);
            disposables.addFromEvent(window, 'keydown', evt => {
                if (evt.key === 'ArrowDown') {
                    this._onChange(Math.max(0, this._value - 1));
                    return;
                }
                if (evt.key === 'ArrowUp') {
                    this._onChange(Math.min(100, this._value + 1));
                    return;
                }
            });
        }
        onCopy(_e) {
            _e.preventDefault();
        }
        onPaste(_e) {
            _e.preventDefault();
        }
        onCut(_e) {
            _e.preventDefault();
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return ProgressCellEditing = _classThis;
})();
export { ProgressCellEditing };
export const progressColumnConfig = progressColumnModelConfig.renderConfig({
    icon: createIcon('DatabaseProgress'),
    cellRenderer: {
        view: createFromBaseCellRenderer(ProgressCell),
        edit: createFromBaseCellRenderer(ProgressCellEditing),
    },
});
//# sourceMappingURL=cell-renderer.js.map