import { Slot } from '@blocksuite/global/utils';
import type { Doc } from '@blocksuite/store';
import type { FrameBlockModel } from '../../frame-block/frame-model.js';
import { EdgelessBlockModel } from '../../root-block/edgeless/edgeless-block-model.js';
import { SurfaceElementModel } from '../element-model/base.js';
import { GridManager } from '../grid.js';
import type { SurfaceBlockModel } from '../surface-model.js';
export type ReorderingDirection = 'front' | 'forward' | 'backward' | 'back';
type BaseLayer<T> = {
    set: Set<T>;
    elements: Array<T>;
    /**
     * fractional indexing range
     */
    indexes: [string, string];
};
export type BlockLayer = BaseLayer<EdgelessBlockModel> & {
    type: 'block';
    /**
     * The z-index of the first block in this layer.
     *
     * A block layer may contains multiple blocks,
     * the block should be rendered with this `zIndex` + "its index in the layer" as the z-index property.
     */
    zIndex: number;
};
export type CanvasLayer = BaseLayer<SurfaceElementModel> & {
    type: 'canvas';
    /**
     * The z-index of canvas layer.
     *
     * A canvas layer renders all the elements in a single canvas,
     *  this property is used to render the canvas with correct z-index.
     */
    zIndex: number;
};
export type Layer = BlockLayer | CanvasLayer;
export declare class LayerManager {
    static INITAL_INDEX: string;
    private _disposables;
    slots: {
        layerUpdated: Slot<{
            type: 'delete' | 'add' | 'update';
            initiatingElement: BlockSuite.EdgelessModelType;
        }>;
    };
    canvasElements: SurfaceElementModel[];
    blocks: EdgelessBlockModel[];
    frames: FrameBlockModel[];
    layers: Layer[];
    canvasLayers: {
        set: Set<SurfaceElementModel>;
        /**
         * fractional index
         */
        indexes: [string, string];
        /**
         * z-index, used for actual rendering
         */
        zIndex: number;
        elements: Array<SurfaceElementModel>;
    }[];
    blocksGrid: GridManager<EdgelessBlockModel<import("../../_common/edgeless/mixin/edgeless-selectable.js").EdgelessSelectableProps>>;
    framesGrid: GridManager<FrameBlockModel>;
    canvasGrid: GridManager<SurfaceElementModel<import("../element-model/base.js").IBaseProps>>;
    constructor(elements?: BlockSuite.EdgelessModelType[]);
    private listen;
    private _init;
    private _initLayers;
    private _insertIntoLayer;
    private _removeFromLayer;
    private _buildCanvasLayers;
    /**
     * @returns a boolean value to indicate whether the layers have been updated
     */
    private _updateLayer;
    add(element: BlockSuite.EdgelessModelType): void;
    delete(element: BlockSuite.EdgelessModelType): void;
    update(element: BlockSuite.EdgelessModelType, props?: Record<string, unknown>): void;
    getCanvasLayers(): {
        set: Set<SurfaceElementModel<import("../element-model/base.js").IBaseProps>>;
        /**
         * fractional index
         */
        indexes: [string, string];
        /**
         * z-index, used for actual rendering
         */
        zIndex: number;
        elements: SurfaceElementModel<import("../element-model/base.js").IBaseProps>[];
    }[];
    generateIndex(elementType: string): string;
    /**
     * In some cases, we need to generate a bunch of indexes in advance before acutally adding the elements to the layer manager.
     * Eg. when importing a template. The `generateIndex` is a function only depends on the current state of the manager.
     * So we cannot use it because it will always return the same index if the element is not added to manager.
     *
     * This function return a index generator that can "remember" the index it generated without actually adding the element to the manager.
     *
     * @note The generator cannot work with `group` element.
     *
     * @param ignoreRule If true, the generator will not distinguish between `block` and `canvas` elements.
     * @returns
     */
    createIndexGenerator(ignoreRule?: boolean): (elementType: string) => string;
    getReorderedIndex(element: BlockSuite.EdgelessModelType, direction: ReorderingDirection): string;
    /**
     * Pass to the `Array.sort` to  sort the elements by their index
     */
    compare(a: BlockSuite.EdgelessModelType, b: BlockSuite.EdgelessModelType): 0 | 1 | -1;
    dispose(): void;
    static create(doc: Doc, surface: SurfaceBlockModel): LayerManager;
}
export {};
//# sourceMappingURL=layer-manager.d.ts.map