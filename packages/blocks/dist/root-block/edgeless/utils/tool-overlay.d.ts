import { DisposableGroup, Slot } from '@blocksuite/global/utils';
import type { CssVariableName } from '../../../_common/theme/css-variables.js';
import type { ShapeStyle } from '../../../surface-block/element-model/shape.js';
import { type Options, Overlay, type RoughCanvas, type XYWH } from '../../../surface-block/index.js';
import type { EdgelessRootBlockComponent } from '../edgeless-root-block.js';
export declare abstract class Shape {
    xywh: XYWH;
    type: string;
    options: Options;
    shapeStyle: ShapeStyle;
    constructor(xywh: XYWH, type: string, options: Options, shapeStyle: ShapeStyle);
    abstract draw(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
}
export declare class RectShape extends Shape {
    draw(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
}
export declare class TriangleShape extends Shape {
    draw(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
}
export declare class DiamondShape extends Shape {
    draw(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
}
export declare class EllipseShape extends Shape {
    draw(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
}
export declare class RoundedRectShape extends Shape {
    draw(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
}
export declare class ShapeFactory {
    static createShape(xywh: XYWH, type: string, options: Options, shapeStyle: ShapeStyle): Shape;
}
declare class ToolOverlay extends Overlay {
    get computedStyle(): CSSStyleDeclaration;
    protected edgeless: EdgelessRootBlockComponent;
    protected disposables: DisposableGroup;
    x: number;
    y: number;
    globalAlpha: number;
    constructor(edgeless: EdgelessRootBlockComponent);
    isTransparent(color: string): boolean;
    dispose(): void;
    render(_ctx: CanvasRenderingContext2D, _rc: RoughCanvas): void;
}
export declare class ShapeOverlay extends ToolOverlay {
    shape: Shape;
    constructor(edgeless: EdgelessRootBlockComponent, type: string, options: Options, style: {
        shapeStyle: ShapeStyle;
        fillColor: string;
        strokeColor: string;
    });
    private _getRealStrokeColor;
    private _getRealFillColor;
    render(ctx: CanvasRenderingContext2D, rc: RoughCanvas): void;
}
export declare class NoteOverlay extends ToolOverlay {
    text: string;
    backgroundColor: string;
    constructor(edgeless: EdgelessRootBlockComponent, background: CssVariableName);
    private _getOverlayText;
    private _getRealBackgroundColor;
    render(ctx: CanvasRenderingContext2D): void;
}
export declare class DraggingNoteOverlay extends NoteOverlay {
    slots: {
        draggingNoteUpdated: Slot<{
            xywh: XYWH;
        }>;
    };
    width: number;
    height: number;
    constructor(edgeless: EdgelessRootBlockComponent, background: CssVariableName);
    render(ctx: CanvasRenderingContext2D): void;
}
export {};
//# sourceMappingURL=tool-overlay.d.ts.map