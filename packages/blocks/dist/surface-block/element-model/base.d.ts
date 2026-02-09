import type { EditorHost } from '@blocksuite/block-std';
import { DisposableGroup } from '@blocksuite/global/utils';
import type { Y } from '@blocksuite/store';
import type { SurfaceBlockModel } from '../surface-model.js';
import { Bound } from '../utils/bound.js';
import { PointLocation } from '../utils/point-location.js';
import type { IVec } from '../utils/vec.js';
import { type SerializedXYWH, type XYWH } from '../utils/xywh.js';
import type { OmitFunctionsAndKeysAndReadOnly } from './utility-type.js';
export type ModelToProps<T extends SurfaceElementModel, K extends keyof any> = OmitFunctionsAndKeysAndReadOnly<T, K | 'yMap' | 'surface' | 'display' | 'opacity' | 'externalXYWH'>;
export type IBaseProps = {
    index: string;
    seed: number;
};
export interface IHitTestOptions {
    expand?: number;
    /**
     * If true, the transparent area of the element will be ignored during hit test.
     * Otherwise, the transparent area will be considered as filled area.
     *
     * Default is true.
     */
    ignoreTransparent?: boolean;
    all?: boolean;
    zoom?: number;
}
export interface IEdgelessElement {
    id: string;
    xywh: SerializedXYWH;
    /**
     * In some cases, you need to draw something related to the element, but it does not belong to the element itself.
     * And it is also interactive, you can select element by clicking on it. E.g. the title of the group element.
     * In this case, we need to store this kind of external xywh in order to do hit test. This property should not be synced to the doc.
     * This property should be updated every time it gets rendered.
     */
    externalXYWH: SerializedXYWH | undefined;
    externalBound: Bound | null;
    rotate: number;
    connectable: boolean;
    index: string;
    /**
     * The bound of the element after rotation.
     * The bound without rotation should be created by `Bound.deserialize(this.xywh)`.
     */
    elementBound: Bound;
    group: SurfaceGroupLikeModel<IBaseProps> | null;
    groups: SurfaceGroupLikeModel<IBaseProps>[];
    containedByBounds(bounds: Bound): boolean;
    getNearestPoint(point: IVec): IVec;
    intersectWithLine(start: IVec, end: IVec): PointLocation[] | null;
    getRelativePointLocation(point: IVec): PointLocation;
    hitTest(x: number, y: number, options: IHitTestOptions, host: EditorHost): boolean;
    boxSelect(bound: Bound): boolean;
}
export type SerializedElement = Record<string, unknown> & {
    type: string;
    xywh: SerializedXYWH;
    id: string;
    index: string;
    props: Record<string, unknown>;
};
export declare abstract class SurfaceElementModel<Props extends IBaseProps = IBaseProps> implements IEdgelessElement {
    abstract get type(): string;
    get externalBound(): Bound | null;
    get connectable(): boolean;
    get deserializedXYWH(): XYWH;
    get x(): number;
    get y(): number;
    get w(): number;
    get h(): number;
    get group(): SurfaceGroupLikeModel | null;
    get groups(): SurfaceGroupLikeModel<IBaseProps>[];
    get id(): string;
    get elementBound(): Bound;
    get isConnected(): boolean;
    private _lastXYWH;
    /**
     * When the ymap is not connected to the doc, its value cannot be read.
     * But we need to use those value during the creation, so the yfield decorated field's value will
     * be stored in this map too during the creation.
     *
     * After the ymap is connected to the doc, this map will be cleared.
     */
    protected _preserved: Map<string, unknown>;
    protected _stashed: Map<keyof Props | string, unknown>;
    protected _local: Map<string | symbol, unknown>;
    protected _onChange: (payload: {
        props: Record<string, unknown>;
        oldValues: Record<string, unknown>;
        local: boolean;
    }) => void;
    protected _disposable: DisposableGroup;
    protected _id: string;
    yMap: Y.Map<unknown>;
    surface: SurfaceBlockModel;
    abstract rotate: number;
    abstract xywh: SerializedXYWH;
    accessor index: string;
    accessor seed: number;
    accessor display: boolean;
    accessor opacity: number;
    accessor externalXYWH: SerializedXYWH | undefined;
    constructor(options: {
        id: string;
        yMap: Y.Map<unknown>;
        model: SurfaceBlockModel;
        stashedStore: Map<unknown, unknown>;
        onChange: (payload: {
            props: Record<string, unknown>;
            oldValues: Record<string, unknown>;
            local: boolean;
        }) => void;
    });
    stash(prop: keyof Props | string): void;
    pop(prop: keyof Props | string): void;
    containedByBounds(bounds: Bound): boolean;
    getNearestPoint(point: IVec): IVec;
    intersectWithLine(start: IVec, end: IVec): PointLocation[] | null;
    getRelativePointLocation(relativePoint: IVec): PointLocation;
    boxSelect(bound: Bound): boolean;
    hitTest(x: number, y: number, _: IHitTestOptions, __: EditorHost): boolean;
    serialize(): SerializedElement;
    /**
     * `onCreated` function will be executed when
     * element is created in local rather than remote peers
     */
    onCreated(): void;
    static propsToY(props: Record<string, unknown>): Record<string, unknown>;
}
export declare abstract class SurfaceGroupLikeModel<Props extends IBaseProps = IBaseProps> extends SurfaceElementModel<Props> {
    /**
     * The ids of the children. Its role is to provide a unique way to access the children.
     * You should update this field through `setChildIds` when the children are added or removed.
     */
    get childIds(): string[];
    get childElements(): BlockSuite.EdgelessModelType[];
    private _childIds;
    /**
     * The actual field that stores the children of the group.
     * It should be a ymap decorated with `@yfield`.
     */
    abstract children: Y.Map<any>;
    accessor xywh: SerializedXYWH;
    /**
     * Set the new value of the childIds
     * @param value the new value of the childIds
     * @param fromLocal if true, the change is happened in the local
     */
    protected setChildIds(value: string[], fromLocal: boolean): void;
    hasChild(element: string | BlockSuite.EdgelessModelType): boolean;
    /**
     * Check if the group has the given descendant.
     */
    hasDescendant(element: string | BlockSuite.EdgelessModelType): boolean;
    /**
     * Get all descendants of this group
     * @param withoutGroup if true, will not include group element
     */
    descendants(withoutGroup?: boolean): BlockSuite.EdgelessModelType[];
    /**
     * Remove the child from the group
     */
    abstract removeChild(id: string): void;
}
export declare abstract class SurfaceLocalModel {
    get deserializedXYWH(): XYWH;
    get x(): number;
    get y(): number;
    get w(): number;
    get h(): number;
    private _lastXYWH;
    protected _local: Map<string | symbol, unknown>;
    abstract rotate: number;
    abstract xywh: SerializedXYWH;
    opacity: number;
}
declare global {
    namespace BlockSuite {
        interface SurfaceElementModelMap {
        }
        type SurfaceElementModelKeyType = keyof SurfaceElementModelMap;
        type SurfaceElementModelType = SurfaceElementModelMap[SurfaceElementModelKeyType] | SurfaceElementModel;
        interface SurfaceGroupLikeModelMap {
        }
        type SurfaceGroupLikeModelKeyType = keyof SurfaceGroupLikeModelMap;
        type SurfaceGroupLikeModelType = SurfaceGroupLikeModelMap[SurfaceGroupLikeModelKeyType] | SurfaceGroupLikeModel;
        interface SurfaceLocalModelMap {
        }
        type SurfaceLocalModelKeyType = keyof SurfaceLocalModelMap;
        type SurfaceLocalModelType = SurfaceLocalModelMap[SurfaceLocalModelKeyType] | SurfaceLocalModel;
        type SurfaceModelType = SurfaceElementModelType | SurfaceGroupLikeModelType;
        type SurfaceModelKeyType = SurfaceElementModelKeyType | SurfaceGroupLikeModelKeyType;
    }
}
//# sourceMappingURL=base.d.ts.map