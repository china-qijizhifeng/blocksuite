import { z } from 'zod';
type MappedZodLiterals<T extends readonly z.Primitive[]> = {
    readonly [K in keyof T]: z.ZodLiteral<T[K]>;
};
export declare function createZodUnion<T extends readonly []>(values: T): z.ZodNever;
export declare function createZodUnion<T extends readonly [z.Primitive]>(values: T): z.ZodLiteral<T[0]>;
export declare function createZodUnion<T extends readonly [z.Primitive, z.Primitive, ...z.Primitive[]]>(values: T): z.ZodUnion<MappedZodLiterals<T>>;
export {};
//# sourceMappingURL=zod.d.ts.map