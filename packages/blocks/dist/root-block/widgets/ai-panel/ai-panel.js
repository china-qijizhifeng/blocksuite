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
import './components/index.js';
import { WidgetElement } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { autoPlacement, autoUpdate, computePosition, flip, offset, shift, } from '@floating-ui/dom';
import { css, html, nothing } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { choose } from 'lit/directives/choose.js';
import { stopPropagation } from '../../../_common/utils/event.js';
import { getPageRootByElement } from '../../../_common/utils/query.js';
import { PageRootService } from '../../page/page-root-service.js';
import { AFFINE_FORMAT_BAR_WIDGET } from '../format-bar/format-bar.js';
import { AFFINE_VIEWPORT_OVERLAY_WIDGET, } from '../viewport-overlay/viewport-overlay.js';
export const AFFINE_AI_PANEL_WIDGET = 'affine-ai-panel-widget';
let AffineAIPanelWidget = (() => {
    let _classDecorators = [customElement(AFFINE_AI_PANEL_WIDGET)];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WidgetElement;
    let _config_decorators;
    let _config_initializers = [];
    let _config_extraInitializers = [];
    let _state_decorators;
    let _state_initializers = [];
    let _state_extraInitializers = [];
    let _generatingElement_decorators;
    let _generatingElement_initializers = [];
    let _generatingElement_extraInitializers = [];
    var AffineAIPanelWidget = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._discardModalAbort = null;
            this._abortController = new AbortController();
            this._inputText = null;
            this._answer = null;
            this.ctx = null;
            this.#config_accessor_storage = __runInitializers(this, _config_initializers, null);
            this.#state_accessor_storage = (__runInitializers(this, _config_extraInitializers), __runInitializers(this, _state_initializers, 'hidden'));
            this.#generatingElement_accessor_storage = (__runInitializers(this, _state_extraInitializers), __runInitializers(this, _generatingElement_initializers, null));
            this._clearDiscardModal = (__runInitializers(this, _generatingElement_extraInitializers), () => {
                if (this._discardModalAbort) {
                    this._discardModalAbort.abort();
                    this._discardModalAbort = null;
                }
            });
            this._discardCallback = () => {
                this.hide();
                this.config?.discardCallback?.();
            };
            this._cancelCallback = () => {
                this.focus();
            };
            this._clickOutside = () => {
                switch (this.state) {
                    case 'hidden':
                        return;
                    case 'error':
                    case 'finished':
                        if (!this._answer) {
                            this.hide();
                        }
                        else {
                            this.discard();
                        }
                        break;
                    default:
                        this.discard();
                }
            };
            this._resetAbortController = () => {
                if (this.state === 'generating') {
                    this._abortController.abort();
                }
                this._abortController = new AbortController();
            };
            this._inputFinish = (text) => {
                this._inputText = text;
                this.generate();
            };
            this._onKeyDown = (event) => {
                event.stopPropagation();
                const { state } = this;
                if (state !== 'generating' && state !== 'input') {
                    return;
                }
                const { key, isComposing } = event;
                if (key === 'Escape') {
                    if (state === 'generating') {
                        this.stopGenerating();
                    }
                    else {
                        this.hide();
                    }
                    return;
                }
                if (key === 'Delete' || key === 'Backspace') {
                    if (isComposing)
                        return;
                    if (state === 'input' && !this._inputText) {
                        this.hide();
                    }
                }
            };
            this._onDocumentClick = (e) => {
                if (this.state !== 'hidden' &&
                    e.target !== this &&
                    !this.contains(e.target)) {
                    this._clickOutside();
                    return true;
                }
                return false;
            };
            this.toggle = (reference, input) => {
                if (input) {
                    this._inputText = input;
                    this.generate();
                }
                else {
                    // reset state
                    this.hide();
                    this.state = 'input';
                }
                this._autoUpdatePosition(reference);
            };
            this.hide = () => {
                this._resetAbortController();
                this.state = 'hidden';
                this._stopAutoUpdate?.();
                this._inputText = null;
                this._answer = null;
                this._stopAutoUpdate = undefined;
                this.config?.hideCallback?.();
                this.viewportOverlayWidget?.unlock();
            };
            this.discard = () => {
                if ((this.state === 'finished' || this.state === 'error') && !this.answer) {
                    this._discardCallback();
                    return;
                }
                if (this.state === 'input') {
                    this.hide();
                    return;
                }
                this.showDiscardModal()
                    .then(discard => {
                    if (discard) {
                        this._discardCallback();
                    }
                    else {
                        this._cancelCallback();
                    }
                    this._restoreSelection();
                })
                    .catch(console.error);
            };
            this.showDiscardModal = () => {
                const notification = this.host.std.spec.getService('affine:page').notificationService;
                if (!notification) {
                    return Promise.resolve(true);
                }
                this._clearDiscardModal();
                this._discardModalAbort = new AbortController();
                return notification
                    .confirm({
                    title: 'Discard the AI result',
                    message: 'Do you want to discard the results the AI just generated?',
                    cancelText: 'Cancel',
                    confirmText: 'Discard',
                    abort: this._abortController.signal,
                })
                    .finally(() => (this._discardModalAbort = null));
            };
            /**
             * You can evaluate this method multiple times to regenerate the answer.
             */
            this.generate = () => {
                assertExists(this.config);
                const text = this._inputText;
                assertExists(text);
                assertExists(this.config.generateAnswer);
                this._resetAbortController();
                // reset answer
                this._answer = null;
                const update = (answer) => {
                    this._answer = answer;
                    this.requestUpdate();
                };
                const finish = (type, err) => {
                    if (type === 'aborted')
                        return;
                    assertExists(this.config);
                    if (type === 'error') {
                        this.state = 'error';
                        this.config.errorStateConfig.error = err;
                    }
                    else {
                        this.state = 'finished';
                        this.config.errorStateConfig.error = undefined;
                    }
                    this._resetAbortController();
                };
                this.scrollTop = 0; // reset scroll top
                this.state = 'generating';
                this.config.generateAnswer({
                    input: text,
                    update,
                    finish,
                    signal: this._abortController.signal,
                });
            };
            this.stopGenerating = () => {
                this._abortController.abort();
                this.state = 'finished';
                if (!this.answer) {
                    this.hide();
                }
            };
            this.onInput = (text) => {
                this._inputText = text;
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _config_decorators = [property({ attribute: false })];
            _state_decorators = [property()];
            _generatingElement_decorators = [query('ai-panel-generating')];
            __esDecorate(this, null, _config_decorators, { kind: "accessor", name: "config", static: false, private: false, access: { has: obj => "config" in obj, get: obj => obj.config, set: (obj, value) => { obj.config = value; } }, metadata: _metadata }, _config_initializers, _config_extraInitializers);
            __esDecorate(this, null, _state_decorators, { kind: "accessor", name: "state", static: false, private: false, access: { has: obj => "state" in obj, get: obj => obj.state, set: (obj, value) => { obj.state = value; } }, metadata: _metadata }, _state_initializers, _state_extraInitializers);
            __esDecorate(this, null, _generatingElement_decorators, { kind: "accessor", name: "generatingElement", static: false, private: false, access: { has: obj => "generatingElement" in obj, get: obj => obj.generatingElement, set: (obj, value) => { obj.generatingElement = value; } }, metadata: _metadata }, _generatingElement_initializers, _generatingElement_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineAIPanelWidget = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get viewportOverlayWidget() {
            const rootId = this.host.doc.root?.id;
            return rootId
                ? this.host.view.getWidget(AFFINE_VIEWPORT_OVERLAY_WIDGET, rootId)
                : null;
        }
        get inputText() {
            return this._inputText;
        }
        get answer() {
            return this._answer;
        }
        static { this.styles = css `
    :host {
      display: flex;
      outline: none;
      border-radius: var(--8, 8px);
      border: 1px solid var(--affine-border-color);
      background: var(--affine-background-overlay-panel-color);
      box-shadow: var(--affine-shadow-4);

      position: absolute;
      width: max-content;
      height: auto;
      top: 0;
      left: 0;
      overflow-y: auto;
      scrollbar-width: none !important;
      z-index: var(--affine-z-index-popover);
    }

    .ai-panel-container {
      display: flex;
      flex-direction: column;
      box-sizing: border-box;
      width: 100%;
      height: fit-content;
      padding: 8px 0;
    }

    .ai-panel-container:not(:has(ai-panel-generating)) {
      gap: 8px;
    }

    .ai-panel-container:has(ai-panel-answer),
    .ai-panel-container:has(ai-panel-error),
    .ai-panel-container:has(ai-panel-generating:has(generating-placeholder)) {
      padding: 12px 0;
    }

    :host([data-state='hidden']) {
      display: none;
    }
  `; }
        #config_accessor_storage;
        get config() { return this.#config_accessor_storage; }
        set config(value) { this.#config_accessor_storage = value; }
        #state_accessor_storage;
        get state() { return this.#state_accessor_storage; }
        set state(value) { this.#state_accessor_storage = value; }
        #generatingElement_accessor_storage;
        get generatingElement() { return this.#generatingElement_accessor_storage; }
        set generatingElement(value) { this.#generatingElement_accessor_storage = value; }
        _calcPositionOptions(reference) {
            let rootBoundary;
            {
                const rootService = this.host.std.spec.getService('affine:page');
                if (rootService instanceof PageRootService) {
                    rootBoundary = undefined;
                }
                else {
                    const viewport = rootService.viewport;
                    rootBoundary = {
                        x: viewport.left,
                        y: viewport.top,
                        width: viewport.width,
                        height: viewport.height - 100, // 100 for edgeless toolbar
                    };
                }
            }
            const overflowOptions = {
                padding: 20,
                rootBoundary: rootBoundary,
            };
            // block element in page editor
            if (getPageRootByElement(reference)) {
                return {
                    placement: 'bottom-start',
                    middleware: [offset(8), shift(overflowOptions)],
                };
            }
            // block element in doc in edgeless editor
            else if (reference.closest('edgeless-block-portal-note')) {
                return {
                    middleware: [
                        offset(8),
                        shift(overflowOptions),
                        autoPlacement({
                            ...overflowOptions,
                            allowedPlacements: ['top-start', 'bottom-start'],
                        }),
                    ],
                };
            }
            // edgeless element
            else {
                return {
                    placement: 'right-start',
                    middleware: [
                        offset({ mainAxis: 16 }),
                        flip({
                            mainAxis: true,
                            crossAxis: true,
                            flipAlignment: true,
                            ...overflowOptions,
                        }),
                        shift({
                            crossAxis: true,
                            ...overflowOptions,
                        }),
                    ],
                };
            }
        }
        _autoUpdatePosition(reference) {
            // workaround for the case that the reference contains children block elements, like:
            // paragraph
            //    child paragraph
            {
                const childrenContainer = reference.querySelector('.affine-block-children-container');
                if (childrenContainer && childrenContainer.previousElementSibling) {
                    reference = childrenContainer.previousElementSibling;
                }
            }
            this._stopAutoUpdate?.();
            this._stopAutoUpdate = autoUpdate(reference, this, () => {
                computePosition(reference, this, this._calcPositionOptions(reference))
                    .then(({ x, y }) => {
                    this.style.left = `${x}px`;
                    this.style.top = `${y}px`;
                })
                    .catch(console.error);
            });
        }
        _restoreSelection() {
            if (this._selection) {
                this.host.selection.set([...this._selection]);
                if (this.state === 'hidden') {
                    this._selection = undefined;
                }
            }
        }
        willUpdate(changed) {
            const prevState = changed.get('state');
            if (prevState) {
                if (prevState === 'hidden') {
                    this._selection = this.host.selection.value;
                    requestAnimationFrame(() => {
                        this.scrollIntoView({
                            block: 'center',
                        });
                    });
                }
                else {
                    this.host.updateComplete
                        .then(() => {
                        if (this.state !== 'hidden') {
                            this.focus();
                        }
                    })
                        .catch(console.error);
                    this._restoreSelection();
                }
                // tell format bar to show or hide
                const rootBlockId = this.host.doc.root?.id;
                const formatBar = rootBlockId
                    ? this.host.view.getWidget(AFFINE_FORMAT_BAR_WIDGET, rootBlockId)
                    : null;
                if (formatBar) {
                    formatBar.requestUpdate();
                }
            }
            if (this.state !== 'hidden') {
                this.viewportOverlayWidget?.lock();
            }
            else {
                this.viewportOverlayWidget?.unlock();
            }
            this.dataset.state = this.state;
        }
        connectedCallback() {
            super.connectedCallback();
            this.tabIndex = -1;
            this.disposables.addFromEvent(document, 'pointerdown', this._onDocumentClick);
            this.disposables.add(this.blockElement.host.event.add('pointerDown', evtState => this._onDocumentClick(evtState.get('pointerState').event)));
            this.disposables.add(this.blockElement.host.event.add('click', () => {
                return this.state !== 'hidden' ? true : false;
            }));
            this.disposables.addFromEvent(this, 'wheel', stopPropagation);
            this.disposables.addFromEvent(this, 'pointerdown', stopPropagation);
            this.disposables.addFromEvent(this, 'pointerup', stopPropagation);
            this.disposables.addFromEvent(this, 'keydown', this._onKeyDown);
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._clearDiscardModal();
            this._stopAutoUpdate?.();
        }
        render() {
            if (this.state === 'hidden') {
                return nothing;
            }
            if (!this.config)
                return nothing;
            const config = this.config;
            this.updateComplete
                .then(() => {
                this.focus();
            })
                .catch(console.error);
            const mainTemplate = choose(this.state, [
                [
                    'input',
                    () => html `<ai-panel-input
            .onBlur=${() => this.discard()}
            .onFinish=${this._inputFinish}
            .onInput=${this.onInput}
          ></ai-panel-input>`,
                ],
                [
                    'generating',
                    () => html `
          ${this.answer
                        ? html `
                <ai-panel-answer
                  .finish=${false}
                  .config=${config.finishStateConfig}
                  .host=${this.host}
                >
                  ${this.answer &&
                            config.answerRenderer(this.answer, this.state)}
                </ai-panel-answer>
              `
                        : nothing}
          <ai-panel-generating
            .config=${config.generatingStateConfig}
            .stopGenerating=${this.stopGenerating}
            .withAnswer=${!!this.answer}
          ></ai-panel-generating>
        `,
                ],
                [
                    'finished',
                    () => html `
          <ai-panel-answer
            .config=${config.finishStateConfig}
            .copy=${config.copy}
            .host=${this.host}
          >
            ${this.answer && config.answerRenderer(this.answer, this.state)}
          </ai-panel-answer>
        `,
                ],
                [
                    'error',
                    () => html `
          <ai-panel-error
            .config=${config.errorStateConfig}
            .copy=${config.copy}
            .withAnswer=${!!this.answer}
            .host=${this.host}
          >
            ${this.answer && config.answerRenderer(this.answer, this.state)}
          </ai-panel-error>
        `,
                ],
            ]);
            return html `<div class="ai-panel-container">${mainTemplate}</div>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineAIPanelWidget = _classThis;
})();
export { AffineAIPanelWidget };
//# sourceMappingURL=ai-panel.js.map