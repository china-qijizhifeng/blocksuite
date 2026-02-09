import type { ConnectorElementModel } from '@blocksuite/blocks';
import { type EdgelessRootService } from '@blocksuite/blocks';
export declare const getConnectorFromId: (id: string, surface: EdgelessRootService) => ConnectorElementModel[];
export declare const getConnectorToId: (id: string, surface: EdgelessRootService) => ConnectorElementModel[];
export declare const getConnectorPath: (id: string, surface: EdgelessRootService) => string[];
type ElementTree = {
    id: string;
    children: ElementTree[];
};
export declare const findTree: (rootId: string, surface: EdgelessRootService) => ElementTree;
export declare const findLeaf: (tree: ElementTree, id: string) => ElementTree | undefined;
export {};
//# sourceMappingURL=connector.d.ts.map