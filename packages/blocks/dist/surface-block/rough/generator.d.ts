import type { Config, Drawable, OpSet, Options, PathInfo, ResolvedOptions } from './core.js';
import type { Point } from './geometry.js';
export declare class RoughGenerator {
    private config;
    defaultOptions: ResolvedOptions;
    constructor(config?: Config);
    private _o;
    private _d;
    private fillSketch;
    line(x1: number, y1: number, x2: number, y2: number, options?: Options): Drawable;
    rectangle(x: number, y: number, width: number, height: number, options?: Options): Drawable;
    ellipse(x: number, y: number, width: number, height: number, options?: Options): Drawable;
    circle(x: number, y: number, diameter: number, options?: Options): Drawable;
    linearPath(points: Point[], options?: Options): Drawable;
    arc(x: number, y: number, width: number, height: number, start: number, stop: number, closed?: boolean, options?: Options): Drawable;
    curve(points: Point[], options?: Options): Drawable;
    polygon(points: Point[], options?: Options): Drawable;
    path(d: string, options?: Options): Drawable;
    opsToPath(drawing: OpSet, fixedDecimals?: number): string;
    toPaths(drawable: Drawable): PathInfo[];
    static newSeed(): number;
}
//# sourceMappingURL=generator.d.ts.map