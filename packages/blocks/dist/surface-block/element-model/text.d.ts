import { type Y } from '@blocksuite/store';
import { FontFamily, FontStyle, FontWeight, TextAlign, type TextStyleProps } from '../consts.js';
import type { SerializedXYWH } from '../index.js';
import { Bound } from '../utils/bound.js';
import type { IVec2 } from '../utils/vec.js';
import { type IBaseProps, SurfaceElementModel } from './base.js';
export type TextElementProps = IBaseProps & {
    text: Y.Text;
    hasMaxWidth?: boolean;
} & Omit<TextStyleProps, 'fontWeight' | 'fontStyle'> & Partial<Pick<TextStyleProps, 'fontWeight' | 'fontStyle'>>;
export declare class TextElementModel extends SurfaceElementModel<TextElementProps> {
    get type(): string;
    accessor xywh: SerializedXYWH;
    accessor rotate: number;
    accessor text: Y.Text;
    accessor color: string;
    accessor fontSize: number;
    accessor fontFamily: FontFamily;
    accessor fontWeight: FontWeight;
    accessor fontStyle: FontStyle;
    accessor textAlign: TextAlign;
    accessor hasMaxWidth: boolean;
    getNearestPoint(point: IVec2): IVec2;
    containedByBounds(bounds: Bound): boolean;
    intersectWithLine(start: IVec2, end: IVec2): import("../index.js").PointLocation[] | null;
    hitTest(x: number, y: number): boolean;
    static propsToY(props: Record<string, unknown>): Record<string, unknown>;
}
declare global {
    namespace BlockSuite {
        interface SurfaceElementModelMap {
            text: TextElementModel;
        }
        interface EdgelessTextModelMap {
            text: TextElementModel;
        }
    }
}
//# sourceMappingURL=text.d.ts.map