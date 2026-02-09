import type { SurfaceElementModel } from '../base.js';
export declare function getDeriveProperties(prop: string | symbol, propValue: unknown, receiver: SurfaceElementModel): Record<string, unknown> | null;
export declare function updateDerivedProp(derivedProps: Record<string, unknown> | null, receiver: SurfaceElementModel): void;
/**
 * The derive decorator is used to derive other properties' update when the
 * decorated property is updated through assignment in the local.
 *
 * Note:
 * 1. The first argument of the function is the new value of the decorated property
 *    before the `convert` decorator is called.
 * 2. The decorator function will execute after the decorated property has been updated.
 * 3. The decorator function will not execute during model creation.
 * 4. The decorator function will not execute if the decorated property is updated through
 *    the Y map. That is to say, if other peers update the property will not trigger this decorator
 * @param fn
 * @returns
 */
export declare function derive<V, T extends SurfaceElementModel>(fn: (propValue: any, instance: T) => Record<string, unknown>): (_: unknown, context: ClassAccessorDecoratorContext) => ClassAccessorDecoratorResult<SurfaceElementModel<import("../base.js").IBaseProps>, V>;
//# sourceMappingURL=derive.d.ts.map