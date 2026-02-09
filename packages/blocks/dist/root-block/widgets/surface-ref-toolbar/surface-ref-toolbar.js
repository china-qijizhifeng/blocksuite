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
import { WidgetElement } from '@blocksuite/block-std';
import { offset, shift } from '@floating-ui/dom';
import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { HoverController } from '../../../_common/components/hover/controller.js';
import { isPeekable, peek } from '../../../_common/components/peekable.js';
import { toast } from '../../../_common/components/toast.js';
import { PAGE_HEADER_HEIGHT } from '../../../_common/consts.js';
import { EdgelessModeIcon } from '../../../_common/icons/edgeless.js';
import { CaptionIcon, CenterPeekIcon, CopyIcon, DeleteIcon, DownloadIcon, } from '../../../_common/icons/text.js';
import { downloadBlob } from '../../../_common/utils/filesys.js';
import { edgelessToBlob, writeImageBlobToClipboard } from './utils.js';
export const AFFINE_SURFACE_REF_TOOLBAR = 'affine-surface-ref-toolbar';
let AffineSurfaceRefToolbar = (() => {
    let _classDecorators = [customElement(AFFINE_SURFACE_REF_TOOLBAR)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetElement;
    var AffineSurfaceRefToolbar = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._hoverController = new HoverController(this, ({ abortController }) => {
                const surfaceRefBlock = this.blockElement;
                const selection = this.host.selection;
                const textSelection = selection.find('text');
                if (!!textSelection &&
                    (!!textSelection.to || !!textSelection.from.length)) {
                    return null;
                }
                const blockSelections = selection.filter('block');
                if (blockSelections.length > 1 ||
                    (blockSelections.length === 1 &&
                        blockSelections[0].blockId !== surfaceRefBlock.blockId)) {
                    return null;
                }
                return {
                    template: SurfaceRefToolbarOptions({
                        blockElement: this.blockElement,
                        model: this.blockElement.model,
                        abortController,
                    }),
                    computePosition: {
                        referenceElement: this.blockElement,
                        placement: 'top-start',
                        middleware: [
                            offset({
                                mainAxis: 12,
                                crossAxis: 10,
                            }),
                            shift({
                                crossAxis: true,
                                padding: {
                                    top: PAGE_HEADER_HEIGHT + 12,
                                    bottom: 12,
                                    right: 12,
                                },
                            }),
                        ],
                        autoUpdate: true,
                    },
                };
            });
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineSurfaceRefToolbar = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        connectedCallback() {
            super.connectedCallback();
            this._hoverController.setReference(this.blockElement);
        }
    };
    return AffineSurfaceRefToolbar = _classThis;
})();
export { AffineSurfaceRefToolbar };
function SurfaceRefToolbarOptions(options) {
    const { blockElement, model, abortController } = options;
    const readonly = model.doc.readonly;
    const hasValidReference = !!blockElement.referenceModel;
    return html `
    <style>
      :host {
        z-index: 1;
      }
      .surface-ref-toolbar-container {
        display: flex;
        box-sizing: border-box;
        box-shadow: var(--affine-shadow-2);
        border-radius: 8px;
        list-style: none;
        padding: 4px 8px;
        gap: 4px;
        align-items: center;
        background-color: var(--affine-background-overlay-panel-color);
        margin: 0;
      }
      .delete-button:hover {
        background: var(--affine-background-error-color);
        color: var(--affine-error-color);
      }
      .delete-button:hover > svg {
        color: var(--affine-error-color);
      }

      .divider {
        width: 1px;
        height: 24px;
        background-color: var(--affine-border-color);
        margin: 0 8px;
      }

      .view-in-edgeless-button {
        font-size: 12px;
        color: var(--affine-text-secondary-color);
        font-weight: 600;
        gap: 2px;
      }
    </style>

    <div class="surface-ref-toolbar-container">
      <icon-button
        ?hidden=${!hasValidReference || readonly}
        class="view-in-edgeless-button"
        text="View in Edgeless"
        width="fit-content"
        @click=${() => blockElement.viewInEdgeless()}
        >${EdgelessModeIcon}
      </icon-button>

      <div
        class="divider"
        ?hidden=${readonly}
        style=${styleMap({
        display: hasValidReference ? undefined : 'none',
    })}
      ></div>

      <icon-button
        size="32px"
        ?hidden=${readonly}
        @click=${() => {
        abortController.abort();
        blockElement.captionElement.show();
    }}
      >
        ${CaptionIcon}

        <affine-tooltip tip-position="top">Caption</affine-tooltip>
      </icon-button>

      <icon-button
        size="32px"
        ?hidden=${!hasValidReference}
        @click=${() => {
        const referencedModel = blockElement.referenceModel;
        if (!referencedModel)
            return;
        edgelessToBlob(blockElement.host, {
            surfaceRefBlock: blockElement,
            surfaceRenderer: blockElement.surfaceRenderer,
            edgelessElement: referencedModel,
            blockContainer: blockElement.portal,
        })
            .then(blob => {
            const fileName = 'title' in referencedModel
                ? referencedModel.title?.toString() ?? 'Edgeless Content'
                : 'Edgeless Content';
            downloadBlob(blob, fileName);
        })
            .catch(err => {
            console.error(err);
        });
    }}
      >
        ${DownloadIcon}

        <affine-tooltip tip-position="top">Download</affine-tooltip>
      </icon-button>

      ${isPeekable(blockElement)
        ? html `<icon-button
            size="32px"
            ?hidden=${!hasValidReference}
            @click=${() => {
            peek(blockElement);
        }}
          >
            ${CenterPeekIcon}
            <affine-tooltip tip-position="top"
              >Open in center peek</affine-tooltip
            >
          </icon-button>`
        : nothing}

      <icon-button
        size="32px"
        ?hidden=${!hasValidReference}
        @click=${() => {
        edgelessToBlob(blockElement.host, {
            surfaceRefBlock: blockElement,
            surfaceRenderer: blockElement.surfaceRenderer,
            edgelessElement: blockElement.referenceModel,
            blockContainer: blockElement.portal,
        })
            .then(blob => {
            return writeImageBlobToClipboard(blob);
        })
            .then(() => {
            toast(blockElement.host, 'Copied image to clipboard');
        })
            .catch(err => {
            console.error(err);
        });
    }}
      >
        ${CopyIcon}

        <affine-tooltip tip-position="top">Copy to clipboard</affine-tooltip>
      </icon-button>

      <icon-button
        class="delete-button"
        size="32px"
        ?hidden=${readonly}
        @click="${() => {
        model.doc.deleteBlock(model);
        abortController.abort();
    }}"
      >
        ${DeleteIcon}

        <affine-tooltip tip-position="top">Delete</affine-tooltip>
      </icon-button>
    </div>
  `;
}
//# sourceMappingURL=surface-ref-toolbar.js.map