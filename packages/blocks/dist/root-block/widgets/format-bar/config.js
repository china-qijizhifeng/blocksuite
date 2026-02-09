import { html } from 'lit';
import { toast } from '../../../_common/components/index.js';
import { BoldIcon, BulletedListIcon, CheckBoxIcon, CodeIcon, CopyIcon, Heading1Icon, Heading2Icon, Heading3Icon, Heading4Icon, Heading5Icon, Heading6Icon, ItalicIcon, LinkIcon, NumberedListIcon, QuoteIcon, StrikethroughIcon, TextIcon, UnderlineIcon, } from '../../../_common/icons/index.js';
export function toolbarDefaultConfig(toolbar) {
    toolbar
        .clearConfig()
        .addParagraphDropdown()
        .addDivider()
        .addTextStyleToggle({
        key: 'bold',
        action: chain => chain.toggleBold().run(),
        icon: BoldIcon,
    })
        .addTextStyleToggle({
        key: 'italic',
        action: chain => chain.toggleItalic().run(),
        icon: ItalicIcon,
    })
        .addTextStyleToggle({
        key: 'underline',
        action: chain => chain.toggleUnderline().run(),
        icon: UnderlineIcon,
    })
        .addTextStyleToggle({
        key: 'strike',
        action: chain => chain.toggleStrike().run(),
        icon: StrikethroughIcon,
    })
        .addTextStyleToggle({
        key: 'code',
        action: chain => chain.toggleCode().run(),
        icon: CodeIcon,
    })
        .addTextStyleToggle({
        key: 'link',
        action: chain => chain.toggleLink().run(),
        icon: LinkIcon,
    })
        .addDivider()
        .addHighlighterDropdown()
        .addDivider()
        .addInlineAction({
        id: 'copy',
        name: 'Copy',
        icon: CopyIcon,
        isActive: () => false,
        action: chain => {
            chain
                .getSelectedModels()
                .with({
                onCopy: () => {
                    toast(toolbar.host, '已复制到剪贴板');
                },
            })
                .copySelectedModels()
                .run();
        },
        showWhen: () => true,
    })
        // 【已移除】转为数据库、创建关联文档等复杂功能
        .addBlockTypeSwitch({
        flavour: 'affine:paragraph',
        type: 'text',
        name: '文本',
        icon: TextIcon,
    })
        .addBlockTypeSwitch({
        flavour: 'affine:paragraph',
        type: 'h1',
        name: '标题 1',
        icon: Heading1Icon,
    })
        .addBlockTypeSwitch({
        flavour: 'affine:paragraph',
        type: 'h2',
        name: '标题 2',
        icon: Heading2Icon,
    })
        .addBlockTypeSwitch({
        flavour: 'affine:paragraph',
        type: 'h3',
        name: '标题 3',
        icon: Heading3Icon,
    })
        .addBlockTypeSwitch({
        flavour: 'affine:paragraph',
        type: 'h4',
        name: '标题 4',
        icon: Heading4Icon,
    })
        .addBlockTypeSwitch({
        flavour: 'affine:paragraph',
        type: 'h5',
        name: '标题 5',
        icon: Heading5Icon,
    })
        .addBlockTypeSwitch({
        flavour: 'affine:paragraph',
        type: 'h6',
        name: '标题 6',
        icon: Heading6Icon,
    })
        .addBlockTypeSwitch({
        flavour: 'affine:list',
        type: 'bulleted',
        name: '无序列表',
        icon: BulletedListIcon,
    })
        .addBlockTypeSwitch({
        flavour: 'affine:list',
        type: 'numbered',
        name: '有序列表',
        icon: NumberedListIcon,
    })
        .addBlockTypeSwitch({
        flavour: 'affine:list',
        type: 'todo',
        name: '待办清单',
        icon: CheckBoxIcon,
    })
        .addBlockTypeSwitch({
        flavour: 'affine:code',
        name: '代码块',
        icon: CodeIcon,
    })
        .addBlockTypeSwitch({
        flavour: 'affine:paragraph',
        type: 'quote',
        name: '引用',
        icon: QuoteIcon,
    })
        // ---------------------------------------------------------
        // 批注按钮（自定义功能）
        // =====================
        // 关键修复：使用 formatText 写入 comment 属性到 Y.Text
        // 这样批注数据会被 Yjs 持久化，不会丢失
        // =====================
        // ---------------------------------------------------------
        .addDivider()
        .addInlineAction({
        id: 'add-comment',
        name: '批注',
        icon: html `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#f59e0b" stroke="#f59e0b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
        isActive: chain => {
            // 检查选中文本是否已有批注
            const [result] = chain.isTextStyleActive({ key: 'comment' }).run();
            return result;
        },
        action: chain => {
            // =====================
            // 【v6.5 修复】批注功能 - 立即写入 comment 到 delta
            // =====================
            // 
            // 批注必须立即写入 delta，否则选区丢失后无法写入
            // 用户输入内容后更新 content 字段
            // =====================
            // 步骤 1：获取选中文本和位置
            const selection = window.getSelection();
            if (!selection || selection.rangeCount === 0)
                return;
            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();
            const selectedText = selection.toString().trim();
            if (!selectedText)
                return;
            // 步骤 2：生成唯一的批注 ID
            const commentId = `comment-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
            // 步骤 3：【关键】立即写入 comment 到 delta
            // content 先设为空，用户输入后再更新
            const commentData = {
                id: commentId,
                content: '', // 等待用户输入
                selectedText: selectedText
            };
            chain
                .getTextSelection()
                .formatText({
                styles: {
                    comment: commentData
                }
            })
                .run();
            console.log('[BlockSuite] ✅ 批注标记已写入 delta:', { commentId, selectedText });
            // 步骤 4：触发事件，显示批注输入框
            setTimeout(() => {
                window.dispatchEvent(new CustomEvent('blocksuite-add-comment', {
                    detail: {
                        commentId,
                        selectedText,
                        position: { x: rect.left + rect.width / 2, y: rect.bottom },
                        rect: { top: rect.top, left: rect.left, width: rect.width, height: rect.height },
                    }
                }));
            }, 50);
        },
        showWhen: chain => {
            // 当有文本选中时显示批注按钮
            const [_, ctx] = chain
                .getTextSelection()
                .getSelectedBlocks({ types: ['text'] })
                .run();
            const textSelection = ctx.currentTextSelection;
            return !!textSelection && !textSelection.isCollapsed();
        },
    })
        // ---------------------------------------------------------
        // 【v6.4】添加到对话框按钮
        // =====================
        // 将选中文本作为引用发送到宿主对话框
        // =====================
        // ---------------------------------------------------------
        .addInlineAction({
        id: 'add-to-chat',
        name: '引用',
        icon: html `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 10h.01"></path><path d="M12 10h.01"></path><path d="M16 10h.01"></path></svg>`,
        isActive: () => false,
        action: () => {
            // 获取选中文本
            const selection = window.getSelection();
            if (!selection || selection.rangeCount === 0)
                return;
            const selectedText = selection.toString().trim();
            if (!selectedText)
                return;
            // 触发事件，由前端处理发送到对话框
            console.log('[BlockSuite] 📝 添加到对话框:', selectedText.substring(0, 50));
            window.dispatchEvent(new CustomEvent('blocksuite-add-to-chat', {
                detail: { selectedText }
            }));
        },
        showWhen: chain => {
            // 当有文本选中时显示
            const [_, ctx] = chain
                .getTextSelection()
                .getSelectedBlocks({ types: ['text'] })
                .run();
            const textSelection = ctx.currentTextSelection;
            return !!textSelection && !textSelection.isCollapsed();
        },
    });
}
//# sourceMappingURL=config.js.map