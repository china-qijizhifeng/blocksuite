import type { NoteBlockModel } from '../../../../note-block/index.js';
import { ShapeElementModel } from '../../../../surface-block/element-model/index.js';
import type { ShapeStyle, ShapeType } from '../../../../surface-block/element-model/shape.js';
import { Bound, type Options, Overlay, type RoughCanvas, type XYWH } from '../../../../surface-block/index.js';
import type { EdgelessRootBlockComponent } from '../../edgeless-root-block.js';
export declare enum Direction {
    Right = 0,
    Bottom = 1,
    Left = 2,
    Top = 3
}
export declare const PANEL_WIDTH = 136;
export declare const PANEL_HEIGHT = 108;
export declare const MAIN_GAP = 100;
export declare const SECOND_GAP = 20;
export declare const DEFAULT_NOTE_OVERLAY_HEIGHT = 110;
export declare const DEFAULT_TEXT_WIDTH = 116;
export declare const DEFAULT_TEXT_HEIGHT = 24;
export type TARGET_SHAPE_TYPE = ShapeType | 'roundedRect';
export type AUTO_COMPLETE_TARGET_TYPE = TARGET_SHAPE_TYPE | 'text' | 'note' | 'frame';
export declare const DEFAULT_NOTE_BACKGROUND_COLOR = "--affine-background-secondary-color";
declare class AutoCompleteTargetOverlay extends Overlay {
    xywh: XYWH;
    constructor(xywh: XYWH);
    render(_ctx: CanvasRenderingContext2D, _rc: RoughCanvas): void;
}
export declare class AutoCompleteTextOverlay extends AutoCompleteTargetOverlay {
    constructor(xywh: XYWH);
    render(ctx: CanvasRenderingContext2D, _rc: RoughCanvas): void;
}
export declare class AutoCompleteNoteOverlay extends AutoCompleteTargetOverlay {
    private _background;
    constructor(xywh: XYWH, background: string);
    render(ctx: CanvasRenderingContext2D, _rc: RoughCanvas): void;
}
export declare class AutoCompleteFrameOverlay extends AutoCompleteTargetOverlay {
    private _strokeColor;
    constructor(xywh: XYWH, strokeColor: string);
    render(ctx: CanvasRenderingContext2D, _rc: RoughCanvas): void;
}
export declare class AutoCompleteShapeOverlay extends Overlay {
    private _shape;
    constructor(xywh: XYWH, type: TARGET_SHAPE_TYPE, options: Options, shapeStyle: ShapeStyle);
    render(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
}
export declare function nextBound(type: Direction, curShape: ShapeElementModel, elements: ShapeElementModel[]): Bound;
export declare function getPosition(type: Direction): {
    startPosition: [number, number];
    endPosition: [number, number];
};
export declare function isShape(element: unknown): element is ShapeElementModel;
export declare function capitalizeFirstLetter(str: string): string;
export declare function createEdgelessElement(edgeless: EdgelessRootBlockComponent, current: ShapeElementModel | NoteBlockModel, bound: Bound): string;
export declare function createShapeElement(edgeless: EdgelessRootBlockComponent, current: ShapeElementModel | NoteBlockModel, targetType: TARGET_SHAPE_TYPE): string;
export {};
//# sourceMappingURL=utils.d.ts.map