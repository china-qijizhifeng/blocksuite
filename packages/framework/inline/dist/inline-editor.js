import { assertExists, DisposableGroup, Slot } from '@blocksuite/global/utils';
import { nothing, render } from 'lit';
import * as Y from 'yjs';
import { INLINE_ROOT_ATTR } from './consts.js';
import { InlineHookService } from './services/hook.js';
import { AttributeService, DeltaService, EventService, RangeService, } from './services/index.js';
import { InlineTextService } from './services/text.js';
import { nativePointToTextPoint, textPointToDomPoint, } from './utils/index.js';
import { getTextNodesFromElement } from './utils/text.js';
export class InlineEditor {
    get disposables() {
        return this._disposables;
    }
    get yText() {
        return this._yText;
    }
    get yTextString() {
        return this.yText.toString();
    }
    get yTextLength() {
        return this.yText.length;
    }
    get yTextDeltas() {
        return this.yText.toDelta();
    }
    get rootElement() {
        assertExists(this._rootElement);
        return this._rootElement;
    }
    get eventSource() {
        assertExists(this._eventSource);
        return this._eventSource;
    }
    get eventService() {
        return this._eventService;
    }
    get rangeService() {
        return this._rangeService;
    }
    get attributeService() {
        return this._attributeService;
    }
    get deltaService() {
        return this._deltaService;
    }
    get mounted() {
        return this._mounted;
    }
    // Expose attribute service API
    get marks() {
        return this._attributeService.marks;
    }
    // Expose hook service API
    get hooks() {
        return this._hooksService.hooks;
    }
    // Expose event service API
    get isComposing() {
        return this._eventService.isComposing;
    }
    get isReadonly() {
        return this._isReadonly;
    }
    static { this.nativePointToTextPoint = nativePointToTextPoint; }
    static { this.textPointToDomPoint = textPointToDomPoint; }
    static { this.getTextNodesFromElement = getTextNodesFromElement; }
    constructor(yText, ops = {}) {
        this._disposables = new DisposableGroup();
        this._rootElement = null;
        this._eventSource = null;
        this._isReadonly = false;
        this._eventService = new EventService(this);
        this._rangeService = new RangeService(this);
        this._attributeService = new AttributeService(this);
        this._deltaService = new DeltaService(this);
        this._textService = new InlineTextService(this);
        this._mounted = false;
        this.slots = {
            mounted: new Slot(),
            unmounted: new Slot(),
            textChange: new Slot(),
            render: new Slot(),
            renderComplete: new Slot(),
            inlineRangeUpdate: new Slot(),
            inlineRangeApply: new Slot(),
            /**
             * Corresponding to the `compositionUpdate` and `beforeInput` events, and triggered only when the `inlineRange` is not null.
             */
            inputting: new Slot(),
            /**
             * Triggered only when the `inlineRange` is not null.
             */
            keydown: new Slot(),
        };
        this.setAttributeSchema = this._attributeService.setAttributeSchema;
        this.setAttributeRenderer = this._attributeService.setAttributeRenderer;
        this.setMarks = this._attributeService.setMarks;
        this.resetMarks = this._attributeService.resetMarks;
        this.getFormat = this._attributeService.getFormat;
        // Expose range service API
        this.toDomRange = this.rangeService.toDomRange;
        this.toInlineRange = this.rangeService.toInlineRange;
        this.getInlineRange = this.rangeService.getInlineRange;
        this.getInlineRangeFromElement = this.rangeService.getInlineRangeFromElement;
        this.getNativeSelection = this.rangeService.getNativeSelection;
        this.getTextPoint = this.rangeService.getTextPoint;
        this.getLine = this.rangeService.getLine;
        this.isValidInlineRange = this.rangeService.isValidInlineRange;
        this.isFirstLine = this.rangeService.isFirstLine;
        this.isLastLine = this.rangeService.isLastLine;
        this.setInlineRange = this.rangeService.setInlineRange;
        this.focusStart = this.rangeService.focusStart;
        this.focusEnd = this.rangeService.focusEnd;
        this.selectAll = this.rangeService.selectAll;
        this.focusIndex = this.rangeService.focusIndex;
        this.syncInlineRange = this.rangeService.syncInlineRange;
        // Expose delta service API
        this.getDeltasByInlineRange = this.deltaService.getDeltasByInlineRange;
        this.getDeltaByRangeIndex = this.deltaService.getDeltaByRangeIndex;
        this.mapDeltasInInlineRange = this.deltaService.mapDeltasInInlineRange;
        this.isNormalizedDeltaSelected = this.deltaService.isNormalizedDeltaSelected;
        // Expose text service API
        this.deleteText = this._textService.deleteText;
        this.insertText = this._textService.insertText;
        this.insertLineBreak = this._textService.insertLineBreak;
        this.formatText = this._textService.formatText;
        this.resetText = this._textService.resetText;
        this.setText = this._textService.setText;
        this._onYTextChange = (_, transaction) => {
            if (this.yText.toString().includes('\r')) {
                throw new Error('yText must not contain "\\r" because it will break the range synchronization');
            }
            this.slots.textChange.emit();
            Promise.resolve()
                .then(() => {
                this.deltaService.render().catch(console.error);
                const inlineRange = this.rangeService.getInlineRange();
                if (!inlineRange || transaction.local)
                    return;
                const lastStartRelativePosition = this.rangeService.lastStartRelativePosition;
                const lastEndRelativePosition = this.rangeService.lastEndRelativePosition;
                if (!lastStartRelativePosition || !lastEndRelativePosition)
                    return;
                const doc = this.yText.doc;
                assertExists(doc);
                const absoluteStart = Y.createAbsolutePositionFromRelativePosition(lastStartRelativePosition, doc);
                const absoluteEnd = Y.createAbsolutePositionFromRelativePosition(lastEndRelativePosition, doc);
                const startIndex = absoluteStart?.index;
                const endIndex = absoluteEnd?.index;
                if (!startIndex || !endIndex)
                    return;
                const newInlineRange = {
                    index: startIndex,
                    length: endIndex - startIndex,
                };
                if (!this.isValidInlineRange(newInlineRange))
                    return;
                this.setInlineRange(newInlineRange);
            })
                .catch(console.error);
        };
        if (!yText.doc) {
            throw new Error('yText must be attached to a Y.Doc');
        }
        if (yText.toString().includes('\r')) {
            throw new Error('yText must not contain "\\r" because it will break the range synchronization');
        }
        const { isEmbed = () => false, hooks = {}, inlineRangeProvider = null, } = ops;
        this._yText = yText;
        this.isEmbed = isEmbed;
        this._hooksService = new InlineHookService(this, hooks);
        this.inlineRangeProvider = inlineRangeProvider;
        if (inlineRangeProvider) {
            inlineRangeProvider.inlineRangeUpdated.on(prop => {
                this.slots.inlineRangeUpdate.emit(prop);
            });
        }
        this.slots.inlineRangeUpdate.on(this.rangeService.onInlineRangeUpdated);
    }
    _bindYTextObserver() {
        this.yText.observe(this._onYTextChange);
        this.disposables.add({
            dispose: () => {
                this.yText.unobserve(this._onYTextChange);
            },
        });
    }
    mount(rootElement, eventSource = rootElement, isReadonly = false) {
        const inlineRoot = rootElement;
        inlineRoot.inlineEditor = this;
        this._rootElement = inlineRoot;
        this._eventSource = eventSource;
        this._eventSource.style.outline = 'none';
        this._rootElement.dataset.vRoot = 'true';
        this.setReadonly(isReadonly);
        render(nothing, this._rootElement);
        this._bindYTextObserver();
        this._eventService.mount();
        this._mounted = true;
        this.slots.mounted.emit();
        this._deltaService.render().catch(console.error);
    }
    unmount() {
        if (this.rootElement.isConnected) {
            render(nothing, this.rootElement);
        }
        this.rootElement.removeAttribute(INLINE_ROOT_ATTR);
        this._rootElement = null;
        this._mounted = false;
        this.disposables.dispose();
        this.slots.unmounted.emit();
    }
    requestUpdate(syncInlineRange = true) {
        this._deltaService.render(syncInlineRange).catch(console.error);
    }
    async waitForUpdate() {
        const vLines = Array.from(this.rootElement.querySelectorAll('v-line'));
        await Promise.all(vLines.map(line => line.updateComplete));
    }
    setReadonly(isReadonly) {
        const value = isReadonly ? 'false' : 'true';
        if (this.rootElement.contentEditable !== value) {
            this.rootElement.contentEditable = value;
        }
        if (this.eventSource.contentEditable !== value) {
            this.eventSource.contentEditable = value;
        }
        this._isReadonly = isReadonly;
    }
    rerenderWholeEditor() {
        if (!this.rootElement.isConnected)
            return;
        render(nothing, this.rootElement);
        this._deltaService.render().catch(console.error);
    }
    transact(fn) {
        const doc = this.yText.doc;
        if (!doc) {
            throw new Error('yText is not attached to a doc');
        }
        doc.transact(fn, doc.clientID);
    }
}
//# sourceMappingURL=inline-editor.js.map