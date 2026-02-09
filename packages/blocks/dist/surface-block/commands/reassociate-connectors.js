import { assertExists } from '@blocksuite/global/utils';
/**
 * Re-associate bindings for block that have been converted.
 *
 * @param oldId - the old block id
 * @param newId - the new block id
 */
export const reassociateConnectorsCommand = (ctx, next) => {
    const { oldId, newId } = ctx;
    assertExists(oldId, 'The old block ID is required!');
    assertExists(newId, 'The new block ID is required!');
    const service = ctx.std.spec.getService('affine:surface');
    assertExists(service);
    const surface = service.surface;
    const connectors = surface.getConnectors(oldId);
    for (const { id, source, target } of connectors) {
        if (source.id === oldId) {
            surface.updateElement(id, {
                source: {
                    ...source,
                    id: newId,
                },
            });
            continue;
        }
        if (target.id === oldId) {
            surface.updateElement(id, {
                target: {
                    ...target,
                    id: newId,
                },
            });
        }
    }
    next();
};
//# sourceMappingURL=reassociate-connectors.js.map