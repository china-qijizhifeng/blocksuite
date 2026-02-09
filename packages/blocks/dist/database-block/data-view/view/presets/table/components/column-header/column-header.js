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
import './database-header-column.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { autoUpdate, computePosition, shift, } from '@floating-ui/dom';
import { nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { createRef, ref } from 'lit/directives/ref.js';
import { repeat } from 'lit/directives/repeat.js';
import { styleMap } from 'lit/directives/style-map.js';
import { html } from 'lit/static-html.js';
import { AddCursorIcon } from '../../../../../../../_common/icons/index.js';
import { getScrollContainer } from '../../../../../../../_common/utils/scroll-container.js';
import { renderTemplate } from '../../../../../utils/uni-component/render-template.js';
import { styles } from './styles.js';
let DatabaseColumnHeader = (() => {
    let _classDecorators = [customElement('affine-database-column-header')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _tableViewManager_decorators;
    let _tableViewManager_initializers = [];
    let _tableViewManager_extraInitializers = [];
    let _renderGroupHeader_decorators;
    let _renderGroupHeader_initializers = [];
    let _renderGroupHeader_extraInitializers = [];
    let _scaleDiv_decorators;
    let _scaleDiv_initializers = [];
    let _scaleDiv_extraInitializers = [];
    var DatabaseColumnHeader = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _tableViewManager_decorators = [property({ attribute: false })];
            _renderGroupHeader_decorators = [property({ attribute: false })];
            _scaleDiv_decorators = [query('.scale-div')];
            __esDecorate(this, null, _tableViewManager_decorators, { kind: "accessor", name: "tableViewManager", static: false, private: false, access: { has: obj => "tableViewManager" in obj, get: obj => obj.tableViewManager, set: (obj, value) => { obj.tableViewManager = value; } }, metadata: _metadata }, _tableViewManager_initializers, _tableViewManager_extraInitializers);
            __esDecorate(this, null, _renderGroupHeader_decorators, { kind: "accessor", name: "renderGroupHeader", static: false, private: false, access: { has: obj => "renderGroupHeader" in obj, get: obj => obj.renderGroupHeader, set: (obj, value) => { obj.renderGroupHeader = value; } }, metadata: _metadata }, _renderGroupHeader_initializers, _renderGroupHeader_extraInitializers);
            __esDecorate(this, null, _scaleDiv_decorators, { kind: "accessor", name: "scaleDiv", static: false, private: false, access: { has: obj => "scaleDiv" in obj, get: obj => obj.scaleDiv, set: (obj, value) => { obj.scaleDiv = value; } }, metadata: _metadata }, _scaleDiv_initializers, _scaleDiv_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            DatabaseColumnHeader = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get readonly() {
            return this.tableViewManager.readonly;
        }
        static { this.styles = styles; }
        #tableViewManager_accessor_storage;
        get tableViewManager() { return this.#tableViewManager_accessor_storage; }
        set tableViewManager(value) { this.#tableViewManager_accessor_storage = value; }
        #renderGroupHeader_accessor_storage;
        get renderGroupHeader() { return this.#renderGroupHeader_accessor_storage; }
        set renderGroupHeader(value) { this.#renderGroupHeader_accessor_storage = value; }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.add(this.tableViewManager.slots.update.on(() => {
                this.requestUpdate();
            }));
            const scrollContainer = getScrollContainer(this.closest('affine-data-view-renderer'));
            const group = this.closest('affine-data-view-table-group');
            if (group) {
                const cancel = autoUpdate(group, this, () => {
                    if (!scrollContainer) {
                        return;
                    }
                    computePosition(group, this, {
                        middleware: [headerShift(scrollContainer)],
                    })
                        .then(data => {
                        const x = data.middlewareData.headerShift.x;
                        this.style.transform = `translate3d(0,${x / this.getScale()}px,0)`;
                    })
                        .catch(console.error);
                });
                this.disposables.add(cancel);
            }
            if (group) {
                this.disposables.addFromEvent(group, 'mouseenter', () => {
                    this.addColumnButton.style.visibility = 'visible';
                });
                this.disposables.addFromEvent(group, 'mouseleave', () => {
                    this.addColumnButton.style.visibility = 'hidden';
                });
                this.disposables.addFromEvent(this.addColumnButton, 'mouseenter', () => {
                    this.addColumnButton.style.visibility = 'visible';
                });
                this.disposables.addFromEvent(this.addColumnButton, 'mouseleave', () => {
                    this.addColumnButton.style.visibility = 'hidden';
                });
                this.addColumnButton.style.visibility = 'hidden';
                this.addColumnButton.style.transition = 'visibility 0.2s';
                this.addColumnButton.style.marginLeft = '20px';
                this.addColumnButton.style.position = 'absolute';
                this.addColumnButton.style.zIndex = '1';
                this.closest('affine-data-view-renderer')?.append(this.addColumnButton);
                requestAnimationFrame(() => {
                    const referenceEl = this.addColumnPositionRef.value;
                    if (!referenceEl) {
                        return;
                    }
                    const cleanup = autoUpdate(referenceEl, this.addColumnButton, this.updateAddButton);
                    this.disposables.add({
                        dispose: () => {
                            cleanup();
                            this.addColumnButton.remove();
                        },
                    });
                });
            }
        }
        #scaleDiv_accessor_storage;
        get scaleDiv() { return this.#scaleDiv_accessor_storage; }
        set scaleDiv(value) { this.#scaleDiv_accessor_storage = value; }
        getScale() {
            return this.scaleDiv?.getBoundingClientRect().width ?? 1;
        }
        render() {
            this.updateAddButton();
            return html `
      ${this.renderGroupHeader?.()}
      <div class="affine-database-column-header database-row">
        <div class="data-view-table-left-bar"></div>
        ${repeat(this.tableViewManager.columnManagerList, column => column.id, (column, index) => {
                const style = styleMap({
                    width: `${column.width}px`,
                    border: index === 0 ? 'none' : undefined,
                });
                return html ` <affine-database-header-column
              style="${style}"
              data-column-id="${column.id}"
              data-column-index="${index}"
              class="affine-database-column database-cell"
              .column="${column}"
              .tableViewManager="${this.tableViewManager}"
            ></affine-database-header-column>`;
            })}
        <div
          style="background-color: var(--affine-border-color);width: 1px;"
        ></div>
        <div style="height: 0;" ${ref(this.addColumnPositionRef)}></div>
        <div class="scale-div" style="width: 1px;height: 1px;"></div>
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            this.addColumnPositionRef = createRef();
            this.#tableViewManager_accessor_storage = __runInitializers(this, _tableViewManager_initializers, void 0);
            this.#renderGroupHeader_accessor_storage = (__runInitializers(this, _tableViewManager_extraInitializers), __runInitializers(this, _renderGroupHeader_initializers, void 0));
            this.addColumnButton = (__runInitializers(this, _renderGroupHeader_extraInitializers), renderTemplate(() => {
                if (this.readonly)
                    return nothing;
                return html ` <div
      @click="${this._onAddColumn}"
      class="header-add-column-button dv-hover"
    >
      ${AddCursorIcon}
    </div>`;
            }));
            this._onAddColumn = () => {
                if (this.readonly)
                    return;
                this.tableViewManager.columnAdd('end');
                requestAnimationFrame(() => {
                    this.editLastColumnTitle();
                });
            };
            this.updateAddButton = () => {
                const referenceEl = this.addColumnPositionRef.value;
                if (!referenceEl) {
                    return;
                }
                computePosition(referenceEl, this.addColumnButton, {
                    middleware: [
                        shift({
                            boundary: this.closest('affine-database-table') ?? this,
                            padding: -20,
                        }),
                    ],
                })
                    .then(({ x, y }) => {
                    Object.assign(this.addColumnButton.style, {
                        left: `${x}px`,
                        top: `${y}px`,
                    });
                })
                    .catch(console.error);
            };
            this.editLastColumnTitle = () => {
                const columns = this.querySelectorAll('affine-database-header-column');
                const column = columns.item(columns.length - 1);
                column.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                column.editTitle();
            };
            this.#scaleDiv_accessor_storage = __runInitializers(this, _scaleDiv_initializers, void 0);
            __runInitializers(this, _scaleDiv_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return DatabaseColumnHeader = _classThis;
})();
export { DatabaseColumnHeader };
const headerShift = (container) => {
    return {
        name: 'headerShift',
        fn({ x, y, elements }) {
            const referenceRect = elements.reference.getBoundingClientRect();
            const floatingRect = elements.floating.getBoundingClientRect();
            const rootRect = container.getBoundingClientRect();
            let moveX = 0;
            if (rootRect.top > referenceRect.top) {
                moveX =
                    Math.min(referenceRect.bottom - floatingRect.height, rootRect.top) -
                        referenceRect.top;
            }
            return {
                x,
                y,
                data: {
                    x: moveX,
                },
            };
        },
    };
};
//# sourceMappingURL=column-header.js.map