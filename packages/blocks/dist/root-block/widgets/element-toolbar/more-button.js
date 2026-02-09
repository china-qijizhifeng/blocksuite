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
import '../../edgeless/components/toolbar/shape/shape-menu.js';
import { WithDisposable } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { css, html, LitElement, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { join } from 'lit/directives/join.js';
import { repeat } from 'lit/directives/repeat.js';
import { isPeekable, peek } from '../../../_common/components/peekable.js';
import { BringForwardIcon, BringToFrontIcon, CenterPeekIcon, CopyAsPngIcon, FontLinkedDocIcon, FrameIcon, GroupIcon, MoreCopyIcon, MoreDeleteIcon, MoreDuplicateIcon, MoreHorizontalIcon, MoreVerticalIcon, OpenIcon, RefreshIcon, SendBackwardIcon, SendToBackIcon, } from '../../../_common/icons/index.js';
import { createLinkedDocFromEdgelessElements, createLinkedDocFromNote, notifyDocCreated, promptDocTitle, } from '../../../_common/utils/render-linked-doc.js';
import { Bound } from '../../../surface-block/index.js';
import { removeContainedFrames } from '../../edgeless/frame-manager.js';
import { edgelessElementsBound } from '../../edgeless/utils/bound-utils.js';
import { duplicate, splitElements, } from '../../edgeless/utils/clipboard-utils.js';
import { getCloneElements } from '../../edgeless/utils/clone-utils.js';
import { moveConnectors } from '../../edgeless/utils/connector.js';
import { deleteElements } from '../../edgeless/utils/crud.js';
import { isAttachmentBlock, isBookmarkBlock, isEmbeddedLinkBlock, isEmbedLinkedDocBlock, isEmbedSyncedDocBlock, isFrameBlock, isImageBlock, isNoteBlock, } from '../../edgeless/utils/query.js';
const OPEN_ACTION = {
    icon: OpenIcon,
    name: 'Open this doc',
    type: 'open',
};
const CENTER_PEEK_ACTION = {
    icon: CenterPeekIcon,
    name: 'Open in center peek',
    type: 'center-peek',
};
const REORDER_ACTIONS = [
    { icon: BringToFrontIcon, name: 'Bring to Front', type: 'front' },
    { icon: BringForwardIcon, name: 'Bring Forward', type: 'forward' },
    { icon: SendBackwardIcon, name: 'Send Backward', type: 'backward' },
    { icon: SendToBackIcon, name: 'Send to Back', type: 'back' },
];
const COPY_ACTIONS = [
    { icon: MoreCopyIcon, name: 'Copy', type: 'copy' },
    { icon: CopyAsPngIcon, name: 'Copy as PNG', type: 'copy-as-png' },
    { icon: MoreDuplicateIcon, name: 'Duplicate', type: 'duplicate' },
];
const DELETE_ACTION = {
    icon: MoreDeleteIcon,
    name: 'Delete',
    type: 'delete',
};
const FRAME_ACTION = {
    icon: FrameIcon,
    name: 'Frame section',
    type: 'create-frame',
};
const GROUP_ACTION = {
    icon: GroupIcon,
    name: 'Group section',
    type: 'create-group',
};
const RELOAD_ACTION = {
    icon: RefreshIcon,
    name: 'Reload',
    type: 'reload',
};
const TURN_INTO_LINKED_DOC_ACTION = {
    icon: FontLinkedDocIcon,
    name: 'Turn into linked doc',
    type: 'turn-into-linked-doc',
};
const CREATE_LINKED_DOC_ACTION = {
    icon: FontLinkedDocIcon,
    name: 'Create linked doc',
    type: 'create-linked-doc',
};
function Actions(fatActions, onClick) {
    return join(fatActions
        .filter(g => g.length)
        .map(g => g.filter(a => a !== nothing))
        .filter(g => g.length)
        .map(actions => repeat(actions, action => action.type, action => html `
            <div
              aria-label=${action.name}
              class="action-item ${action.type}"
              @click=${() => onClick(action)}
              ?data-disabled=${action.disabled}
            >
              ${action.icon}${action.name}
            </div>
          `)), () => html `
      <edgeless-menu-divider
        data-orientation="horizontal"
        style="--height: 8px"
      ></edgeless-menu-divider>
    `);
}
let EdgelessMoreButton = (() => {
    let _classDecorators = [customElement('edgeless-more-button')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let _elements_decorators;
    let _elements_initializers = [];
    let _elements_extraInitializers = [];
    let _edgeless_decorators;
    let _edgeless_initializers = [];
    let _edgeless_extraInitializers = [];
    let _vertical_decorators;
    let _vertical_initializers = [];
    let _vertical_extraInitializers = [];
    var EdgelessMoreButton = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#elements_accessor_storage = __runInitializers(this, _elements_initializers, []);
            this.#edgeless_accessor_storage = (__runInitializers(this, _elements_extraInitializers), __runInitializers(this, _edgeless_initializers, void 0));
            this.#vertical_accessor_storage = (__runInitializers(this, _edgeless_extraInitializers), __runInitializers(this, _vertical_initializers, false));
            this._turnIntoLinkedDoc = (__runInitializers(this, _vertical_extraInitializers), (title) => {
                const isSingleSelect = this.selection.selectedElements.length === 1;
                const { firstElement: element } = this.selection;
                if (isSingleSelect && isNoteBlock(element)) {
                    const linkedDoc = createLinkedDocFromNote(this.edgeless.host.doc, element, title);
                    // insert linked doc card
                    const cardId = this.edgeless.service.addBlock('affine:embed-synced-doc', {
                        xywh: element.xywh,
                        style: 'syncedDoc',
                        pageId: linkedDoc.id,
                        index: element.index,
                    }, this.surface.model.id);
                    this.edgeless.service.telemetryService?.track('CanvasElementAdded', {
                        control: 'context-menu',
                        page: 'whiteboard editor',
                        module: 'toolbar',
                        segment: 'toolbar',
                        type: 'embed-synced-doc',
                    });
                    this.edgeless.service.telemetryService?.track('DocCreated', {
                        control: 'turn into linked doc',
                        page: 'whiteboard editor',
                        module: 'format toolbar',
                        type: 'embed-linked-doc',
                    });
                    this.edgeless.service.telemetryService?.track('LinkedDocCreated', {
                        control: 'turn into linked doc',
                        page: 'whiteboard editor',
                        module: 'format toolbar',
                        type: 'embed-linked-doc',
                        other: 'new doc',
                    });
                    moveConnectors(element.id, cardId, this.edgeless.service);
                    // delete selected note
                    this.doc.transact(() => {
                        this.surface.doc.deleteBlock(element);
                    });
                    this.edgeless.service.selection.set({
                        elements: [cardId],
                        editing: false,
                    });
                }
                else {
                    this._createLinkedDoc(title);
                }
            });
            this._createLinkedDoc = (title) => {
                const selection = this.edgeless.service.selection;
                const elements = getCloneElements(selection.selectedElements, this.edgeless.surface.edgeless.service.frame);
                const linkedDoc = createLinkedDocFromEdgelessElements(this.edgeless.host, elements, title);
                // insert linked doc card
                const width = 364;
                const height = 390;
                const bound = edgelessElementsBound(elements);
                const cardId = this.edgeless.service.addBlock('affine:embed-linked-doc', {
                    xywh: `[${bound.center[0] - width / 2}, ${bound.center[1] - height / 2}, ${width}, ${height}]`,
                    style: 'vertical',
                    pageId: linkedDoc.id,
                }, this.surface.model.id);
                this.edgeless.service.telemetryService?.track('CanvasElementAdded', {
                    control: 'context-menu',
                    page: 'whiteboard editor',
                    module: 'toolbar',
                    segment: 'toolbar',
                    type: 'embed-linked-doc',
                });
                this.edgeless.service.telemetryService?.track('DocCreated', {
                    control: 'create linked doc',
                    page: 'whiteboard editor',
                    module: 'format toolbar',
                    type: 'embed-linked-doc',
                });
                this.edgeless.service.telemetryService?.track('LinkedDocCreated', {
                    control: 'create linked doc',
                    page: 'whiteboard editor',
                    module: 'format toolbar',
                    type: 'embed-linked-doc',
                    other: 'new doc',
                });
                // delete selected elements
                this.doc.transact(() => {
                    deleteElements(this.surface, elements);
                });
                this.edgeless.service.selection.set({
                    elements: [cardId],
                    editing: false,
                });
            };
            this._delete = () => {
                this.doc.captureSync();
                deleteElements(this.surface, this.selection.selectedElements);
                this.selection.set({
                    elements: [],
                    editing: false,
                });
            };
            this._reload = (selections) => {
                selections.forEach(sel => {
                    const blockElement = this.view.getBlock(sel.blockId);
                    if (!!blockElement && this._refreshable(blockElement.model)) {
                        blockElement.refreshData();
                    }
                });
            };
            this._runAction = async ({ type }) => {
                const selection = this.edgeless.service.selection;
                switch (type) {
                    case 'copy': {
                        this.edgeless.clipboardController.copy();
                        break;
                    }
                    case 'duplicate': {
                        await duplicate(this.edgeless, selection.selectedElements);
                        break;
                    }
                    case 'delete': {
                        this._delete();
                        break;
                    }
                    case 'copy-as-png': {
                        const { notes, frames, shapes, images } = splitElements(this.selection.selectedElements);
                        this.slots.copyAsPng.emit({
                            blocks: [...notes, ...removeContainedFrames(frames), ...images],
                            shapes,
                        });
                        break;
                    }
                    case 'turn-into-linked-doc': {
                        const title = await promptDocTitle(this.edgeless.host);
                        if (title === null)
                            return;
                        this._turnIntoLinkedDoc(title);
                        notifyDocCreated(this.edgeless.host, this.edgeless.doc);
                        break;
                    }
                    case 'create-linked-doc': {
                        const title = await promptDocTitle(this.edgeless.host);
                        if (title === null)
                            return;
                        this._createLinkedDoc(title);
                        notifyDocCreated(this.edgeless.host, this.edgeless.doc);
                        break;
                    }
                    case 'create-frame': {
                        const { service } = this.edgeless;
                        const frame = service.frame.createFrameOnSelected();
                        if (!frame)
                            break;
                        this.edgeless.service.telemetryService?.track('CanvasElementAdded', {
                            control: 'context-menu',
                            page: 'whiteboard editor',
                            module: 'toolbar',
                            segment: 'toolbar',
                            type: 'frame',
                        });
                        this.edgeless.surface.fitToViewport(Bound.deserialize(frame.xywh));
                        break;
                    }
                    case 'create-group': {
                        this.edgeless.service.createGroupFromSelected();
                        break;
                    }
                    case 'front':
                    case 'forward':
                    case 'backward':
                    case 'back': {
                        this.selection.selectedElements.forEach(el => {
                            this.edgeless.service.reorderElement(el, type);
                        });
                        break;
                    }
                    case 'reload':
                        this._reload(this.selection.surfaceSelections);
                        break;
                    case 'open':
                        if (this._blockElement) {
                            this._blockElement.open();
                        }
                        break;
                    case 'center-peek':
                        if (this._blockElement) {
                            peek(this._blockElement);
                        }
                        break;
                }
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _elements_decorators = [property({ attribute: false })];
            _edgeless_decorators = [property({ attribute: false })];
            _vertical_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _elements_decorators, { kind: "accessor", name: "elements", static: false, private: false, access: { has: obj => "elements" in obj, get: obj => obj.elements, set: (obj, value) => { obj.elements = value; } }, metadata: _metadata }, _elements_initializers, _elements_extraInitializers);
            __esDecorate(this, null, _edgeless_decorators, { kind: "accessor", name: "edgeless", static: false, private: false, access: { has: obj => "edgeless" in obj, get: obj => obj.edgeless, set: (obj, value) => { obj.edgeless = value; } }, metadata: _metadata }, _edgeless_initializers, _edgeless_extraInitializers);
            __esDecorate(this, null, _vertical_decorators, { kind: "accessor", name: "vertical", static: false, private: false, access: { has: obj => "vertical" in obj, get: obj => obj.vertical, set: (obj, value) => { obj.vertical = value; } }, metadata: _metadata }, _vertical_initializers, _vertical_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessMoreButton = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .more-actions-container {
      display: flex;
      flex-direction: column;
      min-width: 176px;
    }

    .action-item {
      display: flex;
      align-items: center;
      white-space: nowrap;
      box-sizing: border-box;
      padding: 4px 8px;
      border-radius: 4px;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
      gap: 8px;
    }

    .action-item:hover {
      background-color: var(--affine-hover-color);
    }
    .action-item:hover.delete {
      background-color: var(--affine-background-error-color);
      color: var(--affine-error-color);
    }

    .action-item[data-disabled] {
      cursor: not-allowed;
      color: var(--affine-text-disable-color);
    }
  `; }
        #elements_accessor_storage;
        get elements() { return this.#elements_accessor_storage; }
        set elements(value) { this.#elements_accessor_storage = value; }
        #edgeless_accessor_storage;
        get edgeless() { return this.#edgeless_accessor_storage; }
        set edgeless(value) { this.#edgeless_accessor_storage = value; }
        #vertical_accessor_storage;
        get vertical() { return this.#vertical_accessor_storage; }
        set vertical(value) { this.#vertical_accessor_storage = value; }
        get doc() {
            return this.edgeless.doc;
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
        get view() {
            return this.edgeless.host.view;
        }
        get _blockElement() {
            const blockSelection = this.edgeless.service.selection.surfaceSelections;
            if (blockSelection.length !== 1 ||
                blockSelection[0].elements.length !== 1) {
                return;
            }
            const blockElement = this.view.getBlock(blockSelection[0].blockId);
            assertExists(blockElement);
            return blockElement;
        }
        get _Actions() {
            return [
                [FRAME_ACTION, GROUP_ACTION],
                REORDER_ACTIONS,
                this.getOpenActions(),
                [...COPY_ACTIONS, this.getRefreshAction()],
                [this.getLinkedDocAction()],
                [DELETE_ACTION],
            ];
        }
        get _FrameActions() {
            return [
                [FRAME_ACTION],
                COPY_ACTIONS,
                [this.getLinkedDocAction()],
                [DELETE_ACTION],
            ];
        }
        getOpenActions() {
            const isSingleSelect = this.selection.selectedElements.length === 1;
            const { firstElement } = this.selection;
            const result = [];
            if (isSingleSelect &&
                (isEmbedLinkedDocBlock(firstElement) ||
                    isEmbedSyncedDocBlock(firstElement))) {
                const disabled = firstElement.pageId === this.doc.id;
                result.push({
                    ...OPEN_ACTION,
                    disabled,
                });
            }
            if (isSingleSelect &&
                this._blockElement &&
                isPeekable(this._blockElement)) {
                result.push(CENTER_PEEK_ACTION);
            }
            return result;
        }
        getRefreshAction() {
            const refreshable = this.selection.selectedElements.every(ele => this._refreshable(ele));
            return refreshable ? RELOAD_ACTION : nothing;
        }
        getLinkedDocAction() {
            const isSingleSelect = this.selection.selectedElements.length === 1;
            const { firstElement } = this.selection;
            if (isSingleSelect &&
                (isEmbedLinkedDocBlock(firstElement) ||
                    isEmbedSyncedDocBlock(firstElement))) {
                return nothing;
            }
            if (isSingleSelect && isNoteBlock(firstElement)) {
                return TURN_INTO_LINKED_DOC_ACTION;
            }
            return CREATE_LINKED_DOC_ACTION;
        }
        _refreshable(ele) {
            return (isImageBlock(ele) ||
                isBookmarkBlock(ele) ||
                isAttachmentBlock(ele) ||
                isEmbeddedLinkBlock(ele));
        }
        render() {
            const selection = this.edgeless.service.selection;
            const actions = Actions(selection.selectedElements.some(isFrameBlock)
                ? this._FrameActions
                : this._Actions, this._runAction);
            return html `
      <edgeless-menu-button
        .contentPadding=${'8px'}
        .button=${html `
          <edgeless-tool-icon-button aria-label="More" .tooltip=${'More'}>
            ${this.vertical ? MoreVerticalIcon : MoreHorizontalIcon}
          </edgeless-tool-icon-button>
        `}
      >
        <div slot class="more-actions-container">${actions}</div>
      </edgeless-menu-button>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return EdgelessMoreButton = _classThis;
})();
export { EdgelessMoreButton };
//# sourceMappingURL=more-button.js.map