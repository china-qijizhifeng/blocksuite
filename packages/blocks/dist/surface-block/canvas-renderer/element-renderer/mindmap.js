import { connector as renderConnector } from './connector/index.js';
export function mindmap(model, ctx, matrix, renderer, rc, bound) {
    const dx = model.x - bound.x;
    const dy = model.y - bound.y;
    matrix = matrix.translate(-dx, -dy);
    model.traverse((to, from) => {
        if (from) {
            const connector = model.getConnector(from, to);
            if (connector) {
                const dx = connector.x - bound.x;
                const dy = connector.y - bound.y;
                const origin = ctx.globalAlpha;
                const shouldSetGlobalAlpha = origin !== connector.opacity;
                if (shouldSetGlobalAlpha) {
                    ctx.globalAlpha = connector.opacity;
                }
                renderConnector(connector, ctx, matrix.translate(dx, dy), renderer, rc);
                if (shouldSetGlobalAlpha) {
                    ctx.globalAlpha = origin;
                }
            }
        }
    });
    model.extraConnectors.forEach(connector => {
        const dx = connector.x - bound.x;
        const dy = connector.y - bound.y;
        renderConnector(connector, ctx, matrix.translate(dx, dy), renderer, rc);
    });
}
//# sourceMappingURL=mindmap.js.map