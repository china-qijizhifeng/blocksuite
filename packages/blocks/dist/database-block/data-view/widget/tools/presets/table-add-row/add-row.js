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
import { customElement, state } from 'lit/decorators.js';
import { PlusIcon } from '../../../../../../_common/icons/index.js';
import { startDrag } from '../../../../utils/drag.js';
import { WidgetBase } from '../../../widget-base.js';
import { NewRecordPreview } from './new-record-preview.js';
const styles = css `
  .affine-database-toolbar-item.new-record {
    margin-left: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
    width: 120px;
    height: 32px;
    padding: 6px 8px;
    border-radius: 8px;
    font-size: 14px;
    background: var(--affine-white);
    box-shadow: 0px 0px 0px 0.5px rgba(0, 0, 0, 0.1);
    cursor: grab;
  }

  .new-record svg {
    width: 16px;
    height: 16px;
    fill: var(--affine-icon-color);
  }
`;
let DataViewHeaderToolsAddRow = (() => {
    let _classDecorators = [customElement('data-view-header-tools-add-row')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetBase;
    let _showToolBar_decorators;
    let _showToolBar_initializers = [];
    let _showToolBar_extraInitializers = [];
    var DataViewHeaderToolsAddRow = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#showToolBar_accessor_storage = __runInitializers(this, _showToolBar_initializers, false);
            this._onAddNewRecord = (__runInitializers(this, _showToolBar_extraInitializers), () => {
                if (this.readonly)
                    return;
                const selection = this.viewMethods.getSelection?.();
                if (!selection) {
                    this.addRow('start');
                }
                else if (selection.type === 'table') {
                    const { rowsSelection, columnsSelection, focus } = selection;
                    let index = 0;
                    if (rowsSelection && !columnsSelection) {
                        // rows
                        index = rowsSelection.end;
                    }
                    else if (rowsSelection && columnsSelection) {
                        // multiple cells
                        index = rowsSelection.end;
                    }
                    else if (!rowsSelection && !columnsSelection && focus) {
                        // single cell
                        index = focus.rowIndex;
                    }
                    this.addRow(index + 1);
                }
            });
            this._dragStart = (e) => {
                e.preventDefault();
                e.stopPropagation();
                const container = this.closest('affine-data-view-renderer');
                const tableRect = container
                    ?.querySelector('affine-database-table')
                    ?.getBoundingClientRect();
                const rows = container?.querySelectorAll('.affine-database-block-row');
                if (!rows || !tableRect) {
                    return;
                }
                const rects = Array.from(rows).map(v => {
                    const rect = v.getBoundingClientRect();
                    return {
                        id: v.dataset.rowId,
                        top: rect.top,
                        bottom: rect.bottom,
                        mid: (rect.top + rect.bottom) / 2,
                        width: rect.width,
                        left: rect.left,
                    };
                });
                const getPosition = (y) => {
                    const data = rects.find(v => y < v.bottom);
                    if (!data || y < data.top) {
                        return;
                    }
                    return {
                        position: {
                            id: data.id,
                            before: y < data.mid,
                        },
                        y: y < data.mid ? data.top : data.bottom,
                        width: data.width,
                        x: data.left,
                    };
                };
                const dropPreview = createDropPreview();
                const dragPreview = createDragPreview();
                startDrag(e, {
                    transform: e => e,
                    onDrag: () => {
                        return {};
                    },
                    onMove: e => {
                        dragPreview.display(e.x, e.y);
                        const p = getPosition(e.y);
                        if (p) {
                            dropPreview.display(tableRect.left, p.y, tableRect.width);
                        }
                        else {
                            dropPreview.remove();
                        }
                        return {
                            position: p?.position,
                        };
                    },
                    onDrop: data => {
                        if (data.position) {
                            this.viewMethods.addRow?.(data.position);
                        }
                    },
                    onClear: () => {
                        dropPreview.remove();
                        dragPreview.remove();
                    },
                });
            };
            this.addRow = (position) => {
                this.viewMethods.addRow?.(position);
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _showToolBar_decorators = [state()];
            __esDecorate(this, null, _showToolBar_decorators, { kind: "accessor", name: "showToolBar", static: false, private: false, access: { has: obj => "showToolBar" in obj, get: obj => obj.showToolBar, set: (obj, value) => { obj.showToolBar = value; } }, metadata: _metadata }, _showToolBar_initializers, _showToolBar_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DataViewHeaderToolsAddRow = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get readonly() {
            return this.view.readonly;
        }
        static { this.styles = styles; }
        #showToolBar_accessor_storage;
        get showToolBar() { return this.#showToolBar_accessor_storage; }
        set showToolBar(value) { this.#showToolBar_accessor_storage = value; }
        connectedCallback() {
            super.connectedCallback();
            if (!this.readonly) {
                this.disposables.addFromEvent(this, 'pointerdown', e => {
                    this._dragStart(e);
                });
            }
        }
        render() {
            if (this.readonly) {
                return;
            }
            return html ` <div
      class="affine-database-toolbar-item new-record"
      draggable="true"
      @click="${this._onAddNewRecord}"
    >
      ${PlusIcon}<span>New Record</span>
    </div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DataViewHeaderToolsAddRow = _classThis;
})();
export { DataViewHeaderToolsAddRow };
const createDropPreview = () => {
    const div = document.createElement('div');
    div.dataset.isDropPreview = 'true';
    div.style.pointerEvents = 'none';
    div.style.position = 'fixed';
    div.style.zIndex = '9999';
    div.style.height = '4px';
    div.style.borderRadius = '2px';
    div.style.backgroundColor = 'var(--affine-primary-color)';
    div.style.boxShadow = '0px 0px 8px 0px rgba(30, 150, 235, 0.35)';
    return {
        display(x, y, width) {
            document.body.append(div);
            div.style.left = `${x}px`;
            div.style.top = `${y - 2}px`;
            div.style.width = `${width}px`;
        },
        remove() {
            div.remove();
        },
    };
};
const createDragPreview = () => {
    const preview = new NewRecordPreview();
    document.body.append(preview);
    return {
        display(x, y) {
            preview.style.left = `${x}px`;
            preview.style.top = `${y}px`;
        },
        remove() {
            preview.remove();
        },
    };
};
//# sourceMappingURL=add-row.js.map