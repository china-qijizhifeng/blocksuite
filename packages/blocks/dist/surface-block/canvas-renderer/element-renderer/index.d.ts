import type { IBound, RoughCanvas, SurfaceElementModel } from '../../index.js';
import type { Renderer } from '../renderer.js';
export { normalizeShapeBound } from './shape/utils.js';
export type ElementRenderer<T extends BlockSuite.SurfaceElementModelType = SurfaceElementModel> = (model: T, ctx: CanvasRenderingContext2D, matrix: DOMMatrix, renderer: Renderer, rc: RoughCanvas, viewportBound: IBound) => void;
export declare const modelRenderer: Record<string, ElementRenderer<any>>;
//# sourceMappingURL=index.d.ts.map