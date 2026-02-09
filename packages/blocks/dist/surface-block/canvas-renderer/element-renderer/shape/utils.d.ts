import type { TextAlign, TextVerticalAlign } from '../../../consts.js';
import type { ShapeElementModel } from '../../../element-model/shape.js';
import type { Bound } from '../../../index.js';
import type { Renderer } from '../../renderer.js';
import { type TextDelta } from '../text/utils.js';
export declare function drawGeneralShape(ctx: CanvasRenderingContext2D, shapeModel: ShapeElementModel, renderer: Renderer): void;
export declare function horizontalOffset(width: number, textAlign: TextAlign, horiPadding: number): number;
export declare function verticalOffset(lines: TextDelta[][], lineHeight: number, height: number, textVerticalAlign: TextVerticalAlign, verticalPadding: number): number;
export declare function normalizeShapeBound(shape: ShapeElementModel, bound: Bound): Bound;
export declare function fitContent(shape: ShapeElementModel): void;
//# sourceMappingURL=utils.d.ts.map