/**
 * AI Diff 内联组件
 * =====================
 * 功能：
 * 1. 显示 AI 修改的差异
 * 2. delete 类型：红色删除线
 * 3. insert 类型：绿色高亮 + 接受/拒绝按钮
 * 4. 点击接受：应用修改
 * 5. 点击拒绝：恢复原文
 * =====================
 */
import type { BlockElement } from '@blocksuite/block-std';
import { ShadowlessElement, WithDisposable } from '@blocksuite/block-std';
import { assertExists } from '@blocksuite/global/utils';
import {
  type DeltaInsert,
  INLINE_ROOT_ATTR,
  type InlineRootElement,
  ZERO_WIDTH_NON_JOINER,
} from '@blocksuite/inline';
import { css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { BLOCK_ID_ATTR } from '../../../../consts.js';
import type { AffineTextAttributes } from '../../affine-inline-specs.js';

/**
 * AI Diff 内联组件
 * =====================
 * 根据 type 属性渲染不同样式：
 * - delete: 红色删除线
 * - insert: 绿色高亮 + 操作按钮
 * =====================
 */
@customElement('affine-ai-diff')
export class AffineAiDiff extends WithDisposable(ShadowlessElement) {
  // ========================================
  // 静态样式定义
  // ========================================
  static override styles = css`
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
  `;

  // ========================================
  // Getter 方法
  // ========================================
  
  get inlineEditor() {
    const inlineRoot = this.closest<InlineRootElement<AffineTextAttributes>>(
      `[${INLINE_ROOT_ATTR}]`
    );
    assertExists(inlineRoot, 'Cannot find inline root element');
    return inlineRoot.inlineEditor;
  }

  get selfInlineRange() {
    const selfInlineRange = this.inlineEditor.getInlineRangeFromElement(this);
    assertExists(selfInlineRange, 'Cannot get inline range');
    return selfInlineRange;
  }

  get blockElement() {
    const blockElement = this.inlineEditor.rootElement.closest<BlockElement>(
      `[${BLOCK_ID_ATTR}]`
    );
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

  // ========================================
  // 属性定义
  // ========================================
  
  @property({ type: Object })
  accessor delta: DeltaInsert<AffineTextAttributes> = {
    insert: '',
    attributes: {},
  };

  @property({ type: Boolean })
  accessor selected = false;

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
  private _onAccept = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const diff = this.diffData;
    if (!diff) return;
    
    const diffId = diff.id;
    
    try {
      // 【v7 核心】获取整个 block 的 text，处理所有相同 diffId 的 delta
      const blockElement = this.blockElement;
      const text = (blockElement.model as any).text;
      if (!text) {
        console.warn('[AI Diff] ⚠️ 无法获取 block text');
        return;
      }
      
      const yText = text.yText;
      const deltas = yText.toDelta();
      
      // 收集所有需要处理的操作（从后往前，避免索引错乱）
      const operations: Array<{type: 'delete' | 'format', index: number, length: number}> = [];
      let offset = 0;
      
      for (const delta of deltas) {
        const insertText = delta.insert;
        const length = typeof insertText === 'string' ? insertText.length : 1;
        const aiDiff = delta.attributes?.aiDiff;
        
        // 只处理相同 diffId 的 delta
        if (aiDiff && aiDiff.id === diffId) {
          if (aiDiff.type === 'delete') {
            operations.push({ type: 'delete', index: offset, length });
          } else if (aiDiff.type === 'insert') {
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
        } else {
          text.format(op.index, op.length, { aiDiff: null });
        }
      }
      
      console.log('[AI Diff] ✅ 接受完成:', diffId);
      
      // 触发事件通知外部
      window.dispatchEvent(new CustomEvent('blocksuite-diff-accept', {
        detail: { diffId, type: diff.type }
      }));
    } catch (err) {
      console.error('[AI Diff] ❌ 接受失败:', err);
    }
  };

  /**
   * 拒绝 Diff - 【v7 修复】处理整个 block 中所有相同 diffId 的 delta
   * =====================
   * - 找到所有相同 aiDiff.id 的 delta
   * - delete 类型：保留原文，移除 aiDiff 属性
   * - insert 类型：删除这段新文本
   * =====================
   */
  private _onReject = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const diff = this.diffData;
    if (!diff) return;
    
    const diffId = diff.id;
    
    try {
      // 【v7 核心】获取整个 block 的 text，处理所有相同 diffId 的 delta
      const blockElement = this.blockElement;
      const text = (blockElement.model as any).text;
      if (!text) {
        console.warn('[AI Diff] ⚠️ 无法获取 block text');
        return;
      }
      
      const yText = text.yText;
      const deltas = yText.toDelta();
      
      // 收集所有需要处理的操作（从后往前，避免索引错乱）
      const operations: Array<{type: 'delete' | 'format', index: number, length: number}> = [];
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
          } else if (aiDiff.type === 'delete') {
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
        } else {
          text.format(op.index, op.length, { aiDiff: null });
        }
      }
      
      console.log('[AI Diff] ✅ 拒绝完成:', diffId);
      
      // 触发事件通知外部
      window.dispatchEvent(new CustomEvent('blocksuite-diff-reject', {
        detail: { diffId, type: diff.type }
      }));
    } catch (err) {
      console.error('[AI Diff] ❌ 拒绝失败:', err);
    }
  };

  // ========================================
  // 渲染方法
  // ========================================
  
  protected override render() {
    const diff = this.diffData;
    if (!diff) {
      return html`<affine-text .delta=${this.delta}></affine-text>`;
    }
    
    const text = this.delta.insert;
    
    // 删除类型：红色删除线
    if (diff.type === 'delete') {
      return html`<span class="ai-diff-delete">${text}<v-text .str=${ZERO_WIDTH_NON_JOINER}></v-text></span>`;
    }
    
    // 插入类型：绿色高亮 + 操作按钮
    return html`<span class="ai-diff-insert">${text}</span><span class="ai-diff-actions">
      <button class="ai-diff-btn ai-diff-btn-accept" @click=${this._onAccept} title="接受">✓</button>
      <button class="ai-diff-btn ai-diff-btn-reject" @click=${this._onReject} title="拒绝">✕</button>
    </span><v-text .str=${ZERO_WIDTH_NON_JOINER}></v-text>`;
  }
}

// ========================================
// 全局类型声明
// ========================================
declare global {
  interface HTMLElementTagNameMap {
    'affine-ai-diff': AffineAiDiff;
  }
}
