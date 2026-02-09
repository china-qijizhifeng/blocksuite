import type { Config, Drawable, OpSet, Options, ResolvedOptions } from './core.js';
import { RoughGenerator } from './generator.js';
import type { Point } from './geometry.js';
export declare class RoughSVG {
    get generator(): RoughGenerator;
    private gen;
    private svg;
    constructor(svg: SVGSVGElement, config?: Config);
    private fillSketch;
    draw(drawable: Drawable): SVGGElement;
    getDefaultOptions(): ResolvedOptions;
    opsToPath(drawing: OpSet, fixedDecimalPlaceDigits?: number): string;
    line(x1: number, y1: number, x2: number, y2: number, options?: Options): SVGGElement;
    rectangle(x: number, y: number, width: number, height: number, options?: Options): SVGGElement;
    ellipse(x: number, y: number, width: number, height: number, options?: Options): SVGGElement;
    circle(x: number, y: number, diameter: number, options?: Options): SVGGElement;
    linearPath(points: Point[], options?: Options): SVGGElement;
    polygon(points: Point[], options?: Options): SVGGElement;
    arc(x: number, y: number, width: number, height: number, start: number, stop: number, closed?: boolean, options?: Options): SVGGElement;
    curve(points: Point[], options?: Options): SVGGElement;
    path(d: string, options?: Options): SVGGElement;
}
//# sourceMappingURL=svg.d.ts.map