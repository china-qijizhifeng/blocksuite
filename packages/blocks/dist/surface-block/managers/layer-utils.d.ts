import type { Doc } from '@blocksuite/store';
import type { SurfaceBlockModel } from '../surface-model.js';
import type { Layer } from './layer-manager.js';
export declare function getLayerEndZIndex(layers: Layer[], layerIndex: number): number;
export declare function updateLayersZIndex(layers: Layer[], startIdx: number): void;
export declare function getElementIndex(indexable: BlockSuite.EdgelessModelType): string;
export declare function ungroupIndex(index: string): string;
export declare function insertToOrderedArray(array: BlockSuite.EdgelessModelType[], element: BlockSuite.EdgelessModelType): void;
export declare function removeFromOrderedArray(array: BlockSuite.EdgelessModelType[], element: BlockSuite.EdgelessModelType): void;
export declare function isInRange(edges: [BlockSuite.EdgelessModelType, BlockSuite.EdgelessModelType], target: BlockSuite.EdgelessModelType): boolean;
export declare function renderableInEdgeless(doc: Doc, surface: SurfaceBlockModel, block: BlockSuite.EdgelessBlockModelType): boolean;
export declare function compare(a: BlockSuite.EdgelessModelType, b: BlockSuite.EdgelessModelType): 0 | 1 | -1;
//# sourceMappingURL=layer-utils.d.ts.map