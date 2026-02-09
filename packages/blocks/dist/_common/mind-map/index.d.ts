import { drawMindMap, layoutMindMap } from './draw.js';
export declare const mindMap: {
    layout: {
        right: import("./layout.js").Layout;
        left: import("./layout.js").Layout;
        leftRight: import("./layout.js").Layout;
        top: import("./layout.js").Layout;
        bottom: import("./layout.js").Layout;
        topBottom: import("./layout.js").Layout;
    };
    createNode: (text: string, service: import("@blocksuite/blocks").EdgelessRootService, connector?: import("./layout.js").Connector | undefined) => string;
    changeText: (id: string, text: string, service: import("@blocksuite/blocks").EdgelessRootService) => void;
    drawInEdgeless: typeof drawMindMap;
    layoutInEdgeless: typeof layoutMindMap;
};
//# sourceMappingURL=index.d.ts.map