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
import { customElement, property } from 'lit/decorators.js';
import { BLOCK_ID_ATTR } from '../../../../consts.js';
/**
 * AI Diff 内联组件
 * =====================
 * 根据 type 属性渲染不同样式：
 * - delete: 红色删除线
 * - insert: 绿色高亮 + 操作按钮
 * =====================
 */
let AffineAiDiff = (() => {
    let _classDecorators = [customElement('affine-ai-diff')];
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
    var AffineAiDiff = class extends _classSuper {
        static { _classThis = this; }
        constructor() {
            super(...arguments);
            this.#delta_accessor_storage = __runInitializers(this, _delta_initializers, {
                insert: '',
                attributes: {},
            });
            this.#selected_accessor_storage = (__runInitializers(this, _delta_extraInitializers), __runInitializers(this, _selected_initializers, false));
            // ========================================
            // 事件处理
            // ========================================
            /**
             * 接受 Diff - 【v7 修复】处理整个 block 中所有相同 diffId 的 delta
             * =====================
             * - 找到所有相同 aiDiff.id 的 delta
             * - delete 类型：删除这段文本
             * - insert 类型：保留文本，移除 aiDiff 属性
             * =====================
             */
            this._onAccept = (__runInitializers(this, _selected_extraInitializers), (e) => {
                e.preventDefault();
                e.stopPropagation();
                const diff = this.diffData;
                if (!diff)
                    return;
                const diffId = diff.id;
                try {
                    // 【v7 核心】获取整个 block 的 text，处理所有相同 diffId 的 delta
                    const blockElement = this.blockElement;
                    const text = blockElement.model.text;
                    if (!text) {
                        console.warn('[AI Diff] ⚠️ 无法获取 block text');
                        return;
                    }
                    const yText = text.yText;
                    const deltas = yText.toDelta();
                    // 收集所有需要处理的操作（从后往前，避免索引错乱）
                    const operations = [];
                    let offset = 0;
                    for (const delta of deltas) {
                        const insertText = delta.insert;
                        const length = typeof insertText === 'string' ? insertText.length : 1;
                        const aiDiff = delta.attributes?.aiDiff;
                        // 只处理相同 diffId 的 delta
                        if (aiDiff && aiDiff.id === diffId) {
                            if (aiDiff.type === 'delete') {
                                operations.push({ type: 'delete', index: offset, length });
                            }
                            else if (aiDiff.type === 'insert') {
                                operations.push({ type: 'format', index: offset, length });
                            }
                        }
                        offset += length;
                    }
                    console.log(`[AI Diff] 🔄 接受整个 block，共 ${operations.length} 个操作:`, diffId);
                    // 从后往前执行操作
                    operations.reverse();
                    for (const op of operations) {
                        if (op.type === 'delete') {
                            text.delete(op.index, op.length);
                        }
                        else {
                            text.format(op.index, op.length, { aiDiff: null });
                        }
                    }
                    console.log('[AI Diff] ✅ 接受完成:', diffId);
                    // 触发事件通知外部
                    window.dispatchEvent(new CustomEvent('blocksuite-diff-accept', {
                        detail: { diffId, type: diff.type }
                    }));
                }
                catch (err) {
                    console.error('[AI Diff] ❌ 接受失败:', err);
                }
            });
            /**
             * 拒绝 Diff - 【v7 修复】处理整个 block 中所有相同 diffId 的 delta
             * =====================
             * - 找到所有相同 aiDiff.id 的 delta
             * - delete 类型：保留原文，移除 aiDiff 属性
             * - insert 类型：删除这段新文本
             * =====================
             */
            this._onReject = (e) => {
                e.preventDefault();
                e.stopPropagation();
                const diff = this.diffData;
                if (!diff)
                    return;
                const diffId = diff.id;
                try {
                    // 【v7 核心】获取整个 block 的 text，处理所有相同 diffId 的 delta
                    const blockElement = this.blockElement;
                    const text = blockElement.model.text;
                    if (!text) {
                        console.warn('[AI Diff] ⚠️ 无法获取 block text');
                        return;
                    }
                    const yText = text.yText;
                    const deltas = yText.toDelta();
                    // 收集所有需要处理的操作（从后往前，避免索引错乱）
                    const operations = [];
                    let offset = 0;
                    for (const delta of deltas) {
                        const insertText = delta.insert;
                        const length = typeof insertText === 'string' ? insertText.length : 1;
                        const aiDiff = delta.attributes?.aiDiff;
                        // 只处理相同 diffId 的 delta
                        if (aiDiff && aiDiff.id === diffId) {
                            if (aiDiff.type === 'insert') {
                                // 拒绝 insert = 删除新文
                                operations.push({ type: 'delete', index: offset, length });
                            }
                            else if (aiDiff.type === 'delete') {
                                // 拒绝 delete = 保留原文，移除标记
                                operations.push({ type: 'format', index: offset, length });
                            }
                        }
                        offset += length;
                    }
                    console.log(`[AI Diff] 🔄 拒绝整个 block，共 ${operations.length} 个操作:`, diffId);
                    // 从后往前执行操作
                    operations.reverse();
                    for (const op of operations) {
                        if (op.type === 'delete') {
                            text.delete(op.index, op.length);
                        }
                        else {
                            text.format(op.index, op.length, { aiDiff: null });
                        }
                    }
                    console.log('[AI Diff] ✅ 拒绝完成:', diffId);
                    // 触发事件通知外部
                    window.dispatchEvent(new CustomEvent('blocksuite-diff-reject', {
                        detail: { diffId, type: diff.type }
                    }));
                }
                catch (err) {
                    console.error('[AI Diff] ❌ 拒绝失败:', err);
                }
            };
        }
        static {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(_classSuper[Symbol.metadata] ?? null) : void 0;
            _delta_decorators = [property({ type: Object })];
            _selected_decorators = [property({ type: Boolean })];
            __esDecorate(this, null, _delta_decorators, { kind: "accessor", name: "delta", static: false, private: false, access: { has: obj => "delta" in obj, get: obj => obj.delta, set: (obj, value) => { obj.delta = value; } }, metadata: _metadata }, _delta_initializers, _delta_extraInitializers);
            __esDecorate(this, null, _selected_decorators, { kind: "accessor", name: "selected", static: false, private: false, access: { has: obj => "selected" in obj, get: obj => obj.selected, set: (obj, value) => { obj.selected = value; } }, metadata: _metadata }, _selected_initializers, _selected_extraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
            AffineAiDiff = _classThis = _classDescriptor.value;
            if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        }
        // ========================================
        // 静态样式定义
        // ========================================
        static { this.styles = css `
    /* 删除样式：红色删除线 */
    .ai-diff-delete {
      text-decoration: line-through;
      color: #dc2626;
      background-color: #fef2f2;
      padding: 1px 2px;
      border-radius: 2px;
    }

    /* 插入样式：绿色高亮 */
    .ai-diff-insert {
      color: #166534;
      background-color: #dcfce7;
      padding: 1px 2px;
      border-radius: 2px;
    }

    /* 操作按钮容器 */
    .ai-diff-actions {
      display: inline-flex;
      gap: 2px;
      margin-left: 4px;
      vertical-align: middle;
    }

    /* 操作按钮 */
    .ai-diff-btn {
      padding: 2px 6px;
      border-radius: 4px;
      border: none;
      cursor: pointer;
      font-size: 11px;
      font-weight: 500;
      line-height: 1;
    }

    .ai-diff-btn-accept {
      background: #dcfce7;
      color: #16a34a;
    }

    .ai-diff-btn-accept:hover {
      background: #bbf7d0;
    }

    .ai-diff-btn-reject {
      background: #fee2e2;
      color: #dc2626;
    }

    .ai-diff-btn-reject:hover {
      background: #fecaca;
    }
  `; }
        // ========================================
        // Getter 方法
        // ========================================
        get inlineEditor() {
            const inlineRoot = this.closest(`[${INLINE_ROOT_ATTR}]`);
            assertExists(inlineRoot, 'Cannot find inline root element');
            return inlineRoot.inlineEditor;
        }
        get selfInlineRange() {
            const selfInlineRange = this.inlineEditor.getInlineRangeFromElement(this);
            assertExists(selfInlineRange, 'Cannot get inline range');
            return selfInlineRange;
        }
        get blockElement() {
            const blockElement = this.inlineEditor.rootElement.closest(`[${BLOCK_ID_ATTR}]`);
            assertExists(blockElement, 'Cannot find block element');
            return blockElement;
        }
        get std() {
            const std = this.blockElement.std;
            assertExists(std, 'Cannot get std');
            return std;
        }
        get doc() {
            return this.std.doc;
        }
        get diffData() {
            return this.delta.attributes?.aiDiff;
        }
        #delta_accessor_storage;
        // ========================================
        // 属性定义
        // ========================================
        get delta() { return this.#delta_accessor_storage; }
        set delta(value) { this.#delta_accessor_storage = value; }
        #selected_accessor_storage;
        get selected() { return this.#selected_accessor_storage; }
        set selected(value) { this.#selected_accessor_storage = value; }
        // ========================================
        // 渲染方法
        // ========================================
        render() {
            const diff = this.diffData;
            if (!diff) {
                return html `<affine-text .delta=${this.delta}></affine-text>`;
            }
            const text = this.delta.insert;
            // 删除类型：红色删除线
            if (diff.type === 'delete') {
                return html `<span class="ai-diff-delete">${text}<v-text .str=${ZERO_WIDTH_NON_JOINER}></v-text></span>`;
            }
            // 插入类型：绿色高亮 + 操作按钮
            return html `<span class="ai-diff-insert">${text}</span><span class="ai-diff-actions">
      <button class="ai-diff-btn ai-diff-btn-accept" @click=${this._onAccept} title="接受">✓</button>
      <button class="ai-diff-btn ai-diff-btn-reject" @click=${this._onReject} title="拒绝">✕</button>
    </span><v-text .str=${ZERO_WIDTH_NON_JOINER}></v-text>`;
        }
        static {
            __runInitializers(_classThis, _classExtraInitializers);
        }
    };
    return AffineAiDiff = _classThis;
})();
export { AffineAiDiff };
//# sourceMappingURL=ai-diff-node.js.map