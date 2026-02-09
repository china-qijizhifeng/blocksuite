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
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { startDrag } from '../../../../../utils/drag.js';
import { getResultInRange } from '../../../../../utils/utils.js';
import { DEFAULT_COLUMN_MIN_WIDTH } from '../../consts.js';
let TableVerticalIndicator = (() => {
    let _classDecorators = [customElement('data-view-table-vertical-indicator')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _top_decorators;
    let _top_initializers = [];
    let _top_extraInitializers = [];
    let _left_decorators;
    let _left_initializers = [];
    let _left_extraInitializers = [];
    let _width_decorators;
    let _width_initializers = [];
    let _width_extraInitializers = [];
    let _lines_decorators;
    let _lines_initializers = [];
    let _lines_extraInitializers = [];
    let _shadow_decorators;
    let _shadow_initializers = [];
    let _shadow_extraInitializers = [];
    var TableVerticalIndicator = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _top_decorators = [property({ attribute: false })];
            _left_decorators = [property({ attribute: false })];
            _width_decorators = [property({ attribute: false })];
            _lines_decorators = [property({ attribute: false })];
            _shadow_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _top_decorators, { kind: "accessor", name: "top", static: false, private: false, access: { has: obj => "top" in obj, get: obj => obj.top, set: (obj, value) => { obj.top = value; } }, metadata: _metadata }, _top_initializers, _top_extraInitializers);
            __esDecorate(this, null, _left_decorators, { kind: "accessor", name: "left", static: false, private: false, access: { has: obj => "left" in obj, get: obj => obj.left, set: (obj, value) => { obj.left = value; } }, metadata: _metadata }, _left_initializers, _left_extraInitializers);
            __esDecorate(this, null, _width_decorators, { kind: "accessor", name: "width", static: false, private: false, access: { has: obj => "width" in obj, get: obj => obj.width, set: (obj, value) => { obj.width = value; } }, metadata: _metadata }, _width_initializers, _width_extraInitializers);
            __esDecorate(this, null, _lines_decorators, { kind: "accessor", name: "lines", static: false, private: false, access: { has: obj => "lines" in obj, get: obj => obj.lines, set: (obj, value) => { obj.lines = value; } }, metadata: _metadata }, _lines_initializers, _lines_extraInitializers);
            __esDecorate(this, null, _shadow_decorators, { kind: "accessor", name: "shadow", static: false, private: false, access: { has: obj => "shadow" in obj, get: obj => obj.shadow, set: (obj, value) => { obj.shadow = value; } }, metadata: _metadata }, _shadow_initializers, _shadow_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            TableVerticalIndicator = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    data-view-table-vertical-indicator {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 1;
      pointer-events: none;
    }

    .vertical-indicator-container {
      position: absolute;
      pointer-events: none;
    }

    .vertical-indicator-group {
      position: absolute;
      z-index: 1;
      width: 100%;
      background-color: var(--affine-hover-color);
      pointer-events: none;
    }
    .vertical-indicator-group::after {
      position: absolute;
      z-index: 1;
      width: 2px;
      height: 100%;
      content: '';
      right: 0;
      background-color: var(--affine-primary-color);
      border-radius: 1px;
    }
    .with-shadow.vertical-indicator-group::after {
      box-shadow: 0px 0px 8px 0px rgba(30, 150, 235, 0.35);
    }
  `; }
        #top_accessor_storage = __runInitializers(this, _top_initializers, void 0);
        get top() { return this.#top_accessor_storage; }
        set top(value) { this.#top_accessor_storage = value; }
        #left_accessor_storage = (__runInitializers(this, _top_extraInitializers), __runInitializers(this, _left_initializers, void 0));
        get left() { return this.#left_accessor_storage; }
        set left(value) { this.#left_accessor_storage = value; }
        #width_accessor_storage = (__runInitializers(this, _left_extraInitializers), __runInitializers(this, _width_initializers, void 0));
        get width() { return this.#width_accessor_storage; }
        set width(value) { this.#width_accessor_storage = value; }
        #lines_accessor_storage = (__runInitializers(this, _width_extraInitializers), __runInitializers(this, _lines_initializers, void 0));
        get lines() { return this.#lines_accessor_storage; }
        set lines(value) { this.#lines_accessor_storage = value; }
        #shadow_accessor_storage = (__runInitializers(this, _lines_extraInitializers), __runInitializers(this, _shadow_initializers, false));
        get shadow() { return this.#shadow_accessor_storage; }
        set shadow(value) { this.#shadow_accessor_storage = value; }
        render() {
            const containerStyle = styleMap({
                top: `${this.top}px`,
                left: `${this.left}px`,
                width: `${Math.max(this.width, 1)}px`,
            });
            return html `
      <div class="vertical-indicator-container" style=${containerStyle}>
        ${repeat(this.lines, ({ top, bottom }) => {
                const groupStyle = styleMap({
                    top: `${top}px`,
                    height: `${bottom - top}px`,
                });
                const groupClass = classMap({
                    'with-shadow': this.shadow,
                    'vertical-indicator-group': true,
                });
                return html `<div class="${groupClass}" style=${groupStyle}></div>`;
            })}
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _shadow_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return TableVerticalIndicator = _classThis;
})();
export { TableVerticalIndicator };
export const getTableGroupRects = (tableContainer) => {
    const tableRect = tableContainer.getBoundingClientRect();
    const groups = tableContainer.querySelectorAll('affine-data-view-table-group');
    return Array.from(groups).map(group => {
        const groupRect = group.getBoundingClientRect();
        const top = group
            .querySelector('affine-database-column-header')
            ?.getBoundingClientRect().top ?? groupRect.top;
        const bottom = group
            .querySelector('.affine-database-block-rows')
            ?.getBoundingClientRect().bottom ?? groupRect.bottom;
        return {
            top: top - tableRect.top,
            bottom: bottom - tableRect.top,
        };
    });
};
export const startDragWidthAdjustmentBar = (evt, tableContainer, width, column) => {
    const scale = width / column.width;
    const tableRect = tableContainer.getBoundingClientRect();
    const left = tableContainer
        .querySelector(`affine-database-header-column[data-column-id='${column.id}']`)
        ?.getBoundingClientRect().left ?? 0;
    const rectList = getTableGroupRects(tableContainer);
    const preview = getVerticalIndicator();
    preview.display(column.width * scale, tableRect.top, rectList, left);
    tableContainer.style.pointerEvents = 'none';
    startDrag(evt, {
        onDrag: () => ({ width: column.width }),
        onMove: ({ x }) => {
            const width = Math.round(getResultInRange((x - left) / scale, DEFAULT_COLUMN_MIN_WIDTH, Infinity));
            preview.display(width * scale, tableRect.top, rectList, left);
            return {
                width,
            };
        },
        onDrop: ({ width }) => {
            column.updateWidth(width);
        },
        onClear: () => {
            tableContainer.style.pointerEvents = 'auto';
            preview.remove();
        },
    });
};
let preview = null;
export const getVerticalIndicator = () => {
    if (!preview) {
        const dragBar = new TableVerticalIndicator();
        preview = {
            display(width, top, lines, left, shadow = false) {
                document.body.append(dragBar);
                dragBar.left = left;
                dragBar.lines = lines;
                dragBar.top = top;
                dragBar.width = width;
                dragBar.shadow = shadow;
            },
            remove() {
                dragBar.remove();
            },
        };
    }
    return preview;
};
//# sourceMappingURL=vertical-indicator.js.map