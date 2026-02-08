/**
 * AI 占位符内联组件
 * =====================
 * 功能：
 * 1. 显示为紫色标签
 * 2. 单击进入编辑模式
 * 3. 回车确认、ESC 取消、失焦保存
 * 4. 数据持久化到 Y.Text 的 aiPlaceholder.content
 * 
 * 修复：
 * - 单击编辑（不是双击）
 * - 阻止输入内容外泄到编辑器
 * - 正确保存到 Yjs
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
import { customElement, property, state } from 'lit/decorators.js';

import { BLOCK_ID_ATTR } from '../../../../consts.js';
import type { AffineTextAttributes } from '../../affine-inline-specs.js';
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
@customElement('affine-ai-placeholder')
export class AffineAiPlaceholder extends WithDisposable(ShadowlessElement) {
  // ========================================
  // 静态样式定义
  // ========================================
  static override styles = css`
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
  `;

  // ========================================
  // Getter 方法（参考 reference-node）
  // ========================================
  
  /**
   * 获取内联编辑器实例
   */
  get inlineEditor() {
    const inlineRoot = this.closest<InlineRootElement<AffineTextAttributes>>(
      `[${INLINE_ROOT_ATTR}]`
    );
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
    const blockElement = this.inlineEditor.rootElement.closest<BlockElement>(
      `[${BLOCK_ID_ATTR}]`
    );
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
  get placeholderContent(): string {
    return this.delta.attributes?.aiPlaceholder?.content || '';
  }

  // ========================================
  // 属性定义
  // ========================================
  
  /**
   * Delta 数据
   * 关键：insert 必须是 AI_PLACEHOLDER_NODE（单个空格字符）
   */
  @property({ type: Object })
  accessor delta: DeltaInsert<AffineTextAttributes> = {
    insert: AI_PLACEHOLDER_NODE,
    attributes: {},
  };

  /**
   * 是否被选中
   */
  @property({ type: Boolean })
  accessor selected = false;

  /**
   * 是否处于编辑模式
   */
  @state()
  accessor _editing = false;

  /**
   * 编辑中的临时值
   */
  @state()
  accessor _editValue = '';

  /**
   * 是否正在进行中文输入
   */
  private _isComposing = false;

  // ========================================
  // 事件处理
  // ========================================
  
  /**
   * 单击进入编辑模式
   * =====================
   * 修复：改为单击编辑
   * =====================
   */
  private _onClick = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (this.doc.readonly) return;
    if (this._editing) return;
    
    this._editing = true;
    this._editValue = this.placeholderContent;
    
    // 聚焦输入框
    requestAnimationFrame(() => {
      const input = this.renderRoot.querySelector('.affine-ai-placeholder-input') as HTMLInputElement;
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
  private _onKeyDown = (e: KeyboardEvent) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
    
    // 中文输入时不响应 Enter
    if (this._isComposing) return;
    
    if (e.key === 'Enter') {
      e.preventDefault();
      this._saveAndExit();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      this._cancelEdit();
    }
  };

  /**
   * 阻止 keyup 事件冒泡
   */
  private _onKeyUp = (e: KeyboardEvent) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
  };

  /**
   * 阻止 beforeinput 事件冒泡
   * =====================
   * 防止输入内容外泄到 BlockSuite 编辑器
   * =====================
   */
  private _onBeforeInput = (e: Event) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
  };

  /**
   * 中文输入开始
   */
  private _onCompositionStart = (e: Event) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
    this._isComposing = true;
  };

  /**
   * 中文输入结束
   */
  private _onCompositionEnd = (e: Event) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
    this._isComposing = false;
    // 更新值
    const input = e.target as HTMLInputElement;
    this._editValue = input.value;
  };

  /**
   * 输入框失焦时保存
   */
  private _onBlur = () => {
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
  private _onInput = (e: Event) => {
    e.stopPropagation();
    e.stopImmediatePropagation();
    // 中文输入时在 compositionend 处理
    if (!this._isComposing) {
      const input = e.target as HTMLInputElement;
      this._editValue = input.value;
    }
  };

  /**
   * 保存并退出编辑模式
   * =====================
   * 修复：正确保存到 Yjs
   * 使用 Y.Text 的 format 方法更新属性
   * =====================
   */
  private _saveAndExit() {
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
    } catch (err) {
      console.error('[AI Placeholder] ❌ 保存失败:', err);
    }
  }

  /**
   * 取消编辑
   */
  private _cancelEdit() {
    this._editing = false;
    this._editValue = '';
  };

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
  override connectedCallback() {
    super.connectedCallback();
    
    // 验证 insert 值（参考 reference-node 的做法）
    if (this.delta.insert !== AI_PLACEHOLDER_NODE) {
      console.error(
        `[AI Placeholder] Node must be initialized with '${AI_PLACEHOLDER_NODE}' (space char), ` +
        `but got '${this.delta.insert}' (length: ${this.delta.insert.length}). ` +
        `This may cause cursor issues.`
      );
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
  protected override render() {
    const content = this.placeholderContent;
    const displayText = content || '点击输入要求';
    const isEmpty = !content;

    // 编辑模式：显示输入框
    // 【关键】阻止所有可能导致内容外泄的事件
    if (this._editing) {
      return html`<span
        class="affine-ai-placeholder"
        data-selected="true"
        data-editing="true"
        @click=${(e: Event) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
        @mousedown=${(e: Event) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
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
          @keypress=${(e: Event) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
          @beforeinput=${this._onBeforeInput}
          @compositionstart=${this._onCompositionStart}
          @compositionend=${this._onCompositionEnd}
          @compositionupdate=${(e: Event) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
          @blur=${this._onBlur}
          @click=${(e: Event) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
          @mousedown=${(e: Event) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
          @mouseup=${(e: Event) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
          @focus=${(e: Event) => { e.stopPropagation(); e.stopImmediatePropagation(); }}
        /><v-text .str=${ZERO_WIDTH_NON_JOINER}></v-text>
      </span>`;
    }

    // 显示模式：显示标签，单击进入编辑
    return html`<span
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
}

// ========================================
// 全局类型声明
// ========================================
declare global {
  interface HTMLElementTagNameMap {
    'affine-ai-placeholder': AffineAiPlaceholder;
  }
}
