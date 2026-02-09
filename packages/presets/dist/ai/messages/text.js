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
import { WithDisposable } from '@blocksuite/block-std';
import { BlocksUtils, CodeBlockComponent, DividerBlockComponent, ListBlockComponent, ParagraphBlockComponent, } from '@blocksuite/blocks';
import { BlockViewType } from '@blocksuite/store';
import { css, html, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { keyed } from 'lit/directives/keyed.js';
import { CustomPageEditorBlockSpecs } from '../utils/custom-specs.js';
import { markDownToDoc } from '../utils/markdown-utils.js';
const textBlockStyles = css `
  ${ParagraphBlockComponent.styles}
  ${ListBlockComponent.styles}
  ${DividerBlockComponent.styles}
  ${CodeBlockComponent.styles}
`;
const customHeadingStyles = css `
  .custom-heading {
    .h1 {
      font-size: calc(var(--affine-font-h-1) - 2px);
      code {
        font-size: calc(var(--affine-font-base) + 6px);
      }
    }
    .h2 {
      font-size: calc(var(--affine-font-h-2) - 2px);
      code {
        font-size: calc(var(--affine-font-base) + 4px);
      }
    }
    .h3 {
      font-size: calc(var(--affine-font-h-3) - 2px);
      code {
        font-size: calc(var(--affine-font-base) + 2px);
      }
    }
    .h4 {
      font-size: calc(var(--affine-font-h-4) - 2px);
      code {
        font-size: var(--affine-font-base);
      }
    }
    .h5 {
      font-size: calc(var(--affine-font-h-5) - 2px);
      code {
        font-size: calc(var(--affine-font-base) - 2px);
      }
    }
    .h6 {
      font-size: calc(var(--affine-font-h-6) - 2px);
      code {
        font-size: calc(var(--affine-font-base) - 4px);
      }
    }
  }
`;
let AIAnswerText = (() => {
    let _classDecorators = [customElement('ai-answer-text')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(LitElement);
    let __container_decorators;
    let __container_initializers = [];
    let __container_extraInitializers = [];
    let _host_decorators;
    let _host_initializers = [];
    let _host_extraInitializers = [];
    let _answer_decorators;
    let _answer_initializers = [];
    let _answer_extraInitializers = [];
    let _options_decorators;
    let _options_initializers = [];
    let _options_extraInitializers = [];
    let _state_decorators;
    let _state_initializers = [];
    let _state_extraInitializers = [];
    var AIAnswerText = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#_container_accessor_storage = __runInitializers(this, __container_initializers, void 0);
            this._doc = __runInitializers(this, __container_extraInitializers);
            this._answers = [];
            this._timer = null;
            this.#host_accessor_storage = __runInitializers(this, _host_initializers, void 0);
            this.#answer_accessor_storage = (__runInitializers(this, _host_extraInitializers), __runInitializers(this, _answer_initializers, void 0));
            this.#options_accessor_storage = (__runInitializers(this, _answer_extraInitializers), __runInitializers(this, _options_initializers, void 0));
            this.#state_accessor_storage = (__runInitializers(this, _options_extraInitializers), __runInitializers(this, _state_initializers, undefined));
            this._clearTimer = (__runInitializers(this, _state_extraInitializers), () => {
                if (this._timer) {
                    clearInterval(this._timer);
                    this._timer = null;
                }
            });
            this._selector = block => BlocksUtils.matchFlavours(block.model, [
                'affine:page',
                'affine:note',
                'affine:surface',
                'affine:paragraph',
                'affine:code',
                'affine:list',
                'affine:divider',
            ])
                ? BlockViewType.Display
                : BlockViewType.Hidden;
            this._updateDoc = () => {
                if (this._answers.length > 0) {
                    const latestAnswer = this._answers.pop();
                    this._answers = [];
                    if (latestAnswer) {
                        markDownToDoc(this.host, latestAnswer)
                            .then(doc => {
                            this._doc = doc.blockCollection.getDoc({
                                selector: this._selector,
                            });
                            this.disposables.add(() => {
                                doc.blockCollection.clearSelector(this._selector);
                            });
                            this._doc.awarenessStore.setReadonly(this._doc.blockCollection, true);
                            this.requestUpdate();
                            if (this.state !== 'generating') {
                                this._clearTimer();
                            }
                        })
                            .catch(console.error);
                    }
                }
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __container_decorators = [query('.ai-answer-text-container')];
            _host_decorators = [property({ attribute: false })];
            _answer_decorators = [property({ attribute: false })];
            _options_decorators = [property({ attribute: false })];
            _state_decorators = [property({ attribute: false })];
            __esDecorate(this, null, __container_decorators, { kind: "accessor", name: "_container", static: false, private: false, access: { has: obj => "_container" in obj, get: obj => obj._container, set: (obj, value) => { obj._container = value; } }, metadata: _metadata }, __container_initializers, __container_extraInitializers);
            __esDecorate(this, null, _host_decorators, { kind: "accessor", name: "host", static: false, private: false, access: { has: obj => "host" in obj, get: obj => obj.host, set: (obj, value) => { obj.host = value; } }, metadata: _metadata }, _host_initializers, _host_extraInitializers);
            __esDecorate(this, null, _answer_decorators, { kind: "accessor", name: "answer", static: false, private: false, access: { has: obj => "answer" in obj, get: obj => obj.answer, set: (obj, value) => { obj.answer = value; } }, metadata: _metadata }, _answer_initializers, _answer_extraInitializers);
            __esDecorate(this, null, _options_decorators, { kind: "accessor", name: "options", static: false, private: false, access: { has: obj => "options" in obj, get: obj => obj.options, set: (obj, value) => { obj.options = value; } }, metadata: _metadata }, _options_initializers, _options_extraInitializers);
            __esDecorate(this, null, _state_decorators, { kind: "accessor", name: "state", static: false, private: false, access: { has: obj => "state" in obj, get: obj => obj.state, set: (obj, value) => { obj.state = value; } }, metadata: _metadata }, _state_initializers, _state_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AIAnswerText = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        static { this.styles = css `
    .ai-answer-text-editor.affine-page-viewport {
      background: transparent;
      font-family: var(--affine-font-family);
      margin-top: 0;
      margin-bottom: 0;
    }

    .ai-answer-text-editor .affine-page-root-block-container {
      padding: 0;
      line-height: var(--affine-line-height);
      color: var(--affine-text-primary-color);
      font-weight: 400;
    }

    .affine-paragraph-block-container {
      line-height: 22px;
    }

    .ai-answer-text-editor {
      .affine-note-block-container {
        > .affine-block-children-container {
          > :first-child,
          > :first-child * {
            margin-top: 0 !important;
          }
          > :last-child,
          > :last-child * {
            margin-bottom: 0 !important;
          }
        }
      }
    }

    .ai-answer-text-container {
      overflow-y: auto;
      overflow-x: hidden;
      padding: 0;
      overscroll-behavior-y: none;
    }
    .ai-answer-text-container.show-scrollbar::-webkit-scrollbar {
      width: 5px;
      height: 100px;
    }
    .ai-answer-text-container.show-scrollbar::-webkit-scrollbar-thumb {
      border-radius: 20px;
    }
    .ai-answer-text-container.show-scrollbar:hover::-webkit-scrollbar-thumb {
      background-color: var(--affine-black-30);
    }
    .ai-answer-text-container.show-scrollbar::-webkit-scrollbar-corner {
      display: none;
    }

    .ai-answer-text-container {
      rich-text .nowrap-lines v-text span,
      rich-text .nowrap-lines v-element span {
        white-space: pre;
      }
      editor-host:focus-visible {
        outline: none;
      }
      editor-host * {
        box-sizing: border-box;
      }
    }

    ${textBlockStyles}
    ${customHeadingStyles}
  `; }
        #_container_accessor_storage;
        get _container() { return this.#_container_accessor_storage; }
        set _container(value) { this.#_container_accessor_storage = value; }
        #host_accessor_storage;
        get host() { return this.#host_accessor_storage; }
        set host(value) { this.#host_accessor_storage = value; }
        #answer_accessor_storage;
        get answer() { return this.#answer_accessor_storage; }
        set answer(value) { this.#answer_accessor_storage = value; }
        #options_accessor_storage;
        get options() { return this.#options_accessor_storage; }
        set options(value) { this.#options_accessor_storage = value; }
        #state_accessor_storage;
        get state() { return this.#state_accessor_storage; }
        set state(value) { this.#state_accessor_storage = value; }
        _onWheel(e) {
            e.stopPropagation();
            if (this.state === 'generating') {
                e.preventDefault();
            }
        }
        shouldUpdate(changedProperties) {
            if (changedProperties.has('answer')) {
                this._answers.push(this.answer);
                return false;
            }
            return true;
        }
        connectedCallback() {
            super.connectedCallback();
            this._answers.push(this.answer);
            this._updateDoc();
            if (this.state === 'generating') {
                this._timer = setInterval(this._updateDoc, 600);
            }
        }
        disconnectedCallback() {
            super.disconnectedCallback();
            this._clearTimer();
        }
        updated(changedProperties) {
            super.updated(changedProperties);
            requestAnimationFrame(() => {
                if (!this._container)
                    return;
                this._container.scrollTop = this._container.scrollHeight;
            });
        }
        render() {
            const { maxHeight, customHeading } = this.options;
            const classes = classMap({
                'ai-answer-text-container': true,
                'show-scrollbar': !!maxHeight,
                'custom-heading': !!customHeading,
            });
            return html `
      <style>
        .ai-answer-text-container {
          max-height: ${maxHeight ? Math.max(maxHeight, 200) + 'px' : ''};
        }
      </style>
      <div class=${classes} @wheel=${this._onWheel}>
        ${keyed(this._doc, html `<div class="ai-answer-text-editor affine-page-viewport">
            ${this.host.renderSpecPortal(this._doc, CustomPageEditorBlockSpecs)}
          </div>`)}
      </div>
    `;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AIAnswerText = _classThis;
})();
export { AIAnswerText };
export const createTextRenderer = (host, options) => {
    return (answer, state) => {
        return html `<ai-answer-text
      .host=${host}
      .answer=${answer}
      .state=${state}
      .options=${options}
    ></ai-answer-text>`;
    };
};
//# sourceMappingURL=text.js.map