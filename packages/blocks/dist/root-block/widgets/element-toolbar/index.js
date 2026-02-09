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
import '../../edgeless/components/buttons/tool-icon-button.js';
import '../../edgeless/components/buttons/menu-button.js';
import './more-button.js';
import { WidgetElement } from '@blocksuite/block-std';
import { baseTheme } from '@toeverything/theme';
import { css, html, nothing, unsafeCSS } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';
import { ConnectorCWithArrowIcon } from '../../../_common/icons/edgeless.js';
import { stopPropagation } from '../../../_common/utils/event.js';
import { atLeastNMatches, groupBy, pickValues, } from '../../../_common/utils/iterable.js';
import { ConnectorMode, GroupElementModel, } from '../../../surface-block/index.js';
import { clamp, } from '../../../surface-block/index.js';
import { renderMenuDivider } from '../../edgeless/components/buttons/menu-button.js';
import { edgelessElementsBound } from '../../edgeless/utils/bound-utils.js';
import { isAttachmentBlock, isBookmarkBlock, isEdgelessTextBlock, isEmbeddedBlock, isFrameBlock, isImageBlock, isNoteBlock, } from '../../edgeless/utils/query.js';
import { renderAddFrameButton } from './add-frame-button.js';
import { renderAddGroupButton } from './add-group-button.js';
import { renderAlignButton } from './align-button.js';
import { renderAttachmentButton } from './change-attachment-button.js';
import { renderChangeBrushButton } from './change-brush-button.js';
import { renderConnectorButton } from './change-connector-button.js';
import { renderChangeEdgelessTextButton } from './change-edgeless-text-button.js';
import { renderEmbedButton } from './change-embed-card-button.js';
import { renderFrameButton } from './change-frame-button.js';
import { renderGroupButton } from './change-group-button.js';
import { renderChangeImageButton } from './change-image-button.js';
import { renderMindmapButton } from './change-mindmap-button.js';
import { renderNoteButton } from './change-note-button.js';
import { renderChangeShapeButton } from './change-shape-button.js';
import { renderChangeTextButton } from './change-text-button.js';
import { renderReleaseFromGroupButton } from './release-from-group-button.js';
export const EDGELESS_ELEMENT_TOOLBAR_WIDGET = 'edgeless-element-toolbar-widget';
let EdgelessElementToolbarWidget = (() => {
    let _classDecorators = [customElement(EDGELESS_ELEMENT_TOOLBAR_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetElement;
    let __dragging_decorators;
    let __dragging_initializers = [];
    let __dragging_extraInitializers = [];
    let __registeredEntries_decorators;
    let __registeredEntries_initializers = [];
    let __registeredEntries_extraInitializers = [];
    let _enableNoteSlicer_decorators;
    let _enableNoteSlicer_initializers = [];
    let _enableNoteSlicer_extraInitializers = [];
    let _toolbarVisible_decorators;
    let _toolbarVisible_initializers = [];
    let _toolbarVisible_extraInitializers = [];
    let _selectedIds_decorators;
    let _selectedIds_initializers = [];
    let _selectedIds_extraInitializers = [];
    var EdgelessElementToolbarWidget = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_dragging_accessor_storage = __runInitializers(this, __dragging_initializers, false);
            this.#_registeredEntries_accessor_storage = (__runInitializers(this, __dragging_extraInitializers), __runInitializers(this, __registeredEntries_initializers, []));
            this.#enableNoteSlicer_accessor_storage = (__runInitializers(this, __registeredEntries_extraInitializers), __runInitializers(this, _enableNoteSlicer_initializers, void 0));
            this.#toolbarVisible_accessor_storage = (__runInitializers(this, _enableNoteSlicer_extraInitializers), __runInitializers(this, _toolbarVisible_initializers, false));
            this.#selectedIds_accessor_storage = (__runInitializers(this, _toolbarVisible_extraInitializers), __runInitializers(this, _selectedIds_initializers, []));
            this._updateOnSelectedChange = (__runInitializers(this, _selectedIds_extraInitializers), (element) => {
                const id = typeof element === 'string' ? element : element.id;
                if (this.isConnected && !this._dragging && this.selection.has(id)) {
                    this._recalculatePosition();
                    this.requestUpdate();
                }
            });
            this._quickConnect = ({ x, y }) => {
                const element = this.selection.selectedElements[0];
                const point = this.edgeless.service.viewport.toViewCoordFromClientCoord([
                    x,
                    y,
                ]);
                this.edgeless.doc.captureSync();
                this.edgeless.tools.setEdgelessTool({
                    type: 'connector',
                    mode: ConnectorMode.Curve,
                });
                const ctc = this.edgeless.tools.controllers['connector'];
                ctc.quickConnect(point, element);
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __dragging_decorators = [state()];
            __registeredEntries_decorators = [state()];
            _enableNoteSlicer_decorators = [property({ attribute: false })];
            _toolbarVisible_decorators = [state()];
            _selectedIds_decorators = [state({
                    hasChanged: (value, oldValue) => {
                        if (value.length !== oldValue?.length) {
                            return true;
                        }
                        return value.some((id, index) => id !== oldValue[index]);
                    },
                })];
            __esDecorate(this, null, __dragging_decorators, { kind: "accessor", name: "_dragging", static: false, private: false, access: { has: obj => "_dragging" in obj, get: obj => obj._dragging, set: (obj, value) => { obj._dragging = value; } }, metadata: _metadata }, __dragging_initializers, __dragging_extraInitializers);
            __esDecorate(this, null, __registeredEntries_decorators, { kind: "accessor", name: "_registeredEntries", static: false, private: false, access: { has: obj => "_registeredEntries" in obj, get: obj => obj._registeredEntries, set: (obj, value) => { obj._registeredEntries = value; } }, metadata: _metadata }, __registeredEntries_initializers, __registeredEntries_extraInitializers);
            __esDecorate(this, null, _enableNoteSlicer_decorators, { kind: "accessor", name: "enableNoteSlicer", static: false, private: false, access: { has: obj => "enableNoteSlicer" in obj, get: obj => obj.enableNoteSlicer, set: (obj, value) => { obj.enableNoteSlicer = value; } }, metadata: _metadata }, _enableNoteSlicer_initializers, _enableNoteSlicer_extraInitializers);
            __esDecorate(this, null, _toolbarVisible_decorators, { kind: "accessor", name: "toolbarVisible", static: false, private: false, access: { has: obj => "toolbarVisible" in obj, get: obj => obj.toolbarVisible, set: (obj, value) => { obj.toolbarVisible = value; } }, metadata: _metadata }, _toolbarVisible_initializers, _toolbarVisible_extraInitializers);
            __esDecorate(this, null, _selectedIds_decorators, { kind: "accessor", name: "selectedIds", static: false, private: false, access: { has: obj => "selectedIds" in obj, get: obj => obj.selectedIds, set: (obj, value) => { obj.selectedIds = value; } }, metadata: _metadata }, _selectedIds_initializers, _selectedIds_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessElementToolbarWidget = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get edgeless() {
            return this.blockElement;
        }
        get selection() {
            return this.edgeless.service.selection;
        }
        get slots() {
            return this.edgeless.slots;
        }
        get surface() {
            return this.edgeless.surface;
        }
        static { this.styles = css `
    :host {
      position: absolute;
      z-index: 3;
      transform: translateZ(0);
      will-change: transform;
      -webkit-user-select: none;
      user-select: none;
    }

    .edgeless-component-toolbar-container {
      display: flex;
      height: 36px;
      width: max-content;
      padding: 0 6px;
      align-items: center;
      gap: 8px;
      background: var(--affine-background-overlay-panel-color);
      border: 0.5px solid var(--affine-border-color);
      box-shadow: var(--affine-shadow-4);
      border-radius: 4px;
      box-sizing: content-box;

      text-align: justify;
      font-feature-settings:
        'clig' off,
        'liga' off;
      font-family: ${unsafeCSS(baseTheme.fontSansFamily)};
      font-size: var(--affine-font-sm);
      font-style: normal;
      font-weight: 400;
      line-height: 22px; /* 157.143% */
    }

    .edgeless-component-toolbar-container > * {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
      color: var(--affine-text-primary-color);
      fill: currentColor;
    }
  `; }
        #_dragging_accessor_storage;
        get _dragging() { return this.#_dragging_accessor_storage; }
        set _dragging(value) { this.#_dragging_accessor_storage = value; }
        #_registeredEntries_accessor_storage;
        get _registeredEntries() { return this.#_registeredEntries_accessor_storage; }
        set _registeredEntries(value) { this.#_registeredEntries_accessor_storage = value; }
        #enableNoteSlicer_accessor_storage;
        get enableNoteSlicer() { return this.#enableNoteSlicer_accessor_storage; }
        set enableNoteSlicer(value) { this.#enableNoteSlicer_accessor_storage = value; }
        #toolbarVisible_accessor_storage;
        get toolbarVisible() { return this.#toolbarVisible_accessor_storage; }
        set toolbarVisible(value) { this.#toolbarVisible_accessor_storage = value; }
        #selectedIds_accessor_storage;
        get selectedIds() { return this.#selectedIds_accessor_storage; }
        set selectedIds(value) { this.#selectedIds_accessor_storage = value; }
        _groupSelected() {
            const result = groupBy(this.selection.selectedElements, model => {
                if (isNoteBlock(model)) {
                    return 'note';
                }
                else if (isFrameBlock(model)) {
                    return 'frame';
                }
                else if (isImageBlock(model)) {
                    return 'image';
                }
                else if (isAttachmentBlock(model)) {
                    return 'attachment';
                }
                else if (isBookmarkBlock(model) || isEmbeddedBlock(model)) {
                    return 'embedCard';
                }
                else if (isEdgelessTextBlock(model)) {
                    return 'edgelessText';
                }
                return model.type;
            });
            return result;
        }
        _recalculatePosition() {
            const { selection, viewport } = this.edgeless.service;
            const elements = selection.selectedElements;
            if (elements.length === 0) {
                this.style.transform = 'translate3d(0, 0, 0)';
                return;
            }
            const bound = edgelessElementsBound(selection.selectedElements);
            const { width, height } = viewport;
            const [x, y] = viewport.toViewCoord(bound.x, bound.y);
            const [right, bottom] = viewport.toViewCoord(bound.maxX, bound.maxY);
            let left, top;
            if (x >= width || right <= 0 || y >= height || bottom <= 0) {
                left = x;
                top = y;
                this.style.transform = `translate3d(${left}px, ${top}px, 0)`;
                return;
            }
            let offset = 70;
            if (this.selection.selectedElements.some(ele => isFrameBlock(ele))) {
                offset += 10;
            }
            top = y - offset;
            top < 0 && (top = y + bound.h * viewport.zoom + offset);
            left = clamp(x, 10, width - 10);
            top = clamp(top, 10, height - 150);
            this.style.transform = `translate3d(${left}px, ${top}px, 0)`;
            this.selectedIds = selection.selectedIds;
        }
        _renderQuickConnectButton() {
            return [
                html `
        <edgeless-tool-icon-button
          aria-label="Draw connector"
          .tooltip=${'Draw connector'}
          .activeMode=${'background'}
          @click=${this._quickConnect}
        >
          ${ConnectorCWithArrowIcon}
        </edgeless-tool-icon-button>
      `,
            ];
        }
        firstUpdated() {
            const { _disposables, edgeless } = this;
            _disposables.add(edgeless.service.viewport.viewportUpdated.on(() => {
                this._recalculatePosition();
            }));
            _disposables.add(this.selection.slots.updated.on(() => {
                if (this.selection.selectedIds.length === 0 ||
                    this.selection.editing ||
                    this.selection.inoperable) {
                    this.toolbarVisible = false;
                }
                else {
                    this.toolbarVisible = true;
                    this._recalculatePosition();
                }
            }));
            pickValues(this.edgeless.service.surface, [
                'elementAdded',
                'elementUpdated',
            ]).forEach(slot => _disposables.add(slot.on(this._updateOnSelectedChange)));
            _disposables.add(this.doc.slots.blockUpdated.on(this._updateOnSelectedChange));
            _disposables.add(edgeless.dispatcher.add('dragStart', () => {
                this._dragging = true;
            }));
            _disposables.add(edgeless.dispatcher.add('dragEnd', () => {
                this._dragging = false;
                this._recalculatePosition();
            }));
            _disposables.add(edgeless.slots.elementResizeStart.on(() => {
                this._dragging = true;
            }));
            _disposables.add(edgeless.slots.elementResizeEnd.on(() => {
                this._dragging = false;
                this._recalculatePosition();
            }));
        }
        registerEntry(entry) {
            this._registeredEntries.push(entry);
        }
        render() {
            if (this.doc.readonly || this._dragging || !this.toolbarVisible) {
                return nothing;
            }
            const groupedSelected = this._groupSelected();
            const { edgeless, selection } = this;
            const { shape, brush, connector, note, text, frame, group, embedCard, attachment, image, edgelessText, mindmap: mindmaps, } = groupedSelected;
            const { selectedElements } = this.selection;
            const selectedAtLeastTwoTypes = atLeastNMatches(Object.values(groupedSelected), e => !!e.length, 2);
            const quickConnectButton = selectedElements.length === 1 && !connector?.length
                ? this._renderQuickConnectButton()
                : undefined;
            const generalButtons = selectedElements.length !== connector?.length
                ? [
                    renderAddFrameButton(edgeless, selectedElements),
                    renderAddGroupButton(edgeless, selectedElements),
                    renderAlignButton(edgeless, selectedElements),
                ]
                : [];
            const buttons = selectedAtLeastTwoTypes
                ? generalButtons
                : [
                    ...generalButtons,
                    renderMindmapButton(edgeless, mindmaps),
                    renderMindmapButton(edgeless, shape),
                    renderChangeShapeButton(edgeless, shape),
                    renderChangeBrushButton(edgeless, brush),
                    renderConnectorButton(edgeless, connector),
                    renderNoteButton(edgeless, note, quickConnectButton),
                    renderChangeTextButton(edgeless, text),
                    renderChangeEdgelessTextButton(edgeless, edgelessText),
                    renderFrameButton(edgeless, frame),
                    renderGroupButton(edgeless, group),
                    renderEmbedButton(edgeless, embedCard, quickConnectButton),
                    renderAttachmentButton(edgeless, attachment),
                    renderChangeImageButton(edgeless, image),
                ];
            if (selectedElements.length === 1) {
                if (selection.firstElement.group instanceof GroupElementModel) {
                    buttons.unshift(renderReleaseFromGroupButton(this.edgeless));
                }
                if (!connector?.length) {
                    buttons.push(quickConnectButton?.pop() ?? nothing);
                }
            }
            this._registeredEntries
                .filter(entry => entry.when(selectedElements))
                .map(entry => entry.render(this.edgeless))
                .forEach(entry => entry && buttons.unshift(entry));
            buttons.push(html `
      <edgeless-more-button
        .elements=${selectedElements}
        .edgeless=${edgeless}
        .vertical=${true}
      ></edgeless-more-button>
    `);
            return html `
      <div
        class="edgeless-component-toolbar-container"
        @pointerdown=${stopPropagation}
      >
        ${join(buttons.filter(b => b !== nothing), renderMenuDivider)}
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessElementToolbarWidget = _classThis;
})();
export { EdgelessElementToolbarWidget };
//# sourceMappingURL=index.js.map