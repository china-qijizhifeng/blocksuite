import type { EdgelessRootService } from '../../root-block/edgeless/edgeless-root-service.js';
import type { ConnectorElementModel } from '../../surface-block/index.js';
import { type IShape } from '../../surface-block/index.js';
import { type Connector } from './layout.js';
export declare const DEFAULT_SHAPE_PROPS: Partial<IShape>;
export declare const DEFAULT_CONNECTOR_PROPS: Partial<ConnectorElementModel>;
export type TreeNode = {
    id?: string;
    text: string;
    children: TreeNode[];
};
export type TreeNodeWithId = {
    id: string;
    children: TreeNodeWithId[];
};
export declare function drawMindMap(service: EdgelessRootService, mindMap: TreeNode, ops?: {
    rootId?: string;
    x?: number;
    y?: number;
}): void;
export declare function layoutMindMap(service: EdgelessRootService, mindMap: TreeNodeWithId, ops?: {
    rootId?: string;
    x?: number;
    y?: number;
}): void;
export declare const createNode: (text: string, service: EdgelessRootService, connector?: Connector) => string;
export declare const changeText: (id: string, text: string, service: EdgelessRootService) => void;
//# sourceMappingURL=draw.d.ts.map