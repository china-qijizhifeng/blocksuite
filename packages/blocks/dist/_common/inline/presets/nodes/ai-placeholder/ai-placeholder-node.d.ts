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
import { ShadowlessElement } from '@blocksuite/block-std';
import { type DeltaInsert } from '@blocksuite/inline';
import type { AffineTextAttributes } from '../../affine-inline-specs.js';
export { AI_PLACEHOLDER_NODE } from '../consts.js';
declare const AffineAiPlaceholder_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
/**
 * AI 占位符内联组件
 * =====================
 * 支持直接编辑，双击进入编辑模式
 * 数据通过 delta.attributes.aiPlaceholder.content 存储
 * =====================
 */
export declare class AffineAiPlaceholder extends AffineAiPlaceholder_base {
    static styles: import("lit").CSSResult;
    /**
     * 获取内联编辑器实例
     */
    get inlineEditor(): import("@blocksuite/inline").InlineEditor<AffineTextAttributes>;
    /**
     * 获取当前元素的内联范围
     */
    get selfInlineRange(): import("@blocksuite/inline").InlineRange;
    /**
     * 获取所属的 block 元素
     */
    get blockElement(): BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string>;
    /**
     * 获取标准 API
     */
    get std(): import("@blocksuite/block-std").BlockStdScope;
    /**
     * 获取文档对象
     */
    get doc(): import("@blocksuite/store").Doc;
    /**
     * 获取占位符显示内容
     */
    get placeholderContent(): string;
    /**
     * Delta 数据
     * 关键：insert 必须是 AI_PLACEHOLDER_NODE（单个空格字符）
     */
    accessor delta: DeltaInsert<AffineTextAttributes>;
    /**
     * 是否被选中
     */
    accessor selected: boolean;
    /**
     * 是否处于编辑模式
     */
    accessor _editing: boolean;
    /**
     * 编辑中的临时值
     */
    accessor _editValue: string;
    /**
     * 是否正在进行中文输入
     */
    private _isComposing;
    /**
     * 单击进入编辑模式
     * =====================
     * 修复：改为单击编辑
     * =====================
     */
    private _onClick;
    /**
     * 输入框键盘事件
     * =====================
     * 阻止所有键盘事件冒泡，防止内容外泄
     * 中文输入时不响应 Enter（等待 compositionend）
     * =====================
     */
    private _onKeyDown;
    /**
     * 阻止 keyup 事件冒泡
     */
    private _onKeyUp;
    /**
     * 阻止 beforeinput 事件冒泡
     * =====================
     * 防止输入内容外泄到 BlockSuite 编辑器
     * =====================
     */
    private _onBeforeInput;
    /**
     * 中文输入开始
     */
    private _onCompositionStart;
    /**
     * 中文输入结束
     */
    private _onCompositionEnd;
    /**
     * 输入框失焦时保存
     */
    private _onBlur;
    /**
     * 输入框值变化
     * =====================
     * 阻止事件冒泡，防止外泄
     * =====================
     */
    private _onInput;
    /**
     * 保存并退出编辑模式
     * =====================
     * 修复：正确保存到 Yjs
     * 使用 Y.Text 的 format 方法更新属性
     * =====================
     */
    private _saveAndExit;
    /**
     * 取消编辑
     */
    private _cancelEdit;
    /**
     * 组件连接到 DOM 时
     * =====================
     * 关键：验证 insert 值是否正确
     * 如果不是 AI_PLACEHOLDER_NODE，说明有问题
     * =====================
     */
    connectedCallback(): void;
    /**
     * 渲染组件
     * =====================
     * 修复：
     * 1. 单击进入编辑模式
     * 2. 添加 beforeinput 阻止内容外泄
     * 3. 显示文本改为"点击输入要求"
     * =====================
     */
    protected render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-ai-placeholder': AffineAiPlaceholder;
    }
}
//# sourceMappingURL=ai-placeholder-node.d.ts.map