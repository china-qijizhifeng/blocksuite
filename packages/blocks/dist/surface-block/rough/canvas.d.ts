import type { Config, Drawable, Options, ResolvedOptions } from './core.js';
import { RoughGenerator } from './generator.js';
import type { Point } from './geometry.js';
export declare class RoughCanvas {
    get generator(): RoughGenerator;
    private gen;
    private canvas;
    private ctx;
    constructor(canvas: HTMLCanvasElement, config?: Config);
    private fillSketch;
    private _drawToContext;
    draw(drawable: Drawable): void;
    getDefaultOptions(): ResolvedOptions;
    line(x1: number, y1: number, x2: number, y2: number, options?: Options): Drawable;
    rectangle(x: number, y: number, width: number, height: number, options?: Options): Drawable;
    ellipse(x: number, y: number, width: number, height: number, options?: Options): Drawable;
    circle(x: number, y: number, diameter: number, options?: Options): Drawable;
    linearPath(points: Point[], options?: Options): Drawable;
    polygon(points: Point[], options?: Options): Drawable;
    arc(x: number, y: number, width: number, height: number, start: number, stop: number, closed?: boolean, options?: Options): Drawable;
    curve(points: Point[], options?: Options): Drawable;
    path(d: string, options?: Options): Drawable;
}
//# sourceMappingURL=canvas.d.ts.map