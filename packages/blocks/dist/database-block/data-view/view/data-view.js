export const viewType = (type) => ({
    type,
    modelConfig: (model) => ({
        type,
        model,
        rendererConfig: (renderer) => ({
            type,
            model,
            renderer,
        }),
    }),
});
export class ViewRendererManager {
    constructor() {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.map = new Map();
    }
    getView(type) {
        const view = this.map.get(type);
        if (!view) {
            throw new Error(`${type} is not exist`);
        }
        return view;
    }
    get all() {
        return Array.from(this.map.values());
    }
}
export const viewRendererManager = new ViewRendererManager();
//# sourceMappingURL=data-view.js.map