import { assertExists } from '@blocksuite/global/utils';
export const deleteSelectedModelsCommand = (ctx, next) => {
    const models = ctx.selectedModels;
    assertExists(models, '`selectedModels` is required, you need to use `getSelectedModels` command before adding this command to the pipeline.');
    models.forEach(model => {
        ctx.std.doc.deleteBlock(model);
    });
    return next();
};
//# sourceMappingURL=delete-selected-models.js.map