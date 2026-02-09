import { assertExists } from '@blocksuite/global/utils';
export const insertLinkByQuickSearchCommand = (ctx, next) => {
    const rootService = ctx.std.spec.getService('affine:page');
    assertExists(rootService);
    next({
        insertedLinkType: rootService.insertLinkByQuickSearch(ctx.userInput, ctx.skipSelection),
    });
};
//# sourceMappingURL=insert-link-by-quick-search.js.map