import { z } from 'zod';
function createManyUnion(literals) {
    return z.union(literals.map(value => z.literal(value)));
}
/**
 * Creating Zod literal union from array
 * @example
 * const arr = [1, 2, 3] as const;
 * createUnionSchemaFromArray(arr); //  z.ZodUnion<readonly [z.ZodLiteral<1>, z.ZodLiteral<2>, z.ZodLiteral<3>]>
 *
 * const arr = ['a', 'b', 'c'] as const;
 * createUnionSchemaFromArray(arr); // z.ZodUnion<readonly [z.ZodLiteral<"a">, z.ZodLiteral<"b">, z.ZodLiteral<"c">]>
 */
export function createZodUnion(values) {
    if (values.length > 1) {
        return createManyUnion(values);
    }
    if (values.length === 1) {
        return z.literal(values[0]);
    }
    return z.never();
}
//# sourceMappingURL=zod.js.map