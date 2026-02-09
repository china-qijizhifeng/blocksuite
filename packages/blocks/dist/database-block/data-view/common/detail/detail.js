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
import './field.js';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { css, nothing, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { html } from 'lit/static-html.js';
import { popFilterableSimpleMenu } from '../../../../_common/components/index.js';
import { renderUniLit } from '../../utils/uni-component/uni-component.js';
import { dataViewCommonStyle } from '../css-variable.js';
import { PlusIcon } from '../icons/index.js';
import { DetailSelection } from './selection.js';
const styles = css `
  ${unsafeCSS(dataViewCommonStyle('affine-data-view-record-detail'))}
  affine-data-view-record-detail {
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 20px 36px;
    gap: 12px;
    min-height: 100%;
    background-color: var(--affine-background-primary-color);
  }

  .add-property {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: var(--data-view-cell-text-size);
    font-style: normal;
    font-weight: 400;
    line-height: var(--data-view-cell-text-line-height);
    color: var(--affine-text-disable-color);
    border-radius: 4px;
    padding: 6px 8px 6px 4px;
    cursor: pointer;
    margin-top: 8px;
    width: max-content;
  }

  .add-property:hover {
    background-color: var(--affine-hover-color);
  }

  .add-property .icon {
    display: flex;
    align-items: center;
  }

  .add-property .icon svg {
    fill: var(--affine-icon-color);
    width: 20px;
    height: 20px;
  }
`;
let RecordDetail = (() => {
    let _classDecorators = [customElement('affine-data-view-record-detail')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _view_decorators;
    let _view_initializers = [];
    let _view_extraInitializers = [];
    let _rowId_decorators;
    let _rowId_initializers = [];
    let _rowId_extraInitializers = [];
    let _addPropertyButton_decorators;
    let _addPropertyButton_initializers = [];
    let _addPropertyButton_extraInitializers = [];
    var RecordDetail = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#view_accessor_storage = __runInitializers(this, _view_initializers, void 0);
            this.#rowId_accessor_storage = (__runInitializers(this, _view_extraInitializers), __runInitializers(this, _rowId_initializers, void 0));
            this.selection = (__runInitializers(this, _rowId_extraInitializers), new DetailSelection(this));
            this.#addPropertyButton_accessor_storage = __runInitializers(this, _addPropertyButton_initializers, void 0);
            this.detailSlots = __runInitializers(this, _addPropertyButton_extraInitializers);
            this._clickAddProperty = () => {
                popFilterableSimpleMenu(this.addPropertyButton, this.view.allColumnConfig.map(config => {
                    return {
                        type: 'action',
                        name: config.name,
                        icon: html ` <uni-lit
            .uni="${this.view.getIcon(config.type)}"
          ></uni-lit>`,
                        select: () => {
                            this.view.columnAdd('end', config.type);
                        },
                    };
                }));
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _view_decorators = [property({ attribute: false })];
            _rowId_decorators = [property({ attribute: false })];
            _addPropertyButton_decorators = [query('.add-property')];
            __esDecorate(this, null, _view_decorators, { kind: "accessor", name: "view", static: false, private: false, access: { has: obj => "view" in obj, get: obj => obj.view, set: (obj, value) => { obj.view = value; } }, metadata: _metadata }, _view_initializers, _view_extraInitializers);
            __esDecorate(this, null, _rowId_decorators, { kind: "accessor", name: "rowId", static: false, private: false, access: { has: obj => "rowId" in obj, get: obj => obj.rowId, set: (obj, value) => { obj.rowId = value; } }, metadata: _metadata }, _rowId_initializers, _rowId_extraInitializers);
            __esDecorate(this, null, _addPropertyButton_decorators, { kind: "accessor", name: "addPropertyButton", static: false, private: false, access: { has: obj => "addPropertyButton" in obj, get: obj => obj.addPropertyButton, set: (obj, value) => { obj.addPropertyButton = value; } }, metadata: _metadata }, _addPropertyButton_initializers, _addPropertyButton_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            RecordDetail = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get readonly() {
            return this.view.readonly;
        }
        get columns() {
            return this.view.detailColumns.map(id => this.view.columnGet(id));
        }
        static { this.styles = styles; }
        #view_accessor_storage;
        get view() { return this.#view_accessor_storage; }
        set view(value) { this.#view_accessor_storage = value; }
        #rowId_accessor_storage;
        get rowId() { return this.#rowId_accessor_storage; }
        set rowId(value) { this.#rowId_accessor_storage = value; }
        #addPropertyButton_accessor_storage;
        get addPropertyButton() { return this.#addPropertyButton_accessor_storage; }
        set addPropertyButton(value) { this.#addPropertyButton_accessor_storage = value; }
        renderHeader() {
            const header = this.detailSlots?.header;
            if (header) {
                const props = {
                    view: this.view,
                    rowId: this.rowId,
                };
                return renderUniLit(header, props);
            }
            return undefined;
        }
        renderNote() {
            const note = this.detailSlots?.note;
            if (note) {
                const props = {
                    view: this.view,
                    rowId: this.rowId,
                };
                return renderUniLit(note, props);
            }
            return undefined;
        }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.add(this.view.slots.update.on(() => {
                this.requestUpdate();
            }));
            this.disposables.addFromEvent(this, 'click', e => {
                e.stopPropagation();
                this.selection.selection = undefined;
            });
            //FIXME: simulate as a widget
            this.dataset.widgetId = 'affine-detail-widget';
            this.detailSlots = this.view.detailSlots;
        }
        render() {
            const columns = this.columns;
            return html `
      <div
        style="max-width: var(--affine-editor-width);display: flex;flex-direction: column;margin: 0 auto"
      >
        ${this.renderHeader()}
        ${repeat(columns, v => v.id, column => {
                return html ` <affine-data-view-record-field
              .view="${this.view}"
              .column="${column}"
              .rowId="${this.rowId}"
              data-column-id="${column.id}"
            ></affine-data-view-record-field>`;
            })}
        ${!this.readonly
                ? html `<div class="add-property" @click="${this._clickAddProperty}">
              <div class="icon">${PlusIcon}</div>
              Add Property
            </div>`
                : nothing}
        <div style="width: var(--affine-editor-width)"></div>
      </div>
      ${this.renderNote()}
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return RecordDetail = _classThis;
})();
export { RecordDetail };
//# sourceMappingURL=detail.js.map