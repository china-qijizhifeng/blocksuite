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
import '../../../_common/components/button.js';
import { WidgetElement } from '@blocksuite/block-std';
import { assertExists, DisposableGroup } from '@blocksuite/global/utils';
import { autoUpdate, computePosition, inline, offset, shift, } from '@floating-ui/dom';
import { html, nothing } from 'lit';
import { customElement, query, state } from 'lit/decorators.js';
import { HoverController, } from '../../../_common/components/index.js';
import { stopPropagation } from '../../../_common/utils/event.js';
import { matchFlavours } from '../../../_common/utils/model.js';
import { isFormatSupported } from '../../../note-block/commands/utils.js';
import { isRootElement } from '../../../root-block/utils/guard.js';
import { ConfigRenderer } from './components/config-renderer.js';
import { toolbarDefaultConfig, } from './config.js';
import { formatBarStyle } from './styles.js';
export const AFFINE_FORMAT_BAR_WIDGET = 'affine-format-bar-widget';
let AffineFormatBarWidget = (() => {
    let _classDecorators = [customElement(AFFINE_FORMAT_BAR_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetElement;
    let __dragging_decorators;
    let __dragging_initializers = [];
    let __dragging_extraInitializers = [];
    let __displayType_decorators;
    let __displayType_initializers = [];
    let __displayType_extraInitializers = [];
    let __selectedBlockElements_decorators;
    let __selectedBlockElements_initializers = [];
    let __selectedBlockElements_extraInitializers = [];
    let _formatBarElement_decorators;
    let _formatBarElement_initializers = [];
    let _formatBarElement_extraInitializers = [];
    let _configItems_decorators;
    let _configItems_initializers = [];
    let _configItems_extraInitializers = [];
    var AffineFormatBarWidget = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __dragging_decorators = [state()];
            __displayType_decorators = [state()];
            __selectedBlockElements_decorators = [state()];
            _formatBarElement_decorators = [query(`.${AFFINE_FORMAT_BAR_WIDGET}`)];
            _configItems_decorators = [state()];
            __esDecorate(this, null, __dragging_decorators, { kind: "accessor", name: "_dragging", static: false, private: false, access: { has: obj => "_dragging" in obj, get: obj => obj._dragging, set: (obj, value) => { obj._dragging = value; } }, metadata: _metadata }, __dragging_initializers, __dragging_extraInitializers);
            __esDecorate(this, null, __displayType_decorators, { kind: "accessor", name: "_displayType", static: false, private: false, access: { has: obj => "_displayType" in obj, get: obj => obj._displayType, set: (obj, value) => { obj._displayType = value; } }, metadata: _metadata }, __displayType_initializers, __displayType_extraInitializers);
            __esDecorate(this, null, __selectedBlockElements_decorators, { kind: "accessor", name: "_selectedBlockElements", static: false, private: false, access: { has: obj => "_selectedBlockElements" in obj, get: obj => obj._selectedBlockElements, set: (obj, value) => { obj._selectedBlockElements = value; } }, metadata: _metadata }, __selectedBlockElements_initializers, __selectedBlockElements_extraInitializers);
            __esDecorate(this, null, _formatBarElement_decorators, { kind: "accessor", name: "formatBarElement", static: false, private: false, access: { has: obj => "formatBarElement" in obj, get: obj => obj.formatBarElement, set: (obj, value) => { obj.formatBarElement = value; } }, metadata: _metadata }, _formatBarElement_initializers, _formatBarElement_extraInitializers);
            __esDecorate(this, null, _configItems_decorators, { kind: "accessor", name: "configItems", static: false, private: false, access: { has: obj => "configItems" in obj, get: obj => obj.configItems, set: (obj, value) => { obj.configItems = value; } }, metadata: _metadata }, _configItems_initializers, _configItems_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineFormatBarWidget = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get _selectionManager() {
            return this.host.selection;
        }
        get displayType() {
            return this._displayType;
        }
        get selectedBlockElements() {
            return this._selectedBlockElements;
        }
        get nativeRange() {
            const sl = document.getSelection();
            if (!sl || sl.rangeCount === 0)
                return null;
            return sl.getRangeAt(0);
        }
        static { this.styles = formatBarStyle; }
        #_dragging_accessor_storage;
        get _dragging() { return this.#_dragging_accessor_storage; }
        set _dragging(value) { this.#_dragging_accessor_storage = value; }
        #_displayType_accessor_storage;
        get _displayType() { return this.#_displayType_accessor_storage; }
        set _displayType(value) { this.#_displayType_accessor_storage = value; }
        #_selectedBlockElements_accessor_storage;
        get _selectedBlockElements() { return this.#_selectedBlockElements_accessor_storage; }
        set _selectedBlockElements(value) { this.#_selectedBlockElements_accessor_storage = value; }
        #formatBarElement_accessor_storage;
        get formatBarElement() { return this.#formatBarElement_accessor_storage; }
        set formatBarElement(value) { this.#formatBarElement_accessor_storage = value; }
        #configItems_accessor_storage;
        get configItems() { return this.#configItems_accessor_storage; }
        set configItems(value) { this.#configItems_accessor_storage = value; }
        _reset() {
            this._displayType = 'none';
            this._selectedBlockElements = [];
        }
        _shouldDisplay() {
            const readonly = this.doc.awarenessStore.isReadonly(this.doc.blockCollection);
            if (readonly)
                return false;
            if (this.displayType === 'block' &&
                this._selectedBlockElements?.[0]?.flavour === 'affine:surface-ref') {
                return false;
            }
            if (this.displayType === 'block' &&
                this._selectedBlockElements.length === 1) {
                const selectedBlock = this._selectedBlockElements[0];
                if (!matchFlavours(selectedBlock.model, [
                    'affine:paragraph',
                    'affine:list',
                    'affine:code',
                    'affine:image',
                ])) {
                    return false;
                }
            }
            if (this.displayType === 'none' || this._dragging) {
                return false;
            }
            // 【v6.5】全局检查：如果选中了 aiPlaceholder 内容，不显示工具栏
            try {
                const selection = window.getSelection();
                if (selection && selection.rangeCount > 0) {
                    const range = selection.getRangeAt(0);
                    let node = range.commonAncestorContainer;
                    // 遍历祖先元素检查
                    while (node) {
                        if (node.nodeType === Node.ELEMENT_NODE) {
                            const element = node;
                            const tagName = element.tagName?.toLowerCase();
                            // 检查是否是 affine-ai-placeholder 或其内部元素
                            if (tagName === 'affine-ai-placeholder') {
                                return false;
                            }
                            // 检查是否有 affine-ai-placeholder class
                            if (element.classList?.contains('affine-ai-placeholder')) {
                                return false;
                            }
                            // 检查是否在占位符容器内（通过 data 属性）
                            if (element.hasAttribute?.('data-ai-placeholder')) {
                                return false;
                            }
                        }
                        node = node.parentNode;
                    }
                    // 也检查选区起点和终点
                    const startContainer = range.startContainer;
                    const endContainer = range.endContainer;
                    const checkNode = (n) => {
                        while (n) {
                            if (n.nodeType === Node.ELEMENT_NODE) {
                                const el = n;
                                if (el.tagName?.toLowerCase() === 'affine-ai-placeholder' ||
                                    el.classList?.contains('affine-ai-placeholder')) {
                                    return true;
                                }
                            }
                            n = n.parentNode;
                        }
                        return false;
                    };
                    if (checkNode(startContainer) || checkNode(endContainer)) {
                        return false;
                    }
                }
            }
            catch {
                // 忽略错误
            }
            // if the selection is on an embed (ex. linked page), we should not display the format bar
            if (this.displayType === 'text' &&
                this._selectedBlockElements.length === 1) {
                const isEmbed = () => {
                    const [element] = this._selectedBlockElements;
                    const richText = element.querySelector('rich-text');
                    const inline = richText?.inlineEditor;
                    if (!richText || !inline) {
                        return false;
                    }
                    const range = inline.getInlineRange();
                    if (!range || range.length > 1) {
                        return false;
                    }
                    const deltas = inline.getDeltasByInlineRange(range);
                    if (deltas.length > 2) {
                        return false;
                    }
                    const delta = deltas?.[1]?.[0];
                    if (!delta) {
                        return false;
                    }
                    return inline.isEmbed(delta);
                };
                if (isEmbed()) {
                    return false;
                }
                // 【v6.4】如果选中的文本在 aiPlaceholder 内，不显示 format bar
                const isInPlaceholder = () => {
                    const [element] = this._selectedBlockElements;
                    const richText = element.querySelector('rich-text');
                    const inline = richText?.inlineEditor;
                    if (!richText || !inline) {
                        return false;
                    }
                    const range = inline.getInlineRange();
                    if (!range) {
                        return false;
                    }
                    const deltas = inline.getDeltasByInlineRange(range);
                    // 检查选中范围内是否包含 aiPlaceholder 属性
                    for (const [delta] of deltas) {
                        if (delta?.attributes?.aiPlaceholder) {
                            return true;
                        }
                    }
                    return false;
                };
                if (isInPlaceholder()) {
                    return false;
                }
            }
            // todo: refactor later that ai panel & format bar should not depend on each other
            // do not display if AI panel is open
            const rootBlockId = this.host.doc.root?.id;
            const aiPanel = rootBlockId
                ? this.host.view.getWidget('affine-ai-panel-widget', rootBlockId)
                : null;
            // @ts-ignore
            if (aiPanel && aiPanel?.state !== 'hidden') {
                return false;
            }
            return true;
        }
        _selectionEqual(target, current) {
            if (target === current || (target && current && target.equals(current))) {
                return true;
            }
            return false;
        }
        _calculatePlacement() {
            const rootElement = this.blockElement;
            this.handleEvent('pointerMove', ctx => {
                this._dragging = ctx.get('pointerState').dragging;
            });
            this.handleEvent('pointerUp', () => {
                this._dragging = false;
            });
            // calculate placement
            this.disposables.add(this.host.event.add('pointerUp', ctx => {
                let targetRect = null;
                if (this.displayType === 'text' || this.displayType === 'native') {
                    const range = this.nativeRange;
                    if (!range) {
                        this._reset();
                        return;
                    }
                    targetRect = range.getBoundingClientRect();
                }
                else if (this.displayType === 'block') {
                    const blockElement = this._selectedBlockElements[0];
                    if (!blockElement)
                        return;
                    targetRect = blockElement.getBoundingClientRect();
                }
                else {
                    return;
                }
                const { top: editorHostTop, bottom: editorHostBottom } = this.host.getBoundingClientRect();
                const e = ctx.get('pointerState');
                if (editorHostBottom - targetRect.bottom < 50) {
                    this._placement = 'top';
                }
                else if (targetRect.top - Math.max(editorHostTop, 0) < 50) {
                    this._placement = 'bottom';
                }
                else if (e.raw.y < targetRect.top + targetRect.height / 2) {
                    this._placement = 'top';
                }
                else {
                    this._placement = 'bottom';
                }
            }));
            // listen to selection change
            this.disposables.add(this._selectionManager.slots.changed.on(() => {
                const update = async () => {
                    const textSelection = rootElement.selection.find('text');
                    const blockSelections = rootElement.selection.filter('block');
                    // Should not re-render format bar when only cursor selection changed in edgeless
                    const cursorSelection = rootElement.selection.find('cursor');
                    if (cursorSelection) {
                        if (!this._lastCursor) {
                            this._lastCursor = cursorSelection;
                            return;
                        }
                        if (!this._selectionEqual(cursorSelection, this._lastCursor)) {
                            this._lastCursor = cursorSelection;
                            return;
                        }
                    }
                    await this.host.getUpdateComplete();
                    if (textSelection) {
                        const block = this.host.view.getBlock(textSelection.blockId);
                        if (!textSelection.isCollapsed() &&
                            block &&
                            block.model.role === 'content') {
                            this._displayType = 'text';
                            assertExists(rootElement.host.rangeManager);
                            this.host.std.command
                                .chain()
                                .getTextSelection()
                                .getSelectedBlocks({
                                types: ['text'],
                            })
                                .inline(ctx => {
                                const { selectedBlocks } = ctx;
                                assertExists(selectedBlocks);
                                this._selectedBlockElements = selectedBlocks;
                            })
                                .run();
                            return;
                        }
                        this._reset();
                        return;
                    }
                    if (blockSelections.length > 0) {
                        this._displayType = 'block';
                        const selectedBlocks = blockSelections
                            .map(selection => {
                            const path = selection.blockId;
                            return this.blockElement.host.view.getBlock(path);
                        })
                            .filter((el) => !!el);
                        this._selectedBlockElements = selectedBlocks;
                        return;
                    }
                    this._reset();
                };
                update().catch(console.error);
            }));
            this.disposables.addFromEvent(document, 'selectionchange', () => {
                const databaseSelection = this.host.selection.find('database');
                if (!databaseSelection) {
                    return;
                }
                const reset = () => {
                    this._reset();
                    this.requestUpdate();
                };
                const viewSelection = databaseSelection.viewSelection;
                // check table selection
                if (viewSelection.type === 'table' && !viewSelection.isEditing)
                    return reset();
                // check kanban selection
                if ((viewSelection.type === 'kanban' &&
                    viewSelection.selectionType !== 'cell') ||
                    !viewSelection.isEditing)
                    return reset();
                const range = this.nativeRange;
                if (!range || range.collapsed)
                    return reset();
                this._displayType = 'native';
                this.requestUpdate();
            });
        }
        _listenFloatingElement() {
            const formatQuickBarElement = this.formatBarElement;
            assertExists(formatQuickBarElement, 'format quick bar should exist');
            const listenFloatingElement = (getElement) => {
                const initialElement = getElement();
                if (!initialElement) {
                    return;
                }
                assertExists(this._floatDisposables);
                HoverController.globalAbortController?.abort();
                this._floatDisposables.add(autoUpdate(initialElement, formatQuickBarElement, () => {
                    const element = getElement();
                    if (!element)
                        return;
                    computePosition(element, formatQuickBarElement, {
                        placement: this._placement,
                        middleware: [
                            offset(10),
                            inline(),
                            shift({
                                padding: 6,
                            }),
                        ],
                    })
                        .then(({ x, y }) => {
                        formatQuickBarElement.style.display = 'flex';
                        formatQuickBarElement.style.top = `${y}px`;
                        formatQuickBarElement.style.left = `${x}px`;
                    })
                        .catch(console.error);
                }, {
                    // follow edgeless viewport update
                    animationFrame: true,
                }));
            };
            const getReferenceElementFromBlock = () => {
                const firstBlockElement = this._selectedBlockElements[0];
                let rect = firstBlockElement?.getBoundingClientRect();
                if (!rect)
                    return;
                this._selectedBlockElements.forEach(el => {
                    const elRect = el.getBoundingClientRect();
                    if (elRect.top < rect.top) {
                        rect = new DOMRect(rect.left, elRect.top, rect.width, rect.bottom);
                    }
                    if (elRect.bottom > rect.bottom) {
                        rect = new DOMRect(rect.left, rect.top, rect.width, elRect.bottom);
                    }
                    if (elRect.left < rect.left) {
                        rect = new DOMRect(elRect.left, rect.top, rect.right, rect.bottom);
                    }
                    if (elRect.right > rect.right) {
                        rect = new DOMRect(rect.left, rect.top, elRect.right, rect.bottom);
                    }
                });
                return {
                    getBoundingClientRect: () => rect,
                    getClientRects: () => this._selectedBlockElements.map(el => el.getBoundingClientRect()),
                };
            };
            const getReferenceElementFromText = () => {
                const range = this.nativeRange;
                if (!range) {
                    return;
                }
                return {
                    getBoundingClientRect: () => range.getBoundingClientRect(),
                    getClientRects: () => range.getClientRects(),
                };
            };
            switch (this.displayType) {
                case 'text':
                case 'native':
                    return listenFloatingElement(getReferenceElementFromText);
                case 'block':
                    return listenFloatingElement(getReferenceElementFromBlock);
                default:
                    return;
            }
        }
        connectedCallback() {
            super.connectedCallback();
            this._abortController = new AbortController();
            const rootElement = this.blockElement;
            assertExists(rootElement);
            const widgets = rootElement.widgets;
            // check if the host use the format bar widget
            if (!Object.hasOwn(widgets, AFFINE_FORMAT_BAR_WIDGET)) {
                return;
            }
            // check if format bar widget support the host
            if (!isRootElement(rootElement)) {
                throw new Error(`format bar not support rootElement: ${rootElement.constructor.name} but its widgets has format bar`);
            }
            this._calculatePlacement();
            if (this.configItems.length === 0) {
                toolbarDefaultConfig(this);
            }
        }
        updated() {
            if (!this._shouldDisplay()) {
                if (this._floatDisposables) {
                    this._floatDisposables.dispose();
                }
                return;
            }
            this._floatDisposables = new DisposableGroup();
            this._listenFloatingElement();
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._abortController.abort();
            this._reset();
            this._lastCursor = undefined;
        }
        addDivider() {
            this.configItems.push({ type: 'divider' });
            return this;
        }
        addHighlighterDropdown() {
            this.configItems.push({ type: 'highlighter-dropdown' });
            return this;
        }
        addParagraphDropdown() {
            this.configItems.push({ type: 'paragraph-dropdown' });
            return this;
        }
        addInlineAction(config) {
            this.configItems.push({ ...config, type: 'inline-action' });
            return this;
        }
        addParagraphAction(config) {
            this.configItems.push({ ...config, type: 'paragraph-action' });
            return this;
        }
        addTextStyleToggle(config) {
            const { key } = config;
            return this.addInlineAction({
                id: key,
                name: camelCaseToWords(key),
                icon: config.icon,
                isActive: chain => {
                    const [result] = chain.isTextStyleActive({ key }).run();
                    return result;
                },
                action: config.action,
                showWhen: chain => {
                    const [result] = isFormatSupported(chain).run();
                    return result;
                },
            });
        }
        addBlockTypeSwitch(config) {
            const { flavour, type, icon } = config;
            return this.addParagraphAction({
                id: `${flavour}/${type ?? ''}`,
                icon,
                flavour,
                name: config.name ?? camelCaseToWords(type ?? flavour),
                action: chain => {
                    chain
                        .updateBlockType({
                        flavour,
                        props: type != null ? { type } : undefined,
                    })
                        .run();
                },
            });
        }
        addRawConfigItems(configItems, index) {
            if (index === undefined) {
                this.configItems.push(...configItems);
            }
            else {
                this.configItems.splice(index, 0, ...configItems);
            }
            return this;
        }
        clearConfig() {
            this.configItems = [];
            return this;
        }
        render() {
            if (!this._shouldDisplay()) {
                return nothing;
            }
            const items = ConfigRenderer(this);
            return html `<div
      class="${AFFINE_FORMAT_BAR_WIDGET}"
      @pointerdown="${(event) => {
                event.stopPropagation();
                event.preventDefault();
            }}"
      @wheel="${stopPropagation}"
    >
      ${items}
    </div>`;
        }
        constructor() {
            super(...arguments);
            this.#_dragging_accessor_storage = __runInitializers(this, __dragging_initializers, false);
            this.#_displayType_accessor_storage = (__runInitializers(this, __dragging_extraInitializers), __runInitializers(this, __displayType_initializers, 'none'));
            this.#_selectedBlockElements_accessor_storage = (__runInitializers(this, __displayType_extraInitializers), __runInitializers(this, __selectedBlockElements_initializers, []));
            this._lastCursor = (__runInitializers(this, __selectedBlockElements_extraInitializers), undefined);
            this._abortController = new AbortController();
            this._placement = 'top';
            this._floatDisposables = null;
            this.#formatBarElement_accessor_storage = __runInitializers(this, _formatBarElement_initializers, null);
            this.#configItems_accessor_storage = (__runInitializers(this, _formatBarElement_extraInitializers), __runInitializers(this, _configItems_initializers, []));
            __runInitializers(this, _configItems_extraInitializers);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineFormatBarWidget = _classThis;
})();
export { AffineFormatBarWidget };
function camelCaseToWords(s) {
    const result = s.replace(/([A-Z])/g, ' $1');
    return result.charAt(0).toUpperCase() + result.slice(1);
}
//# sourceMappingURL=format-bar.js.map