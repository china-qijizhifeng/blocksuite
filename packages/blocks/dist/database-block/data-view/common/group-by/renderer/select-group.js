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
import { css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { popMenu } from '../../../../../_common/components/index.js';
import { selectOptionColors } from '../../../utils/tags/colors.js';
import { BaseGroup } from './base.js';
let SelectGroupView = (() => {
    let _classDecorators = [customElement('data-view-group-title-select-view')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = BaseGroup;
    var SelectGroupView = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this._click = () => {
                if (this.readonly) {
                    return;
                }
                popMenu(this, {
                    options: {
                        input: {
                            initValue: this.tag?.value ?? '',
                            onComplete: text => {
                                this.updateTag({ value: text });
                            },
                        },
                        items: selectOptionColors.map(({ color, name }) => {
                            const styles = styleMap({
                                backgroundColor: color,
                                borderRadius: '50%',
                                width: '20px',
                                height: '20px',
                            });
                            return {
                                type: 'action',
                                name: name,
                                isSelected: this.tag?.color === color,
                                icon: html ` <div style=${styles}></div>`,
                                select: () => {
                                    this.updateTag({ color });
                                },
                            };
                        }),
                    },
                });
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            SelectGroupView = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        get tag() {
            return this.data.options.find(v => v.id === this.value);
        }
        static { this.styles = css `
    data-view-group-title-select-view {
      overflow: hidden;
    }
    .data-view-group-title-select-view {
      width: 100%;
      cursor: pointer;
    }

    .data-view-group-title-select-view.readonly {
      cursor: inherit;
    }

    .tag {
      padding: 0 8px;
      border-radius: 4px;
      font-size: var(--data-view-cell-text-size);
      line-height: var(--data-view-cell-text-line-height);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  `; }
        render() {
            const tag = this.tag;
            if (!tag) {
                return html ` <div
        style="font-size: 14px;color: var(--affine-text-primary-color);line-height: 22px;"
      >
        Ungroups
      </div>`;
            }
            const style = styleMap({
                backgroundColor: tag.color,
            });
            const classList = classMap({
                'data-view-group-title-select-view': true,
                readonly: this.readonly,
            });
            return html ` <div @click="${this._click}" class="${classList}">
      <div class="tag" style="${style}">${tag.value}</div>
    </div>`;
        }
        updateTag(tag) {
            this.updateData?.({
                ...this.data,
                options: this.data.options.map(v => {
                    if (v.id === this.value) {
                        return {
                            ...v,
                            ...tag,
                        };
                    }
                    return v;
                }),
            });
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return SelectGroupView = _classThis;
})();
export { SelectGroupView };
//# sourceMappingURL=select-group.js.map