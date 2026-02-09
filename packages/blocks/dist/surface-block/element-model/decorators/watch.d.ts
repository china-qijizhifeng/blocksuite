import type { SurfaceElementModel } from '../base.js';
type WatchFn<T extends SurfaceElementModel = SurfaceElementModel> = (oldValue: unknown, instance: T, local: boolean) => void;
/**
 * The watch decorator is used to watch the property change of the element.
 * You can thinks of it as a decorator version of `elementUpdated` slot of the surface model.
 */
export declare function watch<V, T extends SurfaceElementModel>(fn: WatchFn<T>): (_: unknown, context: ClassAccessorDecoratorContext) => ClassAccessorDecoratorResult<SurfaceElementModel<import("../base.js").IBaseProps>, V>;
export declare function initializeWatchers(prototype: unknown, receiver: SurfaceElementModel): void;
export {};
//# sourceMappingURL=watch.d.ts.map