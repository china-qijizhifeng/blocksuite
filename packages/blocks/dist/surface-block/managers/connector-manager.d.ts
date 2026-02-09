import type { Connectable } from '../../_common/types.js';
import type { EdgelessRootService } from '../../root-block/edgeless/edgeless-root-service.js';
import { Overlay } from '../canvas-renderer/renderer.js';
import type { IBound } from '../consts.js';
import type { Connection, ConnectorElementModel, LocalConnectorElementModel } from '../element-model/connector.js';
import { AStarRunner } from '../utils/a-star.js';
import { Bound } from '../utils/bound.js';
import { PointLocation } from '../utils/point-location.js';
import type { IVec, IVec2 } from '../utils/vec.js';
export type OrthogonalConnectorInput = {
    startBound: Bound | null;
    endBound: Bound | null;
    startPoint: PointLocation;
    endPoint: PointLocation;
};
export declare const ConnectorEndpointLocations: IVec2[];
export declare const ConnectorEndpointLocationsOnTriangle: IVec2[];
export declare function calculateNearestLocation(point: IVec, bounds: IBound, locations?: IVec2[], shortestDistance?: number): IVec2;
export declare function isConnectorAndBindingsAllSelected(connector: ConnectorElementModel | LocalConnectorElementModel, selected: BlockSuite.EdgelessModelType[]): boolean;
export declare function getAnchors(ele: BlockSuite.EdgelessModelType): {
    point: PointLocation;
    coord: IVec;
}[];
export declare function getNearestConnectableAnchor(ele: Connectable, point: IVec): PointLocation;
export declare class ConnectionOverlay extends Overlay {
    private _service;
    points: IVec[];
    highlightPoint: IVec | null;
    sourceBounds: IBound | null;
    targetBounds: IBound | null;
    constructor(_service: EdgelessRootService);
    private _findConnectablesInViews;
    render(ctx: CanvasRenderingContext2D): void;
    /**
     * Render the connector at the given point. It will try to find
     * the closest connectable element and render the connector. If the
     * point is not close to any connectable element, it will just render
     * the connector at the given point.
     * @param point the point to render the connector
     * @param excludedIds the ids of the elements that should be excluded
     * @returns the connection result
     */
    renderConnector(point: IVec, excludedIds?: string[]): Connection;
    _clearRect(): void;
    clear(): void;
}
export declare class ConnectorPathGenerator {
    private options;
    protected _aStarRunner: AStarRunner | null;
    constructor(options: {
        getElementById: (id: string) => BlockSuite.EdgelessModelType | null;
    });
    private _getConnectorEndElement;
    private _getConnectionPoint;
    private _generateStraightConnectorPath;
    private _computeStartEndPoint;
    private _generateCurveConnectorPath;
    private _prepareOrthogonalConnectorInfo;
    private _generateConnectorPath;
    updatePath(connector: ConnectorElementModel | LocalConnectorElementModel, path?: PointLocation[]): void;
    generateOrthogonalConnectorPath(input: OrthogonalConnectorInput): IVec[];
    hasRelatedElement(connecter: ConnectorElementModel | LocalConnectorElementModel): boolean;
}
//# sourceMappingURL=connector-manager.d.ts.map