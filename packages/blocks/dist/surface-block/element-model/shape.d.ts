import { type Y } from '@blocksuite/store';
import { FontStyle, FontWeight, StrokeStyle, TextAlign, TextResizing, type TextStyleProps, TextVerticalAlign } from '../consts.js';
import type { IBound, SerializedXYWH } from '../index.js';
import type { Bound } from '../utils/bound.js';
import type { PointLocation } from '../utils/point-location.js';
import type { IVec2 } from '../utils/vec.js';
import { type IBaseProps, type IHitTestOptions, SurfaceElementModel } from './base.js';
import { rect } from './utils/shape/rect.js';
export declare const shapeMethods: {
    [key in ShapeType]: typeof rect;
};
export type ShapeType = 'rect' | 'triangle' | 'ellipse' | 'diamond';
export type ShapeStyle = 'General' | 'Scribbled';
export declare enum ShapeTextFontSize {
    SMALL = 12,
    MEDIUM = 20,
    LARGE = 28,
    XLARGE = 36
}
export type ShapeProps = IBaseProps & {
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
    textHorizontalAlign?: TextAlign;
    textVerticalAlign?: TextVerticalAlign;
    textResizing?: TextResizing;
    maxWidth?: false | number;
} & Partial<TextStyleProps>;
export declare const SHAPE_TEXT_PADDING = 20;
export declare const SHAPE_TEXT_VERTICAL_PADDING = 10;
export declare class ShapeElementModel extends SurfaceElementModel<ShapeProps> {
    get type(): string;
    accessor textDisplay: boolean;
    accessor xywh: SerializedXYWH;
    accessor rotate: number;
    accessor shapeType: ShapeType;
    accessor radius: number;
    accessor filled: boolean;
    accessor fillColor: string;
    accessor strokeWidth: number;
    accessor strokeColor: string;
    accessor strokeStyle: StrokeStyle;
    accessor shapeStyle: ShapeStyle;
    accessor roughness: number;
    accessor text: Y.Text | undefined;
    accessor color: string;
    accessor fontSize: number;
    accessor fontFamily: string;
    accessor fontWeight: FontWeight;
    accessor fontStyle: FontStyle;
    accessor textAlign: TextAlign;
    accessor textHorizontalAlign: TextAlign;
    accessor textVerticalAlign: TextVerticalAlign;
    accessor textResizing: TextResizing;
    accessor maxWidth: false | number;
    accessor padding: [number, number];
    accessor shadow: {
        blur: number;
        offsetX: number;
        offsetY: number;
        color: string;
    } | null;
    textBound: IBound | null;
    hitTest(x: number, y: number, options: IHitTestOptions): boolean;
    containedByBounds(bounds: Bound): boolean;
    intersectWithLine(start: IVec2, end: IVec2): PointLocation[] | null;
    getNearestPoint(point: IVec2): IVec2;
    getRelativePointLocation(point: IVec2): PointLocation;
    static propsToY(props: ShapeProps): ShapeProps;
}
declare global {
    namespace BlockSuite {
        interface SurfaceElementModelMap {
            shape: ShapeElementModel;
        }
        interface EdgelessTextModelMap {
            shape: ShapeElementModel;
        }
    }
}
//# sourceMappingURL=shape.d.ts.map