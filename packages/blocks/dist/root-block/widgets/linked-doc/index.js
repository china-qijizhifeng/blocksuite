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
import { assertExists, DisposableGroup, throttle, } from '@blocksuite/global/utils';
import { InlineEditor } from '@blocksuite/inline';
import { customElement } from 'lit/decorators.js';
import { isControlledKeyboardEvent } from '../../../_common/utils/event.js';
import { matchFlavours } from '../../../_common/utils/index.js';
import { getInlineEditorByModel, getViewportElement, } from '../../../_common/utils/query.js';
import { getCurrentNativeRange } from '../../../_common/utils/selection.js';
import { getPopperPosition } from '../../../root-block/utils/position.js';
import { getMenus } from './config.js';
import { LinkedDocPopover } from './linked-doc-popover.js';
export function showLinkedDocPopover({ editorHost, inlineEditor, range, container = document.body, abortController = new AbortController(), options, triggerKey, }) {
    const disposables = new DisposableGroup();
    abortController.signal.addEventListener('abort', () => disposables.dispose());
    const linkedDoc = new LinkedDocPopover(editorHost, inlineEditor, abortController);
    linkedDoc.options = options;
    linkedDoc.triggerKey = triggerKey;
    // Mount
    container.append(linkedDoc);
    disposables.add(() => linkedDoc.remove());
    // Handle position
    const updatePosition = throttle(() => {
        const linkedDocElement = linkedDoc.linkedDocElement;
        assertExists(linkedDocElement, 'You should render the linked doc node even if no position');
        const position = getPopperPosition(linkedDocElement, range);
        linkedDoc.updatePosition(position);
    }, 10);
    disposables.addFromEvent(window, 'resize', updatePosition);
    const scrollContainer = getViewportElement(editorHost);
    if (scrollContainer) {
        // Note: in edgeless mode, the scroll container is not exist!
        disposables.addFromEvent(scrollContainer, 'scroll', updatePosition, {
            passive: true,
        });
    }
    // Wait for node to be mounted
    setTimeout(updatePosition);
    disposables.addFromEvent(window, 'mousedown', (e) => {
        if (e.target === linkedDoc)
            return;
        abortController.abort();
    });
    return linkedDoc;
}
export const AFFINE_LINKED_DOC_WIDGET = 'affine-linked-doc-widget';
let AffineLinkedDocWidget = (() => {
    let _classDecorators = [customElement(AFFINE_LINKED_DOC_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetElement;
    var AffineLinkedDocWidget = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.options = AffineLinkedDocWidget.DEFAULT_OPTIONS;
            this.getInlineEditor = (evt) => {
                const text = this.host.selection.value.find(selection => selection.is('text'));
                if (!text)
                    return;
                const model = this.host.doc.getBlockById(text.blockId);
                if (!model || matchFlavours(model, this.options.ignoreBlockTypes))
                    return;
                if (evt.target instanceof HTMLElement) {
                    const editor = evt.target.closest('.inline-editor')?.inlineEditor;
                    if (editor instanceof InlineEditor) {
                        return editor;
                    }
                }
                return getInlineEditorByModel(this.host, model);
            };
            this._onKeyDown = (ctx) => {
                const eventState = ctx.get('keyboardState');
                const event = eventState.raw;
                if (isControlledKeyboardEvent(event) || event.key.length !== 1)
                    return;
                const inlineEditor = this.getInlineEditor(event);
                if (!inlineEditor)
                    return;
                const inlineRange = inlineEditor.getInlineRange();
                if (!inlineRange)
                    return;
                if (inlineRange.length > 0) {
                    // When select text and press `[[` should not trigger transform,
                    // since it will break the bracket complete.
                    // Expected `[[selected text]]` instead of `@selected text]]`
                    return;
                }
                const [leafStart, offsetStart] = inlineEditor.getTextPoint(inlineRange.index);
                const prefixText = leafStart.textContent
                    ? leafStart.textContent.slice(0, offsetStart)
                    : '';
                const matchedKey = this.options.triggerKeys.find(triggerKey => (prefixText + event.key).endsWith(triggerKey));
                if (!matchedKey)
                    return;
                const primaryTriggerKey = this.options.triggerKeys[0];
                inlineEditor.slots.inlineRangeApply.once(() => {
                    if (this.options.convertTriggerKey && primaryTriggerKey !== matchedKey) {
                        // Convert to the primary trigger key
                        // e.g. [[ -> @
                        const startIdxBeforeMatchKey = inlineRange.index - (matchedKey.length - 1);
                        inlineEditor.deleteText({
                            index: startIdxBeforeMatchKey,
                            length: matchedKey.length,
                        });
                        inlineEditor.insertText({ index: startIdxBeforeMatchKey, length: 0 }, primaryTriggerKey);
                        inlineEditor.setInlineRange({
                            index: startIdxBeforeMatchKey + primaryTriggerKey.length,
                            length: 0,
                        });
                        inlineEditor.slots.inlineRangeApply.once(() => {
                            this.showLinkedDoc(inlineEditor, primaryTriggerKey);
                        });
                        return;
                    }
                    this.showLinkedDoc(inlineEditor, matchedKey);
                });
            };
            this.showLinkedDoc = (inlineEditor, triggerKey) => {
                const curRange = getCurrentNativeRange();
                if (!curRange)
                    return;
                showLinkedDocPopover({
                    editorHost: this.host,
                    inlineEditor,
                    range: curRange,
                    options: this.options,
                    triggerKey,
                });
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineLinkedDocWidget = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.DEFAULT_OPTIONS = {
            /**
             * The first item of the trigger keys will be the primary key
             */
            triggerKeys: ['@', '[[', '【【'],
            ignoreBlockTypes: ['affine:code'],
            /**
             * Convert trigger key to primary key (the first item of the trigger keys)
             */
            convertTriggerKey: true,
            getMenus,
        }; }
        connectedCallback() {
            super.connectedCallback();
            this.handleEvent('keyDown', this._onKeyDown);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineLinkedDocWidget = _classThis;
})();
export { AffineLinkedDocWidget };
//# sourceMappingURL=index.js.map