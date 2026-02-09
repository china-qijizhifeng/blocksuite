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
import { ShadowlessElement } from '@blocksuite/block-std';
import { type DeltaInsert } from '@blocksuite/inline';
import type { AffineTextAttributes } from '../../affine-inline-specs.js';
declare const AffineAiDiff_base: typeof ShadowlessElement & import("@blocksuite/global/utils").Constructor<import("@blocksuite/block-std").DisposableClass>;
/**
 * AI Diff 内联组件
 * =====================
 * 根据 type 属性渲染不同样式：
 * - delete: 红色删除线
 * - insert: 绿色高亮 + 操作按钮
 * =====================
 */
export declare class AffineAiDiff extends AffineAiDiff_base {
    static styles: import("lit").CSSResult;
    get inlineEditor(): import("@blocksuite/inline").InlineEditor<AffineTextAttributes>;
    get selfInlineRange(): import("@blocksuite/inline").InlineRange;
    get blockElement(): BlockElement<import("@blocksuite/store").BlockModel<object>, import("@blocksuite/block-std").BlockService<import("@blocksuite/store").BlockModel<object>>, string>;
    get std(): import("@blocksuite/block-std").BlockStdScope;
    get doc(): import("@blocksuite/store").Doc;
    get diffData(): {
        id: string;
        type: "delete" | "insert";
        originalText?: string | undefined;
        newText?: string | undefined;
    } | null | undefined;
    accessor delta: DeltaInsert<AffineTextAttributes>;
    accessor selected: boolean;
    /**
     * 接受 Diff - 【v7 修复】处理整个 block 中所有相同 diffId 的 delta
     * =====================
     * - 找到所有相同 aiDiff.id 的 delta
     * - delete 类型：删除这段文本
     * - insert 类型：保留文本，移除 aiDiff 属性
     * =====================
     */
    private _onAccept;
    /**
     * 拒绝 Diff - 【v7 修复】处理整个 block 中所有相同 diffId 的 delta
     * =====================
     * - 找到所有相同 aiDiff.id 的 delta
     * - delete 类型：保留原文，移除 aiDiff 属性
     * - insert 类型：删除这段新文本
     * =====================
     */
    private _onReject;
    protected render(): import("lit").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'affine-ai-diff': AffineAiDiff;
    }
}
export {};
//# sourceMappingURL=ai-diff-node.d.ts.map