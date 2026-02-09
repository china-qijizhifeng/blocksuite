import { Slot } from '@blocksuite/store';
import type { IPoint } from '../../../_common/types.js';
import { Bound } from '../../../surface-block/utils/bound.js';
import { type IVec2 } from '../../../surface-block/utils/vec.js';
export type ZoomAction = 'fit' | 'out' | 'reset' | 'in';
export declare const ZOOM_MAX = 6;
export declare const ZOOM_MIN = 0.1;
export declare const ZOOM_STEP = 0.25;
export declare const ZOOM_INITIAL = 1;
export declare class Viewport {
    get left(): number;
    get top(): number;
    get width(): number;
    get height(): number;
    get centerX(): number;
    get centerY(): number;
    get center(): IPoint;
    get zoom(): number;
    /**
     * @deprecated
     */
    get cumulativeParentScale(): number;
    get viewportX(): number;
    get viewportY(): number;
    get translateX(): number;
    get translateY(): number;
    get viewportMinXY(): {
        x: number;
        y: number;
    };
    get viewportMaxXY(): {
        x: number;
        y: number;
    };
    get viewportBounds(): Bound;
    get boundingClientRect(): DOMRect;
    /**
     * Note this is different from the zoom property.
     * The editor itself may be scaled by outer container which is common in nested editor scenarios.
     * This property is used to calculate the scale of the editor.
     */
    get scale(): number;
    get locked(): boolean;
    set locked(locked: boolean);
    private _syncFlag;
    protected _left: number;
    protected _top: number;
    protected _width: number;
    protected _height: number;
    protected _center: IPoint;
    protected _zoom: number;
    protected _rafId: number | null;
    protected _el: HTMLElement;
    protected _cumulativeParentScale: number;
    protected _locked: boolean;
    ZOOM_MAX: number;
    ZOOM_MIN: number;
    viewportUpdated: Slot<{
        zoom: number;
        center: IVec2;
    }>;
    viewportMoved: Slot<IVec2>;
    sizeUpdated: Slot<{
        width: number;
        height: number;
        left: number;
        top: number;
    }>;
    onResize(): void;
    setContainer(container: HTMLElement): void;
    toViewCoordFromClientCoord([x, y]: IVec2): IVec2;
    toModelCoordFromClientCoord([x, y]: IVec2): IVec2;
    toModelCoord(viewX: number, viewY: number): IVec2;
    toViewCoord(modelX: number, modelY: number): IVec2;
    toModelBound(bound: Bound): Bound;
    toViewBound(bound: Bound): Bound;
    setCenter(centerX: number, centerY: number): void;
    setZoom(zoom: number, focusPoint?: IPoint): void;
    applyDeltaCenter(deltaX: number, deltaY: number): void;
    isInViewport(bound: Bound): boolean;
    setViewport(newZoom: number, newCenter?: number[], smooth?: boolean): void;
    setViewportByBound(bound: Bound, padding?: [number, number, number, number], smooth?: boolean): void;
    setRect(left: number, top: number, width: number, height: number): void;
    smoothZoom(zoom: number, focusPoint?: IPoint): void;
    smoothTranslate(x: number, y: number): void;
    sync(viewport: Viewport): () => void;
    dispose(): void;
}
//# sourceMappingURL=viewport.d.ts.map