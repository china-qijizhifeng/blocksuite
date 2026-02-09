import type { Y } from '@blocksuite/store';
import type { FontFamily, FontStyle, FontWeight, ShapeStyle, StrokeStyle, TextAlign, TextVerticalAlign } from '../../consts.js';
import type { CanvasElementType } from '../../element-model/index.js';
import type { ISurfaceElement } from '../surface-element.js';
import type { SHAPE_TEXT_FONT_SIZE, ShapeType } from './consts.js';
export interface IShape extends ISurfaceElement {
    type: CanvasElementType.SHAPE;
    shapeType: ShapeType;
    radius: number;
    filled: boolean;
    fillColor: string;
    strokeWidth: number;
    strokeColor: string;
    strokeStyle: StrokeStyle;
    shapeStyle: ShapeStyle;
    roughness?: number;
    text?: Y.Text;
    color?: string;
    fontSize?: SHAPE_TEXT_FONT_SIZE;
    fontFamily?: FontFamily;
    fontWeight?: FontWeight;
    fontStyle?: FontStyle;
    textAlign?: TextAlign;
    textHorizontalAlign?: TextAlign;
    textVerticalAlign?: TextVerticalAlign;
}
//# sourceMappingURL=types.d.ts.map