import { type Y } from '@blocksuite/store';
import { StrokeStyle, type TextStyleProps } from '../consts.js';
import { Bound } from '../utils/bound.js';
import { PointLocation } from '../utils/point-location.js';
import { type IVec2 } from '../utils/vec.js';
import type { SerializedXYWH, XYWH } from '../utils/xywh.js';
import { type IBaseProps, type IHitTestOptions, type SerializedElement, SurfaceElementModel, SurfaceLocalModel } from './base.js';
export declare enum ConnectorEndpoint {
    Front = "Front",
    Rear = "Rear"
}
export type PointStyle = 'None' | 'Arrow' | 'Triangle' | 'Circle' | 'Diamond';
export declare const DEFAULT_FRONT_END_POINT_STYLE: "None";
export declare const DEFAULT_REAR_END_POINT_STYLE: "Arrow";
export declare const CONNECTOR_LABEL_MAX_WIDTH = 280;
export type SerializedConnection = {
    id?: string;
    position?: `[${number},${number}]` | PointLocation;
};
export type Connection = {
    id?: string;
    position?: [number, number];
};
export declare enum ConnectorMode {
    Straight = 0,
    Orthogonal = 1,
    Curve = 2
}
export declare const getConnectorModeName: (mode: ConnectorMode) => string;
export declare enum ConnectorLabelOffsetAnchor {
    Top = "top",
    Center = "center",
    Bottom = "bottom"
}
export type ConnectorLabelOffsetProps = {
    distance: number;
    anchor?: ConnectorLabelOffsetAnchor;
};
export type ConnectorLabelConstraintsProps = {
    hasMaxWidth: boolean;
    maxWidth: number;
};
export type ConnectorLabelProps = {
    text?: Y.Text;
    labelEditing?: boolean;
    labelDisplay?: boolean;
    labelXYWH?: XYWH;
    labelOffset?: ConnectorLabelOffsetProps;
    labelStyle?: TextStyleProps;
    labelConstraints?: ConnectorLabelConstraintsProps;
};
export type SerializedConnectorElement = SerializedElement & {
    source: SerializedConnection;
    target: SerializedConnection;
};
export type ConnectorElementProps = IBaseProps & {
    mode: ConnectorMode;
    stroke: string;
    strokeWidth: number;
    strokeStyle: StrokeStyle;
    roughness?: number;
    rough?: boolean;
    source: Connection;
    target: Connection;
    frontEndpointStyle?: PointStyle;
    rearEndpointStyle?: PointStyle;
} & ConnectorLabelProps;
export declare class ConnectorElementModel extends SurfaceElementModel<ConnectorElementProps> {
    get type(): string;
    get connectable(): false;
    get connected(): boolean;
    get elementBound(): Bound;
    updatingPath: boolean;
    accessor path: PointLocation[];
    accessor absolutePath: PointLocation[];
    accessor xywh: SerializedXYWH;
    accessor rotate: number;
    accessor mode: ConnectorMode;
    accessor strokeWidth: number;
    accessor stroke: string;
    accessor strokeStyle: StrokeStyle;
    accessor roughness: number;
    accessor rough: boolean | undefined;
    accessor source: Connection;
    accessor target: Connection;
    accessor frontEndpointStyle: PointStyle;
    accessor rearEndpointStyle: PointStyle;
    /**
     * The content of the label.
     */
    accessor text: Y.Text | undefined;
    /**
     * Local control display and hide, mainly used in editing scenarios.
     */
    accessor lableEditing: boolean;
    /**
     * Control display and hide.
     */
    accessor labelDisplay: boolean;
    /**
     * Returns a `XYWH` array providing information about the size of a label
     * and its position relative to the viewport.
     */
    accessor labelXYWH: XYWH | undefined;
    /**
     * The offset property specifies the label along the connector path.
     */
    accessor labelOffset: ConnectorLabelOffsetProps;
    /**
     * Defines the style of the label.
     */
    accessor labelStyle: TextStyleProps;
    /**
     * Defines the size constraints of the label.
     */
    accessor labelConstraints: ConnectorLabelConstraintsProps;
    resizePath(originalPath: PointLocation[], matrix: DOMMatrix): PointLocation[];
    resize(bounds: Bound, originalPath: PointLocation[], matrix: DOMMatrix): {
        labelXYWH?: XYWH | undefined;
        source?: Connection | undefined;
        target?: Connection | undefined;
    };
    moveTo(bound: Bound): void;
    hasLabel(): boolean;
    labelHitTest(point: IVec2): boolean;
    hitTest(x: number, y: number, options?: IHitTestOptions | undefined): boolean;
    containedByBounds(bounds: Bound): boolean;
    intersectWithLine(start: IVec2, end: IVec2): PointLocation[] | null;
    getRelativePointLocation(point: IVec2): PointLocation;
    serialize(): SerializedConnectorElement;
    /**
     * Calculate the closest point on the curve via a point.
     */
    getNearestPoint(point: IVec2): number[];
    /**
     * Calculating the computed point along a path via a offset distance.
     *
     * Returns a point relative to the viewport.
     */
    getPointByOffsetDistance(offsetDistance?: number, bounds?: Bound): number[];
    /**
     * Calculating the computed distance along a path via a point.
     *
     * The point is relative to the viewport.
     */
    getOffsetDistanceByPoint(point: IVec2, bounds?: Bound): number;
    static propsToY(props: ConnectorElementProps): ConnectorElementProps;
}
export declare class LocalConnectorElementModel extends SurfaceLocalModel {
    get type(): string;
    private _path;
    seed: number;
    id: string;
    updatingPath: boolean;
    get path(): PointLocation[];
    set path(value: PointLocation[]);
    absolutePath: PointLocation[];
    xywh: SerializedXYWH;
    rotate: number;
    mode: ConnectorMode;
    strokeWidth: number;
    stroke: string;
    strokeStyle: StrokeStyle;
    roughness: number;
    rough?: boolean;
    source: Connection;
    target: Connection;
    frontEndpointStyle: PointStyle;
    rearEndpointStyle: PointStyle;
}
export declare function isConnectorWithLabel(model: BlockSuite.EdgelessModelType | BlockSuite.SurfaceLocalModelType): boolean;
declare global {
    namespace BlockSuite {
        interface SurfaceElementModelMap {
            connector: ConnectorElementModel;
        }
        interface SurfaceLocalModelMap {
            connector: LocalConnectorElementModel;
        }
        interface EdgelessTextModelMap {
            connector: ConnectorElementModel;
        }
    }
}
//# sourceMappingURL=connector.d.ts.map