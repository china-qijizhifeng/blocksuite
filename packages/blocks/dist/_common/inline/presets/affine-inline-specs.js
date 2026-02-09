import './nodes/index.js';
import { html } from 'lit';
import { z } from 'zod';
export const affineInlineSpecsWithoutReference = [
    {
        name: 'bold',
        schema: z.literal(true).optional().nullable().catch(undefined),
        match: delta => {
            return !!delta.attributes?.bold;
        },
        renderer: delta => {
            return html `<affine-text .delta=${delta}></affine-text>`;
        },
    },
    {
        name: 'italic',
        schema: z.literal(true).optional().nullable().catch(undefined),
        match: delta => {
            return !!delta.attributes?.italic;
        },
        renderer: delta => {
            return html `<affine-text .delta=${delta}></affine-text>`;
        },
    },
    {
        name: 'underline',
        schema: z.literal(true).optional().nullable().catch(undefined),
        match: delta => {
            return !!delta.attributes?.underline;
        },
        renderer: delta => {
            return html `<affine-text .delta=${delta}></affine-text>`;
        },
    },
    {
        name: 'strike',
        schema: z.literal(true).optional().nullable().catch(undefined),
        match: delta => {
            return !!delta.attributes?.strike;
        },
        renderer: delta => {
            return html `<affine-text .delta=${delta}></affine-text>`;
        },
    },
    {
        name: 'code',
        schema: z.literal(true).optional().nullable().catch(undefined),
        match: delta => {
            return !!delta.attributes?.code;
        },
        renderer: delta => {
            return html `<affine-text .delta=${delta}></affine-text>`;
        },
    },
    {
        name: 'background',
        schema: z.string().optional().nullable().catch(undefined),
        match: delta => {
            return !!delta.attributes?.background;
        },
        renderer: delta => {
            return html `<affine-text .delta=${delta}></affine-text>`;
        },
    },
    {
        name: 'color',
        schema: z.string().optional().nullable().catch(undefined),
        match: delta => {
            return !!delta.attributes?.color;
        },
        renderer: delta => {
            return html `<affine-text .delta=${delta}></affine-text>`;
        },
    },
];
export function getAffineInlineSpecsWithReference(referenceNodeConfig) {
    return [
        ...affineInlineSpecsWithoutReference,
        {
            name: 'reference',
            schema: z
                .object({
                type: z.enum([
                    // @deprecated Subpage is deprecated, use LinkedPage instead
                    'Subpage',
                    'LinkedPage',
                ]),
                pageId: z.string(),
            })
                .optional()
                .nullable()
                .catch(undefined),
            match: delta => {
                return !!delta.attributes?.reference;
            },
            renderer: (delta, selected) => {
                return html `<affine-reference
          .delta=${delta}
          .selected=${selected}
          .config=${referenceNodeConfig}
        ></affine-reference>`;
            },
            embed: true,
        },
        {
            name: 'link',
            schema: z.string().optional().nullable().catch(undefined),
            match: delta => {
                return !!delta.attributes?.link;
            },
            renderer: delta => {
                return html `<affine-link .delta=${delta}></affine-link>`;
            },
        },
        // ========================================
        // AI 占位符 - 自定义内联组件
        // 用于标记需要 AI 填充的位置
        // ========================================
        {
            name: 'aiPlaceholder',
            schema: z
                .object({
                content: z.string(),
            })
                .optional()
                .nullable()
                .catch(undefined),
            match: delta => {
                return !!delta.attributes?.aiPlaceholder;
            },
            renderer: (delta, selected) => {
                return html `<affine-ai-placeholder
          .delta=${delta}
          .selected=${selected}
        ></affine-ai-placeholder>`;
            },
            embed: true,
        },
        // ========================================
        // 批注标记 - 显示黄色下划线
        // 点击可跳转到批注面板
        // ========================================
        {
            name: 'comment',
            // 【v6.2】schema 包含完整的批注信息，这样 AI 能读取到批注内容
            schema: z
                .object({
                id: z.string(),
                content: z.string().optional(), // 批注内容
                selectedText: z.string().optional(), // 被批注的原始文本
            })
                .optional()
                .nullable()
                .catch(undefined),
            match: delta => {
                return !!delta.attributes?.comment;
            },
            renderer: delta => {
                const commentId = delta.attributes?.comment?.id || '';
                // 使用下划线样式渲染批注文本
                return html `<span
          class="affine-comment-mark"
          data-comment-id="${commentId}"
          style="border-bottom: 2px solid #f59e0b; cursor: pointer;"
          @click=${(e) => {
                    e.stopPropagation();
                    window.dispatchEvent(new CustomEvent('blocksuite-comment-click', {
                        detail: { commentId }
                    }));
                }}
        ><affine-text .delta=${delta}></affine-text></span>`;
            },
        },
        // ========================================
        // AI Diff 标记 - 显示 AI 修改的差异
        // delete: 红色删除线
        // insert: 绿色高亮 + 接受/拒绝按钮
        // ========================================
        {
            name: 'aiDiff',
            schema: z
                .object({
                id: z.string(),
                type: z.enum(['delete', 'insert']),
                originalText: z.string().optional(),
                newText: z.string().optional(),
            })
                .optional()
                .nullable()
                .catch(undefined),
            match: delta => {
                return !!delta.attributes?.aiDiff;
            },
            renderer: (delta, selected) => {
                return html `<affine-ai-diff
          .delta=${delta}
          .selected=${selected}
        ></affine-ai-diff>`;
            },
        },
    ];
}
//# sourceMappingURL=affine-inline-specs.js.map