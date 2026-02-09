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
import { assertExists, Slot } from '@blocksuite/global/utils';
import { autoUpdate, computePosition, } from '@floating-ui/dom';
import { html, LitElement, render, } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * Renders a template into a portal. Defaults to `document.body`.
 *
 * Note that every time the parent component re-renders, the portal will be re-called.
 *
 * See https://lit.dev/docs/components/rendering/#writing-a-good-render()-method
 *
 * @example
 * ```ts
 * render() {
 *   return html`${showPortal
 *     ? html`<blocksuite-portal .template=${portalTemplate}></blocksuite-portal>`
 *     : null}`;
 * };
 * ```
 */
let Portal = (() => {
    let _classDecorators = [customElement('blocksuite-portal')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = LitElement;
    let _container_decorators;
    let _container_initializers = [];
    let _container_extraInitializers = [];
    let _template_decorators;
    let _template_initializers = [];
    let _template_extraInitializers = [];
    let _shadowDom_decorators;
    let _shadowDom_initializers = [];
    let _shadowDom_extraInitializers = [];
    var Portal = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _container_decorators = [property({ attribute: false })];
            _template_decorators = [property({ attribute: false })];
            _shadowDom_decorators = [property({ attribute: false })];
            __esDecorate(this, null, _container_decorators, { kind: "accessor", name: "container", static: false, private: false, access: { has: obj => "container" in obj, get: obj => obj.container, set: (obj, value) => { obj.container = value; } }, metadata: _metadata }, _container_initializers, _container_extraInitializers);
            __esDecorate(this, null, _template_decorators, { kind: "accessor", name: "template", static: false, private: false, access: { has: obj => "template" in obj, get: obj => obj.template, set: (obj, value) => { obj.template = value; } }, metadata: _metadata }, _template_initializers, _template_extraInitializers);
            __esDecorate(this, null, _shadowDom_decorators, { kind: "accessor", name: "shadowDom", static: false, private: false, access: { has: obj => "shadowDom" in obj, get: obj => obj.shadowDom, set: (obj, value) => { obj.shadowDom = value; } }, metadata: _metadata }, _shadowDom_initializers, _shadowDom_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            Portal = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        #container_accessor_storage;
        get container() { return this.#container_accessor_storage; }
        set container(value) { this.#container_accessor_storage = value; }
        #template_accessor_storage;
        get template() { return this.#template_accessor_storage; }
        set template(value) { this.#template_accessor_storage = value; }
        #shadowDom_accessor_storage;
        get shadowDom() { return this.#shadowDom_accessor_storage; }
        set shadowDom(value) { this.#shadowDom_accessor_storage = value; }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._portalRoot?.remove();
        }
        createRenderRoot() {
            const portalRoot = document.createElement('div');
            const renderRoot = this.shadowDom
                ? portalRoot.attachShadow({
                    mode: 'open',
                    ...(typeof this.shadowDom !== 'boolean' ? this.shadowDom : {}),
                })
                : portalRoot;
            portalRoot.classList.add('blocksuite-portal');
            this.container.append(portalRoot);
            this._portalRoot = portalRoot;
            return renderRoot;
        }
        render() {
            return this.template;
        }
        constructor() {
            super(...arguments);
            this._portalRoot = null;
            this.#container_accessor_storage = __runInitializers(this, _container_initializers, document.body);
            this.#template_accessor_storage = (__runInitializers(this, _container_extraInitializers), __runInitializers(this, _template_initializers, html ``));
            this.#shadowDom_accessor_storage = (__runInitializers(this, _template_extraInitializers), __runInitializers(this, _shadowDom_initializers, true));
            __runInitializers(this, _shadowDom_extraInitializers);
        }
    };
    return Portal = _classThis;
})();
export { Portal };
/**
 * Similar to `<blocksuite-portal>`, but only renders once when called.
 *
 * The template should be a **static** template since it will not be re-rendered unless `updatePortal` is called.
 *
 * See {@link Portal} for more details.
 */
export function createSimplePortal({ template, container = document.body, signal = new AbortController().signal, renderOptions, shadowDom = true, identifyWrapper = true, }) {
    const portalRoot = document.createElement('div');
    if (identifyWrapper) {
        portalRoot.classList.add('blocksuite-portal');
    }
    if (shadowDom) {
        portalRoot.attachShadow({
            mode: 'open',
            ...(typeof shadowDom !== 'boolean' ? shadowDom : {}),
        });
    }
    signal.addEventListener('abort', () => {
        portalRoot.remove();
    });
    const root = shadowDom ? portalRoot.shadowRoot : portalRoot;
    assertExists(root);
    let updateId = 0;
    const updatePortal = id => {
        if (id !== updateId) {
            console.warn('Potentially infinite recursion! Please clean up the old event listeners before `updatePortal`');
            return;
        }
        updateId++;
        const curId = updateId;
        const templateResult = template instanceof Function
            ? template({ updatePortal: () => updatePortal(curId) })
            : template;
        assertExists(templateResult);
        render(templateResult, root, renderOptions);
    };
    updatePortal(updateId);
    container.append(portalRoot);
    return portalRoot;
}
/**
 * Where el is the DOM element you'd like to test for visibility
 */
function isElementVisible(el) {
    // The API is not stable, so we need to check the existence of the function first
    // See also https://caniuse.com/?search=checkVisibility
    if (el.checkVisibility) {
        // See https://drafts.csswg.org/cssom-view-1/#dom-element-checkvisibility
        return el.checkVisibility();
    }
    // Fallback to the old way
    // Remove this when the `checkVisibility` API is stable
    if (!el.isConnected)
        return false;
    if (el instanceof HTMLElement) {
        // See https://stackoverflow.com/questions/19669786/check-if-element-is-visible-in-dom
        return !(el.offsetParent === null);
    }
    return true;
}
/**
 * Similar to `createSimplePortal`, but supports auto update position.
 *
 * The template should be a **static** template since it will not be re-rendered.
 *
 * See {@link createSimplePortal} for more details.
 *
 * @example
 * ```ts
 * createLitPortal({
 *   template: RenameModal({
 *     model,
 *     abortController: renameAbortController,
 *   }),
 *   computePosition: {
 *     referenceElement: anchor,
 *     placement: 'top-end',
 *     middleware: [flip(), offset(4)],
 *     autoUpdate: true,
 *   },
 *   abortController: renameAbortController,
 * });
 * ```
 */
export function createLitPortal({ computePosition: positionConfigOrFn, abortController, closeOnClickAway = false, ...portalOptions }) {
    let positionSlot = new Slot();
    const template = portalOptions.template;
    const templateWithPosition = template instanceof Function
        ? ({ updatePortal }) => {
            // We need to create a new slot for each template, otherwise the slot may be used in the old template
            positionSlot = new Slot();
            return template({ updatePortal, positionSlot });
        }
        : template;
    const portalRoot = createSimplePortal({
        ...portalOptions,
        signal: abortController.signal,
        template: templateWithPosition,
    });
    if (closeOnClickAway) {
        // Avoid triggering click away listener on initial render
        setTimeout(() => document.addEventListener('click', e => {
            if (portalRoot.contains(e.target))
                return;
            abortController.abort();
        }, {
            signal: abortController.signal,
        }));
    }
    if (!positionConfigOrFn) {
        return portalRoot;
    }
    const visibility = portalRoot.style.visibility;
    portalRoot.style.visibility = 'hidden';
    portalRoot.style.position = 'fixed';
    portalRoot.style.left = '0';
    portalRoot.style.top = '0';
    Object.assign(portalRoot.style, portalOptions.portalStyles);
    const computePositionOptions = positionConfigOrFn instanceof Function
        ? positionConfigOrFn(portalRoot)
        : positionConfigOrFn;
    const { referenceElement, ...options } = computePositionOptions;
    assertExists(referenceElement, 'referenceElement is required');
    const update = () => {
        if (computePositionOptions.abortWhenRefRemoved !== false &&
            referenceElement instanceof Element &&
            !isElementVisible(referenceElement)) {
            abortController.abort();
        }
        computePosition(referenceElement, portalRoot, options)
            .then(positionReturn => {
            const { x, y } = positionReturn;
            // Use transform maybe cause overlay-mask offset issue
            // portalRoot.style.transform = `translate(${x}px, ${y}px)`;
            portalRoot.style.left = `${x}px`;
            portalRoot.style.top = `${y}px`;
            if (portalRoot.style.visibility === 'hidden') {
                portalRoot.style.visibility = visibility;
            }
            positionSlot.emit(positionReturn);
        })
            .catch(console.error);
    };
    if (!computePositionOptions.autoUpdate) {
        update();
    }
    else {
        const autoUpdateOptions = computePositionOptions.autoUpdate === true
            ? {}
            : computePositionOptions.autoUpdate;
        const cleanup = autoUpdate(referenceElement, portalRoot, update, autoUpdateOptions);
        abortController.signal.addEventListener('abort', () => {
            cleanup();
        });
    }
    return portalRoot;
}
//# sourceMappingURL=portal.js.map