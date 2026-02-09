import type { EditorHost } from '@blocksuite/block-std';
import { type TreeNode } from '@blocksuite/blocks';
import type { DocCollection } from '@blocksuite/store';
export declare class AIEdgelessLogic {
    private getHost;
    get autoGen(): boolean;
    get collection(): DocCollection;
    get host(): EditorHost;
    private targets;
    private unsub?;
    fromFrame: string;
    constructor(getHost: () => EditorHost);
    toggleAutoGen: () => void;
    makeItReal: () => Promise<void>;
    htmlBlockDemo: () => void;
    editImage: () => Promise<void>;
    createImage: () => Promise<void>;
    createImageFromFrame: () => Promise<void>;
    convertToMindMap(): void;
    drawMindMap(treeNode: TreeNode, options?: {
        rootId?: string;
        x?: number;
        y?: number;
    }): void;
}
//# sourceMappingURL=logic.d.ts.map