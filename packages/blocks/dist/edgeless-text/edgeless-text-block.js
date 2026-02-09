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
import { BlockElement } from '@blocksuite/block-std';
import { html } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';
import { isCssVariable } from '../_common/theme/css-variables.js';
import { wrapFontFamily } from '../surface-block/utils/font.js';
export const EDGELESS_TEXT_BLOCK_MIN_WIDTH = 50;
export const EDGELESS_TEXT_BLOCK_MIN_HEIGHT = 50;
let EdgelessTextBlockComponent = (() => {
    let _classDecorators = [customElement('affine-edgeless-text')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BlockElement;
    let _childrenContainer_decorators;
    let _childrenContainer_initializers = [];
    let _childrenContainer_extraInitializers = [];
    var EdgelessTextBlockComponent = class extends _classSuper {
        static { _classThis = this; }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _childrenContainer_decorators = [query('.affine-block-children-container')];
            __esDecorate(this, null, _childrenContainer_decorators, { kind: "accessor", name: "childrenContainer", static: false, private: false, access: { has: obj => "childrenContainer" in obj, get: obj => obj.childrenContainer, set: (obj, value) => { obj.childrenContainer = value; } }, metadata: _metadata }, _childrenContainer_initializers, _childrenContainer_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            EdgelessTextBlockComponent = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
            __runInitializers(_classThis, _classExtraInitializers);
        }
        tryFocusEnd() {
            const paragraphOrLists = Array.from(this.querySelectorAll('affine-paragraph, affine-list'));
            const last = paragraphOrLists.at(-1);
            if (last) {
                this.host.selection.setGroup('note', [
                    this.host.selection.create('text', {
                        from: {
                            blockId: last.blockId,
                            index: last.model.text?.length ?? 0,
                            length: 0,
                        },
                        to: null,
                    }),
                ]);
            }
        }
        #childrenContainer_accessor_storage = __runInitializers(this, _childrenContainer_initializers, void 0);
        get childrenContainer() { return this.#childrenContainer_accessor_storage; }
        set childrenContainer(value) { this.#childrenContainer_accessor_storage = value; }
        connectedCallback() {
            super.connectedCallback();
            this.disposables.add(this.model.propsUpdated.on(({ key }) => {
                this.updateComplete
                    .then(() => {
                    const command = this.host.command;
                    const blockSelections = this.model.children.map(child => this.host.selection.create('block', {
                        blockId: child.id,
                    }));
                    if (key === 'fontStyle') {
                        command.exec('formatBlock', {
                            blockSelections,
                            styles: {
                                italic: null,
                            },
                        });
                    }
                    else if (key === 'color') {
                        command.exec('formatBlock', {
                            blockSelections,
                            styles: {
                                color: null,
                            },
                        });
                    }
                    else if (key === 'fontWeight') {
                        command.exec('formatBlock', {
                            blockSelections,
                            styles: {
                                bold: null,
                            },
                        });
                    }
                })
                    .catch(console.error);
            }));
        }
        renderBlock() {
            const { color, fontFamily, fontStyle, fontWeight, textAlign } = this.model;
            const style = styleMap({
                color: isCssVariable(color) ? `var(${color})` : color,
                fontFamily: wrapFontFamily(fontFamily),
                fontStyle,
                fontWeight,
                textAlign,
            });
            return html `
      <div style=${style} class="affine-edgeless-text-block-container">
        <div class="affine-block-children-container">
          ${this.renderChildren(this.model)}
        </div>
      </div>
    `;
        }
        constructor() {
            super(...arguments);
            __runInitializers(this, _childrenContainer_extraInitializers);
        }
    };
    return EdgelessTextBlockComponent = _classThis;
})();
export { EdgelessTextBlockComponent };
//# sourceMappingURL=edgeless-text-block.js.map