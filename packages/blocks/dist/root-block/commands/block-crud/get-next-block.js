import { assertExists } from '@blocksuite/global/utils';
function getNext(std, blockElement) {
    const view = std.view;
    const next = std.doc.getNext(blockElement.model);
    if (!next)
        return null;
    return view.getBlock(next.id);
}
function getNextBlock(std, path) {
    const view = std.view;
    const focusBlock = view.getBlock(path);
    if (!focusBlock)
        return null;
    let next = null;
    if (focusBlock.childBlockElements[0]) {
        next = focusBlock.childBlockElements[0];
    }
    if (!next) {
        next = getNext(std, focusBlock);
    }
    if (next && !next.contains(focusBlock)) {
        return next;
    }
    return null;
}
export const getNextBlockCommand = (ctx, next) => {
    const path = ctx.path ?? ctx.currentSelectionPath;
    assertExists(path, '`path` is required, you need to pass it in args or ctx before adding this command to the pipeline.');
    const nextBlock = getNextBlock(ctx.std, path);
    if (nextBlock) {
        next({ nextBlock });
    }
};
//# sourceMappingURL=get-next-block.js.map