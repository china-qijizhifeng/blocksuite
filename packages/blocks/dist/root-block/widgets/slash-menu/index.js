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
import { assertExists, debounce, DisposableGroup, throttle, } from '@blocksuite/global/utils';
import { customElement } from 'lit/decorators.js';
import { getCurrentNativeRange, getInlineEditorByModel, matchFlavours, } from '../../../_common/utils/index.js';
import { isRootElement } from '../../utils/guard.js';
import { getPopperPosition } from '../../utils/position.js';
import { defaultSlashMenuConfig, } from './config.js';
import { SlashMenu } from './slash-menu-popover.js';
import { filterEnabledSlashMenuItems } from './utils.js';
let globalAbortController = new AbortController();
function closeSlashMenu() {
    globalAbortController.abort();
}
const showSlashMenu = debounce(({ context, range, container = document.body, abortController = new AbortController(), config, triggerKey, }) => {
    globalAbortController = abortController;
    const disposables = new DisposableGroup();
    abortController.signal.addEventListener('abort', () => disposables.dispose());
    const slashMenu = new SlashMenu();
    disposables.add(() => slashMenu.remove());
    slashMenu.context = context;
    slashMenu.abortController = abortController;
    slashMenu.config = config;
    slashMenu.triggerKey = triggerKey;
    // Handle position
    const updatePosition = throttle(() => {
        const slashMenuElement = slashMenu.slashMenuElement;
        assertExists(slashMenuElement, 'You should render the slash menu node even if no position');
        const position = getPopperPosition(slashMenuElement, range);
        slashMenu.updatePosition(position);
    }, 10);
    disposables.addFromEvent(window, 'resize', updatePosition);
    // FIXME(Flrande): It is not a best practice,
    // but merely a temporary measure for reusing previous components.
    // Mount
    container.append(slashMenu);
    // Wait for the Node to be mounted
    setTimeout(updatePosition);
    return slashMenu;
}, 100);
export const AFFINE_SLASH_MENU_WIDGET = 'affine-slash-menu-widget';
let AffineSlashMenuWidget = (() => {
    let _classDecorators = [customElement(AFFINE_SLASH_MENU_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetElement;
    var AffineSlashMenuWidget = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.config = AffineSlashMenuWidget.DEFAULT_CONFIG;
            this._onBeforeInput = (ctx) => {
                const eventState = ctx.get('defaultState');
                const event = eventState.event;
                const triggerKey = event.data;
                if (!triggerKey || !this.config.triggerKeys.includes(triggerKey))
                    return;
                const textSelection = this.host.selection.find('text');
                if (!textSelection)
                    return;
                const block = this.host.doc.getBlock(textSelection.blockId);
                assertExists(block);
                const { model } = block;
                if (matchFlavours(model, this.config.ignoreBlockTypes))
                    return;
                const inlineEditor = getInlineEditorByModel(this.host, model);
                if (!inlineEditor)
                    return;
                inlineEditor.slots.inlineRangeApply.once(() => {
                    const rootElement = this.blockElement;
                    if (!isRootElement(rootElement)) {
                        throw new Error('SlashMenuWidget should be used in RootBlock');
                    }
                    const config = {
                        ...this.config,
                        items: filterEnabledSlashMenuItems(this.config.items, {
                            model,
                            rootElement,
                        }),
                    };
                    // Wait for dom update, see this case https://github.com/toeverything/blocksuite/issues/2611
                    requestAnimationFrame(() => {
                        const curRange = getCurrentNativeRange();
                        if (!curRange)
                            return;
                        closeSlashMenu();
                        showSlashMenu({
                            context: { model, rootElement },
                            range: curRange,
                            triggerKey,
                            config,
                        });
                    });
                });
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineSlashMenuWidget = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.DEFAULT_CONFIG = defaultSlashMenuConfig; }
        connectedCallback() {
            super.connectedCallback();
            if (this.config.triggerKeys.some(key => key.length === 0)) {
                throw new Error('Trigger key of slash menu should not be empty string');
            }
            this.handleEvent('beforeInput', this._onBeforeInput);
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineSlashMenuWidget = _classThis;
})();
export { AffineSlashMenuWidget };
//# sourceMappingURL=index.js.map