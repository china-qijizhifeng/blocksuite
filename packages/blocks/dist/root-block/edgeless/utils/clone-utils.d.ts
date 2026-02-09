import type { BlockStdScope } from '@blocksuite/block-std';
import { Job } from '@blocksuite/store';
import type { SerializedConnectorElement } from '../../../surface-block/element-model/connector.js';
import type { SerializedGroupElement } from '../../../surface-block/element-model/group.js';
import type { SerializedMindmapElement } from '../../../surface-block/element-model/mindmap.js';
import { ConnectorElementModel } from '../../../surface-block/index.js';
import type { EdgelessFrameManager } from '../frame-manager.js';
export declare function getCloneElements(elements: BlockSuite.EdgelessModelType[], frame: EdgelessFrameManager): BlockSuite.EdgelessModelType[];
export declare function prepareCloneData(elements: BlockSuite.EdgelessModelType[], std: BlockStdScope): Promise<(import("../../../surface-block/element-model/base.js").SerializedElement | {
    type: "block";
    id: string;
    flavour: string;
    version?: number | undefined;
    props: Record<string, unknown>;
    children: import("@blocksuite/store").BlockSnapshot[];
})[]>;
export declare function serializeElement(element: BlockSuite.EdgelessModelType, elements: BlockSuite.EdgelessModelType[], job: Job): Promise<import("../../../surface-block/element-model/base.js").SerializedElement | {
    type: "block";
    id: string;
    flavour: string;
    version?: number | undefined;
    props: Record<string, unknown>;
    children: import("@blocksuite/store").BlockSnapshot[];
}>;
export declare function serializeConnector(connector: ConnectorElementModel, elements: BlockSuite.EdgelessModelType[]): SerializedConnectorElement;
/**
 * There are interdependencies between elements,
 * so they must be added in a certain order
 * @param elements edgeless model list
 * @returns sorted edgeless model list
 */
export declare function sortEdgelessElements(elements: BlockSuite.EdgelessModelType[]): BlockSuite.EdgelessModelType[];
/**
 * map connector source & target ids
 * @param props serialized element props
 * @param ids old element id to new element id map
 * @returns updated element props
 */
export declare function mapConnectorIds(props: SerializedConnectorElement, ids: Map<string, string>): SerializedConnectorElement;
/**
 * map group children ids
 * @param props serialized element props
 * @param ids old element id to new element id map
 * @returns updated element props
 */
export declare function mapGroupIds(props: SerializedGroupElement, ids: Map<string, string>): SerializedGroupElement;
/**
 * map mindmap children & parent ids
 * @param props serialized element props
 * @param ids old element id to new element id map
 * @returns updated element props
 */
export declare function mapMindmapIds(props: SerializedMindmapElement, ids: Map<string, string>): SerializedMindmapElement;
export declare function getElementProps(element: BlockSuite.SurfaceModelType, ids: Map<string, string>): import("../../../surface-block/element-model/base.js").SerializedElement;
//# sourceMappingURL=clone-utils.d.ts.map