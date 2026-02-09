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
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import { INLINE_ROOT_ATTR, ZERO_WIDTH_NON_JOINER, } from '@blocksuite/inline';
import { css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { BLOCK_ID_ATTR } from '../../../../consts.js';
import { AI_PLACEHOLDER_NODE } from '../consts.js';
// 重新导出常量，方便外部使用
export { AI_PLACEHOLDER_NODE } from '../consts.js';
/**
 * AI 占位符内联组件
 * =====================
 * 支持直接编辑，双击进入编辑模式
 * 数据通过 delta.attributes.aiPlaceholder.content 存储
 * =====================
 */
let AffineAiPlaceholder = (() => {
    let _classDecorators = [customElement('affine-ai-placeholder')];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _classSuper = WithDisposable(ShadowlessElement);
    let _delta_decorators;
    let _delta_initializers = [];
    let _delta_extraInitializers = [];
    let _selected_decorators;
    let _selected_initializers = [];
    let _selected_extraInitializers = [];
    let __editing_decorators;
    let __editing_initializers = [];
    let __editing_extraInitializers = [];
    let __editValue_decorators;
    let __editValue_initializers = [];
    let __editValue_extraInitializers = [];
    var AffineAiPlaceholder = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#delta_accessor_storage = __runInitializers(this, _delta_initializers, {
                insert: AI_PLACEHOLDER_NODE,
                attributes: {},
            });
            this.#selected_accessor_storage = (__runInitializers(this, _delta_extraInitializers), __runInitializers(this, _selected_initializers, false));
            this.#_editing_accessor_storage = (__runInitializers(this, _selected_extraInitializers), __runInitializers(this, __editing_initializers, false));
            this.#_editValue_accessor_storage = (__runInitializers(this, __editing_extraInitializers), __runInitializers(this, __editValue_initializers, ''));
            /**
             * 是否正在进行中文输入
             */
            this._isComposing = (__runInitializers(this, __editValue_extraInitializers), false);
            // ========================================
            // 事件处理
            // ========================================
            /**
             * 单击进入编辑模式
             * =====================
             * 修复：改为单击编辑
             * =====================
             */
            this._onClick = (e) => {
                e.preventDefault();
                e.stopPropagation();
                if (this.doc.readonly)
                    return;
                if (this._editing)
                    return;
                this._editing = true;
                this._editValue = this.placeholderContent;
                // 聚焦输入框
                requestAnimationFrame(() => {
                    const input = this.renderRoot.querySelector('.affine-ai-placeholder-input');
                    if (input) {
                        input.focus();
                        input.select();
                    }
                });
            };
            /**
             * 输入框键盘事件
             * =====================
             * 阻止所有键盘事件冒泡，防止内容外泄
             * 中文输入时不响应 Enter（等待 compositionend）
             * =====================
             */
            this._onKeyDown = (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                // 中文输入时不响应 Enter
                if (this._isComposing)
                    return;
                if (e.key === 'Enter') {
                    e.preventDefault();
                    this._saveAndExit();
                }
                else if (e.key === 'Escape') {
                    e.preventDefault();
                    this._cancelEdit();
                }
            };
            /**
             * 阻止 keyup 事件冒泡
             */
            this._onKeyUp = (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            };
            /**
             * 阻止 beforeinput 事件冒泡
             * =====================
             * 防止输入内容外泄到 BlockSuite 编辑器
             * =====================
             */
            this._onBeforeInput = (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
            };
            /**
             * 中文输入开始
             */
            this._onCompositionStart = (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this._isComposing = true;
            };
            /**
             * 中文输入结束
             */
            this._onCompositionEnd = (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                this._isComposing = false;
                // 更新值
                const input = e.target;
                this._editValue = input.value;
            };
            /**
             * 输入框失焦时保存
             */
            this._onBlur = () => {
                // 延迟一下，避免中文输入时误触发
                setTimeout(() => {
                    if (this._editing && !this._isComposing) {
                        this._saveAndExit();
                    }
                }, 100);
            };
            /**
             * 输入框值变化
             * =====================
             * 阻止事件冒泡，防止外泄
             * =====================
             */
            this._onInput = (e) => {
                e.stopPropagation();
                e.stopImmediatePropagation();
                // 中文输入时在 compositionend 处理
                if (!this._isComposing) {
                    const input = e.target;
                    this._editValue = input.value;
                }
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _delta_decorators = [property({ type: Object })];
            _selected_decorators = [property({ type: Boolean })];
            __editing_decorators = [state()];
            __editValue_decorators = [state()];
            __esDecorate(this, null, _delta_decorators, { kind: "accessor", name: "delta", static: false, private: false, access: { has: obj => "delta" in obj, get: obj => obj.delta, set: (obj, value) => { obj.delta = value; } }, metadata: _metadata }, _delta_initializers, _delta_extraInitializers);
            __esDecorate(this, null, _selected_decorators, { kind: "accessor", name: "selected", static: false, private: false, access: { has: obj => "selected" in obj, get: obj => obj.selected, set: (obj, value) => { obj.selected = value; } }, metadata: _metadata }, _selected_initializers, _selected_extraInitializers);
            __esDecorate(this, null, __editing_decorators, { kind: "accessor", name: "_editing", static: false, private: false, access: { has: obj => "_editing" in obj, get: obj => obj._editing, set: (obj, value) => { obj._editing = value; } }, metadata: _metadata }, __editing_initializers, __editing_extraInitializers);
            __esDecorate(this, null, __editValue_decorators, { kind: "accessor", name: "_editValue", static: false, private: false, access: { has: obj => "_editValue" in obj, get: obj => obj._editValue, set: (obj, value) => { obj._editValue = value; } }, metadata: _metadata }, __editValue_initializers, __editValue_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineAiPlaceholder = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        // ========================================
        // 静态样式定义
        // ========================================
        static { this.styles = css `
    .affine-ai-placeholder {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      padding: 2px 10px;
      margin: 0 2px;
      background: linear-gradient(135deg, #f3e8ff 0%, #ede9fe 100%);
      border: 1px solid var(--ai-placeholder-border, #c4b5fd);
      border-radius: 6px;
      color: #7c3aed;
      font-size: 14px;
      cursor: pointer;
      user-select: none;
      vertical-align: baseline;
      white-space: nowrap;
    }

    .affine-ai-placeholder:hover {
      background: linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%);
      --ai-placeholder-border: #a78bfa;
    }

    .affine-ai-placeholder[data-selected='true'],
    .affine-ai-placeholder[data-editing='true'] {
      --ai-placeholder-border: #a78bfa;
      box-shadow: 0 0 0 2px rgba(167, 139, 250, 0.3);
    }

    .affine-ai-placeholder-icon {
      font-size: 12px;
      color: #8b5cf6;
    }

    .affine-ai-placeholder-content {
      max-width: 200px;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .affine-ai-placeholder-empty {
      opacity: 0.6;
      font-style: italic;
    }

    .affine-ai-placeholder-input {
      border: none;
      background: transparent;
      color: #7c3aed;
      font-size: 14px;
      outline: none;
      min-width: 60px;
      max-width: 200px;
    }

    .affine-ai-placeholder-input::placeholder {
      color: #a78bfa;
      font-style: italic;
    }
  `; }
        // ========================================
        // Getter 方法（参考 reference-node）
        // ========================================
        /**
         * 获取内联编辑器实例
         */
        get inlineEditor() {
            const inlineRoot = this.closest(`[${INLINE_ROOT_ATTR}]`);
            assertExists(inlineRoot, 'Cannot find inline root element');
            return inlineRoot.inlineEditor;
        }
        /**
         * 获取当前元素的内联范围
         */
        get selfInlineRange() {
            const selfInlineRange = this.inlineEditor.getInlineRangeFromElement(this);
            assertExists(selfInlineRange, 'Cannot get inline range');
            return selfInlineRange;
        }
        /**
         * 获取所属的 block 元素
         */
        get blockElement() {
            const blockElement = this.inlineEditor.rootElement.closest(`[${BLOCK_ID_ATTR}]`);
            assertExists(blockElement, 'Cannot find block element');
            return blockElement;
        }
        /**
         * 获取标准 API
         */
        get std() {
            const std = this.blockElement.std;
            assertExists(std, 'Cannot get std');
            return std;
        }
        /**
         * 获取文档对象
         */
        get doc() {
            return this.std.doc;
        }
        /**
         * 获取占位符显示内容
         */
        get placeholderContent() {
            return this.delta.attributes?.aiPlaceholder?.content || '';
        }
        #delta_accessor_storage;
        // ========================================
        // 属性定义
        // ========================================
        /**
         * Delta 数据
         * 关键：insert 必须是 AI_PLACEHOLDER_NODE（单个空格字符）
         */
        get delta() { return this.#delta_accessor_storage; }
        set delta(value) { this.#delta_accessor_storage = value; }
        #selected_accessor_storage;
        /**
         * 是否被选中
         */
        get selected() { return this.#selected_accessor_storage; }
        set selected(value) { this.#selected_accessor_storage = value; }
        #_editing_accessor_storage;
        /**
         * 是否处于编辑模式
         */
        get _editing() { return this.#_editing_accessor_storage; }
        set _editing(value) { this.#_editing_accessor_storage = value; }
        #_editValue_accessor_storage;
        /**
         * 编辑中的临时值
         */
        get _editValue() { return this.#_editValue_accessor_storage; }
        set _editValue(value) { this.#_editValue_accessor_storage = value; }
        /**
         * 保存并退出编辑模式
         * =====================
         * 修复：正确保存到 Yjs
         * 使用 Y.Text 的 format 方法更新属性
         * =====================
         */
        _saveAndExit() {
            const newContent = this._editValue.trim();
            this._editing = false;
            // 即使内容相同也更新，确保数据一致性
            try {
                const inlineRange = this.selfInlineRange;
                // 使用 formatText 更新 aiPlaceholder 属性
                this.inlineEditor.formatText(inlineRange, {
                    aiPlaceholder: { content: newContent }
                });
                console.log('[AI Placeholder] ✅ 内容已保存到 Yjs:', newContent);
            }
            catch (err) {
                console.error('[AI Placeholder] ❌ 保存失败:', err);
            }
        }
        /**
         * 取消编辑
         */
        _cancelEdit() {
            this._editing = false;
            this._editValue = '';
        }
        ;
        // ========================================
        // 生命周期方法
        // ========================================
        /**
         * 组件连接到 DOM 时
         * =====================
         * 关键：验证 insert 值是否正确
         * 如果不是 AI_PLACEHOLDER_NODE，说明有问题
         * =====================
         */
        connectedCallback() {
            super.connectedCallback();
            // 验证 insert 值（参考 reference-node 的做法）
            if (this.delta.insert !== AI_PLACEHOLDER_NODE) {
                console.error(`[AI Placeholder] Node must be initialized with '${AI_PLACEHOLDER_NODE}' (space char), ` +
                    `but got '${this.delta.insert}' (length: ${this.delta.insert.length}). ` +
                    `This may cause cursor issues.`);
            }
        }
        // ========================================
        // 渲染方法
        // ========================================
        /**
         * 渲染组件
         * =====================
         * 修复：
         * 1. 单击进入编辑模式
         * 2. 添加 beforeinput 阻止内容外泄
         * 3. 显示文本改为"点击输入要求"
         * =====================
         */
        render() {
            const content = this.placeholderContent;
            const displayText = content || '点击输入要求';
            const isEmpty = !content;
            // 编辑模式：显示输入框
            // 【关键】阻止所有可能导致内容外泄的事件
            if (this._editing) {
                return html `<span
        class="affine-ai-placeholder"
        data-selected="true"
        data-editing="true"
        @click=${(e) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
        @mousedown=${(e) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
      >
        <span class="affine-ai-placeholder-icon">✦</span>
        <input
          class="affine-ai-placeholder-input"
          type="text"
          .value=${this._editValue}
          placeholder="输入 AI 要求..."
          @input=${this._onInput}
          @keydown=${this._onKeyDown}
          @keyup=${this._onKeyUp}
          @keypress=${(e) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
          @beforeinput=${this._onBeforeInput}
          @compositionstart=${this._onCompositionStart}
          @compositionend=${this._onCompositionEnd}
          @compositionupdate=${(e) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
          @blur=${this._onBlur}
          @click=${(e) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
          @mousedown=${(e) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
          @mouseup=${(e) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
          @focus=${(e) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
        /><v-text .str=${ZERO_WIDTH_NON_JOINER}></v-text>
      </span>`;
            }
            // 显示模式：显示标签，单击进入编辑
            return html `<span
      class="affine-ai-placeholder"
      data-selected=${this.selected}
      @click=${this._onClick}
    >
      <span class="affine-ai-placeholder-icon">✦</span>
      <span class="affine-ai-placeholder-content ${isEmpty ? 'affine-ai-placeholder-empty' : ''}"
        >${displayText}</span
      ><v-text .str=${ZERO_WIDTH_NON_JOINER}></v-text>
    </span>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineAiPlaceholder = _classThis;
})();
export { AffineAiPlaceholder };
//# sourceMappingURL=ai-placeholder-node.js.map