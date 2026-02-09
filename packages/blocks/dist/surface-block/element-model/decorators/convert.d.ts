import type { SurfaceElementModel } from '../base.js';
/**
 * The convert decorator is used to convert the property value before it's
 * set to the Y map.
 *
 * Note:
 * 1. This decorator function will not execute in model initialization.
 * @param fn
 * @returns
 */
export declare function convert<V, T extends SurfaceElementModel>(fn: (propValue: V, instance: T) => unknown): (_: unknown, context: ClassAccessorDecoratorContext) => ClassAccessorDecoratorResult<T, V>;
export declare function convertProps(propName: string | symbol, propValue: unknown, receiver: unknown): unknown;
//# sourceMappingURL=convert.d.ts.map