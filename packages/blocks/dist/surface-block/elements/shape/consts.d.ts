import type { StrokeStyle } from '../../consts.js';
export declare enum ShapeType {
    Rect = "rect",
    Triangle = "triangle",
    Ellipse = "ellipse",
    Diamond = "diamond"
}
export declare enum SHAPE_TEXT_FONT_SIZE {
    SMALL = 12,
    MEDIUM = 20,
    LARGE = 28,
    XLARGE = 36
}
export interface GeneralShapeOptions {
    x: number;
    y: number;
    width: number;
    height: number;
    strokeWidth: number;
    strokeColor: string;
    fillColor: string;
    strokeStyle: StrokeStyle;
    radius?: number;
}
export declare const FILL_COLORS: readonly ["--affine-palette-transparent", "--affine-palette-shape-yellow", "--affine-palette-shape-orange", "--affine-palette-shape-red", "--affine-palette-shape-magenta", "--affine-palette-shape-purple", "--affine-palette-shape-blue", "--affine-palette-shape-teal", "--affine-palette-shape-green", "--affine-palette-shape-black", "--affine-palette-shape-grey", "--affine-palette-shape-white"];
export declare const DEFAULT_SHAPE_FILL_COLOR: "--affine-palette-shape-yellow";
export declare const FillColorsSchema: import("zod").ZodUnion<readonly [import("zod").ZodLiteral<"--affine-palette-transparent">, import("zod").ZodLiteral<"--affine-palette-shape-yellow">, import("zod").ZodLiteral<"--affine-palette-shape-orange">, import("zod").ZodLiteral<"--affine-palette-shape-red">, import("zod").ZodLiteral<"--affine-palette-shape-magenta">, import("zod").ZodLiteral<"--affine-palette-shape-purple">, import("zod").ZodLiteral<"--affine-palette-shape-blue">, import("zod").ZodLiteral<"--affine-palette-shape-teal">, import("zod").ZodLiteral<"--affine-palette-shape-green">, import("zod").ZodLiteral<"--affine-palette-shape-black">, import("zod").ZodLiteral<"--affine-palette-shape-grey">, import("zod").ZodLiteral<"--affine-palette-shape-white">]>;
export declare const STROKE_COLORS: readonly ["--affine-palette-transparent", "--affine-palette-line-yellow", "--affine-palette-line-orange", "--affine-palette-line-red", "--affine-palette-line-magenta", "--affine-palette-line-purple", "--affine-palette-line-blue", "--affine-palette-line-teal", "--affine-palette-line-green", "--affine-palette-line-black", "--affine-palette-line-grey", "--affine-palette-line-white"];
export declare const DEFAULT_SHAPE_STROKE_COLOR: "--affine-palette-line-yellow";
export declare const DEFAULT_SHAPE_TEXT_COLOR: "--affine-palette-line-black";
export declare const StrokeColorsSchema: import("zod").ZodUnion<readonly [import("zod").ZodLiteral<"--affine-palette-transparent">, import("zod").ZodLiteral<"--affine-palette-line-yellow">, import("zod").ZodLiteral<"--affine-palette-line-orange">, import("zod").ZodLiteral<"--affine-palette-line-red">, import("zod").ZodLiteral<"--affine-palette-line-magenta">, import("zod").ZodLiteral<"--affine-palette-line-purple">, import("zod").ZodLiteral<"--affine-palette-line-blue">, import("zod").ZodLiteral<"--affine-palette-line-teal">, import("zod").ZodLiteral<"--affine-palette-line-green">, import("zod").ZodLiteral<"--affine-palette-line-black">, import("zod").ZodLiteral<"--affine-palette-line-grey">, import("zod").ZodLiteral<"--affine-palette-line-white">]>;
//# sourceMappingURL=consts.d.ts.map