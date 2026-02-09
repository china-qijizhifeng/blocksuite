import { INLINE_ROOT_ATTR } from '@blocksuite/inline';
import { toggleLinkPopup } from '../../_common/inline/presets/nodes/link-node/link-popup/toggle-link-popup.js';
import { generateTextStyleCommand, getCombinedTextStyle } from './utils.js';
export const toggleBold = generateTextStyleCommand('bold');
export const toggleItalic = generateTextStyleCommand('italic');
export const toggleUnderline = generateTextStyleCommand('underline');
export const toggleStrike = generateTextStyleCommand('strike');
export const toggleCode = generateTextStyleCommand('code');
export const toggleLink = (_ctx, next) => {
    const selection = document.getSelection();
    if (!selection || selection.rangeCount === 0)
        return false;
    const range = selection.getRangeAt(0);
    if (range.collapsed)
        return false;
    const inlineRoot = range.startContainer.parentElement?.closest(`[${INLINE_ROOT_ATTR}]`);
    if (!inlineRoot)
        return false;
    const inlineEditor = inlineRoot.inlineEditor;
    const targetInlineRange = inlineEditor.getInlineRange();
    if (!targetInlineRange || targetInlineRange.length === 0)
        return false;
    const format = inlineEditor.getFormat(targetInlineRange);
    if (format.link) {
        inlineEditor.formatText(targetInlineRange, { link: null });
        return next();
    }
    const abortController = new AbortController();
    const popup = toggleLinkPopup(inlineEditor, 'create', targetInlineRange, abortController);
    abortController.signal.addEventListener('abort', () => popup.remove());
    return next();
};
export const getTextStyle = (ctx, next) => {
    const [result, innerCtx] = getCombinedTextStyle(ctx.std.command.chain()).run();
    if (!result) {
        return false;
    }
    return next({ textStyle: innerCtx.textStyle });
};
export const isTextStyleActive = (ctx, next) => {
    const key = ctx.key;
    const [result] = getCombinedTextStyle(ctx.std.command.chain())
        .inline((ctx, next) => {
        const { textStyle } = ctx;
        if (textStyle && key in textStyle) {
            return next();
        }
        return false;
    })
        .run();
    if (!result) {
        return false;
    }
    return next();
};
export const registerTextStyleCommands = (std) => {
    std.command
        .add('toggleBold', toggleBold)
        .add('toggleItalic', toggleItalic)
        .add('toggleUnderline', toggleUnderline)
        .add('toggleStrike', toggleStrike)
        .add('toggleCode', toggleCode)
        .add('toggleLink', toggleLink)
        .add('getTextStyle', getTextStyle)
        .add('isTextStyleActive', isTextStyleActive);
};
//# sourceMappingURL=text-style.js.map