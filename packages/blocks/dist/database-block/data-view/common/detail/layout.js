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
import { ShadowlessElement } from '@blocksuite/block-std';
import { autoUpdate, computePosition, size, } from '@floating-ui/dom';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { createModal } from '../../../../_common/components/index.js';
import { CrossIcon } from '../icons/index.js';
import { RecordDetail } from './detail.js';
let SideLayoutModal = (() => {
    let _classDecorators = [customElement('side-layout-modal')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = ShadowlessElement;
    let _content_decorators;
    let _content_initializers = [];
    let _content_extraInitializers = [];
    let _close_decorators;
    let _close_initializers = [];
    let _close_extraInitializers = [];
    var SideLayoutModal = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _content_decorators = [property({ attribute: false })];
            _close_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _content_decorators, { kind: "accessor", name: "content", static: false, private: false, access: { has: obj => "content" in obj, get: obj => obj.content, set: (obj, value) => { obj.content = value; } }, metadata: _metadata }, _content_initializers, _content_extraInitializers);
            __esDecorate(this, null, _close_decorators, { kind: "accessor", name: "close", static: false, private: false, access: { has: obj => "close" in obj, get: obj => obj.close, set: (obj, value) => { obj.close = value; } }, metadata: _metadata }, _close_initializers, _close_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            SideLayoutModal = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    side-layout-modal {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 0;
      bottom: 0;
      width: 1200px;
      background-color: var(--affine-background-overlay-panel-color);
      border-left: 0.5px solid var(--affine-border-color);
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    }

    .side-modal-content {
      flex: 1;
      overflow-y: auto;
    }

    .side-modal-header {
      padding: 12px;
      display: flex;
      align-items: center;
    }

    .header-ops {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .header-op {
      display: flex;
      align-items: center;
      padding: 2px;
      border-radius: 4px;
      cursor: pointer;
    }

    .header-op svg {
      width: 20px;
      height: 20px;
      color: var(--affine-icon-color);
    }

    .header-op:hover {
      background-color: var(--affine-hover-color);
    }
  `; }
        #content_accessor_storage = __runInitializers(this, _content_initializers, undefined);
        get content() { return this.#content_accessor_storage; }
        set content(value) { this.#content_accessor_storage = value; }
        #close_accessor_storage = (__runInitializers(this, _content_extraInitializers), __runInitializers(this, _close_initializers, undefined));
        get close() { return this.#close_accessor_storage; }
        set close(value) { this.#close_accessor_storage = value; }
        renderOps() {
            return html ``;
            // return html`
            //   <div class='header-op' style='transform: rotate(180deg)'>
            //     ${arrowUp}
            //   </div>
            //   <div class='header-op'>${arrowUp}</div>`;
        }
        render() {
            return html `
      <div class="side-modal-header">
        <div @click="${this.close}" class="close-modal header-op">
          ${CrossIcon}
        </div>
        <div class="header-ops">${this.renderOps()}</div>
      </div>
      <div class="side-modal-content">${this.content}</div>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _close_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return SideLayoutModal = _classThis;
})();
export const popSideDetail = (ops) => {
    const modal = createModal(document.body);
    // fit to the size of the body element
    const cancel = autoUpdate(ops.target, modal, () => {
        computePosition(ops.target, modal, {
            middleware: [
                size({
                    apply: ({ rects }) => {
                        Object.assign(modal.style, {
                            left: `${rects.reference.x}px`,
                            top: `${rects.reference.y}px`,
                            width: `${rects.reference.width}px`,
                            height: `${rects.reference.height}px`,
                        });
                    },
                }),
            ],
        }).catch(console.error);
    });
    const close = () => {
        modal.remove();
        ops.onClose?.();
        cancel();
    };
    const detail = new RecordDetail();
    detail.view = ops.view;
    detail.rowId = ops.rowId;
    const sideContainer = new SideLayoutModal();
    sideContainer.content = detail;
    sideContainer.close = close;
    modal.onclick = e => e.target === modal && close();
    modal.append(sideContainer);
};
export const createRecordDetail = (ops) => {
    return html `<affine-data-view-record-detail
    .view=${ops.view}
    .rowId=${ops.rowId}
    class="data-view-popup-container"
  ></affine-data-view-record-detail>`;
};
//# sourceMappingURL=layout.js.map