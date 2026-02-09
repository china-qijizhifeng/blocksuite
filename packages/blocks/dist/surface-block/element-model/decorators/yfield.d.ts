import type { SurfaceElementModel } from '../base.js';
export declare function getYFieldPropsSet(target: unknown): Set<string | symbol>;
export declare function yfield<V, T extends SurfaceElementModel>(fallback?: V): (target: ClassAccessorDecoratorTarget<T, V>, context: ClassAccessorDecoratorContext) => ClassAccessorDecoratorResult<T, V>;
//# sourceMappingURL=yfield.d.ts.map