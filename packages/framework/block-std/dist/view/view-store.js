import { assertExists } from '@blocksuite/global/utils';
export class ViewStore {
    constructor(std) {
        this.std = std;
        this._blockMap = new Map();
        this._widgetMap = new Map();
        this.setBlock = (node) => {
            this._blockMap.set(node.model.id, node);
        };
        this.setWidget = (node) => {
            const id = node.dataset.widgetId;
            const widgetIndex = `${node.model.id}|${id}`;
            this._widgetMap.set(widgetIndex, node);
        };
        this.getBlock = (id) => {
            return this._blockMap.get(id) ?? null;
        };
        this.getWidget = (widgetName, hostBlockId) => {
            const widgetIndex = `${hostBlockId}|${widgetName}`;
            return this._widgetMap.get(widgetIndex) ?? null;
        };
        this.deleteBlock = (node) => {
            this._blockMap.delete(node.id);
        };
        this.deleteWidget = (node) => {
            const id = node.dataset.widgetId;
            const widgetIndex = `${node.model.id}|${id}`;
            this._widgetMap.delete(widgetIndex);
        };
        this.calculatePath = (model) => {
            const path = [];
            let current = model;
            while (current) {
                path.push(current.id);
                current = this.std.doc.getParent(current);
            }
            return path.reverse();
        };
        this.fromPath = (path) => {
            const id = path ?? this.std.doc.root?.id;
            if (!id) {
                return null;
            }
            return this._blockMap.get(id) ?? null;
        };
        this.walkThrough = (fn, path) => {
            const tree = this.fromPath(path);
            assertExists(tree, `Invalid path to get node in view: ${path}`);
            const iterate = (parent) => (node, index) => {
                const result = fn(node, index, parent);
                if (result === true) {
                    return;
                }
                const children = node.model.children;
                children.forEach(child => {
                    const childNode = this._blockMap.get(child.id);
                    if (childNode) {
                        iterate(node)(childNode, children.indexOf(child));
                    }
                });
            };
            tree.model.children.forEach(child => {
                const childNode = this._blockMap.get(child.id);
                if (childNode) {
                    iterate(childNode)(childNode, tree.model.children.indexOf(child));
                }
            });
        };
    }
    viewFromPath(type, path) {
        if (type === 'block') {
            return this.fromPath(path[path.length - 1]);
        }
        const temp = path.slice(-2);
        const widgetId = temp.join('|');
        return this._widgetMap.get(widgetId) ?? null;
    }
    mount() { }
    unmount() {
        this._blockMap.clear();
        this._widgetMap.clear();
    }
}
//# sourceMappingURL=view-store.js.map